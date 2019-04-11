import { combineReducers } from 'redux'
// ______________________________________________________
//
import * as Counter from './counter'
import * as Todos from './todos'

export function initialState() {
  return {
    counter: Counter.initialState(),
    todos: Todos.initialState()
  }
}
export const reducer = combineReducers({
  counter: Counter.reducer,
  todos: Todos.reducer
})
