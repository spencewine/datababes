import React,{Component, PropTypes} from 'react'
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
    console.log("RENDER PROPS in BPC", this.props)
    const  {baby, weight, height, feeding, sleep, diapers} = this.props
    console.log("WEIGHT", weight)
    return(
      <div>
        <BabyProfile baby={baby.baby}/>
        <Weight weight={baby.weight}/>
        <Height height={baby.height}/>
        <Sleep sleep={baby.sleep}/>
        <Feed  feed={baby.feeding}/>
        <Diaper diapers={baby.diapers}/>
      </div>
    )
  }



}

// BabyProfileContainer.propTypes = {
//   baby: PropTypes.object,
//   weight: PropTypes.array.isRequired,
//   height: PropTypes.array.isRequired,
//   feed: PropTypes.array.isRequired,
//   sleep: PropTypes.array.isRequired,
//   diapers:PropTypes.array.isRequired,
// }

const mapStateToProps = (state, ownProps) => {
  console.log("OWN PROPS", ownProps)
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
