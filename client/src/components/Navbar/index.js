import "./Navbar.css";
import { useContext } from "react";
import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [lightSwitch, setLightSwitch] = useState({
    checkedA: true,
    checkedB: true,
  });
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = (e) => {
    setTheme(theme === "dark" ? "light" : "dark");
    setLightSwitch({ ...lightSwitch, [e.target.name]: e.target.checked });
  };
  return (
    <nav className={`navbar ${theme === "light" ? "navbar-light" : null}`}>
      <div className="nav-left">
        <h1 className="nav-logo">Moonshot</h1>
      </div>
      <div className="nav-right">
        <NavLinks toggle={toggle} setToggle={setToggle} theme={theme} />
        {theme[0].toUpperCase() + theme.slice(1) + " Mode"}
        <Switch
          checked={lightSwitch.checkedA}
          onChange={handleThemeToggle}
          color="secondary"
          name="checkedA"
          edge="start"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
      <div onClick={() => setToggle((prev) => !prev)} className="burger">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
