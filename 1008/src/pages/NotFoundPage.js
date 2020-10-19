import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function NotFoundPage(props) {
  let history = useHistory()
  return (
    <>
      <h1>頁面不存在(◔ д◔)</h1>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        回到上一頁
      </button>
      <hr />
      <button
        onClick={() => {
          history.push('./product')
        }}
      >
        到產品列表
      </button>
    </>
  )
}

export default NotFoundPage
