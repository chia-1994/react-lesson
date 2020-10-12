//導入react函式庫
import React from 'react'

//繼承類別
class App extends React.Component {
  //建構式
  constructor() {
    // 建構式的第一行需要使用super呼叫父母類別的建構式
    super()
    // 這裡建立狀態的初始化值
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
