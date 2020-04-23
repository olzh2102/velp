import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

const slice = createSlice({
	name: 'places',
	initialState: {
		list: [],
		loading: false,
		error: null,
	},
	reducers: {},
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
