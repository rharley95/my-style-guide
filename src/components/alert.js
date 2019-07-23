import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Alert = ({ siteTitle }) => (
  <div className="alert"
    style={{
      border: '1px solid #ED5D6F',
      background: '#F6AFAA',
      borderRadius: `3px`,
      margin: '35px auto'
    }}
  >
    
      <h4 style={{ padding: '10px 10px', margin: '0' }}>
          ALERT!
      </h4>
      <p style={{ padding: '0 10px', fontSize: '14px', margin: '0'}}>These pop-ups alerts appear at the top of the page whenever a severe error occurs.
      <br></br>
      Followed by <strong><a href="#" style={{ textDecoration: 'none', color: '#000'}}>a link.</a></strong> </p>

      

  </div>
)

export default Alert
