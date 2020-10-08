import React from 'react';
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1>Meu primeiro componente</h1>
            <TodoList></TodoList>

        </div>
    );
}

export default App;