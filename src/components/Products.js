import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import ProductTile from './ProductTile'

const GET_PRODUCTS = gql`{
  products {
    _id
    name
    price
    category
  }
}`

class Products extends React.Component {
  render() {
    return (
      <div className="w-100 pt4 flex flex-wrap justify-start items-center">
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.products.map((product) => (
              <ProductTile key={product._id} product={product}/>
            ));
          }}
        </Query>
      </div>
      )
    }
  }

  export default Products
