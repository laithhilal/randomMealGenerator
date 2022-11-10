import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
function Nav() {
  return (
    <div className='nav'>
      <div className='nav-heading'>
          <h1>Meals<span>App</span></h1>
      </div>
      <div className='nav-links'>
        <ul>
            <Link to='/'><li>Random</li></Link>
            <Link to ='/search'><li>Search</li></Link>
            <Link to='/categories'><li>Categories</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav