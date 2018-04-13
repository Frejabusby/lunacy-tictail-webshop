import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          <div className="footer-icon"><a href="https://facebook.com/LNCYIP/" target="_blank"><img src="../images/facebook.png" /></a></div>
          <div className="footer-icon"><a href="https://www.instagram.com/lncyip/" target="_blank"><img src="../images/instagram.png" /></a></div>
          <div className="footer-icon"><a href="mailto:teamyellow@technigo.io"><img src="../images/email-icon.png" /></a></div>
        </div>
        <div className="footer-info">
          <p>Lunacy Webshop, designed by Freja & David at Technigo, 2018.</p>
        </div>
      </div>
    )
  }
}

export default Footer
