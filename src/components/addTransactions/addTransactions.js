import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/transaction.actions';
import './addTransactions.css';

class AddTransactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: 23,
            selectorVal: 'Halyk',
            bankId: 3
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setSelectorValue = this.setSelectorValue.bind(this);
    }

    handleChange(e) {
        this.setState({inputVal: e.target.value})
    }

    handleSubmit(e) {
        let payload = {
            amount: this.state.inputVal ,
            bankId: this.state.selectorVal ,
        }
        this.props.actions.addTransaction(payload)
        // e.preventDefault()
    }

    setSelectorValue(e) {
        this.setState({selectorVal: e.target.value})
    }

    render() {
        return (
            <div className="form-container">
                <div><p>amount:</p><input onChange={this.handleChange} value={this.state.inputVal} type="number"/></div>
                <div><p>bank:</p><select value={this.state.selectorVal} onChange={this.setSelectorValue} id="cars">
                    <option value="volvo">Halyk</option>
                    <option value="saab">Kyrgyzstan</option>
                    <option value="mercedes">Demir</option>
                </select></div>
                <button onClick={this.handleSubmit}>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactions)
