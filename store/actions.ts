type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
}
export type CreatorsToActions<T> = Unwrap<ReturnTypes<T>>
// ______________________________________________________
//
export type Actions =
  | CreatorsToActions<typeof import('./counter/actions')>
  | CreatorsToActions<typeof import('./todos/actions')>
