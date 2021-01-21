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