//導入其他的模組，from後面的'react'是檔案，放在node-module所以不用寫完整路徑
import React, { useState } from 'react'

//自訂元件 開頭一定要大寫 ex:App 一個js檔建議只有一個自訂元件
function AppFunction(props) {
  //console.log(props)

  //呼叫useState勾子，設定初始化值為０，回傳一組getter和setter
  const [total, setTotal] = useState(props.initValue)

  return (
    <>
      {/* JSX語法中加註解 */}
      <h1>{props.title}</h1>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  )
}

//輸出函式
export default AppFunction
