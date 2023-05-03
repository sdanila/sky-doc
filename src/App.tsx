import React from 'react'
import block from 'bem-cn'
import './App.scss'

const b = block('app')

interface IAppProps {
  children: React.ReactElement
}

function App({ children }: IAppProps) {
    console.log('asd')
    return (
      <div className={b()}>
        <div className={b("header")}>
          <h2>SkyDoc</h2>
        </div>
        {children}
      </div>
    )
}

export default App
