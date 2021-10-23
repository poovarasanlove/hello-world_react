import React from 'react'
import styled from 'styled-components'
import {Color,Size} from '../Helpers'

const SelectStyle = styled.div`
	position: relative;
	border: 1px solid ${Color.blue};
	padding: 5px 15px;
	border-radius: 4px;
	font-size: ${Size.r};
	color: ${Color.blue};
`
const LabelStyle = styled.div`
	width: 100%;
	font-size: ${Size.r};
	color: ${Color.blue};
`
const ListStyle = styled.ul`
	position: absolute;
	box-shadow: 0 0 3px;
	display: block;
	left: 0;
	right: 0;
	top: 100%;
	max-height: ${props => props.open ? '150px' : 0 };
	transition: all .25s ease-in;
	overflow: hidden;
	border-radius: 0 0 4px 4px;
`
const ListItemStyle = styled.li`
	display: block;
	padding: 3px 10px;
	border-bottom: 1px solid ${Color.blue};
`
// const Lable
const Select = ({selected,open,options,onClick, handlerSelection,label}) => {
	return <>
		{label && <LabelStyle>{label}</LabelStyle>}
		<SelectStyle onClick={onClick}>
			{selected}
			<ListStyle open={open}>
				{options.map((el,i) => <ListItemStyle key={i} onClick={()=> handlerSelection(el)}> {el} </ListItemStyle>)}
			</ListStyle>
		</SelectStyle>
	</>
}

Select.defaultProps ={
	selected : 'Select',
	open: false,
}

export default Select;