import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import iosDevices from '../../Images/ios-devices.png'
import './Splash.css';

export default class Splash extends Component {

  render() {
    return (
      <div className='Splash'>
        <Jumbotron style={{height: '480px', marginBottom: '150px'}}>
          <h1>Manufacturing efficiency reinvented</h1>
          <p>An app that provides real time downtime monitoring and advanced data heuristics for improved efficiency</p>
        </Jumbotron>
        <Jumbotron style={{marginBottom: '40px'}}>
          <h1>Stats</h1>
          <p>Access data and get real time statistics on downtime</p>
        </Jumbotron>
        <div className='graphs infoGraphic'>
          <div>
            <div className='graphHeader'>
              <p className='graphTitle'>Line 1</p>
              <p className='graphAverage'>Average: 22%</p>
            </div>
            <ul className='graphsList'>
              <li>
                <p className='graphTime'>48 Minutes</p>
                <div style={{height: '40px'}}>
                  <p>10%</p>
                </div>
                <p>Machine 1</p>
              </li>
              <li>
                <p className='graphTime'>4 Hours</p>
                <div style={{height: '200px'}}>
                  <p>50%</p>
                </div>
                <p>Machine 2</p>
              </li>
              <li>
                <p className='graphTime'>3 Hours 12 Minutes</p>
                <div style={{height: '160px'}}>
                  <p>40%</p>
                </div>
                <p>Machine 3</p>
              </li>
              <li>
                <p className='graphTime'>2 Hours 24 Minutes</p>
                <div style={{height: '120px'}}>
                  <p>30%</p>
                </div>
                <p>Machine 4</p>
              </li>
              <li>
                <p className='graphTime'>2 Hours 48 Minutes</p>
                <div style={{height: '140px'}}>
                  <p>35%</p>
                </div>
                <p>Machine 5</p>
              </li>
              <li>
                <p className='graphTime'>1 Hour 36 Minutes</p>
                <div style={{height: '80px'}}>
                  <p>20%</p>
                </div>
                <p>Machine 6</p>
              </li>
              <li>
                <p className='graphTime'>4 Hours 48 Minutes</p>
                <div style={{height: '240px'}}>
                  <p>60%</p>
                </div>
                <p>Machine 7</p>
              </li>
            </ul>
          </div>
        </div>
        <Jumbotron style={{marginTop: '300px'}}>
          <h1>Availability</h1>
          <p>Available on iPhone and iPad as well as Android devices</p>
        </Jumbotron>
        <div className='iosDevices infoGraphic'>
          <img src={iosDevices} />
        </div>
        <Jumbotron style={{display: 'flex', flexDirection: 'column', marginTop: '200px', marginBottom: '200px'}}>
          <h1>Pricing</h1>
          <p>$50 per line</p>
          <p>We cover the costs of the devices</p>
          <p>See more</p>
        </Jumbotron>
      </div>
    )
  }
}
