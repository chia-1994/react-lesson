// 導入其它的模組
import React, { useState } from 'react'

// 導入要使用的元件程式，注意路徑要正確，不需要加副檔名
import AppClass from './components/AppClass'
import AppFunction from './components/AppFunction'

function App() {
  const [num, setNum] = useState(2)
  return (
    <>
      {/* 使用類似HTML標記的方式來放置元件要呈現(渲染)的位置 */}
      {/* 使用類似HTML給定屬性值的方式來傳遞資料到子女元件中 */}
      <AppClass title="函式型元件" initValue={num + 97} />
      <AppFunction title="函式型元件" initValue={num + 99} />
    </>
  )
}

// 輸出元件(函式)
export default App

//-------以下為原本的index畫面------------------------

// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
