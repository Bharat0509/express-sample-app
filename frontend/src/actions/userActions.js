import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from '../constants/userContants'
import axios from 'axios'
const config = { withCredentials: true ,headers: {
    'Content-Type': 'application/json',
    
  }}
//Login A User Action
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        console.log(email,password);
         
        // const {data}=await axios.post(`http://localhost:4000/api/v1/login`,{email,password},{config})
       const {data}= await axios.post('http://127.0.0.1:4000/api/v1/login',{email,password}, {config})

        dispatch({type:LOGIN_SUCCESS,payload:data.user})
        
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response})   
    }
}




//Register A User Action
export const register=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST})

        console.log(userData);
        const {data}=await axios.post(`http://localhost:4000/api/v1/register`,userData,{config})

        dispatch({type:REGISTER_SUCCESS,payload:data.user})
        
    } catch (error) {
        console.log(error);
        dispatch({type:REGISTER_FAIL,payload:error.response.data.message})   
    }
}

//Load A User Action
export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
    
        const {data}=await axios.get(`http://localhost:4000/api/v1/me`,{config})

        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
        
    } catch (error) {
        dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message})   
    }
}


//Logout A User Action
export const logout=()=>async(dispatch)=>{
    try {
        
    
        await axios.get(`http://localhost:4000/api/v1/logout`,{config})

        dispatch({type:LOGOUT_SUCCESS})
        
    } catch (error) {
        dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})   
    }
}



//clear Error 
export const clearErrors=()=>async (dispatch)=>{
    
        dispatch({
            type:CLEAR_ERRORS,
        }) 
}