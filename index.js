import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'mortuumintenebris.github.io/style.css'
import Services from 'mortuumintenebris.github.io/views/services'
import Home from 'mortuumintenebris.github.io/views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Services} path="/services" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
