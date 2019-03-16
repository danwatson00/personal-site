import React, { Component } from 'react'


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div>
          <h1>Contact</h1>
          <p>Thank for your visiting my site! I would love to hear from you! Please email me at <a href="mailto:dan@danwatson.us">dan@danwatson.us</a>.</p>
        </div>
        <div>
          <form method="post" name="emailForm" action="email-form.php">
            <p>
              <label for="name">Name:</label><br/>
              <input type="text" name="name" />
            </p>
            <p>
              <label for="email">Email:</label><br/>
              <input type="email" name="email" />
            </p>
            <p>
              <label for="message">Message:</label><br/>
              <textarea rows="4" cols="50" type="text" name="message"></textarea>
            </p>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact