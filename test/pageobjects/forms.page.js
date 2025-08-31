const Page = require('./page');
const { expect } = require('chai')
const { expect: chaiExpect } = require('chai');


class FormsPage extends Page {

    async getPageTitle(expectedText) {
        const titleElement = await $(`//android.widget.TextView[@text="${expectedText}"]`);
        return await titleElement.getText();
    }
    
    get inputField() { return this.findElementByAccessibilityId('text-input'); }
    get inputResult () { return this.findElementByAccessibilityId('input-text-result'); }
    get switch() { return this.findElementByAccessibilityId('switch'); }
    get dropdown() { return this.findElementByAccessibilityId('Dropdown'); }
    get btnActive() { return this.findElementByAccessibilityId('button-Active'); }
    get btnInactive() { return this.findElementByAccessibilityId('button-Inactive'); }


    get dropdownText() {
        return $('android=new UiSelector().resourceId("text_input")');
    }

    async selectDropdownOption(optionText) {
        await (await this.dropdown).click();
        const option = await $(`//android.widget.CheckedTextView[@text="${optionText}"]`);
        await option.click();   
        
        
        await browser.waitUntil(
            async () => (await this.dropdownText.getAttribute('text')) === optionText,
            {
                timeout: 5000,
                timeoutMsg: `O texto esperado no dropdown era "${optionText}", mas o texto encontrado foi "${await this.dropdownText.getAttribute('text')}"`
            }
        
        );
        
    }

    async openAndVerifyDropdownOptions(expectedOptions) {
        const dropdown = await this.findElementByAccessibilityId('Dropdown');
        await dropdown.click();
        const visibilityResults = [];

        for (const optionText of expectedOptions) {
            const option = await $(`//android.widget.CheckedTextView[@text="${optionText}"]`);
            const isDisplayed = await option.isDisplayed();
            visibilityResults.push(isDisplayed);
        }
        await browser.back();
    }
}

module.exports = new FormsPage();
