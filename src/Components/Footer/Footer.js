import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

export default class Footer extends Component {

  render() {
    return (
      <div className='Footer'>
        <div className='left'>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/privacy'>Privacy Policy</Link>
        </div>
        <div className='right'>
          <p>Streamlined</p>
        </div>
      </div>
    )
  }
}
