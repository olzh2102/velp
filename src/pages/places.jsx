import React, { useEffect, useState } from 'react'
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

const PlacesPage = ({ p, getType }) => {
	const [places, setPlaces] = useState([])
	// const p = getType('burgers')

	// console.log('TYPE:', p)

	useEffect(() => setPlaces(p), [p])

	const handleClick = (type) => {
		const places = getType(type)
		setPlaces(places)
		console.log('YOY', places)
	}

	return (
		<>
			<h1>Places Page</h1>
			<button
				onClick={() =>
					handleClick('sushi')
				}
			>
				Sushi
			</button>
			<PlacesWrapper>
				{places.map((p) => (
					<h1>{p.name}</h1>
				))}
			</PlacesWrapper>
		</>
	)
}

const mapStateToProps = (state) => ({
	p: getTransformedPlaces(state),
	getType: (type) =>
		getSelectedPlaces(type)(state),
})

export default connect(mapStateToProps)(
	PlacesPage
)
