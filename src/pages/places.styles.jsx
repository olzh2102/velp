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

export const FilterWrapper = styled.div`
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

export const FilterButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	button {
		margin: 3px;
	}
`
