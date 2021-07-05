import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-logo">Moonshot</h1>
      </div>
      <div className="nav-right">
        <NavLinks toggle={toggle} setToggle={setToggle} />
      </div>
      <div onClick={() => setToggle((prev) => !prev)} className="burger">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
