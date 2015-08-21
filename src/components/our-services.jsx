import React from 'react'

class OurServices {
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

    const data = [1, 2, 3]
    const tiles = data.map(m => {
      return (
        <div style={ style.tile }>
          <div>Image</div>
          <div>Title</div>
          <div>Description</div>
          <div>Slogan</div>
        </div>
      )
    })

    return (
      <div style={ style.wrapper }>
        <div>Our Services</div>
        { tiles }
        <div><a>VIEW ALL SERVICES</a></div>
      </div>
    )
  }
}

export default OurServices
