import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setCurrentSong: (Song) => dispatch({ type: "SET_CURRENT_SONG", payload: Song }),
});
function TrackList({ track, index, allTracks, setCurrentSong }) {
  return (
    <div className='track-wrap d-flex justify-content-between align-items-start p-1' onClick={() => setCurrentSong({ tracks: allTracks, song: index })}>
      <img src={track.album.cover_small} className='img-fluid rounded ' height='50px' width='50px' />
      <div className='track-info'>
        <h6 className='mb-1'>{track.title}</h6>
        <p>{track.artist.name}</p>
      </div>
      <p>
        {parseInt(track.duration / 60)}:{track.duration - parseInt(track.duration / 60) * 60}
      </p>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
