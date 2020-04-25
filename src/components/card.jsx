import React from 'react'
import styled from 'styled-components'

import {
	CardWrapper,
	ImageContainer,
} from './card.styles'

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	margin-left: 10px;
`

const Card = ({ place }) => {
	return (
		<CardWrapper>
			<ImageContainer
				imageUrl={place.image_url}
			/>
			<CardContent>
				<h2>{place.name}</h2>
				<span>Rating: {place.rating}</span>
				<span>Price: {place.price}</span>
				<a href={place.url}>check it out</a>
				<span>Phone: {place.display_phone}</span>
			</CardContent>
		</CardWrapper>
	)
}

export default Card
