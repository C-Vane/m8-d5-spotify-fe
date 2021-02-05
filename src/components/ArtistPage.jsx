import React from "react";
import TrackList from "./TrackList";
import HomeAlbumCard from "./HomeAlbumCard";

function ArtistPage(props) {
  const [artistID, setArtistID] = React.useState(props.match.params.id);
  const [artistData, setArtistData] = React.useState({});
  const [trackList, setTracklist] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
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
        const trackList = await responseTracks.json();

        const responseAlbums = await fetch(`${API_BASE_URL}/artist/${endpoint}/albums`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        });
        const albums = await responseAlbums.json();
        setAlbums(albums.data);
        console.log(albums.data);
        setTracklist(trackList.data);
        console.log(trackList);
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
  return (
    <aside id='artist-page'>
      <div id='artist-container' style={{ minHeight: "100vh" }}>
        <div className='jumbotron jumbotron-fluid album-art-jumbotron mb-4' style={{ backgroundImage: `url(${artistData.picture_big})` }}>
          <div className='container text-center'>
            <h1 className='display-4 pb-5'>{artistData.name}</h1>
            <button className='btn btn-play' onClick={playMusic}>
              PLAY
            </button>
            <button className='btn btn-follow'>FOLLOW</button>
            <button className='btn btn-more'>...</button>
          </div>
        </div>
        <div className='container artist-links mt-5'>
          <ul>
            <li className='first-li'>OVERVIEW</li>
            <li>RELATED ARTISTS</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className='album-wrapper d-flex flex-column flex-lg-row align-items-start align-items-lg-center'>
          <div className='container albums-container'>
            <h2>Top Tracks</h2>
            <div id='artist-album-row' className='row'>
              {/* Generate cards here  */}
              <div className='right-wrapper col d-flex flex-column justify-content-center align-items-start' style={{ height: "50vh", overflowY: "scroll" }}>
                <div id='track-row' className='w-100 mt-3'>
                  {trackList.length > 0 && trackList.map((track, index) => <TrackList key={index} track={track} />)}
                </div>
              </div>
            </div>
            <h2>Albums</h2>
            <div id='artist-album-row' className='row'>
              {/* Generate cards here  */}
              {albums.length > 1 && albums.map((album, index) => <HomeAlbumCard key={index} album={album} />)}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ArtistPage;
