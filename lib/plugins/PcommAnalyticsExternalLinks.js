/*
* Track all external links
* This track event occurs in addition to the data-ga tracking
*/
import {PcommAnalytics} from '../core/PcommAnalytics'

class PcommAnalyticsExternalLinks extends PcommAnalytics {
  constructor() {
    super();
    this.track();
    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.externalLinks = {
      track: this.track,
      getLinkType: this.getLinkType
    };
  }

  track(elements) {
    if (!elements) {
      elements = document.querySelectorAll('a');
    }
    [].forEach.call(elements, (el) => {
      try {
        if (!el.hostname || el.hostname === window.location.hostname || !el.href) {
          return false;
        }
      } catch (e) {
        const url = el.getAttribute('href');
        if (!url) {
          return false;
        }
        let hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf("//") > -1) {
          hostname = url.split('/')[2];
        } else {
          hostname = url.split('/')[0];
        }
        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];

        if (hostname === window.location.hostname) {
          return false;
        }
      }
      el.onclick = (e) => {
        // build the ga event
        const event = {
          category: 'links',
          action: this.getLinkType(el.href),
          label: el.href
        };
        // track the event
        window.PcommAnalytics.trackEvent(event);
        // go to the href
        window.PcommAnalytics.goToHref(el, e);
      }
    });
  }

  getLinkType(url) {
    if (url === undefined) {
      return false;
    }
    if (url.indexOf('mailto:') >= 0) {
      return 'email'
    }
    if (url.indexOf('tel:') >= 0) {
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
