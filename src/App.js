import React , {useReducer} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import CreateTrooper from './pages/CreateTrooper'
import Dashboard from './pages/Dashboard'
import {Context} from './Context'


import kannan from './images/kannan.jpg';
import santhosh from './images/santhosh.jpg';
import sakthi from './images/sakthi.jpg';
import sabari from './images/sabari.jpg';
import poo from './images/poo.jpg';
import praveen from './images/praveen.jpg';
import pravin from './images/pravin.jpg';
import yoga from './images/yoga.jpg';
import prem from './images/prem.jpg';
import barani from './images/barani.jpg';
import enba from './images/enba.jpg';
import mario from './images/mario.jpg';
import thiru from './images/thiru.jpg';
import thiyagu from './images/thiyagu.jpg';
import thirumurugan from './images/thirumurugan.jpg';
import abilesh from './images/abilesh.jpg';
import karthi from './images/karthi.jpg';
     

     
function TroopersReducer(state, action) {
     switch (action.type){
          case "ADD_TROOPER":
               return [...state, action.payload];
          default: 
               return state;
     }
}

function DreamsReducer(state, action){
     switch(action.type){
          case "SET_DREAM":
               return action.payload;
          default:
               return state;
     }
}

const TroopersData =[
     {name: 'Kannan', age: '25', education: 'BE.Mech', img:kannan},
     {name: 'santhosh', age: '25', education: 'BE.Mach', img:santhosh},
     {name: 'Sakthi', age: '24', education: 'DEEE', img:sakthi},
     {name: 'Sabari', age: '26', education: 'DME', img:sabari},
     {name: 'Poovarasan', age: '25', education: 'BCA', img:poo},
     {name: 'Praveen kumar', age: '25', education: 'Bsc.Com', img:praveen},
     {name: 'Pravin Kumar', age: '25', education: 'BE.Mech', img:pravin},
     {name: 'Yogarajan', age: '25', education: 'BE.EEE', img:yoga},
     {name: 'Prem', age: '25', education: 'BE.EEE', img:prem},
     {name: 'Paraneeswaran', age: '25', education: 'BE.EEE', img:barani},
     {name: 'Enbaraj', age: '25', education: 'BE.CS', img:enba},
     {name: 'Mario Chirstopher', age: '25', education: 'BE.EEE', img:mario},
     {name: 'Thirunavukarasu', age: '25', education: 'BE.Mech', img:thiru},
     {name: 'Thiyagu', age: '25', education: 'DME', img:thiyagu},
     {name: 'Thirumurugan', age: '25', education: 'DME', img:thirumurugan},
     {name: 'Abilesh', age: '25', education: 'DME', img:abilesh},
     {name: 'Karthi', age: '25', education: 'BE.Mech', img:karthi},
]
const DreamsData = [
     {name: 'play', medium: 'work', long:'achive'},
     {name: 'play', medium: 'work', long:'achive'},
     {name: 'play', medium: 'work', long:'achive'},
     {name: 'play', medium: 'work', long:'achive'}
]




function App() {
     const [TroopersState, TroopersDispatch] = useReducer(TroopersReducer, TroopersData);
     const [DreamsState, DreamsDispatch] = useReducer(DreamsReducer,DreamsData);
     return (
          <>
               <Context.Provider value={{TroopersState,TroopersDispatch,DreamsState, DreamsDispatch}}>
                    <Router>
                         <Route  path="/" component={Sidebar} />
                         <Switch>
                              <Route exact path="/dashboard" component={Dashboard} />
                              <Route exact path="/login" component={Login} />
                              <Route exact path="/createtrooper" component={CreateTrooper} />

                         </Switch>
                    </Router>
               </Context.Provider>
          </>
     );
}

export default App;
