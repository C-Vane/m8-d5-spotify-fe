import React from "react";
import { Alert } from "react-bootstrap";

function PodcastsTabContent() {
  return (
    <div className="library-albums tab-pane show fade active" id="podcasts">
      <div id="library-albums-row" className="row flip-in-hor-bottom">
        {/* Content to be added */}
        <Alert variant="warning">Podcasts selected</Alert>
      </div>
    </div>
  );
}

export default PodcastsTabContent;
