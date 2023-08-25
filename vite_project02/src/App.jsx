
import { useState } from 'react';
import './App.css'

function App() {

  let [Counter,setCounter] = useState(15)
  // let Counter = 15;
  const addValue = () => {
    console.log("value added", Counter)
    Counter = Counter + 1;
    if(Counter <= 20){
      setCounter(Counter);
    }else{
      alert("can't increase value after 20")
    }
  }
  const decreaseValue = () => {
    Counter = Counter - 1;
    if(Counter >= 0){
      setCounter(Counter);
    }else{
      alert("can't decrease value further 0")
    }
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value : {Counter}</h2>

      <button onClick={addValue}>Add Value</button> <br /> <br />
      <button onClick={decreaseValue}>Decrease Value {Counter}</button>
      <p>footer: {Counter} </p>
    </>
  )
}

export default App
