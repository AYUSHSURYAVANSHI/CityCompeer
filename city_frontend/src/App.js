
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Redirect to="**" /> */}
      </Routes>
    </Router>
  )
}

export default App;

