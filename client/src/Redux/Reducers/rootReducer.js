import { combineReducers } from 'redux'
import userDataReducer from './userDataReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	user: userReducer,
	userData: userDataReducer,
})

export default rootReducer
