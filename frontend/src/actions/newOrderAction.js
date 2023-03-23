import { ALL_ORDERS_FAIL, ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS } from '../constants/orderConstant.js'
import axios from 'axios'
import { REQUEST_URL } from '../Constants.js'



//Create Order
export const createOrder=(order)=>async (dispatch)=>{
    try {
        dispatch({type:CREATE_ORDER_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/order/new`,{...order},config)

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

//get all  Orders
export const getAllOrders=(token)=>async (dispatch)=>{
    try {
        dispatch({type:ALL_ORDERS_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/admin/orders`,{token},config)

        dispatch({type:ALL_ORDERS_SUCCESS,payload:data.orders})
        
    } catch (error) {
        dispatch({
            type:ALL_ORDERS_FAIL,
            payload:error.response.data.message
        })
    }
}


//Update  Orders
export const updateOrder=(id,order)=>async (dispatch)=>{
    try {
        dispatch({type:UPDATE_ORDER_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.put(`${REQUEST_URL}/api/v1/admin/order/${id}`,order,config)

        dispatch({type:UPDATE_ORDER_SUCCESS,payload:data.success})
        
    } catch (error) {
        dispatch({
            type:UPDATE_ORDER_FAIL,
            payload:error.response.data.message
        })
    }
}


//Delete  Orders
export const deleteOrder=(id,token)=>async (dispatch)=>{
    try {
        dispatch({type:UPDATE_ORDER_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/admin/order/${id}`,{token},config)

        dispatch({type:UPDATE_ORDER_SUCCESS,payload:data.success})
        
    } catch (error) {
        dispatch({
            type:UPDATE_ORDER_FAIL,
            payload:error.response.data.message
        })
    }
}

//Get Order Detail
export const getOrderDetail=(token,id)=>async (dispatch)=>{
    try {
        dispatch({type:ORDER_DETAILS_REQUEST})
        const config={
            Headers:{
                "Content-Type":'application/json'
            }
        }
        const {data}=await axios.post(`${REQUEST_URL}/api/v1/order/${id}`,{token},config)

        dispatch({type:ORDER_DETAILS_SUCCESS,payload:data.order})
        
    } catch (error) {
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.response?.data?.message
        })
    }
}

//Clear Errors
export const clearErrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}