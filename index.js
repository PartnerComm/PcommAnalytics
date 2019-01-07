import {PcommAnalytics, pcommAnalyticsTrackEvent} from './analytics/PcommAnalytics';
import {PcommAnalyticsDataGa} from './analytics/PcommAnalyticsDataGa';
import {PcommAnalyticsExternalLinks} from './analytics/PcommAnalyticsExternalLinks';
import {PcommAnalyticsVimeoGA} from './analytics/PcommAnalyticsVimeoGa';

import Package from './package.json';

console.info('PcommAnalytics v' + Package.version);

export {
  PcommAnalytics,
  pcommAnalyticsTrackEvent,
  PcommAnalyticsDataGa,
  PcommAnalyticsExternalLinks,
  PcommAnalyticsVimeoGA
}
