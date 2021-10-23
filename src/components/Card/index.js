import React from 'react'
import styled, {css} from 'styled-components'
import {Color} from '../Helpers'
import Icon from '../Icon'

const CardStyle = styled.div`
	box-shadow: 0 0 3px ${Color.blue};
	border-radius: 4px;
	overflow: hidden;
	display: block;
	margin-bottom: 20px;
	${props => props.addbtn && 
	 	css`
	 		height: calc(100% - 20px);
	 	`
	 };
`;

const CardContentStyle = styled.div`
	padding: 25px;
	background-color: ${props => props.primary ? Color.blue : Color.white};
	color: ${props => props.primary ? Color.white : Color.blue};
	 ${props => props.addbtn && 
	 	css`
	 		cursor: pointer;
	 		height: 100%;
	 		display: flex;
	 		justify-content: center;
	 		align-items: center;
	 		font-size: 100px;
	 	`
	 };
`;

const ImgStyle = styled.div`
	height: 300px;
	width: 100%;
	img{
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const Card = ({addbtn,icon, img, title, age, education,primary})=>{
	return <>
		<CardStyle addbtn={addbtn}>
			{img && <ImgStyle><img src={img} alt={img}/></ImgStyle>}
			<CardContentStyle primary={primary} addbtn={addbtn} >
				{icon &&  <Icon icon={icon} />}
				{title && <h3>{title}</h3>}
				{age && <p>{age}</p>}
				{education && <p>{education}</p>}
			</CardContentStyle>
		</CardStyle>
	</>
}


export default Card;

