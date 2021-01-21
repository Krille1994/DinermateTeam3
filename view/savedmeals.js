function savedMealsView() {
    let html = '<button id="savedMealsBackButton" onclick="mainScreenView()">Go Back</button>';
    if (model.savedMealsValues.loopEnd != 8) {
        html += '<button id="savedMealsLeftButton" onclick="savedMealsDisplayNewMeals(false)">Left</button>';
    }
    for (let i = model.savedMealsValues.loopStart; i < model.savedMealsValues.loopEnd; i++) {
        if (model.savedMeals[model.userID][i] == undefined) {

        }
        else {
            if(i == model.savedMealsValues.loopStart) {
                html += `
                <div class="topSavedMealsDiv firstSavedMealsDiv" onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
                <h2>${model.savedMeals[model.userID][i].mealName}</h2>
                <div>Ingredients:</div>`;
            for (let j = 0; j< model.savedMeals[model.userID][i].ingredients.length; j++) {
                html += `
                    <div>${model.savedMeals[model.userID][i].ingredients[j].ingredient}</div>
                `;
            }
            html += `
                </div>
            `;
                console.log('ft');
            }
            else if(i == model.savedMealsValues.loopStart+4) {
                html += `
                <div class="bottomSavedMealsDiv firstSavedMealsDiv" onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
                <h2>${model.savedMeals[model.userID][i].mealName}</h2>
                <div>Ingredients:</div>`;
            for (let j = 0; j< model.savedMeals[model.userID][i].ingredients.length; j++) {
                html += `
                    <div>${model.savedMeals[model.userID][i].ingredients[j].ingredient}</div>
                `;
            }
            html += `
                </div>
            `;
                console.log('fb');
            }
            else if (i < model.savedMealsValues.loopStart+4) {
                html += `
                <div class="topSavedMealsDiv" onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
                <h2>${model.savedMeals[model.userID][i].mealName}</h2>
                <div>Ingredients:</div>`;
            for (let j = 0; j< model.savedMeals[model.userID][i].ingredients.length; j++) {
                html += `
                    <div>${model.savedMeals[model.userID][i].ingredients[j].ingredient}</div>
                `;
            }
            html += `
                </div>
            `;
                console.log('t');
            }
            else {
                html += `
                <div class="bottomSavedMealsDiv" onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
                <h2>${model.savedMeals[model.userID][i].mealName}</h2>
                <div>Ingredients:</div>`;
            for (let j = 0; j< model.savedMeals[model.userID][i].ingredients.length; j++) {
                html += `
                    <div>${model.savedMeals[model.userID][i].ingredients[j].ingredient}</div>
                `;
            }
            html += `
                </div>
            `;
                console.log('b');
            }
            // html += `
            //     <div class="savedMealsDiv ${i == model.savedMealsValues.loopStart ? 'firstSavedMealsDiv': ''}" onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
            //         <h2>${model.savedMeals[model.userID][i].mealName}</h2>
            //         <div>Ingredients:</div>`;
            // for (let j = 0; j< model.savedMeals[model.userID][i].ingredients.length; j++) {
            //     html += `
            //         <div>${model.savedMeals[model.userID][i].ingredients[j].ingredient}</div>
            //     `;
            // }
            // html += `
            //     </div>
            // `;
        }
    }
    if (model.savedMealsValues.loopEnd < model.savedMeals[model.userID].length) {
        html += `
            <button id="savedMealsRightButton" onclick="savedMealsDisplayNewMeals(true)">Right</button>
        `;
    }
    html += `
        <button id="savedMealsDeleteButton" ${model.savedMealsValues.index !== false? '' : 'disabled'} onclick="deleteMeal()">Delete Meal</button>
        <button id="savedMealsChangeButton" ${model.savedMealsValues.index !== false ? '' : 'disabled'} onclick="changeMeal()">Change Meal</button>
        <button id="savedMealsCreateButton" onclick="createMealView()">Create New Meal</button>
    `;

    document.getElementById('app').innerHTML = html;
}