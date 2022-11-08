const Page = require('./page');  

class LoginPage extends Page {
    //locators
    get inputUsername () {
        return $('//*[@id="username"]');
    }

    get inputPassword () {
        return $('//*[@id="password"]');
    }

    get btnSubmit () {
        return $('/html/body/app-root/app-no-menu-layout/app-login/div[1]/div/div[2]/mat-card/mat-card-actions/button');
    }

    //function for login
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();