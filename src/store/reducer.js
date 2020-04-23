import { combineReducers } from 'redux'
import entititiesReducer from './entities'

export default combineReducers({
	entities: entititiesReducer,
})
