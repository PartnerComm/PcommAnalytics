/*
* Pcomm Analytics Class for tracking Google Analytics Events
*
* 1. import this class in your partial:
*   import {PcommAnalytics} from './pcomm-analytics-es6'
* 2. create your event
*   const event = {'label': 'test', 'category': 'test category', 'action': 'action test'};
* 3. instantiate the class with your event
*   const analytics = new PcommAnalytics(event);
* 4. track the event
*   analytics.trackEvent();
*
* Events are automatically logged in the console on pcommstaging and localhost
*
*/
import Package from '../package.json';

class PcommAnalytics {

  constructor(event) {
    this.event = event;
    window.PcommAnalytics = window.PcommAnalytics || { version: Package.version };
  }

  goToHref(el, e) {
    if (!el.href || e.metaKey || e.ctrlKey || el.hostname === window.location.hostname || el.getAttribute('target') !== '_blank') {
      return false;
    }
    e.preventDefault();
    let target = el.getAttribute('target');
    window.setTimeout(() => {
        window.open(el.href, target);
      },
      // slow down redirect for localhost, so we can see the event in the console log
      100
    );

  }

  trackEvent() {
    const event = this.event;
    this.logEvent(event);
    if (typeof(ga) === "undefined") {
      console.log('GA not set up in this environment');
      return true;
    }
    // set defaults
    const category = event.category ? event.category.toString().toLowerCase() : 'site';
    const action = event.action ? event.action.toString().toLowerCase() : 'general action';
    const label = event.label ? event.label.toString().toLowerCase() : '';
    const value = event.value ? event.value : 0;
    const noninteraction = event.noninteraction || true;

    // send the event
    ga('send', 'event', {
      'eventCategory': category,   // Required
      'eventAction': action,      // Required
      'eventLabel': label,
      'eventValue': value,
      'nonInteraction': noninteraction
    });
  }

  testEnv() {
    const a = window.location.hostname;
    return a === 'localhost' || a.indexOf('pcommstaging') >= 0;
  }

  logEvent() {
    if (this.testEnv()) {
      console.log('ga tracking event:', this.event);
    }
  }

}

/* convenience function to track events, then remove them */
const pcommAnalyticsTrackEvent = (event) => {
  const analytics = new PcommAnalytics(event);
  analytics.trackEvent();
};

export {PcommAnalytics, pcommAnalyticsTrackEvent};
