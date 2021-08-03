import React, { useState } from 'react'

// components
import Navbar from '../../components/Navbar/Navbar'

import RoleList from '../../components/RoleList/RoleList'
import AddRole from '../../components/AddRole/AddRole'
import Footer from '../../components/Footer/Footer'
const UserManagement = () => {
  const [state, setState] = useState(false)
  const toggleState = () => {
    setState(!state)
  }
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        {state ? (
          <AddRole toggleState={toggleState} />
        ) : (
          <RoleList toggleState={toggleState} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default UserManagement
