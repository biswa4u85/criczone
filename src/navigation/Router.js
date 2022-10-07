import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layouts from "../pages/Layouts";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cms from "../pages/Cms";
import Category from "../pages/Category";
import Page404 from "../pages/Page404";
import LiveScore from "../pages/LiveScore";
import Search from "../pages/Search";
import ScoreBoard from "../pages/ScoreBoard";


function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:pId" element={<Details />} />
          <Route path="/cms/:Id" element={<Cms />} />
          <Route path="/cat/:Id" element={<Category />} />
          <Route path="/live-score" element={<LiveScore />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/match-details/:name" element={<ScoreBoard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers