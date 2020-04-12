import React from 'react'
import './CustomerList.css'

export default class CustomerList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      more: true
    }
    this.moreOrLess = this.moreOrLess.bind(this)
  }
  moreOrLess(){
    this.setState({ more: !this.state.more })
  }
  render(){
    console.log("This is more: ", this.state.more);
    const customers = this.props.customers
    return(
      <>
        <h1>Customer List</h1>
        <ul className="listgroup">
          {
            this.props.customers.map((customer) => {
              let { _id, name, contact, cell_phone, home_phone, email, location } = customer
              return(
                <li className=" list-group-item list-group-item-action"
                  key={_id}
                  onClick={() => {this.props.setCustomer(customer)}}>
                  <span>{name}</span>
                  <span>{contact}</span>
                    {
                      this.state.more
                      ? <button onClick={this.moreOrLess}>+</button>
                      : <>
                          <button onClick={this.moreOrLess}>-</button>
                          <br />Cell #: {cell_phone}
                          <br />Home #: {home_phone}
                          <br />Email: {email}
                        </>
                    }
                  </li>
              )
            })
          }
        </ul>
      </>
    )
  }
}
