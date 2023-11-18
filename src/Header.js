import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';


function Header() {
  // if (user) {
  //   userProfile = document.getElementById('profile').innerHTML = `{user.name}`
  //   ReactDOM.render(user.name, userProfile)
  // }
  return (
    <div className='header'>
      <div className='logo'>
        <img src="/media/shopLevel_logo.jpg" alt='logo'></img>
      </div>
      <span className='d-md-block'>Elevated Fashion: Key is the ShopLevel</span>
      <div className='search'>
          <input className='search_input w-75 '>
          </input>
          <SearchIcon
          className='searchIcon'/>
      </div>
      <div className='nav'>
        <div className='option'>

            <LoginIcon className='icon'/>
            <span className='firstLine'>

              Sign In
            </span>
        </div>

        <div className='option'>

            <AccountCircleIcon className='icon'/>
            <span id='profile' className='firstLine'>
              Profile
            </span>
        </div>

        <div className='option'>

            <ShoppingBasketIcon className='icon'/>
            <span className='firstLine'>
              Orders
            </span>
        </div>
        <Link to='/checkout'>
          <div className='option' id='totalOption'>
              <span className='firstLine'>
                    Total
              </span>
              <span className='basketTotal'>125.50 €</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
