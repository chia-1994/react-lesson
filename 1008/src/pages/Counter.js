import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Counter(props) {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)
  async function getTotalFromServer() {
    //
    setDataLoading(true)

    const url = 'http://localhost:5555/counter/1'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    setTotal(data.total)
  }
  // componentDidMount
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有改變，2秒後關起載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000)
  }, [total])

  const loading = (
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
  const display = (
    <>
      <h1>{total}</h1>
      <Button onClick={() => setTotal(total + 1)} className="mr-2">
        +1
      </Button>
      <Button onClick={() => setTotal(total - 1)}>-1</Button>
    </>
  )
  return dataLoading ? loading : display
}

export default Counter
