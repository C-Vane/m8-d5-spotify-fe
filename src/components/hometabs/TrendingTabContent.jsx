import React from "react";
import HomeAlbumCard from "../HomeAlbumCard";
import HomePlaylistAlbumCard from "../HomePlaylistAlbumCard";
import { Alert, Spinner, Col } from "react-bootstrap";

function TrendingTabContent() {
  const fetchAlbumDataHandler = async (endpoint) => {
    const API_HOST = "deezerdevs-deezer.p.rapidapi.com";
    const API_KEY = "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc";
    const API_BASE_URL = "https://rapidapi.p.rapidapi.com";

    try {
      const response = await fetch(`${API_BASE_URL}/album/${endpoint}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      const data = await response.json();
      if (data.error) {
        return undefined;
      }
      return data;
    } catch (e) {
      console.error(`API ERROR : ${e.message}`);
    }
  };

  const fetchPlaylistDataHandler = async (endpoint) => {
    const API_HOST = "deezerdevs-deezer.p.rapidapi.com";
    const API_KEY = "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc";
    const API_BASE_URL = "https://rapidapi.p.rapidapi.com";

    try {
      const response = await fetch(`${API_BASE_URL}/playlist/${endpoint}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      const data = await response.json();
      if (data.error) {
        return undefined;
      }
      return data;
    } catch (e) {
      console.error(`API ERROR : ${e.message}`);
    }
  };

  const [popularAlbums, setPopularAlbums] = React.useState([
    "176538582",
    "11244086",
    "161984202",
    "162683632",
    "157795452",
    "137217782",
    "169236642",
    "110040592",
    "91598612",
    "122429752",
    "159826232",
    "15478674",
  ]);

  const [trendingNow, setTrendingNow] = React.useState([
    "180681412",
    "180996332",
    "178086012",
    "180983992",
    "181446752",
    "181270962",
    "179934622",
    "180450492",
    "178406382",
    "179902942",
    "179906172",
    "179682412",
  ]);

  const [popularPlaylists, setPopularPlaylists] = React.useState([
    "7237234924",
    "1060971691",
    "2350568586",
    "7588869202",
    "4383182182",
    "5673128942",
    "7188387004",
    "1406578475",
    "1307150595",
    "915487765",
    "1154685481",
    "3411272262",
  ]);

  const [popularAlbumsLoaded, setPopularAlbumsLoaded] = React.useState(false);
  const [trendingNowLoaded, setTrendingNowLoaded] = React.useState(false);
  const [popularPlaylistsLoaded, setPopularPlaylistsLoaded] = React.useState(false);

  const fetchAlbumOnLoad = async (array, nameofarray) => {
    const fetchedData = await Promise.all(array.map((e) => fetchAlbumDataHandler(e)));

    switch (nameofarray) {
      case "popularAlbums":
        setPopularAlbums(fetchedData);
        setTimeout(() => {
          setPopularAlbumsLoaded(true);
        }, 500);
        break;
      case "trendingNow":
        setTrendingNow(fetchedData);
        setTimeout(() => {
          setTrendingNowLoaded(true);
        }, 1000);
        break;
      default:
        break;
    }
  };

  const fetchPlaylistOnLoad = async (array, nameofarray) => {
    const fetchedData = await Promise.all(array.map((e) => fetchPlaylistDataHandler(e)));

    setPopularPlaylists(fetchedData);
    setTimeout(() => {
      setPopularPlaylistsLoaded(true);
    }, 1500);
  };

  React.useEffect(() => {
    fetchAlbumOnLoad(popularAlbums, "popularAlbums");
    fetchAlbumOnLoad(trendingNow, "trendingNow");
    fetchPlaylistOnLoad(popularPlaylists, "popularPlaylists");
  }, []);

  return (
    <div className="tab-pane fade show active" id="trending" role="tabpanel" aria-labelledby="trending-tab">
      <h2 className="mb-4 pb-2">#Trending</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3 style={{ width: "50%" }}>Popular albums</h3>
        </div>
        {/* POPULAR ALBUMS */}
        <div id="popular-albums-container" className="mb-0 mb-xl-4">
          <div id="popular-albums-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
            {popularAlbumsLoaded ? (
              popularAlbums
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
            {popularAlbums.filter((e) => e !== undefined).length < 12 && (
              <Col xs={12}>
                <Alert variant="danger">
                  Error, some of the content failed to load, successfully loaded{" "}
                  {trendingNow.filter((e) => e !== undefined).length} / 12 elements.
                </Alert>
              </Col>
            )}
          </div>
        </div>
        {/* POPULAR COLLAPSE CONTAINER */}
        <div className="collapse" id="popularAlbums">
          <div className="expand-section">
            <div id="popular-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
        {/* TRENDING NOW CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3 style={{ width: "50%" }}>Trending Now</h3>
        </div>
        {/* TRENDING NOW ALBUMS */}
        <div id="trending-now-albums-container" className="mb-0 mb-xl-4">
          <div id="trending-now-row" className="row mb-0 mb-0 mb-xl-4">
            {/* Generate cards here */}
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
            )}{" "}
            {trendingNow.filter((e) => e !== undefined).length < 12 && (
              <Col xs={12}>
                <Alert variant="danger">
                  Error, some of the content failed to load, successfully loaded{" "}
                  {trendingNow.filter((e) => e !== undefined).length} / 12 elements.
                </Alert>
              </Col>
            )}
          </div>
        </div>
        {/* TRENDING NOW COLLAPSE CONTAINER */}
        <div className="collapse" id="trendingNow">
          <div className="expand-section">
            <div id="trending-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
        {/* POPULAR PLAYLISTS CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3 style={{ width: "50%" }}>Popular playlists</h3>
        </div>
        {/* POPULAR PLAYLISTS ALBUMS */}
        <div id="popular-playlists-container" className="mb-0 mb-xl-4">
          <div id="popular-playlists-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
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
            {popularPlaylists.filter((e) => e !== undefined).length < 12 && (
              <Col xs={12}>
                <Alert variant="danger">
                  Error, some of the content failed to load, successfully loaded{" "}
                  {popularPlaylists.filter((e) => e !== undefined).length} / 12 elements.
                </Alert>
              </Col>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTabContent;
