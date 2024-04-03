import { useState } from "react"
import Counter from "./components/Counter"
function App() { 
  const [visible, setVisible] =useState(true);

  return (
    <>
      {visible && <Counter/> }
      <button onClick={()=> setVisible(!visible)}>Stop </button>
    </>
  )
}

export default App
