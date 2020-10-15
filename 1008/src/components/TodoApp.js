import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  //將每個待辦事項改為物件值 { id: 1, text: 'string', completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買蛋餅', completed: false },
    { id: 2, text: '買飯糰', completed: true },
  ])

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
            // 建立一個新的todo項目
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }

            //...展開運算符 建立新的陣列（合併原本的todos陣列中的值）
            const newTodos = [newItem, ...todos]

            //設定todos狀態值
            setTodos(newTodos)

            //清空輸入框
            setTodoInput('')
          }
        }}
      />
      <hr />
      <ul>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用索引值作為key值(id值)  */}
        {todos.map((value, index) =>
          value.completed ? (
            <li key={value.text}>
              <del>{value.text}</del>
            </li>
          ) : (
            <li key={value.text}>{value.text}</li>
          )
        )}
      </ul>
    </>
  )
}

export default TodoApp
