import { useDispatch, useSelector } from "react-redux";
import React from "react";
import './App.css'
import { decrement, increment } from "./actions";
function App() {
  const selector=useSelector(state=> state.counter)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter: {selector}</h1>
    <button className="btn" onClick={()=>dispatch(decrement())}>-</button>
     
     <button  className="btn" onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
