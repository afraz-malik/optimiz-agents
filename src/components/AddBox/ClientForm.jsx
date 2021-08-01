import React, { useState } from 'react'
import AddBoxCss from './AddBox.module.scss'

// Redux
import { useDispatch } from 'react-redux'
import { AddClientAction } from '../../redux/actions'
// Notification
import toast from 'cogo-toast'

const ClientForm = ({ showForm }) => {
  const dispatch = useDispatch()

  const [client, setClient] = useState({
    fname: '',
    lname: '',
    email: '',
    company: '',
    phone: '',
    userRoles: '',
    password: '',
  })

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(AddClientAction(client))
    toast.success('Added Success fully')
    setClient({
      fname: '',
      lname: '',
      email: '',
      company: '',
      phone: '',
      userRoles: '',
      password: '',
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={AddBoxCss.row}>
        <div className={AddBoxCss.col}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={client.fname}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={client.lname}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={client.company}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            value={client.phone}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="userRoles">User Roles</label>
          <input
            type="text"
            name="userRoles"
            autoComplete="current-password"
            value={client.userRoles}
            onChange={handleChange}
          />
        </div>
        <div className={AddBoxCss.col}>
          <label htmlFor="password">Passwords</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={client.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={AddBoxCss.buttons}>
        <button className={AddBoxCss.addbtn} type="submit">
          {' '}
          Add Client
        </button>
        <button
          className={AddBoxCss.cancel}
          type="button"
          onClick={() => showForm()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ClientForm
