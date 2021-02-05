import React, { useState, useEffect } from "react";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { Alert, Spinner, Col } from "react-bootstrap";

function TrendingTabContent() {
  const [popularAlbums, setPopularAlbums] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [popularPlaylists, setPopularPlaylists] = useState([]);

  const [popularAlbumsLoaded, setPopularAlbumsLoaded] = useState(false);
  const [trendingNowLoaded, setTrendingNowLoaded] = useState(false);
  const [popularPlaylistsLoaded, setPopularPlaylistsLoaded] = useState(false);

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
    setPopularAlbums((await fetchAlbumDataHandler("playlist/3155776842")).splice(0, 15));
    setPopularAlbumsLoaded(true);
    setTrendingNow((await fetchAlbumDataHandler("playlist/1111142221")).splice(0, 15));
    setTrendingNowLoaded(true);
    setPopularPlaylists(await fetchAlbumDataHandler("chart"));
    setPopularPlaylistsLoaded(true);
  };

  React.useEffect(() => {
    start();
  }, []);

  return (
    <div className="tab-pane fade show active" id="trending" role="tabpanel" aria-labelledby="trending-tab">
      <h2 className="mb-4 pb-2">#Trending</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3 style={{ width: "50%" }}>Popular albums</h3>
        </div>
        <div id="popular-albums-container" className="mb-0 mb-xl-4">
          <div id="popular-albums-row" className="row mb-0 mb-xl-4">
            {popularAlbumsLoaded ? (
              popularAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
          <h3 style={{ width: "50%" }}>Trending Now</h3>
        </div>
        <div id="trending-now-albums-container" className="mb-0 mb-xl-4">
          <div id="trending-now-row" className="row mb-0 mb-0 mb-xl-4">
            {trendingNowLoaded ? (
              trendingNow
                .filter((e) => e !== undefined)
                .map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
          <h3 style={{ width: "50%" }}>Popular playlists</h3>
        </div>
        <div id="popular-playlists-container" className="mb-0 mb-xl-4">
          <div id="popular-playlists-row" className="row mb-0 mb-xl-4">
            {popularPlaylistsLoaded ? (
              popularPlaylists
                .filter((e) => e !== undefined)
                .map((playlist, index) => <HomePlaylistAlbumCard key={index} playlist={playlist} />)
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

export default TrendingTabContent;
