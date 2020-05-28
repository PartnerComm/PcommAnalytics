require('jsdom-global')();
const assert = require('assert');
const testEnv = require("../lib/core/modules/testEnv");
const logEvent = require("../lib/core/modules/logEvent");
const goToHref = require("../lib/core/modules/goToHref");

describe('Analytics', () => {

  describe('Test Environment', () => {
    it('should return false', () => {
      assert.equal(testEnv(), false);
    })
  })

  describe('Log Event', () => {
    it('should return the event', () => {
      const event = {category: 'button', action: 'click', label: 'test', value: 1};
      assert.equal(logEvent(event), event);
    })
  })

  describe('Go to external href', () => {
    const url = 'https://www.google.com/';
    it('should navigate to ' + url, () => {
      document.body.innerHTML = '<a id="test" href="' + url + '">Google</a>';
      const a = document.getElementById('test');
      assert.equal(goToHref(a), url);
    })
  })
});

