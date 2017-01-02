  import {RECEIVE_BABY} from '../constants'


  const initialBabyState = {
    baby: {},
    diapers: [],
    weight: [],
    height: [],
    feeding: [],
    sleep: []

  }

  export default (state = initialBabyState, action)=>{
  console.log('BABY REducer')

  const newState = Object.assign({}, state)

     switch (action.type){

       case RECEIVE_BABY:
       console.log("IN RECEIVE BABY CASE")
       newState.baby = action.baby;
       newState.diapers = action.diapers
       newState.weight = action.weight;
       newState.height = action.height;
       newState.feeding = action.feeding;
       newState.sleep = action.sleep
       break;




       default:
       console.log("in Baby action returned default state", state)
        return state

     }

     console.log("in Baby action returned newState", newState)
     return newState

  }
