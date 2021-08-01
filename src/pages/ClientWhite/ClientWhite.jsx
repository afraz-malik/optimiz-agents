import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AddBox from '../../components/AddBox/AddBox'
import Database from '../../components/Database/Database'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  clients: state.clientReducer.clients,
})

const ClientWhite = ({ clients }) => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <AddBox />
        <Database clients={clients} title="List of Clients" />
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(ClientWhite)
