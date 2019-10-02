import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { StoreState } from '../store'
// ______________________________________________________
//
type Props = {
  className?: string
  hoge: number
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => (
  <div className={props.className}>Welcome to next.js!</div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  color: #f0f;
`
// ______________________________________________________
//
export default connect(
  (state: StoreState) => ({
    hoge: state.counter.count
  }),
  {}
)(StyledComponent)
