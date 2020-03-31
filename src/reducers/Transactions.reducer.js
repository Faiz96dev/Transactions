import {ACTION_TYPES} from '../actions/transaction.actions';

const initialState = {
    transactions: []
};

export default function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.LIST_ALL_TRANSACTIONS:
            console.log('get transactions')
            return {
                ...state,
                transactions: [...action.transactions]
            }
        case ACTION_TYPES.DELETE_TRANSACTION_BY_ID:
            const transactions = state.transactions;
            const index = transactions.findIndex((transaction) => transaction.id === action.transactionId);
            if (index === -1) {
                return {...state};
            }
            transactions.splice(index, 1);
            return {
                ...state,
                transactions
            }
        default:
            console.log('default')
            return {...state}
    }
}
