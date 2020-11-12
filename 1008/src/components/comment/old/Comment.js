import React, { useState, useEffect } from 'react'
import './Comment.sass'
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import Mypagination from './Mypagination'
import moment from 'moment'
import CommentInput from './CommentInput'
import { Rate } from 'antd'
import 'antd/dist/antd.css'

function Comment() {
  const [comment, setComment] = useState([])
  const [displayComment, setDisplayComment] = useState([])
  const [selectedSkin, setSelectedSkin] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(10)
  //顯示評論的填寫區
  const [showInput, setShowInput] = useState(false)

  async function getCommentFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true)

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
    setDisplayComment(data)
    setDataLoading(false)
    //設定頁碼
    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    // let a = comment.slice(0, 10)

    // setDisplayComment(a)

    // setPostPerPage(data.perPage)
  }

  // componenliidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getCommentFromServer()
  }, [])

  // 每次total資料有改變，0.1秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 100)
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

  //目前的頁面
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //評論呈現
  const display = (
    <>
      <div className="customer-review">
        {displayComment.map((comment, index) => {
          return (
            <>
              <div className="porfile">
                <div className="photo"></div>
                <div className="info">
                  <div className="name">{comment.name}</div>
                  <div className="rating">
                    <Rate
                      disabled
                      value={comment.rating}
                      style={{ color: '#95C375', fontSize: '14px' }}
                    />
                  </div>
                  <div className="skintype">
                    您的肌膚類型:{comment.skin_type}
                  </div>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="comment-content">
                  <h6>{comment.title}</h6>
                  <p>{comment.review}</p>
                  <div className="comment-time">
                    <p>{moment(comment.date).format('YYYY-MM-DD')}</p>
                  </div>
                </div>
              </Col>
            </>
          )
        })}
      </div>
    </>
  )

  function onSkinChange(e) {
    setSelectedSkin(e)
    let c = comment.filter((item) => {
      return item.skin === e
    })
    //console.log(c)
    setDisplayComment(c)
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
            {showInput ? <CommentInput /> : ''}

            <div className="total-reviews">
              <div className="total-rating">
                <Rate
                  disabled
                  defaultValue={5}
                  style={{ color: '#95C375', fontSize: '16px' }}
                />
                {/* <i class="fas fa-star"></i> */}
              </div>
              <div className="total-score">
                <h2>5</h2>
                <div className="reviews">
                  <h6>36 評論</h6>
                </div>
              </div>

              <div className="stars">
                <div className="five">
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="four">
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="three">
                  <Rate
                    disabled
                    defaultValue={3}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="two">
                  <Rate
                    disabled
                    defaultValue={2}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="one">
                  <Rate
                    disabled
                    defaultValue={1}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>
            <div className="dropdown-area">
              <DropdownButton
                id="dropdown-basic-button"
                title="選擇膚質"
                variant="outline-success"
                size="sm"
                style={{ fontSize: '16px' }}
                // onClick={() => onSkinChange()}
              >
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={() => onSkinChange(0)}
                  eventKey="0"
                >
                  全部
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={() => onSkinChange(1)}
                  eventKey="1"
                >
                  油性
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={() => onSkinChange(2)}
                >
                  混合肌
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={() => onSkinChange(3)}
                >
                  乾性
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="customer-review">
              {dataLoading ? loading : display}
            </div>
          </div>
          <div className="pagination-area">
            <Mypagination
              postsPerPage={postsPerPage}
              totalPosts={comment.length}
              paginate={paginate}
            />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Comment
