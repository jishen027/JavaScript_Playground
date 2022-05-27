import { useRef, useState } from 'react';
import './NewEventForm.css'



export default function NewEventForm({ addEvent }) {
  const title = useRef()
  const date = useRef()
  const [location, setLocation] = useState('manchester')

  const resetForm = () => {
    title.current.value = ''
    date.current.value = ''
    setLocation('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form action="" className='new-event-form' onSubmit={handleSubmit}>
      <label >
        <span>Event Title: </span>
        <input type="text"
          ref={title}
        />
      </label>
      <label>
        <span>Event Date: </span>
        <input type="date"
          ref={date}
        />
      </label>

      <label>
        <span>Event location</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
      <p onClick={resetForm}>reset the form</p>
    </form>
  )
}
