const Page = require('./page');

class LoginPage extends Page {

    async getPageTitle(expectedText) {
        const titleElement = await $(`//android.widget.TextView[@text="${expectedText}"]`);
        return await titleElement.getText();
    }
    
    get inputUsername() { return this.findElementByAccessibilityId('input-email'); }
    get inputPassword() { return this.findElementByAccessibilityId('input-password'); }
    get btnLogin() { return this.findElementByAccessibilityId('button-LOGIN'); }
    get successMessageTitle() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]'); }
    get successMessageText() { return $('//android.widget.TextView[@resource-id="android:id/message"]'); }
    get btnOk() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get errorMessage() { return this.findElementByAccessibilityId('error-message'); }

    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnLogin).click();
    }

    async getSuccessMessage() {
        const title = await this.successMessageTitle.getText();
        const message = await this.successMessageText.getText();
        return { title, message };
    }

    async closeSuccessMessage() {
        await this.btnOk.click();
    }

    async getErrorMessage() {
        try {
            const errorElement = await $('android=new UiSelector().textMatches(".*Please.*|.*error.*|.*invalid.*")');
            await errorElement.waitForDisplayed({ timeout: 5000 });
            const message = await errorElement.getText();
            
            return { message: message };
            
        } catch (error) {
            console.error('Erro ao capturar mensagem:', error.message);
            return { message: '' };
        }
    }

}

module.exports = new LoginPage();