import { useState } from "react"
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3001/trips')
  const { data: trips, isPending, error } = useFetch(url)

  return (
    <div className="trip-list">
      <p>Trip list for show all the trips in snapshot</p>
      {isPending && <div>Loading trips</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map((trip, index) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
            <p>{trip.loc}</p>
          </li>
        ))}
      </ul>

      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3001/trips?loc=europe')}>europe trips</button>
        <button onClick={() => setUrl('http://localhost:3001/trips')}>all trips</button>
      </div>
    </div>
  )
}
