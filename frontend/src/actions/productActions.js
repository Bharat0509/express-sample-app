import axios from 'axios'
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constants/productConstant'

export const getProducts=(keyword="",currentPage=1,price=[0,100000],category="",ratings=0)=>async (dispatch)=>{
    try {
        dispatch({
            type:ALL_PRODUCT_REQUEST
        });
        let link=`http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
        
        
        if(category.length>0){
            link=`http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
        }

        const {data}=await axios.get(link);

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

    } catch (error) {
        
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response?.data?.error || error.response.data,
        })
        
    }
}

//Product details 
export const getProductsDetails=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:PRODUCT_DETAILS_REQUEST
        });
        const {data}=await axios.get(`http://localhost:4000/api/v1/product/${id}`);
        console.log(data);
        

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product
        })

    } catch (error) {
        
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.error,
        })
        
    }
}

//clear Error 
export const clearErrors=()=>async (dispatch)=>{
    
        dispatch({
            type:CLEAR_ERRORS,
        })
        
    
}