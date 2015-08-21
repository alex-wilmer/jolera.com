import React from 'react'
import Router, { Route } from 'react-router'

import App from './components/app.jsx'
import Home from './components/home.jsx'

const routes = (
  <Route handler={ App }>
    <Route path='/' handler={ Home } />
  </Route>
)

Router.run(routes, Root => {
  const data = {
    links: [
      { name: `About Us`, path: `/` }
    , { name: `Products and Services`, path: `/` }
    , { name: `Press`, path: `/` }
    , { name: `Partnerships`, path: `/` }
    , { name: `Contact Us`, path: `/` }
    , { name: <span>&nbsp;<i className='fa fa-search'></i></span>, path: `/` }
    ]
  }

  React.render(<Root data={ data } />, document.body)
})
