import React from 'react'
import { Link } from "react-router-dom"
import { Query } from 'react-apollo'
import gql from "graphql-tag"

const CART = gql`
  {
    cart @client {
      _id
      quantity
    }
  }
`

class Header extends React.Component {
  render() {
    return (
      <div className="w-100 bg-white pv2 shadow-4 ph6-ns ph3 flex justify-between items-center fixed top-0">

        <div className="flex justify-start items-center">
          <Link className="light-red flex justify-start items-center pv2" to="/">
            <ion-icon name="infinite" size="large"></ion-icon>
            <h4 className="tracked mv0"><span className="fw4">THE</span>STORE</h4>
          </Link>

          <p className="f7 pl4">FEATURED</p>
          <p className="f7 pl4">CATEGORIES</p>
          <p className="f7 pl4">MORE</p>
        </div>

        <div className="flex justify-start items-center">
          <p className="f7 pr4">SIGN IN</p>
          <Query query={CART}>
            {({ data }) => (
              <div className="w2 h2 br-100 bg-light-red flex justify-center items-center white relative">
                <ion-icon name="cart" size="small"></ion-icon>
                {data.cart.length ? <div className="absolute bg-yellow br-100 flex justify-center items-center" style={{height:'20px',width:'20px',top:'-0.4rem',right:'-0.4rem'}}>
                  <p className="black fw6 f7 mv0">{data.cart.length}</p>
                </div> : null}
              </div>
            )}
          </Query>
        </div>

      </div>
    )
  }
}

export default Header
