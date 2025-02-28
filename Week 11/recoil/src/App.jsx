import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Counter/>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return <>
    {count}
    <Increase count={count} setCount={setCount}/>
    <Decrease count={count} setCount={setCount}/>
  </>
}

function Increase({count, setCount}) {
  function increaseCount() {
    setCount(count + 1)
  }
  return <div>
    <button onClick={increaseCount}>increase</button>
  </div>
}

function Decrease({count, setCount}) {
  function decreaseCount() {
    setCount(count - 1)
  }
  return <div>
    <button onClick={decreaseCount}>decrease</button>
  </div>
}

export default App