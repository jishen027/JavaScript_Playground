import { useEffect, useState, useCallback } from "react"
import './TripList.css'

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3001/trips')

  const fetchTrips = useCallback(async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setTrips(json)
    } catch (error) {
      console.log(error.message)
    }
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  return (
    <div className="trip-list">
      <p>Trip list for show all the trips in snapshot</p>
      <ul>
        {trips.map((trip, index) => (
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
