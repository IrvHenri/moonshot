import "./Navbar.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false) //We'll change this later, just a temp way to toggle for now
  return <nav>
    <ul>
      <li>Home</li>
      <li>Prices</li>
      <li>Portfolio</li>
      {loggedIn ? <li>Log Out</li> : <li>Log in</li>}
    </ul>
  </nav>
}

export default Navbar