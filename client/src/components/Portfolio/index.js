import LoggedIn from './LoggedIn'
import LoggedOut from "./LoggedOut";
import { useAuth } from "../../context/AuthContext";

const Portfolio = () => {
  const {user} = useAuth()
  return user ? <LoggedIn user={user} /> : <LoggedOut />;
};

export default Portfolio;
