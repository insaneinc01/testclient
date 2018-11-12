const typeDefs = `
type CartItem {
  _id: String
  quantity: Int
}

type Query {
  cart: [CartItem]
}

type Mutation {
  addToCart(_id: String): CartItem
}
`

export default typeDefs
