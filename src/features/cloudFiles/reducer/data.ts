import { createReducer } from '@reduxjs/toolkit'
import { IFilesState } from '../types'
import * as actions from '../actions'

const initialState: IFilesState['data'] = {
  files: [],
}

export default createReducer(initialState, builder => {
  builder
    .addCase(actions.getFiles.success, (state, action) => {
    //   state.files = action.payload;
    })
    .addCase(actions.changeFile.success, (state, action) => {
      // обновить измененный файл
    })
    .addCase(actions.deleteFile.success, state => {
      // удалить файл
    })

})