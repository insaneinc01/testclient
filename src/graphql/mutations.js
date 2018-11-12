import gql from 'graphql-tag'

export const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String, $price: Int, $category: String, $tags: [String], $image: String, $headline: String, $description: String, $inventory: Int , $instock: Boolean, $featured: Boolean) {
  createProduct(name: $name, price: $price, category: $category, tags: $tags, image: $image, headline: $headline, description: $description, inventory: $inventory , instock: $instock, featured: $featured) {
    _id
  }
}
`

export const LOGIN = gql`
mutation Login($username: String, $password: String) {
  login(username: $username, password: $password) {
    username
    _id
    token
  }
}
`

export const ADD_TO_CART = gql`
  mutation addToCart($_id: String) {
    addToCart(_id: $_id) @client
  }
`
