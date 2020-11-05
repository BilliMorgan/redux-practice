import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreaters from "../../store/actions/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";



class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIcrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl 
          label="Add 5" 
          clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
            {this.props.storedResults.map(strResult => (
                <li key={strResult.id} 
                    onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}
                </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIcrementCounter: () => dispatch(actionCreaters.increment()),
    onDecrementCounter: () => dispatch(actionCreaters.decrement()),
    onAddCounter: () => dispatch(actionCreaters.add(5)),
    onSubtractCounter: () => dispatch(actionCreaters.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreaters.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreaters.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
