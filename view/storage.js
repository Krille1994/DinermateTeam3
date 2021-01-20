const htmlStorageDiv = document.getElementById('app');
let addItemStorageHtml = '';


function addNewItemToStoragePage() {
    addItemStorageHtml = `
    <div id="addNewItem" onclick="selectStorageItem(this)">
        <div id="addItemToStorage">
            <button id="exitAddToStorage" onclick="leaveAddToStorage()">X</button>
            <label for="item">Item:</label></br>
            <input type="text" id="newStorageItem" value=""></br>
            <label for="quantity">Quantity:</label></br>
            <input type="text" id="newStorageQuantity" value=""></br>
            <label for="expdate">Expiration date:</label></br>
            <input type="date" id="newStorageExpDate" value=""></br>
            <button onclick="saveItemToStorage();">Save to storage</button>
        </div>
    </div>
`
storageView();

}

let chosenDiv = '';

function selectStorageItem(element) {
    console.log(element);
    return element;
}




function storageView() {
    let storageItems = model.storage;
    let storageHtml = '<button onclick="mainScreenView()">Go Back</button>';
    // Loops through all items in model.storage and creates a div for each.
    for (let i = 0; i < storageItems.length; i++) {
        storageHtml += `<div id="storageTest">
                            <div id="storageItemsDiv${i}" onclick="selectStorageItem(this)">
                                 <p>Item:</p> <input type="text" class="storageItem" value="${storageItems[i].item}">
                                 <p>Quantity:</p> <input type="text" class="quantityItem" value="${storageItems[i].quantity}">
                                 <p>Expiration date:</p> <input type="date" class="storageExpDate" value="${storageItems[i].date}">
                                 <button ${disableStorageButton} class="storageDeleteItem" onclick="deleteStorageItem">Delete item</button>
                                 <button ${disableStorageButton} class="storageChangeItem">Change item</button>
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

function deleteStorageItem(element) {
    element = selectStorageItem();
    element.remove();
    console.log(element)
}




