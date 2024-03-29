import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Routes from '@src/routes'
import history from '@src/routes/history'
import stores from '@src/shared/stores'
import Loader from '@src/shared/components/Loader'

const App = () => (
  <Provider store={stores}>
    <ConnectedRouter history={history}>
      <Routes />
      <ToastContainer />
    </ConnectedRouter>
  </Provider>
)

export default () => (
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
