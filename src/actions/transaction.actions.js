import * as transactionService from '../services/transaction.service';

export const ACTION_TYPES = {
    LIST_ALL_TRANSACTIONS: 'LIST_ALL_TRANSACTIONS',
    DELETE_TRANSACTION_BY_ID: 'DELETE_TRANSACTION_BY_ID',
    ADD_TRANSACTION: 'ADD_TRANSACTION',
}
export const addTransaction = (payload) => (dispatch, getState) => {
    try {
        const transactions = transactionService.listAllTransactions();
        transactionService.addTransaction(payload);
        console.log(payload)
        return dispatch({
            type: ACTION_TYPES.LIST_ALL_TRANSACTIONS,
            transactions: [...transactions]
        })
    } catch (err) {
        console.log(err)
    }
};

export const listAllTransactions = () => (dispatch, getState) => {
    try {
        const transactions = transactionService.listAllTransactions();
        console.log('LISTALL', transactions);
        return dispatch({
            type: ACTION_TYPES.LIST_ALL_TRANSACTIONS,
            transactions: [...transactions]
        })
    } catch(err) {
        console.log(err)
    }
};
export const deleteTransactionById = (transactionId) => (dispatch, getState) => {
    try {
        transactionService.deleteTransactionById(transactionId);
        return dispatch({
            type: ACTION_TYPES.DELETE_TRANSACTION_BY_ID,
            transactionId
        })
    } catch (err) {
        console.log(err)
    }
}
