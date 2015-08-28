// Dependencies

import React from 'react/addons'
import Radium from 'radium'
import assign from 'object-assign'

// Style

import { ORANGE } from '../style/style-consts.jsx'
import { textCenter, blueBackground, max } from '../style/style.jsx'

@Radium
class Tabs extends React.Component {
  render () {
    const style = {
      tabs: {
        border: `1px solid rgb(222, 222, 222)`
      , position: `relative`
      , zIndex: 1
      }
    }

    const self = this

    const tabs = React.Children.map(this.props.children, (child, i) => {
      return React.addons.cloneWithProps(child, {
        activeTab: self.props.activeTab
      , onSelect: self.props.onSelect
      , index: i })
    })

    return (
      <div style={ [max, style.tabs] }>
        { tabs }
      </div>
    )
  }
}

@Radium
class Tab extends React.Component {
  render () {
    const style = {
      tab: {
        backgroundColor: `white`
      , padding: `40px`
      , display: `inline-block`
      , width: `33.33%`
      , borderBottom: `10px solid white`
      , verticalAlign: `top`
      }
    }

    let tabStyle = this.props.border
      ? assign({}, style.tab, { borderLeft: `1px solid rgb(222, 222, 222)` })
      : style.tab

    tabStyle = this.props.activeTab === this.props.index
      ? assign({}, tabStyle, { borderBottom: `10px solid ${ ORANGE }` })
      : tabStyle

    return (
      <a
        onClick={ this.props.onSelect.bind(this, this.props.index) }
        style={ [tabStyle, textCenter, this.props.minHeight] }>
        { this.props.children }
      </a>
    )
  }
}

@Radium
class TabPanels extends React.Component {
  render () {
    const self = this

    const tabPanels = React.Children.map(this.props.children, (child, i) => {
      return React.addons.cloneWithProps(child, {
        activeTab: self.props.activeTab
      , index: i })
    })

    return <div>{ tabPanels }</div>
  }
}

@Radium
class TabPanel extends React.Component {
  render () {
    const active = {
      display: this.props.activeTab === this.props.index ? `block` : `none`
    }

    return (
      <div style={ active }>
        <div>{ this.props.children }</div>
      </div>
    )
  }
}

export { Tabs, Tab, TabPanels, TabPanel }
