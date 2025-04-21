import React, { useCallback, useState,useEffect } from 'react'
import './Todo.css'

function ToDo() {
    const [task,setTask]=useState('')

    const[todoList,setTodoList]=useState(() => {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : [];
    });

   
   //Save todos to localStorage every time the list changes
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const handleInputChange=(e)=>{
      setTask(e.target.value)
    }

    const handleAdd=useCallback(()=>{
      if (task.trim() === '') return;

      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setTodoList((prevList)=>[...prevList,newTask])
      setTask('')
    },[task]);

    const handleDelete = useCallback((id) => {
      setTodoList((prevList) => prevList.filter((item) => item.id !== id));
    }, []);
    
    const toggleComplete = useCallback((id) => {
      setTodoList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    }, []);

  return (

<div id='container'>

    <div id='first'>

        <h1>ToDo App</h1>

        <div id='sub-first'>

        <label id='label'>Task : </label>

        <input id='input' type='text' placeholder='Add a new todo' value={task} onChange={handleInputChange} />
        <button  type='button' onClick={handleAdd} id="btn">Add</button>
        

      </div>
      
     
      <ol id='todo-list'>
          {todoList.map((item) => (
            <li key={item.id} className='todo-item'>
              <input
                type='checkbox'
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              <span className={item.completed ? 'completed' : ''}>
                {item.text}
              </span>
              <button className='delete-btn' onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
       
      </div>
       
        
    
</div>

    
  )
}

export default ToDo