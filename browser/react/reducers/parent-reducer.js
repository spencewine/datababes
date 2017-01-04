import {RECEIVE_PARENT, DELETE_BABY} from '../constants'


const initialParentState = {
  parent: {},
  babies: []

}

export default function(state = initialParentState, action){
console.log('Parent REducer')
const newState = Object.assign({}, state)

   switch (action.type){

     case RECEIVE_PARENT:
     newState.parent = action.parent;
     newState.babies = action.babies




     break;




     default:
     console.log("IN DEFAULT STATE", state)
     return state

   }
   console.log("IN NEWSTATE", newState)
   return newState

}
