import React from 'react'
import './CustomerList.css'

export default class CustomerList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      more: ""
    }
    this.moreOrLess = this.moreOrLess.bind(this)
  }
  moreOrLess(id){
    this.setState({ more: id })
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
                  onClick={() => {
                    this.props.setCustomer(customer)
                  }}>
                  <span>{name}</span>
                  <span>{contact}</span>
                    {
                      (_id !== this.state.more)
                      ? <button className="btn btn-primary btn-sm" onClick={(event) => {
                        event.stopPropagation()
                        this.moreOrLess(_id)
                      }}>+</button>
                      : <>
                          <button onClick={(event) => {
                            event.stopPropagation()
                            this.moreOrLess("")
                          }}>-</button>
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
