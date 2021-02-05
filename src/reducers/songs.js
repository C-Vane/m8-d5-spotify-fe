export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_SONGS_TRENDING":
      return { ...state, trending: { ...state.trending, ...action.payload } };
    case "ADD_SONGS_PODCAST":
      return { ...state, podcast: action.payload };
    case "ADD_SONGS_MOODS":
      return { ...state, moodsAndGenres: { ...state.moodsAndGenres, ...action.payload } };
    case "ADD_SONGS_NEW":
      return { ...state, newRelease: action.payload };
    case "ADD_SONGS_DISCOVER":
      return { ...state, discover: action.payload };
    default:
      return state;
  }
}
