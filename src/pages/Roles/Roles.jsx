import React, { useState } from 'react'

// components
import Navbar from '../../components/Navbar/Navbar'

import RoleList from '../../components/RoleList/RoleList'
import AddRoleBox from '../../components/AddRoleBox/AddRoleBox'
import Footer from '../../components/Footer/Footer'
const Roles = () => {
  const [state, setState] = useState(false)
  const toggleState = () => {
    setState(!state)
  }
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        {state ? (
          <AddRoleBox toggleState={toggleState} />
        ) : (
          <RoleList toggleState={toggleState} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default Roles
