import React from 'react'
import Router, { Route } from 'react-router'

import App from './components/app.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import ProductsAndServices from './components/products-and-services.jsx'
import Press from './components/press.jsx'
import Partnerships from './components/partnerships.jsx'
import ContactUs from './components/contact-us.jsx'
import Search from './components/search.jsx'

const routes = (
  <Route handler={ App }>
    <Route path='/' handler={ Home } />
    <Route path='/about' handler={ About } />
    <Route path='/products-and-services' handler={ ProductsAndServices } />
    <Route path='/press' handler={ Press } />
    <Route path='/partnerships' handler={ Partnerships } />
    <Route path='/contact-us' handler={ ContactUs } />
    <Route path='/search' handler={ Search } />
  </Route>
)

Router.run(routes, Root => {
  const data = {
    links: [
      { name: `About Us`, path: `/about` }
    , { name: `Products and Services`, path: `/products-and-services` }
    , { name: `Press`, path: `/press` }
    , { name: `Partnerships`, path: `/partnerships` }
    , { name: `Contact Us`, path: `/contact-us` }
    , { name: <span>&nbsp;<i className='fa fa-search'></i></span>, path: `/search` }
    ]
  }

  React.render(<Root data={ data } />, document.body)
})
