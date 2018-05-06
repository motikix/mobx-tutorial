import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import TodoList from './models/TodoList'

// create initialStore
const store = new TodoList()
store.addTodo('Get Cofee')
store.addTodo('Write simpler code')
store.todos[0].finished = true

ReactDom.render(
  <AppContainer>
    <App todoList={store} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render(
      <AppContainer>
        <NextApp todoList={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

window.store = store
