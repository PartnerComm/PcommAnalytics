/*
* Automatically create a click zone for the listener by adding data attributes like so:
*
*   data-ga="true" (required)
*   data-ga-label="My Label" (optional, recommended)
*   data-ga-action="My Action" (optional)
*   data-ga-category="click zone" (optional)
*   data-ga-value="0" (optional)
*
*/
import {PcommAnalytics} from '../core/PcommAnalytics';

class PcommAnalyticsDataGa extends PcommAnalytics {
  constructor() {
    super();
    this.clickListener();
  }

  clickListener() {
    const elements = this.getGaElements();
    [].forEach.call(elements, (el) => {
      el.onclick = (e) => {
        // build the ga event
        this.event = {
          category: el.getAttribute('data-ga-category') || 'click-tracker',
          action: el.getAttribute('data-ga-action') || 'click',
          label: el.getAttribute('data-ga-label') || el.innerText.toLowerCase().trim(),
          value: el.getAttribute('data-ga-value') || 0
        };
        // track the event
        this.trackEvent();
        // go to the href
        this.goToHref(el, e);
      }

    });
  }

  getGaElements() {
    return document.querySelectorAll('[data-ga]');
  }

}

export {PcommAnalyticsDataGa}
