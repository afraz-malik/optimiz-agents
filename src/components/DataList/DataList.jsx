import React from 'react'
import DataListGen from './DataListGen'
import DataListCss from './DataList.module.scss'

const DataList = ({ title, data }) => {
  return (
    <div className={DataListCss.table}>
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
          {data.map((data, j) => (
            <DataListGen key={j} title={title} index={j} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataList
