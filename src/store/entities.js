import { combineReducers } from 'redux'
import placesReducer from './places'

export default combineReducers({
	places: placesReducer,
})
