/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/
const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file:///C:/Users/christian.kelly/Training/DOM/DOMproject/index.html';

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});

Given('the loaded web-site', async function() {
    // Nothing to do, as set-up loads the site
});

When('toggled using the button', async function() {
    await this.driver.toggle(this.headless);
})

When('the remove text button is clicked', async function() {
    await this.driver.removeWelcome(this.headless);
})

When('the high contrast button is clicked', async function() {
    await this.driver.highContrast(this.headless);
})

Then('the browser title should be {string}', async function(title) {
    assert(title == await this.headless.getTitle());
});

Then('the heading should be {word}', async function(color) {
    const colours = {
        'blue': 'rgba(0, 0, 255, 1)'
    };

    const actual = await this.driver.header(this.headless);
    const expected = colours[color];

    assert(expected != null);
    assert(actual == expected);
});

Then('the text colour should be {word}', async function(color) {
    const colours = {
        'white': 'rgba(255, 255, 255, 1)'
    };

    const actual = await this.driver.text(this.headless);
    const expected = colours[color];

    assert(expected != null);
    assert(actual == expected);
});

Then('the text should be gone', async function() {
    
    const actual = await this.driver.welcome(this.headless);
    const expected = false;

    assert(actual == expected);
});