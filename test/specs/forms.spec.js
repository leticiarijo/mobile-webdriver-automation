const Page = require('../pageobjects/page');
const FormsPage = require('../pageobjects/forms.page');
const { expect } = require('chai')


describe("Forms Screen", () => {

    beforeEach(async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo("Forms");
    });

    it("Deve preencher o input e verificar preenchimento", async () => {
        const textToType = "Testando forms!";
        await (await FormsPage.inputField).setValue(textToType);

        const typedText = await (await FormsPage.inputField).getText();
        expect(typedText).to.equal(textToType);

        const resultText = await (await FormsPage.inputResult).getText();
        expect(resultText).to.equal(textToType);
    });

    it("Deve verificar as opções do dropdown", async () => {
        const optionsToVerify = [
            'webdriver.io is awesome',
            'Appium is awesome',
            'This app is awesome'
        ]
        await FormsPage.openAndVerifyDropdownOptions(optionsToVerify);
    });

    it("Deve selecionar a opção webdriver.io is awesome do dropdown", async () => {
        await FormsPage.selectDropdownOption("webdriver.io is awesome");
        const selectedText = await FormsPage.dropdownText.getText();
        expect(selectedText).to.contain("webdriver.io is awesome");
    });

    it("Deve selecionar a opção Appium is awesome do dropdown", async () => {
        await FormsPage.selectDropdownOption("Appium is awesome");
        const selectedText = await (await FormsPage.dropdownText).getText();
        expect(selectedText).to.contain("Appium is awesome");
    });

    it("Deve selecionar a opção This app is awesome do dropdown", async () => {
        await FormsPage.selectDropdownOption("This app is awesome");
        const selectedText = await (await FormsPage.dropdownText).getText();
        expect(selectedText).to.contain("This app is awesome");
    });
});

