// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
import MyButtonTwo from './components/MyButtonTwo'

function App(props) {
  const [show, setShow] = useState(true)
  return (
    <>
      {/* <h1>0</h1> */}
      <MyButtonOne title="復活吧~" clickMethod={() => setShow(true)} />
      {show ? (
        <MyButtonTwo title="我不要活了" clickMethod={() => setShow(false)} />
      ) : (
        ''
      )}
      {/* <MyButtonTwo title=" ಥ＿ಥ" /> */}
    </>
  )
}

// 輸出元件(函式)
export default App
