import React, { createContext, useState } from 'react';
import { Todo } from '../models/Todo';
import { get } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(get);

    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length + 1, title: title, done: false };
        setTodos([...todos, todo]);

        console.log('Adicionou: ' + title);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => 1 !== index))
        console.log('Removeu: ' + todo.title);
    }

    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos])
        console.log('Alterou: ' + todo.title);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;