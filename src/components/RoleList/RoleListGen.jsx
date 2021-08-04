import React, { useState } from 'react'
import RoleListCss from './RoleList.module.scss'
// Redux
import { useDispatch } from 'react-redux'
import { DeleteRoleAction } from '../../redux/roles/roles.actions'
// Components
import EditRoleBox from '../EditRoleBox/EditRoleBox'

const RoleListGen = ({ role, index }) => {
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
      <td>{role.roleName}</td>
      <td>
        <div className={RoleListCss.tags}>
          {role.manageAccounts === true ? <span> Manage Acounts </span> : null}
          {role.manageAccountsUser === true ? (
            <span> Manage Accounts Users </span>
          ) : null}
          {role.accountManager === true ? <span> Account Manager </span> : null}
          {role.createUsers === true ? <span> Create Users </span> : null}
          {role.deleteUsers === true ? <span> Delete Users </span> : null}
          {role.performance === true ? <span> Performance </span> : null}
          {role.analytics === true ? <span> Analytics</span> : null}
          {role.compaigns === true ? <span> Compaigns </span> : null}
          {role.clients === true ? <span> Clients</span> : null}
          {role.publishers === true ? <span> Publishers</span> : null}
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
export const NumberGen = ({ counter }) => {
  return <div className={RoleListCss.numbers}>{counter}</div>
}
export default RoleListGen
