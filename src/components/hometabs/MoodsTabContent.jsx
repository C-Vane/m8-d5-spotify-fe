import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";

function MoodsTabContent() {
  const [edmAlbums, setEdmAlbums] = useState([]);
  const [edmAlbumsLoaded, setEdmAlbumsLoaded] = useState(false);

  const [workoutAlbums, setWorkoutAlbums] = useState([]);
  const [workoutAlbumsLoaded, setWorkoutAlbumsLoaded] = useState(false);

  const [chillAlbums, setChillAlbums] = useState([]);
  const [chillAlbumsLoaded, setChillAlbumsLoaded] = useState(false);

  const fetchAlbumDataHandler = async (endpoint) => {
    try {
      const response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://api.deezer.com/${endpoint}`
      );

      const data = await response.json();
      if (!data.error) {
        if (!data.playlists) {
          let uniqueAlbums = [];
          await data.tracks.data.forEach((track) => {
            !uniqueAlbums.some((uniqueTrack) => uniqueTrack.album.id === track.album.id) && uniqueAlbums.push(track);
          });
          return uniqueAlbums;
        } else {
          return data.playlists.data;
        }
      } else {
        alert("There was an error when fetching");
      }
    } catch (e) {
      console.error(`API ERROR : ${e.message}`);
    }
  };

  const start = async () => {
    setEdmAlbums((await fetchAlbumDataHandler("playlist/4503899902?limit=30")).splice(0, 10));
    setEdmAlbumsLoaded(true);
    setWorkoutAlbums((await fetchAlbumDataHandler("playlist/1857061922?limit=30")).splice(0, 10));
    setWorkoutAlbumsLoaded(true);
    setChillAlbums((await fetchAlbumDataHandler("playlist/3338949242?limit=30")).splice(0, 10));
    setChillAlbumsLoaded(true);
  };

  React.useEffect(() => {
    start();
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      id="moods-and-genres"
      role="tabpanel"
      aria-labelledby="moods-and-genres-tab"
    >
      <h2 className="mb-4 pb-2">#Moods and Genres</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>EDM</h3>
        </div>
        <div id="edm-container" className="mb-0 mb-xl-4">
          <div id="edm-row" className="row mb-0 mb-xl-4">
            {edmAlbumsLoaded ? (
              edmAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
            ) : (
              <>
                <h5 className="d-inline-block mb-0 mr-2 ml-3" style={{ color: "white" }}>
                  Loading...
                </h5>
                <Spinner animation="border" variant="primary" disabled />
              </>
            )}
          </div>
        </div>
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Workout</h3>
        </div>
        <div id="workout-mood-albums-container" className="mb-0 mb-xl-4">
          <div id="workout-mood-row" className="row mb-0 mb-0 mb-xl-4">
            {workoutAlbumsLoaded ? (
              workoutAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
            ) : (
              <>
                <h5 className="d-inline-block mb-0 mr-2 ml-3" style={{ color: "white" }}>
                  Loading...
                </h5>
                <Spinner animation="border" variant="primary" disabled />
              </>
            )}
          </div>
        </div>
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Relax & Chill</h3>
        </div>
        <div id="chill-albums-container" className="mb-0 mb-xl-4">
          <div id="chill-mood-row" className="row mb-0 mb-xl-4">
            {chillAlbumsLoaded ? (
              chillAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
            ) : (
              <>
                <h5 className="d-inline-block mb-0 mr-2 ml-3" style={{ color: "white" }}>
                  Loading...
                </h5>
                <Spinner animation="border" variant="primary" disabled />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodsTabContent;
