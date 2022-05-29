import './Card.css'

export default function Card({ card, handleChoice }) {

  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div className='card'>
      <div>
        <img src={card.src} alt="front-card" className="front" />
        <img
          src="/img/cover.png"
          alt="back-card"
          className='back'
          onClick={handleClick}/>
      </div>
    </div>
  )
}
