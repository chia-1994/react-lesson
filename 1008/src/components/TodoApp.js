import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState(['買豆漿', '買飯糰'])

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          //按enter可輸入  但輸入''不會輸入
          if (e.key === 'Enter' && e.target.value !== '') {
            //...展開運算符 建立新的陣列（合併原本的todos陣列中的值）
            const newTodos = [e.target.value, ...todos]

            //設定todos狀態值
            setTodos(newTodos)

            //清空輸入框
            setTodoInput('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
