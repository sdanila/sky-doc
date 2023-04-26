import { combineReducers } from 'redux' 

import { makeCommunicationReducer } from 'shared/utils/communications/reducer/makeCommunicationReducer'
import { IFilesState } from '../types'

import * as actions from '../actions'

export default combineReducers<IFilesState['communications']>({
  getFiles: makeCommunicationReducer(actions.getFiles),
  changeFile: makeCommunicationReducer(actions.changeFile),
  deleteFile: makeCommunicationReducer(actions.deleteFile),
})