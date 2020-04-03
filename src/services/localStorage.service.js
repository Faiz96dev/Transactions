export const createStorage = (storageName) => {
    localStorage.setItem(storageName, JSON.stringify([]));
}

export const getFromStorage = (storageName) => {
    let storage = localStorage.getItem(storageName)
    if (!storage) {
        createStorage(storageName)
        return [];
    }
    return JSON.parse(storage);
};

export const pushToStorage = (storageName, item) => {
    const storage = getFromStorage(storageName);
    storage.push(item);
    localStorage.setItem(storageName, JSON.stringify(storage));
}

export const deleteItemFromStorage = (storageName, itemId) => {
    const items = getFromStorage(storageName);
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) {
        throw new Error('Item not found');
    }
    items.splice(index, 1);
    localStorage.setItem(storageName, JSON.stringify(items));
}

export const deleteStoregeByName = (storageName) =>{
    localStorage.removeItem(storageName)
}

export const checkAvailability = (storageName) =>{

  let storage = localStorage.getItem(storageName)
  if (storage){
      return true
  }
  return false

}