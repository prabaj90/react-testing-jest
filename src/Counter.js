import React, {useState} from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>This is counter app</h1>
       <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={()=>setCounter(counter+1)}>Increment</button>
      <button id="decrement-btn" onClick={()=>setCounter(counter>0?counter-1:0)}>Decrement</button>
        </div>
    )
}
