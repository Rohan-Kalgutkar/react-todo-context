
import './App.css';
import React, { useEffect, useState } from 'react';
import {TodoProvider} from './context/Index.js';
import TodoForm from './components/TodoForm.js';
import TodoItem from './components/TodoItem.js';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}]);

  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => 
      prev.map(prevtodo => prevtodo.id === id ? todo : prevtodo)
    );
  }

  // const updateTodo = (id, todo) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((t) =>
  //       t.id === id ? { ...t, ...todo } : t
  //     )
  //   );
  // };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  }

  const toggleCompleteTodo = (id) => {
    setTodos((prev)=> prev.map(prevtodo => prevtodo.id===id? {...prevtodo, completed:!prevtodo.completed}:prevtodo ))
  }


  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem('todos') )
    if(todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  } , [todos]);



  return (
   <TodoProvider value={{todos, addTodo, updateTodo, removeTodo,toggleCompleteTodo}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

   </TodoProvider>
  );
}

export default App;
