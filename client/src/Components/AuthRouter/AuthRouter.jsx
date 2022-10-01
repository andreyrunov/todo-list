import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import Auth from '../Auth/Auth'

function AuthRouter({ children }) {
	const { user } = useSelector((state) => state)
	const location = useLocation()
	if (user.id === undefined) {
		 //return children
		return <Auth />
	} else {
		return <Navigate to='/task-list' state={{ from: location }} replace />
	}
	// return <Navigate to='/queue' state={{ from: location }} replace />
}

export default AuthRouter
