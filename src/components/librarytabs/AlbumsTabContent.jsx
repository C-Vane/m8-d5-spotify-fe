import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";
import HomeAlbumCard from "../HomeAlbumCard";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
function AlbumsTabContent(props) {
  const [playlist, setPlaylist] = useState([]);
  const fetchData = async (data) => {
    let albums = [];
    let response = {};
    for (let i = 0; i < data.length; i++) {
      response = await getFunction("/music/album?query=" + data[i]);
      albums = [...albums, response];
    }
    console.log(albums);
    setPlaylist(albums);
  };
  useEffect(() => {
    fetchData(props.user.playlist);
  }, [props.user.playlist]);

  return (
    <div className='library-albums tab-pane show fade active' id='albums'>
      <div id='library-albums-row' className='row flip-in-hor-bottom'>
        {playlist.length > 0 ? playlist.map((album) => <HomeAlbumCard album={{ album: album }} />) : <Alert variant='success'>Albums selected</Alert>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsTabContent);
