import React from 'react'

export default class OrderForm extends React.Component {
  render(){
    let { _id, name, contact, cell_phone, email} = this.props.customer
    return (
      <>
        <table>
          <thead>
            <tr>
              <th colspan="2"><h1>Carroll Service</h1></th>
            </tr>
            <tr>
              <th><h3>{name}</h3></th><br />
            </tr>
            <tr>
              <th><h6>{contact}</h6></th><br />
            </tr>
            <tr>
              <th><h6>{cell_phone}</h6></th><br />
            </tr>
            <tr>
              <th><h6>{email}</h6></th><br />
            </tr>
            </thead>
          <tbody>
            {
              this.props.order_items.map((item) => {
                const {_id, name, rate_per_acer, multiplier, bill_unit, price_per} = item
                return (
                  <>
                    <tr>
                      <td>Product Name</td>
                      <td>Rate Per Acer</td>
                      <td>Multiplier</td>
                      <td>Billing Units</td>
                      <td>Price Per Acer</td>
                      <td>Cost for Application</td>
                    </tr>
                    <tr>
                      <td>{name}</td>
                      <td>{rate_per_acer}</td>
                      <td>{multiplier}</td>
                      <td>{bill_unit}</td>
                      <td>{price_per}</td>
                      <td>Total</td>
                      <td>
                        <button className="btn btn-primary bt-sm">-</button>
                      </td>
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
