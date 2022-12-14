import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const header = new Object();

  header.header_src =
    "//cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932";
  header.text = "NEW NEW NEW";
  header.small_para = "Check out the new beauties!";
  header.button_text = "Shop all";

  const { header_src, text, small_para, button_text } = header;

  return (
    <div>
      <div id="header_img">
        <img src={header_src} alt="Header Image" id="img_container" />
      </div>
      <div id="float_text">
        <div id="header_text">
          <h1 id="text_container">{text}</h1>
        </div>
        <div id="small_para">
          <p id="para_container">{small_para}</p>
        </div>
        <div id="button">
          <button id="button_container">
            <Link id="link" to="/all">
              {button_text}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
