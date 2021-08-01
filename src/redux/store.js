import { configureStore } from '@reduxjs/toolkit'
import { clientReducer } from '../redux/reducers'

export const store = configureStore({
  reducer: {
    clientReducer: clientReducer,
  },
})
