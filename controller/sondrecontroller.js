//controller
function checkLogin(){
    if(checkLoginHelp()){
        let i= checkLoginHelp();
        /// kjører viewfunksjonen til mainpage med i som parameter
    }
    


}

function checkLoginHelp(){
    let user= false;
    for(let i = 0; i < model.users.length; i++) {
        if (model.login.user==model.users[i].username && 
            model.login.password==model.users[i].password) { 
                user= i;
                return i;
            } 
    }
}