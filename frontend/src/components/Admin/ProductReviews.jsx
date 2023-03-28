import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import './ProductReviews.css'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MetaData from '../layout/MetaData';
import Sidebar from './Sidebar'
import { DataGrid } from "@mui/x-data-grid"
import StarIcon from '@mui/icons-material/Star';

<<<<<<< HEAD
import { clearErrors, getAdminProducts, deleteProduct, getReviews, deleteReviews } from '../../actions/productActions.js'
=======
import { clearErrors, getAdminProducts, deleteProduct, getReviews } from '../../actions/productActions.js'
>>>>>>> 97167674476d666bf4b8e94b3da0a45f58f46439
import { DELETE_PRODUCT_RESET, DELETE_REVIEW_RESET } from '../../constants/productConstant';


const ProductReviews = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const alert = useAlert();
    const { token } = useSelector(state => state.authToken)
    const [productId, setProductId] = useState('')
    const { error, reviews, loading } = useSelector(state => state.productReviews)
    const { error: deleteError, isDeleted } = useSelector(state => state.review)
<<<<<<< HEAD


    const deleteReviewHandler = (reviewId) => {
        dispatch(deleteReviews(reviewId, productId, token));
    }
=======
    const deleteProductHandler = (id) => {
        // dispatch(deleteProduct(id, token))
    }

>>>>>>> 97167674476d666bf4b8e94b3da0a45f58f46439
    const ProductReviewsSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getReviews(productId, token))

    }
<<<<<<< HEAD

=======
>>>>>>> 97167674476d666bf4b8e94b3da0a45f58f46439
    useEffect(() => {
        if (productId.length === 24) {
            dispatch(getReviews(productId, token))
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError)
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success("Review Deleted Successfully");

            navigate('/admin/reviews')
            dispatch({ type: DELETE_REVIEW_RESET })
        }


    }, [dispatch, alert, error, deleteError, navigate, isDeleted, productId])

    const columns = [
        {
            field: "id",
            headerName: "Review ID",
            minWidth: 250,
            flex: 0.4

        },
        {
            field: "user",
            headerName: "User",
            minWidth: 280,
            flex: .4

        },
        {
            field: "comment",
            headerName: "Comment",
            minWidth: 400,
            flex: .4

        },
        {
            field: "rating",
            headerName: "Rating",
            // type: "number",
            minWidth: 150,
            flex: 0.2,
            cellClassName: (params) => {
                return (params.row.rating >= 3 ? "greenColor" : "redColor")
            }

        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 150,
            sortable: false,
            flex: 0.6,
            renderCell: (params) =>

                <>
                    <Link to={`/admin/product/${params?.id}`}><EditIcon /></Link>
<<<<<<< HEAD
                    <Button onClick={e => deleteReviewHandler(params.id)}>
=======
                    <Button onClick={e => deleteProductHandler(params.id)}>
>>>>>>> 97167674476d666bf4b8e94b3da0a45f58f46439
                        <DeleteIcon />
                    </Button>

                </>

        }
    ]

    const rows = [];

    reviews &&
        reviews.forEach((item) => {
            rows.push({
                id: item._id,
                rating: item.rating,
                comment: item.comment,
                user: item.name
            })
        })


    return (
        <>

            <MetaData title={"All Reviews-Admin"} />
            <div className="dashboard">
                <Sidebar />
                <div className="productReviewsContainer">
                    <form
                        className='productReviewsForm'
                        encType='multipart/form-data'
                        onSubmit={ProductReviewsSubmitHandler}
                    >
                        <h1 className='productReviewsFormHeading'>All Reviews</h1>
                        <div>
                            <StarIcon />
                            <input
                                type="text"
                                value={productId}
                                placeholder='Product Id'
                                required
                                onChange={e => setProductId(e.target.value)} />
                        </div>
                        <button
                            className='createProductBtn'
                            type='submit'
                            disabled={loading || productId === "" ? true : false}
                        >
                            Search
                        </button>



                    </form>
                    {
                        reviews &&
<<<<<<< HEAD
                            reviews.length > 0 && (productId.length === 24) ?
=======
                            reviews.length > 0 ?
>>>>>>> 97167674476d666bf4b8e94b3da0a45f58f46439
                            <div style={{ width: '80vw' }}>
                                <DataGrid rows={rows} columns={columns} pageSize={10} pagination disableRowSelectionOnClick autoHeight sx={{ mx: 2 }} />

                            </div>
                            :
                            <h1 className='noReviews'>No review Found</h1>
                    }


                </div>
            </div>


        </>
    )
}

export default ProductReviews