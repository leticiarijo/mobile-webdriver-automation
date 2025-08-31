const Page = require('./page');

class SwipePage extends Page {
    
    async getPageTitle(expectedText) {
        const titleElement = await $(`//android.widget.TextView[@text="${expectedText}"]`);
        return await titleElement.getText();
    }

    async getCurrentMessage() {
        const el = await $('android=new UiSelector().text("FULLY OPEN SOURCE")');
        await el.waitForDisplayed({ timeout: 5000 });
        return await el.getText();
    }
    
    async getCurrentMessage(expectedText) {
        const el = await $(`android=new UiSelector().text("${expectedText}")`);
        await el.waitForDisplayed({ timeout: 10000 });
        return await el.getText();
    }
    
    async swipeLeft() {
        const { width, height } = await driver.getWindowRect();
        const startX = Math.floor(width * 0.9);
        const endX = Math.floor(width * 0.1);
        const y = Math.floor(height * 0.5);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 1000, x: endX, y },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
        await driver.pause(500);
    }
}

module.exports = new SwipePage();
