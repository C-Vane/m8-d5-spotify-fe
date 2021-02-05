import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Search from "./components/Search";
import YourLibrary from "./components/YourLibrary";
import AlbumPage from "./components/AlbumPage";
import PlayerBar from "./components/PlayerBar";
import SingInPage from "./components/SingInPage";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <Router>
      {/* <Redirect to="/home" /> */}
      <SingInPage />
      {/* <Route path="/" component={Navigation} />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/library" component={YourLibrary} />
      <Route path="/album/" component={AlbumPage} />
      <Route path="/" component={PlayerBar} />
      <Route path="/artist/:id" component={ArtistPage} /> */}
    </Router>
  );
}

export default App;
