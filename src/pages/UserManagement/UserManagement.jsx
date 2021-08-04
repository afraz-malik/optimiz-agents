import React from 'react'

// Redux
import { connect } from 'react-redux'
// components
import Navbar from '../../components/Navbar/Navbar'
import AddBox from '../../components/AddBox/AddBox'
import DataBox from '../../components/DataBox/DataBox'
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
        <DataBox data={data} title="User" />
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(UserManagement)
