const directoryCleaner = require('./../utils/directorycleaner.js')

module.exports = {

    before: function (browser) {
        directoryCleaner.cleaner();
    },

    '@tags': ['google'],
    '@disabled': true,
    'Google advanced search: Elon Musk': function (browser) {
        const date = new Date();
        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()
            .perform(() => {
                debugger
            });

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultPageLanguageSelector = '#hdtbMenus span:nth-child(2) div[class^="KTB"]';
        const resultPageLastUpdateSelector = '#hdtbMenus span:nth-child(3) div[class^="KTB"]';

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is in the query input')
            .saveScreenshot(`tests_output/${date.getTime()}check.png`)
            .assert.containsText(resultPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian')
            .assert.containsText(resultPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month')
            .saveScreenshot(`tests_output/${date.getTime()}google.png`)
            .end();
    }
};
