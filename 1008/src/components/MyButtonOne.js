// 導入其它的模組
import React, { useState } from 'react'

function MyButtonOne(props) {
  const innerValue = 100

  return (
    <>
      {/* 子女元件利用父母元件傳給他的setNum，進行傳遞自己的資料 */}
      <button onClick={() => props.setNum(innerValue)}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOne
