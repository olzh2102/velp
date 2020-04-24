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

export const loadPlaces = (params) =>
	apiCallBegan({
		params,
		onStart: placesRequested.type,
		onSuccess: placesReceived.type,
		onError: placesRequestFailed.type,
	})

// selectors
export const getPlaces = createSelector(
	(state) => state.entities.places.list,
	(list) => list
)

const transformCategories = (acc, current) => {
	let categories = []

	for (let c of current.categories) {
		categories.push(c.alias)
	}

	acc.push({ ...current, categories })

	return acc
}
export const getTransformedPlaces = createSelector(
	(state) => state.entities.places.list,
	(list) => list.reduce(transformCategories, [])
)

export const getSelectedPlaces = (type) =>
	createSelector(
		[getTransformedPlaces],
		(list) =>
			list.filter((p) =>
				p.categories.includes(type)
			)
	)
