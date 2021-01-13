const htmlLoginDiv = document.getElementById('app');

loginView();

function loginView() {
    htmlLoginDiv.innerHTML+= ` 
    <h1>Sign in</h1>

    <form action="/action_page.php">
      <label for="username">Username</label><br>
      <input type="text" id="username" name="username" onchange="model.login.user=this.value"><br>
      <label for="pwd">Password</label><br>
      <input type="password" id="pwd" name="pwd" onchange="model.login.password=this.value"><br><br>
    </form>
    <button onclick="checkLogin()">Login</button>
    <button onclick="registerView()">Register</button>
    `;
    


}