import gql from "graphql-tag"

export const GET_PRODUCTS = gql`{
  products {
    _id
    name
    price
    category
    image
  }
}`

export const GET_PRODUCT = gql`
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
export const PRODUCTS_BY_ID = gql`
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

export const GET_CATEGORIES = gql`{
  categories {
    _id
    category
  }
}`

export const CART = gql`
  {
    cart @client {
      _id
      quantity
    }
  }
`
