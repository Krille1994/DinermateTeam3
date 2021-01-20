function savedMealsView() {
    let html = '<button onclick="mainScreenView()">Go Back</button>';
    if (model.savedMealsValues.loopEnd != 4) {
        html += '<button onclick="savedMealsDisplayNewMeals(false)">Left</button>';
    }
    for (let i = model.savedMealsValues.loopStart; i < model.savedMealsValues.loopEnd; i++) {
        if (model.savedMeals[i] == undefined) {

        }
        else {
            html += `
                <div onclick="model.savedMealsValues.index = ${i}, savedMealsView()">
                    <h2>${model.savedMeals[i].mealName}</h2>
                    <div>Ingredients:</div>`;
            for (let j = 0; j< model.savedMeals[i].ingredients.length; j++) {
                html += `
                    <div>${model.savedMeals[i].ingredients[j].ingredient}</div>
                `;
            }
            html += `
                </div>
            `;
        }
    }
    if (model.savedMealsValues.loopEnd < model.savedMeals.length) {
        html += `
            <button onclick="savedMealsDisplayNewMeals(true)">Right</button>
        `;
    }
    html += `
        <button ${model.savedMealsValues.index !== false? '' : 'disabled'} onclick="deleteMeal()">Delete Meal</button>
        <button ${model.savedMealsValues.index !== false ? '' : 'disabled'} onclick="changeMeal()">Change Meal</button>
        <button onclick="createMealView()">Create New Meal</button>
    `;

    document.getElementById('app').innerHTML = html;
}