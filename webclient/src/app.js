import React from 'react'
import RootReducer from './redux/rootReducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Page from './components/page'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './styles/app.css'

const store = createStore(RootReducer)

const App = (props) => {

  return <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Page} />
        <Route component={Home} />
      </Switch>
      </BrowserRouter>
  </Provider>
}

export default App
