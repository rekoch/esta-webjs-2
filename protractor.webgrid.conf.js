// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

let hostname = process.env.host || require('my-local-ip')();
let externalport = process.env.externalport;

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],
    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        {
            browserName: 'firefox'
        }
    ],
    baseUrl: 'http://' + hostname + ':' + externalport,
    seleniumAddress: 'http://webtestgrid.sbb.ch:4444/wd/hub',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    beforeLaunch: function () {
    },
    onPrepare()
    {
      console.log('reto', hostname, externalport);
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
};
