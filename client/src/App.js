import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/index";
import Landing from "./components/Landing";
import Cryptocurrencies from "./components/Currencies/index";
import CoinDetail from "./components/Coin/Index";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" data-theme={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
