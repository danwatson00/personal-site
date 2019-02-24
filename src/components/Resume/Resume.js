import React from 'react'

const Resume = ({ menu, logo }) => 
  <div className="resume">
    <div className="resume-header">
      <h1>DAN WATSON</h1>
      <h2>FULL STACK DEVELOPER + UI/UX DESIGNER</h2>
    </div>
    <a className="download-pdf" href="">
      <h3>DOWNLOADABLE PDF</h3>
    </a>
    <div className="resume-contact">
      <phone>615-788-0177</phone><br/>
      <email>dan@danwatson.us</email><br/>
      <a href="https://www.linkedin.com/in/danwatson00/">LinkedIn Profile</a><br/>
      <a href="https://github.com/danwatson00">Github Profile</a>
    </div>
    <div className="education">
      <h4>NASHVILLE SOFTWARE SCHOOL</h4>
      <p>SIX MONTH FULL TIME CERTIFICATE PROGRAM</p>
      <p>FRONT END DEVELOPMENT AND UI/UX DESIGN</p>
      <h4>SAVANNAH COLLEGE OF ART AND DESIGN</h4>
      <p>MASTER OF FINE ARTS DEGREE</p>
      <p>PHOTOGRAPHY</p>
      <h4>CLARK UNIVERSITY</h4>
      <p>BACHELOR OF ARTS DEGREE</p>
      <p>STUDIO ART + COMMUNICATIONS AND CULTURE</p>
    </div>
    <div className="pro-skills">
      <h4>WEB DEVELOPMENT</h4>
      <h4>UI/UX DESIGN</h4>
      <h4>DIGITAL MARKETING</h4>
      <h4>GRAPHIC DESIGN</h4>
      <h4>PHOTOGRAPHY</h4>
      <h4>DESIGN SYSTEMS</h4>
      <h4>PROTOTYPING</h4>
      <h4>USER STORIES</h4>
    </div>
    <div className="development-skills">
      <div className="dev-skills-col1">
        <h4>REACT.JS</h4>
        <h4>VUE.JS</h4>
        <h4>JAVASCRIPT</h4>
        <h4>HTML5/CSS3</h4>
        <h4>SASS / SCSS</h4>
        <h4>GIT / GITHUB</h4>
        <h4>BOOTSTRAP</h4>
        <h4>SEMANTIC UI</h4>
        <h4>GRUNT / GULP</h4>
        <h4>VS CODE</h4>
      </div>
      <div className="dev-skills-col2">
        <h4>PHP</h4>
        <h4>MYSQL</h4>
        <h4>APIs</h4>
        <h4>XD</h4>
        <h4>SKETCH</h4>
        <h4>WORDPRESS</h4>
        <h4>SQUARESPACE</h4>
        <h4>TERMINAL</h4>
        <h4>ADOBE SUITE</h4>
      </div>
      <div className="experience">
        <h4>INGRAM CONTENT GROUP <span>JANUARY 2019 - PRESENT</span></h4>
        <p>CONTRACT FRONT END DEVELOPER</p>
        <h4>GITSUITE</h4>
        <p>PART-TIME FULL STACK DEVELOPER</p>
        <h4>BARBERSHOP HARMONY SOCIETY</h4>
        <p>APPLICATION DEVELOPER</p>
        <h4>NASHVILLE SOFTWARE SCHOOL</h4>
        <p>APPRENTICE DEVELOPER</p>
        <h4>WATSON STUDIOS</h4>
        <p>OWNER AND PHOTOGRAPHER</p>
      </div>
      <div className="dev-projects">
        <h4>MY CAMERA BAGS</h4>
        <p>EQUIPMENT ORGANIZATION APP</p>
        <h4>HACK FOR THE COMMUNITY</h4>
        <p>FIRST PLACE PROJECT</p>
        <h4>MOODIBLE</h4>
        <p>WELLNESS TRACKING APP</p>
      </div>
    </div>
  </div>

export default Resume