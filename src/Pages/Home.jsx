import React from "react";
import Footer from "../Components/Footer";
import Floatingtext from "../Components/Home/Floatingtext";
import Gridproduct from "../Components/Home/Gridproduct";
import Header from "../Components/Home/Header";
import Productlist from "../Components/Home/Productlist";

function Home() {
  return (
    <div>
      <Header />
      <Productlist />
      <Floatingtext />
      <Gridproduct />
      <Footer />
    </div>
  );
}

export default Home;
