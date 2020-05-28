!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {i: o, l: !1, exports: {}};
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
      return e[t]
    }.bind(null, r));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 1)
}([function (e) {
  e.exports = JSON.parse('{"name":"pcommanalytics","version":"2.0.9","description":"PartnerComm analytics platform","main":"dist/analytics.js","scripts":{"dev":"NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js","watch":"NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js","production":"NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"},"repository":{"type":"git","url":"git+https://github.com/PartnerComm/PcommAnalytics.git"},"keywords":["analytics"],"author":"PartnerComm","license":"ISC","bugs":{"url":"https://github.com/PartnerComm/PcommAnalytics/issues"},"homepage":"https://github.com/PartnerComm/PcommAnalytics#readme","dependencies":{"laravel-mix":"^4.1.4"},"devDependencies":{"vue-template-compiler":"^2.6.11"}}')
}, function (e, t, n) {
  e.exports = n(2)
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var o = n(0);

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }

  var i = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), window.PcommAnalytics = window.PcommAnalytics || {
        version: o.version,
        trackEvent: this.trackEvent,
        logEvent: this.logEvent,
        testEnv: this.testEnv,
        goToHref: this.goToHref
      }
    }

    var t, n, i;
    return t = e, (n = [{
      key: "goToHref", value: function (e, t) {
        if (!e.href || t.metaKey || t.ctrlKey || e.hostname === window.location.hostname || "_blank" !== e.getAttribute("target")) return !1;
        var n = e.getAttribute("target");
        if ("_blank" === n) return !1;
        t.preventDefault(), window.setTimeout((function () {
          window.open(e.href, n)
        }), 100)
      }
    }, {
      key: "trackEvent", value: function (e) {
        if (this.logEvent(e), "undefined" == typeof ga) return console.log("GA not set up in this environment"), !0;
        var t = e.category ? e.category.toString().toLowerCase() : "site",
          n = e.action ? e.action.toString().toLowerCase() : "general action",
          o = e.label ? e.label.toString().toLowerCase() : "", r = e.value ? e.value : 0, i = e.noninteraction || !0;
        ga("send", "event", {eventCategory: t, eventAction: n, eventLabel: o, eventValue: r, nonInteraction: i})
      }
    }, {
      key: "testEnv", value: function () {
        var e = window.location.hostname;
        return "localhost" === e || e.indexOf("pcommstaging") >= 0
      }
    }, {
      key: "logEvent", value: function (e) {
        return this.testEnv() && console.log("ga tracking event:", e), !0
      }
    }]) && r(t.prototype, n), i && r(t, i), e
  }();

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }

  function s(e, t) {
    return (s = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function u(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
        }))), !0
      } catch (e) {
        return !1
      }
    }();
    return function () {
      var n, o = f(e);
      if (t) {
        var r = f(this).constructor;
        n = Reflect.construct(o, arguments, r)
      } else n = o.apply(this, arguments);
      return l(this, n)
    }
  }

  function l(e, t) {
    return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function f(e) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  var p = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && s(e, t)
    }(i, e);
    var t, n, o, r = u(i);

    function i() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, i), (e = r.call(this)).addClickListener(), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.dataGa = {addClickListener: e.addClickListener}, e
    }

    return t = i, (n = [{
      key: "addClickListener", value: function () {
        var e = this, t = document.querySelectorAll("[data-ga]");
        [].forEach.call(t, (function (t) {
          t.onclick = function (n) {
            var o = {
              category: t.getAttribute("data-ga-category") || "click-tracker",
              action: t.getAttribute("data-ga-action") || "click",
              label: t.getAttribute("data-ga-label") || t.innerText.toLowerCase().trim(),
              value: t.getAttribute("data-ga-value") || 0
            };
            e.trackEvent(o), e.goToHref(t, n)
          }
        }))
      }
    }]) && c(t.prototype, n), o && c(t, o), i
  }(i);

  function d(e) {
    return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function y(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }

  function v(e, t) {
    return (v = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function m(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
        }))), !0
      } catch (e) {
        return !1
      }
    }();
    return function () {
      var n, o = g(e);
      if (t) {
        var r = g(this).constructor;
        n = Reflect.construct(o, arguments, r)
      } else n = o.apply(this, arguments);
      return b(this, n)
    }
  }

  function b(e, t) {
    return !t || "object" !== d(t) && "function" != typeof t ? function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function g(e) {
    return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  var h = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && v(e, t)
    }(i, e);
    var t, n, o, r = m(i);

    function i() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, i), (e = r.call(this)).track(), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.externalLinks = {
        track: e.track,
        getLinkType: e.getLinkType
      }, e
    }

    return t = i, (n = [{
      key: "track", value: function (e) {
        var t = this;
        e || (e = document.querySelectorAll("a")), [].forEach.call(e, (function (e) {
          try {
            if (!e.hostname || e.hostname === window.location.hostname || e.hostname === window.location.host || !e.href) return !1
          } catch (t) {
            var n = e.getAttribute("href");
            if (!n) return !1;
            if ((n.indexOf("//") > -1 ? n.split("/")[2] : n.split("/")[0]).split(":")[0].split("?")[0] === window.location.hostname) return !1
          }
          e.onclick = function (n) {
            var o = {category: "links", action: t.getLinkType(e.href), label: e.href};
            window.PcommAnalytics.trackEvent(o), window.PcommAnalytics.goToHref(e, n)
          }
        }))
      }
    }, {
      key: "getLinkType", value: function (e) {
        return void 0 !== e && (e.indexOf("mailto:") >= 0 ? "email" : e.indexOf("tel:") >= 0 ? "phone" : new RegExp(/\.(doc|docx*|xlsx*|ppt|pptx*|zip|pdf|xls|xlsx)$/i).test(e) ? "download" : "external link")
      }
    }]) && y(t.prototype, n), o && y(t, o), i
  }(i);

  function w(e) {
    return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function k(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }

  function P(e, t) {
    return (P = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function E(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
        }))), !0
      } catch (e) {
        return !1
      }
    }();
    return function () {
      var n, o = O(e);
      if (t) {
        var r = O(this).constructor;
        n = Reflect.construct(o, arguments, r)
      } else n = o.apply(this, arguments);
      return _(this, n)
    }
  }

  function _(e, t) {
    return !t || "object" !== w(t) && "function" != typeof t ? function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function O(e) {
    return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  var A = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && P(e, t)
    }(i, e);
    var t, n, o, r = E(i);

    function i() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, i), e = r.call(this), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.vimeo = {
        init: e.init,
        eventMarkers: {},
        processIframe: e.processIframe,
        onMessageReceived: e.onMessageReceived,
        getLabel: e.getLabel,
        post: e.post,
        onReady: e.onReady,
        onPause: e.onPause,
        onPlayProgress: e.onPlayProgress,
        sendEvent: e.sendEvent
      }, e.init(), e.listening = !1, e
    }

    return t = i, (n = [{
      key: "init", value: function () {
        var e = this, t = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
        [].forEach.call(t, (function (t, n) {
          void 0 === t.dataset.player_index && e.processIframe(t, n)
        })), this.listening || (this.listening = !0, window.addEventListener("message", (function (t) {
          return e.onMessageReceived(t)
        }), !1))
      }
    }, {
      key: "processIframe", value: function (e, t) {
        var n = "pcomm-ga-vimeo-player-" + t, o = e.getAttribute("src").split("?")[0] + "?player_id=" + n;
        e.setAttribute("src", o), e.setAttribute("id", n), e.dataset.player_index = t, window.PcommAnalytics.vimeo.eventMarkers[t] = {
          progress25: !1,
          progress50: !1,
          progress75: !1,
          videoPlayed: !1,
          videoPaused: !1,
          videoResumed: !1,
          videoSeeking: !1,
          videoCompleted: !1,
          timePercentComplete: 0
        }
      }
    }, {
      key: "onMessageReceived", value: function (e) {
        if (!e.data) return !1;
        var t = e.data;
        if ("string" == typeof t) {
          if (!t) return !1;
          try {
            t = JSON.parse(t)
          } catch (e) {
            t = !1, console.log(e)
          }
        }
        if (!t || !t.player_id) return !1;
        var n = document.getElementById(t.player_id);
        if (n) {
          var o = n.dataset.player_index, r = window.PcommAnalytics.vimeo.eventMarkers[o];
          switch (t.event) {
            case"ready":
              this.onReady();
              break;
            case"playProgress":
              this.onPlayProgress(t.data, n);
              break;
            case"seek":
              n.dataset.seek && !r.videoSeeking && (this.sendEvent(n, "Skipped video forward or backward"), r.videoSeeking = !0);
              break;
            case"play":
              r.videoPlayed ? !r.videoResumed && r.videoPaused && (this.sendEvent(n, "Resumed video"), r.videoResumed = !0) : (this.sendEvent(n, "Started video"), r.videoPlayed = !0);
              break;
            case"pause":
              this.onPause(n);
              break;
            case"finish":
              r.videoCompleted || (this.sendEvent(n, "Completed video"), r.videoCompleted = !0)
          }
          window.PcommAnalytics.vimeo.eventMarkers[o] = r
        }
      }
    }, {
      key: "getLabel", value: function (e) {
        var t = e.getAttribute("src").split("?")[0];
        return t = t.replace("https://player.vimeo.com/video/", "")
      }
    }, {
      key: "post", value: function (e, t, n) {
        var o = {method: e};
        t && (o.value = t);
        var r = n.getAttribute("src").split("?")[0];
        n.contentWindow.postMessage(JSON.stringify(o), r)
      }
    }, {
      key: "onReady", value: function () {
        var e = this, t = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
        [].forEach.call(t, (function (t) {
          void 0 === t.dataset.listener_attached && (t.dataset.listener_attached = 1, e.post("addEventListener", "play", t), e.post("addEventListener", "seek", t), e.post("addEventListener", "pause", t), e.post("addEventListener", "finish", t), e.post("addEventListener", "playProgress", t))
        }))
      }
    }, {
      key: "onPause", value: function (e) {
        var t = e.dataset.player_index, n = window.PcommAnalytics.vimeo.eventMarkers[t];
        n.percent < 99 && !n.videoPaused && (this.sendEvent(e, "Paused video"), n.videoPaused = !0), window.PcommAnalytics.vimeo.eventMarkers[t] = n
      }
    }, {
      key: "onPlayProgress", value: function (e, t) {
        var n, o = t.dataset.player_index, r = window.PcommAnalytics.vimeo.eventMarkers[o];
        r.percent = Math.round(100 * e.percent), r.percent > 24 && !r.progress25 && (n = "Played video: 25%", r.progress25 = !0), r.percent > 49 && !r.progress50 && (n = "Played video: 50%", r.progress50 = !0), r.percent > 74 && !r.progress75 && (n = "Played video: 75%", r.progress75 = !0), n && this.sendEvent(t, n), window.PcommAnalytics.vimeo.eventMarkers[o] = r
      }
    }, {
      key: "sendEvent", value: function (e, t) {
        var n = {category: "Vimeo", action: t, label: this.getLabel(e)};
        this.trackEvent(n)
      }
    }]) && k(t.prototype, n), o && k(t, o), i
  }(i);
  if (new i, new p, new h, new A, "#analyticsTest" === window.location.hash) {
    window.PcommAnalytics.trackEvent({label: "label test", category: "category test", action: "action test", value: 0})
  }
  window.pcommAnalytics = {
    trackAnalyticsEvent: function (e) {
      if (!window.ga) return !1;
      window.ga("send", {hitType: "event", eventCategory: e.category, eventAction: e.action, eventLabel: e.label})
    }
  }
}]);
