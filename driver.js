require('chromedriver'); // for availability
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

module.exports = (() => {
    return {
        // To initialize a 'headless' browser for testing
        headless: async (url) => {
            const headless = new webdriver.Builder().forBrowser('chrome').
            setChromeOptions(new chrome.Options().headless().
            setAcceptInsecureCerts(true).
            windowSize({width: 1920, height: 1200})).
            build();

            await headless.get(url);
            return headless;
        },

        // Returns header colour
        header: async (headless, expected) => {
            const css = webdriver.By.css('#header');
            const el = await headless.findElement(css);
            return await el.getCssValue('color');
        },

        // Clicks the removeWelcome button
        removeWelcome: async (headless) => {
            const css = webdriver.By.css('#removeWelcome');
            const el = await headless.findElement(css);
            el.click();
        },

        // Returns welcome text
        welcome: async (headless) => {
            const css = webdriver.By.css('#welcome');
            try {
                const el = await headless.findElement(css);
                const exists = true
                return exists
            } catch {
                const exists = false
                return exists
            }   
        },

        removeWelcome: async (headless) => {
            const css = webdriver.By.css('#removeWelcome');
            const el = await headless.findElement(css);
            el.click();
        },

        highContrast: async (headless) => {
            const css = webdriver.By.css('#highContrast');
            const el = await headless.findElement(css);
            el.click();
        },

        text: async (headless) => {
            const css = webdriver.By.css('.text');
            const el = await headless.findElement(css);
            return await el.getCssValue('color');
        },



    };
})();