const Page = require('../pageobjects/page');
const LoginPage = require('../pageobjects/login.page');
const FormsPage = require('../pageobjects/forms.page');
const SwipePage = require('../pageobjects/swipe.page');
const { expect } = require('chai')

describe("App Navigation", () => {

    it("Deve acessar a página Webview", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Webview");

        const webviewElement = await $('android.webkit.WebView');
        expect(await webviewElement.isDisplayed()).to.be.true;
    });

    it("Deve acessar a página Login", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Login");
        
        const title = await LoginPage.getPageTitle('Login / Sign up Form');
        expect(title).to.equal('Login / Sign up Form');
    });
    
    it("Deve acessar a página Forms", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Forms");

        const title = await FormsPage.getPageTitle('Form components');
        expect(title).to.equal('Form components');
    });

    it("Deve acessar a página Swipe", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Swipe");

        const title = await SwipePage.getPageTitle('Swipe horizontal');
        expect(title).to.equal('Swipe horizontal');
    });

    it("Deve acessar a página Drag", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Drag");

        const textElement = await $('//android.widget.TextView[@text="Drag and Drop"]');
        await textElement.waitForDisplayed({ timeout: 10000 });
        expect(await textElement.isDisplayed()).to.be.true;
    });

    it("Deve acessar a página Home", async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Home");
        
        const textElement = await $('//android.widget.TextView[@text="WEBDRIVER"]');
        await textElement.waitForDisplayed({ timeout: 10000 });
        expect(await textElement.isDisplayed()).to.be.true;
    });

});

