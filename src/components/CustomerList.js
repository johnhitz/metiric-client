import React from 'react'
import './CustomerList.css'

export default class CustomerList extends React.Component{

  render(){
    const customers = this.props.customers
    return(
      <>
        <h1>List</h1>
        <ul className="listgroup">
          {
            this.props.customers.map((customer) => {
              let { _id, name, contact, cell_phone, home_phone, email, location } = customer
              console.log("WTF? Over!", location);
              return(
                <li className=" list-group-item list-group-item-action"
                  key={_id}
                  onClick={() => {this.props.setCustomer(customer)}}>
                    <span>{name}</span><span>{contact}</span><br />Cell #: {cell_phone}<br />Home #: {home_phone}<br />Email: {email}
                  </li>
              )
            })
          }
        </ul>
      </>
    )
  }
}
