import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Splash from '../Components/Splash/Splash'
import Contact from '../Components/Contact/Contact'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

class Router extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.App.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
