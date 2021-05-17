module.exports = {

    tags: ['nightwatch'],
    '@disabled': true,
    'On testing nightwatch': function (browser) {

        browser
            .url('https://nightwatchjs.org/')
            .pause(2000);
        browser.expect.element('body').to.be.present;
        browser.expect.element('#index-container .row h1').to.be.visible;

        browser
            .waitForElementVisible('#navigation li:nth-child(2)')
            .click('#navigation li:nth-child(2)')
            .assert.visible('.alert.alert-warning.nightwatch')
            .pause(2000);

        browser.end();
    }
};
