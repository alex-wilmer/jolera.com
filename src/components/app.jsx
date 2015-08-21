import React from 'react'
import { RouteHandler } from 'react-router'
import Header from './header.jsx'
import Footer from './footer.jsx'

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

export default App
