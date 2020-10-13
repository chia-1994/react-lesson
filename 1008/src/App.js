// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'

function App(props) {
  const [num, setNum] = useState(0)
  return (
    <>
      <h1>{num}</h1>
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setNum */}
      <MyButtonOne title="傳資料給父母(App)" setNum={setNum} />
    </>
  )
}

// 輸出元件(函式)
export default App
