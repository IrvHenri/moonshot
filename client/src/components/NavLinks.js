import "./NavLinks.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'

const NavLinks = ({toggle, setToggle}) => {
const [loggedIn, setLoggedIn] = useState(true) //We'll change this later, just a temp way to toggle for now
const signOut = () => {
  setLoggedIn(false)
}
  return <div 
  className="nav-links" 
  onClick={() => setToggle(prev => !prev)} id={toggle ? "visible" : ""}>
    <Link to="/" className="link">Home</Link>
    <Link to="/prices" className="link">Prices</Link>
    <Link to="/portfolio" className="link">My Portfolio</Link>
    {loggedIn ? 
    <Link to='/' className="link" onClick={signOut}>Sign Out</Link> 
    : 
    <>
    <Link to="/login" className="link">Log In</Link>
    <Link to="/signup" className="link">Sign Up</Link>
    </>}
  </div>
}

export default NavLinks;