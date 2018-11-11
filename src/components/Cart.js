import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

const PRODUCTS_BY_ID = gql`
query ProductsById($ids: [String]) {
  productsById(ids: $ids) {
    _id
    name
    price
    image
    headline
  }
}
`
const CART = gql`
  {
    cart @client {
      _id
      quantity
    }
  }
`

const Cart = () => {
  return (
    <div className="pt4 w-100 mw7 db center mid-gray">
      <h4 className="mt0 mb4">Review and Checkout</h4>
      <Query query={CART}>
        {({ data }) => {

          return <Query query={PRODUCTS_BY_ID} variables={ {ids: data.cart.map(({_id}) => _id)} }>
            {({ loading, error, data: {productsById} }) => {

              if (loading) return <p className="gray tc">Loading...</p>;
              if (error) return <p className="gray tc">Error from the server. Try refreshing the page</p>;

              return (
                <div className="w-100 db">
                  {productsById.map((product, i) => {
                    const { _id, image, name, price, headline } = product
                    return (
                      <div className="pr3 bg-white w-100 flex justify-between items-center bb b--black-05" key={_id}>
                        <div className="w-60 dib v-top flex justify-start items-center">
                          <div className="bg-washed-red w3 h3">
                            <img className="w-100 h-100 obj-cover" src={image ? `https://picsum.photos/500/400?image=${image.split("image=")[1]}` : ""} alt=""/>
                          </div>
                          <div className="ph3">
                            <h5 className="mv0">{name}</h5>
                            <p className="mid-gray f6 mv1">{headline}</p>
                          </div>
                        </div>
                        <div className="w-20 dib f7 tr">
                          <p>{data.cart.find(x => x._id === _id).quantity}</p>
                        </div>
                        <div className="w-20 dib f7 tr">
                          <p>${price}</p>
                        </div>
                      </div>
                    )}
                  )}

                  {productsById.length ? (
                    <React.Fragment>
                      <div className="w-100 db f6 flex justify-center items-top pr3 bg-white bb b--black-05 mt1">
                        <div className="w-60 dib"></div>
                        <div className="w-20 dib tr">
                          <p>Total</p>
                        </div>
                        <div className="w-20 dib tr">
                          <p className="b">$ {productsById.reduce((prev, cur) => prev + cur.price, 0)}</p>
                        </div>
                      </div>
                      <button className="db center f7 fw6 button-reset bg-light-red pv2 ph4 white mt4 bw0 pointer dim">PROCEED TO CHECKOUT</button>
                    </React.Fragment>
                  ) : (
                    <p className="bg-white pv3 tc f6 br2">Your cart is empty</p>
                  )}
                </div>
              )

            }}
          </Query>
        }}
      </Query>
    </div>
  )
}

export default Cart
