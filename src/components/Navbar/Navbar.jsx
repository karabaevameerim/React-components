import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
         <nav>
      <div>
        <p>LookEnjoy</p>
      </div>

      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Price</li>
        <li className='icon'>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" />
            <span>Log in</span>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar