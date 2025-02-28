import React from 'react'
// import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'

function App() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter() {
  return <>
    <CurrentCount/>
    <Increase />
    <Decrease/>
  </>
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom)
  return <div>{count}</div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)
  
  function increaseCount() {
    setCount(c => c + 1)
  }
  
  return <div>
    <button onClick={increaseCount}>increase</button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom)
  
  function decreaseCount() {
    setCount(c => c - 1)
  }
  
  return <div>
    <button onClick={decreaseCount}>decrease</button>
  </div>
}

export default App