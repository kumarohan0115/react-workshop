import React from 'react'
import './navbar.css'

//style by your self first in css file

const Navbar = () => {
  return (
    <div className='nav'>
      <span>Logo</span>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Services</li>
      </ul>

      <div id='srarchdiv'>
        <input type="search" />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navbar