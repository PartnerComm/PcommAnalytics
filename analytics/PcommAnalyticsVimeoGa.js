/*
 * PcommAnalyticsVimeoGa.js
 */

import {PcommAnalytics} from './PcommAnalytics'

class PcommAnalyticsVimeoGA extends PcommAnalytics {
  constructor() {
    super();
    this.eventMarker = {};
    this.init();
  }

  init() {
    const vimeoGAJS = {};
    const elements = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
    [].forEach.call(elements, (el, index) => {
      this.processIframe(el, index);
    });
    // Listen for messages from the player
    window.addEventListener('message', (e) => this.onMessageReceived(e), false);
  }

  processIframe(el, index) {
    const iframeIndex = index;
    const playerIdString = 'vimeo-player-' + iframeIndex;
    const src = el.getAttribute('src').split('?')[0] + '?player_id=' + playerIdString;
    el.setAttribute('src', src);
    el.setAttribute('id', playerIdString);
    el.dataset.player_index = iframeIndex;
    this.eventMarker[iframeIndex] = {
      'progress25': false,
      'progress50': false,
      'progress75': false,
      'videoPlayed': false,
      'videoPaused': false,
      'videoResumed': false,
      'videoSeeking': false,
      'videoCompleted': false,
      'timePercentComplete': 0
    };
  }

  onMessageReceived(e) {
    if (e.origin.replace('https:', 'http:') !== "http://player.vimeo.com" || typeof ga !== "function") {
      console.warn('Tracker is missing!');
      return;
    }
    const data = JSON.parse(e.data);
    const iframeEl = document.getElementById(data.player_id);
    const index = iframeEl.dataset.player_index;
    switch (data.event) {
      case 'ready':
        this.onReady();
        break;

      case 'playProgress':
        this.onPlayProgress(data.data, iframeEl);
        break;

      case 'seek':
        if (iframeEl.dataset.seek && !this.eventMarker[index].videoSeeking) {
          this.sendEvent(iframeEl, 'Skipped video forward or backward');
          this.eventMarker[index].videoSeeking = true; // Avoid subsequent seek trackings
        }
        break;

      case 'play':
        if (!this.eventMarker[index].videoPlayed) {
          this.sendEvent(iframeEl, 'Started video');
          this.eventMarker[index].videoPlayed = true; // Avoid subsequent play trackings
        } else if (!this.eventMarker[index].videoResumed && this.eventMarker[index].videoPaused) {
          this.sendEvent(iframeEl, 'Resumed video');
          this.eventMarker[index].videoResumed = true; // Avoid subsequent resume trackings
        }
        break;

      case 'pause':
        this.onPause(iframeEl);
        break;

      case 'finish':
        if (!this.eventMarker[index].videoCompleted) {
          this.sendEvent(iframeEl, 'Completed video');
          this.eventMarker[index].videoCompleted = true; // Avoid subsequent finish trackings
        }
        break;
    }
  }

  getLabel(iframeEl) {
    let iframeSrc = iframeEl.getAttribute('src').split('?')[0];
    if (iframeEl.getAttribute('title')) {
      iframeSrc += ' (' + iframeEl.getAttribute('title') + ')';
    }
    return iframeSrc;
  }

  post(action, value, iframe) {
    let data = {
      method: action
    };
    if (value) {
      data.value = value;
    }
    // Source URL
    let iframeSrc = iframe.getAttribute('src').split('?')[0];
    iframe.contentWindow.postMessage(JSON.stringify(data), iframeSrc);
  }

  onReady() {
    const elements = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
    [].forEach.call(elements, (el) => {
      this.post('addEventListener', 'play', el);
      this.post('addEventListener', 'seek', el);
      this.post('addEventListener', 'pause', el);
      this.post('addEventListener', 'finish', el);
      this.post('addEventListener', 'playProgress', el);
    });
  }

  onPause(iframeEl) {
    let index = iframeEl.dataset.player_index;
    if (this.eventMarker[index].percent < 99 && !this.eventMarker[index].videoPaused) {
      this.sendEvent(iframeEl, 'Paused video');
      this.eventMarker[index].videoPaused = true; // Avoid subsequent pause trackings
    }
  }

  onPlayProgress(data, iframeEl) {
    let progress;
    const iframeId = iframeEl.dataset.player_index;
    this.eventMarker[iframeId].percent = Math.round((data.percent) * 100); // Round to a whole number
    if (this.eventMarker[iframeId].percent > 24 && !this.eventMarker[iframeId].progress25) {
      progress = 'Played video: 25%';
      this.eventMarker[iframeId].progress25 = true;
    }

    if (this.eventMarker[iframeId].percent > 49 && !this.eventMarker[iframeId].progress50) {
      progress = 'Played video: 50%';
      this.eventMarker[iframeId].progress50 = true;
    }

    if (this.eventMarker[iframeId].percent > 74 && !this.eventMarker[iframeId].progress75) {
      progress = 'Played video: 75%';
      this.eventMarker[iframeId].progress75 = true;
    }

    if (progress) {
      this.sendEvent(iframeEl, progress);
    }
  }

  sendEvent(iframeEl, action) {
    this.event = {
      category: 'Vimeo',
      action: action,
      label: this.getLabel(iframeEl)
    };
    this.trackEvent();
  }
}

export {PcommAnalyticsVimeoGA}
