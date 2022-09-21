// import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import { rootReducer } from './Reducers/rootReducer'

// const initialState = {
// 	user: {},
// }

// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	composeWithDevTools()
// )


import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/rootReducer'

export const store = configureStore({
	reducer: rootReducer,
})

export default store