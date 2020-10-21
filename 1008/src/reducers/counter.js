import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'

// action = { type: 'ADD_VALUE', value: 1 }
// action = { type: 'MINUS_VALUE', value: 1 }
export default function counter(state = 9999, action) {
  switch (action.type) {
    case ADD_VALUE:
      return state + action.value
    case MINUS_VALUE:
      return state - action.value
    default:
      return state
  }
}
