var usefulFunctions = require('./extras/usefulFunctions.js')

var loginFormChecks = [
    {
        checkLoginFields: function() {
            return this.assert.elementPresent('@username')
                .assert.elementPresent('@password');
        },
        testErroneousLogin: function() {
            return this.click('@loginButton')
                .pause(2000)
                .assert.elementPresent('@errorMessage')
                .assert.elementNotPresent('@successMessage');
        },
        testCorrectLogin: function() {
            return this.setValue('@username', 'tomsmith')
                .setValue('@password', 'SuperSecretPassword!')
                .click('@loginButton')
                .pause(2000)
                .assert.elementPresent('@successMessage')
                .assert.elementNotPresent('@errorMessage');
        }
    }
]

module.exports = {
    url: 'http://the-internet.herokuapp.com/login',
    elements: {
        loginForm: '#login',
        username: '#username',
        password: '#password',
        loginButton: '#login > button',
        errorMessage: '#flash.flash.error',
        successMessage: '#flash.flash.success'
    },
    commands: usefulFunctions.concat(loginFormChecks)
}