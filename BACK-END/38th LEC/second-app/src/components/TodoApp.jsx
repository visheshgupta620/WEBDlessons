import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import Todolist from './TodoList'
// import {v4 as uuid} from 'uuid'

const TodoApp = () => {

  // const dummy_todos = [
  //   {id:uuid(), text:'Buy Groceries'},
  //   {id:uuid(), text:'Learn React'},
  //   {id:uuid(), text:'Go to Gym'},
  //   {id:uuid(), text:'Make food'},
  // ]
  const data = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState([data]);

  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  }
  function checkbox(id){
    const newarr = todos.map((item) =>{
      if(item.id === id){
        const newitem = {...item,check:!item.check};
        return newitem;
      }
      else{
        return item
      }
    });
    setTodos(newarr)
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  function addTodo(todo){
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div>
        <InputForm todos={todos} addTodo={addTodo}/>
        <Todolist todos={todos} deleteTodo={deleteTodo} check={checkbox}/>
    </div>
  )
}

export default TodoApp