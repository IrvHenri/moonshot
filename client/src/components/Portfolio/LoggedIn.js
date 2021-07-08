import { useState } from "react"
import PortfolioDashboard from "./PortfolioDashboard";
const LoggedIn = ({user}) => {
  const [userHasPortfolio, setUserHasPortfolio] = useState(user.portfolio.coins.length > 0) // Gonna change this, this is just for testing
  return userHasPortfolio 
  ? 
  //View My Portfolio
  <PortfolioDashboard setUserHasPortfolio={setUserHasPortfolio}/>
  :
  //Create A New Portfolio
  <div className="portfolio-jumbo">
  <article className="portfolio-signup-article">
    <h3>Create A Model Portfolio!</h3>
    <p>
      There's no better way to get started investing. Create a model portfolio to start practicing today!
    </p>
    <div className="portfolio-signup-links">
      <button className='create-portfolio-btn' onClick={() => setUserHasPortfolio(true)}>
        Create your Portfolio
      </button>
    </div>
  </article>
</div>
}

export default LoggedIn