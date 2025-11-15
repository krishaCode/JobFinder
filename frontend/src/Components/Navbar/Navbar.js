import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav className="flex-center navbar">
      <div className="container flex-center">
        <ul className="flex-center nav-list">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/jobs">Jobs</Link></li>
          <li><Link className="nav-link" to="/postjob">Post Jobs</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar