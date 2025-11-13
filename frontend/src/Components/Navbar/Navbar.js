import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className="flex-center navbar">
      <div className="container flex-center">
        <ul className="flex-center nav-list">
          <li>Home</li>
          <li>Blog</li>
          <li>Project</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar