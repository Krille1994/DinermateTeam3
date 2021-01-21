
loginView();
function loginView(error) {
  document.getElementById('app').innerHTML = ` 

  <div id="loginForm">
    <h1>Sign in</h1>

    <form action="/action_page.php">
      <label for="username">Username</label><br>
      <input type="text" id="username" name="username" onchange="model.login.user=this.value"><br>
      <label for="pwd">Password</label><br>
      <input type="password" id="pwd" name="pwd" onchange="model.login.password=this.value"><br><br>
      ${error ? '<div>Wrong username or password</div>': ''}
    </form>
    <button onclick="checkLogin()">Login</button>
    <button onclick="registerView()">Register</button>
    </div>
    <div id="footer">Created by: <a href="mailto:team3consulting@example.com">TEAM3 Consulting AS</a></div>
  `;
}