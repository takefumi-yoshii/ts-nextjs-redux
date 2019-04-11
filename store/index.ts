import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState, reducer } from './reducer'
// ______________________________________________________
//
export type StoreState = ReturnType<typeof initialState>
export type ReduxStore = Store<StoreState>
// ______________________________________________________
//
export function initStore(state = initialState()) {
  return createStore(reducer, state, composeWithDevTools())
}
