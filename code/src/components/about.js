import React from "react"
import "./app.css"
import "./about.css"

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h1>About</h1>
        <div className="content-box about">
          <div className="about-text">
            <p>Lunacy is a streetwear brand created in the summer of 2017 by Héctor Álvarez Zepeda, a Mexican illustrator/painter and DJ that is know in the electronic music community as TRR. His work as a designer of promotional material for music events allowed him to collaborate with various electronic music artists, including Dutch DJ/producer Legowelt, who launched his own fashion label using an illustration made by Héctor.</p>
            <p>After these collaborations TRR decided to launch his own brand, in order to have a platform to display his own work as an illustrator. The brand takes inspiration from mental disorders, trying to make graphic statements that work as a reminder of the fragility of mental health in our fast-paced world.</p>
            <p>Lunacy is still a very small brand, a collaboration between TRR and some of this closest friends. After only a few months, the brand has managed to set a foot inside the Mexican electronic music community and now aims to expand to other territories.</p>
          </div>
          <div className="about-image">
            <img src="./images/hector.jpg" alt="Héctor Álvarez Zepeda" />
            <img src="./images/terr.jpg" alt="Héctor Álvarez Zepeda" />
          </div>
        </div>
      </div>
    )
  }
}

export default About
