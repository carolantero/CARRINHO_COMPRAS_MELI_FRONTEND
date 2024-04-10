import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import "./HomeLink.css";

function HomeLink() {
  return (
    <div className="home-link">
      <Link to="/">
        <MdHome className="home-link-item" />
      </Link>
    </div>
  );
}

export default HomeLink;
