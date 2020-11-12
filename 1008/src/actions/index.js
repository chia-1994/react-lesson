import { ADD_VALUE, MINUS_VALUE, INIT_VALUE } from './actionTypes'

// action creator 動作建立器
export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}

export const addValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addValue(value))
    }, 2000)
  }
}

export const minusValue = (value) => {
  return { type: MINUS_VALUE, value }
}

// 初始化值的動作建立器
export const initValue = (value) => {
  return { type: INIT_VALUE, value }
}

// 對應初始化值，向伺服器get資料的動作建立器
export const initValueAsync = (value) => {
  return async function getTotalFromServer(dispatch) {
    //   // 開啟載入的指示圖示
    //   setDataLoading(true)

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
    // data會是一個物件值
    console.log(data)
    console.log('delay initValueAsync')

    //setTotal(data.total)
    // 最後得到資料，然後發送動作到reducer
    dispatch(initValue(data.total))
  }
}

// todos
// export const addTodo = (value) => {
//   return { type: ADD_TODO, value }
// }

// export const deleteTodo = (value) => {
//   return { type: MINUS_TODO, value }
// }
