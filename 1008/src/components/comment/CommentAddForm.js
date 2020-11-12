import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, todos, setTodos } = props

  return (
    <>
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
    </>
  )
}

export default TodoAddForm
