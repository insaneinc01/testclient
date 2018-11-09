import React from 'react'

const ProductTile = ( {product: {name, price, category}} ) => (
  <div className="w5 bg-white mr4 mb4">
    <img className="w-100 h-100 obj-cover bg-light-green" src="" alt=""/>
    <div className="pa2 flex justify-between items-center">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  </div>
)

export default ProductTile
