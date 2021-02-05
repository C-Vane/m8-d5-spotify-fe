import React from "react";
import { Alert } from "react-bootstrap";

function ArtistsTabContent() {
  return (
    <div className="library-albums tab-pane show fade active" id="artists">
      <div id="library-albums-row" className="row flip-in-hor-bottom">
        {/* Content to be added */}
        <Alert variant="danger">Artists selected</Alert>
      </div>
    </div>
  );
}

export default ArtistsTabContent;
