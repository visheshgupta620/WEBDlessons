import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

  const todoList = props.todos.map(item => {
    return <Todo key={item.id} item={item} deleteTodo={props.deleteTodo} checkbox={props.check}/>
  })

  return (
    <div>
        {todoList}
    </div>
  )
}

export default TodoList