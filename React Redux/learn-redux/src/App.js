import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { increment } from "./actions";
function App() {
  const selector=useSelector(state=> state.counter)
  const dispatch=useDispatch();
  return (
    <div className="App">
     Counter: {selector}
     <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
