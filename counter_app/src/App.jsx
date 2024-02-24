import { useState } from 'react'



function App() {
  
  let [counter,setCounter]=useState(0)
  function addValue(){
    if (counter===20){
      return counter;
    }
    else{
    setCounter(counter+1);
    console.log("value updated",counter);}
    
  }
  function redValue(){
    if (counter===0){
      return 0;
    }else{
    setCounter(counter-1);
    console.log("value decreased",counter);}
  }
  

  return (
    <>
      <h1>HELLO</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={redValue}>Decrease value</button>

    </>
  )
}

export default App
