import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const InputForm = (props) => {

  const [input, setInput] = useState('');

  function submitHandler(e){
    e.preventDefault();
    // console.log(input);
    const newTodo = {id:uuid(), text:input, check:false};
    props.addTodo(newTodo);
    setInput('');
  }

  function changeHandler(e){
    setInput(e.target.value);
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} type="text" placeholder='Type here...' value={input}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default InputForm