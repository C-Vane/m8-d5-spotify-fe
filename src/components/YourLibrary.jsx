import React from "react";
import PlaylistsTabContent from "./librarytabs/PlaylistsTabContent";
import PodcastsTabContent from "./librarytabs/PodcastsTabContent";
import ArtistsTabContent from "./librarytabs/ArtistsTabContent";
import AlbumsTabContent from "./librarytabs/AlbumsTabContent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function YourLibrary() {
  const [currentActiveLink, setCurrentActiveLink] = React.useState("Playlists");

  const activeLinkHandler = (el) => {
    setCurrentActiveLink(el.target.innerText);
  };

  return (
    <Router>
      <aside id="your-library">
        <div className="your-library-container">
          <div className="top-wrapper mb-5 d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
            <h2 className="d-inline-block pr-3 mr-4">Your Library</h2>
            <div className="your-library-nav">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <Link
                    to="/library/playlists"
                    className={currentActiveLink === "Playlists" ? "nav-link active" : "nav-link"}
                    id="playlists-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="playlists"
                    aria-selected="true"
                    onClick={activeLinkHandler}
                  >
                    Playlists
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/library/podcasts"
                    className={currentActiveLink === "Podcasts" ? "nav-link active" : "nav-link"}
                    id="podcasts-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="podcasts"
                    aria-selected="false"
                    onClick={activeLinkHandler}
                  >
                    Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/library/artists"
                    className={currentActiveLink === "Artists" ? "nav-link active" : "nav-link"}
                    id="artists-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="artists"
                    aria-selected="false"
                    onClick={activeLinkHandler}
                  >
                    Artists
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/library/albums"
                    className={currentActiveLink === "Albums" ? "nav-link active" : "nav-link"}
                    id="albums-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="albums"
                    aria-selected="false"
                    onClick={activeLinkHandler}
                  >
                    Albums
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-wrapper swing-in-top-fwd">
            {/* INSERT BROWSE CARDS HERE */}
            <div className="tab-content" id="myTabContent">
              <Route path="/library/playlists" exact component={PlaylistsTabContent} />
              <Route path="/library/podcasts" exact component={PodcastsTabContent} />
              <Route path="/library/artists" exact component={ArtistsTabContent} />
              <Route path="/library/albums" exact component={AlbumsTabContent} />
            </div>
          </div>
        </div>
      </aside>
    </Router>
  );
}

export default YourLibrary;
