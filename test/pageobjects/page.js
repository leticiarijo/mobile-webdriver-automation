class Page {
    async findElementByAccessibilityId(id) {
        return $(`~${id}`);
    }

    async navigateTo(menuItem) {
        const element = await this.findElementByAccessibilityId(menuItem);
        await element.click();
    }
    
}

module.exports = Page;