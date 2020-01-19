import React, { Component }from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Get Coffee',
        completed: false
      },
      {
        id: 2,
        title: 'Read Medium Articles',
        completed: false
      },
      {
        id: 3,
        title: 'Make a React ToDo site',
        completed: false
      }
    ]
  }
  render () {
    return (
      <div className="App">
        <Todos todos ={this.state.todos} />
      </div>
    )
  }
}

export default App;
