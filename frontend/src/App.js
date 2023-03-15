import './App.css'

import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import UserOptions from './components/layout/Header/UserOptions.js'
import ProductDetails from './components/Product/ProductDetails'
import Products from './components/Product/Products.js'
import Search from './components/Product/Search.jsx'
import Profile from './components/User/Profile.jsx'
import UpdateProfile from './components/User/UpdateProfile.jsx'
import UpdatePassword from './components/User/UpdatePassword.jsx'
import ForgotPassword from './components/User/ForgotPassword.jsx'
import ResetPassword from './components/User/ResetPassword.jsx'
import Shipping from './components/Cart/Shipping.jsx'
import Cart from './components/Cart/Cart.jsx'
import ConfirmOrder from './components/Cart/ConfirmOrder.jsx'
import ProcessPayment from './components/Cart/ProcessPayment.jsx'
import PaymentSuccess from './components/Cart/PaymentSuccess.jsx'
import MyOrders from './components/Order/MyOrders.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import webfont from 'webfontloader'
import { useEffect, useState } from 'react'
import LoginSignUp from './components/User/LoginSignUp'
import store from './store'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import Test from './Test'
import ProtectedRoutes from './components/Routes/ProtectedRoute'
import axios from 'axios'


function App () {
  const {user, isAuthenticated} = useSelector(state => state.authData)
  const {token} = useSelector(state => state.authToken)
  const [stripeApiKey, setStripeApiKey] = useState('')

  async function getStripeApiKey(){
    const {data}=await axios.post("https://bharatecom.onrender.com/api/v1/stripeapikey",{token})
    setStripeApiKey(data.stripeApiKey)
   

  }
  useEffect(() => {
    getStripeApiKey()
    webfont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      }
    })
    store.dispatch(loadUser(token))
  }, [token])
  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/product/:id' element={<ProductDetails/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/search' element={<Search/>} />
        <Route exact path='/login' element={<LoginSignUp/>} />
        <Route element={<ProtectedRoutes stripeKey={stripeApiKey}/>}>
          <Route exact path='/account' element={<Profile/>} />
          <Route exact path='/me/update' element={<UpdateProfile/>} />
          <Route exact path='/password/update' element={<UpdatePassword/>} />
          <Route exact path='/shipping' element={<Shipping/>} />
          <Route exact path='/order/confirm' element={<ConfirmOrder/>} />
          <Route exact path='/process/payment' element={<ProcessPayment/>} />
          <Route exact path='/success' element={<PaymentSuccess/>} />
           
       
        </Route>
        <Route exact path='/orders' element={<MyOrders/>} />
        <Route exact path='/password/forgot' element={<ForgotPassword/>} />
        <Route exact path='/password/reset/:token' element={<ResetPassword/>} />
        <Route path='/products/:keyword' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
