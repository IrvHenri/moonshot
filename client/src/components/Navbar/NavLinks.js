import "./NavLinks.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const NavLinks = ({ toggle, setToggle }) => {
  const [loggedIn, setLoggedIn] = useState(true); //We'll change this later, just a temp way to toggle for now
  const signOut = () => {
    setLoggedIn(false);
  };
  return (
    <CSSTransition in={toggle} timeout={100} classNames="my-node">
      <div
        className="nav-links"
        onClick={() => setToggle((prev) => !prev)}
        id={toggle ? "visible" : undefined}
      >
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/currencies" className="link">
          Cryptocurrencies
        </Link>
        {loggedIn ? (
          <>
          <Link to="/portfolio" className="link">
            My Portfolio
          </Link>
          <Link to="/" className="link" onClick={signOut}>
            Sign Out
          </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="link">
              Log In
            </Link>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

export default NavLinks;
