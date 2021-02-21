import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_PODCAST", payload: fetchResults }),
});

function PodcastTabContent(props) {
  const { podcast } = props.songs;
  const [topPodcasts, setTopPodcasts] = useState([]);

  const [topPodcastsLoaded, setTopPodcastsLoaded] = useState(false);

  const [message, setMessage] = useState("");

  const fetchAlbumDataHandler = async (endp) => {
    const data = await getFunction("/music" + endp);
    if (data.length > 0) {
      setMessage("");
      return data.splice(0, 15);
    } else {
      setMessage("Sign up or Log in  to litsen to music");
    }
  };

  const startNew = async () => {
    await setTopPodcasts(await fetchAlbumDataHandler("/podcast"));
    setTopPodcastsLoaded(true);

    props.storeFetch(topPodcasts);
  };

  const startFromState = async () => {
    await setTopPodcasts(podcast);
    setTopPodcastsLoaded(true);
  };

  useEffect(() => {
    props.user._id && startNew();
  }, []);

  useEffect(() => {
    if (podcast && podcast.length !== 0) {
      startFromState();
    } else {
      startNew();
    }
  }, [podcast]);

  return (
    <div className='tab-pane fade show active' id='podcast' role='tabpanel' aria-labelledby='podcast-tab'>
      <h2 className='mb-4 pb-2'>#Podcast</h2>
      {message.length < 1 ? (
        <div className='content-wrapper swing-in-top-fwd'>
          <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
            <h3>Top podcasts</h3>
          </div>
          <div id='top-podcasts-container' className='mb-0 mb-xl-4'>
            <div id='top-podcasts-row' className='row mb-0 mb-xl-4'>
              {topPodcastsLoaded ? (
                topPodcasts.filter((e) => e !== undefined).map((playlist, index) => <HomePlaylistAlbumCard key={index} playlist={playlist} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(PodcastTabContent);
