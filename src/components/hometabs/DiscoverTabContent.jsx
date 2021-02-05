import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";

function DiscoverTabContent() {
  const [tracksForYou, setTracksForYou] = useState([]);
  const [tracksForyouLoaded, setTracksForYouLoaded] = useState(false);

  const [playlistsForYou, setPlaylistsForYou] = useState([]);
  const [playlistsForYouLoaded, setPlaylistsForYouLoaded] = useState(false);

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
    setTracksForYou((await fetchAlbumDataHandler("playlist/2249258602?limit=30")).splice(0, 10));
    setTracksForYouLoaded(true);
    setPlaylistsForYou(await fetchAlbumDataHandler("chart"));
    setPlaylistsForYouLoaded(true);
  };

  React.useEffect(() => {
    start();
  }, []);

  return (
    <div className="tab-pane fade show active" id="discover" role="tabpanel" aria-labelledby="discover-tab">
      <h2 className="mb-4 pb-2">#Discover</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Tracks just for you</h3>
        </div>
        <div id="tracks-for-you-container" className="mb-0 mb-xl-4">
          <div id="tracks-for-you-row" className="row mb-0 mb-xl-4">
            {tracksForyouLoaded ? (
              tracksForYou.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
          <h3>Playlists just for you</h3>
        </div>
        <div id="playlists-for-you-container" className="mb-0 mb-xl-4">
          <div id="playlists-for-you-row" className="row mb-0 mb-0 mb-xl-4">
            {playlistsForYouLoaded ? (
              playlistsForYou
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

export default DiscoverTabContent;
