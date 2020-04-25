import styled from 'styled-components'

export const PlacesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(450px, 1fr)
	);
	grid-gap: 2rem;

	margin-top: 30px;
`
