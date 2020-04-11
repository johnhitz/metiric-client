import React from 'react'

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      contact: '',
      location: '',
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
  updateState(customer) {
    console.log(`This customer is pissing me off `, customer);
    this.setState({name: customer.name})
  }
  // async updateState(customer){
  //   try {
  //     let data = await customer
  //       console.log(`Why is this: `, data);
  //       // this.setState({name: customer.name})
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
  render(){
    console.log('mystateis', this.state);
    const { name, contact, location } = this.props.customer
    if(name !== undefined){this.updateState(this.props.costomer)}
    console.log(`But this is: `, this.props.customer);
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
            placeholder="Customer Name"
            onChange={this.handleChange}
          />
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            value={this.state.location}
            placeholder="Customer Name"
            onChange={this.handleChange}
          />
        </form>
        <h4>{name}</h4>
      </>
    )
  }
}
