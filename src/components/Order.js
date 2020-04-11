import React from 'react'
import OrderForm from './OrderForm'
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
      customers: []
    }
    this.getCustomer = this.getCustomer.bind(this)
    this.getCustomers = this.getCustomers.bind(this)
    this.setCustomer = this.setCustomer.bind(this)
  }
  componentDidMount(){
    this.getCustomers()
  }
  async getCustomer(name){
  try {
    let response = await fetch(`${baseURL}/customer/name/${name}`)
    let data = await response.json()
    this.setState({customer: data})
    // console.log(this.state);
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
      console.log("The state of this afair is: ",this.state);
    } catch(e) {

    }
  }
  render() {
    return (
      <>
        <CustomerList
          customers={this.state.customers}
          setCustomer={this.setCustomer}
        />
        <h1>Order</h1>
        <OrderForm
          customer={this.state.customer}
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
