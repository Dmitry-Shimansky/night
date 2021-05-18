module.exports = {
    src_folders: ["tests"],

    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: 'tests_output/screenshots',
                on_failure: true,
                on_error: true
            }
        },

        selenium: {
            // Selenium Server is running locally and is managed by Nightwatch
            selenium: {
                start_process: true,
                port: 4444,
                server_path: require('selenium-server').path,
                cli_args: {
                    'webdriver.gecko.driver': require('geckodriver').path,
                    'webdriver.chrome.driver': require('chromedriver').path,
                    'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : ''
                }
            },
            webdriver: {
                start_process: false
            }
        },

        'selenium.chrome': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions : {
                    w3c: false
                }
            }
        },

        'selenium.firefox': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'firefox'
            }
        },

        'selenium.ie': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'internet explorer'
            }
        }
    }
}
