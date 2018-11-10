import React from 'react'
import { Link } from "react-router-dom"

const ProductTile = ( {product: {_id, name, price, category, image}} ) => (
  <Link className="dark-gray bg-white mh2 mb4 link" to={`/productdetail/${_id}`}>
    <div className="bg-washed-green" style={{width:'260px', height:'200px'}}><img className="w-100 h-100 obj-cover" src={image} alt=""/></div>
    <div className="pa1 fw5 flex justify-between items-center f6">
      <p className="mv1 truncate tracked-tight">{name}</p>
      <p className="mv1 light-red fw6">${price}</p>
    </div>
  </Link>
)

export default ProductTile
