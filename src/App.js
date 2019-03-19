import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Axefax from './components/Axefax/Axefax'
import * as routes from './constants/routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="main">
          
            <Switch>
              <Route 
                exact path={routes.HOME}
                component={() => <Home />} 
              />

              <Route 
                path={routes.RESUME}
                component={() => <Resume />} 
              />

              <Route 
                path={routes.ABOUT}
                component={() => <About />} 
              />

              <Route 
                path={routes.CONTACT}
                component={() => <Contact />} 
              />

              <Route 
                path={routes.PORTFOLIO}
                component={() => <Portfolio />} 
              />

              <Route 
                path={routes.AXEFAX}
                component={() => <Axefax />} 
              />
            </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;
