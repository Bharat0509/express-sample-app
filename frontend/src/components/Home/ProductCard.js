import { Link } from 'react-router-dom'

import { Rating } from '@mui/material'

const ProductCard = ({ product }) => {

  const options = {
   
    // size: "large",
    value: Number(product?.ratings),
    precision:0.5,
    readOnly:true

  }

  return (

    <Link className='productCard' to={`/product/${product._id}`}>
    <img src={product.images[0].url} alt={product.name} />
    <p>
      {product.name}
    </p>
    <div>
      <Rating {...options} />
      <span className='productNumOfReviews'>{`(${product.numOfReviews} Reviews)`}</span>
    </div>
    <span>{`₹ ${product.price}`}</span>
    </Link>
  )
}

export default ProductCard
