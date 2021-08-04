import React from 'react'

// Redux
import { connect } from 'react-redux'
// components
import Navbar from '../../components/Navbar/Navbar'
import AddBox from '../../components/AddBox/AddBox'
import DataBox from '../../components/DataBox/DataBox'
import Footer from '../../components/Footer/Footer'

const mapStateToProps = (state) => ({
  data: state.clientReducer.clients,
})

const ClientWhite = ({ data }) => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <AddBox title="Client" />
        <DataBox data={data} title="Client" />
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(ClientWhite)
