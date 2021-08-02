import React from 'react'

// Redux
import { connect } from 'react-redux'
// components
import Navbar from '../../components/Navbar/Navbar'
import AddBox from '../../components/AddBox/AddBox'
import Database from '../../components/Database/Database'
import Footer from '../../components/Footer/Footer'

const mapStateToProps = (state) => ({
  data: state.userReducer.users,
})

const UserManagement = ({ data }) => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <AddBox title="User" />
        <Database data={data} title="User" />
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(UserManagement)
