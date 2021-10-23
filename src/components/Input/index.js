import React from 'react';
import styled from 'styled-components'
import {Color} from '../Helpers'

const InputStyle = styled.input`
	padding: 5px 10px;
	border: 1px solid ${Color.blue};
	width: 100%;
	border-radius: 4px;
	&:focus{
		outline: none;
	}
`
const LabelStyle = styled.div`
	color: ${Color.blue};
	margin-bottom: 5px;
`
const InputBoxStyle = styled.div`
	margin-bottom: 20px;
`

const Input = ({type, name, label, value, onChange}) => {
	return<>
		<InputBoxStyle>
			{label && <LabelStyle>{label}</LabelStyle>}
			<InputStyle onChange={onChange} type={type} name={name} value={value} />
		</InputBoxStyle>
	</>
}

Input.defaultProps={
	type: 'text',
	onChange: ()=> {}
}

export default Input;