import React from 'react'
import './App.css'
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Pages
import ClientWhite from './pages/ClientWhite/ClientWhite'
import UserManagement from './pages/UserManagement/UserManagement'
import RoleList from './components/RoleList/RoleList'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <span className="linssssssssss"> Pages: </span>
        <Link className="linssssssssss1" to="/clients">
          Clients{' '}
        </Link>
        <Link className="linssssssssss2" to="/users">
          Users
        </Link>
        <Link className="linssssssssss3" to="/role-list">
          Role List
        </Link>
        <Switch>
          <Route exact path="/clients" component={ClientWhite} />
          <Route exact path="/users" component={UserManagement} />
          <Route exact path="/role-list" component={RoleList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
