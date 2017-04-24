module.exports = {
    '@tags': ['test', 'short'],
    'Simple Check' : function (browser) {
        var loginForm = browser.page.login();

        loginForm
            .navigate()
            .waitForElementPresent('@loginForm',5000)
            .checkLoginFields()
            //.testErroneousLogin()
            .testCorrectLogin()
            .api.end();
    }
};