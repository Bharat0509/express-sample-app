import { CgMouse } from 'react-icons/cg'
import './Home.css'
import MetaData from '../layout/MetaData'
import { clearErrors, getProducts } from '../../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products) || [];
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors)
        }
        dispatch(getProducts());
    },
        [dispatch, error, alert]
    );


    return (
        <>
            {loading ? <Loader /> :
                <>
                    <MetaData title="BharatEcom" />

                    <div className="banner">
                        <p>Welcome To Eccomerce</p>
                        <h1>Find Amazing Product Below</h1>
                        <a href="#container">
                            <button>Scroll <CgMouse /></button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Featured Products</h2>
                    <div className="container" id='container'>
                        {
                            products &&
                            products?.map(product => <ProductCard key={product._id} product={product} />)

                        }


                    </div>
                </>
            }
        </>
    )
}

export default Home