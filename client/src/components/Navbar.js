import "./Navbar.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true) //We'll change this later, just a temp way to toggle for now
  const [active, setActive] = useState(null);
  const signOut = () => {
    setLoggedIn(false)
  }
  return <nav className='navbar'>
    <div className='nav-left'>
    <h1 className='nav-logo'>Moonshot</h1>
    <div className='nav-links'>
      <Link to="/">Home</Link>
      <Link to="/prices">Prices</Link>
      <Link to="/portfolio">My Portfolio</Link>
      {loggedIn ? <Link to='/' onClick={signOut}>Sign Out</Link> : <Link to="/login">Log In</Link>}
    </div>
    </div>
    <div className='nav-right'>
      <input type='text'/>
      <button>Search</button>
    </div>
    <div className='burger'>
      <span>---</span>
      <span>---</span>
      <span>---</span>
    </div>
  </nav>
}

export default Navbar