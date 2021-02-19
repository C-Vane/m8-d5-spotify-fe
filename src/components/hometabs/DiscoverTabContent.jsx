import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_TRENDING", payload: fetchResults }),
});

function DiscoverTabContent(props) {
  const { discover } = props.songs;
  const [tracksForYou, setTracksForYou] = useState([]);
  const [tracksForyouLoaded, setTracksForYouLoaded] = useState(false);

  const [playlistsForYou, setPlaylistsForYou] = useState([]);
  const [playlistsForYouLoaded, setPlaylistsForYouLoaded] = useState(false);

  const fetchAlbumDataHandler = async (endp) => {
    try {
      const response = await fetch(process.env.REACT_APP_BE_URL + "/music" + endp);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data) {
          return data.splice(0, 10);
        }
      } else {
        alert("There was an error when fetching");
      }
    } catch (e) {
      console.error(`API ERROR : ${e.message}`);
    }
  };

  const start = async () => {
    setTracksForYou(await fetchAlbumDataHandler("/forYou"));
    setTracksForYouLoaded(true);
    setPlaylistsForYou(await fetchAlbumDataHandler("/popularPlaylists"));
    setPlaylistsForYouLoaded(true);
  };

  React.useEffect(() => {
    start();
  }, []);

  return (
    <div className='tab-pane fade show active' id='discover' role='tabpanel' aria-labelledby='discover-tab'>
      <h2 className='mb-4 pb-2'>#Discover</h2>
      <div className='content-wrapper swing-in-top-fwd'>
        <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
          <h3>Tracks just for you</h3>
        </div>
        <div id='tracks-for-you-container' className='mb-0 mb-xl-4'>
          <div id='tracks-for-you-row' className='row mb-0 mb-xl-4'>
            {tracksForyouLoaded ? (
              tracksForYou.map((album, index) => <HomeAlbumCard key={index} album={album} />)
            ) : (
              <>
                <h5 className='d-inline-block mb-0 mr-2 ml-3' style={{ color: "white" }}>
                  Loading...
                </h5>
                <Spinner animation='border' variant='primary' disabled />
              </>
            )}
          </div>
        </div>
        <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
          <h3>Playlists just for you</h3>
        </div>
        <div id='playlists-for-you-container' className='mb-0 mb-xl-4'>
          <div id='playlists-for-you-row' className='row mb-0 mb-0 mb-xl-4'>
            {playlistsForYouLoaded ? (
              playlistsForYou.filter((e) => e !== undefined).map((playlist, index) => <HomePlaylistAlbumCard key={index} playlist={playlist} />)
            ) : (
              <>
                <h5 className='d-inline-block mb-0 mr-2 ml-3' style={{ color: "white" }}>
                  Loading...
                </h5>
                <Spinner animation='border' variant='primary' disabled />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverTabContent);
