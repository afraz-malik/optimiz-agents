import React, { useState } from 'react'
import RoleListCss from './RoleList.module.scss'

const RoleList = () => {
  const [searchField, setSearchField] = useState({ value: '' })
  const handleChange = (event) => {
    setSearchField({ ...searchField, value: event.target.value })
  }
    return( 
        <div className={RoleListCss.container}>
          <div className={RoleListCss.add}>
            <div className={RoleListCss.text}>
              <h2>Role List </h2>
            </div>
            <div
              className={RoleListCss.button}
            >
              <button>Add Role </button>
            </div>
          </div>
          <div className={RoleListCss.action}>
        <div className={RoleListCss.search}>
          <img alt="" src="images/search2.svg" />
          <input
            type="text"
            placeholder="Search for usernames, company..."
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
                {/* {filteredData.map((data, j) => (
                  <TableGen key={j} title={title} index={j} data={data} />
                ))} */}
              </tbody>
            </table>
          </div>
          <div className={RoleListCss.pages}>
            <div className={RoleListCss.back}>&lt;</div>
            {/* {[...Array(3)].map((i, j) => (
              <NumberGen key={j} counter={j + 1} />
            ))} */}
            <div className={RoleListCss.front}>&gt;</div>
          </div>
        </div>
    )
}
export default RoleList