import { useState } from 'react'
import './App.css'

function App() {
  // inicial state would be false untill it is used 
  const [message, setMessage] = useState(false)

  const buttonHandlerClick = () => {
    // to set the state true after the button is clicked and show message
    setMessage(true);
  }
// test
  return (
    <>
      <div>
        <h2>Hey</h2>

        <p>question</p>

        <button id="loveButton" onClick={buttonHandlerClick}>Click</button>
        {message && (
          < div id="messageBox">answer from dev</div>
        )}

      </div >
    </>
  )
}

export default App
