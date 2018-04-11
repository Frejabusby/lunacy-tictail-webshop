import React from "react"
import Product from "./product"
import "./single-product.css"
import "./app.css"


class singleProduct extends React.Component {
  state = {}
  componentDidMount() {
    console.log(this.props)
    const productId = this.props.match.params.singleproduct
    fetch(`https://api.tictail.com/v1.25/stores/5HSL/products/${productId}`).then((response) => {
      return response.json()
    }).then((json) => {
      //store info
      this.setState({product: json})
      console.log(json)
    })
  }

  render() {
    if (!this.state.product) return null
    return (
      <div className="main-content">
        <div className="single-product">
          <div className="single-product-image">
            <img src={this.state.product.images[0].url} alt={this.state.product.title + " " + this.state.product.categories[0].title} />
          </div>
          <div>
            <h2>{this.state.product.title}</h2>
            <p>{this.state.product.description}</p>
            <h3>{this.state.product.price / 100} Kr</h3>
            <button>Add to bag</button>
          </div>
        </div>
      </div>
    )
  }
}

export default singleProduct
