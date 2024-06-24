import React, { useEffect, useState } from 'react';
import LifeCycle from './Components/LifeCycle';
import InputComponent from './Components/InputComponent';
import TodosList from './Components/TodosList';

const App = () => {
  const[todos, setTodos]=useState([])
  const[filteredTodos, setFilterTodos]=useState([])
  const addTodoData=(newTitle,newDesc)=>{
    let newData={
      id: todos.length+1,
      title: "office task 1",
      description:"newDesc",
      completed:'false'
     }
     
    setTodos([...todos,newData])
    console.log("added");
   

  }
  console.log(todos);
  const deletetodoItem=(id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))

  }




  return (
    <div>
      {/* <h1>App Comp </h1> */}
      {/* <LifeCycle /> */}
      <InputComponent  addTodoData={addTodoData}/>
       {todos.map((item, index)=>{
        return(
          <>
          <TodosList item={item} index={index} deletetodoItem={deletetodoItem}  />
          
          </>

        )
       })}


     
    </div>
  );
};

export default App;