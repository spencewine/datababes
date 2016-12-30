import {RECEIVE_PARENT} from '../constants'


const initialParentState = {
  parent: {},



}

export default function(state = initialParentState, action){
console.log('Parent REducer')
const newState = Object.assign({}, state)

   switch (action.type){

     case RECEIVE_PARENT:
     newState.parent = action.parent;

     break;




     default:
     return state

   }
   return newState

}
