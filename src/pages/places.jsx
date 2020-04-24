import React from 'react'
import { connect } from 'react-redux'

import {
	getPlaces,
	getCat,
} from '../store/places'

const PlacesPage = ({
	places,
	normalizedCategories,
}) => {
	console.log(places)
	console.log('NC-s', normalizedCategories)
	return <h1>Places Page</h1>
}

const mapStateToProps = (state) => ({
	places: getPlaces(state),
	normalizedCategories: getCat(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
