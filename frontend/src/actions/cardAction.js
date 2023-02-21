import axios from 'axios'
import { ADD_TO_CARD } from '../constants/cartContants';

//Add to Card ser Action
export const addToCart=(email,password)=>async(dispatch)=>{
    try {
        
        
        
       const {data}= await axios.get(`http://127.0.0.1:4000/api/product/${id}`);

        dispatch({type:ADD_TO_CARD,payload:{
            product:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.images[0].url,
            stock:data.product.stock,
            quantity
        },
    },
    )
        
        
        
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response}) 
     
    }
}