import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const[count,setCount]=useState(0)
    
    const handleDecrement=()=>{
        setCount((prevCount)=>(prevCount-1))
    }

    const reSet=()=>{
        setCount(0)
    }

    const handleIncrement=()=>{
        setCount((prevCount)=>(prevCount+1))
    }

  return (
    <div>
     <div className='container'>
      <h1>Counter App</h1>

    <h2>Count : {count}</h2>
    <div id='btn'>
      <button id='btn1' onClick={handleDecrement}>Decrement</button>
      <button id="btn2" onClick={reSet}>Reset</button>
      <button id="btn3" onClick={handleIncrement}>Increment</button>
      </div>
     </div>
    </div>
  )
}

export default Counter