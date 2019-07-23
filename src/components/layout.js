/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Sidebar from "./sidebar";
import Image from "../components/image"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Sidebar />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '90%',
          paddingTop: 0,
        }}
      >
        {/* <div style={{ maxWidth: `30px`, maxHeight: '30px', display: 'flex', justifyContent: 'flex-end' }}>
      <Image />
    </div> */}
        
        <main>{children}</main>
      
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
