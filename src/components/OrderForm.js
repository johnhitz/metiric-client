import React from 'react'

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      name: '',
      contact: '',
      cell_phone: '',
      home_phone: '',
      alt_phone: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value })
  }
  // updateState(customer) {
  //   console.log(`This customer is pissing me off `, customer);
  //   this.setState({name: customer.name})
  // }
  async updateState(customer){
    try {
      let data = await customer
        this.setState({
          _id: data._id,
          name: data.name,
          contact: data.contact,
          cell_phone: data.cell_phone,
          home_phone: data.home_phone,
          alt_phone: data.alt_phone,
          email: data.email
        })
    } catch (e) {
      console.error(e)
    }
  }
  render(){
    const {name, location} = this.props.customer
    if(name !== this.state.name){this.updateState(this.props.customer)}
    console.log("Form State: ", this.state);
    return(
      <>
        <h1>Customer</h1>
        <form >
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            placeholder="Customer Name"
            onChange={this.handleChange}
          />
          <label htmlFor="contact"></label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={this.state.contact}
            placeholder="Contact"
            onChange={this.handleChange}
          />
          <label htmlFor="cell_phone"></label>
          <input
            type="text"
            id="cell_phone"
            name="cell_phone"
            value={this.state.cell_phone}
            placeholder="Cell Phone Number"
            onChange={this.handleChange}
          />
          <label htmlFor="home_phone"></label>
          <input
            type="text"
            id="home_phone"
            name="home_phone"
            value={this.state.home_phone}
            placeholder="Home Phone Number"
            onChange={this.handleChange}
          />
          <label htmlFor="alt_phone"></label>
          <input
            type="text"
            id="alt_phone"
            name="alt_phone"
            value={this.state.alt_phone}
            placeholder="Alternate Phone Number"
            onChange={this.handleChange}
          />
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
        </form>
        <h4>{name}</h4>
      </>
    )
  }
}
