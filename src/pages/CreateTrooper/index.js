import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'
import Input from '../../components/Input'
import Button,{ButtonGroup	} from '../../components/Button'
import {Context} from '../../Context'

const LayoutStyle = styled.div`
	margin: 0 150px;
	padding: 100px 0;
`;

const CenterBlockStyle = styled.div`
	max-width: 500px;
	margin: auto;
`;





const CreateTrooper = () =>{

	const history = useHistory();
	const {TroopersDispatch} = useContext(Context);

	const [inputdata, SetData] = useState({
		name:"",
		age:"",
		education:"",
		img:""
	});

	const handlechange = (e) =>{
		SetData({...inputdata, [e.target.name]: e.target.value});
	}
	const handlefileupload = (e) =>{
		const file = e.target.files[0];
		SetData({...inputdata, img : file ? URL.createObjectURL(file) : null });
	}
	console.log(inputdata);
	const handlesubmit = () =>{
		console.log(inputdata);
		if (!inputdata.name == "" && !inputdata.age == "" && !inputdata.education == "" && !inputdata.img == "" ) {
			TroopersDispatch({type: "ADD_TROOPER", payload: {id: Date.now(),...inputdata}});
			history.push('/dashboard');
		}else{
			alert('Please fill the form');
		}
	}
	const handlecancle = () => {;
		history.push('/dashboard');
	}


	return <>
		<LayoutStyle>
			<Container>
				<CenterBlockStyle>
						<h1>Create a Trooper</h1>
						<Input type="text" name="name" label="Name" onChange={handlechange} />
						<Input type="tel" name="age" label="Age" onChange={handlechange} />
						<Input type="text" name="education" label="Education" onChange={handlechange} />
						<Input type="file" name="img" label="Photo" onChange={handlefileupload} />
						<ButtonGroup>
							<Button name="Submit" primary onClick={handlesubmit}/>
							<Button name="Cancle" onClick={handlecancle}/>
						</ButtonGroup>
				</CenterBlockStyle>
			</Container> 
		</LayoutStyle>
	</>
}

export default CreateTrooper;