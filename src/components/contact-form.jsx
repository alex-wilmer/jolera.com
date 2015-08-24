import React from 'react'
import Radium from 'radium'

@Radium
export default class ContactForm extends React.Component {
  render () {
    const inputStyle = {
      padding: `20px`
    , fontSize: `1.2em`
    , width: `100%`
    , '@media (min-width: 800px)': {
        width: `480px`
      , display: `block`
      }
    }

    const marginTop = {
      marginTop: `20px`
    }

    const height = {
      height: `200px`
    }

    return (
      <div>
        <input key='1' placeholder='I have a message for..' style={ inputStyle } />
        <input key='2' placeholder='* First name' style={ [inputStyle, marginTop] } />
        <input key='3' placeholder='* Last name' style={ [inputStyle, marginTop] } />
        <input key='4' placeholder='* Email' style={ [inputStyle, marginTop] } />
        <input key='5' placeholder='Phone number' style={ [inputStyle, marginTop] } />
        <input key='6' placeholder='Company' style={ [inputStyle, marginTop] } />
        <input key='7' placeholder='Company' style={ [inputStyle, marginTop] } />
        <textarea
          key='8'
          placeholder='Type your message here..'
          style={ [inputStyle, marginTop, height] } />
      </div>
    )
  }
}
