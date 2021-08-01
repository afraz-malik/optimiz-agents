import React, { useState } from 'react'
import DatabaseCss from './Database.module.scss'

// Components
import TableGen, { NumberGen } from './TableGen'

const Database = ({ clients, title }) => {
  const [searchField, setSearchField] = useState({ value: '' })
  const handleChange = (event) => {
    setSearchField({ ...searchField, value: event.target.value })
  }
  const filteredClients = clients.filter((client) => {
    return (
      client.fname.toLowerCase().includes(searchField.value.toLowerCase()) ||
      client.lname.toLowerCase().includes(searchField.value.toLowerCase()) ||
      client.company.toLowerCase().includes(searchField.value.toLowerCase()) ||
      client.email.toLowerCase().includes(searchField.value.toLowerCase())
    )
  })
  return (
    <div className={DatabaseCss.database}>
      <div className={DatabaseCss.top}>
        <div className={DatabaseCss.text}>
          <h3>{title}</h3>
        </div>
        <div className={DatabaseCss.gear}>
          <img alt="" src="/images/gear.svg" />
        </div>
      </div>
      <div className={DatabaseCss.action}>
        <div className={DatabaseCss.search}>
          <img alt="" src="/images/vector.svg" />
          <input
            type="text"
            placeholder="Search for usernames, company..."
            onChange={handleChange}
            value={searchField.value}
          />
        </div>
        <div className={DatabaseCss.filter}>
          <img alt="" src="/images/filter.svg" />
          <h5>Filter</h5>
        </div>
        <div className={DatabaseCss.export}>
          <img alt="" src="/images/export.svg" />
          <h5>Export</h5>
        </div>
      </div>
      <div className={DatabaseCss.table}>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>COMPANY</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, j) => (
              <TableGen key={j} index={j} client={client} />
            ))}
          </tbody>
        </table>
        <div className={DatabaseCss.pages}>
          <div className={DatabaseCss.back}>&lt;</div>
          {[...Array(3)].map((i, j) => (
            <NumberGen key={j} counter={j + 1} />
          ))}
          <div className={DatabaseCss.front}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Database
