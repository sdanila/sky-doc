import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { configureStore, IApplicationState } from 'setup/store'
import Api from './services/api'

import App from './App'

import './index.scss'

const api = new Api('')

const { store } = configureStore({ api })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<ThunkDispatch<IApplicationState, any, AnyAction>>()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
