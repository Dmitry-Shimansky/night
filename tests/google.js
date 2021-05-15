const directoryCleaner = require('./../utils/directorycleaner.js')

directoryCleaner.cleaner();

module.exports = {

    tags: ['google'],
    'Google advanced search: Elon Musk': function (browser) {

        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultPageLanguageSelector = '#hdtbMenus span:nth-child(2) div[class^="KTB"]';
        const resultPageLastUpdateSelector = '#hdtbMenus span:nth-child(3) div[class^="KTB"]';
        const date = new Date();

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is in the query input')
            .saveScreenshot(`tests_output/${date.getTime()}check.png`)
            .assert.containsText(resultPageLanguageSelector, 'Search Italian pages','UI: Language is set to Italian')
            .assert.containsText(resultPageLastUpdateSelector, 'Past month','UI: Last update is set to Past Month')
            .saveScreenshot(`tests_output/${date.getTime()}google.png`)
    }
};
