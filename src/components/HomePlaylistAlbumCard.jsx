import React from "react";
import { Col } from "react-bootstrap";

function HomePlaylistAlbumCard({ playlist }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="col-xxl-2 mb-2 pr-3 pr-md-2 px-lg-2 fade-in">
      <div className="album-card">
        <img src={playlist.picture_medium} className="img-fluid" alt="album-art" />
        <h5>{playlist.title}</h5>
        <p>{playlist.description}</p>
      </div>
    </Col>
  );
}

export default HomePlaylistAlbumCard;
