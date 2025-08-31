const SwipePage = require('../pageobjects/swipe.page');
const Page = require('../pageobjects/page');

describe('Swipe Screen', () => {

    beforeEach(async () => {
        const pageInstance = new Page();
        await pageInstance.navigateTo('Swipe');
    });

    it('Deve validar o titulo do primeiro card', async () => {
        const text = await SwipePage.getCurrentMessage('FULLY OPEN SOURCE');
        expect(text).toEqual('FULLY OPEN SOURCE');
    });

    it('Deve validar o titulo do segundo card', async () => {
        await SwipePage.swipeLeft();
        const text = await SwipePage.getCurrentMessage('GREAT COMMUNITY');
        expect(text).toEqual('GREAT COMMUNITY')
    });

    it('Deve validar o titulo do terceiro card', async () => {
        await SwipePage.swipeLeft();
        const text = await SwipePage.getCurrentMessage('JS.FOUNDATION');
        expect(text).toEqual('JS.FOUNDATION');
    });

    it('Deve validar o titulo do quarto card', async () => {
        await SwipePage.swipeLeft();
        const text = await SwipePage.getCurrentMessage('SUPPORT VIDEOS');
        expect(text).toEqual('SUPPORT VIDEOS');
    });

    
    it('Deve validar o titulo do quinto card', async () => {
        await SwipePage.swipeLeft();
        const text = await SwipePage.getCurrentMessage('EXTENDABLE');
        expect(text).toEqual('EXTENDABLE');
    });

    it('Deve validar o titulo do sexto card', async () => {
        await SwipePage.swipeLeft();
        const text = await SwipePage.getCurrentMessage('COMPATIBLE');
        expect(text).toEqual('COMPATIBLE');
    });
});
