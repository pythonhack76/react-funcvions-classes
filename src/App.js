import React from 'react';
import './App.css';

const Todo = (props) => {

  return (

    <div className="todo">
      {props.todo.name}
    </div>

  )
}

class Form extends React.Component {

  state = {
    value: ''
  }
  handleSubmit = () => {
    this.props.submit(this.state.value)
  }
  
    onChangeText = (e) => {
      this.setState({
        value: e.target.value
      })
    }
render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText} />
      </form>
    )
  }
}



class App extends React.Component {
  state = {
    todos: [
      { name: 'finire un lavoro', completato: true},
      { name: 'farsi pagare', completato: true},
      { name: 'finire un lavoro', completato: true},
    ]
  }

    render() {
      return (
        <div className="app">
          <div className="todo-list">
            {this.state.todos.map((item, index) => {
              <Todo key={index} todo={item} />
            })}
            <Form />

          </div>
        </div>
      )
    }
}
 

export default App;
