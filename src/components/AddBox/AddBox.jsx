import React, { useState } from 'react'
import AddBoxCss from './AddBox.module.scss'

// Components
import ClientForm from '../ClientForm/ClientForm'
import UserForm from '../UserForm/UserForm'

const AddBox = ({ title }) => {
  const [form, setform] = useState(false)
  const showForm = () => {
    setform(!form)
  }
  return (
    <div className={AddBoxCss.container}>
      <div className={AddBoxCss.add}>
        <div className={AddBoxCss.text}>
          <h2>Add New {title}</h2>
        </div>
        <div
          className={AddBoxCss.button}
          style={form ? { display: 'none' } : { display: 'block' }}
        >
          <button onClick={() => showForm()}>Add {title}</button>
        </div>
      </div>
      <div style={form ? { display: 'block' } : { display: 'none' }}>
        {title === 'Client' ? (
          <ClientForm showForm={showForm} />
        ) : (
          <UserForm showForm={showForm} />
        )}
      </div>
    </div>
  )
}

export default AddBox
