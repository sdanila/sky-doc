import React from 'react'
import block from 'bem-cn'

const b = block('file-page')

export default function FilePage() {

    console.log('file page')

    return (
        <div className={b()}>
            file page
        </div>
    );
}