module.exports = {
    'Simple Check': function (browser) {
        browser
            .url("https://the-internet.herokuapp.com/dynamic_loading/2")
            .waitForElementPresent('#start > button', 5000)
            .click('#start > button')
            .waitForElementPresent('#finish > h4', 5000)
            .assert.containsText('#finish > h4', 'Hello World!', 'Super awesome text was present!')
            .end();
    }
};