import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Outlet } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'

const ProtectedRoutes = ({stripeKey}) => {
  const {loading, isAuthenticated} = useSelector(state => state.authData)
  useEffect(() => {
  }, [isAuthenticated])
  return (
  loading && stripeKey ? <Loader/> : (isAuthenticated ? <Elements stripe={loadStripe('pk_test_51MfGEmSFoYXjK6ahTQWkGAkRpdkVcW8cekaQrpUyQdlv8DoqXzU5cHlevv6B664nfqNmJbSLkSiM7w1KOANCBVMV00SHK5U1cu')}>
                                                          <Outlet/>
                                                        </Elements> : <Navigate to={'/login'} />)
  )
}

export default ProtectedRoutes
