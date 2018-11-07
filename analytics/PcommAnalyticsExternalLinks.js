/*
* Track all external links
* This track event occurs in addition to the data-ga tracking
*/
import {PcommAnalytics} from './PcommAnalytics'

class PcommAnalyticsExternalLinks extends PcommAnalytics {
  constructor() {
    super();
    this.trackExternalLinks();
  }
  trackExternalLinks() {
    const elements = document.querySelectorAll('a');
    [].forEach.call(elements, (el) => {
      if (el.hostname === window.location.hostname || !el.href) {
        return false;
      }
      el.onclick = (e) => {
        // build the ga event
        this.event = {
          category: 'links',
          action: this.getLinkType(el.href),
          label: el.href
        };
        // track the event
        this.trackEvent();
        // go to the href
        this.goToHref(el, e);
      }
    });
  }

  getLinkType(url) {
    if (url.includes('mailto:')) {
      return 'email'
    }
    if (url.includes('tel:')) {
      return 'phone'
    }
    const fileTypes = new RegExp(/\.(doc|docx*|xlsx*|ppt|pptx*|zip|pdf|xls|xlsx)$/i);
    if (fileTypes.test(url)) {
      return 'download';
    }
    return 'external link';
  }

}

export {PcommAnalyticsExternalLinks};
