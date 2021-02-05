import React from "react";

function ArtistPage() {
  return (
    <aside id="artist-page" className="d-none">
      <div id="artist-container">
        <div className="jumbotron jumbotron-fluid album-art-jumbotron">
          <div className="container text-center">
            <h1 className="display-4 mb-5 pb-5">Artist Name</h1>
            <button className="btn btn-play">PLAY</button>
            <button className="btn btn-follow">FOLLOW</button>
            <button className="btn btn-more">...</button>
          </div>
        </div>
        <div className="container artist-links">
          <ul>
            <li className="first-li">OVERVIEW</li>
            <li>RELATED ARTISTS</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className="album-wrapper d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
          <div className="container albums-container">
            <h2>Albums</h2>
            <div id="artist-album-row" className="row">
              {/* Generate cards here  */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ArtistPage;
