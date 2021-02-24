function mainScreenView() {
    let html = `
        <div id="mainContent">
            <div id="header">
                <h1>Hallo, ${model.users[model.userID].firstname} ${model.users[model.userID].surname}!</h1>
            </div>

            <div id="suggestedMeals" class="green">
                <button id="suggestedMealsButton" class="buttonHover" onclick="suggestedMealsView()">Suggested Meals</button>
                <div class="green">${mainScreenSuggestedMeal()}</div>
                <button id="randomMealButton" class="buttonHover" onclick="mainScreenView()">Next</button>
            </div>
            <div id="navigateButtons">
                 <button id="storageButton" class="buttonHover" onclick="storageView()">Storage</button></br>
                 <button id="savedMealsButton" class="buttonHover" onclick="savedMealsView()">Saved meals</button></br>
                 <button id="shoppingCartButton" class="buttonHover" onclick="shoppinglistView()">Shopping cart</button></br>
            </div>
        </div>`;
    document.getElementById('app').innerHTML = html;
}

function mainScreenSuggestedMeal() {
    let listOfMeals = [];
    let index;
    for (let i = 0; i < model.savedMeals[model.userID].length; i++) {
        let missingIngredients = 0;
        let html = '';
        let html2 = '';
        let obj;
        for (let o = 0; o < model.savedMeals[model.userID][i].ingredients.length; o++) {
            if (!mainScreenSuggestedMealHelp(i, o) && !model.savedMeals[model.userID][i].ingredients[o].optional) {
                missingIngredients++;
                html2 += `<div class="green" style="color: red;">${model.savedMeals[model.userID][i].ingredients[o].ingredient}</div>`;
            }
        }
        for (let o = 0; o < model.savedMeals[model.userID][i].ingredients.length; o++) {
            if (!mainScreenSuggestedMealHelp(i, o) && model.savedMeals[model.userID][i].ingredients[o].optional) {
                html2 += `<div class="green" style="color: orange;">${model.savedMeals[model.userID][i].ingredients[o].ingredient}</div>`;
            }
        }
        if (missingIngredients <= 3 && missingIngredients > 0) {
            html = `<h3 class="green" id="suggestedMealHeader">${model.savedMeals[model.userID][i].mealName}</h3>
            <div class="green">Missing:</div>` + html2;
            obj = {info: html, index: i};
            listOfMeals.push(obj);
        }
        else if (missingIngredients == 0) {
            html = `<h3 class="green">${model.savedMeals[model.userID][i].mealName}</h3>
                    <div class="green checkmark">✔</div>`;
            obj = {info: html, index: i};
            listOfMeals.push(obj);
        }
    }
    let x = Math.floor(Math.random()*listOfMeals.length);
    if (listOfMeals.length > 0) {
        return `<div class="green" onclick="startCookingView(${listOfMeals[x].index}, true)">` + listOfMeals[x].info + '</div>';
    }
    else {
        return `
            <div>No Meals to Suggest!</div>
            <div>Take a trip to the store</div>
        `;
    }
}
function mainScreenSuggestedMealHelp(index, o) {
    for (let i = 0; i < model.storage[model.userID].length; i++) {
        if (model.savedMeals[model.userID][index].ingredients[o].ingredient == model.storage[model.userID][i].item) {
            return true;
        }
    }
    return false;
}

