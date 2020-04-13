import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import ProductList from './ProductList'
import OrderForm from './OrderForm'

let baseURL = process.env.REACT_APP_BASEURL
if(process.env.REACT_APP_BASEURL === 'dev') {
  baseURL = 'http://localhost:3333'
} else {
  baseURL = 'some other url'
}

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: {},
      customers: [],
      products: [],
      order_items: []
    }
    this.addItem = this.addItem.bind(this)
    this.setCustomer = this.setCustomer.bind(this)
    this.getCustomer = this.getCustomer.bind(this)
    this.getCustomers = this.getCustomers.bind(this)
    this.getProducts = this.getProducts.bind(this)
  }
  componentDidMount(){
    this.getCustomers()
    this.getProducts()
  }

  addItem (item){
    this.setState({order_items: [...this.state.order_items, item]})
    console.log("I'v been called!");
  }
  async getCustomer(name){
  try {
    let response = await fetch(`${baseURL}/customer/name/${name}`)
    let data = await response.json()
    this.setState({customer: data})
  } catch(e) {
    console.error(e)
    }
  }
  setCustomer(customer){
    this.setState({customer: customer})
  }
  async getCustomers(){
    try {
      let response = await fetch(`${baseURL}/customers`)
      let data = await response.json()
      this.setState({customers: data})
    } catch(e) {
      console.error(e);
    }
  }
  async getProducts(){
    try {
      let response = await fetch(`${baseURL}/products`)
      console.log("Response: ", response);
      let data = await response.json()
      this.setState({products: data})
    } catch(e) {
      console.error(e);
    }
  }
  async handleSubmit(){
    try{
      let response = await fetch(`${baseURL}/customer/add/name/contact/cell_phone/home_phone/alt_phone/email`)
      let data = await response.json()

      this.setState([this.state.customers, data])
    }
    catch(e){
      console.error(e)
    }
  }
  render() {
    console.log(`Order Items are: `, this.state.products);
    return (
      <>
        <CustomerList
          customers={this.state.customers}
          setCustomer={this.setCustomer}
        />
        <CustomerForm
          customer={this.state.customer}
          handleSubmit={this.handleSubmit}
        />
        <OrderForm
          customer={this.state.customer}
          order_items={this.state.order_items}
        />
        <ProductList
          addItem={this.addItem}
          products={this.state.products}
        />
      </>
    )
  }
}
