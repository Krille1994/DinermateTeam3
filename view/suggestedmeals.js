
function suggestedMealsView() {
    let start = model.suggestedMeals.suggestedMealsStart;
    let sugMeals = []; // la stå
    let sugIngr = [];  // la stå
    let meals = model.savedMeals[model.userID];
    let html = `
    <button onclick="mainScreenView()">Go Back</button>
    <h1 id="suggestedMealsHeader">Suggested Meals:</h1>
    ${start === 0 ? '' : '<button id="suggestedMealsLeft" onclick="nextSuggestedMeals(false)">Left</button>'}
    `;

    for (let i = 0; i < meals.length + 4; i++) {
        if (i >= meals.length && sugMeals.length % 4 == 0) {
            let returnedHtml = suggestedMealsCreateHtml(sugMeals, sugIngr);
            html += returnedHtml.html;
            returnedHtml.end ? '' : html += `
            <button id="suggestedMealsRight" onclick="nextSuggestedMeals(true)">Right</button>
            `;
        }
        if (meals[i] === undefined) {
            sugMeals.push({name: false, index: i});
            sugIngr.push(false);
        }
        else {
            let missingIngr = suggestedMealsCheckIngredients(i);
            if (missingIngr.length == 0) {
                sugMeals.push({name: meals[i].mealName, index: i});
                sugIngr.push(true);
            }
            else {
                let misNumber = 0
                for (let j = 0; j < missingIngr.length; j++) {
                    if (missingIngr[j].optional === false) {
                        misNumber++;
                    }
                }
                if (misNumber <= 3) {
                    sugMeals.push({name: meals[i].mealName, index: i});
                    sugIngr.push(missingIngr);
                }
            }
        }
    }

    document.getElementById('app').innerHTML = html;
}

function suggestedMealsCheckIngredients(index) {
    let x = [];
    let meal = model.savedMeals[model.userID][index];
    for (let i = 0; i < meal.ingredients.length; i++) {
        if (!suggestedMealsCheckIngredientsHelp(meal, i)) {
            let obj = {ingredient: meal.ingredients[i].ingredient, optional: meal.ingredients[i].optional};
            x.push(obj);
        }
    }
    return x;
}
function suggestedMealsCheckIngredientsHelp(meal, index) { 
    for (let i = 0; i < model.storage[model.userID].length; i++) {
        if (meal.ingredients[index].ingredient == model.storage[model.userID][i].item) {
            return true;
        }
    }
    return false;
}

function suggestedMealsCreateHtml(sugMeals, sugIngr) {
    let start = model.suggestedMeals.suggestedMealsStart;
    let html = '';
    let number = 0;
    for (let i = start; i < start+4; i++) {
        number++
        if (sugIngr[i] === true) {
            html += `
                        <div id="suggestedMealDiv${number}" class="suggestedMealDivs">
                            <h1 class="sugMealName">${sugMeals[i].name}</h1>
                            <div class="sugMealIngredients">Green Checkmark</div>
                            <button class="suggestedStartCookingButton" onclick="startCookingView(${sugMeals[i].index}, false)">Start Cooking</button>
                        </div>
                    `;
        }
        else if (sugIngr[i] === false) {
            html += `
            <div id="suggestedMealDiv${number}" class="suggestedMealDivs">
                <h1 class="sugMealName">No Meals to Suggest</h1>
                <div class="sugMealIngredients">Go to Create a Meal and add some more!</div>
                <button class="suggestedStartCookingButton" onclick="createMealView()">Create a Meal</button>
            </div>
            `;
        }
        else {
            html += `
                <div id="suggestedMealDiv${number}" class="suggestedMealDivs">
                    <h1 class="sugMealName">${sugMeals[i].name}</h1>
                    <div class="sugMealIngredients">Missing:</div>
            `;
            for (let j = 0; j < sugIngr[i].length; j++) {
                if (sugIngr[i][j].optional === false) {
                    html += `
                        <div class="sugMealIngredients" style="color: red;">${sugIngr[i][j].ingredient}</div>
                    `;
                }
            }
            for (let k = 0; k < sugIngr[i].length; k++) {
                if (sugIngr[i][k].optional == true) {
                    html += `
                        <div class="sugMealIngredients" style="color: orange;">${sugIngr[i][k].ingredient}</div>
                    `;
                }
            }
            html += `
                    <button class="suggestedStartCookingButton" onclick="startCookingView(${sugMeals[i].index}, false)">Start Cooking</button>
                </div>`;
        }
    }
    let x = {html: html, end: start+4 >= sugMeals.length ? true : false}
    return x;
}
