import React from 'react'
import Router from 'react-router'
import { Route, RouteHandler } from 'react-router'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

class App {
  render () {
    return (
      <div id='app'>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    )
  }
}

const routes = (
  <Route name='app' path='/' handler={ App }>

  </Route>
)

Router.run(routes, Handler => {
  React.render(<Handler />, document.body)
})
