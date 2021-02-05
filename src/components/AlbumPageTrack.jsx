import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  saveCurrentSong: (currentSong) =>
    dispatch({ type: "SET_CURRENT_SONG", payload: currentSong }),
});

function AlbumPageTrack({ track, index, trackList, saveCurrentSong, cover }) {
  const currentSong = { cover: cover, tracks: [...trackList], song: index };

  return (
    <div
      className="track-wrap d-flex justify-content-between align-items-start"
      onClick={() => saveCurrentSong(currentSong)}
    >
      {/* ONCLICK TO PLAY THE CLICKED SONG */}
      <i className="fas fa-music"></i>
      <div className="track-info">
        <h6 className="mb-1">{track.title}</h6>
        <p>{track.artist.name}</p>
      </div>
      <p>{track.duration}</p>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumPageTrack);
