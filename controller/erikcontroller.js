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

    let x = [
        {
            mealName: 'Taco',
            ingredients: [
                {
                    ingredient: 'Minced Meat',
                    quantity: '400g',
                    optional: false,
                },
                {
                    ingredient: 'Tortillas',
                    quantity: '4',
                    optional: false,
                },
                {
                    ingredient: 'Cheese',
                    quantity: '100g',
                    optional: false,
                },
                {
                    ingredient: 'Sour Cream',
                    quantity: '',
                    optional: false,
                }
            ],
            recipe: '',
        },
        {
            mealName: 'Pizza',
            ingredients: [
                {
                    ingredient: 'Flour',
                    quantity: '250g',
                    optional: false,
                },
                {
                    ingredient: 'Yeast',
                    quantity: '10g',
                    optional: false,
                },
                {
                    ingredient: 'Pizzasauce',
                    quantity: '1 cup',
                    optional: false,
                },
                {
                    ingredient: 'Cheese',
                    quantity: '100g',
                    optional: false,
                },
                {
                    ingredient: 'Ham',
                    quantity: '80g',
                    optional: true,
                },
                {
                    ingredient: 'Mushrooms',
                    quantity: '80g',
                    optional: true,
                },
                {
                    ingredient: 'Onion',
                    quantity: '1/2',
                    optional: true,
                },
                {
                    ingredient: 'Mushrooms',
                    quantity: '80g',
                    optional: true,
                },
                {
                    ingredient: 'Pinapple',
                    quantity: '1/2 box',
                    optional: true,
                },
                {
                    ingredient: 'Pizzaspices',
                    quantity: '',
                    optional: false,
                },
            ],
            recipe: '',
        },
        {
            mealName: 'Chicken & Spinnach',
            ingredients: [
                {
                    ingredient: 'Chicken',
                    quantity: '400g',
                    optional: false,
                },
                {
                    ingredient: 'Spinnach',
                    quantity: '100g',
                    optional: false,
                },
                {
                    ingredient: 'Pasta',
                    quantity: '120g',
                    optional: false,
                },
                {
                    ingredient: 'Cheese',
                    quantity: '100g',
                    optional: false,
                },
                {
                    ingredient: 'Garlic',
                    quantity: '2 cloves',
                    optional: false,
                },
                {
                    ingredient: 'Maizenna',
                    quantity: '1 spoon',
                    optional: false,
                },
                {
                    ingredient: 'Olive-oil',
                    quantity: '50ml',
                    optional: true,
                },
                {
                    ingredient: 'Parmezan',
                    quantity: '60g',
                    optional: true,
                },
                {
                    ingredient: 'Spring union',
                    quantity: '2 cloves',
                    optional: true,
                },
            ],
            recipe: '',
        },
    ];
    model.savedMeals.push(x);
    model.storage.push([]);

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
    model.newStorageItem.item = model.storage[model.userID][index].item;
    model.newStorageItem.quantity = model.storage[model.userID][index].quantity;
    model.newStorageItem.date = model.storage[model.userID][index].date;

    addNewItemToStoragePage(index);
};

function saveChangedStorageItem(index) {
    model.storage[model.userID][index].item = model.newStorageItem.item;
    model.storage[model.userID][index].quantity = model.newStorageItem.quantity;
    model.storage[model.userID][index].date = model.newStorageItem.date;
    addItemStorageHtml = '';
    resetNewStorageItem();
    storageView();
};

function resetNewStorageItem() {
    model.newStorageItem.item = '';
    model.newStorageItem.quantity = '';
    model.newStorageItem.date = '';
}

