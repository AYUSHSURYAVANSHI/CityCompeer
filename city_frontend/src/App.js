
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import ChatbotBox from './components/chatbot'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />

        <Route path="/chatbot" element={< ChatbotBox />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Redirect to="**" /> */}
      </Routes>
    </Router>
  )
}

export default App;

