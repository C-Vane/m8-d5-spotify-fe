import React from "react";
import { Route, Link } from "react-router-dom";

import TrendingTabContent from "./hometabs/TrendingTabContent";
import PodcastTabContent from "./hometabs/PodcastTabContent";
import MoodsTabContent from "./hometabs/MoodsTabContent";
import NewReleasesTabContent from "./hometabs/NewReleasesTabContent";
import DiscoverTabContent from "./hometabs/DiscoverTabContent";

function Home() {
  const [currentActiveLink, setCurrentActiveLink] = React.useState("TRENDING");

  const activeLinkHandler = (el) => {
    setCurrentActiveLink(el.target.innerText);
  };

  const activeBackgroundHandler = (string) => {
    return string.toLowerCase().split(" ").join("");
  };

  return (
    <Route
      path="/home"
      render={() => {
        return (
          <aside id="main" className={`${activeBackgroundHandler(currentActiveLink)}-bg`}>
            <div id="main-container">
              <div className="home-nav">
                <ul className="nav nav-tabs d-flex justify-content-center align-items-center" id="myTab" role="tablist">
                  <li className="nav-item">
                    <Link
                      to="/home/trending"
                      className={currentActiveLink === "TRENDING" ? "nav-link active" : "nav-link"}
                      id="trending-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="trending"
                      aria-selected="true"
                      onClick={activeLinkHandler}
                    >
                      TRENDING
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/home/podcasts"
                      className={currentActiveLink === "PODCAST" ? "nav-link active" : "nav-link"}
                      id="podcast-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="podcast"
                      aria-selected="false"
                      onClick={activeLinkHandler}
                    >
                      PODCAST
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/home/moodsandgenres"
                      className={currentActiveLink === "MOODS AND GENRES" ? "nav-link active" : "nav-link"}
                      id="moods-and-genres-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="moods and genres"
                      aria-selected="false"
                      onClick={activeLinkHandler}
                    >
                      MOODS AND GENRES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/home/newreleases"
                      className={currentActiveLink === "NEW RELEASES" ? "nav-link active" : "nav-link"}
                      id="new-releases-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="new releases"
                      aria-selected="false"
                      onClick={activeLinkHandler}
                    >
                      NEW RELEASES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/home/discover"
                      className={currentActiveLink === "DISCOVER" ? "nav-link active" : "nav-link"}
                      id="discover-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="discover"
                      aria-selected="false"
                      onClick={activeLinkHandler}
                    >
                      DISCOVER
                    </Link>
                  </li>
                </ul>
                {/* TABS CONTENT */}
                <div className="tab-content d-flex align-items-center" id="myTabContent">
                  {/* TRENDING TAB */}
                  <Route path="/home" exact component={TrendingTabContent} />
                  <Route path="/home/trending" exact component={TrendingTabContent} />

                  {/* PODCAST TAB */}
                  <Route path="/home/podcasts" component={PodcastTabContent} />

                  {/* MOODS AND GENRES TAB */}
                  <Route path="/home/moodsandgenres" component={MoodsTabContent} />

                  {/* NEW RELEASES TAB */}
                  <Route path="/home/newreleases" component={NewReleasesTabContent} />

                  {/* DISCOVER TAB */}
                  <Route path="/home/discover" component={DiscoverTabContent} />
                </div>
              </div>
            </div>
          </aside>
        );
      }}
    />
  );
}

export default Home;
