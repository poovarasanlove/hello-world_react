import {combineReducers} from 'redux';
import counterReducer from '../components/Counter/counter.reducer'
 
 const rootReducer = combineReducers({
 	counter: counterReducer,
 })

 export default rootReducer;