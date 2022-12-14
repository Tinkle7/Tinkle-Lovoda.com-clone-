import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="top-bar">
        <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <hr class="hr-bar" />
      <div id="header">
        <div id="left-bar">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div id="logo-menus">
          <Link to="/">
            <div id="logo">
              <img
                id="lovoda-img"
                src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264"
                alt="lovoda-logo"
              />
            </div>
          </Link>
          <div id="menus">
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
            <Link to="/shop-all">Shop All</Link>
            <Link to="/earings">Earrings</Link>
            <Link to="/necklaces">Necklaces</Link>
            <Link to="/bracelets">Bracelets</Link>
            <Link to="/rings">Rings</Link>
            <Link to="/shop_social">Shop Special</Link>
          </div>
        </div>
        <div id="right-icons">
          <a href="javascript:void(0)">
            <i class="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="javascript:void(0)" id="login-icon">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </a>
          <a href="cart.html">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p id="total-cart-item"></p>
          </a>
        </div>
      </div>
      <hr class="hr-bar" />
      `;
    </>
  );
}

export default Navbar;
