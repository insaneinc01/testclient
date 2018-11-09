import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

const GET_PRODUCT = gql`
  query Product($_id: String) {
    product(_id: $_id) {
      _id
      name
      price
      category
      image
    }
  }
`

const ProductInfo = ({match}) => {
  return (
    <div className="pt4">
      <Query query={GET_PRODUCT} variables={ {_id: match.params._id} }>
        {({ loading, error, data }) => {

          if (loading) return <p className="gray tc">Loading...</p>;
          if (error) return <p className="gray tc">Error from the server. Try refreshing the page</p>;

          const { image, name, price } = data.product

          return (
            <div className="w-100 db">
              <div className="w-50 dib">
                <div className="bg-washed-green w-100 h-100">
                  <img className="w-100 h-100 obj-cover" src={`https://picsum.photos/500/400?image=${image.split("image=")[1]}`} alt=""/>
                </div>
              </div>
              <div className="w-50 dib">
                <p>{name}</p>
                <p>{price}</p>
              </div>
            </div>
          )
        }}
      </Query>
    </div>
    )
  }

  export default ProductInfo
