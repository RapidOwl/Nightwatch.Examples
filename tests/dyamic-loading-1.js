module.exports = {
    'Simple Check': function (browser) {
        browser
            .url("https://the-internet.herokuapp.com/dynamic_loading/1")
            .waitForElementPresent('#start > button', 5000)
            .click('#start > button')
            .waitForElementVisible('#finish > h4', 5000)
            .assert.containsText('#finish > h4', 'Hello World!', 'Super awesome text was present!')
            .saveScreenshot('screenshots/HelloWorld.png', function(){
                console.log('Saved screenshot!');
            })
            .end();
    }
};