import { IApplicationState } from 'setup/store'

export const selectCloudFilesData = (state: IApplicationState) => state.cloudFiles.data
export const selectCloudFilesComm = (state: IApplicationState) => state.cloudFiles.communications