import React from 'react'

class WhichOneAreYou {
  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      }
    , tile: {
        float: `left`
      , width: this.props.wide ? `50%` : `100%`
      }
    }

    return (
      <div style={ style.wrapper }>
        <div>Which One Are You?</div>
        <div>
          <div style={ style.tile }>Customers</div>
          <div style={ style.tile }>Resellers</div>
        </div>
      </div>
    )
  }
}

export default WhichOneAreYou
