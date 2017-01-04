import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import SideBar from '../components/SideBar'



const mapStateToProps = (state, ownProps) => {
  console.log("MSTP Sidebar Container", state)
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {}

}


const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer
