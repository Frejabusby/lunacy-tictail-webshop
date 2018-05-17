import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Header from "./header.js"
import SingleProduct from "./single-product"
import Store from "./store"
import About from "./about"
import News from "./news"
import Footer from "./footer"
import "./app.css"

class App extends React.Component {

  onClickBuyButton = () => {
    const currentCount = this.state.cartCount
    this.setState({
      cartCount: currentCount + 1
    })
  }

constructor(props) {
  super(props)
  this.state = {
    cartCount: 0
  }
}

render() {
  return (
    <HashRouter>
      <div className="container">
        <Header
            cartCount={this.state.cartCount} />
          <Route exact path="/" component={Store} />
          <Route path="/category/:category" component={Store} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route path="/product/:singleproduct" render={props => <SingleProduct {...props} onClickBuyButton={this.onClickBuyButton} />} />
          <Footer />
        </div>
      </HashRouter>
    )
  }

}

export default App
