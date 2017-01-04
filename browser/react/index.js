import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import {Provider} from 'react-redux'
import axios from 'axios'
import store from './store'
import SignUpFormContainer from './containers/SignUpFormContainer'
import BabyCreateContainer from './containers/BabyCreateContainer'
import LoginFormContainer from './containers/LoginFormContainer'
import BabyProfileContainer from './containers/BabyProfileContainer'
import ParentProfileContainer from './containers/ParentProfileContainer'
import BabiesContainer from './containers/BabiesContainer'
import UpdateProfileContainer from './containers/UpdateProfileContainer'
import App from './components/App'
import BabyProfile from './components/BabyProfile'
import Babies from './components/Babies'
import {getBabyById} from './action-creators/babies'
import {getParentById} from './action-creators/parent'


const onBabyEnter = (nextRouterState) =>{
  console.log("onBabyEnter", nextRouterState)
  const babyId = nextRouterState.params.babyId
  store.dispatch(getBabyById(babyId))
}

const onParentEnter = (nextRouterState) =>{
  const parentId = nextRouterState.params.parentId
  store.dispatch(getParentById(parentId))
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
      <Route path='/signup' component={SignUpFormContainer}/>
      <Route path ='/login' component={LoginFormContainer} />
      <Route path='/parent/:parentId' component={ParentProfileContainer} onEnter={onParentEnter}>
            <Route path='enterbaby' component={BabyCreateContainer} />
            <Route path='update' component={UpdateProfileContainer}/>
            <Route path="babies" component={Babies}/>
            <Route path='babies/:babyId' component={BabyProfileContainer} onEnter={onBabyEnter}/>
          </Route>
          <IndexRedirect to='/login'/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')

)
