import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import Babies from '../components/Babies'


const mapStateToProps = (state, ownProps) => {

  return {
    babies: state.babies
  }
}


const BabiesContainer = connect(mapStateToProps)(Babies)

export default BabiesContainer
