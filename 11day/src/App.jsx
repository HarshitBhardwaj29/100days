import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addButton(){
    setCount(count+1);
  }
  function subButton(){
    if(count<1){
      alert('count cant be negative');
    }
    else{
      setCount(count-1);
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addButton}>Add +</button>
      <button onClick={subButton}>Subtract -</button>
    </>
  )
}

export default App
