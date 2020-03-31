import * as localStorageService from './localStorage.service';

const STORAGE_NAME = 'transactions';
export const addTransaction = (payload) => {
    if (!payload.amount || !payload.bankId) {
        throw new Error('Data invalid');
    }
    let transactions = localStorageService.getFromStorage(STORAGE_NAME)
    let id = transactions.length
    console.log(transactions)
    if (id === 0) {
        id = 1
    }
    if (id > 0) {
        id = id++
    }
    let obj = {
        ...payload,
        id:id
    }
    console.log('Push to storage')
    console.log(obj)
    localStorageService.pushToStorage(STORAGE_NAME, obj);
};

export const listAllTransactions = () => localStorageService.getFromStorage(STORAGE_NAME);

export const deleteTransactionById = (id) => localStorageService.deleteItemFromStorage(STORAGE_NAME, id);