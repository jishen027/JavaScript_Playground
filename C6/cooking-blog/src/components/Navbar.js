import { NavLink } from 'react-router-dom'

import Searchbar from './Searchbar'

import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to="/" className="brand">
          <h2>Cooking</h2>
        </NavLink>

        <Searchbar></Searchbar>

        <NavLink to="/create">
          Create
        </NavLink>
      </nav>
    </div>
  )
}
