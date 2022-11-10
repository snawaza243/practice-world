// date: 07-10-2022
import './MyCounter.css'
// stateless
import React, { useState } from 'react'

const MyCounter = () => {
  const initialValue =0
  const [counter, setCounter] = useState(initialValue)
  const countPlus = () => {
    setCounter(counter + 1)  
  }

  // const countMinus = () => {
  //   setCounter(counter - 1)
  // }
  
  // const countMinus = () => {
  //   counter > 0 ? setCounter(counter - 1) : setCounter(0)
  // }

  return (
    <>
      <div id='container'>
        <div id='container-box'>
          <div id='app-title'>
            <h1>Counter App</h1>
            <h3>Stateless : Hooks-useState</h3>
          </div>
          <div id='result'>
            <h1>Lest's Counting: {counter}</h1>
          </div>
          <div id='bottom'>
            <button 
            onClick={()=>setCounter(counter +1)}
            >Increase</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button><br></br>
            <button onClick={()=>
          counter > 0 ? setCounter(counter - 1) : setCounter(0)  
          }>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCounter;