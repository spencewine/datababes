import {RECEIVE_BABY} from '../constants'
import axios from 'axios'





export const receiveBaby = (baby,weight,height,sleep,diaper,feeding) =>({
  type: RECEIVE_BABY,
  baby: baby,
  weight: weight,
  feeding: feeding,
  height: height,
  sleep: sleep,
  diapers: diaper

})



export const getBabyById = babyId => {
  console.log("GET BABY BY ID", babyId)
  return dispatch => {

    Promise
      .all([
        axios.get(`/api/baby/${babyId}`),
        axios.get(`/api/baby/${babyId}/weight`),
        axios.get(`/api/baby/${babyId}/height`),
        axios.get(`/api/baby/${babyId}/sleep`),
        axios.get(`/api/baby/${babyId}/diaper`),
        axios.get(`/api/baby/${babyId}/feed`)
      ])
      .then(results => results.map(r => r.data))
      .then(results => {
        console.log("THIS IS RESULTS in Action assadkjasdfkjl;", results)
        dispatch(receiveBaby(...results));
      })
      .catch(function(err){
        console.log(err)
      })
  };
};
