import axios from 'axios'
import * as actions from '../api'

const api = ({ dispatch }) => (next) => async (
	action
) => {
	if (
		action.type !== actions.apiCallBegan.type
	) {
		return next(action)
	}

	console.log('API', action.payload)

	const {
		url,
		data,
		params,
		onStart,
		method,
		onSuccess,
		onError,
	} = action.payload

	if (onStart) {
		dispatch({ type: onStart })
	}

	/* 
    have to call 'next'
    otherwise following dispatches 
    will be swallowed
    */
	next(action)

	try {
		const response = await axios.request({
			baseURL:
				'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
			url,
			method,
			params,
			data,
			headers: {
				Authorization: `Bearer`,
			},
		})

		dispatch(
			actions.apiCallSuccess(
				response.data.businesses
			)
		)
	} catch (error) {
		dispatch(
			actions.apiCallFailed(error.message)
		)
	}
}

export default api
