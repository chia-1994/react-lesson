import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Login(props) {
  const { isAuth, setIsAuth } = props

  return (
    <>
      <h1>會員登入登出</h1>

      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <Button onClick={() => setIsAuth(true)} className="m-2">
        登入
      </Button>
      <Button onClick={() => setIsAuth(false)} className="m-2">
        登出
      </Button>
    </>
  )
}

export default Login
