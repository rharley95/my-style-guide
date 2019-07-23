import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FontPage = () => (
  <Layout>
    <SEO title="Buttons Page" />
    <div>
              <h1>What is Typography?</h1>
              <hr></hr>
              <p> <i>“Figures are the most shocking things in the world. The prettiest little squiggles of black looked at in the right light and yet consider the blow they can give you upon the heart.”  </i><strong> — H.G. Wells, The History of Mr. Polly</strong></p>
              
              <div className="textbox">
                  <h1 className="lora">
                  This is Lora Regular a font that we use for book titles in Home.
                  </h1>
                  <h2>
                  This is Lora Regular, but just a little bit smaller.
                  </h2>
                  <h3>
                  This is Lora Regular, and oh boy! Is it getting bigger here, or am I shrinking?
                  </h3>
              </div>
              <p className="notice">These fonts are used exclusively for the <strong>title of books and courses</strong> in the Home Application of Stukent.com. Nevertheless, with recent changes as of 2020 we are going to be launching a new style guide, so this is subject to change.</p>

              <div className="textbox-lower">
                  <p className="sans">
                  This is Open Sans Regular a font that we use for any other bodytype for all Stukent applications.
                  </p>
                  <p>This font minimun size is 12 pixels, that would be for navigations and descriptions below figures on the sites.
                      <br></br>Regular font size is 14px.
                  </p>
                  
              </div>
              <p className="find-info">These fonts can be found in <a href="https://fonts.google.com/" target="_blank">Google Fonts.</a></p>
          </div>
  </Layout>
)

export default FontPage