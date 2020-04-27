import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import {
	loadPlaces,
	getPlaces,
	getTransformedPlaces,
	getSelectedPlaces,
} from '../store/places'

import Card from '../components/card'
import CustomButton from '../components/custom-button'
import FormInput from '../components/form-input'
import WithSpinner from '../components/with-spinner'

import {
	PlacesWrapper,
	FilterWrapper,
	FilterButtonsWrapper,
} from './places.styles'

const CardWithSpinner = WithSpinner(Card)

const selectionTypes = [
	'sushi',
	'pizza',
	'burgers',
]

const PlacesPage = ({
	defaultPlaces,
	places,
	search,
	loadPlaces,
}) => {
	const [place, setType] = useState('')
	const [selected, setSelected] = useState([])

	useEffect(() => {
		let places = search(place)
		places =
			places.length > 0 ? places : defaultPlaces

		setSelected(places)
	}, [place, defaultPlaces])

	const handleClick = async (type) => {
		await loadPlaces(type)
		setType('')
	}

	const handleChange = (e) => {
		setType(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		await loadPlaces(place)
		setType('')
	}

	return (
		<>
			<h1>Places Page</h1>

			<FilterWrapper>
				<FilterButtonsWrapper>
					{selectionTypes.map((t) => (
						<CustomButton
							onClick={() => handleClick(t)}
							children={t}
						/>
					))}
				</FilterButtonsWrapper>
				<form onSubmit={handleSubmit}>
					<FormInput
						name="place"
						type="text"
						handleChange={handleChange}
						value={place}
						label="Place"
					/>
					<CustomButton
						type="submit"
						disabled={place === ''}
						inverted
						children="Search"
					/>
				</form>
			</FilterWrapper>

			<PlacesWrapper>
				{selected.map((p) => (
					<CardWithSpinner place={p} />
				))}
			</PlacesWrapper>
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	loadPlaces: (type) =>
		dispatch(loadPlaces(type)),
})

const mapStateToProps = (state) => ({
	places: getPlaces(state),
	defaultPlaces: getTransformedPlaces(state),
	search: (type) =>
		getSelectedPlaces(type)(state),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlacesPage)
