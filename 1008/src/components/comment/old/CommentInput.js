import React, { useState, useEffect } from 'react'
import './Comment.sass'
import { Button, Form } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'

function CommentInput(props) {
  const [dataLoading, setDataLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [skin, setSkin] = useState('')

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  async function addCommentToSever() {
    //const newData = { name, email, title, review }
    const newData = { name, email, title, review }
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/comment/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
      props.history.push('/product')
    }, 500)
  }
  return (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <h6>姓名</h6>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <h6>Email</h6>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </Form.Group>
        </div>
        <div className="rating">
          <h6>評分</h6>
          <Rate
            defaultValue={1}
            style={{ color: '#95C375' }}
            value={rating}
            onChange={(event) => {
              setRating(event.target.value)
            }}
          />
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>標題</h6>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>評論</h6>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(event) => {
              setReview(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h6>膚質</h6>
          <Form.Control
            as="select"
            value={skin}
            onChange={(event) => {
              setSkin(event.target.value)
            }}
          >
            <option>油性</option>
            <option>混合肌</option>
            <option>乾性</option>
          </Form.Control>
        </Form.Group>
        <Button
          className="comment-btn"
          style={{ fontSize: '16px', color: 'white', float: 'right' }}
          variant="success"
          onClick={() => {
            addCommentToSever()
          }}
        >
          送出評論
        </Button>
      </Form>
    </>
  )
}

export default CommentInput
