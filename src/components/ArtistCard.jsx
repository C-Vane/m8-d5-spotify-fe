import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function ArtistCard({ artist }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className='col-xxl-2 mb-2 pr-3 pr-md-2 px-lg-2 fade-in'>
      <Link to={"/artist/" + artist.id}>
        <div className='album-card'>
          <img src={artist.picture_medium} className='img-fluid rounded-circle' alt='artist-art' />
          <h5>{artist.name}</h5>
          <p>{artist.nb_fan} fans</p>
        </div>
      </Link>
    </Col>
  );
}

export default ArtistCard;
