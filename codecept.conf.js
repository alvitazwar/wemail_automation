const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  rerun: {
    // run all tests must pass exactly 5 times
    minSuccess: 3,
    maxReruns: 3,
  },
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: true,
      windowSize: '1440x1024',
      smartWait: 5000,
      waitForAction:100,
      waitForNavigation: [ 'domcontentloaded', 'networkidle0' ]
    }
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
  },
  
}
