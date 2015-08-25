/*

  router.jsx
  ==========

  This is the entry point of the application, which is built by webpack.
  It wraps our controller view, as well as our pages in react-router's routing
  system, allowing App's `<RouteHandler />` to load components based on the
  current path.

*/

// Dependencies

import React from 'react'
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router'

// Controller View

import App from './components/app.jsx'

// 'Pages', so to speak

import Home from './components/pages/home.jsx'
import About from './components/pages/about.jsx'
import ProductsAndServices from './components/pages/products-and-services.jsx'
import Press from './components/pages/press.jsx'
import Partnerships from './components/pages/partnerships.jsx'
import ContactUs from './components/pages/contact-us.jsx'
import Search from './components/pages/search.jsx'
import TermsAndConditions from './components/pages/terms-and-conditions.jsx'
import NotFound from './components/pages/not-found.jsx'

const routes = (
  <Route handler={ App }>
    <Route path='/' handler={ Home } />
    <Route path='/about' handler={ About } />
    <Route path='/products-and-services' handler={ ProductsAndServices } />
    <Route path='/press' handler={ Press } />
    <Route path='/partnerships' handler={ Partnerships } />
    <Route path='/contact-us' handler={ ContactUs } />
    <Route path='/search' handler={ Search } />
    <Route path='/terms-and-conditions' handler={ TermsAndConditions } />
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
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
