import React from "react";
import { Alert } from "react-bootstrap";

function AlbumsTabContent() {
  return (
    <div className="library-albums tab-pane show fade active" id="albums">
      <div id="library-albums-row" className="row flip-in-hor-bottom">
        {/* Generate cards here */}
        <Alert variant="success">Albums selected</Alert>
      </div>
    </div>
  );
}

export default AlbumsTabContent;
