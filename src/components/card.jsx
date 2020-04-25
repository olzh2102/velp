import React from 'react'

import {
	CardWrapper,
	ImageContainer,
} from './card.styles'

const Card = ({ place }) => {
	return (
		<CardWrapper>
			<ImageContainer
				imageUrl={place.image_url}
			/>
			<h2>{place.name}</h2>
		</CardWrapper>
	)
}

export default Card
