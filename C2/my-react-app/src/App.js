import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(event => event.id !== id)
    })
    console.log(id)
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
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}></NewEventForm>
      </Modal>}
      <div>
        <button onClick={() => { setShowModal(true) }}>Add New Event</button>
      </div>
    </div>
  )
}

export default App;
