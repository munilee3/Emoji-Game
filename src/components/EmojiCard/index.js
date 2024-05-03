import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onEmojiClicked = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-list">
      <button className="emoji-btn" onClick={onEmojiClicked} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
