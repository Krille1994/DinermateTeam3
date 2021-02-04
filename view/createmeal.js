function createMealView(mealChange) {
    let html = `
        <div id="createMealTable">
            <h1>${mealChange ? 'Change Meal' : 'Create a meal'}</h1>

            <table id="createMealTable">
                <tr>
                    <td></td>
                    <td></td>
                    <td>Quantity</td>
                    <td class="createMealCheckboxTD">Optional</td>
                    <td class="createMealRemoveTD"></td>
                </tr>
                <tr>
                    <td>Meal Name</td>
                    <td><input class="createMealInputs" type="text" value="${model.createMeal.mealName}" onchange="model.createMeal.mealName = this.value"></td>
                    <td></td>
                    <td class="createMealCheckboxTD"></td>
                    <td class="createMealRemoveTD"></td>
                </tr>`;
                let ingredients = model.createMeal.ingredients;
                for (let i = 0; i < ingredients.length; i++) {
                    html += `
                    <tr>
                        <td>Ingredient ${i+1}:</td>
                        <td>
                            <input class="createMealInputs" type="text" value="${ingredients[i].ingredient}" onchange="model.createMeal.ingredients[${i}].ingredient = this.value">
                        </td>
                        <td>
                            <input class="createMealInputs" type="text" value="${ingredients[i].quantity}" onchange="model.createMeal.ingredients[${i}].quantity = this.value">
                        </td>
                        <td class="createMealCheckboxTD">
                            <input id="createMealOptionalCheck${i}" class="createMealCheckboxes" type="checkbox" ${ingredients[i].optional ? 'checked' : ''} onclick="createMealCheckbox(this, ${i})">
                        </td>
                        <td class="createMealRemoveTD">
                            <button class="createMealRemoveButton" onclick="deleteCreateMealIngredient(${mealChange+ ',' +i})">Remove</button>
                        </td>
                    </tr>
                    `;
                }
                html += `
                <tr>
                    <td></td>
                    <td>
                        <button onclick="addIngredientCreateMeal(${mealChange})">Add Ingredient &#43;</button>
                        ${mealChange ? '<button onclick="saveChangedMeal(model.savedMealsValues.index)">Save Changes</button>' : '<button onclick="saveMeal()">Save Meal</button>'}
                    </td>
                    <td class="createMealCheckboxTD"></td>
                    <td></td>
                </tr>
            </table>
        </div>
    
    <div id="createRecipeDiv" style="float: right; width: 40%; height: 90%;">
        <h1>Recipe:</h1>
        <textarea id="createMealTextarea" rows ="30" value="${model.createMeal.recipe}" onchange="model.createMeal.recipe = this.value"></textarea>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}

