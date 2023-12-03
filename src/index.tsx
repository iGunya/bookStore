import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"

import App from "./components/app"
import ErrorBoundry from "./components/error-boundry"
import {store} from "./srote"
import {BrowserRouter} from 'react-router-dom'
import {SimpleService} from './components/bookstore-service-context/bookstore-service-context'


const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SimpleService>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </SimpleService>
    </ErrorBoundry>
  </Provider>
);
