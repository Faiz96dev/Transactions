import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/transaction.actions';
import * as authActions from '../../actions/auth.actions';
import '../Main/Main.css';
import AddTransactions from "../addTransactions/addTransactions";
import List from '../list/List';
import Button from 'react-bootstrap/Button'
import {ToastsContainer, ToastsStore} from 'react-toasts';
 


class Manager extends React.Component {
  componentDidMount() {
    // this.props.authActions.getAuth();
    this.props.actions.listAllTransactions();
  }

  render() {
  return (
       <div className="App">
          <ToastsContainer store={ToastsStore}/>
        <div className="App-header">
          <div> 
        <Button  onClick={() => {this.props.authActions.removeAuth()}} variant="info">Log Out</Button>
          </div>
          <h2>Welcome to Transaction manager</h2>
        </div>
        <AddTransactions/>
        <div >
              <List deleteTransactionById={this.props.actions.deleteTransactionById} transactions={this.props.transactions} />
        </div>
       
        <div>
    </div>
      
      </div>
    );
  }
}
const mapStateToProps = state => ({
  transactions: [...state.transactions.transactions],
  auth: [...state.auth.auth]
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions,  dispatch),
  authActions: bindActionCreators(authActions,  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
