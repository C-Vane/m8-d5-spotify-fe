import React from "react";

function MoodsTabContent() {
  return (
    <div
      className="tab-pane fade show active"
      id="moods-and-genres"
      role="tabpanel"
      aria-labelledby="moods-and-genres-tab"
    >
      <h2 className="mb-4 pb-2">#Moods and Genres</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>EDM</h3>
        </div>
        {/* EDM GENRE CONTENT */}
        <div id="edm-container" className="mb-0 mb-xl-4">
          <div id="edm-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* EDM GENRE COLLAPSE CONTAINER */}
        <div className="collapse" id="edm">
          <div className="expand-section">
            <div id="edm-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
        {/* WORKOUT MOOD CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Workout</h3>
        </div>
        {/* WORKOUT MOOD ALBUMS */}
        <div id="workout-mood-albums-container" className="mb-0 mb-xl-4">
          <div id="workout-mood-row" className="row mb-0 mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* WORKOUT MOOD COLLAPSE CONTAINER */}
        <div className="collapse" id="workout">
          <div className="expand-section">
            <div id="workout-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
        {/* CHILL CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Relax & Chill</h3>
        </div>
        {/* CHILL ALBUMS */}
        <div id="chill-albums-container" className="mb-0 mb-xl-4">
          <div id="chill-mood-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* CHILL COLLAPSE CONTAINER */}
        <div className="collapse" id="relax">
          <div className="expand-section">
            <div id="chill-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodsTabContent;
