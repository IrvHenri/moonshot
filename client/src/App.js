import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CurrencyTable from "./components/Currencies/index";
import CoinDetail from "./components/CoinDetail";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/currencies" component={CurrencyTable} />
          <Route path="/currencies/:id" component={CoinDetail} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
