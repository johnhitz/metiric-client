import React from 'react'
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
      customer: {}
    }
  }
  componentDidMount(){
  }
  async getCustomer(name){
  try {
    let response = await fetch(`${baseURL}/customer/name/${name}`)
    let data = await response.json()
    this.setState({customer: data})
    console.log(this.state);
  } catch(e) {
    console.error(e)
    }
  }
  render() {

    return (
      <>
        <h1>Order</h1>
        <button onClick={() => {this.getCustomer('Metor Farm llc')}}>Get It</button>
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
