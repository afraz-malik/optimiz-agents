import { userReducer } from './users/users.reducers'
import { clientReducer } from './clients/clients.reducers'
import { roleReducer } from './roles/roles.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReducer,
  clientReducer,
  roleReducer,
})

export default rootReducer
