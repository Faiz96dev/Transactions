import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/transaction.actions';
import './Main.css';
import AddTransactions from "../addTransactions/addTransactions";

class Main extends Component {
  componentDidMount() {
    this.props.actions.listAllTransactions();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Transaction manager</h2>
        </div>
        <div className="transaction-container">
          {this.props.transactions.map((transaction, index) =>
              <div key={index}>
                <p>id: {transaction.id}</p> <p>bank: {transaction.bankId}</p> <p>amount: {transaction.amount}</p>
                <button onClick={() => this.props.actions.deleteTransactionById(transaction.id)}>Delete</button>
              </div>)}
        </div>
          <AddTransactions/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  transactions: [...state.transactions.transactions]
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
