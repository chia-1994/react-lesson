import React, { useState } from 'react'

function MoneyInput(props) {
  return (
    <>
      {props.title}：
      <input
        type="text"
        value={props.money}
        onChange={(e) => {
          // 轉成數字進入state中
          props.setMoney(+e.target.value)
        }}
      />
    </>
  )
}

export default MoneyInput
