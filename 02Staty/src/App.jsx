import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React Counter thingy</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={subtractValue}>Subtract value</button>
    <p>Footer: This is a simple React app</p>
    </>
  )
}

export default App
