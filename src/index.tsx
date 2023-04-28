import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'

import { configureStore, IApplicationState } from 'setup/store'
import Api from 'services/api'

import {
    FilesPageModule,
    FilePageModule,
} from 'modules'
import { createRoutes } from 'modules/createRoutes'

import App from './App'

import './index.scss'

const api = new Api('')

const modules = [
    new FilesPageModule(),
    new FilePageModule(),
]

const childrens = createRoutes(modules)

const { store } = configureStore({ api })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<ThunkDispatch<IApplicationState, any, AnyAction>>()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App>{childrens}</App>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)