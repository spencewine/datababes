import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import Babies from '../components/Babies'
import {getBabiesOnAdd} from '../action-creators/parent'



const mapStateToProps = (state, ownProps) => {

  return {
    babies: state.babies
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    babyAdd: function(parentId){
      dispatch(getBabiesOnAdd(parentId))
    }
  }

}


const BabiesContainer = connect(mapStateToProps, mapDispatchToProps)(Babies)

export default BabiesContainer
