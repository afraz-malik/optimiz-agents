import React, { useState } from 'react'
import DatabaseCss from './Database.module.scss'
import EditBox from '../EditBox/EditBox'
import { DeleteClientAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'
const TableGen = ({ client, index }) => {
  const dispatch = useDispatch()
  const [editBox, setEditBox] = useState(false)
  const toggleEditBox = () => {
    setEditBox(!editBox)
  }
  const manageDelete = () => {
    const result = window.confirm('Are you sure you want to delete?')
    if (result) {
      dispatch(DeleteClientAction(index))
    }
  }
  return (
    <tr>
      <td>
        {client.fname} {client.lname}
      </td>
      <td>{client.company}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <div className={DatabaseCss.actions}>
          <img alt="" src="/images/edit.svg" onClick={() => toggleEditBox()} />
          <img alt="" src="/images/delete.svg" onClick={() => manageDelete()} />
          {editBox ? (
            <EditBox
              toggleEditBox={toggleEditBox}
              client={client}
              index={index}
              title="Edit Client Detail"
            />
          ) : null}
        </div>
      </td>
    </tr>
  )
}
export const NumberGen = ({ counter }) => {
  return <div className={DatabaseCss.numbers}>{counter}</div>
}
export default TableGen
