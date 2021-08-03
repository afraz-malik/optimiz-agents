import React from 'react'
import './App.css'
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Pages
import ClientWhite from './pages/ClientWhite/ClientWhite'
import UserManagement from './pages/UserManagement/UserManagement'
import Roles from './pages/Roles/Roles'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <span> Pages: </span>
        <Link className="a" to="/clients">
          Clients
        </Link>
        <Link className="a" to="/users">
          Users
        </Link>
        <Link className="a" to="/roles">
          Roles
        </Link>
        <Switch>
          <Route exact path="/clients" component={ClientWhite} />
          <Route exact path="/users" component={UserManagement} />
          <Route exact path="/roles" component={Roles} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
