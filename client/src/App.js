import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import Landing from "./components/Landing";
import Cryptocurrencies from "./components/Currencies/index";
import CoinDetail from "./components/Coin/Index";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/currencies" component={Cryptocurrencies} />
          <Route path="/currencies/:id" component={CoinDetail} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
