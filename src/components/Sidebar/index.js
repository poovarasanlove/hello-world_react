import {NavLink} from 'react-router-dom';
import Icon from '../Icon'
import styled from 'styled-components';
import {Color,Size} from '../Helpers';
import logo from '../../images/fk.jpeg'

const SidebarStyle = styled.div`
	position: fixed;
	left:0;
	top: 0;
	bottom:0;
	width: 150px;
	background: ${Color.secWhite};
	box-shadow: 1px 0 5px ${Color.lightGrey};
	height: 100vh;
	padding: 50px 0;
`;
const ImageBox = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50px;
	overflow:hidden;
	margin: 0 auto 50px;

	img{
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

`; 
const IconStyle =styled.span`
	margin-right: 5px;
`;
const NavListStyle = styled(NavLink)`
	display: block;
	padding: 10px;
	border-left: 5px solid transparent;
	font-size: ${Size.m};
	text-decoration: none;
	color: ${Color.blue};
	margin-bottom: 1px;
	&.active{
		background-color: ${Color.lightblue};
		border-color: ${Color.blue};
	}
	&:hover{
		background-color: ${Color.lightblue};
	}
`



const Sidebar = ()=> {
	return <>
		<SidebarStyle>
			<ImageBox>
				<img src={logo} alt="logo"/>
			</ImageBox>

			<NavListStyle to='/dashboard'>
				<IconStyle><Icon icon="tachometer-alt" /></IconStyle>
				<span>Dashboard</span>
			</NavListStyle>
			<NavListStyle to='/login'>
				<IconStyle><Icon icon="user" /></IconStyle>
				<span>User</span>
			</NavListStyle>
			<NavListStyle to='/report'>
				<IconStyle><Icon icon="flag" /></IconStyle>
				<span>Report</span>
			</NavListStyle>
		</SidebarStyle>
	</>
}

export default Sidebar;