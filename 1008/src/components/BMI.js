import React, { useState } from 'react'

function BMI(props) {
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
