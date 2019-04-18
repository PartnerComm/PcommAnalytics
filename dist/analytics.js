/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/PcommAnalytics */ "./lib/core/PcommAnalytics.js");
/* harmony import */ var _plugins_PcommAnalyticsDataGa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/PcommAnalyticsDataGa */ "./lib/plugins/PcommAnalyticsDataGa.js");
/* harmony import */ var _plugins_PcommAnalyticsExternalLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/PcommAnalyticsExternalLinks */ "./lib/plugins/PcommAnalyticsExternalLinks.js");
/* harmony import */ var _plugins_PcommAnalyticsVimeoGa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/PcommAnalyticsVimeoGa */ "./lib/plugins/PcommAnalyticsVimeoGa.js");




new _core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__["PcommAnalytics"]();
new _plugins_PcommAnalyticsDataGa__WEBPACK_IMPORTED_MODULE_1__["PcommAnalyticsDataGa"]();
new _plugins_PcommAnalyticsExternalLinks__WEBPACK_IMPORTED_MODULE_2__["PcommAnalyticsExternalLinks"]();
new _plugins_PcommAnalyticsVimeoGa__WEBPACK_IMPORTED_MODULE_3__["PcommAnalyticsVimeoGA"]();

if (window.location.hash === '#analyticsTest') {
  /* CREATE AN EVENT */
  var event = {
    'label': 'label test',
    'category': 'category test',
    'action': 'action test',
    'value': 0
  };
  window.PcommAnalytics.trackEvent(event);
} // legacy tracking


window.pcommAnalytics = {
  trackAnalyticsEvent: window.PcommAnalytics.trackEvent
}; // export {
//   pcommAnalyticsTrackEvent,
//   PcommAnalyticsDataGa,
//   PcommAnalyticsExternalLinks,
//   PcommAnalyticsVimeoGA
// };

/***/ }),

/***/ "./lib/core/PcommAnalytics.js":
/*!************************************!*\
  !*** ./lib/core/PcommAnalytics.js ***!
  \************************************/
/*! exports provided: PcommAnalytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcommAnalytics", function() { return PcommAnalytics; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* Pcomm Analytics Class for tracking Google Analytics Events
*
* 1. import analytics into your project:
*   import "pcommanalytics";
* 2. create your event
*   const event = {'label': 'test', 'category': 'test category', 'action': 'action test'};
* 3. track the event
*   PcommAnalytics.trackEvent(event)
*
* Events are automatically logged in the console on pcommstaging and localhost
*
*/


var PcommAnalytics =
/*#__PURE__*/
function () {
  function PcommAnalytics() {
    _classCallCheck(this, PcommAnalytics);

    window.PcommAnalytics = window.PcommAnalytics || {
      version: _package_json__WEBPACK_IMPORTED_MODULE_0__.version,
      trackEvent: this.trackEvent,
      logEvent: this.logEvent,
      testEnv: this.testEnv
    };
  }

  _createClass(PcommAnalytics, [{
    key: "goToHref",
    value: function goToHref(el, e) {
      if (!el.href || e.metaKey || e.ctrlKey || el.hostname === window.location.hostname || el.getAttribute('target') !== '_blank') {
        return false;
      }

      e.preventDefault();
      var target = el.getAttribute('target');
      window.setTimeout(function () {
        window.open(el.href, target);
      }, // slow down redirect to eliminate any sort of race condition
      100);
    }
  }, {
    key: "trackEvent",
    value: function trackEvent(event) {
      this.logEvent(event);

      if (typeof ga === "undefined") {
        console.log('GA not set up in this environment');
        return true;
      } // set defaults


      var category = event.category ? event.category.toString().toLowerCase() : 'site';
      var action = event.action ? event.action.toString().toLowerCase() : 'general action';
      var label = event.label ? event.label.toString().toLowerCase() : '';
      var value = event.value ? event.value : 0;
      var noninteraction = event.noninteraction || true; // send the event

      ga('send', 'event', {
        'eventCategory': category,
        // Required
        'eventAction': action,
        // Required
        'eventLabel': label,
        'eventValue': value,
        'nonInteraction': noninteraction
      });
    }
  }, {
    key: "testEnv",
    value: function testEnv() {
      var a = window.location.hostname;
      return a === 'localhost' || a.indexOf('pcommstaging') >= 0;
    }
  }, {
    key: "logEvent",
    value: function logEvent(event) {
      if (this.testEnv()) {
        console.log('ga tracking event:', event);
      }
    }
  }]);

  return PcommAnalytics;
}();



/***/ }),

/***/ "./lib/plugins/PcommAnalyticsDataGa.js":
/*!*********************************************!*\
  !*** ./lib/plugins/PcommAnalyticsDataGa.js ***!
  \*********************************************/
