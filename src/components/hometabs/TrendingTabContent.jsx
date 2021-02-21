import React, { useState, useEffect } from "react";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getFunction } from "../CRUDFunction";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  storeFetch: (fetchResults) => dispatch({ type: "ADD_SONGS_TRENDING", payload: fetchResults }),
});

function TrendingTabContent(props) {
  const { trending } = props.songs;
  const [popularAlbums, setPopularAlbums] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [popularPlaylists, setPopularPlaylists] = useState([]);

  const [popularAlbumsLoaded, setPopularAlbumsLoaded] = useState(false);
  const [trendingNowLoaded, setTrendingNowLoaded] = useState(false);
  const [popularPlaylistsLoaded, setPopularPlaylistsLoaded] = useState(false);
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
    await setPopularAlbums(await fetchAlbumDataHandler("/popularAlbums"));
    setPopularAlbumsLoaded(true);

    await setTrendingNow(await fetchAlbumDataHandler("/new"));
    setTrendingNowLoaded(true);

    await setPopularPlaylists(await fetchAlbumDataHandler("/popularPlaylists"));
    setPopularPlaylistsLoaded(true);

    props.storeFetch({ popularAlbums: popularAlbums });
    props.storeFetch({ trendingNow: trendingNow });
    props.storeFetch({ popularPlaylists: popularPlaylists });
  };

  const startFromState = async () => {
    await setPopularAlbums(trending.popularAlbums);
    setPopularAlbumsLoaded(true);

    await setTrendingNow(trending.trendingNow);
    setTrendingNowLoaded(true);

    await setPopularPlaylists(trending.popularPlaylists);
    setPopularPlaylistsLoaded(true);
  };

  useEffect(() => {
    props.user._id && startNew();
  }, []);

  return (
    <div className='tab-pane fade show active' id='trending' role='tabpanel' aria-labelledby='trending-tab'>
      <h2 className='mb-4 pb-2'>#Trending</h2>
      {message.length < 1 ? (
        <div className='content-wrapper swing-in-top-fwd'>
          <div className='album-header-wrapper d-flex justify-content-between align-items-center'>
            <h3 style={{ width: "50%" }}>Popular albums</h3>
          </div>
          <div id='popular-albums-container' className='mb-0 mb-xl-4'>
            <div id='popular-albums-row' className='row mb-0 mb-xl-4'>
              {popularAlbumsLoaded ? (
                popularAlbums.map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
            <h3 style={{ width: "50%" }}>Trending Now</h3>
          </div>
          <div id='trending-now-albums-container' className='mb-0 mb-xl-4'>
            <div id='trending-now-row' className='row mb-0 mb-0 mb-xl-4'>
              {trendingNowLoaded && trendingNow ? (
                trendingNow.filter((e) => e !== undefined).map((album, index) => <HomeAlbumCard key={index} album={album} />)
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
            <h3 style={{ width: "50%" }}>Popular playlists</h3>
          </div>
          <div id='popular-playlists-container' className='mb-0 mb-xl-4'>
            <div id='popular-playlists-row' className='row mb-0 mb-xl-4'>
              {popularPlaylistsLoaded ? (
                popularPlaylists.filter((e) => e !== undefined).map((playlist, index) => <HomePlaylistAlbumCard key={index} playlist={playlist} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(TrendingTabContent);
