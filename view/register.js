const htmlRegisterDiv = document.getElementById('app');

function registerView() {
    htmlRegisterDiv.innerHTML = `
                        <div>
                                <label for="fname">First name:</label></br>
                                <input type="text" id="fname" name="fname" value=""></br>
                                <label for="surname">Surname:</label></br>
                                <input type="text" id="surname" name="surname" value=""></br>
                                <label for="country">Country:</label></br>
                                <input type="text" id="country" name="country" value=""></br>
                                <label for="email">E-mail:</label></br>
                                <input type="text" id="email" name="email" value=""></br>
                                <label for="password">Password:</label></br>
                                <input type="password" id="password" name="password" value=""></br>
                                <button onclick="getRegisteredDetails(); createUser();">Register</button>
                        </div>
    ` 
}