import React, { useState } from 'react'
import RoleListCss from './RoleList.module.scss'
import { connect } from 'react-redux'
import RoleListGen from './RoleListGen'
import { NumberGen } from './RoleListGen'

const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
})
const RoleList = ({ toggleState, roles }) => {
  const [searchField, setSearchField] = useState({ value: '' })
  const handleChange = (event) => {
    setSearchField({ ...searchField, value: event.target.value })
  }
  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchField.value.toLowerCase())
  )
  return (
    <div className={RoleListCss.container}>
      <div className={RoleListCss.add}>
        <div className={RoleListCss.text}>
          <h2>Role List </h2>
        </div>
        <div className={RoleListCss.button}>
          <button onClick={() => toggleState()}>Add Role </button>
        </div>
      </div>
      <div className={RoleListCss.action}>
        <div className={RoleListCss.search}>
          <img alt="" src="images/search2.svg" />
          <input
            type="text"
            placeholder="Search for named role..."
            onChange={handleChange}
            value={searchField.value}
          />
        </div>
        <div className={RoleListCss.filter}>
          <img alt="" src="images/filter.svg" />
          <h5>Filter</h5>
        </div>
        <div className={RoleListCss.export}>
          <img alt="" src="images/export.svg" />
          <h5>Export</h5>
        </div>
      </div>
      <div className={RoleListCss.table}>
        <table>
          <thead>
            <tr>
              <th>ID #</th>
              <th>Named Role</th>
              <th>Permission</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role, j) => (
              <RoleListGen key={j} index={j} role={role} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={RoleListCss.pages}>
        <div className={RoleListCss.back}>&lt;</div>
        {[...Array(3)].map((i, j) => (
          <NumberGen key={j} counter={j + 1} />
        ))}
        <div className={RoleListCss.front}>&gt;</div>
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(RoleList)
