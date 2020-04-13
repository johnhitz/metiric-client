import React from 'react'
import './ProductList.css'

export default class ProductList extends React.Component {
  render(){
    let products = this.props.products
    return(
      <>
        <h1>Products & Services</h1>
          {
            products.map((product) => {
              const { _id, name, bill_unit, price_per_acre} = product
              return(
                <>
                  <li key={_id} className="product">
                      <h4>{name}</h4>
                      <h4>{bill_unit}</h4>
                      <h4>{price_per_acre}</h4>
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault()
                          this.props.addItem(product)
                        }}
                      >+</a>
                  </li>
                </>
              )
            })
          }
      </>
    )
  }
}
