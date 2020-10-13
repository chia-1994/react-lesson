import React, { useState } from 'react'
import { countries, townships, postcodes } from './data.js'

function TWZipCode(props) {
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  //備用，如果需要設定郵遞區號時
  //const [postcode, setPostcode] = useState(-1)

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
      >
        <option value={-1}>選擇縣市</option>

        {countries.map((v, i) => (
          <option key={i} value={i}>
            {v}
          </option>
        ))}
      </select>

      <select
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value={-1}>選擇區域</option>
        {country > -1 &&
          townships[country].map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
      </select>

      <span>
        {country > -1 && township > -1 && postcodes[country][township]}
      </span>
    </>
  )
}

export default TWZipCode
