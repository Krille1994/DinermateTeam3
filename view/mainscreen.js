
function mainScreenView() {
    let html = `
    <h1>Hallo, ${model.users[model.userID].firstname} ${model.users[model.userID].surname}!</h1>
    <div>
        <button onclick="suggestedMealsView()">Suggested Meals</button>
        <div>${mainScreenSuggestedMeal()}</div>
        <div>Previous</div>
        <div>Next</div>
    </div>
    <br>
    <button onclick="storageView()">Storage</button>
    <button onclick="savedMealsView()">Saved meals</button>
    <button >Shopping cart</button>
    `
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
                html2 += `<div style="color: red;">${model.savedMeals[model.userID][i].ingredients[o].ingredient}</div>`;
            }
            else if (!mainScreenSuggestedMealHelp(i, o) && model.savedMeals[model.userID][i].ingredients[o].optional) {
                html2 += `<div style="color: orange;">${model.savedMeals[model.userID][i].ingredients[o].ingredient}</div>`;
            }
        }
        if (missingIngredients <= 3 && missingIngredients > 0) {
            html = `<h3>${model.savedMeals[model.userID][i].mealName}</h3>
            <div>Missing:</div>` + html2;
            obj = {info: html, index: i};
            listOfMeals.push(obj);
        }
        else if (missingIngredients == 0) {
            html = `<h3>${model.savedMeals[model.userID][i].mealName}</h3>
                    <div>Ready to cook!</div>`;
            obj = {info: html, index: i};
            listOfMeals.push(obj);
        }
    }
    let x = Math.floor(Math.random()*listOfMeals.length);
    if (listOfMeals.length > 0) {
        return `<div onclick="startCookingView(${listOfMeals[x].index}, true)">` + listOfMeals[x].info + '</div>';
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

