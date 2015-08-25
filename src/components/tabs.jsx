import React from 'react/addons'
import Radium from 'radium'
import assign from 'object-assign'
import { ORANGE } from '../style/style-consts.jsx'
import { textCenter } from '../style/style.jsx'

@Radium
class Tabs extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeTab: 0 }
    this.select = this.select.bind(this)
  }

  render () {
    const style = {
      tabs: {
        border: `1px solid rgb(222, 222, 222)`
      , position: `relative`
      , zIndex: 1
      }
    }

    var self = this

    var children = React.Children.map(this.props.children, (child, i) => {
      return React.addons.cloneWithProps(child, {
        activeTab: self.state.activeTab
      , select: self.select
      , index: i })
    })

    return (
      <div select={ this.select } style={ style.tabs }>
        { children }
      </div>
    )
  }

  select (i) {
    this.setState({ activeTab: i })
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
        onClick={ this.props.select.bind(this, this.props.index) }
        style={ [tabStyle, textCenter] }>
        { this.props.children }
      </a>
    )
  }
}

export { Tabs, Tab }
