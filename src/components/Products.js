import React from 'react'
import { Query } from "react-apollo"
import ProductTile from './ProductTile'
import { GET_PRODUCTS } from '../graphql/queries'

class Products extends React.Component {
  render() {
    return (
      <div className="w-100 pt4">
        <div className="flex flex-wrap justify-center items-center">
          <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
              if (loading) return <p className="gray tc w-100">Loading...</p>
              if (error) return <p className="gray tc w-100">Server error. Please refresh the page and try again</p>

              return data.products.map((product) => (
                <ProductTile key={product._id} product={product}/>
              ));
            }}
          </Query>
        </div>
      </div>
      )
    }
  }

  export default Products
