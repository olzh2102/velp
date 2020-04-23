import {
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import api from './middleware/api.middleware'
import reducer from './reducer'

export default function () {
	return configureStore({
		reducer,
		middleware: [
			...getDefaultMiddleware(),
			api,
		],
	})
}
