import React, { Component } from 'react'
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate'
import Guitarist from '../../images/guitarist.jpg'

class Axefax extends Component {
  render() {
    return (
      <div className="axefax">
        <ProjectTemplate
          bkg="axefaxBkg"
          ask="Design and develop a web app using Vue.js for GitSuite. The 
          app showcases GitSuite’s AxeFax API. The API contains serial number 
          data for thousands of guitars and other musical instruments."
          challenge="Getting to create this app from start to finish on my own 
          for a successful startup was an exciting challenge. With a tight 
          budget and short timeline, I had to come up with a design quickly, 
          without a traditional case study. To make things interesting, this 
          was also my first project using Vue.js."
          imgName = 'guitarist'
          imgAlt="guitarist in front of speakers"
          g1h="Make it Fast"
          g1p = "The site and API call had to be fast and responsive. So, I 
                made the site lightweight and kept extraneous code to a minimum."
          g2h="Ease of Use"
          g2p = "GitSuite’s target audience is musicians and music instrument 
                repair people, I.e. non-tech people that may not be sophisticated 
                web users."
          g3h="Rockin' Style"
          g3p = "GitSuite’s target audience is musicians and music instrument 
                repair people, I.e. non-tech people that may not be sophisticated 
                web users."
          />
      </div>
    );
  }
}

export default Axefax