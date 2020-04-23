import React from 'react'
import configureStore from '../store/configureStore'

const store = configureStore()

const PlacesPage = () => {
	console.log(store.getState())
	return <h1>Places Page</h1>
}

export default PlacesPage
