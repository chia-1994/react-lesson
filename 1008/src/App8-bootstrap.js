// 導入其它的模組
import React, { useState } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { AiFillHeart } from 'react-icons/ai'

function App(props) {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="mt-5">React Bootstrap</h1>
            <Button variant="primary" className="mt-5">
              Primary
            </Button>
            <Button variant="secondary" className="mt-5">
              Secondary
            </Button>
            <Button variant="success" className="mt-5">
              Success
            </Button>
          </Col>
          <AiFillHeart className="mt-5" color="#6f42c1" size={150} />
        </Row>
      </Container>

      <MyFooter />
    </>
  )
}

// 輸出元件(函式)
export default App
