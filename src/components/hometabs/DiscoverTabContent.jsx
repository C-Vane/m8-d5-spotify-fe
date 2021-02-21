import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_TRENDING", payload: fetchResults }),
});

function DiscoverTabContent(props) {
  const [tracksForYou, setTracksForYou] = useState([]);
  const [tracksForyouLoaded, setTracksForYouLoaded] = useState(false);
  const [playlistsForYou, setPlaylistsForYou] = useState([]);
  const [playlistsForYouLoaded, setPlaylistsForYouLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const fetchAlbumDataHandler = async (endp) => {
    const data = await getFunction("/music" + endp);
    if (data.length > 0) {
      setMessage("");
      return data.splice(0, 10);
    } else {
      setMessage("Sign up or Log in  to litsen to music");
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
      {message.length < 1 ? (
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
      ) : (
        <h3 className=' mt-3 text-center'>{message}</h3>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverTabContent);
