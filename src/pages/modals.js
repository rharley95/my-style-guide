import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/modal";

const Modals = () => (
  <Layout>
    <SEO title="Modals Page" />
    <div>
              <h1>Pop-up Modals</h1>
              <hr></hr>
              <p><i>“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” </i><strong>– Charles Eames</strong></p>
            <p>We use pop-ups modals in all of our applications whenever there is either a warning, error, or a prompt. Here is the basic design of all of them through our applications.</p>
          </div>
          <div>
              <Modal/>
          </div>
          <p>Remember to also use the buttons specified in the previous page! The point of a pattern library is to recycle our components, so that we may be able to have a consistent atmosphere.</p>
          <h3 style={{marginTop: '40px'}}>More details...</h3>
          <hr></hr>
          <p>This component is called <strong>Modal</strong> and here is the code.</p>
          <code class="codebox">
        //box looks...
        <br></br>
          border: '1px solid #5B83B2',
          <br></br>
      borderRadius: `3px`,
      <br></br>
      height: '280px',
      <br></br>
      width: '400px',
      <br></br>
      margin: '35px auto'
      <br></br>
      <br></br>
      // title text...
      <br></br>
      padding: '15px 20px 5px 20px'

        </code>
  </Layout>
)

export default Modals