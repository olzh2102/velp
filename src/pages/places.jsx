import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
	getTransformedPlaces,
	getSelectedPlaces,
} from '../store/places'

const PlacesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(450px, 1fr)
	);
	grid-gap: 1rem;
`

const PlacesPage = ({ places, getType }) => {
	const p = getType('burgers')
	console.log('TYPE:', p)
	return (
		<>
			<h1>Places Page</h1>
			<PlacesWrapper>
				{places.map((p) => (
					<h1>{p.name}</h1>
				))}
			</PlacesWrapper>
		</>
	)
}

const mapStateToProps = (state) => ({
	places: getTransformedPlaces(state),
	getType: (type) =>
		getSelectedPlaces(type)(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
