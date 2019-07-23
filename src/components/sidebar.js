import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <ul>
        <li style={{ marginBottom: '40px', fontSize: '18px', color: '#2EC4B6'}}>
        <strong className="site-title">A Style Guide.</strong>

      </li>
      <li >
        <Link
          to="/greeting"
        >
          Welcome
        </Link>
      </li>

      <li>
        <Link to="/colors"
         
        >
          Colors
        </Link>
      </li>


      <li>
        <Link
          to="/typography">
          Typography
        </Link>
      </li>


      <li >
        <Link
          to="/buttons">
          Buttons
        </Link>
      </li>


      <li>
        <Link
          to="/modals">
          Modals
        </Link>
      </li>

      <li>
        <Link
          to="/alerts">
          Alerts
        </Link>
      </li>
    </ul>
    <span className="mini-foot" style={{position: 'absolute', bottom: '0', padding: '10px', color: '#fff', fontSize: '12px'}}>
        Find it on <a href="https://github.com/rharley95/my-style-guide" style={{color: '#2EC4B6' }}>Github.</a>
    </span>
  </div>
)


export default Sidebar
