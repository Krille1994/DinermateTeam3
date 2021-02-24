



function shoppinglistView() {
    let html = `
        <button onclick="mainScreenView()" class="buttonHover">Go Back</button>
        <h1>Shopping list</h1>
    `;
    if (model.shoppingList[model.userID].length === 0) {
        html += `<h2>You are fully stocked</h2>`;
    }
    else {
        html += `
            <table id="shoppingListTable" style="width: 50%;">
                <tr>
                    <td></td>
                    <td>Quantity:</td>
                    <td>Date:</td>
                    <td>Remove</td>
                    <td></td>
                </tr>
        `;
        for (let i = 0; i < model.shoppingList[model.userID].length; i++) {
            html += `
                <tr>
                    <td>${model.shoppingList[model.userID][i].item ? model.shoppingList[model.userID][i].item :
                        '<input type="text" onchange="model.shoppingList[model.userID]['+i+'].item = this.value">'}</td>
                    <td><input type="text" class="inputField" onchange="model.shoppingList[model.userID][${i}].quantity = this.value"></td>
                    <td><input type="date" class="inputField" onchange="model.shoppingList[model.userID][${i}].date = this.value"></td>
                    <td><button class="buttonHover" onclick="removeShoppinglistItem(${i})">X</button></td>
                    <td><button id="permanentlyRemoveButton" class="buttonHover" onclick="permanentlyBanItem(${i})">Permanently remove</button></td>
                </tr>
            `;
        }
    }
    html += `
            </table>
            <button onclick="addShoppinglistItem()" class="buttonHover">Add thing to buy +</button>
            <button onclick="sendToStorage()" class="buttonHover">Update storage</button>
    `;



    document.getElementById('app').innerHTML = html;
    }
