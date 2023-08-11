import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="./workspaces/shoplevel/media/shopLevel_logo.jpg"></img>
      </div>
      <span>Elevated Fashion: Key is the ShopLevel</span>
      <div className='search'>
          <input className='search_input'>
          </input>
      </div>
      <div className='nav'>
        <div className='option'>
            <span className='greeting'>
              Hello Guest
            </span>
            <span className='signin'>
              Sign In
            </span>
        </div>
        <div className='option'>
            <span className='returns'>
              Returns
            </span>
            <span className='orders'>
              Orders
            </span>
        </div>
        <div className='option'>
            <span className='name'>
              Name
            </span>
            <span className='profile'>
              Profile
            </span>
        </div>
      </div>
    </div>
  )
}

export default Header
