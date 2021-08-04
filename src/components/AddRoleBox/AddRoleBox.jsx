import React, { useState } from 'react'
import AddRoleCss from './AddRoleBox.module.scss'
import Switch from '@material-ui/core/Switch'
import { AddRoleAction } from '../../redux/roles/roles.actions'
import { useDispatch } from 'react-redux'
const AddRoleBox = ({ toggleState }) => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState({
    manageAccounts: false,
    manageAccountsUser: false,
    accountManager: false,
    createUsers: false,
    deleteUsers: false,
    performance: false,
    analytics: false,
    compaigns: false,
    clients: false,
    publishers: false,
  })
  const [box, setBox] = useState({
    admin: false,
    page: false,
    client: false,
    publisher: false,
  })
  const handleBox = (value) => {
    if (value === 'admin') setBox({ ...box, admin: !box.admin })
    if (value === 'page') setBox({ ...box, page: !box.page })
    if (value === 'client') setBox({ ...box, client: !box.client })
    if (value === 'publisher') setBox({ ...box, publisher: !box.publisher })
  }
  const handleToggle = (event) => {
    setToggle({ ...toggle, [event.target.name]: event.target.checked })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const roleName = document.getElementById('roleName').value
    dispatch(AddRoleAction({ roleName, ...toggle }))
    toggleState()
  }

  return (
    <div className={AddRoleCss.container}>
      <div className={AddRoleCss.text}>
        <h2>Add New Role</h2>
      </div>
      <form className={AddRoleCss.form} onSubmit={handleSubmit}>
        <div className={AddRoleCss.row}>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="roleName" id="roleName" required />
        </div>
        <div className={AddRoleCss.row}>
          <div className={AddRoleCss.boxmodel}>
            <div
              className={AddRoleCss.boxmodel_top}
              onClick={() => handleBox('admin')}
            >
              <h3>Admin Specific</h3>
              <img
                alt=""
                src="images/up.svg"
                style={box.admin ? { transform: 'rotate(-180deg)' } : null}
              />
            </div>
            <div
              className={AddRoleCss.boxmodel_body}
              style={box.admin ? { display: 'block' } : { display: 'none' }}
            >
              <div className={AddRoleCss.switchBox}>
                <h5>Manage Accounts</h5>
                <Switch
                  //   style={{ color: '#E14ECA' }}
                  checked={toggle.manageAccounts}
                  onChange={handleToggle}
                  name="manageAccounts"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Manage Account Users</h5>
                <Switch
                  checked={toggle.manageAccountsUser}
                  onChange={handleToggle}
                  name="manageAccountsUser"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Account Manager</h5>
                <Switch
                  checked={toggle.accountManager}
                  onChange={handleToggle}
                  name="accountManager"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Create Users</h5>
                <Switch
                  checked={toggle.createUsers}
                  onChange={handleToggle}
                  name="createUsers"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Delete Users</h5>
                <Switch
                  checked={toggle.deleteUsers}
                  onChange={handleToggle}
                  name="deleteUsers"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
          </div>
          <div className={AddRoleCss.boxmodel}>
            <div
              className={AddRoleCss.boxmodel_top}
              onClick={() => handleBox('page')}
            >
              <h3>Page Specific</h3>
              <img
                alt=""
                src="images/up.svg"
                style={box.page ? { transform: 'rotate(-180deg)' } : null}
              />
            </div>
            <div
              className={AddRoleCss.boxmodel_body}
              style={box.page ? { display: 'block' } : { display: 'none' }}
            >
              <div className={AddRoleCss.switchBox}>
                <h5>Performance</h5>
                <Switch
                  //   style={{ color: '#E14ECA' }}
                  checked={toggle.performance}
                  onChange={handleToggle}
                  name="performance"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Analytics</h5>
                <Switch
                  checked={toggle.analytics}
                  onChange={handleToggle}
                  name="analytics"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Cmpaigns</h5>
                <Switch
                  checked={toggle.compaigns}
                  onChange={handleToggle}
                  name="compaigns"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Clients</h5>
                <Switch
                  checked={toggle.clients}
                  onChange={handleToggle}
                  name="clients"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className={AddRoleCss.switchBox}>
                <h5>Publishers</h5>
                <Switch
                  checked={toggle.publishers}
                  onChange={handleToggle}
                  name="publishers"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
          </div>
          <div className={AddRoleCss.boxmodel}>
            <div
              className={AddRoleCss.boxmodel_top}
              onClick={() => handleBox('client')}
            >
              <h3>Client Specific</h3>
              <img
                alt=""
                src="images/up.svg"
                style={box.client ? { transform: 'rotate(-180deg)' } : null}
              />
            </div>
          </div>
          <div className={AddRoleCss.boxmodel}>
            <div
              className={AddRoleCss.boxmodel_top}
              onClick={() => handleBox('publisher')}
            >
              <h3>Publishers</h3>
              <img
                alt=""
                src="images/up.svg"
                style={box.publisher ? { transform: 'rotate(-180deg)' } : null}
              />
            </div>
          </div>
        </div>
        <div className={AddRoleCss.buttons}>
          <button className={AddRoleCss.addbtn} type="submit">
            Add role
          </button>
          <button
            className={AddRoleCss.cancel}
            type="button"
            onClick={() => toggleState()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRoleBox
