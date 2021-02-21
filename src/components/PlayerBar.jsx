/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
function PlayerBar(props) {
  let [tracks, setTracks] = useState([]);
  let [song, setSong] = useState(0);
  useEffect(() => {
    setTracks(props.currentSong.tracks);
    setSong(props.currentSong.song);
  }, [props]);

  if (props.location.pathname.includes("/login") || props.location.pathname.includes("/signup")) {
    return <div></div>;
  }
  return (
    <>
      <section id='player'>
        <div className='track-nav center'>
          <div id='player-album-info' className='d-flex justify-content-start align-items-center'>
            <div
              className='player-cover-img'
              style={{
                backgroundImage: `url(${props.currentSong.cover || tracks[0].album.cover || "http://placecorgi.com/260/180"})`,
              }}
            ></div>
            <div className='song-title-info'>
              <div id='player-song-name' className='song-title-small'>
                {tracks[song] ? tracks[song].title : "Really Love (feat. Craig Da...)"}
              </div>
              <div id='player-artist-name' className='song-artist-small artist'>
                {tracks[song] ? tracks[song].artist.name : "Ksi, Craig David, Digital Farm Animals"}
              </div>
            </div>
          </div>
          <div className='player d-flex flex-column justify-content-center align-items-center'>
            <div className='buttons w-100 center'>
              <i className='fas fa-random'></i>

              <button id='player-pre' onClick={() => (song > 0 ? setSong(song--) : setSong(tracks.length))}>
                <i className='fas fa-step-backward'></i>
              </button>

              <button id='player-play'>
                <i id='play_img' className='fa fa-play'></i>
              </button>

              <button id='player-next' onClick={() => (song < tracks.length ? setSong(song++) : setSong(0))}>
                <i className='fas fa-step-forward'></i>
              </button>
              <i className='fas fa-redo'></i>
            </div>
            <div className='controls d-flex align-items-center'>
              <div className='track-time-current'>00:00</div>
              <input id='player-duration-bar' className='level' type='range' min='0' max='100' />
              <div className='track-time-to-finish'>00:30</div>
            </div>
          </div>
          <div className='volume'>
            <i id='volume-icon' className='fa fa-volume-off mr-3'></i>
            <input type='range' min='0' max='100' />
          </div>
        </div>
      </section>
    </>
  );
}

export default connect(mapStateToProps)(PlayerBar);
