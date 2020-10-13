// 導入其它的模組
import React, { useState } from 'react'

function MyButtonTwo(props) {
  const innerValue = 'Two中的內部資料'
  return (
    <>
      {/* 子女元件利用父母元件傳給他的setText，進行傳遞自己的資料 */}
      <button onClick={() => props.setText(innerValue)}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonTwo
