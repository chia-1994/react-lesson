// 導入其它的模組
import React, { useState } from 'react'

function App(props) {
  const [ntd, setNtd] = useState(0)
  const [usd, setUsd] = useState(0)

  const usd2Ntd = (usd) => (usd * 28.53).toFixed(2)
  const ntd2Usd = (ntd) => (ntd > 0 ? (ntd / 28.53).toFixed(2) : 0)

  return (
    <>
      新台幣：
      <input
        type="text"
        value={ntd}
        onChange={(e) => {
          // 先得到更動後的值
          const newNtd = e.target.value
          setNtd(newNtd)
          setUsd(ntd2Usd(ntd))
        }}
      />
      <br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(e) => {
          // 先得到更動後的值
          const newUsd = e.target.value
          setUsd(newUsd)
          setNtd(usd2Ntd(usd))
        }}
      />
    </>
  )
}

// 輸出元件(函式)
export default App
