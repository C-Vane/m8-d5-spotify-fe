import React from "react";

function AlbumPageTrack({ track }) {
  return (
    <div className="track-wrap d-flex justify-content-between align-items-start">
      <i className="fas fa-music"></i>
      <div className="track-info">
        <h6 className="mb-1">{track.title}</h6>
        <p>{track.artist.name}</p>
      </div>
      <p>{track.duration}</p>
    </div>
  );
}

export default AlbumPageTrack;
