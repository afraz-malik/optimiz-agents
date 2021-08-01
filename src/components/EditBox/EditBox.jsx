import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import EditBoxCss from './EditBox.module.scss'
import { EditClientAction } from '../../redux/actions'

const EditBox = ({ toggleEditBox, client, index, title }) => {
  const dispatch = useDispatch()
  const [newClient, setNewClient] = useState(client)
  const handleChange = (event) => {
    setNewClient({ ...newClient, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(EditClientAction({ newClient, index }))
    toggleEditBox()
  }
  return (
    <div className={EditBoxCss.outerbox}>
      <div className={EditBoxCss.box}>
        <div className={EditBoxCss.head}>
          <h2>{title}</h2>
        </div>
        <div className={EditBoxCss.body}>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              onChange={handleChange}
              value={newClient.fname}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              onChange={handleChange}
              value={newClient.lname}
            />

            <label>Company</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newClient.company}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={newClient.email}
            />

            <label>User Role</label>
            <input
              type="text"
              name="userRoles"
              onChange={handleChange}
              value={newClient.userRoles}
            />
            <div className={EditBoxCss.buttons}>
              <button className={EditBoxCss.addbtn} type="submit">
                {' '}
                Update
              </button>
              <button
                type="button"
                className={EditBoxCss.cancel}
                onClick={() => toggleEditBox()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditBox
