import { CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS } from '../constants/orderConstant.js'
import axios from 'axios'
import {REQUEST_URL} from '../Constants.js'


//Create Order
export const createOrder=(order)=>async (dispatch)=>{
    try {
        dispatch({type:CREATE_ORDER_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/order/new`,order,config)

        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.response.data.message
        })
    }
}

//Create Order
export const myOrders=(token)=>async (dispatch)=>{
    try {
        dispatch({type:MY_ORDERS_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/orders/me`,{token},config)

        dispatch({type:MY_ORDERS_SUCCESS,payload:data.orders})
        
    } catch (error) {
        dispatch({
            type:MY_ORDERS_FAIL,
            payload:error.response.data.message
        })
    }
}

//Clear Errors
export const clearErrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}