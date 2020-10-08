import React from 'react';
import { Todo } from "../Models/Todo"


const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'Cinema', done: false },
        { id: 2, title: 'Carros', done: true }
    ];
    return (
        <div>{todos[0].}</div>
    );
}

export default TodoList;