function createMealView(mealChange) {
    let html = `
        <div id="createMealTable" style="float: left;">
            <h1>${mealChange ? 'Change Meal' : 'Create a meal'}</h1>

            <table style="width: 60%">
                <tr>
                    <td></td>
                    <td></td>
                    <td>Quantity</td>
                    <td>Optional</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Meal Name</td>
                    <td><input type="text" value="${model.createMeal.mealName}" onchange="model.createMeal.mealName = this.value"></td>
                    <td>${mealChange ? '<button onclick="saveChangedMeal(model.savedMealsValues.index)">Save Changes</button>' : '<button onclick="saveMeal()">Save Meal</button>'}</td>
                    <td></td>
                    <td></td>
                </tr>`;
                let ingredients = model.createMeal.ingredients;
                for (let i = 0; i < ingredients.length; i++) {
                    html += `
                    <tr>
                        <td>Ingredient ${i+1}:</td>
                        <td>
                            <input type="text" value="${ingredients[i].ingredient}" onchange="model.createMeal.ingredients[${i}].ingredient = this.value">
                        </td>
                        <td>
                            <input type="text" value="${ingredients[i].quantity}" onchange="model.createMeal.ingredients[${i}].quantity = this.value">
                        </td>
                        <td>
                            <input id="createMealOptionalCheck${i}" type="checkbox" ${ingredients[i].optional ? 'checked' : ''} onclick="createMealCheckbox(this, ${i})">
                        </td>
                        <td>
                            <button onclick="deleteCreateMealIngredient(${mealChange+ ',' +i})">Remove</button>
                        </td>
                    </tr>
                    `;
                }
                html += `
                <tr>
                    <td></td>
                    <td>
                        <button onclick="addIngredientCreateMeal(${mealChange})">Add Ingredient &#43;</button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    
    <div id="createRecipeDiv" style="float: right; width: 40%; height: 90%;">
        <h1>Recipe:</h1>
        <input type="text" style="width: 100%; height: 100%;" value="${model.createMeal.recipe}" onchange="model.createMeal.recipe = this.value">
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}

