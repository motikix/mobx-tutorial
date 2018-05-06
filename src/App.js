import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.todoList.todos.map(todo => (
              <TodoView todo={todo} key={todo.id} />
            ))}
          </ul>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
        <br />
        <AddTodo addTodo={this.props.todoList.addTodo} />
      </div>
    )
  }
}

const TodoView = ({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
)

const AddTodo = ({ addTodo }) => {
  let textInput = null
  return (
    <div>
      <input type="text" ref={ref => (textInput = ref)} />
      <input
        type="button"
        value="Add Todo"
        onClick={() => addTodo(textInput.value)}
      />
    </div>
  )
}

export default App
