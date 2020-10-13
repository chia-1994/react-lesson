// 導入其它的模組
import React, { useState } from 'react'

//import ChangeRate from './components/ChangeRate'

function App(props) {
  const [ntd, setNtd] = useState(0)
  const [usd, setUsd] = useState(0)

  return (
    <>
      新台幣：
      <input type="text" value={ntd} onChange={() => {}} />
      <br />
      美金：
      <input type="text" value={usd} onChange={() => {}} />
    </>
  )
}

// 輸出元件(函式)
export default App
