// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals
import randomcolor from "randomcolor"



import {useState, useEffect} from "react"

export default function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")


  function increment() {
    setCount(prevCount => prevCount + 1)
}

function decrement() {
  setCount(prevCount => prevCount - 1)
}
useEffect(() => {
  setColor(randomcolor())
}, [count])
  return(
    <div>
            <h1 style={{color: color}}>{count}</h1>
      {/* building a anonym function that start the setCount  */}
      <button onClick={increment}>increment!</button>
      <button onClick={decrement}>increment!</button>

    </div>
  )

}

