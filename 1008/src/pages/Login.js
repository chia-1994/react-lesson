import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

function Login(props) {
  const {
    isAuth,
    setIsAuth,
    authUsername,
    setAuthUsername,
    authPassword,
    setAuthPassword,
    username,
    password,
  } = props

  if (isAuth) return <Button onClick={() => setIsAuth(false)}>登出</Button>

  return (
    <>
      <h1>會員登入</h1>

      {/* <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <Button onClick={() => setIsAuth(true)} className="m-2">
        登入
      </Button>
      <Button onClick={() => setIsAuth(false)} className="m-2">
        登出
      </Button> */}
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="text"
            value={authUsername}
            onChange={(e) => setAuthUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="記得我" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            if (authUsername === username && authPassword === password) {
              setIsAuth(true)
              alert('登入成功')
            } else {
              alert('帳號/密碼錯誤')
            }
          }}
        >
          登入
        </Button>
      </Form>
    </>
  )
}

export default Login
