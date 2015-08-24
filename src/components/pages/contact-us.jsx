import React from 'react'
import Radium from 'radium'
import { max, greyBackground, textCenter, smallHeader } from '../../style/style.jsx'
import ContactForm from '../contact-form.jsx'

@Radium
export default class ContactUs {
  render () {
    const mapStyle = {
      width: `100%`
    , height: `380px`
    }

    const padding = {
      padding: `20px`
    }

    const margin = {
      margin: `50px 0`
    }

    return (
      <div style={ [this.props.footerMargin, greyBackground] }>
        <iframe width="600" height="450" frameborder="0" style={ mapStyle } src="https://www.google.com/maps/embed/v1/place?q=777%20Richmond%20Street%20West%2C%20Toronto%2C%20ON%2C%20Canada&key=AIzaSyDJ9ME7by5XGppz_Il4XAvZ_3raMoig0Jg" allowfullscreen></iframe>

        <div style={ padding }>
          <div style={ max }>
            <div style={ textCenter }>
              <div style={ smallHeader }>
                We are only a CLICK - I.T™ away
              </div>

              <div>
                And remember, "Mighty oaks from little acorns grow!"
              </div>

              <hr style={ margin } />

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
