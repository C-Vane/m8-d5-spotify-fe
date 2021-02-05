import React from "react";

function DiscoverTabContent() {
  return (
    <div className="tab-pane fade show active" id="discover" role="tabpanel" aria-labelledby="discover-tab">
      <h2 className="mb-4 pb-2">#Discover</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Tracks just for you</h3>
        </div>
        {/* TRACKS MADE JUST FOR YOU */}
        <div id="tracks-for-you-container" className="mb-0 mb-xl-4">
          <div id="tracks-for-you-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* TRACKS MADE FOR YOU X CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Playlists just for you</h3>
        </div>
        {/* PLAYLISTS FOR YOUR X ALBUMS */}
        <div id="playlists-for-you-container" className="mb-0 mb-xl-4">
          <div id="playlists-for-you-row" className="row mb-0 mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* PLAYLISTS FOR YOUR X COLLAPSE CONTAINER */}
        <div className="collapse" id="dynamic-duos">
          <div className="expand-section">
            <div id="playlists-for-you-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverTabContent;
