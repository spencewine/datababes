import React from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/root-reducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import babyReducer from './reducers/baby-reducer'
// import parentReducer from './reducers/parent-reducer'
//
 const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

export default createStore(
  rootReducer, composeEnhancers(applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed:true})
  )
  )
)
