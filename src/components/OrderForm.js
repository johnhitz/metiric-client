import React from 'react'

export default class OrderForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      acers: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateAcres = this.updateAcres.bind(this)
  }

  updateAcres(num){
    this.setState({ acers: num })
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
  }

  render(){
    console.log(`Acres: `, this.state.acres);
    let { _id, name, contact, cell_phone, email} = this.props.customer
    return (
      <>
        <label htmlFor="acres"></label>
        <input type="text"
          id="acres"
          name="acres"
          value={this.state.acres}
          placeholder="Acres"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={this.updateAcres}
        >Add Acres</button>
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
            <tr>
              <td>Product Name</td>
              <td>Billing Units</td>
              <td>Price Per acre</td>
              <td>Cost for Application</td>
            </tr>
            {
              this.props.order_items.map((item) => {
                const {_id, name, price_per_acre, multiplier, bill_unit, price_per} = item
                return (
                  <>
                    <tr>
                      <td>{name}</td>
                      <td>{bill_unit}</td>
                      <td>{price_per_acre}</td>
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
