import React, { useState, useEffect } from 'react'
import TodoApp from '../components/TodoApp'
import Breadcrumb from '../components/Breadcrumbs'

function TodoAppPage(props) {
  return (
    <>
      <Breadcrumb />
      <TodoApp />
    </>
  )
}

export default TodoAppPage
