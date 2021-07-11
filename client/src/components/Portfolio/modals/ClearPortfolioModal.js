const ClearPortfolioModal = ({clearPortfolio, setClearPortfolioModalConfirm}) => {
  return <div className="modal clear-portfolio-modal">
    <h1>Clear Your Portfolio</h1>
    <h2>Are you sure? This cannot be undone</h2>
    <button onClick={clearPortfolio}>Yes</button>
    <button onClick={() => setClearPortfolioModalConfirm(false)}>No</button>
  </div>
}

export default ClearPortfolioModal;