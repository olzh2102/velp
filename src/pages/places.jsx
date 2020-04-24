import React from 'react'
import { connect } from 'react-redux'

import { getTransformedPlaces } from '../store/places'

const PlacesPage = ({ places }) => {
	console.log('NC-s', places)
	return <h1>Places Page</h1>
}

const mapStateToProps = (state) => ({
	places: getTransformedPlaces(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
