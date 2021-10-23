import React from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import styled from 'styled-components'
import {Color,Size} from '../../components/Helpers'

const ContainerStyle = styled.div`
	height: 100vh;
	background-color: #3e6f9e75;
	padding-top: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`
const FormBlockStyle = styled.div`
	background-color: ${Color.white};
	max-width: 420px;
	border-radius: 10px;
	padding: 30px;
	width: 100%;
`
const HeadingStyle = styled.div`
	background-color: ${Color.blue};
	margin: -30px -30px 30px;
	border-radius: 10px 10px 0 0 ;
	padding: 25px;
	text-align: center;
	h1{
		color: ${Color.white};
	}
`

const Login = () => {

	const handleChange = () =>{
		console.log(0);
	}

	return <>
		<ContainerStyle>
			<FormBlockStyle>
				<HeadingStyle><h1>Login</h1></HeadingStyle>
				<Input name="user name" type="email"  label="User Name" onChange={handleChange} />
				<Input name="password" type="password" label="Password" onchange={handleChange} />
				<Button primary name="Submit" />
			</FormBlockStyle>
		
		</ContainerStyle>
	</>
}


export default Login;