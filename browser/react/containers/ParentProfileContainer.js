import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import ParentProfile from '../components/ParentProfile'
import {deleteBaby} from '../action-creators/parent'



const mapStateToProps = (state, ownProps) => {
  console.log("MSTP Parent Container", state)
  return {
    parent: state.parent

  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    babyDelete: function(babyId, parentId){
      dispatch(deleteBaby(babyId, parentId))
    }
  }

}


const ParentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ParentProfile)
export default ParentProfileContainer
