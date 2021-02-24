function startCookingView(index, bool) {
    let html = `
        <button onclick="${bool ? 'mainScreenView()' : 'suggestedMealsView()'}">Go Back</button>
        <h1 id="startCookingHeader">${model.savedMeals[model.userID][index].mealName}</h1>
        <div id="startCookingIngredients">
            <h1>Ingredients:</h1>
            <ul>
    `;
    let food = model.savedMeals[model.userID][index].ingredients;
    for (let i = 0; i < food.length; i++) {
        html += `
            <li>${food[i].ingredient} ${food[i].quantity}</li>
        `;
    }
    html += `
            </ul>
        </div>
        <div>
            <h1 id="startCookingRecipe">Recipe:</h1>
            <div id="startCookingRecipeText">
                <pre>${model.savedMeals[model.userID][index].recipe}
                </pre>
            </div>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}