import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { checkUser } from '../../Redux/actions/authAction'

function UserAuthorised({ children }) {
	const { user } = useSelector((state) => state)
	const location = useLocation()
	if (checkUser()) {
		return children
	}
	return <Navigate to='/' state={{ from: location }} replace />
}

export default UserAuthorised
