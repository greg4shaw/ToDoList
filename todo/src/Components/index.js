import React from 'react';
import ToDo from "./todo";
import ToDoForm from "./form";
// Creating a component
function Run() {
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted: false}];
        setTodos(newTodos);
    } 

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) =>
                <ToDo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                <ToDoForm addTodo={addTodo}/>
            </div>  
        </div>
    );
}

export default Run;

//ReactDOM.render(<App/>, document.getElementById("root"));