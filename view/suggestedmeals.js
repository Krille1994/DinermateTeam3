function suggestedMealsView() {
    let html = `
        <div id="suggestedMealsHeader">Suggested Meals:</div>
        <button id="suggestedMealsLeft">Left</button>
        <button id="suggestedMealsRight">Right</button>
    `;
    let suggestedMealsEnd = model.suggestedMeals.suggestedMealsStart + 4;
    for (let i = model.suggestedMeals.suggestedMealsStart; i < suggestedMealsEnd; i++) {
        resetSuggestedMeals();
        suggestedMealsValid(i);
        if (model.suggestedMeals.missingIngredients.length == 0) {
            html += `
                <div>
                    <h1>${model.savedMeals[i].mealName}</h1><br>
                    <h3>Missing:</h3>
                    `;
                    let 
                    for (let o = 0; o < model.suggestedMeals.missingIngredients.length; o++) {
                        if ()
                        html += `
                            
                        `;
                    }
                </div
            `;
        }
        else
        {
            let validity = 0;
            let tempHtml = '';
            for (let u = 0; u < model.suggestedMeals.missingIngredients.length; u++) {
                if (!model.suggestedMeals.missingIngredients[u].optional) {
                    validity++;
                    if (validity <= 3) {
                        tempHtml = '';
                        suggestedMealsEnd++;
                    }
                    tempHtml += `
                        

                    `;
                }
            }
        }
    }
    
    
}
function suggestedMealsValid(index) {
    let food = model.savedMeals[index].ingredients;
    for (let i = 0; i < food.length; i++) {
        if(!suggestedMealsValidHelp(i, food)) {
            let x = {
                ingredient: food[i].ingredient,
                optional: food[i].optional,
            }
            model.suggestedMeals.missingIngredients.push(x);
        }
    }
}
function suggestedMealsValidHelp(i, food) {
    for (let j = 0; j < model.storage.length; j++) {
            if(food[i].ingredient == model.storage[j].item) {
                return true;   
            }
            else {return false;}
    }
}
function resetSuggestedMeals() {
    model.suggestedMeals.missingIngredients = [];
}