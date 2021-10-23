import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { connect } from 'react-redux';
import { incrementCounter , decrementCounter} from './counter.action';

function Counter(props) {
  return (
    <div className="App">
        <div>Count : {props.count} </div>
        <button onClick={ () => props.decrementCounter() }> Decrement Count </button>
        <button onClick={ () => props.incrementCounter() }> Increase Count </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count : state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
