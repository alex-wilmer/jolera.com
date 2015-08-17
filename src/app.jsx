import React from 'react'
import Header from './components/header.jsx'

class App {
  render () {
    return (
      <div id='app'>
        <Header />
      </div>
    )
  }
}

React.render(<App />, document.body)
