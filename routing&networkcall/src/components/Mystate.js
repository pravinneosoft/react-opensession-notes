import React,{useState} from 'react'

export default function Mystate() {
    const [count,setCount]=useState(0)
  return (
    <>
       <h2> State Examples</h2>
       <p> The counter is {count}</p>
       <button onClick={()=> setCount(count+1)}> Click Here</button>
    </>
  )
}
