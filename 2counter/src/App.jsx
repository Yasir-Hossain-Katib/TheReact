import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setCounter]=useState(15)

  //let counter =15


  const addValue =() =>{
    
    if (counter<20){
      counter=counter+1
      setCounter(counter)
    }
    else{
      setCounter(counter=20)
      
    }
    
  }

  const removeValue =() =>{
    if (counter>0){
      counter=counter-1
      setCounter(counter)
    }
    else{
      setCounter(counter=0)
      
    }
  }
  

  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter Value:{counter}</h2>
    
       <button onClick={addValue}>Add Value {counter}</button>
       <br />
       <button onClick={removeValue}>Remove Value{counter}</button>
    
    
    </>

  )
}

export default App
