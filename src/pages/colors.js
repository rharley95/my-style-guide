import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ColorsPage = () => (
  <Layout>
    <SEO title="Colors Page" />
    <div>
              <h1>Colors Guide</h1>
              <hr></hr>
              <p><i>“The artist’s alertness to the coloristic demands of each picture, the ability to respond to the picture’s needs, to feed the color until its appetite is satiated; these are the true measures of a colorist’s talent.”</i> <strong> ⁠— Wolf Kahn</strong></p>
              <p>Mimic Analytics has a few colors that are used throughout the application.
                While Mimic Pro is blue, and Mimic Social is green; Mimic Analytics is orange.
              </p>
<div class="color-palette">
  
  <section class="color-items">
    
    <div class= "colors one">  
    <strong class="buld"> #181F25 </strong>
    </div>
    <div class= "colors two"> <strong class="buld "> #444C5B </strong></div>
    <div class= "colors three">  <strong class="buld "> #E2844A </strong></div>
    <div class= "colors four">  <strong class="buld"> #4A90E2 </strong></div>
    
    </section>

</div>
<section class="what-is">
  <h3 class="title-2"> Details </h3>
  <hr></hr>
  <p>
    The Stukent Design Team is working on making these colors more ADA efficient. 
    
    <ul class="example">
      <li> <strong>Topbar: </strong>#7E869E</li>
      <li> <strong>Sidebar: </strong>#444C5B</li>
      <li><strong>Analytics: </strong>#E2844A</li>
      <li> <strong>Active: </strong>#4A90E2</li>    
    </ul>
     
      
      <li> <strong class="bold">Font style</strong> will always stay the same. It is bold, 14px, and Open Sans.</li>
    
  </p>
  
</section>

              
          </div>
  </Layout>
)

export default ColorsPage