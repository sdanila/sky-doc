import { combineReducers } from 'redux'

import { IFilesState } from '../types'
import communications from './communications'
import data from './data'

export const reducer = combineReducers<IFilesState>({
    communications,
    data,
  });