import {combineReducers} from 'redux'
import baby from './baby-reducer'
import parent from './parent-reducer'


console.log("IN ROOT REDUCER")
export default combineReducers({
  baby,
  parent,
  //reducer: reducer
})
