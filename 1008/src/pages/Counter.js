import React from 'react'
import { connect } from 'react-redux'
// 改用動作類型的常數
import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'

function Counter(props) {
  console.log('props', props)

  return (
    <>
      <h1>{props.total}</h1>
      <button onClick={() => props.dispatch({ type: ADD_VALUE, value: 1 })}>
        +1
      </button>
      <button onClick={() => props.dispatch({ type: MINUS_VALUE, value: 1 })}>
        -1
      </button>
    </>
  )
}

const mapStateToProps = (store) => {
  return { total: store.counter }
}

const mapDispatchToProps = undefined

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
