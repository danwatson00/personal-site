import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import * as routes from './constants/routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        <Switch>
          <Route 
            exact path={routes.HOME}
            component={() => <Home />} 
          />

          <Route 
            exact path={routes.RESUME}
            component={() => <Resume />} 
          />

          <Route 
            exact path={routes.ABOUT}
            component={() => <About />} 
          />

          <Route 
            exact path={routes.CONTACT}
            component={() => <Contact />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
