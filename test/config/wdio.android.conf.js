const { join } = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['../specs/**/*.spec.js'],
    maxInstances: 1,
    capabilities: [{
        
            "platformName": "Android",
           "appium:deviceName": "Anonymous",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "./apps/android.wdio.native.app.v1.0.8.apk"),
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
            "appium:autoGrantPermissions": true,
            "appium:androidDeviceLog": false,
            "appium:noReset": false
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: [
        'spec', 
        ['allure', {
            outputDir: 'allure-results', 
            disableWebdriverStepsReporting: true, 
            disableWebdriverScreenshotsReporting: false, 
            useCucumberStepReporter: false 
        }]
    ],
};