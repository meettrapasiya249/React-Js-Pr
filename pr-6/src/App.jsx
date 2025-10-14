import { useState } from 'react'  
import EmpCrud from './Components/EmpCrud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EmpCrud />
    </>
  )
}

export default App
