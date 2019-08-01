import { RouterStore } from 'mobx-react-router'
import { syncHistoryWithStore } from 'mobx-react-router'
//import createHashHistory from 'history/createHashHistory'
import { createBrowserHistory } from 'history'

export const routingStore = new RouterStore()
//export const hashHistory = createHashHistory()
export const browserHistory = createBrowserHistory()

//export const history = syncHistoryWithStore(hashHistory, routingStore)
export const history = syncHistoryWithStore(browserHistory, routingStore)
