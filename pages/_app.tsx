import * as React from 'react'
import { Provider } from 'react-redux'
import App, { Container, AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, ReduxStore } from '../store'
// ______________________________________________________
//

type Props = {
  store: ReduxStore
}

export default withRedux(initStore)(
  class extends App<Props> {
    static async getInitialProps({ Component, ctx }: AppContext) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      // StoreState の推論が適用されている
      // const state = ctx.store.getState()
      return { pageProps }
    }
    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)
