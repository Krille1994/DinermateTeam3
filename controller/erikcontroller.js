// register

function getRegisteredDetails() {
    const firstName = document.getElementById('fname').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    model.registerPage.firstname = firstName;
    model.registerPage.surname = surname;
    model.registerPage.email = email;
    model.registerPage.password = password;
    
    return {username: model.registerPage.email,
            password: model.registerPage.password,
            firstname: model.registerPage.firstname,
            surname: model.registerPage.surname,
            ID: model.users.length +1};
}

function createUser() {
    model.users.push(getRegisteredDetails());
    console.log(model.users);

    loginView();
} 

// storage

let disableStorageButton = '';

function leaveAddToStorage() {
    addItemStorageHtml = '';
    storageView();
};

function saveItemToStorage() {
    // let item = document.getElementById('newStorageItem');
    // let quantity = document.getElementById('newStorageQuantity');
    // let expdate = document.getElementById('newStorageExpDate');

    let item = model.newStorageItem.item;
    let quantity = model.newStorageItem.quantity;
    let date = model.newStorageItem.date;

    model.storage[model.userID].push({
        item: item,
        quantity: quantity,
        date: date,
    },);

    console.log(model.storage[model.userID]);

    addNewItemToStoragePage();
    resetNewStorageItem();
};

function changeStorageItem(index) {
    model.newStorageItem.item = model.storage[index].item;
    model.newStorageItem.quantity = model.storage[index].quantity;
    model.newStorageItem.date = model.storage[index].date;

    addNewItemToStoragePage(index);
};

function saveChangedStorageItem(index) {
    model.storage[index].item = model.newStorageItem.item;
    model.storage[index].quantity = model.newStorageItem.quantity;
    model.storage[index].date = model.newStorageItem.date;
    addItemStorageHtml = '';
    resetNewStorageItem();
    storageView();
};

function resetNewStorageItem() {
    model.newStorageItem.item = '';
    model.newStorageItem.quantity = '';
    model.newStorageItem.date = '';
}

