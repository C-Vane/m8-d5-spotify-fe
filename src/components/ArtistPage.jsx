import React from "react";
import TrackList from "./TrackList";
import HomeAlbumCard from "./HomeAlbumCard";
import ArtistCard from "./ArtistCard";

function ArtistPage(props) {
  const [artistID, setArtistID] = React.useState(props.match.params.id);
  const [artistData, setArtistData] = React.useState({});
  const [relatedArtists, setRelatedArtists] = React.useState([]);
  const [trackList, setTracklist] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const fetchArtistDataHandler = async (endpoint) => {
    const API_HOST = "deezerdevs-deezer.p.rapidapi.com";
    const API_KEY = "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc";
    const API_BASE_URL = "https://rapidapi.p.rapidapi.com";
    try {
      const response = await fetch(`${API_BASE_URL}/artist/${endpoint}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });
      if (response.ok) {
        const data = await response.json();

        const responseTracks = await fetch(`${API_BASE_URL}/artist/${endpoint}/top?limit=25`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        });
        if (responseTracks.ok) {
          const trackList = await responseTracks.json();
          setTracklist(trackList.data);
        }
        const responseAlbums = await fetch(`${API_BASE_URL}/artist/${endpoint}/albums`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        });
        if (responseAlbums.ok) {
          const albums = await responseAlbums.json();
          setAlbums(albums.data);
        }

        const relatedArtists = await fetch(`${API_BASE_URL}/artist/${endpoint}/related`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        });
        if (relatedArtists.ok) {
          const related = await relatedArtists.json();
          setRelatedArtists(related.data);
        }

        setArtistData(data);
      }
    } catch (e) {
      console.error(`API ERROR : ${e.message}`);
    }
  };
  const playMusic = () => {};

  React.useEffect(() => {
    fetchArtistDataHandler(artistID);
  }, []);

  React.useEffect(() => {
    setArtistID(props.match.params.id);
    fetchArtistDataHandler(artistID);
    setPage(1);
  }, [artistID, props.match.params.id]);
  return (
    <aside id="artist-page">
      <div id="artist-container" style={{ minHeight: "100vh" }}>
        <div
          className="jumbotron jumbotron-fluid album-art-jumbotron mb-4"
          style={{ backgroundImage: `url(${artistData.picture_big})` }}
        >
          <div className="container text-center">
            <h1 className="display-4 pb-5">{artistData.name}</h1>
            <button className="btn btn-play" onClick={playMusic}>
              PLAY
            </button>
            <button className="btn btn-follow">FOLLOW</button>
            <button className="btn btn-more">...</button>
          </div>
        </div>
        <div className="container artist-links mt-5">
          <ul>
            <li className={page === 1 ? "first-li" : ""}>
              <a onClick={() => setPage(2)}>OVERVIEW</a>
            </li>
            <li className={page === 2 ? "first-li" : ""} onClick={() => setPage(2)}>
              RELATED ARTISTS
            </li>
            <li className={page === 3 ? "first-li" : ""} onClick={() => setPage(3)}>
              ABOUT
            </li>
          </ul>
        </div>
        <div
          className="album-wrapper d-flex flex-column flex-lg-row align-items-start align-items-lg-center"
          className={page === 1 ? "d-block" : "d-none"}
        >
          <div className="container albums-container">
            <h2>Top Tracks</h2>
            <div id="artist-album-row" className="row mb-4">
              {/* Generate cards here  */}
              <div
                className="right-wrapper col d-flex flex-column justify-content-center align-items-start mt-5"
                style={{ height: "50vh", overflowY: "scroll" }}
              >
                <div id="track-row" className="w-100 mt-5">
                  {trackList &&
                    trackList.length > 0 &&
                    trackList.map((track, index) => (
                      <TrackList key={index} index={index} allTracks={trackList} track={track} />
                    ))}
                </div>
              </div>
            </div>
            <h2>Albums</h2>
            <div id="artist-album-row" className="row">
              {/* Generate cards here  */}
              {albums && albums.length > 1 && albums.map((album, index) => <HomeAlbumCard key={index} album={{ album: album }} />)}
            </div>
            <div className="container albums-container">
              <h2>Related Artists</h2>
              <div id="artist-album-row" className="row mb-4">
                {/* Generate cards here  */}
                <div className="right-wrapper col d-flex flex-column justify-content-center align-items-start mt-5">
                  <div className="w-100 mt-5 row">
                    {relatedArtists &&
                      relatedArtists.length > 0 &&
                      relatedArtists.map((artist, index) => <ArtistCard artist={artist} key={index} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="album-wrapper d-flex flex-column flex-lg-row align-items-start align-items-lg-center"
          className={page === 2 ? "d-block" : "d-none"}
        ></div>
        <div
          className="album-wrapper d-flex flex-column flex-lg-row align-items-start align-items-lg-center"
          className={page === 3 ? "d-block" : "d-none"}
        ></div>
      </div>
    </aside>
  );
}

export default ArtistPage;
