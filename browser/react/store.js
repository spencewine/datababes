import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root-reducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import babyReducer from './reducers/baby-reducer'
import parentReducer from './reducers/parent-reducer'

export default createStore(
  babyReducer, applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed:true})
  )
)
