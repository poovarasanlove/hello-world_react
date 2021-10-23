import React from 'react';
import styled from 'styled-components'
import {Color,Size} from '../Helpers'

const Buttonstyle = styled.button`
	background:${props=> props.primary ? Color.blue : Color.white };
	border: 2px solid ${Color.blue};
	border-radius: 4px;
	color: ${props=> props.primary ? Color.white :Color.blue};
	cursor: pointer;
	display: block;
	font-size: ${Size.m};
	padding: 5px 20px;
`;

export const ButtonGroup = styled.div`
	display: flex;
	button{
		margin-right: 20px;
		&:last-child{
			margin-right: 0;
		}
	}
`

const Button = (props) => {
	const {link, as, primary, name, onClick} = props;
	return <>
		<Buttonstyle href={link} as={as} primary={primary} onClick={onClick}> {name} </Buttonstyle>
	</>
};


Button.defaultProps ={
	onClick: () =>{},
}

export default Button;




