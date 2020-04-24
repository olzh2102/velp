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
	const [searchTerm, setSearchTerm] = useState(
		''
	)
	const [
		selectedType,
		setSelectedType,
	] = useState([])

	useEffect(() => {
		const yoyo = getType(searchTerm)

		const o = yoyo.length > 0 ? yoyo : p

		setSelectedType(o)
	}, [searchTerm, p])

	const handleClick = (type) => {
		setSearchTerm(type)
	}

	return (
		<>
			<h1>Places Page</h1>
			<button onClick={handleClick}>
				All
			</button>
			<button
				onClick={() =>
					handleClick('sushi')
				}
			>
				Sushi
			</button>
			<button
				onClick={() =>
					handleClick('pizza')
				}
			>
				Pizza
			</button>
			<PlacesWrapper>
				{selectedType.map((p) => (
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
