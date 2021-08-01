import React, { useState } from 'react'
import AddBoxCss from './AddBox.module.scss'
import ClientForm from './ClientForm'
const AddBox = () => {
  const [form, setform] = useState(false)
  const showForm = () => {
    setform(!form)
  }
  return (
    <div className={AddBoxCss.container}>
      <div className={AddBoxCss.add}>
        <div className={AddBoxCss.text}>
          <h2>Add New Clients</h2>
        </div>
        <div
          className={AddBoxCss.button}
          style={form ? { display: 'none' } : { display: 'block' }}
        >
          <button onClick={() => showForm()}>Add Client</button>
        </div>
      </div>
      <div style={form ? { display: 'block' } : { display: 'none' }}>
        <ClientForm showForm={showForm} />
      </div>
    </div>
  )
}

export default AddBox
