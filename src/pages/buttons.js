import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ButtonPage = () => (
  <Layout>
    <SEO title="Buttons Page" />
    <h1>Buttons Guide</h1>
    <hr></hr>
    <p><i>"We made the buttons on the screen look so good you'll want to lick them." </i> <strong> — Steve Jobs</strong></p>
<div class="regular-buttons">
<button type="button" class="regular-btn">
    Save me!
  </button>

<button type="button" class="inactive-btn">
    ..Or don't.
  </button>

<button type="button" class="disabled-btn" disabled>
    You can't.
  </button>
  
</div>

<div class="what-is">
  <h3 class="title-2"> Details </h3>
  <hr></hr>
  <p>The buttons in Mimic Analytics shall stay consistent with the rest of the application. They all have their own colors to communicate activity, and availability to the user.</p>
  
  <div>
    <span class="buld"> Some rules of thumb: </span>
    <ul class="rules">
      <li> <strong class="bold">Width</strong> will depend on the length of the words in the button, but <strong class="bold">height</strong> stays the same.</li>
      <li><strong class="bold">Action words</strong> in the buttons are to be 1 verb, or one verb + one subject. <strong class="bold">Example:</strong>
    
    <ul class="example">
      <li> Run Simulation</li>
      <li> Save</li>
      <li> Continue Shopping</li>
      <li> Exit</li> 
      <li> <strong class="bold">Font style</strong> will always stay the same. It is bold, 14px, and Open Sans.</li>   
    </ul>

      
  </li>
  </ul>
  </div>

<section class="code">
  <h3 class="title-2"> Code </h3>
  <p><strong className="bold">Default button styles</strong></p>
  <code class="codebox">
        button 
        <br></br>
  font-family: 'Open Sans', sans-serif;
  <br></br>
  font-size: 14px;
  <br></br>
  font-weight: 700;
  <br></br>
  width: 120px;
  <br></br>
  height: 30px;
  <br></br>
  border-radius: 3px;
  <br></br>
  margin: 25px;
    
    </code>
  
  
  <p><strong className="bold">Regular button styles</strong></p>
  <code class="codebox">
        .regular-btn 
        <br></br>
  border-color: $analytics;
  <br></br>
  color: #fff;
  <br></br>
  background: $analytics;
  <br></br>

.regular-btn:active 
<br></br>
  outline: none;
  <br></br>
  box-shadow: none;
  <br></br>
  background-color: white;
  <br></br>
  background: #DD7A3D;

    </code>
  
  
  <p><strong className="bold">Inactive button styles</strong></p>
  <code class="codebox">
   .inactive-btn 
   <br></br>
  border-color: $analytics;
  <br></br>
  color: $analytics;
  <br></br>
  background: #fff;
  <br></br>
  <br></br>

.inactive-btn:hover 
<br></br>
  border-color: $analytics;
  <br></br>
  color: #fff;
  <br></br>
  background: $analytics;
  <br></br>
  <br></br>


.inactive-btn:active 
<br></br>
  background: #DD7A3D;

    </code>
  
  
  <p><strong className="bold">Disabled button styles</strong></p>
  <code class="codebox">
  .disabled-btn 
  <br></br>
  border-color: $stu-gray;
  <br></br>
  color: $stu-gray;
  <br></br>
  background: #CDCFD6;
  

    </code>
  </section>
          </div>
  </Layout>
)

export default ButtonPage