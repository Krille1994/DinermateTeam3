// Funksjoner for create a meal siden

function addIngredientCreateMeal() {
    let newIngredient = {
        ingredient: '',
        quantity: '',
        optional: false,
    };
    model.createMeal.ingredients.push(newIngredient);
    createMealView();
}
function createMealCheckbox(elem, index) {
    let x = model.createMeal.ingredients[index];
    if (elem.checked) {
        x.optional = true;
    }
    else {
        x.optional = false;
        console.log(index);
    }
}

function saveMeal() {
    model.savedMeals.push(model.createMeal);

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
    createMealView();
}


// Funksjoner for Suggested Meals

function nextSuggestedMeals(value) {
    if (value) {
        model.suggestedMeals.suggestedMealsStart += 4;
        if (model.suggestedMeals.suggestedMealsStart >= model.savedMeals.length) {
            model.suggestedMeals.suggestedMealsStart -= model.savedMeals.length;
        }
    }
    else {
        model.suggestedMeals.suggestedMealsStart -= 4;
        if (model.suggestedMeals.suggestedMealsStart < 0) {
            model.suggestedMeals.suggestedMealsStart += model.savedMeals.length ;
        }
    }
    suggestedMealsView();
}