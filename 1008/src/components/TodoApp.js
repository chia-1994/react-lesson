import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  //將每個待辦事項改為物件值 { id: 1, text: 'string', completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買蛋餅', completed: false },
    { id: 2, text: '買飯糰', completed: true },
  ])

  //利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }

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

            //...展開運算符
            //建立新的陣列（合併原本的todos陣列中的值）
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
        {/* 依照每個項目的completed來控制呈現的樣子 */}
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              <del>{item.text}</del>
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              {item.text}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default TodoApp
