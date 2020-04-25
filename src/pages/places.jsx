import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
	loadPlaces,
	getTransformedPlaces,
	getSelectedPlaces,
} from '../store/places'

import Card from '../components/card'
import CustomButton from '../components/custom-button'
import FormInput from '../components/form-input'
import WithSpinner from '../components/with-spinner'

import { PlacesWrapper } from './places.styles'

const CardWithSpinner = WithSpinner(Card)

const FilterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;

	form {
		display: flex;
		flex-direction: column;
	}
`

const FilterButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	button {
		margin: 3px;
	}
`

const PlacesPage = ({
	p,
	getType,
	loadPlaces,
}) => {
	const [searchTerm, setSearchTerm] = useState('')
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
		loadPlaces(type)
		setTypedPlace('')
	}

	const selectionTypes = [
		'sushi',
		'pizza',
		'burgers',
	]

	const handleChange = (e) => {
		setTypedPlace(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		loadPlaces(place)
		setTypedPlace('')
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
						inverted
						children="Search"
					/>
				</form>
			</FilterWrapper>
			<PlacesWrapper>
				{selectedType.map((p) => (
					<CardWithSpinner place={p} />
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
