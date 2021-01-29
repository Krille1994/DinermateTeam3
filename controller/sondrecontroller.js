//controller
function checkLogin(){
    if(checkLoginHelp() !== false){
        let i= checkLoginHelp();
        model.userID = i;
        updateShoppingList();
        mainScreenView();
    }
    else {
        loginView(true);
    }
    


}

function checkLoginHelp(){
    let user= false;
    for(let i = 0; i < model.users.length; i++) {
        if (model.login.user==model.users[i].username && 
            model.login.password==model.users[i].password) { 
                user = i;
                return user;
            }
    }
    return user;
}



// shopping list

function removeShoppinglistItem(index) {
    model.shoppingList[model.userID].splice(index, 1);
    shoppinglistView();
}

function addShoppinglistItem() {
    let x = {
        item: '',
        quantity: '',
        date: 'no date',
    }
    model.shoppingList[model.userID].push(x);
    shoppinglistView();
}


function sendToStorage() {
    for (let i = 0; i < model.shoppingList[model.userID].length; i++) {
        if (model.shoppingList[model.userID][i].quantity) {
            model.storage[model.userID].push(model.shoppingList[model.userID][i]);
            model.shoppingList[model.userID].splice(i, 1);
            i--;
        }
    }
    shoppinglistView();
}

function permanentlyBanItem(index) {
    if (confirm('Press OK to permanently remove item from shoppinglist')) {
        model.shoppingListPermaBan[model.userID].push(model.shoppingList[model.userID][index].item);
        updateShoppingList();
        shoppinglistView();
    }
}