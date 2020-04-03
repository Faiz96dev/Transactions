import * as localStorageService from './localStorage.service';

const STORAGE_NAME = 'auth';

export const getAuth = () => { return localStorageService.checkAvailability(STORAGE_NAME)} 

export const removeAuth = () => { return localStorageService.deleteStoregeByName(STORAGE_NAME)}

export const setAuth = () => {
    localStorageService.pushToStorage(STORAGE_NAME, true)
}