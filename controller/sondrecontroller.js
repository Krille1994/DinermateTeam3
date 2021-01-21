//controller
function checkLogin(){
    if(checkLoginHelp() !== false){
        let i= checkLoginHelp();
        model.userID = i;
        mainScreenView();
    }
    else {
        loginView(true);
    }
    


}

function checkLoginHelp(){
    let user= false;
    for(let i = 0; i < model.users.length; i++) {
        if (model.login.user==model.users[i].username && 
            model.login.password==model.users[i].password) { 
                user = i;
                return user;
            }
    }
    return user;
}