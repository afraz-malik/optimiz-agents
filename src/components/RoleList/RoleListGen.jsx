import React, { useState } from 'react'
import RoleListCss from './RoleList.module.scss'
// Redux
import { useDispatch } from 'react-redux'
import { DeleteRoleAction } from '../../redux/roles/roles.actions'
// Components
import EditRoleBox from '../EditRoleBox/EditRoleBox'

const RoleListGen = ({ role, index }) => {
  const { roleName, roles } = role
  const dispatch = useDispatch()
  const [editBox, setEditBox] = useState(false)
  const toggleEditBox = () => {
    setEditBox(!editBox)
  }
  const manageDelete = () => {
    const result = window.confirm('Are you sure you want to delete?')
    if (result) {
      dispatch(DeleteRoleAction(index))
    }
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{roleName}</td>
      <td>
        <div className={RoleListCss.tags}>
          {roles.manageAccounts === true ? <span> Manage Acounts </span> : null}
          {roles.manageAccountsUser === true ? (
            <span> Manage Accounts Users </span>
          ) : null}
          {roles.accountManager === true ? (
            <span> Account Manager </span>
          ) : null}
          {roles.createUsers === true ? <span> Create Users </span> : null}
          {roles.deleteUsers === true ? <span> Delete Users </span> : null}
          {roles.performance === true ? <span> Performance </span> : null}
          {roles.analytics === true ? <span> Analytics</span> : null}
          {roles.compaigns === true ? <span> Compaigns </span> : null}
          {roles.clients === true ? <span> Clients</span> : null}
          {roles.publishers === true ? <span> Publishers</span> : null}
        </div>
      </td>
      <td>
        <div className={RoleListCss.actions}>
          <img alt="" src="images/edit.svg" onClick={() => toggleEditBox()} />
          <img alt="" src="images/delete.svg" onClick={() => manageDelete()} />
          {editBox ? (
            <EditRoleBox
              toggleEditBox={toggleEditBox}
              role={role}
              index={index}
            />
          ) : null}
        </div>
      </td>
    </tr>
  )
}

export default RoleListGen
