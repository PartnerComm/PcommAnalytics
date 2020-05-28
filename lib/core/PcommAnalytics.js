/*
* Pcomm Analytics Class for tracking Google Analytics Events
*
* 1. import analytics into your project:
*   import "pcommanalytics";
* 2. create your event
*   const event = {'label': 'test', 'category': 'test category', 'action': 'action test'};
* 3. track the event
*   PcommAnalytics.trackEvent(event)
*
* Events are automatically logged in the console on pcommstaging and localhost
*
*/
import Package from '../../package.json';
import testEnv from "./modules/testEnv";
import logEvent from "./modules/logEvent";
import goToHref from "./modules/goToHref";

class PcommAnalytics {

  constructor() {
    window.PcommAnalytics = window.PcommAnalytics || {
      version: Package.version,
      trackEvent: this.trackEvent,
      logEvent: logEvent,
      testEnv: testEnv,
      goToHref: goToHref
    };
  }

  trackEvent(event) {
    logEvent(event);
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
}

export {PcommAnalytics};
