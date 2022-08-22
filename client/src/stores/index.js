import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/user.reducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
