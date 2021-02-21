export default function (state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...action.payload,
      };
    case "ADD_SONG_TO_PLAYLIST":
      return { ...state, playlist: [...action.payload] };
    case "REMOVE_SONG_FROM_PLAYLIST":
      return {
        ...state,
        playlist: [...action.payload],
      };
    default:
      return state;
  }
}
