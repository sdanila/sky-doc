import { AnyAction, applyMiddleware, combineReducers, compose, createStore, Reducer, Store } from 'redux'
import thunk from 'redux-thunk'

import { IExtra } from 'shared/types/redux'
import * as CloudFiles from 'features/cloudFiles'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

export interface IApplicationState {
  cloudFiles: CloudFiles.types.IFilesState
}

type ConfigureStore = {
  store: Store<IApplicationState>
}

export function configureStore(extra: IExtra): ConfigureStore {
  const middleware = thunk.withExtraArgument<IExtra>(extra)

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (arg: any) => arg

  const reducer: Reducer<IApplicationState, AnyAction> = combineReducers({
    cloudFiles: CloudFiles.reducer
  })

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(middleware),
      // composeEnhancers
    )
  )

  return { store }
}