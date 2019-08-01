import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import * as stores from 'stores'
import './global.scss'  //important!! need to import that css here only!!
//use className when needed instead of styleName (foundation stuff), otherwise css will be huge and app will be stuck ....

function mount() {
  const App = require('./components/app').default
  render(
    <AppContainer>
      <Provider {...stores}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('App', mount)
}
mount()
