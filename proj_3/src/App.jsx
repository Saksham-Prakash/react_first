import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-400 text-black rounded-xl p-4 mb-6'>HELLO WORLD!</h1> */}
      <Card username="Saksham" btnText="click me"/>
      <Card username="PRAKASH" />

    </>
  )
}

export default App
