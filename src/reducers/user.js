export default function (state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: { name: action.payload.name, email: action.payload.email, password: action.payload.password } };
    case "ADD_SONGS_LIKED":
      return { ...state, liked: state.liked.concat(action.payload) };
    case "REMOVE_SONGS_LIKED":
      const index = state.liked.findIndex((id) => id === action.payload);
      return { ...state, liked: [...state.liked.slice(0, index), ...state.liked.slice(index + 1)] };
    case "ADD_NEW_SONG_TO_PLAYLIST":
      return { ...state, playlist: state.playlist.concat(action.payload) };
    case "REMOVE_SONGS_FROM_PLAYLIST":
      const index = state.liked.findIndex((id) => id === action.payload);
      return { ...state, playlist: [...state.playlist.slice(0, index), ...state.playlist.slice(index + 1)] };
    default:
      return state;
  }
}
