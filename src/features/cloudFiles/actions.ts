import {
  makeCommunicationActionCreator
} from 'shared/utils/communications/actions/makeCommunicationActionCreator'

export const getFiles = makeCommunicationActionCreator({
  loading: '@cloudFiles/GET_FILES_LOADING',
  success: '@cloudFiles/GET_FILES_SUCCESS',
  error: '@cloudFiles/GET_FILES_ERROR',
  reset: '@cloudFiles/GET_FILES_RESET',
})<void, void>(
  async () => {

    console.log('kek')
  },
)

export const changeFile = makeCommunicationActionCreator({
  loading: '@cloudFiles/CHANGE_FILE_LOADING',
  success: '@cloudFiles/CHANGE_FILE_SUCCESS',
  error: '@cloudFiles/CHANGE_FILE_ERROR',
  reset: '@cloudFiles/CHANGE_FILE_RESET',
})<void, void>(
  async () => {
    console.log('mem');
  },
);

export const deleteFile = makeCommunicationActionCreator({
    loading: '@cloudFiles/DELETE_FILE_LOADING',
    success: '@cloudFiles/DELETE_FILE_SUCCESS',
    error: '@cloudFiles/DELETE_FILE_ERROR',
    reset: '@cloudFiles/DELETE_FILE_RESET',
  })<void, void>(
    async () => {
        console.log('lol');
    },
  )