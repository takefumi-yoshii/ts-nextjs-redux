import uuid from 'uuid/v4'
import types from './types'
// ______________________________________________________
//
export function addTodo(task: string) {
  return {
    type: types.addTodo,
    payload: {
      id: uuid(),
      done: false,
      task
    }
  }
}
export function doneTodo(id: string) {
  return {
    type: types.doneTodo,
    payload: { id }
  }
}
