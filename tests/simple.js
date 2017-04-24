module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/login")
            .waitForElementPresent('#login',5000)
            //.pause(1000) //Just for the humans watching
            .assert.elementPresent('#username')
            .assert.elementPresent('#password');

        browser.expect.element('#username').to.be.present;
        browser.expect.element('#password').to.be.present;

        browser.click('#login > button')
            .pause(3000)
            .assert.elementPresent('#flash.flash.error')
            .end();
    }
};