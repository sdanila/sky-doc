import { EmptyObject } from 'redux'
import { ICommunication } from 'shared/models/Communications/Communications'

export interface IFilesState {
  communications: {
    getFiles: ICommunication
    changeFile: ICommunication
    deleteFile: ICommunication
  }
  data: {
    files: any[]
  }
}

export type ICardStatePersisted = IFilesState & EmptyObject