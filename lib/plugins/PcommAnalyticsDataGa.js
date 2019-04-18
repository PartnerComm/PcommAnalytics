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
    this.addClickListener();
    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.dataGa = {
      addClickListener: this.addClickListener
    };
  }
  addClickListener() {
    const elements = document.querySelectorAll('[data-ga]');
    console.log(elements);
    [].forEach.call(elements, (el) => {
      el.onclick = (e) => {
        // build the ga event
        const event = {
          category: el.getAttribute('data-ga-category') || 'click-tracker',
          action: el.getAttribute('data-ga-action') || 'click',
          label: el.getAttribute('data-ga-label') || el.innerText.toLowerCase().trim(),
          value: el.getAttribute('data-ga-value') || 0
        };
        // track the event
        this.trackEvent(event);
        // go to the href
        this.goToHref(el, e);
      }
    });
  }
}

export {PcommAnalyticsDataGa}
