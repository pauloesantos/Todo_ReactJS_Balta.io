import React from 'react';
import { Todo } from "../models/Todo"
import TodoListItem from "./TodoListitem"


const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'Cinema', done: false },
        { id: 2, title: 'Carros', done: true }
    ];
    return (
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;