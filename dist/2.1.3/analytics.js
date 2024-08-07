function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  "use strict";

  var e = "2.1.3";
  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, t(e);
  }
  function n(e, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (i = o.key, a = void 0, a = function (e, n) {
        if ("object" !== t(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, n || "default");
          if ("object" !== t(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(e);
      }(i, "string"), "symbol" === t(a) ? a : String(a)), o);
    }
    var i, a;
  }
  var r = function () {
    function t() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), window.PcommAnalytics = window.PcommAnalytics || {
        version: e,
        trackEvent: this.trackEvent,
        logEvent: this.logEvent,
        testEnv: this.testEnv,
        goToHref: this.goToHref
      };
    }
    var r, o, i;
    return r = t, (o = [{
      key: "goToHref",
      value: function value(e, t) {
        if (!e.href || t.metaKey || t.ctrlKey || e.hostname === window.location.hostname || "_blank" !== e.getAttribute("target")) return !1;
        var n = e.getAttribute("target");
        if ("_blank" === n) return !1;
        t.preventDefault(), window.setTimeout(function () {
          window.open(e.href, n);
        }, 100);
      }
    }, {
      key: "trackEvent",
      value: function value(e) {
        if (this.logEvent(e), "undefined" == typeof ga || "undefined" == typeof gtag) return console.log("GA not set up in this environment"), !0;
        var t = e.category ? e.category.toString().toLowerCase() : "site",
          n = e.action ? e.action.toString().toLowerCase() : "general action",
          r = e.label ? e.label.toString().toLowerCase() : "",
          o = e.value ? e.value : 0,
          i = e.noninteraction || !0;
        window.gtag ? gtag("event", n, {
          eventCategory: t,
          eventLabel: r,
          eventValue: o,
          nonInteraction: i
        }) : window.ga && ga("send", "event", {
          eventCategory: t,
          eventAction: n,
          eventLabel: r,
          eventValue: o,
          nonInteraction: i
        });
      }
    }, {
      key: "testEnv",
      value: function value() {
        var e = window.location.hostname;
        return "localhost" === e || e.indexOf("pcommstaging") >= 0;
      }
    }, {
      key: "logEvent",
      value: function value(e) {
        return this.testEnv() && console.log("ga tracking event:", e), !0;
      }
    }]) && n(r.prototype, o), i && n(r, i), Object.defineProperty(r, "prototype", {
      writable: !1
    }), t;
  }();
  function o(e) {
    return o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, o(e);
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, a = void 0, a = function (e, t) {
        if ("object" !== o(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(i, "string"), "symbol" === o(a) ? a : String(a)), r);
    }
    var i, a;
  }
  function a(e, t) {
    return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, a(e, t);
  }
  function c(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = l(e);
      if (t) {
        var o = l(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  function u(e, t) {
    if (t && ("object" === o(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e);
  }
  function l(e) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, l(e);
  }
  var s = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && a(e, t);
    }(u, e);
    var t,
      n,
      r,
      o = c(u);
    function u() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, u), (e = o.call(this)).addClickListener(), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.dataGa = {
        addClickListener: e.addClickListener
      }, e;
    }
    return t = u, (n = [{
      key: "addClickListener",
      value: function value() {
        var e = document.querySelectorAll("[data-ga]");
        [].forEach.call(e, function (e) {
          e.onclick = function (t) {
            var n = {
              category: e.getAttribute("data-ga-category") || "click-tracker",
              action: e.getAttribute("data-ga-action") || "click",
              label: e.getAttribute("data-ga-label") || e.innerText.toLowerCase().trim(),
              value: e.getAttribute("data-ga-value") || 0
            };
            window.PcommAnalytics.trackEvent(n), window.PcommAnalytics.goToHref(e, t);
          };
        });
      }
    }]) && i(t.prototype, n), r && i(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), u;
  }(r);
  function f(e) {
    return f = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, f(e);
  }
  function y(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
        if ("object" !== f(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== f(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(o, "string"), "symbol" === f(i) ? i : String(i)), r);
    }
    var o, i;
  }
  function d(e, t) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, d(e, t);
  }
  function p(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = m(e);
      if (t) {
        var o = m(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return v(this, n);
    };
  }
  function v(e, t) {
    if (t && ("object" === f(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e);
  }
  function m(e) {
    return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, m(e);
  }
  var b = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && d(e, t);
    }(i, e);
    var t,
      n,
      r,
      o = p(i);
    function i() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, i), (e = o.call(this)).track(), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.externalLinks = {
        track: e.track,
        getLinkType: e.getLinkType
      }, e;
    }
    return t = i, (n = [{
      key: "track",
      value: function value(e) {
        var t = this;
        e || (e = document.querySelectorAll("a")), [].forEach.call(e, function (e) {
          try {
            if (!e.hostname || e.hostname === window.location.hostname || e.hostname === window.location.host || !e.href) return !1;
          } catch (t) {
            var n = e.getAttribute("href");
            if (!n) return !1;
            if ((n.indexOf("//") > -1 ? n.split("/")[2] : n.split("/")[0]).split(":")[0].split("?")[0] === window.location.hostname) return !1;
          }
          e.onclick = function (n) {
            var r = {
              category: "links",
              action: t.getLinkType(e.href),
              label: e.href
            };
            window.PcommAnalytics.trackEvent(r), window.PcommAnalytics.goToHref(e, n);
          };
        });
      }
    }, {
      key: "getLinkType",
      value: function value(e) {
        return void 0 !== e && (e.indexOf("mailto:") >= 0 ? "email" : e.indexOf("tel:") >= 0 ? "phone" : new RegExp(/\.(doc|docx*|xlsx*|ppt|pptx*|zip|pdf|xls|xlsx)$/i).test(e) ? "download" : "external link");
      }
    }]) && y(t.prototype, n), r && y(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), i;
  }(r);
  function w(e) {
    return w = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, w(e);
  }
  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
        if ("object" !== w(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== w(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(o, "string"), "symbol" === w(i) ? i : String(i)), r);
    }
    var o, i;
  }
  function h(e, t) {
    return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, h(e, t);
  }
  function P(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = E(e);
      if (t) {
        var o = E(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return k(this, n);
    };
  }
  function k(e, t) {
    if (t && ("object" === w(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e);
  }
  function E(e) {
    return E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, E(e);
  }
  var O = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && h(e, t);
    }(i, e);
    var t,
      n,
      r,
      o = P(i);
    function i() {
      var e;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, i), e = o.call(this), window.PcommAnalytics = window.PcommAnalytics || {}, window.PcommAnalytics.vimeo = {
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
      }, e.init(), e.listening = !1, e;
    }
    return t = i, (n = [{
      key: "init",
      value: function value() {
        var e = this,
          t = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
        [].forEach.call(t, function (t, n) {
          void 0 === t.dataset.player_index && e.processIframe(t, n);
        }), this.listening || (this.listening = !0, window.addEventListener("message", function (t) {
          return e.onMessageReceived(t);
        }, !1));
      }
    }, {
      key: "processIframe",
      value: function value(e, t) {
        var n = "pcomm-ga-vimeo-player-" + t,
          r = e.getAttribute("src").split("?");
        if ("URLSearchParams" in window) {
          var o = new URLSearchParams(r[1]);
          o.append("player_id", n), e.setAttribute("src", r[0] + "?" + o.toString());
        } else e.setAttribute("src", r[0] + "?player_id=" + n);
        e.setAttribute("id", n), e.dataset.player_index = t, window.PcommAnalytics.vimeo.eventMarkers[t] = {
          progress25: !1,
          progress50: !1,
          progress75: !1,
          videoPlayed: !1,
          videoPaused: !1,
          videoResumed: !1,
          videoSeeking: !1,
          videoCompleted: !1,
          timePercentComplete: 0
        };
      }
    }, {
      key: "onMessageReceived",
      value: function value(e) {
        if (!e.data) return !1;
        var t = e.data;
        if ("string" == typeof t) {
          if (!t) return !1;
          try {
            t = JSON.parse(t);
          } catch (e) {
            t = !1, console.log(e);
          }
        }
        if (!t || !t.player_id) return !1;
        var n = document.getElementById(t.player_id);
        if (n) {
          var r = n.dataset.player_index,
            o = window.PcommAnalytics.vimeo.eventMarkers[r];
          switch (t.event) {
            case "ready":
              this.onReady();
              break;
            case "playProgress":
              this.onPlayProgress(t.data, n);
              break;
            case "seek":
              n.dataset.seek && !o.videoSeeking && (this.sendEvent(n, "Skipped video forward or backward"), o.videoSeeking = !0);
              break;
            case "play":
              o.videoPlayed ? !o.videoResumed && o.videoPaused && (this.sendEvent(n, "Resumed video"), o.videoResumed = !0) : (this.sendEvent(n, "Started video"), o.videoPlayed = !0);
              break;
            case "pause":
              this.onPause(n);
              break;
            case "finish":
              o.videoCompleted || (this.sendEvent(n, "Completed video"), o.videoCompleted = !0);
          }
          window.PcommAnalytics.vimeo.eventMarkers[r] = o;
        }
      }
    }, {
      key: "getLabel",
      value: function value(e) {
        var t = e.getAttribute("data-label"),
          n = e.getAttribute("src").split("?")[0];
        return n = n.replace("https://player.vimeo.com/video/", ""), t ? t + " - " + n : n;
      }
    }, {
      key: "post",
      value: function value(e, t, n) {
        var r = {
          method: e
        };
        t && (r.value = t);
        var o = n.getAttribute("src").split("?")[0];
        n.contentWindow.postMessage(JSON.stringify(r), o);
      }
    }, {
      key: "onReady",
      value: function value() {
        var e = this,
          t = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
        [].forEach.call(t, function (t) {
          void 0 === t.dataset.listener_attached && (t.dataset.listener_attached = 1, e.post("addEventListener", "play", t), e.post("addEventListener", "seek", t), e.post("addEventListener", "pause", t), e.post("addEventListener", "finish", t), e.post("addEventListener", "playProgress", t));
        });
      }
    }, {
      key: "onPause",
      value: function value(e) {
        var t = e.dataset.player_index,
          n = window.PcommAnalytics.vimeo.eventMarkers[t];
        n.percent < 99 && !n.videoPaused && (this.sendEvent(e, "Paused video"), n.videoPaused = !0), window.PcommAnalytics.vimeo.eventMarkers[t] = n;
      }
    }, {
      key: "onPlayProgress",
      value: function value(e, t) {
        var n,
          r = t.dataset.player_index,
          o = window.PcommAnalytics.vimeo.eventMarkers[r];
        o.percent = Math.round(100 * e.percent), o.percent > 24 && !o.progress25 && (n = "Played video: 25%", o.progress25 = !0), o.percent > 49 && !o.progress50 && (n = "Played video: 50%", o.progress50 = !0), o.percent > 74 && !o.progress75 && (n = "Played video: 75%", o.progress75 = !0), n && this.sendEvent(t, n), window.PcommAnalytics.vimeo.eventMarkers[r] = o;
      }
    }, {
      key: "sendEvent",
      value: function value(e, t) {
        var n = {
          category: "Vimeo",
          action: t,
          label: this.getLabel(e)
        };
        this.trackEvent(n);
      }
    }]) && g(t.prototype, n), r && g(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), i;
  }(r);
  if (new r(), new s(), new b(), new O(), "#analyticsTest" === window.location.hash) {
    window.PcommAnalytics.trackEvent({
      label: "label test",
      category: "category test",
      action: "action test",
      value: 0
    });
  }
  window.pcommAnalytics = {
    trackAnalyticsEvent: function trackAnalyticsEvent(e) {
      if (!window.ga) return !1;
      window.ga("send", {
        hitType: "event",
        eventCategory: e.category,
        eventAction: e.action,
        eventLabel: e.label
      });
    }
  };
})();
