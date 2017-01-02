import {RECEIVE_PARENT} from '../constants'
import axios from 'axios'



export const receiveParent = (parent, babies) =>({
  type: RECEIVE_PARENT,
  parent,
  babies


})



export const getParentById = parentId => {
  return dispatch => {
    Promise.all([
    axios.get(`/api/parent/${parentId}`),
    axios.get(`/api/parent/${parentId}/babies`)
  ])
      .then(results => results.map(r =>{
        console.log("RDATA",r.data)
        return r.data}))
        .then(results => {
          console.log("THIS IS RESULTS in Parent Action", results)
          dispatch(receiveParent(...results));
      })
      .catch(function(err){
        console.log(err)
      })
  };
};
