import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'
import { textCenter } from '../style/style.jsx'

class Tabs {
  render () {
    const style = {
      tabs: {
        border: `1px solid rgb(222, 222, 222)`
      , position: `relative`
      , zIndex: 1
      }
    }

    return <div style={ style.tabs }>{ this.props.children }</div>
  }
}

@Radium
class Tab extends React.Component {
  render () {
    const style = {
      tab: {
        backgroundColor: `white`
      , padding: `50px`
      , display: `inline-block`
      , width: `33.33%`
      }
    }

    const tabStyle = this.props.border
      ? assign({}, style.tab, { borderLeft: `1px solid rgb(222, 222, 222)` })
      : style.tab

    return (
      <a style={ [tabStyle, textCenter] }>{ this.props.children }</a>
    )
  }
}

export { Tabs, Tab }
