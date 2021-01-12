function createMealView() {
    let html = `
        <div id="createMealTable" style="float: left;">
            <h1>Create a meal</h1>

            <table style="width: 60%">
                <tr>
                    <td></td>
                    <td></td>
                    <td>Quantity</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>Meal Name</td>
                    <td><input type="text" value="${model.createMeal.mealName}" onchange="model.createMeal.mealName = this.innerHTML"></td>
                    <td></td>
                    <td></td>
                </tr>`;
                let ingredients = model.createMeal.ingredients;
                for (let i = 0; i < ingredients.length; i++) {
                    html += `
                    <tr>
                        <td>Ingredient ${i+1}:</td>
                        <td>
                            <input type="text" value="${ingredients[i].ingredient}" onchange="ingredients[i].ingredient = this.innerHTML">
                        </td>
                        <td>
                            <input type="text" value="${ingredients[i].quantity}" onchange="ingredients[i].quantity = this.innerHTML">
                        </td>
                        <td>
                            <input id="createMealOptionalCheck${i}" type="checkbox" ${ingredients[i].optional ? 'checked' : ''} onclick="createMealCheckbox(this, ${i})">
                        </td>
                    </tr>
                    `;
                }
                html += `
                <tr>
                    <td></td>
                    <td>
                        <button onclick="addIngredientCreateMeal()">Add Ingredient &#43;</button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    
    <div id="createRecipeDiv" style="float: right; width: 40%; height: 90%;">
        <h1>Recipe:</h1>
        <input type="text" style="width: 100%; height: 100%;" value="${model.createMeal.recipe}" onchange="model.createMeal.recipe = this.innerHTML">
    </div>
    <button onclick="saveMeal()">Save Meal</button>
    `;
    document.getElementById('app').innerHTML = html;
}