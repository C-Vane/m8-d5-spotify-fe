import React from "react";

function NewReleasesTabContent() {
  return (
    <div className="tab-pane fade show active" id="new-releases" role="tabpanel" aria-labelledby="new-releases-tab">
      <h2 className="mb-4 pb-2">#New Releases</h2>
      <div className="content-wrapper swing-in-top-fwd">
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>The best new releases</h3>
        </div>
        {/* BEST NEW RELEASES */}
        <div id="popular-albums-container" className="mb-0 mb-xl-4">
          <div id="best-new-releases-row" className="row mb-0 mb-xl-4">
            {/* Generate cards here*/}
          </div>
        </div>
        {/* NEW ALBUMS & SINGLES CONTENT */}
        <div className="album-header-wrapper d-flex justify-content-between align-items-center">
          <h3>New albums & singles</h3>
        </div>
        {/* NEW ALBUMS & SINGLES ALBUMS */}
        <div id="new-albums-singles-container" className="mb-0 mb-xl-4">
          <div id="new-albums-singles-row" className="row mb-0 mb-0 mb-xl-4">
            {/* Generate cards here */}
          </div>
        </div>
        {/* NEW ALBUMS & SINGLESCOLLAPSE CONTAINER */}
        <div className="collapse" id="newalbums">
          <div className="expand-section">
            <div id="new-albums-singles-expand-section" className="row mb-0 mb-xl-4">
              {/* Generate cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewReleasesTabContent;
