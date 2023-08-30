import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slicer'

const store=configureStore({
reducer:{
  count:userReducer,
  value:userReducer
}
})
export default store;