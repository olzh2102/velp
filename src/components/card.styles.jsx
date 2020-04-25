import styled from 'styled-components'

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;

	background-color: #fff;
	box-shadow: 0 2px 4px rgba(27, 31, 35, 0.15);
	border: 1px solid rgba(187, 208, 216, 0.2);
	border-radius: 3px;
	padding: 25px;
	height: 250px;
`

export const ImageContainer = styled.div`
	background-image: ${({ imageUrl }) =>
		`url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	border-radius: 3px;
	width: 45%;
	height: 100%;
`
