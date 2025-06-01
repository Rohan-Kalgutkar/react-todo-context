import { createContext, useContext } from "react";


export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            title: "Sample Todo",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleCompleteTodo: (id) => {},


});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;