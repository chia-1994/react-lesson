import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'

function TodoItem(props) {
  // 解構賦值的語法，先把要用的變數值從props解出來
  const {
    text,
    completed,
    completedMethod,
    deleteMethod,
    editedToggleMethod,
  } = props
  return (
    <>
      <li>
        <input type="checkbox" checked={completed} onChange={completedMethod} />
        {/* 用completed來判斷是否要有刪除線，true則要有 */}
        {completed ? <del>{text}</del> : text}
        <span onClick={editedToggleMethod}>
          <AiFillEdit />
        </span>
        <span onClick={deleteMethod}>
          <AiFillDelete />
        </span>
      </li>
    </>
  )
}

export default TodoItem
