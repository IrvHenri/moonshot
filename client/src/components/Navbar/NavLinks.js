import "./NavLinks.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useAuth } from "../../context/AuthContext";

const NavLinks = ({ toggle, setToggle }) => {
  const {user, setUser} = useAuth()
  const signOut = () => {
    setUser("");
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
        {user ? (
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
