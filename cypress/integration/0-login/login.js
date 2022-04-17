class LoginPage {
    navigate() {
        cy 
            .visit('/login')
    }
    inputEmail() {  
        return cy
            .get('#txtEmail').click();
    }
    inputPassword() {
        return cy 
            .get('#txtPassword').click();
    }
    signIn(){
        return cy   
            .get('.btn')
    }
}

export default LoginPage