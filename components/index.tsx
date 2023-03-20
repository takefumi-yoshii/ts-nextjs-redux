import React from 'react'
import styled from 'styled-components'
import { StoreState } from '../store'
import { increment, decrement } from '../store/counter/actions'
import { connect, ConnectedProps } from 'react-redux'

type Props = {
  className?: string
  count: number
}

type ReduxProps = ConnectedProps<typeof connector>

const Component = ({className, count, increment, decrement}: Props & ReduxProps) => (
  <>
    <div className={className}>Welcome to next.js {count}!</div>
    <button onClick={increment}> +1</button>
    <button onClick={decrement}> -1</button>
  </>
)

const StyledComponent = styled(Component)`
color: #f00;
`

const connector = connect(
  (state: StoreState) => ({ count: state.counter.count }),
  {increment, decrement}
)

export default connector(StyledComponent)
