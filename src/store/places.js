import { createSlice } from '@reduxjs/toolkit'

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
