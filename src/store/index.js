import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import songs from "../reducers/songs";
import currentSong from "../reducers/currentSong";
import user from "../reducers/user";
import thunk from "redux-thunk";
import currentAlbum from "../reducers/currentAlbum";
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  songs: { trending: [], podcast: [], moodsAndGenres: [], newRelease: [], discover: [] },
  currentSong: {
    Album: {},
    song: 0,
  },
  currentAlbum: {},
  user: {
    account: { name: "", email: "", password: "" },
    liked: [],
    playlists: [],
  },
};

const rootReducer = combineReducers({ songs: songs, currentAlbum: currentAlbum, currentSong: currentSong, user: user });
export default function configureStore() {
  return createStore(rootReducer, initialState, composedEnhancer(applyMiddleware(thunk)));
}