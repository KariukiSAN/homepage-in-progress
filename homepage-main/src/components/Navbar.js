
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import "./Navbar.css";
import "./Input.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="denite1.png" alt="Denitelogo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/top-categories"> Top Categories </Link>
        <Link to="/fruits-and-vegetables"> Fruits & Vegetables </Link>
        <Link to="/cold-drinks-and-juices">Cold Drinks & Juices </Link>
        <Link to="/snacks-and-munchies"> Snacks & Munchies </Link>
        <Link to="/featured-brands"> Featured Brands </Link>
      </div>
      <div className="login-cart">
      <Link to="/login" className="login"> Login </Link>
        <Link to="/cart" className="cart">
          <ShoppingCart size={32} />
          Cart
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};
