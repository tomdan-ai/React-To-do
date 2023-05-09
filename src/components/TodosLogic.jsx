import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'setup development',
            completed: true,
        },
        {
            id: uuidv4(),
            title: 'Develop website development',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Deploy website',
            completed: false,
        },
    ]);
    useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
       function getInitialTodos(){
        const temp = localStorage.getItem(todos);
        const savedTodos = JSON.parse(temp)
        return savedTodos || [];
        }
    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !==id;
            }),
        ]);
    };
    const addTodoItem = (title) => {
        const newTodo ={
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) =>{
                if (todo.id === id) {
                    todo.title =updatedTitle;
                }

                return todo;
            })
        );
    };

    return(
        <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todosProps={todos} 
        setTodos={setTodos} 
        delTodo={delTodo}
        setUpdate={setUpdate}
        />
        </div>  
    );
};
export default TodosLogic;