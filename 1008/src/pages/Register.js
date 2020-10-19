import React, { useState, useEffect } from 'react'
//import { Link, Switch, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function Register(props) {
  const {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    passwordComfirm,
    setPasswordComfirm,
    email,
    setEmail,
  } = props
  return (
    <>
      <h1>註冊會員</h1>
      <Form className="mt-5">
        <Form.Group>
          <Form.Label>姓名</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword2">
          <Form.Label>確認密碼</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            value={passwordComfirm}
            onChange={(e) => setPasswordComfirm(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={() => {
            if (!name) {
              alert('姓名沒填')
              return
            }
          }}
        >
          註冊
        </Button>
      </Form>
    </>
  )
}

export default Register
