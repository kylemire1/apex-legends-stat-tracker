import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Link to="/">
      <img style={styles} src={logo} alt="" />
    </Link>
  );
};

export default Header;

const styles = {
  width: "230px"
};
