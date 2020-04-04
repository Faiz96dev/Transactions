import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/transaction.actions';
import './addTransactions.css';
import Form from 'react-bootstrap/Form'
import {ToastsStore} from 'react-toasts';
import Loader from '../loader/Loader'


class AddTransactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            selectorVal: '',
            banks:[]
        };

    }
    
    componentDidMount(){
        this.getBanks()
    }

    getBanks= ()=>{
        setTimeout(()=>{
            this.setState({banks: [
                {value:'Halyk', display:'Halyk'},
                {value:'Kyrgyzstan', display:'Kyrgyzstan'},
                {value:'Demir', display:'Demir'}
            ]
        
        })
        }, 4000)
    }
    handleChange = e => {
        this.setState({inputVal: e.target.value})
    }

    handleSubmit = e => {
        if (!this.state.inputVal && !this.state.selectorVal){
            ToastsStore.success("Fill in all the fields!")
            return
        }
        let payload = {
            amount: this.state.inputVal ,
            bankId: this.state.selectorVal ,
        }
        this.props.actions.addTransaction(payload)
        this.state.inputVal = ''
    }

    setSelectorValue = e => {
        this.setState({selectorVal: e.target.value})
    }

    render() {
        let banks = this.state.banks
        return (
            <div className="form-container">
              
                <Form.Control  onChange={this.handleChange} value={this.state.inputVal} type="number" placeholder="Amount" />
  
        {banks.length === 0 ? <Loader/> :   <div><p>bank:</p>
                <select value={this.state.selectorVal} onChange={this.setSelectorValue}>
        {banks.map((i) => <option  key={i.value} value={i.value}>{i.display}</option>)}
      </select>
                </div>}
               
            
              
                <button onClick={this.handleSubmit} className="add_btn" >Add</button>
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
