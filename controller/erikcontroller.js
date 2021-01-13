function getRegisteredDetails() {
    const firstName = document.getElementById('fname').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    model.registerPage.firstName = firstName;
    model.registerPage.surName = surname;
    model.registerPage.email = email;
    model.registerPage.password = password;
    
    return {username: model.registerPage.email,
            password: model.registerPage.password,
            firstName: model.registerPage.firstName,
            surName: model.registerPage.surName};
}

function createUser() {
    model.users.push(getRegisteredDetails());
    console.log(model.users);
} 