/*! exports provided: PcommAnalyticsDataGa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcommAnalyticsDataGa", function() { return PcommAnalyticsDataGa; });
/* harmony import */ var _core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/PcommAnalytics */ "./lib/core/PcommAnalytics.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var PcommAnalyticsDataGa =
/*#__PURE__*/
function (_PcommAnalytics) {
  _inherits(PcommAnalyticsDataGa, _PcommAnalytics);

  function PcommAnalyticsDataGa() {
    var _this;

    _classCallCheck(this, PcommAnalyticsDataGa);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PcommAnalyticsDataGa).call(this));

    _this.addClickListener();

    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.dataGa = {
      addClickListener: _this.addClickListener
    };
    return _this;
  }

  _createClass(PcommAnalyticsDataGa, [{
    key: "addClickListener",
    value: function addClickListener() {
      var _this2 = this;

      var elements = document.querySelectorAll('[data-ga]');
      [].forEach.call(elements, function (el) {
        el.onclick = function (e) {
          // build the ga event
          _this2.event = {
            category: el.getAttribute('data-ga-category') || 'click-tracker',
            action: el.getAttribute('data-ga-action') || 'click',
            label: el.getAttribute('data-ga-label') || el.innerText.toLowerCase().trim(),
            value: el.getAttribute('data-ga-value') || 0
          }; // track the event

          _this2.trackEvent(); // go to the href


          _this2.goToHref(el, e);
        };
      });
    }
  }]);

  return PcommAnalyticsDataGa;
}(_core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__["PcommAnalytics"]);



/***/ }),

/***/ "./lib/plugins/PcommAnalyticsExternalLinks.js":
/*!****************************************************!*\
  !*** ./lib/plugins/PcommAnalyticsExternalLinks.js ***!
  \****************************************************/
/*! exports provided: PcommAnalyticsExternalLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcommAnalyticsExternalLinks", function() { return PcommAnalyticsExternalLinks; });
/* harmony import */ var _core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/PcommAnalytics */ "./lib/core/PcommAnalytics.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
* Track all external links
* This track event occurs in addition to the data-ga tracking
*/


var PcommAnalyticsExternalLinks =
/*#__PURE__*/
function (_PcommAnalytics) {
  _inherits(PcommAnalyticsExternalLinks, _PcommAnalytics);

  function PcommAnalyticsExternalLinks() {
    var _this;

    _classCallCheck(this, PcommAnalyticsExternalLinks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PcommAnalyticsExternalLinks).call(this));

    _this.track();

    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.externalLinks = {
      track: _this.track,
      getLinkType: _this.getLinkType
    };
    return _this;
  }

  _createClass(PcommAnalyticsExternalLinks, [{
    key: "track",
    value: function track(elements) {
      var _this2 = this;

      if (!elements) {
        elements = document.querySelectorAll('a');
      }

      [].forEach.call(elements, function (el) {
        try {
          if (el.hostname === window.location.hostname || !el.href) {
            return false;
          }
        } catch (e) {
          var url = el.getAttribute('href');

          if (!url) {
            return false;
          }

          var hostname; //find & remove protocol (http, ftp, etc.) and get hostname

          if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
          } else {
            hostname = url.split('/')[0];
          } //find & remove port number


          hostname = hostname.split(':')[0]; //find & remove "?"

          hostname = hostname.split('?')[0];

          if (hostname === window.location.hostname) {
            return false;
          }
        }

        el.onclick = function (e) {
          // build the ga event
          _this2.event = {
            category: 'links',
            action: _this2.getLinkType(el.href),
            label: el.href
          }; // track the event

          _this2.trackEvent(); // go to the href


          _this2.goToHref(el, e);
        };
      });
    }
  }, {
    key: "getLinkType",
    value: function getLinkType(url) {
      if (url.indexOf('mailto:') >= 0) {
        return 'email';
      }

      if (url.indexOf('tel:') >= 0) {
        return 'phone';
      }

      var fileTypes = new RegExp(/\.(doc|docx*|xlsx*|ppt|pptx*|zip|pdf|xls|xlsx)$/i);

      if (fileTypes.test(url)) {
        return 'download';
      }

      return 'external link';
    }
  }]);

  return PcommAnalyticsExternalLinks;
}(_core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__["PcommAnalytics"]);



/***/ }),

/***/ "./lib/plugins/PcommAnalyticsVimeoGa.js":
/*!**********************************************!*\
  !*** ./lib/plugins/PcommAnalyticsVimeoGa.js ***!
  \**********************************************/
/*! exports provided: PcommAnalyticsVimeoGA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcommAnalyticsVimeoGA", function() { return PcommAnalyticsVimeoGA; });
/* harmony import */ var _core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/PcommAnalytics */ "./lib/core/PcommAnalytics.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * PcommAnalyticsVimeoGa.js
 */


