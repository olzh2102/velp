import React from 'react'
import { connect } from 'react-redux'

import { getPlaces } from '../store/places'

const PlacesPage = ({ places }) => {
	console.log(places)
	return <h1>Places Page</h1>
}

const mapStateToProps = (state) => ({
	places: getPlaces(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
