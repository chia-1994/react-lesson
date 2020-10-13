// 導入其它的模組
import React, { useState } from 'react'

function MyButtonOne(props) {
  return (
    <>
      {/* 呈現由父母元件來的資料 */}
      <h1>{props.text}</h1>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOne
