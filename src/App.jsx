import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './USers'
import Friends from './Friends'

function App() {
  
  function clickHandler () {
    alert('Button Click')
  }

  const clickHandler2 = () => {
    alert('Button Click')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={clickHandler2}>Click 2</button>
      <button onClick={()=>{alert('clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
