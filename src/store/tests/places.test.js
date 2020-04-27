import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
	loadPlaces,
	getTransformedPlaces,
} from '../places'
import configureStore from '../configureStore'

describe('places slice', () => {
	let fakeAxios
	let store

	const params = {
		term: 'restaurants',
		location: 'berlin',
		limit: 10,
		categories: 'pizza,sushi,burgers',
	}

	beforeEach(() => {
		fakeAxios = new MockAdapter(axios)
		store = configureStore()
	})

	const placesSlice = () =>
		store.getState().entities.places
	const createState = () => ({
		entities: { places: { list: [] } },
	})

	test('fetching places from the server and storing them in the store', async () => {
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

		test('should be false after places are fetched', async () => {
			fakeAxios
				.onGet('/search', { params })
				.reply(200, [{ id: 1 }])

			await store.dispatch(loadPlaces())

			expect(placesSlice().loading).toBe(false)
		})

		test('should be false if the server fails on fetching', async () => {
			fakeAxios
				.onGet('/search', { params })
				.reply(500)

			await store.dispatch(loadPlaces())

			expect(placesSlice().loading).toBe(false)
		})
	})

	describe('selectors', () => {
		test('getTransformedPlaces', () => {
			const state = createState()
			state.entities.places.list = [
				{
					id: 1,
					categories: [
						{
							alias: 'hotdogs',
							title: 'Fast Food',
						},
						{
							alias: 'burgers',
							title: 'Burgers',
						},
					],
				},
			]

			const expected = [
				{
					id: 1,
					categories: ['hotdogs', 'burgers'],
				},
			]

			const result = getTransformedPlaces(state)

			expect(result).toEqual(expected)
		})
	})
})
