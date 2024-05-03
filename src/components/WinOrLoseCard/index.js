import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const lostImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const wonOrLoseImage = isWon ? wonImage : lostImage
  const playerScore = isWon ? 'Best Score' : 'Score'
  const isWonOrLost = isWon ? 'You Won' : 'You Lose'
  return (
    <div className="wonOrLose-container">
      <img src={wonOrLoseImage} className="wonOrLose-img" alt="win or lose" />
      <div className="details-section">
        <h1 className="winOrLose-title">{isWonOrLost}</h1>
        <p className="score-description">{playerScore}</p>
        <p className="display-score">{score}/12</p>
        <button
          className="play-again-btn"
          onClick={onClickPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
