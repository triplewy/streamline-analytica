import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../Images/streamline-logo.png'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='left'>
          <Link to='/'>
            <img src={logo} />
            <p className='logoTitle'>Streamline</p>
          </Link>
        </div>
        <div className='right'>
          <Link to='/contact'>Contact Us</Link>
        </div>

      </div>
    );
  }
}

export default Navbar;
