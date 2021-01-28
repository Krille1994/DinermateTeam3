const htmlStorageDiv = document.getElementById('app');
let addItemStorageHtml = '';





function addNewItemToStoragePage(index) {
    addItemStorageHtml = `
    <div id="addNewItem" onclick="selectStorageItem(this)">
        <div id="addItemToStorage">
            <button id="exitAddToStorage" onclick="leaveAddToStorage()">X</button>
            <label for="item">Item:</label></br>
            <input type="text" id="newStorageItem" value="${model.newStorageItem.item}" onchange="model.newStorageItem.item = this.value"></br>
            <label for="quantity">Quantity:</label></br>
            <input type="text" id="newStorageQuantity" value="${model.newStorageItem.quantity}" onchange="model.newStorageItem.quantity = this.value"></br>
            <label for="expdate">Expiration date:</label></br>
            <input type="date" id="newStorageExpDate" value="${model.newStorageItem.date}" onchange="model.newStorageItem.date = this.value"></br>
            <button onclick="${index >= 0 ? 'saveChangedStorageItem('+ index + ')' : 'saveItemToStorage()'};">${index >= 0 ? 'Save changed item' : 'Save to storage'}</button>
        </div>
    </div>
    `;
storageView();

}

let chosenDiv = '';

function selectStorageItem(element) {
    return element;
}


function storageView() {
    let storageItems = model.storage[model.userID];
    let storageHtml = '<button onclick="mainScreenView()">Go Back</button>';
    // Loops through all items in model.storage and creates a div for each.
    for (let i = 0; i < storageItems.length; i++) {
        storageHtml += `<div id="storageTest">
                            <div id="storageItemsDiv${i}" class="storageItems" onclick="selectStorageItem(this)">
                                 <p>Item:</p> <input type="text" class="storageItem" value="${storageItems[i].item}">
                                 <p>Quantity:</p> <input type="text" class="storageItem" value="${storageItems[i].quantity}">
                                 <p>Expiration date:</p> <input type="date" class="storageItem" value="${storageItems[i].date}">
                                 <button ${disableStorageButton} class="storageDeleteItem" onclick="deleteStorageItem(${i})">Delete item</button>
                                 <button ${disableStorageButton} class="storageChangeItem" onclick="changeStorageItem(${i})">Change item</button>
                            </div>
                        </div>`;
    }

    htmlStorageDiv.innerHTML = `
                                <div id="storageMainDiv">
                                    <div id="storageContent">
                                        ${storageHtml}
                                    </div>
                                        ${addItemStorageHtml}
                                    <div id="storageButtons">
                                        <button id="storageAddNewItem" onclick="addNewItemToStoragePage()">Add new item</button>
                                    </div>
                                </div>
    `
}

function deleteStorageItem(index) {
    model.storage[model.userID].splice(index, 1);
    console.log(index);
    storageView();
}




