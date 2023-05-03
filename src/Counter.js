import React, { useState,useEffect } from 'react'

const Counter = () => {
    useEffect(()=>{
        document.title="Hello world";
        setCount(100);
    },[])
    const [count,setCount]=useState(0);
  return (
    <div className='App'>
        <button onClick={()=>setCount(count-1)}>-</button>
        <div>{count}</div>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter