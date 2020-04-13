import React from 'react'

export default class OrderForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {

      acres: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateAcres = this.updateAcres.bind(this)
  }

  updateAcres(num){
    this.setState({ acres: parseInt(num) })
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
  }

  render(){
    console.log(`Acres: `, this.state.acres);
    let { _id, name, contact, cell_phone, email} = this.props.customer
    let id = 0
    return (
      <>
        <label htmlFor="acres"></label>
        <input type="text"
          id="acres"
          name="acres"
          value={this.state.acres}
          placeholder="Enter Number of Acres"
          onChange={this.handleChange}
        />
        <table>
          <thead>
            <tr><th colspan="2"><h1>Carroll Service</h1></th></tr>
            <tr><th><h3>{name}</h3></th><br /></tr>
            <tr><th><h6>{contact}</h6></th><br /></tr>
            <tr><th><h6>{cell_phone}</h6></th><br /></tr>
            <tr><th><h6>{email}</h6></th><br /></tr>
            <tr>
              <td><h5>Acres:</h5></td>
              <td><h6>{this.state.acres}</h6></td>
            </tr>

            </thead>
          <tbody>
            {
              (this.state.acres) !== ""
              ? <tr>
                  <td><h6>Product Id</h6></td>
                  <td><h6>Product Name</h6></td>
                  <td><h6>Billing Units</h6></td>
                  <td><h6>Price Per acre</h6></td>
                  <td><h6>Cost for Application</h6></td>
                </tr>
              : null
            }
            {
              this.props.order_items.map((item) => {
                const {_id, name, price_per_acre, multiplier, bill_unit, price_per} = item
                id += 1
                console.log(`Now the id is: `, id);
                return (
                  <>
                    <tr>
                      <td>{id}</td>
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
            <tr>
                <td></td>
                <td></td>

                <td colspan="2"><h4>Total Cost of Order</h4></td>
                <td>Total</td>
              </tr>
          </tbody>
        </table>
      </>
    )
  }
}
