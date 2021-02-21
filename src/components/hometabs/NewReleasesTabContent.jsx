import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import HomeAlbumCard from "../HomeAlbumCard";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_NEW", payload: fetchResults }),
});

function NewReleasesTabContent(props) {
  const { newRelease } = props.songs;
  const [newReleases, setNewReleases] = useState([]);
  const [newReleasesLoaded, setNewReleasesLoaded] = useState(false);
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
    setNewReleases(await fetchAlbumDataHandler("/new"));
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
    <div className='tab-pane fade show active' id='new-releases' role='tabpanel' aria-labelledby='new-releases-tab'>
      <h2 className='mb-4 pb-2'>#New Releases</h2>
      {message.length < 1 ? (
        <div className='content-wrapper swing-in-top-fwd'>
          <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
            <h3>The best new releases</h3>
          </div>
          <div id='popular-albums-container' className='mb-0 mb-xl-4'>
            <div id='best-new-releases-row' className='row mb-0 mb-xl-4'>
              {newReleasesLoaded ? (
                newReleases.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewReleasesTabContent);
