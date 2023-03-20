import React from "react";
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import {createWrapper} from 'next-redux-wrapper'
import { initStore, ReduxStoreInstance } from '../store'

declare module 'next/dist/shared/lib/utils' {
    export interface NextPageContext {
      store: ReduxStoreInstance;
    }
  }

const wrapper = createWrapper(initStore)

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    );
}

export default App
