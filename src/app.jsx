import React from 'react'
import Router from 'react-router'
import { Route, RouteHandler } from 'react-router'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './components/home.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { wide: `` }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
  }

  componentDidMount () {
    const mql = matchMedia(`(min-width: 800px)`)
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql, wide: mql.matches })
  }

  mediaQueryChanged () {
    this.setState({ wide: this.state.mql.matches })
  }

  render () {
    return (
      <div id='app'>
        <Header links={ this.props.data.links } wide={ this.state.wide } />
        <RouteHandler />
        <Footer />
      </div>
    )
  }
}

const routes = (
  <Route handler={ App }>
    <Route path='/' handler={ Home } />
  </Route>
)

Router.run(routes, Root => {
  const data = {
    links: [
      { name: `About Us`, path: `` }
    , { name: `Products and Services`, path: `` }
    , { name: `Press`, path: `` }
    , { name: `Partnerships`, path: `` }
    , { name: `Contact Us`, path: `` }
    , { name: <i className='fa fa-search'></i>, path: `` }
    ]
  }

  React.render(<Root data={ data }/>, document.body)
})
