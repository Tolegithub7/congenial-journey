import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Greeting, setGreeting] = useState("Hello")
  useEffect(() => {
    fetch('/api')
      .then((response) => response.text())
      .then(setGreeting)
  }, []);
  return (
    <>
      <h1>Greeting</h1>
      <h2>{Greeting}</h2>
    </>
  )
}

export default App
