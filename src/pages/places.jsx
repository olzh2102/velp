import React from 'react'
import configureStore from '../store/configureStore'
import { loadPlaces } from '../store/places'
const store = configureStore()

const PlacesPage = () => {
	store.dispatch(loadPlaces())
	return <h1>Places Page</h1>
}

export default PlacesPage
