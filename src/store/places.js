import {
	createSlice,
	createSelector,
} from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

const slice = createSlice({
	name: 'places',
	initialState: {
		list: [],
		loading: false,
		error: null,
	},
	reducers: {
		placesRequested: (places, action) => {
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

const {
	placesRequested,
	placesReceived,
	placesRequestFailed,
} = slice.actions

export default slice.reducer

export const loadPlaces = () =>
	apiCallBegan({
		params: {
			term: 'restaurants',
			location: 'berlin',
			limit: 10,
		},
		onStart: placesRequested.type,
		onSuccess: placesReceived.type,
		onError: placesRequestFailed.type,
	})

// selectors
export const getPlaces = createSelector(
	(state) => state.entities.places.list,
	(list) => list
)
