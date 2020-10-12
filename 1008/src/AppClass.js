//導入react函式庫
import React from 'react'

//繼承類別
class App extends React.Component {
  //建構式
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    )
  }
}

//輸出函式
export default App
