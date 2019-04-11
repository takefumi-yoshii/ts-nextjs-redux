import { Actions } from '../actions'
// ______________________________________________________
//
interface Todo {
  id: string
  done: boolean
  task: string
}
interface State {
  todos: Todo[]
}
// ______________________________________________________
//
export function initialState(injects?: State): State {
  return {
    todos: [],
    ...injects
  }
}
// ______________________________________________________
//
export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case 'TODOS_ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] }
    default:
      return state
  }
}
