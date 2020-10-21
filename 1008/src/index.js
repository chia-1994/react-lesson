import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

//以下為redux
//第一步：匯入createStore, combineReducers API
import { createStore, combineReducers } from 'redux'

// 匯入綁定react與redux用的最上層元件
import { Provider } from 'react-redux'

//第二步：寫出reducer：純粹函式---給狀態、動作，回傳新的狀態
//定義action
// action = {type: 'ADD_VALUE', value: 1 }
//action = {type: 'MINUS_VALUE', value: 1 }
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + action.value
    case 'MINUS_VALUE':
      return state - action.value
    default:
      return state
  }
}
// 第二之一：合併所有的reducers成一個大的reducer
const rootReducer = combineReducers({
  counter,
})

// 第三步：由rootReducer建立store
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
