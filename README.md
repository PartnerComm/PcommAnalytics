# PcommAnalytics
PartnerComm Analytics JS

## Samples

```$xslt
const event = {
  'label': 'label test',
  'category': 'category test',
  'action': 'action test',
  'value': 0
};
window.PcommAnalytics.trackEvent(event);
```

## Event Tracking

### `PcommAnalytics`

`PcommAnalytics` is a JavaScript class created for use in the base theme.

Included in package.json: `"pcommanalytics": "PartnerComm/PcommAnalytics#dist"`

In order to pull the latest version run `npm update pcommanalytics`.

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
___
#### Tracking via custom partial or function

The `PcommAnalytics` class can be used in your JavaScript partials for tracking custom events.

1. Create your event: 

    `const event = {'label': 'label test','category': 'category test','action': 'action test','value': 'value test'};` 
2. Instantiate the class:
    `window.PcommAnalytics.trackEvent(event);`
    
__
### Vimeo GA

This scans your page for available Vimeo videos and add GA tracking to them automatically.

#### Dynamic Rendering of Vimeo iFrames

If you need to dynamically render Vimeo iframes, there are a few additional steps to take.

1. Get or create the iFrame as an element `var el = this.$refs.player.$el.childNodes[0];` (your method will vary)
2. Delete data-listener_attached `delete el.dataset.listener_attached;` (or it will not attach a new listener)
3. Register the new video `window.PcommAnalytics.vimeo.processIframe(el, index);`
___
### Testing

Testing is automated on localhost and pcommstaging sites. Any time an event is sent to Google Analytics, a console log will appear with that event.

If the item being tracked is a link, the console log will appear for one second before navigating to the link. This pause only occurs on localhost or pcommstaging.

If Google Analytics has not been set up on a site, there will be a console log indicating so.

___
## Version Notes
2.0.4: getLinkType should return false if undefined

2.0.3: fix e === undefined error

2.0.2: add ability to call track external links after page load

2.0.1: Resolve undefined error when no vimeo videos exist

2.0.0: adds compiled dist folder, window tracking, legacy tracking

1.0.11: IE bugfix: Use indexOf instead of includes

1.0.10: IE bugfix: trackExternalLinks

1.0.9: bugfix: category, action, and label might not be strings

1.0.8: Simplify return statement

1.0.7: Move the current analytics version to the global object

1.0.6: Log the current analytics version

1.0.5: Adds dynamic site support for Vimeo

1.0.4: Adds clickListener to DataGa constructor

1.0.3: Update Vimeo label to only include video id

1.0.2: Update Vimeo data checks

1.0.1: Update Vimeo to support dynamic video loading

1.0.0: Initial commit
