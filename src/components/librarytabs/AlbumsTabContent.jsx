import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import HomeAlbumCard from "../HomeAlbumCard";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  saveCurrentSong: (currentSong) => dispatch({ type: "SET_CURRENT_SONG", payload: currentSong }),
  addToFavorite: (id) => dispatch({ type: "ADD_SONGS_LIKED", payload: id }),
  removeFromFavorite: (id) => dispatch({ type: "REMOVE_SONGS_LIKED", payload: id }),
});
function AlbumsTabContent(props) {
  return (
    <div className='library-albums tab-pane show fade active' id='albums'>
      <div id='library-albums-row' className='row flip-in-hor-bottom'>
        {props.user.liked.length > 0 ? props.user.liked.map((album) => <HomeAlbumCard album={{ album: album }} />) : <Alert variant='success'>Albums selected</Alert>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsTabContent);
