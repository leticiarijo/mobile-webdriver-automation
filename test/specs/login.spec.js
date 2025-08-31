const LoginPage = require('../pageobjects/login.page');
const Page = require('../pageobjects/page');
const { expect } = require('chai')

describe("Login", () => {

    beforeEach(async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Login");
    });

    it("Deve fazer login com sucesso", async () => {
        await LoginPage.login("test@mobile.com", "password");
        const { title, message } = await LoginPage.getSuccessMessage();
        expect(title).to.equal("Success");
        expect(message).to.equal("You are logged in!");
        await LoginPage.closeSuccessMessage();
    });

    it("Deve dar erro no Login: Email inválido", async () => {
        await LoginPage.login("123234@dfggsdfg", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter a valid email address")');
        const isVisible = await errorMessage.isDisplayed();
        expect(isVisible).to.equal(true);
    });

    it("Deve dar erro no Login: Não preencher o email", async () => {
        await LoginPage.login("", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter a valid email address")');
        const isVisible = await errorMessage.isDisplayed();
        expect(isVisible).to.equal(true);
    });

    it("Deve dar erro no Login: Não preencher senha", async () => {
        await LoginPage.login("test@mobile.com", "");
        const errorMessage = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        const isVisible = await errorMessage.isDisplayed();
        expect(isVisible).to.equal(true);
    });

    it("Deve dar erro no Login: Preencher senha menor que 8 caracteres", async () => {
        await LoginPage.login("test@mobile.com", "aaa2987");
        const errorMessage = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        const isVisible = await errorMessage.isDisplayed();
        expect(isVisible).to.equal(true);
    });

    it("Deve dar erro no Login: Não preencher login e senha", async () => {
        await LoginPage.login("", "");

        const errorMessageEmail = await $('android=new UiSelector().text("Please enter a valid email address")');
        const isVisibleEmail = await errorMessageEmail.isDisplayed();
        expect(isVisibleEmail).to.equal(true);

        const errorMessagePassword = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        const isVisiblePassword = await errorMessagePassword.isDisplayed();
        expect(isVisiblePassword).to.equal(true);
    });
});