var PcommAnalyticsVimeoGA =
/*#__PURE__*/
function (_PcommAnalytics) {
  _inherits(PcommAnalyticsVimeoGA, _PcommAnalytics);

  function PcommAnalyticsVimeoGA() {
    var _this;

    _classCallCheck(this, PcommAnalyticsVimeoGA);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PcommAnalyticsVimeoGA).call(this));
    window.PcommAnalytics = window.PcommAnalytics || {};
    window.PcommAnalytics.vimeo = {
      init: _this.init,
      eventMarkers: {},
      processIframe: _this.processIframe,
      onMessageReceived: _this.onMessageReceived,
      getLabel: _this.getLabel,
      post: _this.post,
      onReady: _this.onReady,
      onPause: _this.onPause,
      onPlayProgress: _this.onPlayProgress,
      sendEvent: _this.sendEvent
    };

    _this.init();

    _this.listening = false;
    return _this;
  }

  _createClass(PcommAnalyticsVimeoGA, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var elements = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
      [].forEach.call(elements, function (el, index) {
        if (el.dataset.player_index === undefined) {
          _this2.processIframe(el, index);
        }
      }); // Listen for messages from the player

      if (!this.listening) {
        this.listening = true;
        window.addEventListener('message', function (e) {
          return _this2.onMessageReceived(e);
        }, false);
      }
    }
  }, {
    key: "processIframe",
    value: function processIframe(el, index) {
      var playerIdString = 'pcomm-ga-vimeo-player-' + index;
      var src = el.getAttribute('src').split('?')[0] + '?player_id=' + playerIdString;
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
  }, {
    key: "onMessageReceived",
    value: function onMessageReceived(e) {
      if (e.origin.replace('https:', 'http:') !== "http://player.vimeo.com" || typeof ga !== "function") {
        console.warn('Tracker is missing!');
        return;
      }

      var data = e.data;

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

      var iframeEl = document.getElementById(data.player_id);

      if (!iframeEl) {
        return;
      }

      var index = iframeEl.dataset.player_index;
      var marker = window.PcommAnalytics.vimeo.eventMarkers[index];

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
  }, {
    key: "getLabel",
    value: function getLabel(iframeEl) {
      var label = iframeEl.getAttribute('src').split('?')[0];
      label = label.replace('https://player.vimeo.com/video/', '');
      return label;
    }
  }, {
    key: "post",
    value: function post(action, value, iframe) {
      var data = {
        method: action
      };

      if (value) {
        data.value = value;
      } // Source URL


      var iframeSrc = iframe.getAttribute('src').split('?')[0];
      iframe.contentWindow.postMessage(JSON.stringify(data), iframeSrc);
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this3 = this;

      var elements = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
      [].forEach.call(elements, function (el) {
        if (el.dataset.listener_attached === undefined) {
          el.dataset.listener_attached = 1;

          _this3.post('addEventListener', 'play', el);

          _this3.post('addEventListener', 'seek', el);

          _this3.post('addEventListener', 'pause', el);

          _this3.post('addEventListener', 'finish', el);

          _this3.post('addEventListener', 'playProgress', el);
        }
      });
    }
  }, {
    key: "onPause",
    value: function onPause(iframeEl) {
      var index = iframeEl.dataset.player_index;
      var marker = window.PcommAnalytics.vimeo.eventMarkers[index];

      if (marker.percent < 99 && !marker.videoPaused) {
        this.sendEvent(iframeEl, 'Paused video');
        marker.videoPaused = true; // Avoid subsequent pause trackings
      }

      window.PcommAnalytics.vimeo.eventMarkers[index] = marker;
    }
  }, {
    key: "onPlayProgress",
    value: function onPlayProgress(data, iframeEl) {
      var progress;
      var index = iframeEl.dataset.player_index;
      var marker = window.PcommAnalytics.vimeo.eventMarkers[index];
      marker.percent = Math.round(data.percent * 100); // Round to a whole number

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
  }, {
    key: "sendEvent",
    value: function sendEvent(iframeEl, action) {
      this.event = {
        category: 'Vimeo',
        action: action,
        label: this.getLabel(iframeEl)
      };
      this.trackEvent();
    }
  }]);

  return PcommAnalyticsVimeoGA;
}(_core_PcommAnalytics__WEBPACK_IMPORTED_MODULE_0__["PcommAnalytics"]);



/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"pcommanalytics","version":"1.0.11","description":"PartnerComm analytics platform","main":"dist/analytics.js","scripts":{"dev":"NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js","watch":"NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js","production":"NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"},"repository":{"type":"git","url":"git+https://github.com/PartnerComm/PcommAnalytics.git"},"keywords":["analytics"],"author":"PartnerComm","license":"ISC","bugs":{"url":"https://github.com/PartnerComm/PcommAnalytics/issues"},"homepage":"https://github.com/PartnerComm/PcommAnalytics#readme","dependencies":{"laravel-mix":"^4.0.15"},"devDependencies":{"vue-template-compiler":"^2.6.10"}};

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./lib/analytics.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/FAST_STORAGE/github/PcommAnalytics/lib/analytics.js */"./lib/analytics.js");


/***/ })

/******/ });