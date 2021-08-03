import { editUser, deleteUser } from './users.stateHandlers'

const initialUserState = {
  users: [
    {
      fname: 'Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: 'Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: 'Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
  ],
}
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return Object.assign({}, state, {
        users: [...state.users, action.payload],
      })
    }
    case 'EDIT_USER': {
      const newUser = editUser(
        state.users,
        action.payload.newUser,
        action.payload.index
      )
      return { ...state, users: newUser }
    }
    case 'DELETE_USER': {
      const newUser = deleteUser(state.users, action.payload)
      return { ...state, users: newUser }
    }
    default:
      return state
  }
}
