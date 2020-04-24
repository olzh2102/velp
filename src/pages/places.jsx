import React from 'react'
import { connect } from 'react-redux'

import {
	getTransformedPlaces,
	getSelectedPlaces,
} from '../store/places'

const PlacesPage = ({ places, getType }) => {
	const p = getType('pizza')
	console.log('TYPE:', p)
	return <h1>Places Page</h1>
}

const mapStateToProps = (state) => ({
	places: getTransformedPlaces(state),
	getType: (type) =>
		getSelectedPlaces(type)(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
