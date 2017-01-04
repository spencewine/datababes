import {RECEIVE_PARENT, ADD_BABY, DELETE_BABY} from '../constants'
import axios from 'axios'



export const receiveParent = (parent, babies) =>({
  type: RECEIVE_PARENT,
  parent,
  babies
})

export const addBaby = (babies) =>({
  type: ADD_BABY,
  babies
})



export const deleteBaby = (babyId, parentId) => {
  axios.delete(`/api/baby/${babyId}`)
  return dispatch =>{
    dispatch(getParentById(parentId))
  }
}

export const getBabiesOnAdd = parentId=>{
  axios.get(`/api/parent/${parentId}/babies`)
  .then(results => results.map(r =>{
    console.log("RDATA",r.data)
    return r.data}))
    .then(results => {
      console.log("THIS IS RESULTS in Parent Action", results)
    return dispatch=>{
      dispatch(addBaby(results));
    }
  })
  .catch(function(err){
    console.log(err)
  })
}


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
