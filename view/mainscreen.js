function mainScreenView() {
    let html = `
    <h1>Hallo, ${model.users[model.mainPage.userIndex].firstname} ${model.users[model.mainPage.userIndex].surname}!</h1>
    <div>Previous</div>
    <div>Next</div>
    <br>
    <button <i class="fa fa-bank" aria-hidden="true" onclick="storageView()"></i> Storage</button>
    <button <i class="fa fa-save" aria-hidden="true" onclick="savedMealsView()"></i> Saved meals</button>
    <button <i class="fa fa-shopping-cart" aria-hidden="true"></i> Shopping cart</button>
    `
    document.getElementById('app').innerHTML = html;
}