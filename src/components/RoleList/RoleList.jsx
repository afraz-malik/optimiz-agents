import React, { useState } from 'react'
import RoleListCss from './RoleList.module.scss'
import { connect } from 'react-redux'
import RoleListGen from './RoleListGen'

const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
})
const RoleList = ({ toggleState, roles }) => {
  const [state, setState] = useState({ searchValue: '', pageNumber: 1 })
  const handleSearch = (event) => {
    setState({ ...state, searchValue: event.target.value })
  }
  const handlePage = (value) => {
    if (value === 'back') {
      if (state.pageNumber !== 1) {
        setState({ ...state, pageNumber: state.pageNumber - 1 })
      }
      return
    }
    if (value === 'forward') {
      if (state.pageNumber < totalPages) {
        setState({ ...state, pageNumber: state.pageNumber + 1 })
      }
      return
    }
    setState({ ...state, pageNumber: value })
  }
  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(state.searchValue.toLowerCase())
  )
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  const rowsPerPage = 5
  let totalPages
  const currentPageData = paginate(filteredRoles, rowsPerPage, state.pageNumber)
  if (filteredRoles.length === 0) {
    totalPages = 1
  } else {
    totalPages = Math.ceil(filteredRoles.length / rowsPerPage)
  }
  if (state.pageNumber > totalPages) setState({ ...state, pageNumber: 1 })
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
            onChange={handleSearch}
            value={state.searchValue}
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
            {currentPageData.map((role, j) => (
              <RoleListGen key={j} index={j} role={role} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={RoleListCss.pages}>
        <div className={RoleListCss.back} onClick={() => handlePage('back')}>
          &lt;
        </div>
        {[...Array(totalPages)].map((i, j) => (
          <NumberGen
            key={j}
            counter={j + 1}
            handlePage={handlePage}
            pageNumber={state.pageNumber}
          />
        ))}
        <div
          className={RoleListCss.front}
          onClick={() => handlePage('forward')}
        >
          &gt;
        </div>
      </div>
    </div>
  )
}
const NumberGen = ({ counter, handlePage, pageNumber }) => {
  return (
    <div
      className={RoleListCss.numbers}
      onClick={() => handlePage(counter)}
      style={
        counter === pageNumber
          ? { background: ' #e14eca', color: 'white' }
          : null
      }
    >
      {counter}
    </div>
  )
}

export default connect(mapStateToProps)(RoleList)
