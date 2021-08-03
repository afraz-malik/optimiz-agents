import { editClent, deleteClient } from './clients.stateHandlers'

const initialUserState = {
  clients: [
    {
      fname: 'Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: 'Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: 'Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
  ],
}
export const clientReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'ADD_CLIENT': {
      return Object.assign({}, state, {
        clients: [...state.clients, action.payload],
      })
    }
    case 'EDIT_CLIENT': {
      const newClient = editClent(
        state.clients,
        action.payload.newClient,
        action.payload.index
      )
      return { ...state, clients: newClient }
    }
    case 'DELETE_CLIENT': {
      const newClient = deleteClient(state.clients, action.payload)
      return { ...state, clients: newClient }
    }
    default:
      return state
  }
}
