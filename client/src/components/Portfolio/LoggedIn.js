import { useState } from "react"
import sampleGraph from "../../images/sample-graph.jpg";

const LoggedIn = () => {
  const [userHasPortfolio, setUserHasPortfolio] = useState(false) // Gonna change this, this is just for testing
  return userHasPortfolio 
  ? 
  <div>Logged In!</div> 
  :
  <div className="portfolio-jumbo">
  <article className="portfolio-signup-article">
    <h1>Create A Model Portfolio!</h1>
    <h3>Moonshot Portfolio tracker</h3>
    <p>
      Track Crypto Assets and stay up to date with the performance of your
      investments. Profits, losses and portfolio valuations, we've got you
      covered.
    </p>
    <div className="portfolio-signup-links">
      <button onClick={() => setUserHasPortfolio(true)}>Create your Portfolio Today</button>
    </div>
  </article>
  <article className="portfolio-graph-article">
    <img src={sampleGraph} alt="sample graph" />
  </article>
</div>
}

export default LoggedIn