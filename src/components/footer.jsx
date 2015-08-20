import React from 'react'
import style from '../style/style.jsx'

class Footer {
  render () {
    return (
      <div style={ style.footer }>
        <div style={ style.max }>
          <div>
            Top row
          </div>
          <div>
            Bottom row
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
