import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { loadPlaces } from '../places'
import configureStore from '../configureStore'

describe('places slice', () => {
	let fakeAxios
	let store

	beforeEach(() => {
		fakeAxios = new MockAdapter(axios)
		store = configureStore()
	})

	const placesSlice = () =>
		store.getState().entities.places
	const createStore = () => ({
		entities: { places: { list: [] } },
	})

	test('fetching places from the server and storing them in the store', async () => {
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

	describe('loading indicator', () => {
		test('should be true while fetching the places', () => {
			fakeAxios.onGet('/places').reply(() => {
				expect(placesSlice().loading).toBe(true)
				return [200, [{ id: 1 }]]
			})

			store.dispatch(loadPlaces())
		})
	})
})
