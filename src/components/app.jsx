/*

  app.jsx
  =======

  This is the controller view. All UI-only state is housed and updated here.
  Any components that must be on all pages are loaded here.

*/

// Dependencies

import React from 'react'
import { RouteHandler } from 'react-router'

// Child components

import Header from './header.jsx'
import Footer from './footer.jsx'

// Style

import { FOOTER_HEIGHT } from '../style/style-consts.jsx'

// SharePoint Services

import { getItems } from '../sharepoint-services/list.jsx'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { wide: ``, footerMargin: {}, partners: [] }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)

    getItems(`Partners`, { site: _spPageContextInfo.webTitle })
      .then(data => this.setState({ partners: data }))
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

        <RouteHandler
          wide={ this.state.wide }
          footerMargin={ this.state.footerMargin }
          partners={ this.state.partners } />

        <Footer wide={ this.state.wide } />
      </div>
    )
  }
}
