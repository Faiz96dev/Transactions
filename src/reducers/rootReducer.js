import {combineReducers} from 'redux';
import transactions from './Transactions.reducer';
import auth from './Auth.reducer';

export default combineReducers({
    transactions,
    auth
})