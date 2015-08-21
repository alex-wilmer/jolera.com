import React from 'react'
import consts from '../style/style-consts.jsx'

class WhichOneAreYou {
  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      , margin: `${ consts.SPACING + 10 }px 0 ${ consts.SPACING }`
      }
    , tile: {
        float: `left`
      , width: this.props.wide ? `50%` : `100%`
      }
    }

    return (
      <div style={ style.wrapper }>
        <div>Which One Are You?</div>
        <div className='clearfix'>
          <div style={ style.tile }>Customers</div>
          <div style={ style.tile }>Resellers</div>
        </div>
      </div>
    )
  }
}

export default WhichOneAreYou
