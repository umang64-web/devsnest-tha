import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TODOI from './interfaces/TodoInterface';
function App() {

  const [todos,setTodos]= useState<TODOI[]>([{
     id:1,
     text:"to do coding",
     completed: false,
  },
  {
    id:2,
    text:"do eating",
    completed: true,
 }
]);
   
    const addTodo=(todo: string): void=>{

        const data: TODOI= {
            id: todos.length>0? todos[todos.length-1].id+1:1,
            text: todo,
            completed: false,
        }
      setTodos((prevTodos)=> [...prevTodos,data]);
      window.alert("Todo added successfully")
    }

  return (
    <div className="container">
      <h1 className="text-center my-2">React typescript todo</h1>
            <div className="row">
               <Form addTodo={addTodo}/> 
            </div>
        </div>
  );
};

export default App;