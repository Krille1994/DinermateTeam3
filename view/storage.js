const htmlStorageDiv = document.getElementById('app');
let addItemStorageHtml = '';


function addToStorage() {
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
            <button>Save to storage</button>
        </div>
    </div>
`
storageView();

}

storageView();
function storageView() {
    let storageItems = model.storage;
    let storageHtml = '';
    // Loops through all items in model.storage and creates a div for each.
    for (let i = 0; i < storageItems.length; i++) {
        storageHtml += `<div id="storageItemsDiv" onclick="selectStorageItem(this)">
                             <p>Item:</p> <input type="text" id="storageItem" value="${storageItems[i].item}">
                             <p>Quantity:</p> <input type="text" id="quantityItem" value="${storageItems[i].quantity}">
                             <p>Expiration date:</p> <input type="date" id="storageExpDate" value="${storageItems[i].date}">
                        </div>`;
    }

    htmlStorageDiv.innerHTML = `
                                <div id="storageMainDiv">
                                    <div id="storageContent">
                                        ${storageHtml}
                                    </div>
                                        ${addItemStorageHtml}
                                    <div id="storageButtons">
                                        <button id="storageAddNewItem" onclick="addToStorage()">Add new item</button>
                                        <button ${disableStorageButton} id="storageDeleteItem" onclick="deleteStorageItem">Delete item</button>
                                        <button ${disableStorageButton} id="storageChangeItem">Change item</button>
                                    </div>
                                </div>
    `
}