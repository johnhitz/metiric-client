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
  clearState(){
    try {
      this.setState({
        _id: '',
        name: '',
        contact: '',
        cell_phone: '',
        home_phone: '',
        alt_phone: '',
        email: '',
        more: false
      })
    } catch (e) {
      console.error(e)
    }
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value })
  }
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
    return(
      <>
        <h1>Customer Form</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.handleSubmit()
          this.clearState()
        }}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              placeholder="Client Name"
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
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
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
          </div>
          <button className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault()
              this.clearState()
            }}>Clear</button>
          <button className="btn btn-danger"
            onClick={(event) => {
              event.preventDefault()
              this.clearState()
            }}>Delete Customer</button>

          <input className="btn btn-primary" type="submit" value="Add Customer" />
        </form>
      </>
    )
  }
}
