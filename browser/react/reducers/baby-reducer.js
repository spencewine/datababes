import {RECEIVE_BABY, RECEIVE_DIAPERS, RECEIVE_WEIGHT, RECEIVE_FEEDING, RECEIVE_HEIGHT, RECEIVE_SLEEP} from '../constants'


const initialBabyState = {
  baby: {},
  diapers: [],
  weight: [],
  height: [],
  feeding: [],
  sleep: []

}

export default function(state = initialBabyState, action){
console.log('BABY REducer')
const newState = Object.assign({}, state)

   switch (action.type){

     case RECEIVE_BABY:
     newState.baby = action.baby;
     newState.diapers = action.diapers
     newState.weight = action.weight;
     newState.height = action.height;
     newState.feeding = action.feeding;
     newState.sleep = action.sleep

     break;




     default:
     return state

   }
   return newState

}
