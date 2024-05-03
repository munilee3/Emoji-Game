import './index.css'

const NavBar = props => {
  const {isGameOver, topScore, currentScore} = props
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="title-text">Emoji Game</h1>
        </div>
        {isGameOver && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
