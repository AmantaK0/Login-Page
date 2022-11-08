const LoginPage = require('../pageobjects/login.page');

const allureReporter = require('@wdio/allure-reporter').default

describe('Testing login page', () => {

    it('should login with valid credentials', async () => {

        allureReporter.addStep('Navigating to the base URL')
        await browser.url('https://bilanc.com/webdemo/#/login')

        allureReporter.addStep('Adding the credentials in login form.')
        await LoginPage.login('demo', 'demo');

        allureReporter.addStep('Verifying the title of the page is correct.')
        await expect(browser).toHaveTitle('BilancWeb - BilancWeb')
    });
});