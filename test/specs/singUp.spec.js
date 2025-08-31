const SingUpPage = require('../pageobjects/singUp.page')
const Page = require('../pageobjects/page');
const { expect } = require('chai')

describe("Sing Up", () => {

    beforeEach(async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Login");
        await SingUpPage.goToSignUp();
    });

    it("Deve cadastrar com sucesso", async () => {
        await SingUpPage.singUp("test@mobile.com", "password", "password");
        const { title, message } = await SingUpPage.getSuccessMessage();
        expect(title).to.equal("Signed Up!");
        expect(message).to.equal("You successfully signed up!");
        await SingUpPage.closeSuccessMessage();
    });

    it("Deve dar erro no cadastro: Email inválido", async () => {
        await SingUpPage.singUp("teste@qa", "password", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter a valid email address")');
        await errorMessage.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessage.isDisplayed()).to.equal(true);
    });

    it("Deve dar erro no cadastro: Não preencher o email", async () => {
        await SingUpPage.singUp("", "password", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter a valid email address")');
        await errorMessage.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessage.isDisplayed()).to.equal(true);
    });

    it("Deve dar erro no cadastro: Não preencher senha", async () => {
        await SingUpPage.singUp("test@mobile.com", "", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        await errorMessage.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessage.isDisplayed()).to.equal(true);

        const errorMessagerepeatPassword = await $('android=new UiSelector().text("Please enter the same password")');
        await errorMessagerepeatPassword.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessagerepeatPassword.isDisplayed()).to.equal(true);
    });

    it("Deve dar erro no cadastro: Não preencher campo de confirmar a senha", async () => {
        await SingUpPage.singUp("test@mobile.com", "", "password");
        const errorMessage = await $('android=new UiSelector().text("Please enter the same password")');
        await errorMessage.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessage.isDisplayed()).to.equal(true);
    });

    it("Deve dar erro no cadastro: Preencher senha menor que 8 caracteres", async () => {
        await SingUpPage.singUp("test@mobile.com", "aaa2987", "aaa2987");
        const errorMessage = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        await errorMessage.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessage.isDisplayed()).to.equal(true);

        const errorMessagerepeatPassword = await $('android=new UiSelector().text("Please enter the same password")');
        await errorMessagerepeatPassword.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessagerepeatPassword.isDisplayed()).to.equal(true);
    });

    it("Deve dar erro no cadastro: Não preencher nenhum campo de cadastro", async () => {
        await SingUpPage.singUp("", "", "");

        const errorMessageEmail = await $('android=new UiSelector().text("Please enter a valid email address")');
        await errorMessageEmail.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessageEmail.isDisplayed()).to.equal(true);

        const errorMessagePassword = await $('android=new UiSelector().text("Please enter at least 8 characters")');
        await errorMessagePassword.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessagePassword.isDisplayed()).to.equal(true);

        const errorMessagerepeatPassword = await $('android=new UiSelector().text("Please enter the same password")');
        await errorMessagerepeatPassword.waitForDisplayed({ timeout: 10000 });
        expect(await errorMessagerepeatPassword.isDisplayed()).to.equal(true);
    });
});
