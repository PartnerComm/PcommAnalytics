/*
 * PcommAnalyticsVimeoGa.js
 */

import {PcommAnalytics} from '../core/PcommAnalytics'

class PcommAnalyticsVimeoGA extends PcommAnalytics {
  constructor() {
    super();
    this.init();
    this.listening = false;
  }

  init() {
    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.vimeo = window.PcommAnalytics.vimeo || {};
    window.PcommAnalytics.vimeo.eventMarkers = window.PcommAnalytics.vimeo.eventMarkers || {};

    const elements = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
    [].forEach.call(elements, (el, index) => {
      if (el.dataset.player_index === undefined) {
        this.processIframe(el, index);
      }
    });
    // Listen for messages from the player
    if (!this.listening) {
      this.listening = true;
      window.addEventListener('message', (e) => this.onMessageReceived(e), false);
    }
  }

  processIframe(el, index) {
    const playerIdString = 'pcomm-ga-vimeo-player-' + index;
    const src = el.getAttribute('src').split('?')[0] + '?player_id=' + playerIdString;
    el.setAttribute('src', src);
    el.setAttribute('id', playerIdString);
    el.dataset.player_index = index;
    window.PcommAnalytics.vimeo.eventMarkers[index] = {
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
    let data = e.data;
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (error) {
        data = false;
        console.log(error);
      }
    }

    if (!data.player_id) {
      return;
    }
    const iframeEl = document.getElementById(data.player_id);
    if (!iframeEl) {
      return;
    }
    const index = iframeEl.dataset.player_index;
    const marker = window.PcommAnalytics.vimeo.eventMarkers[index];
    switch (data.event) {
      case 'ready':
        this.onReady();
        break;

      case 'playProgress':
        this.onPlayProgress(data.data, iframeEl);
        break;

      case 'seek':
        if (iframeEl.dataset.seek && !marker.videoSeeking) {
          this.sendEvent(iframeEl, 'Skipped video forward or backward');
          marker.videoSeeking = true; // Avoid subsequent seek trackings
        }
        break;

      case 'play':
        if (!marker.videoPlayed) {
          this.sendEvent(iframeEl, 'Started video');
          marker.videoPlayed = true; // Avoid subsequent play trackings
        } else if (!marker.videoResumed && marker.videoPaused) {
          this.sendEvent(iframeEl, 'Resumed video');
          marker.videoResumed = true; // Avoid subsequent resume trackings
        }
        break;

      case 'pause':
        this.onPause(iframeEl);
        break;

      case 'finish':
        if (!marker.videoCompleted) {
          this.sendEvent(iframeEl, 'Completed video');
          marker.videoCompleted = true; // Avoid subsequent finish trackings
        }
        break;
    }

    window.PcommAnalytics.vimeo.eventMarkers[index] = marker;
  }

  getLabel(iframeEl) {
    let label = iframeEl.getAttribute('src').split('?')[0];
    label = label.replace('https://player.vimeo.com/video/', '');
    return label;
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
      if (el.dataset.listener_attached === undefined) {
        el.dataset.listener_attached = 1;
        this.post('addEventListener', 'play', el);
        this.post('addEventListener', 'seek', el);
        this.post('addEventListener', 'pause', el);
        this.post('addEventListener', 'finish', el);
        this.post('addEventListener', 'playProgress', el);
      }
    });
  }

  onPause(iframeEl) {
    let index = iframeEl.dataset.player_index;
    const marker = window.PcommAnalytics.vimeo.eventMarkers[index];
    if (marker.percent < 99 && !marker.videoPaused) {
      this.sendEvent(iframeEl, 'Paused video');
      marker.videoPaused = true; // Avoid subsequent pause trackings
    }

    window.PcommAnalytics.vimeo.eventMarkers[index] = marker;
  }

  onPlayProgress(data, iframeEl) {
    let progress;
    const index = iframeEl.dataset.player_index;
    const marker = window.PcommAnalytics.vimeo.eventMarkers[index];
    marker.percent = Math.round((data.percent) * 100); // Round to a whole number
    if (marker.percent > 24 && !marker.progress25) {
      progress = 'Played video: 25%';
      marker.progress25 = true;
    }

    if (marker.percent > 49 && !marker.progress50) {
      progress = 'Played video: 50%';
      marker.progress50 = true;
    }

    if (marker.percent > 74 && !marker.progress75) {
      progress = 'Played video: 75%';
      marker.progress75 = true;
    }

    if (progress) {
      this.sendEvent(iframeEl, progress);
    }

    window.PcommAnalytics.vimeo.eventMarkers[index] = marker;
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