import React,{Component} from 'react'
import store from '../store'
import {connect} from 'react-redux';
import BabyProfile from '../components/BabyProfile'
import Weight from '../components/Weight'
import Height from '../components/Height'
import Feed from '../components/Feed'
import Sleep from '../components/Sleep'
import Diaper from '../components/Diaper'


class BabyProfileContainer extends Component {

  render(){
    console.log("RENDER PROPS", this.props)
    const  {baby ,weight, height, feed, sleep, diapers} = this.props

    return(
      <div>
        <BabyProfile baby={baby}/>
        <Weight weight={weight}/>
        <Height height={height}/>
        <Feed  feed={feed}/>
        <Sleep sleep={sleep}/>
        <Diaper diapers={diapers}/>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log("MSTP Baby Container", state)
  return {
    baby: state.baby,
    diapers: state.diapers,
    weight: state.weight,
    height: state.height,
    sleep: state.sleep,
    feed: state.feeding
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {}

}



export default connect(mapStateToProps, mapDispatchToProps)(BabyProfileContainer)
