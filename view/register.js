const htmlDiv = document.getElementById('app');

registerView();

function registerView() {
    htmlDiv.innerHTML = `
                        <div>
                            <form id="registerForm">
                                <label for="fname">First name:</label></br>
                                <input type="text" id="fname" name="fname" value="Ola"></br>
                                <label for="lname">Surname:</label></br>
                                <input type="text" id="lname" name="lname" value="Nordmann"></br>
                                <label for="country">Country:</label></br>
                                <input type="text" id="country" name="country" value="Norge"></br>
                                <label for="email">E-mail:</label></br>
                                <input type="text" id="email" name="email" value="ola.nordmann@mail.no"></br>
                                <label for="password">Password:</label></br>
                                <input type="password" id="password" name="password" value="********"></br>
                                <input type="submit" value="Register">
                            </form>
                            test
                        </div>
    ` 
}