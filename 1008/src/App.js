import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <TodoApp />
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
