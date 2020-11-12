import React, { useState, useEffect } from 'react'
import './comment/old/Comment.sass'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

function CommentApp(props) {
  // const [todoInput, setTodoInput] = useState('')
  // const [todos, setTodos] = useState(['買iphone 12 pro max', '學好react'])
  //const [commentInput, setcommentInput] = useState()

  const [comment, setComment] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [skin, setSkin] = useState('')
  //顯示評論的填寫區
  const [showInput, setShowInput] = useState(false)

  async function getCommentFromServer() {
    // 開啟載入的指示圖示
    //setDataLoading(true)

    const url = 'http://localhost:3000/comment/list'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setComment(data)
    // setDisplayComment(data)
    // setDataLoading(false)
  }
  useEffect(() => {
    getCommentFromServer()
  }, [])

  // 每次total資料有改變，0.5秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500)
  }, [comment])
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const reviewArea = (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <h6>姓名</h6>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <h6>Email</h6>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="rating">
          <h6>評分</h6>
          {/* <Rate defaultValue={1} style={{ color: '#95C375' }} value={rating} /> */}
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>標題</h6>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>評論</h6>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h6>膚質</h6>
          <Form.Control
            as="select"
            value={skin}
            onChange={(e) => setSkin(e.target.value)}
          >
            <option value="">請選擇</option>
            <option value="1">油性</option>
            <option value="2">混合肌</option>
            <option value="3">乾性</option>
          </Form.Control>
        </Form.Group>
        <Button
          className="comment-btn"
          style={{ fontSize: '16px', color: 'white', float: 'right' }}
          variant="success"
          onClick={(event) => {
            if (review !== '') {
              // 建立一個新的Comment項目
              const newItem = {
                id: +new Date(),
                name: name,
                title: title,
                review: review,
                skin: skin,
              }

              const newComment = [newItem, ...comment]
              setComment(newComment)

              // 清空輸入框
              setName('')
              setEmail('')
              setTitle('')
              setReview('')
              setSkin('')
              //儲存進資料庫
              addCommentToSever()
            }
          }}
        >
          送出評論
        </Button>
      </Form>
    </>
  )

  const display = (
    <>
      <div className="customer-review">
        {comment.map((comment, index) => {
          return (
            <>
              <div className="porfile">
                <div className="photo"></div>
                <div className="info">
                  <div className="name" key={comment.id}>
                    {comment.name}
                  </div>
                  <div className="rating"></div>
                  <div className="skintype" key={comment.id}>
                    您的肌膚類型:{comment.skin_type}
                  </div>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="comment-content">
                  <h6 key={comment.id}>{comment.title}</h6>
                  <p key={comment.id}>{comment.review}</p>
                  <div className="comment-time"></div>
                </div>
              </Col>
            </>
          )
        })}
      </div>
    </>
  )

  async function addCommentToSever() {
    //const newData = { name, email, title, review }
    const newData = { name, email, skin, title, review }
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

    // console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('已新增評論')
      // props.history.push('/product')
    }, 500)
  }
  return (
    <>
      <Container>
        <Row>
          <div className="comment">
            <h5>顧客評論</h5>
            <Button
              variant="success"
              style={{ fontSize: '16px', color: 'white', float: 'right' }}
              title="關閉"
              onClick={() => setShowInput(!showInput)}
            >
              {showInput ? '關閉' : '撰寫產品評論'}
            </Button>
            {showInput ? reviewArea : ''}

            <div className="total-reviews">
              <div className="total-rating">
                <i className="fas fa-star"></i>
              </div>
              <div className="total-score">
                <h2>5</h2>
                <div className="reviews">
                  <h6>36 評論</h6>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="customer-review">{display}</div> */}
          <div className="customer-review">
            {comment.map((value, index) => {
              return (
                <>
                  <div className="porfile">
                    <div className="photo"></div>
                    <div className="info">
                      <div className="name">{value.name}</div>
                      <div className="rating"></div>
                      <div className="skintype">您的肌膚類型:{value.skin}</div>
                    </div>
                  </div>
                  <Col xs={12} md={12}>
                    <div className="comment-content">
                      <h6>{value.title}</h6>
                      <p>{value.review}</p>
                      <div className="comment-time"></div>
                    </div>
                  </Col>
                </>
              )
            })}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default CommentApp
