import styled, { css } from 'styled-components'

const buttonStyles = css`
	background-color: #fe654f;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid #fe654f;
	}
`

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`

const getButtonStyles = (props) => {
	return props.inverted
		? invertedButtonStyles
		: buttonStyles
}

export const CustomButtonContainer = styled.button`
	min-width: 100px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 30px;
	padding: 0 10px 0 10px;
	font-size: 15px;
	text-transform: uppercase;
	border-radius: 3px;
	text-transform: uppercase;
	font-family: 'Rajdhani';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid #fe654f;
	}

	${getButtonStyles}
`
