import React from "react";
import { Link } from "react-router-dom";

import "../../sass/main.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__banner" to="/">
        RPG World
      </Link>
    </div>
  );
};

export default Header;
