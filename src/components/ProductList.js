import React from 'react'
import './ProductList.css'

export default class ProductList extends React.Component {
  render(){
    let products = this.props.products
    return(
      <>
        <table>
          <thead>
          <tr>
            <td><h4>Product</h4></td>
            <td><h4>Billing Units</h4></td>
            <td><h4>Price Per Acre</h4></td>
            <td><h4>Cost of Application</h4></td>
          </tr>
          </thead>
          <tbody>

            {
              products.map((product) => {
                const { _id, name, bill_unit, price_per_acre} = product
                return(
                  <>
                    <tr>
                      <td>{name}</td>
                      <td>{bill_unit}</td>
                      <td>{price_per_acre}</td>
                      <td>Total</td>
                      <td><a
                            href="#"
                            className="btn btn-primary"
                            onClick={(e) => {
                              e.preventDefault()
                              this.props.addItem(product)
                            }}
                          >+</a></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  }
}
