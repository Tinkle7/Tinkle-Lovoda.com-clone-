import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import New from "../Pages/New";
import Shop_All from "../Pages/Shop_All";
import Earings from "../Pages/Earings";
import Necklaces from "../Pages/Necklaces";
import Bracelets from "../Pages/Bracelets";
import Rings from "../Pages/Rings";
import Shop_social from "../Pages/Shop_social";
import All from "../Pages/All";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/new" element={<New />}>
        New
      </Route>
      <Route path="/Shop_all" element={<Shop_All />}>
        Shop All
      </Route>
      <Route path="/earings" element={<Earings />}>
        Earings
      </Route>
      <Route path="/necklaces" element={<Necklaces />}>
        Necklaces
      </Route>
      <Route path="/bracelets" element={<Bracelets />}>
        Bracelets
      </Route>
      <Route path="/rings" element={<Rings />}>
        Rings
      </Route>
      <Route path="/shop_social" element={<Shop_social />}>
        Shop_Social
      </Route>
      <Route path="/all" element={<All />}>
        Shop_Social
      </Route>
    </Routes>
  );
}

export default AllRoutes;
