import React from "react";

function PlayerBar() {
  return (
    <>
      <section id="player">
        <div className="track-nav center">
          <div id="player-album-info" className="d-flex justify-content-start align-items-center">
            <div className="player-cover-img"></div>
            <div className="song-title-info">
              <div id="player-song-name" className="song-title-small">
                Really Love (feat. Craig Da...)
              </div>
              <div id="player-artist-name" className="song-artist-small artist">
                Ksi, Craig David, Digital Farm Animals
              </div>
            </div>
          </div>
          <div className="player d-flex flex-column justify-content-center align-items-center">
            <div className="buttons w-100 center">
              <i className="fas fa-random"></i>

              <button id="player-pre">
                <i className="fas fa-step-backward"></i>
              </button>

              <button id="player-play">
                <i id="play_img" className="fa fa-play"></i>
              </button>

              <button id="player-next">
                <i className="fas fa-step-forward"></i>
              </button>
              <i className="fas fa-redo"></i>
            </div>
            <div className="controls d-flex align-items-center">
              <div className="track-time-current">00:00</div>
              <input id="player-duration-bar" className="level" type="range" min="0" max="100" />
              <div className="track-time-to-finish">00:30</div>
            </div>
          </div>
          <div className="volume">
            <i id="volume-icon" className="fa fa-volume-off mr-3"></i>
            <input type="range" min="0" max="100" />
          </div>
        </div>
      </section>
    </>
  );
}

export default PlayerBar;
