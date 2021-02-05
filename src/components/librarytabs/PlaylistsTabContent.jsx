import React from "react";
import { Alert } from "react-bootstrap";

function PlaylistsTabContent() {
  return (
    <div className="library-albums tab-pane show fade active" id="playlists">
      <div id="library-albums-row" className="row flip-in-hor-bottom">
        {/* Content to be added */}
        <Alert variant="primary">Playlists selected</Alert>
      </div>
    </div>
  );
}

export default PlaylistsTabContent;
