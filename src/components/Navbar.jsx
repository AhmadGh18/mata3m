import "../css/nav.css";
import { FaBars, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-500 h-100 w-100 flex justify-around">
      <Link to="/"> Page 1</Link>
      <Link to="/testhome"> Page 2</Link>
      <Link to="/home3"> Page 3</Link>
    </div>
  );
};

export default Navbar;
