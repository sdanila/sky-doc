import React from 'react'
import block from 'bem-cn'
import { useSelector, shallowEqual } from 'react-redux'

import { selectCloudFilesData, selectCloudFilesComm } from 'features/cloudFiles/selectors'

const b = block('files-page')

export default function FilesPage() {
    const planeList = useSelector(selectCloudFilesData, shallowEqual)
    const planeListComm = useSelector(selectCloudFilesComm, shallowEqual)

    console.log(planeList, planeListComm)

    return (
        <div className={b()}>
            files page
        </div>
    );
}