import { userReducer } from './users/users.reducers'
import { clientReducer } from './clients/clients.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReducer,
  clientReducer,
})

export default rootReducer
