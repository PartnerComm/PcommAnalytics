import {PcommAnalytics} from './core/PcommAnalytics';
import {PcommAnalyticsDataGa} from './plugins/PcommAnalyticsDataGa';
import {PcommAnalyticsExternalLinks} from './plugins/PcommAnalyticsExternalLinks';
import {PcommAnalyticsVimeoGA} from './plugins/PcommAnalyticsVimeoGa';

new PcommAnalytics();
new PcommAnalyticsDataGa();
new PcommAnalyticsExternalLinks();
new PcommAnalyticsVimeoGA();

if (window.location.hash === '#analyticsTest') {
  /* CREATE AN EVENT */
  const event = {
    'label': 'label test',
    'category': 'category test',
    'action': 'action test',
    'value': 0
  };
  window.PcommAnalytics.trackEvent(event);
}

// legacy tracking
window.pcommAnalytics = {
  trackAnalyticsEvent: function(event) {

    if (!window.ga || !window.gtag) {
      return false;
    }
    
    if (window.gtag) {
      window.gtag('event', event.action, {
        'event_category': event.category,   // Required
        'event_label': event.label
      });
    } else if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: event.category,
        eventAction: event.action,
        eventLabel: event.label
      });
    }
  }
};

// export {
//   pcommAnalyticsTrackEvent,
//   PcommAnalyticsDataGa,
//   PcommAnalyticsExternalLinks,
//   PcommAnalyticsVimeoGA
// };
