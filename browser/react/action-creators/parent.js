import {RECEIVE_PARENT} from '../constants'
import axios from 'axios'



export const receiveParent = (parentObj) =>({
  type: RECEIVE_PARENT,
  parent: parentObj


})



export const getParentById = parentId => {
  return dispatch => {

    axios.get(`/api/parent/${parentId}`)
      .then(results => {
        console.log("THIS IS RESULTS", results.data)
        dispatch(receiveParent(results.data));
      })
      .catch(function(err){
        console.log(err)
      })
  };
};
