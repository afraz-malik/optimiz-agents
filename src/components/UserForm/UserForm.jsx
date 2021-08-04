import React, { useState } from 'react'
import UserFormCss from './UserForm.module.scss'

// Redux
import { useDispatch } from 'react-redux'
import { AddUserAction } from '../../redux/users/users.actions'
// Notification
import toast from 'cogo-toast'

const UserForm = ({ showForm }) => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    company: '',
    phone: '',
    roles: '',
    password: '',
  })

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(AddUserAction(user))
    toast.success('Added Success fully')
    setUser({
      fname: '',
      lname: '',
      email: '',
      company: '',
      phone: '',
      roles: '',
      password: '',
    })
  }
  return (
    <form className={UserFormCss.form} onSubmit={handleSubmit}>
      <div className={UserFormCss.row}>
        <div className={UserFormCss.col}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={handleChange}
          />
        </div>
        <div className={UserFormCss.col}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={user.lname}
            onChange={handleChange}
          />
        </div>
        <div className={UserFormCss.col}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={UserFormCss.col}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className={UserFormCss.col}>
          <label htmlFor="password">Passwords</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className={UserFormCss.col}>
          <label htmlFor="roles">User Roles</label>
          <select
            name="roles"
            value={user.roles ? user.roles : 'first'}
            onChange={handleChange}
          >
            <option value="first" disabled style={{ display: 'none' }}></option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="ThirdPary">ThirdPary</option>
          </select>
          {/* <input
            type="text"
            name="roles"
            autoComplete="off"
            value={user.roles}
            onChange={handleChange}
          /> */}
        </div>
      </div>
      <div className={UserFormCss.buttons}>
        <button className={UserFormCss.addbtn} type="submit">
          {' '}
          Add user
        </button>
        <button
          className={UserFormCss.cancel}
          type="button"
          onClick={() => showForm()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UserForm
