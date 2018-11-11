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
      headline
      description
      tags
      rating
      featured
      instock
      inventory
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

          const { image, name, price, headline, description, category, tags, rating } = data.product

          return (
            <div className="w-100 db">
              <div className="w-50 dib v-top">
                <div className="bg-washed-red w-100 h-100" style={{minHeight:'20rem'}}>
                  <img className="w-100 h-100 obj-cover" src={image ? `https://picsum.photos/500/400?image=${image.split("image=")[1]}` : ""} alt=""/>
                </div>
              </div>
              <div className="w-50 dib pl4">
                <h3 className="">{name} <span className="fr">${price}</span></h3>
                <div className="w-100 flex justify-between items-center">
                  <div className="dib">
                    <p className="f7 mv1 mid-gray">Category: <span className="fw6 ttu">{category}</span></p>
                    {tags.map((tag, i) => <span key={i} className="dim pointer f8 fw6 ba b--washed-red br1 pv1 v-mid ph2 light-red mr2">{tag}</span>)}
                  </div>
                  <div className="dib light-red">
                    <p className="f7 mv1 tr mid-gray">Popularity</p>
                    {rating && Array(rating).fill(0).map((x, i) => <ion-icon key={i} name="star" size="small"></ion-icon>)}
                    {rating && Array(5 - rating).fill(0).map((x, i) => <ion-icon key={i} name="star-outline" size="small"></ion-icon>)}
                  </div>
                </div>
                <p className="mid-gray f5 mt4">{headline}</p>
                <p className="mid-gray f6 ">{description}</p>

                <button className="f7 fw6 button-reset bg-light-red pv2 ph3 white mt3 bw0 pointer dim">ADD TO CART</button>
              </div>
            </div>
          )
        }}
      </Query>
    </div>
    )
  }

  export default ProductInfo
