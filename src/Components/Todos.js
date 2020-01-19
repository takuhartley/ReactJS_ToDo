import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
                <TodoItem />
            ));
    }
}

export default Todos;