import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const [events, setEvents] = useState([
    { title: "mario", id: 1 },
    { title: "khalil", id: 2 },
    { title: "John", id: 3 }
  ])
  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(event => event.id !== id)
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "The Area"
  return (
    <div className="App">
      <Title title="Duck Ninja" subtitle={subtitle} />
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>)}

      {showEvents && <EventList handleClick={handleClick} events={events}></EventList>}
      {showModal && <Modal handleClose={handleClose}>
        <h2>10% Off coupon Code!!</h2>
        <p>Use the code Ninja at the checkout</p>
      </Modal>}
      <div>
        <button onClick={() => {setShowModal(true)}}>Show Modal</button>
      </div>
    </div>
  )
}

export default App;
