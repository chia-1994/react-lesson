// 導入其它的模組
import React, { useState } from 'react'

function App(props) {
  const [KG, setKG] = useState(0)
  const [CM, setCM] = useState(0)
  //const [BMI,setBMI]=useState(0)

  const countBMI = (KG / ((CM / 100) * (CM / 100))).toFixed(2)

  return (
    <>
      體重：
      <input
        type="text"
        value={KG}
        onChange={(event) => setKG(event.target.value)}
      />
      kg
      <br />
      身高：
      <input
        type="text"
        value={CM}
        onChange={(event) => setCM(event.target.value)}
      />
      cm
      <br />
      BMI：{countBMI}
    </>
  )
}

// 輸出元件(函式)
export default App
