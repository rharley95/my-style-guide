import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Modal = ({ siteTitle }) => (
  <div
    style={{
      border: '1px solid #5B83B2',
      borderRadius: `3px`,
      height: '280px',
      width: '400px',
      margin: '35px auto'
    }}
  >
    
      <h2 style={{ padding: '15px 20px 5px 20px' }}>
          Pop-up title
      </h2>
      <p style={{ padding: '0 20px', fontSize: '14px'}}>These pop-ups' typography are text at 14px with a title that is an h2 in the Open Sans font.</p>
      <p style={{ padding: '0 20px', fontSize: '14px'}}>If there is text that needs to be emphasized we tend to <i>Italize it</i>, or <strong>make it heavier.</strong></p>
      <button type="button" class="regular-btn">
    Move on
  </button>
  <button style={{ marginLeft: '85px' }} type="button" class="inactive-btn">
    ..Or exit
  </button>

  </div>
)

export default Modal
