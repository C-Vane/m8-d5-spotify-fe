import React from "react";

function PodcastTabContent() {
  return (
    <div className="tab-pane fade show active" id="podcast" role="tabpanel" aria-labelledby="podcast-tab">
      <h2 className="mb-4 pb-2">#Podcast</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Top podcasts</h3>
        </div>
        {/* TOP PODCASTS */}
        <div id="top-podcasts-container" className="mb-0 mb-xl-4">
          <div id="top-podcasts-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* TOP PODCASTS COLLAPSE CONTAINER */}
        <div className="collapse" id="topPodcasts">
          <div className="expand-section">
            <div id="top-podcasts-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
        {/* DYNAMIC PODCAST DUOS CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>Dynamic podcast duos</h3>
        </div>
        {/* DYNAMIC PODCAST DUOS ALBUMS */}
        <div id="dynamic-duos-albums-container" className="mb-0 mb-xl-4">
          <div id="dynamic-duos-row" className="row mb-0 mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* DYNAMIC PODCAST DUOS COLLAPSE CONTAINER */}
        <div className="collapse" id="dynamicDuos">
          <div className="expand-section">
            <div id="dynamic-duos-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastTabContent;
