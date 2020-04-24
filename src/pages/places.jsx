import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadPlaces } from '../store/places'
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

const PlacesPage = ({
	p,
	getType,
	loadPlaces,
}) => {
	const [searchTerm, setSearchTerm] = useState(
		''
	)
	const [place, setTypedPlace] = useState('')
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
		//setSearchTerm(type)
		const params = {
			term: type,
			location: 'berlin',
			limit: 10,
			categories: 'pizza,sushi,burgers',
		}
		console.log('PARAMS', params)
		loadPlaces(params)
		setTypedPlace('')
	}

	const selectionTypes = [
		'',
		'sushi',
		'pizza',
		'burgers',
	]

	const handleChange = (e) => {
		const { value, name } = e.target
		setTypedPlace(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const params = {
			term: place,
			location: 'berlin',
			limit: 10,
			categories: 'pizza,sushi,burgers',
		}
		console.log('PARAMS', params)
		loadPlaces(params)
		setTypedPlace('')
	}

	return (
		<>
			<h1>Places Page</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="place"
					value={place}
					onChange={handleChange}
				/>
				<button type="submit">
					search
				</button>
			</form>
			{selectionTypes.map((t) => (
				<button
					onClick={() => handleClick(t)}
				>
					{t}
				</button>
			))}
			<PlacesWrapper>
				{selectedType.map((p) => (
					<h1>{p.name}</h1>
				))}
			</PlacesWrapper>
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	loadPlaces: (params) =>
		dispatch(loadPlaces(params)),
})

const mapStateToProps = (state) => ({
	p: getTransformedPlaces(state),
	getType: (type) =>
		getSelectedPlaces(type)(state),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlacesPage)
