// register

function getRegisteredDetails() {
    const firstName = document.getElementById('fname').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    model.registerPage.firstname = firstName;
    model.registerPage.surname = surname;
    model.registerPage.email = email;
    model.registerPage.password = password;
    
    return {username: model.registerPage.email,
            password: model.registerPage.password,
            firstname: model.registerPage.firstname,
            surname: model.registerPage.surname};
}

function createUser() {
    model.users.push(getRegisteredDetails());
    console.log(model.users);
} 

// storage

let disableStorageButton = 'disabled';

function selectStorageItem(element) {
    element.style.border = '1px solid red';
}
