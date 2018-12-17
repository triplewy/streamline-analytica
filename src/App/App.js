import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSessionLogin } from './App.operations'
import Navbar from '../Components/Navbar/Navbar'
import Router from '../Router/Router'
import Footer from '../Components/Footer/Footer'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.sessionLogin()
  }

  render() {
    return (
      <Router />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionLogin: () => dispatch(fetchSessionLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
