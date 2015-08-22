import React from 'react'
import { RouteHandler } from 'react-router'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { FOOTER_HEIGHT } from '../style/style-consts.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { wide: ``, footerMargin: {} }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
  }

  componentDidMount () {
    const mql = matchMedia(`(min-width: 800px)`)
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql, wide: mql.matches
    , footerMargin: {
        marginBottom: mql.matches
          ? `${ FOOTER_HEIGHT }px`
          : `${ FOOTER_HEIGHT * 1.5 }px`
      }
    })
  }

  mediaQueryChanged () {
    this.setState({ wide: this.state.mql.matches
    , footerMargin: {
        marginBottom: this.state.mql.matches
          ? `${ FOOTER_HEIGHT }px`
          : `${ FOOTER_HEIGHT * 1.5 }px`
      }
    })
  }

  render () {
    return (
      <div id='app'>
        <Header links={ this.props.data.links } wide={ this.state.wide } />
        <RouteHandler wide={ this.state.wide } footerMargin={ this.state.footerMargin } />
        <Footer wide={ this.state.wide } />
      </div>
    )
  }
}

export default App
