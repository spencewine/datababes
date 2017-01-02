import {combineReducers} from 'redux'
import babyReducer from './baby-reducer'
import parentReducer from './parent-reducer'


console.log("IN ROOT REDUCER")
export default combineReducers({
  baby: babyReducer,
  parent: parentReducer

})
