import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Outlet } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'

const ProtectedRoutes = () => {
  const {loading, isAuthenticated, user} = useSelector(state => state.authData)
  return (
  loading ? <Loader/> : (isAuthenticated ? <Outlet/> : <Navigate to={'/login'} />)
  )
}

export default ProtectedRoutes
