import "./Productlist.css";
import React from "react";
import { Link } from "react-router-dom";

function Productlist() {
  let productData = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-2_823x.jpg?v=1650308562",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-4_360x.jpg?v=1650308562",
      head: "Textile Drop Earrings | Houndstooth",
      price: 25,
      category: "New",
      date: 2018,
      tag: "Bestselling",
      availability: true,
      id: 9,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800012-2__19471_493x.jpg?v=1645116158",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800012-3__94518_493x.jpg?v=1645116160",
      head: "Minimal Circle Rhinestone Anklet",
      price: 19,
      category: "bracelets",
      date: 2018,
      tag: "bestselling",
      availability: true,
      id: 10,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__70321_493x.jpg?v=1645115635",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__31041_493x.jpg?v=1645115637",
      head: "Thin and Thin Chain Bracelet(18K)",
      price: 24,
      category: "bracelets",
      date: 2021,
      tag: "Featured",
      availability: false,
      id: 11,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300002-2__23761_493x.jpg?v=1645110224",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300001-3__08167_360x.jpg?v=1645110216",
      head: "Maryland Crab Earrings (18K & 24K)",
      price: 18,
      category: "earrings",
      date: 2018,
      tag: "bestselling",
      availability: false,
      id: 12,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010200826-C-1__83187_493x.jpg?v=1652369565",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010200826-C-3__07211_360x.jpg?v=1652369565",
      head: "Rhinestone Wing Earrings",
      price: 14,
      category: "earrings",
      date: 2018,
      tag: "bestselling",
      availability: false,
      id: 13,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100535-2__75509_493x.jpg?v=1645114230",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100535-4__11921_360x.jpg?v=1645114232",
      head: "Boss Status Bar Earrings (14K)",
      price: 16,
      category: "earrings",
      date: 2022,
      tag: "Featured",
      availability: false,
      id: 14,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401019-7-2_823x.jpg?v=1645728794",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401019-7-3_823x.jpg?v=1645728794",
      head: "Braided Ring",
      price: 14,
      category: "Rings",
      date: 2022,
      tag: "Bestselling",
      availability: true,
      id: 15,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401010-7-2__72676_823x.jpg?v=1645116401",
      hovimage:
        "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401010-7-3__37928_823x.jpg?v=1645116399",
      head: "Bridge Ring",
      price: 14,
      category: "Rings",
      date: 2022,
      tag: "Bestselling",
      availability: true,
      id: 16,
    },
  ];

  return (
    <div id="main_container1">
      {productData.map((e) => (
        <div id="card_container">
          <div id="image_container">
            <img id="image" src={e.image} />
          </div>
          <div id="details_continer"></div>
          <Link id="heading">{e.head}</Link>
          <p>${e.price}.00</p>
        </div>
      ))}
    </div>
  );
}

export default Productlist;
