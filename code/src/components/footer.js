import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          <div className="footer-icon"><a href="https://facebook.com/LNCYIP/" target="_blank"><img src="./images/facebook.png" alt="facebook icon" /></a></div>
          <div className="footer-icon"><a href="https://www.instagram.com/lncyip/" target="_blank"><img src="./images/instagram.png" alt="instagram icon" /></a></div>
          <div className="footer-icon"><a href="mailto:technigo_yellow@tictail.com"><img src="./images/email-icon.png" alt="email icon" /></a></div>
        </div>
        <div className="footer-info">
          <p>Lunacy trail webshop, designed by Freja & David at Technigo & Tictail, 2018.</p>
        </div>
      </div>
    )
  }
}

export default Footer
