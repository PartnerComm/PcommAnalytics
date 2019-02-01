/*
* A simple example using the class
* */
import {PcommAnalytics, pcommAnalyticsTrackEvent} from './PcommAnalytics'

/* CREATE AN EVENT */
const event = {
  'label': 'label test',
  'category': 'category test',
  'action': 'action test',
  'value': 0
};

/* CREATE A NEW ANALYTICS OBJECT AND PASS THE EVENT */
const analytics = new PcommAnalytics(event);
/* CALL THE TRACK EVENT */
analytics.trackEvent();

/* OR USE THE CONVENIENCE METHOD */
pcommAnalyticsTrackEvent(event);
