import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_NEW", payload: fetchResults }),
});

function NewReleasesTabContent(props) {
  const { newRelease } = props.songs;
  const [newReleases, setNewReleases] = useState([]);
  const [newReleasesLoaded, setNewReleasesLoaded] = useState(false);

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

  const startNew = async () => {
    setNewReleases((await fetchAlbumDataHandler("playlist/63141574?limit=40")).splice(0, 15));
    setNewReleasesLoaded(true);

    props.storeFetch(newReleases);
  };

  const startFromState = async () => {
    await setNewReleases(newRelease);
    setNewReleasesLoaded(true);
  };

  React.useEffect(() => {
    if (newRelease && newRelease.length !== 0) {
      startFromState();
    } else {
      startNew();
    }
  }, []);

  useEffect(() => {
    if (newRelease && newRelease.length !== 0) {
      startFromState();
    } else {
      startNew();
    }
  }, [newRelease]);

  return (
    <div className="tab-pane fade show active" id="new-releases" role="tabpanel" aria-labelledby="new-releases-tab">
      <h2 className="mb-4 pb-2">#New Releases</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>The best new releases</h3>
        </div>
        <div id="popular-albums-container" className="mb-0 mb-xl-4">
          <div id="best-new-releases-row" className="row mb-0 mb-xl-4">
            {newReleasesLoaded ? (
              newReleases.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewReleasesTabContent);
