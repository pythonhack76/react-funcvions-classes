import React from 'react';
import './App.css';

const Todo = (props) => {

  return (

    <div>
      {props.todo.name}
    </div>
    
  )
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

          </div>
        </div>
      )
    }
}
 

export default App;
