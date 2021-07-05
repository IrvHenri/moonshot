import LoggedIn from './LoggedIn'
import LoggedOut from "./LoggedOut";
import { useState } from "react";
const Portfolio = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return loggedIn ? <LoggedIn /> : <LoggedOut />;
};

export default Portfolio;
