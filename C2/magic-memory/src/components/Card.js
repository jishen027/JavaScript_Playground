import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front-card" className="front" />
        <img
          src="/img/cover.png"
          alt="back-card"
          className='back'
          onClick={handleClick} />
      </div>
    </div>
  )
}
