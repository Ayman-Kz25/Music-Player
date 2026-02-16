import React from 'react'
import Home from './screens/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App