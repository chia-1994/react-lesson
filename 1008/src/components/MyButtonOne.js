// 導入其它的模組
import React, { useState } from 'react'

function MyButtonOne(props) {
  return (
    <>
      <button onClick={props.clickMethod}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOne
