import React, { useContext } from 'react';
import './Navbar.css';
import { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_item from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className='navbar navbar-expand-lg fixed-top bg-white p-0'>
      <div className='container-fluid'>
        <img src={logo} alt='' />
        <p className='navbar-brand'>TRUZ</p>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mx-auto'>
            <li
              onClick={() => {
                setMenu('shop');
              }}
            >
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                SHOP
              </Link>
              {menu === 'shop' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('mens');
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/mens'
              >
                MEN
              </Link>
              {menu === 'mens' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('womens');
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/womens'
              >
                WOMEN
              </Link>
              {menu === 'womens' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('handcrafts');
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/handcrafts'
              >
                HANDCRAFT
              </Link>
              {menu === 'handcrafts' ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className='nav-login-cart align-item-end'>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/cart'>
            <img src={cart_item} alt='' />
          </Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </nav>
  );
};
