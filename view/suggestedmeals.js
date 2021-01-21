function suggestedMealsView() {
    let count = 0;
    let mealsDisplayed = [];
    let start = model.suggestedMeals.suggestedMealsStart;
    let end = model.suggestedMeals.suggestedMealsStart + 4;
    let html = `
        <button onclick="mainScreenView()">Go Back</button>
        <h1 id="suggestedMealsHeader">Suggested Meals:</h1>
        <button id="suggestedMealsLeft" onclick="nextSuggestedMeals(false)">Left</button>
        <button id="suggestedMealsRight" onclick="nextSuggestedMeals(true)">Right</button>
    `;
    
    // loop som skal lage 4 foreslåtte måltider
    for (let i = start; i < end; i++) {
        if (mealsDisplayed.includes(i)) {}
        else {
            i == 0 ? count++ : '';
            if (count >= 4 || model.savedMeals[model.userID][i] === undefined) {
                count = 0;
                html += `
                <div>
                    <h1>No Meals to Suggest</h1>
                    <div>Go to Create a Meal and add some more!</div>
                    <button onclick="createMealView()">Create a Meal</button>
                </div>`;
            }
            else {
                // tømmer missingIngredients
                model.suggestedMeals.missingIngredients = [];
                missingIngredients(i);
                if (model.suggestedMeals.missingIngredients.length == 0) {
                    html += `
                        <div>
                            <h1>${model.savedMeals[model.userID][i].mealName}</h1>
                            <div>Green Checkmark</div>
                            <button onclick="startCookingView(${i}, false)">Start Cooking</button>
                        </div>
                    `;
                    mealsDisplayed.push(i);
                }
                else if(threeMissingIngredients()) {
                    end++;
                }
                else {
                    html += `
                        <div>
                        <h1>${model.savedMeals[model.userID][i].mealName}</h1>
                        <div>Missing:</div>
                        `;
                        let missIngr = model.suggestedMeals.missingIngredients;
                            for (let j = 0; j < missIngr.length; j++) {
                                if (missIngr[j].optional) {
                                    html += `
                                            <div style="color: orange;">${missIngr[j].ingredient}</div>
                                        `;
                                }
                                else {
                                    html += `
                                            <div style="color: red;">${missIngr[j].ingredient}</div>
                                        `;
                                }
                            }
                        html += `
                            <button onclick="startCookingView(${i}, false)">Start Cooking</button>
                            </div>
                        `;
                        mealsDisplayed.push(i);
                    }
                if (i == model.savedMeals[model.userID].length-1) {
                    i = 0;
                    end -= model.savedMeals[model.userID].length-1;
                }
            }
        }
    }
    document.getElementById('app').innerHTML = html;
}

// legger manglende ingredienser i missingIngredients
function missingIngredients(index) {
    let food = model.savedMeals[model.userID][index].ingredients;
    for (let i = 0; i < food.length; i++) {
        if (!missingIngredientsHelp(food, i)) {
            let x = {
                ingredient: model.savedMeals[model.userID][index].ingredients[i].ingredient,
                optional: model.savedMeals[model.userID][index].ingredients[i].optional,
            };
            model.suggestedMeals.missingIngredients.push(x);
        }
    }
}

// funksjon som returnerer true hvis ingrediensen er i storage
function missingIngredientsHelp(food, iIndex) {
    for (let u = 0; u < model.storage[model.userID].length; u++) {
        if (food[iIndex].ingredient == model.storage[model.userID][u].item) {
            return true;
        }
    }
    return false;
}

// Funksjon som sjekker om flere enn 3 ingredienser som ikke er optional er i missingIngredients
function threeMissingIngredients() {
    let missing = 0;
    let ingr = model.suggestedMeals.missingIngredients;
    for (let i = 0; i < ingr.length; i++) {
        if (!ingr[i].optional) {
            missing++
        }
    }
    if (missing >= 4) {
        return true;
    }
    else {
        return false;
    }
}
