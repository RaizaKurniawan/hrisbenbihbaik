/// ############ Login Page Testing
/*
    Author: Raiza Kurniawan
    JobRole: QA Benihbaik
*/
import LoginPage from "./login"

describe ("Run Test Login", function() {
    it("Open LoginPage", function(){
        const login = new LoginPage();
        login.navigate();
        login.inputEmail().clear();
        login.inputEmail().type('raiza@benihbaik.com');
        login.inputPassword().clear();
        login.inputPassword().type('Benihbaik321');
        login.signIn().click();
        
    })
})

