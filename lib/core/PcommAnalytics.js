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

class PcommAnalytics {

  constructor() {
    window.PcommAnalytics = window.PcommAnalytics || {
      version: Package.version,
      trackEvent: this.trackEvent,
      logEvent: this.logEvent,
      testEnv: this.testEnv,
      goToHref: this.goToHref
    };
  }

  goToHref(el, e) {
    if (!el.href || e.metaKey || e.ctrlKey || el.hostname === window.location.hostname || el.getAttribute('target') !== '_blank') {
      return false;
    }
    e.preventDefault();
    let target = el.getAttribute('target');
    if (target === '_blank') {
      return false;
    }
    window.setTimeout(() => {
        window.open(el.href, target);
      },
      // slow down redirect to eliminate any sort of race condition
      100
    );

  }

  trackEvent(event) {
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

  logEvent(event) {
    if (this.testEnv()) {
      console.log('ga tracking event:', event);
    }
    return true;
  }
}

export {PcommAnalytics};
