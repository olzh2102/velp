import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { loadPlaces } from '../places'
import configureStore from '../configureStore'

describe('places slice', () => {
	test('fetching places from the server and storing them in the store', async () => {
		const fakeAxios = new MockAdapter(axios)
		const store = configureStore()
		const params = {
			term: 'restaurants',
			location: 'berlin',
			limit: 10,
			categories: 'pizza,sushi,burgers',
		}

		fakeAxios
			.onGet('/search', { params })
			.reply(200, [{ id: 1 }])

		await store.dispatch(loadPlaces())

		expect(
			store.getState().entities.places.list
		).toHaveLength(1)
	})
})
