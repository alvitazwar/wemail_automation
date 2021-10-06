const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: 'tests/**/**/*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: '',
            show: false,
            windowSize: '1366x768',
            smartWait: 5000,
            waitForAction: 100,
            waitForNavigation: ['domcontentloaded', 'networkidle0']
        },
        REST: {
            endpoint: 'https://staging.getwemail.io/v1', //'https://staging.api.appsero.com'
            onRequest: (request) => {
                // request.headers.auth = '123';
            },
            defaultHeaders: {
                "accept": 'application/json',
                "x-api-key": 'caVydcaS5UCeC7xHvUDKH9tcy8siuM1bt0BuH5RCgmjDScKBWFopb6aUUFuD'
                    //"authorization": '',

            }
        },
        "ChaiWrapper": {
            "require": "codeceptjs-chai"
        },
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'Wemail',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}