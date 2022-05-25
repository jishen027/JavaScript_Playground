import './App.css';
import { useState } from 'react'
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)

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
  return (
    <div className="App">
      <Title /> 
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>)}

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index}-{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}

export default App;
