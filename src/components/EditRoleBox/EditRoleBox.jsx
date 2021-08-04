import React, { useState } from 'react'
import EditRoleBoxCss from './EditRoleBox.module.scss'
import Switch from '@material-ui/core/Switch'

// Redux
import { useDispatch } from 'react-redux'
import { EditRoleAction } from '../../redux/roles/roles.actions'

const EditRoleBox = ({ toggleEditBox, role, index }) => {
  console.log(role)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState({
    roleName: role.roleName,
    manageAccounts: role.manageAccounts,
    manageAccountsUser: role.manageAccountsUser,
    accountManager: role.accountManager,
    createUsers: role.createUsers,
    deleteUsers: role.deleteUsers,
    performance: role.performance,
    analytics: role.analytics,
    compaigns: role.compaigns,
    clients: role.clients,
    publishers: role.publishers,
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
    if (event.target.name === 'roleName') {
      setToggle({ ...toggle, [event.target.name]: event.target.value })
    } else {
      setToggle({ ...toggle, [event.target.name]: event.target.checked })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(EditRoleAction({ newRole: toggle, index }))
    toggleEditBox()
  }
  return (
    <div className={EditRoleBoxCss.outerbox}>
      <div className={EditRoleBoxCss.box}>
        <div className={EditRoleBoxCss.head}>
          <h2>Edit role</h2>
        </div>
        <div className={EditRoleBoxCss.body}>
          <form onSubmit={handleSubmit}>
            <label>Role Name</label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              onChange={handleToggle}
              value={toggle.roleName}
            />
            <div className={EditRoleBoxCss.row}>
              <div className={EditRoleBoxCss.boxmodel}>
                <div
                  className={EditRoleBoxCss.boxmodel_top}
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
                  className={EditRoleBoxCss.boxmodel_body}
                  style={box.admin ? { display: 'block' } : { display: 'none' }}
                >
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Manage Accounts</h5>
                    <Switch
                      //   style={{ color: '#E14ECA' }}
                      checked={toggle.manageAccounts}
                      onChange={handleToggle}
                      name="manageAccounts"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Manage Account Users</h5>
                    <Switch
                      checked={toggle.manageAccountsUser}
                      onChange={handleToggle}
                      name="manageAccountsUser"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Account Manager</h5>
                    <Switch
                      checked={toggle.accountManager}
                      onChange={handleToggle}
                      name="accountManager"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Create Users</h5>
                    <Switch
                      checked={toggle.createUsers}
                      onChange={handleToggle}
                      name="createUsers"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
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
              <div className={EditRoleBoxCss.boxmodel}>
                <div
                  className={EditRoleBoxCss.boxmodel_top}
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
                  className={EditRoleBoxCss.boxmodel_body}
                  style={box.page ? { display: 'block' } : { display: 'none' }}
                >
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Performance</h5>
                    <Switch
                      //   style={{ color: '#E14ECA' }}
                      checked={toggle.performance}
                      onChange={handleToggle}
                      name="performance"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Analytics</h5>
                    <Switch
                      checked={toggle.analytics}
                      onChange={handleToggle}
                      name="analytics"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Compaigns</h5>
                    <Switch
                      checked={toggle.compaigns}
                      onChange={handleToggle}
                      name="compaigns"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
                    <h5>Clients</h5>
                    <Switch
                      checked={toggle.clients}
                      onChange={handleToggle}
                      name="clients"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                  <div className={EditRoleBoxCss.switchBox}>
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
              <div className={EditRoleBoxCss.boxmodel}>
                <div
                  className={EditRoleBoxCss.boxmodel_top}
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
              <div className={EditRoleBoxCss.boxmodel}>
                <div
                  className={EditRoleBoxCss.boxmodel_top}
                  onClick={() => handleBox('publisher')}
                >
                  <h3>Publishers</h3>
                  <img
                    alt=""
                    src="images/up.svg"
                    style={
                      box.publisher ? { transform: 'rotate(-180deg)' } : null
                    }
                  />
                </div>
              </div>
            </div>
            <div className={EditRoleBoxCss.buttons}>
              <button className={EditRoleBoxCss.addbtn} type="submit">
                {' '}
                Update
              </button>
              <button
                type="button"
                className={EditRoleBoxCss.cancel}
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

export default EditRoleBox
