function startCookingView(index) {
    let html = `
        <button onclick="suggestedMealsView()">Go Back</button>
        <h1>${model.savedMeals[index].mealName}</h1>
        <div>
            <h1>Ingredients:</h1>
            <ul>
    `;
    let food = model.savedMeals[index].ingredients;
    for (let i = 0; i < food.length; i++) {
        html += `
            <li>${food[i].ingredient} ${food[i].quantity}</li>
        `;
    }
    html += `
            </ul>
        </div>
        <div>
            <h1>Recipe:</h1>
            <div>
                ${model.savedMeals[index].recipe}
            </div>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}