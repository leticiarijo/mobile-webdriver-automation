const { join } = require('path');

exports.config = {
    runner: 'local',
    
    specs: [
        join(process.cwd(), 'test/specs/**/*.spec.js')
    ],
    
    maxInstances: 1,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone',
        'appium:automationName': 'XCUITest',
        'appium:app': join(process.cwd(), 'apps/ios.simulator.wdio.native.app.v1.0.8.zip'),
        'appium:newCommandTimeout': 300,
        'appium:udid': process.env.DEVICE_UDID,
        'appium:wdaLaunchTimeout': 240000,
        'appium:wdaStartupRetries': 1,
        'appium:wdaStartupRetryInterval': 20000,
    }],
    
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
            },
            logPath: './'
        }]
    ],
    
    framework: 'mocha',
    
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 360000
    },
};