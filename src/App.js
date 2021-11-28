import React from 'react';
import './App.css';

const Todo = (props) => {

  return (

    <div style={{textDecoration: props.todo.completato ? 'line-through': ''}} className="todo">
      {props.todo.name}
      <div>
        <button onClick={() => props.completaTodo(props.index)}>completa</button>
      </div>
    </div>

  )
}

class Form extends React.Component {

  state = {
    value: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === ""){
      alert("scrivi qualcosa");
      return
        }
    if (this.state.value.length <= 3){
      alert("scrivi qualcosa più lungo di 3 caratteri");
      return
    }
    
    this.props.submit(this.state.value)
    this.setState({
      value: ''
    })
  }
  
    onChangeText = (e) => {
      this.setState({
        value: e.target.value
      })
    }
render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input" type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText} />
      </form>
    )
  }
}



class App extends React.Component {
  state = {
    todos: [
      { name: 'finire un lavoro', completato: false},
      { name: 'farsi pagare', completato: false},
      { name: 'finire un lavoro', completato: false},
    ]
  }
  addTodo = (todo) => {

    const newTodos = [...this.state.todos, { name: todo }]
    this.setState({
      todos: newTodos 
    })

  }

  completaTodo = (index) => {

    const newTodos = [...this.state.todos];
    newTodos[index].completato = true; 
    this.setState({
      todos: newTodos
    })
  }
    render() {
      return (
        <div className="app">
          <div className="todo-list">
            {this.state.todos.map((item, index) => (
              <Todo key={index} todo={item} index={index} completaTodo={this.completaTodo} />
            ))}
            <Form submit={this.addTodo} />

          </div>
        </div>
      )
    }
}
 

export default App;
