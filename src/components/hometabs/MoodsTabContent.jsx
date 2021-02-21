import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_MOODS", payload: fetchResults }),
});

function MoodsTabContent(props) {
  const { moodsAndGenres } = props.songs;
  const [edmAlbums, setEdmAlbums] = useState([]);
  const [edmAlbumsLoaded, setEdmAlbumsLoaded] = useState(false);

  const [workoutAlbums, setWorkoutAlbums] = useState([]);
  const [workoutAlbumsLoaded, setWorkoutAlbumsLoaded] = useState(false);

  const [chillAlbums, setChillAlbums] = useState([]);
  const [chillAlbumsLoaded, setChillAlbumsLoaded] = useState(false);

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

  const startNew = async () => {
    setEdmAlbums(await fetchAlbumDataHandler("/edm"));
    setEdmAlbumsLoaded(true);
    setWorkoutAlbums(await fetchAlbumDataHandler("/workout"));
    setWorkoutAlbumsLoaded(true);
    setChillAlbums(await fetchAlbumDataHandler("/chill"));
    setChillAlbumsLoaded(true);

    props.storeFetch({ edmAlbums: edmAlbums });
    props.storeFetch({ workoutAlbums: workoutAlbums });
    props.storeFetch({ chillAlbums: chillAlbums });
  };

  const startFromState = async () => {
    setEdmAlbums(moodsAndGenres.edmAlbums);
    setEdmAlbumsLoaded(true);
    setWorkoutAlbums(moodsAndGenres.workoutAlbums);
    setWorkoutAlbumsLoaded(true);
    setChillAlbums(moodsAndGenres.chillAlbums);
    setChillAlbumsLoaded(true);
  };

  React.useEffect(() => {
    if (moodsAndGenres.edmAlbums && moodsAndGenres.edmAlbums.length !== 0 && moodsAndGenres.workoutAlbums.length !== 0 && moodsAndGenres.chillAlbums.length !== 0) {
      startFromState();
    } else {
      startNew();
    }
  }, []);

  useEffect(() => {
    if (moodsAndGenres.edmAlbums && moodsAndGenres.edmAlbums.length !== 0 && moodsAndGenres.workoutAlbums.length !== 0 && moodsAndGenres.chillAlbums.length !== 0) {
      startFromState();
    } else {
      startNew();
    }
  }, [moodsAndGenres]);

  return (
    <div className='tab-pane fade show active' id='moods-and-genres' role='tabpanel' aria-labelledby='moods-and-genres-tab'>
      <h2 className='mb-4 pb-2'>#Moods and Genres</h2>
      {message.length < 1 ? (
        <div className='content-wrapper swing-in-top-fwd'>
          <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
            <h3>EDM</h3>
          </div>
          <div id='edm-container' className='mb-0 mb-xl-4'>
            <div id='edm-row' className='row mb-0 mb-xl-4'>
              {edmAlbumsLoaded ? (
                edmAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
            <h3>Workout</h3>
          </div>
          <div id='workout-mood-albums-container' className='mb-0 mb-xl-4'>
            <div id='workout-mood-row' className='row mb-0 mb-0 mb-xl-4'>
              {workoutAlbumsLoaded ? (
                workoutAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
            <h3>Relax & Chill</h3>
          </div>
          <div id='chill-albums-container' className='mb-0 mb-xl-4'>
            <div id='chill-mood-row' className='row mb-0 mb-xl-4'>
              {chillAlbumsLoaded ? (
                chillAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(MoodsTabContent);
