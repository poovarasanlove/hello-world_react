import {useContext} from 'react';
import {Link} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap';
import {Context} from '../../Context';
import Card from '../../components/Card'
import styled from 'styled-components'

const DashboardStyle = styled.div`
	margin-left: 150px;
	padding: 100px 0;
`;


const Dashboard = () => {
	var {TroopersState} = useContext(Context);
	console.log(TroopersState);
	return <>
		<DashboardStyle>
			<Container>
				<Row>
					{TroopersState.map((item,i) => <Col md={4} key={i}><Card title={item.name} age={item.age} education={item.education} img={item.img} primary /></Col>)}
					<Col sm={4} >
						<Link to="/createtrooper">
							<Card icon="plus-circle" primary  addbtn />
						</Link>
					</Col>
				</Row>
			</Container>
		</DashboardStyle>
	</>
}

export default Dashboard;