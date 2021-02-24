// Funksjoner for create a meal siden

function addIngredientCreateMeal(mealChange) {
    let newIngredient = {
        ingredient: '',
        quantity: '',
        optional: false,
    };
    model.createMeal.ingredients.push(newIngredient);
    mealChange ? createMealView(mealChange) : createMealView();
}
function createMealCheckbox(elem, index) {
    let x = model.createMeal.ingredients[index];
    if (elem.checked) {
        x.optional = true;
    }
    else {
        x.optional = false;
    }
}

function saveMeal() {
    model.savedMeals[model.userID].push(model.createMeal);

    model.createMeal = {
        mealName: '',
        ingredients: [
            {
                ingredient: '',
                quantity: '',
                optional: false,
            },
        ],
        recipe: '',
    }
    savedMealsView();
}


// Funksjoner for Suggested Meals

function nextSuggestedMeals(value) {
    if (value) {
        model.suggestedMeals.suggestedMealsStart += 4;
        if (model.suggestedMeals.suggestedMealsStart >= model.savedMeals[model.userID].length) {
            model.suggestedMeals.suggestedMealsStart -= model.savedMeals[model.userID].length;
        }
    }
    else {
        model.suggestedMeals.suggestedMealsStart -= 4;
        if (model.suggestedMeals.suggestedMealsStart < 0) {
            model.suggestedMeals.suggestedMealsStart += model.savedMeals[model.userID].length ;
        }
    }
    suggestedMealsView();
}

// Funksjoner for savedMeals

function savedMealsDisplayNewMeals(bool) {
    if (bool) {
        model.savedMealsValues.loopStart += 4;
        model.savedMealsValues.loopEnd += 4;
    }
    else {
        model.savedMealsValues.loopStart -= 4;
        model.savedMealsValues.loopEnd -= 4;
    }
    savedMealsView();
}

function deleteMeal() {
    model.savedMeals[model.userID].splice(model.savedMealsValues.index, 1);
    model.savedMealsValues.index = false;
    savedMealsView();
}
function changeMeal() {
    model.createMeal = model.savedMeals[model.userID][model.savedMealsValues.index];
    createMealView(true);
}
function saveChangedMeal(index) {
    model.savedMeals[model.userID][index] = model.createMeal;

    model.createMeal = {
        mealName: '',
        ingredients: [
            {
                ingredient: '',
                quantity: '',
                optional: false,
            },
        ],
        recipe: '',
    }
    model.savedMealsValues.index = false;

    savedMealsView();
}
function deleteCreateMealIngredient(bool, index) {
    model.createMeal.ingredients.splice(index, 1);

    createMealView(bool);
}

function updateShoppingList() {
    model.shoppingList[model.userID] = [];
    let tempList = [];

    let userMeals = model.savedMeals[model.userID];
    for (let i = 0; i < userMeals.length; i++) {
        let ingr = userMeals[i].ingredients;
        for (let j = 0; j < ingr.length; j++) {
            if (!updateShoppingListHelp(ingr[j])) {
                if (model.shoppingListPermaBan[model.userID].length !== 0) {
                    if (!checkPermabannedItems(ingr[j])) {
                        if (tempList.length == 0) {
                            tempList.push(ingr[j].ingredient);
                        }
                        else if(!updateShoppingListHelp2(tempList, ingr, j)) {
                            tempList.push(ingr[j].ingredient);
                        }
                    }
                }
                else {
                    if (tempList.length == 0) {
                        tempList.push(ingr[j].ingredient);
                    }
                    else if(!updateShoppingListHelp2(tempList, ingr, j)) {
                        tempList.push(ingr[j].ingredient);
                    }
                }
            }
        }
    }
    for (let a = 0; a < tempList.length; a++) {
        let x = {
            item: tempList[a],
            quantity: '',
            date: '',
        };
        model.shoppingList[model.userID].push(x);
    }
}

function updateShoppingListHelp(ingr) {
    let userStorage = model.storage[model.userID];
    for (let k = 0; k < userStorage.length; k++) {
        if (ingr.ingredient === userStorage[k].item) {
            return true;
        }
    }
    return false;
}
function updateShoppingListHelp2(tempList, ingr, j) {
    for (let f in tempList) {
        if (!tempList[f].includes(ingr[j].ingredient)) {
        }
    }
}

function checkPermabannedItems(ingr) {
    let perm = model.shoppingListPermaBan[model.userID];
    for (let i = 0; i < perm.length; i++) {
        if (perm[i] == ingr.ingredient) {
            return true;
        }
    }
        return false;
}


// local Storage funksjoner

function saveToLocalStorage() {
    let usersSerialized = JSON.stringify(model.users);
    let savedMealsSerialized = JSON.stringify(model.savedMeals);
    let storageSerialized = JSON.stringify(model.storage);
    let shoppingListSerialized = JSON.stringify(model.shoppingList);
    let shoppingListPermaBanSerialized = JSON.stringify(model.shoppingListPermaBan);

    localStorage.setItem("users", usersSerialized);
    localStorage.setItem("savedMeals", savedMealsSerialized);
    localStorage.setItem("storage", storageSerialized);
    localStorage.setItem("shoppingList", shoppingListSerialized);
    localStorage.setItem("shoppingListPermaBan", shoppingListPermaBanSerialized);
}
function getFromLocalStorage() {
    if (localStorage.getItem("users") !== null) {
        usersDeserialized = JSON.parse(localStorage.getItem("users"));
        savedMealsDeserialized = JSON.parse(localStorage.getItem("savedMeals"));
        storageDeserialized = JSON.parse(localStorage.getItem("storage"));
        shoppingListDeserialized = JSON.parse(localStorage.getItem("shoppingList"));
        shoppingListPermaBanDeserialized = JSON.parse(localStorage.getItem("shoppingListPermaBan"));

        model.users = usersDeserialized;
        model.savedMeals = savedMealsDeserialized;
        model.storage = storageDeserialized;
        model.shoppingList = shoppingListDeserialized;
        model.shoppingListPermaBan = shoppingListPermaBanDeserialized;
    }
}

window.onbeforeunload = function() {
    saveToLocalStorage();
}
// window.onload = function() {
//     getFromLocalStorage();
// }