import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

const slice = createSlice({
	name: 'places',
	initialState: {
		list: [],
		loading: false,
		error: null,
	},
	reducers: {
		placesRequestes: (places, action) => {
			places.loading = true
		},

		placesReceived: (places, action) => {
			places.loading = false
			places.list = action.payload
		},

		placesRequestFailed: (places, action) => {
			places.loading = false
			places.error = action.payload
		},
	},
})

export default slice.reducer

export const loadPlaces = () =>
	apiCallBegan({
		params: {
			term: 'restaurants',
			location: 'berlin',
			limit: 10,
		},
	})
