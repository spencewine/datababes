import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import ParentProfile from '../components/ParentProfile'



const mapStateToProps = (state, ownProps) => {
  console.log("MSTP Parent Container", state)
  return {
    parent: state.parent

  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {}

}


const ParentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ParentProfile)
export default ParentProfileContainer
