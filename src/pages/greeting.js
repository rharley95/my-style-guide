import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GreetingPage = () => (
  <Layout>
    <SEO title="Greeting Page" />
    <div style={{marginTop: '250px'}}>
              <h1 style={{fontSize: '45px'}}>Greetings, friend!</h1> 
              <p>Welcome to Romina's pattern library!</p>
              <p style={{width: '70%'}}>I have been working for a bit as a <strong style={{fontWeight: '800'}}>UX/UI designer </strong>
                   and I have a few things I have designed and I want to take the time to put a few of them in here 
                  to show how to use them.</p>

          </div>
  </Layout>
)

export default GreetingPage