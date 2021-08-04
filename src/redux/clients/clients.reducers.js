import { editClent, deleteClient } from './clients.stateHandlers'

const initialUserState = {
  clients: [
    {
      fname: '1Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '2Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '3Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '4Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '5Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '6Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '7&Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '82Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '93Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '104Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '115Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '126Jacob',
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
