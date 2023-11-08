import { useState } from 'react'
import './App.css'
import Child from './child';
import CountText from './CountText';
// main application function to have this application.
function App() {

  return (
    <div>
      {/* counter componenet */}
      <CountText />
      <div className="grid-container">
        <Child row="0" col="0"/>
        <Child row="0" col="1"/>
        <Child row="1" col="0"/>
        <Child row="1" col="1"/>
      </div>
    </div>
    

  )
}

export default App
