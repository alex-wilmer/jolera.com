// Dependencies

import React from 'react'
import Radium from 'radium'

// Style

import { button, babyBlue } from '../style/style.jsx'

// Sharepint Services

import { insertItem } from '../sharepoint-services/list.jsx'

@Radium
export default class ContactForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = { sent: false }
    this.send = this.send.bind(this)
  }

  render () {
    const inputStyle = {
      padding: `20px`
    , fontSize: `1.2em`
    , fontFamily: `'Lato', sans-serif`
    , width: `100%`
    , border: `1px solid rgb(153, 153, 153)`
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

    const alignLeft = {
      textAlign: `left`
    }

    const lato = {
      fontFamily: `'Lato', sans-serif`
    }

    return (
      <div style={ [this.props.wide ? { float: `left` } : ''] } >
        <form onSubmit={ this.send }>
          <input ref='For' key='1' placeholder='I have a message for..' style={ [inputStyle] } />
          <input ref='First' key='2' placeholder='* First name' style={ [inputStyle, marginTop] } />
          <input ref='Last' key='3' placeholder='* Last name' style={ [inputStyle, marginTop] } />
          <input ref='Email' key='4' placeholder='* Email' style={ [inputStyle, marginTop] } />
          <input ref='Phone' key='5' placeholder='Phone number' style={ [inputStyle, marginTop] } />
          <input ref='Company' key='6' placeholder='Company' style={ [inputStyle, marginTop] } />
          <textarea
            ref='Message'
            key='7'
            placeholder='* Type your message here..'
            style={ [inputStyle, marginTop, height, lato] } />

          <div key='8' style={ [alignLeft] }>
            <input type='submit' value='Send' style={ [button, babyBlue, { float: `left` }] } />

            <div style={ [{
              margin: `40px 0 40px 20px`, float: `left`, transition: `opacity 0.3s ease`
            }, this.state.sent ? { opacity: 1 } : { opacity: 0 }] }>
              <strong>Thank you!</strong> We will get back to you as soon as possible.
            </div>
          </div>
        </form>
      </div>
    )
  }

  send (e) {
    e.preventDefault()

    const For = React.findDOMNode(this.refs.For).value.trim()
    const First = React.findDOMNode(this.refs.First).value.trim()
    const Last = React.findDOMNode(this.refs.Last).value.trim()
    const From = `${ First } ${ Last }`
    const Email = React.findDOMNode(this.refs.Email).value.trim()
    const Phone = React.findDOMNode(this.refs.Phone).value.trim()
    const Company = React.findDOMNode(this.refs.Company).value.trim()
    const Message = React.findDOMNode(this.refs.Message).value.trim()

    // TODO: Form Validation

    insertItem(`Contact Form Messages`, {
      Title: `New Message!`, For, From, Email, Phone, Company, Message
    }, id => console.log(id))

    React.findDOMNode(this.refs.For).value = ``
    React.findDOMNode(this.refs.First).value = ``
    React.findDOMNode(this.refs.Last).value = ``
    React.findDOMNode(this.refs.Email).value = ``
    React.findDOMNode(this.refs.Phone).value = ``
    React.findDOMNode(this.refs.Company).value = ``
    React.findDOMNode(this.refs.Message).value = ``

    this.setState({ sent: true })
    return
  }
}
