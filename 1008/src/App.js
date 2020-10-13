// 導入其它的模組
import React, { useState } from 'react'

import MoneyInput from './components/MoneyInput'

function App(props) {
  const [ntd, setNtd] = useState(0)
  const [usd, setUsd] = useState(0)

  const usd2Ntd = (usd) => (usd * 28.53).toFixed(2)
  const ntd2Usd = (ntd) => (ntd > 0 ? (ntd / 28.53).toFixed(2) : 0)

  return (
    <>
      <MoneyInput
        title="新台幣"
        money={ntd}
        setMoney={(value) => {
          setNtd(value)
          setUsd(ntd2Usd(value))
        }}
      />
      <br />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(value) => {
          setUsd(value)
          setNtd(usd2Ntd(value))
        }}
      />
    </>
  )
}

// 輸出元件(函式)
export default App
