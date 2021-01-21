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
}

function saveItemToStorage() {
    let item = document.getElementById('newStorageItem');
    let quantity = document.getElementById('newStorageQuantity');
    let expdate = document.getElementById('newStorageExpDate');

    model.storage[model.userID].push({
        item: item.value,
        quantity: quantity.value,
        date: expdate.value,
    },);

    console.log(model.storage[model.userID]);

    addNewItemToStoragePage();
}

