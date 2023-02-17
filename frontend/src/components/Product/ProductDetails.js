import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import "./ProductDetails.css"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearErrors, getProductsDetails } from '../../actions/productActions'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard.js'
import Loader from '../layout/Loader/Loader'
import {useAlert} from 'react-alert'
import MetaData from '../layout/MetaData'

const ProductDetails = () => {
  const alert=useAlert();
  const dispatch = useDispatch();
  const params = useParams();
  const { product, loading,error } = useSelector(state => state.productDetails)

 
  useEffect(() => {
  if(error){
     alert.error(error);
     dispatch(clearErrors)
  }
  dispatch(getProductsDetails(params.id))
 

  }, [params.id,alert])

   const options = {
    edit: false,
    color: 'rgba(20,20,20,.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 1000 ? 20 : 25,
    value: Number(product.ratings),
    isHalf: true

  }
 
  return (

    <>
    {loading ? <Loader/>:
      <>
      <MetaData title={`${product.name} -- BHARATECOM` }/>
        <div className="ProductDetails">

          <div><Carousel>
            {
              product.images &&
              product.images.map((img, i) =>
                <img className="CarouselImage" src={img.url} alt={`${i + 1} Slide`} />
              )
            }

          </Carousel></div>

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product #{product._id}</p>
            </div>
            <div className="detailsBlock-2">
              <ReactStars {...options} />
              <span>({product.numOfReviews} Reviews)</span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`₹${product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </div>
                <button>Add To Cart</button>
              </div>
              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? " OutOfStock" : " InStock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
              Description :<p>{product.description}</p>
            </div>
            <button className='submitReview'>Submit Review</button>

          </div>

        </div>
        <h3 className='reviewHeading'>REVIEWS</h3>
        {
          product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {
                product.reviews &&
                product.reviews?.map(review => <ReviewCard key={review._id} review={review} />)
              }
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )


        }

      </>
    }
    </>

  )
}

export default ProductDetails
