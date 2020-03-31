export const createStorage = (storageName) => {
    localStorage.setItem(storageName, JSON.stringify([]));
    console.log('create storage')
}

export const getFromStorage = (storageName) => {
    console.log('get storage')
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
    console.log('pushed to ls!')
}

export const deleteItemFromStorage = (storageName, itemId) => {
    const items = getFromStorage(storageName);
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) {
        throw new Error('Item not found');
    }
    items.splice(index, 1);
    console.log('remove from storage', items);
    localStorage.setItem(storageName, JSON.stringify(items));
}

