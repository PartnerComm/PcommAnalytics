# PcommAnalytics
PartnerComm Analytics JS

## Event Tracking

### `PcommAnalytics`

`PcommAnalytics` is a JavaScript class created for use in the base theme.

#### PcommAnalyticsExternalLinks

By default this class automates the following ga events

- tracking of `external` links
- tracking of `mailto:` links
- tracking of `tel:` links

#### PcommAnalyticsDataGa

This class tracks clicks via `data-ga` attributes

Attaching following data attribute to any element will trigger a GA event on click.

- `data-ga="true"` _(required to track)_

Each additional data attribute is mapped to the corresponding Google Analytics property.

- `data-ga-action` _(optional)_ default: general action
- `data-ga-category` _(optional)_ _default: site_
- `data-ga-label` _(recommended)_ _default: none_
- `data-ga-value` _(optional)_ _default: 0_

Example: `<button data-ga="true" data-ga-action="button push" data-ga-label="that one button">click me</button>` 

In order to eliminate confusion and case sensitive values, each value is converted to lowercase prior to being sent to Google Analytics.

#### Tracking via custom partial or function

The `PcommAnalytics` class can be imported into your JavaScript partials for tracking custom events.

1. Import the class from the appropriate folder:
    
    `import {PcommAnalytics} from 'pcommanalytics'`
2. Create your event: 

    `const event = {'label': 'label test','category': 'category test','action': 'action test','value': 'value test'};` 
3. Instantiate the class:

    `const analytics = new PcommAnalytics(event);`
    
    Note that the event is passed to the class.
4. Track the event:

    `analytics.trackEvent();` 

### Testing

Testing is automated on localhost and pcommstaging sites. Any time an event is sent to Google Analytics, a console log will appear with that event.

If the item being tracked is a link, the console log will appear for one second before navigating to the link. This pause only occurs on localhost or pcommstaging.

If Google Analytics has not been set up on a site, there will be a console log indicating so.
