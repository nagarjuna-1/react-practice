class AuthenticationService{
    registerSuccessfullLogin(username, password){
        sessionStorage.setItem('authenticatedUserName', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUserName');
    }

    isUserLoggedIn(){
        let username=sessionStorage.getItem('authenticatedUserName');
        if(username===null)
        return false
        return true
    }

}

export default new AuthenticationService()