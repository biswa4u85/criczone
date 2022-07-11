import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Layouts from "../pages/Layouts";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cms from "../pages/Cms";


function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:pId" element={<Details />} />
          <Route path="/cms/:Id" element={<Cms />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers