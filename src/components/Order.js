import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

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
      products: []
    }
    this.getCustomer = this.getCustomer.bind(this)
    this.getCustomers = this.getCustomers.bind(this)
    this.getProducts = this.getProducts.bind(this)
  }
  componentDidMount(){
    this.getCustomers()
    this.getProducts()
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
  async handleSubmit(event){
    event.preventDefault()
    try{
      let response = await fetch(`${baseURL}/customer/add/name/contact/cell_phone/home_phone/alt_phone/email`)
      let data = await response.json()
      let customersCopy = this.state.customers
      this.setState([...customersCopy. data])
    }
    catch(e){
      console.error(e)
    }
  }
  render() {
    console.log("My Groovy State: ", this.state);
    return (
      <>
        <CustomerList
          customers={this.state.customers}
          setCustomer={this.setCustomer}
        />
        <h1>Order</h1>
        <CustomerForm
          customer={this.state.customer}
          handleSubmit={this.handleSubmit}
        />
      </>
    )
  }
}









// import { useQuery, gql } from '@apollo/client'
// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client'
//
//
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'http://localhost:3333/graphql',
//   })
// });
//
// let
// const ORDER_QUERY = gql`
//   query Order_Query {
//     customer(name: "${name}") {
//       name
//       contact
//       location
//     },
//     products {
//       name
//       rate_per_acer
//       multiplier
//       bill_unit
//       price_per
//     }
//   }
// `
// function Data(){
//   const { loading, error, data } = useQuery(ORDER_QUERY);
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   console.log(data);
//
//   return (
//     <p>WTF? Over!</p>
//   )
// }
//
// const Order = () => (
//   <ApolloProvider client={client}>
//     <h2>Order</h2>
//     <Data />
//   </ApolloProvider>
// );
//
//
// export default Order
