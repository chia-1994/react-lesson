import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function Profile(props) {
  const { isAuth } = props
  if (isAuth === false) return <Redirect to="/login" />
  return (
    <>
      <Form className="mt-5">
        <Form.Group>
          <Form.Label>姓名</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>帳號</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          修改
        </Button>
      </Form>
    </>
  )
}

export default Profile
