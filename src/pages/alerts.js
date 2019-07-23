import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Alert from "../components/alert"

const Alerts = () => (
  <Layout>
    <SEO title="Alerts Page" />
    <div>
              <h1>Watch out there!</h1> <hr></hr>
              <p><i>“Not only can color, which is under fixed laws, be taught like music, but it is easier to learn than drawing, whose elaborate principles cannot be taught.”</i> <strong>– Eugene Delacroix</strong></p>
              <Alert />
              <p>This is the alert styling we use whenever there is an error. Mostly seen on the Home application of Stukent.com. Contrary to good user experience, it forces the user to resolve their issue in order for the warning to go away.</p>
            
            
          </div>
  </Layout>
)

export default Alerts