import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import songs from "../reducers/songs";
import currentSong from "../reducers/currentSong";
import user from "../reducers/user";
import thunk from "redux-thunk";
import currentAlbum from "../reducers/currentAlbum";
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  songs: {
    trending: [],
    podcast: [],
    moodsAndGenres: [],
    newRelease: [],
    discover: [],
  },
  currentSong: {
    cover: "http://placecorgi.com/260/180 ",
    tracks: [],
    song: 0,
  },
  currentAlbum: {},
  user: {
    playlist: [],
    _id: "",
    img: "",
    surname: "",
    name: "",
    email: "",
    username: "",
    createdAt: "",
    updatedAt: "",
  },
};

const rootReducer = combineReducers({
  songs: songs,
  currentAlbum: currentAlbum,
  currentSong: currentSong,
  user: user,
});
export default function configureStore() {
  return createStore(rootReducer, initialState, composedEnhancer(applyMiddleware(thunk)));
}
