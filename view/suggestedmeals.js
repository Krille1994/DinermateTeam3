function suggestedMealsView() {
    let html = `
        <h1 id="suggestedMealsHeader">Suggested Meals:</h1>
        <button id="suggestedMealsLeft" onclick="nextSuggestedMeals(false)">Left</button>
        <button id="suggestedMealsRight" onclick="nextSuggestedMeals(true)">Right</button>
    `;
    let start = model.suggestedMeals.suggestedMealsStart;
    let end = model.suggestedMeals.suggestedMealsStart + 4;
    // loop som skal lage 4 foreslåtte måltider
    for (let i = start; i < end; i++) {
        // tømmer missingIngredients
        model.suggestedMeals.missingIngredients = [];

        missingIngredients(i);
        if (model.suggestedMeals.missingIngredients.length == 0) {
            html += `
                <div>
                    <h1>${model.savedMeals[i].mealName}</h1>
                    <div>Green Checkmark</div>
                    <button>Start Cooking</button>
                </div>
            `;
        }
        else if(threeMissingIngredients()) {
            end++;
        }
        else {
            html += `
                <div>
                <h1>${model.savedMeals[i].mealName}</h1>
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
                    <button>Start Cooking</button>
                    </div>
                `;
            
            }
        if (i == model.savedMeals.length-1) {
            i = 0;
            end -= model.savedMeals.length-1;
        }
    }
    document.getElementById('app').innerHTML = html;
}

// legger manglende ingredienser i missingIngredients
function missingIngredients(index) {
    let food = model.savedMeals[index].ingredients;
    for (let i = 0; i < food.length; i++) {
        if (!missingIngredientsHelp(food, i)) {
            let x = {
                ingredient: model.savedMeals[index].ingredients[i].ingredient,
                optional: model.savedMeals[index].ingredients[i].optional,
            };
            model.suggestedMeals.missingIngredients.push(x);
        }
    }
}

// funksjon som returnerer true hvis ingrediensen er i storage
function missingIngredientsHelp(food, iIndex) {
    for (let u = 0; u < model.storage.length; u++) {
        if (food[iIndex].ingredient == model.storage[u].item) {
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
