import { AnimatePresence } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom';
import Router from 'router';
import './App.css'

function App() {

  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
