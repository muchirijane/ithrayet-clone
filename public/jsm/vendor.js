/*!
 * Locomotive Scroll
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).LocomotiveScroll = e());
})(this, function () {
  "use strict";
  function t(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function e(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function i(t, i, s) {
    return i && e(t.prototype, i), s && e(t, s), t;
  }
  function s(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function n(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      e &&
        (s = s.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? n(Object(i), !0).forEach(function (e) {
            s(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : n(Object(i)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return t;
  }
  function r(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function l(t) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function c(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function h(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
  }
  function d(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        s = l(t);
      if (e) {
        var n = l(this).constructor;
        i = Reflect.construct(s, arguments, n);
      } else i = s.apply(this, arguments);
      return h(this, i);
    };
  }
  function u(t, e, i) {
    return (u =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var s = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = l(t));

              );
              return t;
            })(t, e);
            if (s) {
              var n = Object.getOwnPropertyDescriptor(s, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  function f(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
          return;
        var i = [],
          s = !0,
          n = !1,
          o = void 0;
        try {
          for (
            var r, l = t[Symbol.iterator]();
            !(s = (r = l.next()).done) &&
            (i.push(r.value), !e || i.length !== e);
            s = !0
          );
        } catch (t) {
          (n = !0), (o = t);
        } finally {
          try {
            s || null == l.return || l.return();
          } finally {
            if (n) throw o;
          }
        }
        return i;
      })(t, e) ||
      m(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function p(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return v(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      m(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function m(t, e) {
    if (t) {
      if ("string" == typeof t) return v(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? v(t, e)
          : void 0
      );
    }
  }
  function v(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
  }
  var y = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
      },
    },
    b = (function () {
      function e() {
        var i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e),
          Object.assign(this, y, i),
          (this.smartphone = y.smartphone),
          i.smartphone && Object.assign(this.smartphone, i.smartphone),
          (this.tablet = y.tablet),
          i.tablet && Object.assign(this.tablet, i.tablet),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = "tablet")
              : (this.context = "smartphone")
            : (this.context = "desktop"),
          this.isMobile && (this.direction = this[this.context].direction),
          "horizontal" === this.direction
            ? (this.directionAxis = "x")
            : (this.directionAxis = "y"),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        i(e, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile &&
                    this.windowWidth >= this.tablet.breakpoint);
                var t = this.context;
                if (
                  (this.isMobile
                    ? this.isTablet
                      ? (this.context = "tablet")
                      : (this.context = "smartphone")
                    : (this.context = "desktop"),
                  t != this.context)
                )
                  ("desktop" == t ? this.smooth : this[t].smooth) !=
                    ("desktop" == this.context
                      ? this.smooth
                      : this[this.context].smooth) && window.location.reload();
              }
            },
          },
          {
            key: "initEvents",
            value: function () {
              var t = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (e) {
                  e.addEventListener("click", t.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  {
                    offset: t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-offset")
                    ),
                  }
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                s = i + this.windowHeight,
                n = this.instance.scroll.x,
                o = n + this.windowWidth;
              Object.entries(this.els).forEach(function (r) {
                var l = f(r, 2),
                  a = l[0],
                  c = l[1];
                if (
                  (!c ||
                    (c.inView && !t) ||
                    ("horizontal" === e.direction
                      ? o >= c.left && n < c.right && e.setInView(c, a)
                      : s >= c.top && i < c.bottom && e.setInView(c, a)),
                  c && c.inView)
                )
                  if ("horizontal" === e.direction) {
                    var h = c.right - c.left;
                    (c.progress =
                      (e.instance.scroll.x - (c.left - e.windowWidth)) /
                      (h + e.windowWidth)),
                      (o < c.left || n > c.right) && e.setOutOfView(c, a);
                  } else {
                    var d = c.bottom - c.top;
                    (c.progress =
                      (e.instance.scroll.y - (c.top - e.windowHeight)) /
                      (d + e.windowHeight)),
                      (s < c.top || i > c.bottom) && e.setOutOfView(c, a);
                  }
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                (this.currentElements[e] = t),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              (this.els[e].inView = !1),
                Object.keys(this.currentElements).forEach(function (t) {
                  t === e && delete i.currentElements[t];
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  s = i.indexOf(e);
                s < 0 ||
                  (i.splice(s, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                s = this.listeners[i];
              s &&
                0 !== s.length &&
                s.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1);
                }),
                this.html.classList.remove(this.initClass);
            },
          },
        ]),
        e
      );
    })(),
    g =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function w(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var x = w(function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (
            !("scrollBehavior" in e.documentElement.style) ||
            !0 === t.__forceSmoothScrollPolyfill__
          ) {
            var i,
              s = t.HTMLElement || t.Element,
              n = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: s.prototype.scroll || l,
                scrollIntoView: s.prototype.scrollIntoView,
              },
              o =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now,
              r =
                ((i = t.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                  ? 1
                  : 0);
            (t.scroll = t.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== a(arguments[0])
                    ? p.call(
                        t,
                        e.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : n.scroll.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
              (t.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (a(arguments[0])
                    ? n.scrollBy.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : p.call(
                        t,
                        e.body,
                        ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                        ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                      ));
              }),
              (s.prototype.scroll = s.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== a(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      p.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (s.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== a(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (s.prototype.scrollIntoView = function () {
                if (!0 !== a(arguments[0])) {
                  var i = u(this),
                    s = i.getBoundingClientRect(),
                    o = this.getBoundingClientRect();
                  i !== e.body
                    ? (p.call(
                        this,
                        i,
                        i.scrollLeft + o.left - s.left,
                        i.scrollTop + o.top - s.top
                      ),
                      "fixed" !== t.getComputedStyle(i).position &&
                        t.scrollBy({
                          left: s.left,
                          top: s.top,
                          behavior: "smooth",
                        }))
                    : t.scrollBy({
                        left: o.left,
                        top: o.top,
                        behavior: "smooth",
                      });
                } else
                  n.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function l(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function a(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function c(t, e) {
            return "Y" === e
              ? t.clientHeight + r < t.scrollHeight
              : "X" === e
              ? t.clientWidth + r < t.scrollWidth
              : void 0;
          }
          function h(e, i) {
            var s = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === s || "scroll" === s;
          }
          function d(t) {
            var e = c(t, "Y") && h(t, "Y"),
              i = c(t, "X") && h(t, "X");
            return e || i;
          }
          function u(t) {
            for (; t !== e.body && !1 === d(t); ) t = t.parentNode || t.host;
            return t;
          }
          function f(e) {
            var i,
              s,
              n,
              r,
              l = (o() - e.startTime) / 468;
            (r = l = l > 1 ? 1 : l),
              (i = 0.5 * (1 - Math.cos(Math.PI * r))),
              (s = e.startX + (e.x - e.startX) * i),
              (n = e.startY + (e.y - e.startY) * i),
              e.method.call(e.scrollable, s, n),
              (s === e.x && n === e.y) || t.requestAnimationFrame(f.bind(t, e));
          }
          function p(i, s, r) {
            var a,
              c,
              h,
              d,
              u = o();
            i === e.body
              ? ((a = t),
                (c = t.scrollX || t.pageXOffset),
                (h = t.scrollY || t.pageYOffset),
                (d = n.scroll))
              : ((a = i), (c = i.scrollLeft), (h = i.scrollTop), (d = l)),
              f({
                scrollable: a,
                method: d,
                startTime: u,
                startX: c,
                startY: h,
                x: s,
                y: r,
              });
          }
        },
      };
    }),
    S =
      (x.polyfill,
      (function (e) {
        r(n, e);
        var s = d(n);
        function n() {
          var e,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            t(this, n),
            (e = s.call(this, i)).resetNativeScroll &&
              (history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0)),
            window.addEventListener("scroll", e.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill &&
              ((window.smoothscrollPolyfill = x),
              window.smoothscrollPolyfill.polyfill()),
            e
          );
        }
        return (
          i(n, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  u(l(n.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                u(l(n.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  Object.entries(this.els).length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                Object.entries(this.els).length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (e, i) {
                      e.getBoundingClientRect();
                      var s,
                        n,
                        o,
                        r = e.dataset[t.name + "Class"] || t.class,
                        l =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : i,
                        a =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        c = e.dataset[t.name + "Repeat"],
                        h = e.dataset[t.name + "Call"],
                        d = e.dataset[t.name + "Target"],
                        u = (o =
                          void 0 !== d
                            ? document.querySelector("".concat(d))
                            : e).getBoundingClientRect();
                      (s = u.top + t.instance.scroll.y),
                        (n = u.left + t.instance.scroll.x);
                      var f = s + o.offsetHeight,
                        p = n + o.offsetWidth;
                      c = "false" != c && (null != c || t.repeat);
                      var m = t.getRelativeOffset(a),
                        v = {
                          el: e,
                          targetEl: o,
                          id: l,
                          class: r,
                          top: (s += m[0]),
                          bottom: (f -= m[1]),
                          left: n,
                          right: p,
                          offset: a,
                          progress: 0,
                          repeat: c,
                          inView: !1,
                          call: h,
                        };
                      (t.els[l] = v),
                        e.classList.contains(r) && t.setInView(t.els[l], l);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach(function (e) {
                  var i = f(e, 2),
                    s = i[0],
                    n = i[1],
                    o =
                      n.targetEl.getBoundingClientRect().top +
                      t.instance.scroll.y,
                    r = o + n.targetEl.offsetHeight,
                    l = t.getRelativeOffset(n.offset);
                  (t.els[s].top = o + l[0]), (t.els[s].bottom = r - l[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = parseInt(e.offset) || 0,
                  s = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t)
                    t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                i =
                  "number" != typeof t
                    ? t.getBoundingClientRect().top + i + this.instance.scroll.y
                    : t + i;
                var n = function () {
                  return parseInt(window.pageYOffset) === parseInt(i);
                };
                if (s) {
                  if (n()) return void s();
                  var o = function t() {
                    n() && (window.removeEventListener("scroll", t), s());
                  };
                  window.addEventListener("scroll", o);
                }
                window.scrollTo({ top: i, behavior: "smooth" });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                u(l(n.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          n
        );
      })(b)),
    k = Object.getOwnPropertySymbols,
    T = Object.prototype.hasOwnProperty,
    E = Object.prototype.propertyIsEnumerable;
  function A(t) {
    if (null == t)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    return Object(t);
  }
  var O = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var s = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          s[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (var i, s, n = A(t), o = 1; o < arguments.length; o++) {
          for (var r in (i = Object(arguments[o])))
            T.call(i, r) && (n[r] = i[r]);
          if (k) {
            s = k(i);
            for (var l = 0; l < s.length; l++)
              E.call(i, s[l]) && (n[s[l]] = i[s[l]]);
          }
        }
        return n;
      };
  function D() {}
  D.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var s = this;
      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, r = s.length; o < r; o++)
          s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var C = D,
    L = w(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, s) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != s ? s : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                e > 0
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, s, n, o, r, l;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((s = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (l = s.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (r = l / s.length),
                    (n = o / i.length),
                    Math.abs(r) < Math.abs(n * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }.call(g));
    }),
    M = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    },
    j = Object.prototype.toString,
    _ = Object.prototype.hasOwnProperty;
  function B(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var W = L.Lethargy,
    H = "virtualscroll",
    R = V,
    P = 37,
    Y = 38,
    I = 39,
    z = 40,
    X = 32;
  function V(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          _.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == j.call(t[i]) &&
            e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = B(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = O(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new W()),
      (this._emitter = new C()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function F(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function q(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return (
        n
          ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
          : ((n = s.match(/^matrix\((.+)\)$/)),
            (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function K(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (V.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(H, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (V.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          M.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (V.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (V.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (V.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (V.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case P:
        case Y:
          e.deltaY = this.options.keyStep;
          break;
        case I:
        case z:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case X:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (V.prototype._bind = function () {
      M.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        M.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        M.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        M.hasPointer &&
          M.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        M.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (V.prototype._unbind = function () {
      M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        M.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        M.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        M.hasPointer &&
          M.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        M.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (V.prototype.on = function (t, e) {
      this._emitter.on(H, t, e);
      var i = this._emitter.e;
      i && i[H] && 1 === i[H].length && this._bind();
    }),
    (V.prototype.off = function (t, e) {
      this._emitter.off(H, t, e);
      var i = this._emitter.e;
      (!i[H] || i[H].length <= 0) && this._unbind();
    }),
    (V.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (V.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var N = "function" == typeof Float32Array;
  function U(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function $(t, e) {
    return 3 * e - 6 * t;
  }
  function G(t) {
    return 3 * t;
  }
  function J(t, e, i) {
    return ((U(e, i) * t + $(e, i)) * t + G(e)) * t;
  }
  function Q(t, e, i) {
    return 3 * U(e, i) * t * t + 2 * $(e, i) * t + G(e);
  }
  function Z(t) {
    return t;
  }
  var tt = function (t, e, i, s) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === s) return Z;
      for (var n = N ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
        n[o] = J(0.1 * o, t, i);
      function r(e) {
        for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o) s += 0.1;
        --o;
        var r = s + 0.1 * ((e - n[o]) / (n[o + 1] - n[o])),
          l = Q(r, t, i);
        return l >= 0.001
          ? (function (t, e, i, s) {
              for (var n = 0; n < 4; ++n) {
                var o = Q(e, i, s);
                if (0 === o) return e;
                e -= (J(e, i, s) - t) / o;
              }
              return e;
            })(e, r, t, i)
          : 0 === l
          ? r
          : (function (t, e, i, s, n) {
              var o,
                r,
                l = 0;
              do {
                (o = J((r = e + (i - e) / 2), s, n) - t) > 0
                  ? (i = r)
                  : (e = r);
              } while (Math.abs(o) > 1e-7 && ++l < 10);
              return r;
            })(e, s, s + 0.1, t, i);
      }
      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : J(r(t), e, s);
      };
    },
    et = 38,
    it = 40,
    st = 32,
    nt = 9,
    ot = 33,
    rt = 34,
    lt = 36,
    at = 35,
    ct = (function (e) {
      r(n, e);
      var s = d(n);
      function n() {
        var e,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          t(this, n),
          history.scrollRestoration && (history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          (e = s.call(this, i)).inertia && (e.lerp = 0.1 * e.inertia),
          (e.isScrolling = !1),
          (e.isDraggingScrollbar = !1),
          (e.isTicking = !1),
          (e.hasScrollTicking = !1),
          (e.parallaxElements = {}),
          (e.stop = !1),
          (e.scrollbarContainer = i.scrollbarContainer),
          (e.checkKey = e.checkKey.bind(c(e))),
          window.addEventListener("keydown", e.checkKey, !1),
          e
        );
      }
      return (
        i(n, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  "data-".concat(this.name, "-direction"),
                  this.direction
                ),
                (this.instance = o(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance
                )),
                (this.vs = new R({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (e) {
                  t.stop ||
                    t.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      t.updateDelta(e), t.isScrolling || t.startScrolling();
                    });
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                u(l(n.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                "horizontal" === this.direction)
              ) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                  t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth;
              }
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                t.keyCode == nt &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (e.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0);
                  });
              else {
                switch (t.keyCode) {
                  case nt:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0),
                        e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2,
                        });
                    });
                    break;
                  case et:
                    this.instance.delta[this.directionAxis] -= 240;
                    break;
                  case it:
                    this.instance.delta[this.directionAxis] += 240;
                    break;
                  case ot:
                    this.instance.delta[this.directionAxis] -=
                      window.innerHeight;
                    break;
                  case rt:
                    this.instance.delta[this.directionAxis] +=
                      window.innerHeight;
                    break;
                  case lt:
                    this.instance.delta[this.directionAxis] -=
                      this.instance.limit[this.directionAxis];
                    break;
                  case at:
                    this.instance.delta[this.directionAxis] +=
                      this.instance.limit[this.directionAxis];
                    break;
                  case st:
                    document.activeElement instanceof HTMLInputElement ||
                      document.activeElement instanceof HTMLTextAreaElement ||
                      (t.shiftKey
                        ? (this.instance.delta[this.directionAxis] -=
                            window.innerHeight)
                        : (this.instance.delta[this.directionAxis] +=
                            window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]),
                  this.stopScrolling(),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return t.checkScroll();
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var i = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]
                  ),
                  s = Date.now() - this.startScrollTs;
                if (
                  (!this.animatingScroll &&
                    s > 100 &&
                    ((i < 0.5 &&
                      0 != this.instance.delta[this.directionAxis]) ||
                      (i < 0.5 &&
                        0 == this.instance.delta[this.directionAxis])) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (i) {
                    var s = f(i, 2),
                      n = (s[0], s[1]);
                    n.persistent ||
                    (t.instance.scroll[t.directionAxis] >
                      n.offset[t.directionAxis] &&
                      t.instance.scroll[t.directionAxis] <
                        n.limit[t.directionAxis])
                      ? ("horizontal" === t.direction
                          ? t.transform(
                              n.el,
                              -t.instance.scroll[t.directionAxis],
                              0
                            )
                          : t.transform(
                              n.el,
                              0,
                              -t.instance.scroll[t.directionAxis]
                            ),
                        n.inView ||
                          ((n.inView = !0),
                          (n.el.style.opacity = 1),
                          (n.el.style.pointerEvents = "all"),
                          n.el.setAttribute(
                            "data-".concat(t.name, "-section-inview"),
                            ""
                          )))
                      : ((n.inView || e) &&
                          ((n.inView = !1),
                          (n.el.style.opacity = 0),
                          (n.el.style.pointerEvents = "none"),
                          n.el.removeAttribute(
                            "data-".concat(t.name, "-section-inview")
                          )),
                        t.transform(n.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var o =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction
                    ? this.transform(this.scrollbarThumb, o, 0)
                    : this.transform(this.scrollbarThumb, 0, o);
                }
                u(l(n.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              var e,
                i =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection;
              (e =
                "both" === i
                  ? t.deltaX + t.deltaY
                  : "vertical" === i
                  ? t.deltaY
                  : "horizontal" === i
                  ? t.deltaX
                  : t.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  e * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = F(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x
                  ? "right" !== this.instance.direction &&
                    (this.instance.direction = "right")
                  : this.instance.delta.x < this.instance.scroll.x &&
                    "left" !== this.instance.direction &&
                    (this.instance.direction = "left");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              if (
                ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                "horizontal" == this.direction)
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var i =
                      (((100 * (t.clientX - e.scrollbarBCR.left)) /
                        e.scrollbarWidth) *
                        e.instance.limit.x) /
                      100,
                    s =
                      (((100 * (t.clientY - e.scrollbarBCR.top)) /
                        e.scrollbarHeight) *
                        e.instance.limit.y) /
                      100;
                  s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                });
            },
          },
          {
            key: "addElements",
            value: function () {
              var t = this;
              (this.els = {}),
                (this.parallaxElements = {}),
                this.el
                  .querySelectorAll("[data-".concat(this.name, "]"))
                  .forEach(function (e, i) {
                    var s,
                      n,
                      o,
                      r = K(e),
                      l = Object.entries(t.sections)
                        .map(function (t) {
                          var e = f(t, 2);
                          e[0];
                          return e[1];
                        })
                        .find(function (t) {
                          return r.includes(t.el);
                        }),
                      a = e.dataset[t.name + "Class"] || t.class,
                      c =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "el" + i,
                      h = e.dataset[t.name + "Repeat"],
                      d = e.dataset[t.name + "Call"],
                      u = e.dataset[t.name + "Position"],
                      p = e.dataset[t.name + "Delay"],
                      m = e.dataset[t.name + "Direction"],
                      v = "string" == typeof e.dataset[t.name + "Sticky"],
                      y =
                        !!e.dataset[t.name + "Speed"] &&
                        parseFloat(e.dataset[t.name + "Speed"]) / 10,
                      b =
                        "string" == typeof e.dataset[t.name + "Offset"]
                          ? e.dataset[t.name + "Offset"].split(",")
                          : t.offset,
                      g = e.dataset[t.name + "Target"],
                      w = (o =
                        void 0 !== g
                          ? document.querySelector("".concat(g))
                          : e).getBoundingClientRect();
                    null === l || l.inView
                      ? ((s = w.top + t.instance.scroll.y - q(o).y),
                        (n = w.left + t.instance.scroll.x - q(o).x))
                      : ((s = w.top - q(l.el).y - q(o).y),
                        (n = w.left - q(l.el).x - q(o).x));
                    var x = s + o.offsetHeight,
                      S = n + o.offsetWidth,
                      k = { x: (S - n) / 2 + n, y: (x - s) / 2 + s };
                    if (v) {
                      var T = e.getBoundingClientRect(),
                        E = T.top,
                        A = T.left,
                        O = { x: A - n, y: E - s };
                      (s += window.innerHeight),
                        (n += window.innerWidth),
                        (x =
                          E +
                          o.offsetHeight -
                          e.offsetHeight -
                          O[t.directionAxis]),
                        (k = {
                          x:
                            ((S =
                              A +
                              o.offsetWidth -
                              e.offsetWidth -
                              O[t.directionAxis]) -
                              n) /
                              2 +
                            n,
                          y: (x - s) / 2 + s,
                        });
                    }
                    h = "false" != h && (null != h || t.repeat);
                    var D = [0, 0];
                    if (b)
                      if ("horizontal" === t.direction) {
                        for (var C = 0; C < b.length; C++)
                          "string" == typeof b[C]
                            ? b[C].includes("%")
                              ? (D[C] = parseInt(
                                  (b[C].replace("%", "") * t.windowWidth) / 100
                                ))
                              : (D[C] = parseInt(b[C]))
                            : (D[C] = b[C]);
                        (n += D[0]), (S -= D[1]);
                      } else {
                        for (C = 0; C < b.length; C++)
                          "string" == typeof b[C]
                            ? b[C].includes("%")
                              ? (D[C] = parseInt(
                                  (b[C].replace("%", "") * t.windowHeight) / 100
                                ))
                              : (D[C] = parseInt(b[C]))
                            : (D[C] = b[C]);
                        (s += D[0]), (x -= D[1]);
                      }
                    var L = {
                      el: e,
                      id: c,
                      class: a,
                      section: l,
                      top: s,
                      middle: k,
                      bottom: x,
                      left: n,
                      right: S,
                      offset: b,
                      progress: 0,
                      repeat: h,
                      inView: !1,
                      call: d,
                      speed: y,
                      delay: p,
                      position: u,
                      target: o,
                      direction: m,
                      sticky: v,
                    };
                    (t.els[c] = L),
                      e.classList.contains(a) && t.setInView(t.els[c], c),
                      (!1 !== y || v) && (t.parallaxElements[c] = L);
                  });
            },
          },
          {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === e.length && (e = [this.el]),
                e.forEach(function (e, i) {
                  var s =
                      "string" == typeof e.dataset[t.name + "Id"]
                        ? e.dataset[t.name + "Id"]
                        : "section" + i,
                    n = e.getBoundingClientRect(),
                    o = {
                      x: n.left - 1.5 * window.innerWidth - q(e).x,
                      y: n.top - 1.5 * window.innerHeight - q(e).y,
                    },
                    r = {
                      x: o.x + n.width + 2 * window.innerWidth,
                      y: o.y + n.height + 2 * window.innerHeight,
                    },
                    l = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", s);
                  var a = {
                    el: e,
                    offset: o,
                    limit: r,
                    inView: !1,
                    persistent: l,
                    id: s,
                  };
                  t.sections[s] = a;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var o = q(t),
                  r = F(o.x, e, s),
                  l = F(o.y, i, s);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(r, ",")
                  .concat(l, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                s = this.instance.scroll.x + this.windowWidth,
                n = this.instance.scroll.y + this.windowHeight,
                o = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                };
              Object.entries(this.parallaxElements).forEach(function (r) {
                var l = f(r, 2),
                  a = (l[0], l[1]),
                  c = !1;
                if ((t && (c = 0), a.inView || i))
                  switch (a.position) {
                    case "top":
                      c = e.instance.scroll[e.directionAxis] * -a.speed;
                      break;
                    case "elementTop":
                      c = (n - a.top) * -a.speed;
                      break;
                    case "bottom":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          n +
                          e.windowHeight) *
                        a.speed;
                      break;
                    case "left":
                      c = e.instance.scroll[e.directionAxis] * -a.speed;
                      break;
                    case "elementLeft":
                      c = (s - a.left) * -a.speed;
                      break;
                    case "right":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          s +
                          e.windowHeight) *
                        a.speed;
                      break;
                    default:
                      c =
                        (o[e.directionAxis] - a.middle[e.directionAxis]) *
                        -a.speed;
                  }
                a.sticky &&
                  (c = a.inView
                    ? "horizontal" === e.direction
                      ? e.instance.scroll.x - a.left + window.innerWidth
                      : e.instance.scroll.y - a.top + window.innerHeight
                    : "horizontal" === e.direction
                    ? e.instance.scroll.x < a.left - window.innerWidth &&
                      e.instance.scroll.x < a.left - window.innerWidth / 2
                      ? 0
                      : e.instance.scroll.x > a.right &&
                        e.instance.scroll.x > a.right + 100 &&
                        a.right - a.left + window.innerWidth
                    : e.instance.scroll.y < a.top - window.innerHeight &&
                      e.instance.scroll.y < a.top - window.innerHeight / 2
                    ? 0
                    : e.instance.scroll.y > a.bottom &&
                      e.instance.scroll.y > a.bottom + 100 &&
                      a.bottom - a.top + window.innerHeight),
                  !1 !== c &&
                    ("horizontal" === a.direction ||
                    ("horizontal" === e.direction && "vertical" !== a.direction)
                      ? e.transform(a.el, c, 0, !t && a.delay)
                      : e.transform(a.el, 0, c, !t && a.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = parseInt(i.offset) || 0,
                n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                o = i.easing || [0.25, 0, 0.35, 1],
                r = !!i.disableLerp,
                l = !!i.callback && i.callback;
              if (((o = tt.apply(void 0, p(o))), "string" == typeof t)) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return;
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName)
                return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                var a = K(t).includes(this.el);
                if (!a) return;
                var c = t.getBoundingClientRect(),
                  h = c.top,
                  d = c.left,
                  u = K(t),
                  m = u.find(function (t) {
                    return Object.entries(e.sections)
                      .map(function (t) {
                        var e = f(t, 2);
                        e[0];
                        return e[1];
                      })
                      .find(function (e) {
                        return e.el == t;
                      });
                  }),
                  v = 0;
                (v = m
                  ? q(m)[this.directionAxis]
                  : -this.instance.scroll[this.directionAxis]),
                  (s = "horizontal" === this.direction ? d + s - v : h + s - v);
              } else s = t + s;
              var y = parseFloat(this.instance.delta[this.directionAxis]),
                b = Math.max(
                  0,
                  Math.min(s, this.instance.limit[this.directionAxis])
                ),
                g = b - y,
                w = function (t) {
                  r
                    ? "horizontal" === e.direction
                      ? e.setScroll(y + g * t, e.instance.delta.y)
                      : e.setScroll(e.instance.delta.x, y + g * t)
                    : (e.instance.delta[e.directionAxis] = y + g * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var x = Date.now(),
                S = function t() {
                  var i = (Date.now() - x) / n;
                  i > 1
                    ? (w(1),
                      (e.animatingScroll = !1),
                      0 == n && e.update(),
                      l && l())
                    : ((e.scrollToRaf = requestAnimationFrame(t)), w(o(i)));
                };
              S();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = o(
                o({}, this.instance),
                {},
                { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              u(l(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        n
      );
    })(b);
  return (function () {
    function e() {
      var i =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e),
        (this.options = i),
        Object.assign(this, y, i),
        (this.smartphone = y.smartphone),
        i.smartphone && Object.assign(this.smartphone, i.smartphone),
        (this.tablet = y.tablet),
        i.tablet && Object.assign(this.tablet, i.tablet),
        this.smooth ||
          "horizontal" != this.direction ||
          console.warn(
            "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
          ),
        this.tablet.smooth ||
          "horizontal" != this.tablet.direction ||
          console.warn(
            "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
          ),
        this.smartphone.smooth ||
          "horizontal" != this.smartphone.direction ||
          console.warn(
            "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
          ),
        this.init();
    }
    return (
      i(e, [
        {
          key: "init",
          value: function () {
            if (
              ((this.options.isMobile =
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) ||
                ("MacIntel" === navigator.platform &&
                  navigator.maxTouchPoints > 1) ||
                window.innerWidth < this.tablet.breakpoint),
              (this.options.isTablet =
                this.options.isMobile &&
                window.innerWidth >= this.tablet.breakpoint),
              (this.smooth && !this.options.isMobile) ||
              (this.tablet.smooth && this.options.isTablet) ||
              (this.smartphone.smooth &&
                this.options.isMobile &&
                !this.options.isTablet)
                ? (this.scroll = new ct(this.options))
                : (this.scroll = new S(this.options)),
              this.scroll.init(),
              window.location.hash)
            ) {
              var t = window.location.hash.slice(
                  1,
                  window.location.hash.length
                ),
                e = document.getElementById(t);
              e && this.scroll.scrollTo(e);
            }
          },
        },
        {
          key: "update",
          value: function () {
            this.scroll.update();
          },
        },
        {
          key: "start",
          value: function () {
            this.scroll.startScroll();
          },
        },
        {
          key: "stop",
          value: function () {
            this.scroll.stopScroll();
          },
        },
        {
          key: "scrollTo",
          value: function (t, e) {
            this.scroll.scrollTo(t, e);
          },
        },
        {
          key: "setScroll",
          value: function (t, e) {
            this.scroll.setScroll(t, e);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            this.scroll.setEvents(t, e);
          },
        },
        {
          key: "off",
          value: function (t, e) {
            this.scroll.unsetEvents(t, e);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.scroll.destroy();
          },
        },
      ]),
      e
    );
  })();
});

/*!
 * GSAP 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function o(t) {
    return "string" == typeof t;
  }
  function p(t) {
    return "function" == typeof t;
  }
  function q(t) {
    return "number" == typeof t;
  }
  function r(t) {
    return void 0 === t;
  }
  function s(t) {
    return "object" == typeof t;
  }
  function t(t) {
    return !1 !== t;
  }
  function u() {
    return "undefined" != typeof window;
  }
  function v(t) {
    return p(t) || o(t);
  }
  function M(t) {
    return (h = mt(t, ot)) && ae;
  }
  function N(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function O(t, e) {
    return !e && console.warn(t);
  }
  function P(t, e) {
    return (t && (ot[t] = e) && h && (h[t] = e)) || ot;
  }
  function Q() {
    return 0;
  }
  function $(t) {
    var e,
      r,
      i = t[0];
    if ((s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = pt.length; r-- && !pt[r].targetTest(i); );
      e = pt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Rt(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function _(t) {
    return t._gsap || $(Tt(t))[0]._gsap;
  }
  function aa(t, e, i) {
    return (i = t[e]) && p(i)
      ? t[e]()
      : (r(i) && t.getAttribute && t.getAttribute(e)) || i;
  }
  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function da(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ea(e, r, i) {
    var n,
      a = q(e[1]),
      s = (a ? 2 : 1) + (r < 2 ? 0 : 1),
      o = e[s];
    if ((a && (o.duration = e[1]), (o.parent = i), r)) {
      for (n = o; i && !("immediateRender" in n); )
        (n = i.vars.defaults || {}), (i = t(i.vars.inherit) && i.parent);
      (o.immediateRender = t(n.immediateRender)),
        r < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
    }
    return o;
  }
  function fa() {
    var t,
      e,
      r = ht.length,
      i = ht.slice(0);
    for (lt = {}, t = ht.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ga(t, e, r, i) {
    ht.length && fa(), t.render(e, r, i), ht.length && fa();
  }
  function ha(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2
      ? e
      : o(t)
      ? t.trim()
      : t;
  }
  function ia(t) {
    return t;
  }
  function ja(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ka(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ma(t, e) {
    for (var r in e)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function na(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function oa(e) {
    var r = e.parent || F,
      i = e.keyframes ? ka : ja;
    if (t(e.inherit))
      for (; r; ) i(e, r.vars.defaults), (r = r.parent || r._dp);
    return e;
  }
  function ra(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function sa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function ta(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function wa(t) {
    return t._repeat ? gt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function ya(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function za(t) {
    return (t._end = ca(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0)
    ));
  }
  function Aa(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ca(
          r._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        za(t),
        r._dirty || ta(r, t)),
      t
    );
  }
  function Ba(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = ya(t.rawTime(), e)),
        (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > j) &&
          e.render(r, !0)),
      ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -j;
    }
  }
  function Ca(t, e, r, i) {
    return (
      e.parent && sa(e),
      (e._start = ca(r + e._delay)),
      (e._end = ca(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a,
          s = t[i];
        if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = s),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e),
      i || Ba(t, e),
      t
    );
  }
  function Da(t, e) {
    return (
      (ot.ScrollTrigger || N("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ea(t, e, r, i) {
    return (
      Nt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          f !== Pt.frame
          ? (ht.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  }
  function Ia(t, e, r, i) {
    var n = t._repeat,
      a = ca(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n)) : a),
      s && !i ? Aa(t, (t._tTime = t._tDur * s)) : t.parent && za(t),
      r || ta(t.parent, t),
      t
    );
  }
  function Ja(t) {
    return t instanceof Bt ? ta(t) : Ia(t, t._dur);
  }
  function La(t, e) {
    var r,
      i,
      n = t.labels,
      a = t._recent || vt,
      s = t.duration() >= U ? a.endTime(!1) : t._dur;
    return o(e) && (isNaN(e) || e in n)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in n || (n[e] = s), n[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? La(t, e.substr(0, r - 1)) + i : s + i)
      : null == e
      ? s
      : +e;
  }
  function Ma(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Oa(t) {
    if ("string" != typeof t) return "";
    var e = st.exec(t);
    return e ? t.substr(e.index + e[0].length) : "";
  }
  function Ra(t, e) {
    return (
      t &&
      s(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && s(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function Ua(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Va(t) {
    if (p(t)) return t;
    var _ = s(t) ? t : { each: t },
      m = Et(_.ease),
      g = _.from || 0,
      v = parseFloat(_.base) || 0,
      y = {},
      e = 0 < g && g < 1,
      b = isNaN(g) || e,
      T = _.axis,
      w = g,
      x = g;
    return (
      o(g)
        ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
        : !e && b && ((w = g[0]), (x = g[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || _).length,
          c = y[d];
        if (!c) {
          if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, U])[1])) {
            for (
              h = -U;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f--;
          }
          for (
            c = y[d] = [],
              i = b ? Math.min(f, d) * w - 0.5 : g % f,
              n = b ? (d * x) / f - 0.5 : (g / f) | 0,
              l = U,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (c[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === g && Ua(c),
            (c.max = h - l),
            (c.min = l),
            (c.v = d =
              (parseFloat(_.amount) ||
                parseFloat(_.each) *
                  (d < f
                    ? d - 1
                    : T
                    ? "y" === T
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ("edges" === g ? -1 : 1)),
            (c.b = d < 0 ? v - d : v),
            (c.u = Oa(_.amount || _.each) || 0),
            (m = m && d < 0 ? It(m) : m);
        }
        return (
          (d = (c[t] - c.min) / c.max || 0),
          ca(c.b + (m ? m(d) : d) * c.v) + c.u
        );
      }
    );
  }
  function Wa(r) {
    var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - (e % 1)) / i + (q(t) ? 0 : Oa(t));
    };
  }
  function Xa(u, t) {
    var h,
      l,
      e = K(u);
    return (
      !e &&
        s(u) &&
        ((h = e = u.radius || U),
        u.values
          ? ((u = Tt(u.values)), (l = !q(u[0])) && (h *= h))
          : (u = Wa(u.increment))),
      Ma(
        t,
        e
          ? p(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    i = parseFloat(l ? t.x : t),
                    n = parseFloat(l ? t.y : 0),
                    a = U,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - i) * e + (r = u[o].y - n) * r
                    : Math.abs(u[o] - i)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || q(t) ? s : s + Oa(t)
                );
              }
          : Wa(u)
      )
    );
  }
  function Ya(t, e, r, i) {
    return Ma(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return K(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function ab(e, r, t) {
    return Ma(t, function (t) {
      return e[~~r(t)];
    });
  }
  function db(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s +=
          t.substr(a, e - a) + Ya(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function gb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function ib(t) {
    return (
      sa(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && xt(t, "onInterrupt"),
      t
    );
  }
  function nb(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        Ot +
        0.5) |
      0
    );
  }
  function ob(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c = t ? (q(t) ? [t >> 16, (t >> 8) & Ot, t & Ot] : 0) : Mt.black;
    if (!c) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]))
        c = Mt[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            (t =
              "#" +
              (i = t.charAt(1)) +
              i +
              (n = t.charAt(2)) +
              n +
              (a = t.charAt(3)) +
              a +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
          9 === t.length)
        )
          return [
            (c = parseInt(t.substr(1, 6), 16)) >> 16,
            (c >> 8) & Ot,
            c & Ot,
            parseInt(t.substr(7), 16) / 255,
          ];
        c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ot, t & Ot];
      } else if ("hsl" === t.substr(0, 3))
        if (((c = d = t.match(tt)), e)) {
          if (~t.indexOf("="))
            return (c = t.match(et)), r && c.length < 4 && (c[3] = 1), c;
        } else
          (s = (+c[0] % 360) / 360),
            (o = c[1] / 100),
            (i =
              2 * (u = c[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            3 < c.length && (c[3] *= 1),
            (c[0] = nb(s + 1 / 3, i, n)),
            (c[1] = nb(s, i, n)),
            (c[2] = nb(s - 1 / 3, i, n));
      else c = t.match(tt) || Mt.transparent;
      c = c.map(Number);
    }
    return (
      e &&
        !d &&
        ((i = c[0] / Ot),
        (n = c[1] / Ot),
        (a = c[2] / Ot),
        (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
        h === l
          ? (s = o = 0)
          : ((f = h - l),
            (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)),
            (s =
              h === i
                ? (n - a) / f + (n < a ? 6 : 0)
                : h === n
                ? (a - i) / f + 2
                : (i - n) / f + 4),
            (s *= 60)),
        (c[0] = ~~(s + 0.5)),
        (c[1] = ~~(100 * o + 0.5)),
        (c[2] = ~~(100 * u + 0.5))),
      r && c.length < 4 && (c[3] = 1),
      c
    );
  }
  function pb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(kt).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function qb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(kt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = ob(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = pb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(kt, "1").split(rt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function tb(t) {
    var e,
      r = t.join(" ");
    if (((kt.lastIndex = 0), kt.test(r)))
      return (
        (e = Ct.test(r)),
        (t[1] = qb(t[1], e)),
        (t[0] = qb(t[0], e, pb(t[1]))),
        !0
      );
  }
  function Cb(t) {
    var e = (t + "").split("("),
      r = Dt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(ha)
        )
      : Dt._CE && St.test(t)
      ? Dt._CE("", t)
      : r;
  }
  function Eb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Bt
        ? Eb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Eb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Gb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ba(t, function (t) {
        for (var e in ((Dt[t] = ot[t] = a), (Dt[(n = t.toLowerCase())] = r), a))
          Dt[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Dt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Hb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ib(r, t, e) {
    function Dl(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / X) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Dl
          : "in" === r
          ? function (t) {
              return 1 - Dl(1 - t);
            }
          : Hb(Dl);
    return (
      (n = X / n),
      (s.config = function (t, e) {
        return Ib(r, t, e);
      }),
      s
    );
  }
  function Jb(e, r) {
    function Ll(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Ll
        : "in" === e
        ? function (t) {
            return 1 - Ll(1 - t);
          }
        : Hb(Ll);
    return (
      (t.config = function (t) {
        return Jb(e, t);
      }),
      t
    );
  }
  var R,
    F,
    i,
    n,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    y,
    b,
    T,
    w,
    x,
    k,
    C,
    A,
    D,
    S,
    z,
    I,
    E,
    L,
    Y = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    B = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    j = 1 / U,
    X = 2 * Math.PI,
    V = X / 4,
    G = 0,
    J = Math.sqrt,
    W = Math.cos,
    H = Math.sin,
    Z =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    K = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    ot = {},
    ut = {},
    ht = [],
    lt = {},
    ft = {},
    dt = {},
    ct = 30,
    pt = [],
    _t = "",
    mt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    gt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    vt = { _start: 0, endTime: Q },
    yt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    bt = [].slice,
    Tt = function toArray(t, e) {
      return !o(t) || e || (!n && At())
        ? K(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (o(t) && !e) || Ra(t, 1)
                    ? r.push.apply(r, Tt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Ra(t)
          ? bt.call(t, 0)
          : t
          ? [t]
          : []
        : bt.call(a.querySelectorAll(t), 0);
    },
    wt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Ma(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    xt = function _callback(t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (i = a[e + "Params"]),
          (n = a.callbackScope || t),
          r && ht.length && fa(),
          i ? s.apply(n, i) : s.call(n)
        );
    },
    Ot = 255,
    Mt = {
      aqua: [0, Ot, Ot],
      lime: [0, Ot, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ot],
      navy: [0, 0, 128],
      white: [Ot, Ot, Ot],
      olive: [128, 128, 0],
      yellow: [Ot, Ot, 0],
      orange: [Ot, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ot, 0, 0],
      pink: [Ot, 192, 203],
      cyan: [0, Ot, Ot],
      transparent: [Ot, Ot, Ot, 0],
    },
    kt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Mt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ct = /hsl[a]?\(/,
    Pt =
      ((x = Date.now),
      (k = 500),
      (C = 33),
      (A = x()),
      (D = A),
      (z = S = 1e3 / 240),
      (b = {
        time: 0,
        frame: 0,
        tick: function tick() {
          zk(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return T / (1e3 / (t || 60));
        },
        wake: function wake() {
          l &&
            (!n &&
              u() &&
              ((i = n = window),
              (a = i.document || {}),
              (ot.gsap = ae),
              (i.gsapVersions || (i.gsapVersions = [])).push(ae.version),
              M(h || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            m && b.sleep(),
            (g =
              y ||
              function (t) {
                return setTimeout(t, (z - 1e3 * b.time + 1) | 0);
              }),
            (c = 1),
            zk(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(m), (c = 0), (g = Q);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (k = t || 1e8), (C = Math.min(e, k, 0));
        },
        fps: function fps(t) {
          (S = 1e3 / (t || 240)), (z = 1e3 * b.time + S);
        },
        add: function add(t) {
          I.indexOf(t) < 0 && I.push(t), At();
        },
        remove: function remove(t) {
          var e;
          ~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w--;
        },
        _listeners: (I = []),
      })),
    At = function _wake() {
      return !c && Pt.wake();
    },
    Dt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    zt = /["']/g,
    It = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Et = function _parseEase(t, e) {
      return (t && (p(t) ? t : Dt[t] || Cb(t))) || e;
    };
  function zk(t) {
    var e,
      r,
      i,
      n,
      a = x() - D,
      s = !0 === t;
    if (
      (k < a && (A += a - C),
      (0 < (e = (i = (D += a) - A) - z) || s) &&
        ((n = ++b.frame),
        (T = i - 1e3 * b.time),
        (b.time = i /= 1e3),
        (z += e + (S <= e ? 4 : S - e)),
        (r = 1)),
      s || (m = g(zk)),
      r)
    )
      for (w = 0; w < I.length; w++) I[w](i, T, n, t);
  }
  function am(t) {
    return t < L
      ? E * t * t
      : t < 0.7272727272727273
      ? E * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? E * (t -= 2.25 / 2.75) * t + 0.9375
      : E * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Gb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn),
    Gb("Elastic", Ib("in"), Ib("out"), Ib()),
    (E = 7.5625),
    (L = 1 / 2.75),
    Gb(
      "Bounce",
      function (t) {
        return 1 - am(1 - t);
      },
      am
    ),
    Gb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Gb("Circ", function (t) {
      return -(J(1 - t * t) - 1);
    }),
    Gb("Sine", function (t) {
      return 1 === t ? 1 : 1 - W(t * V);
    }),
    Gb("Back", Jb("in"), Jb("out"), Jb()),
    (Dt.SteppedEase =
      Dt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * yt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (B.ease = Dt["quad.out"]),
    ba(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (_t += t + "," + t + "Params,");
      }
    );
  var Lt,
    Rt = function GSCache(t, e) {
      (this.id = G++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : aa),
        (this.set = e ? e.getSetter : Wt);
    },
    Ft =
      (((Lt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Lt.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (Lt.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ia(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (Lt.totalTime = function totalTime(t, e) {
        if ((At(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Ca(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === j) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), ga(this, t, e)),
          this
        );
      }),
      (Lt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + wa(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Lt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Lt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                wa(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Lt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? gt(this._tTime, r) + 1
          : 1;
      }),
      (Lt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -j ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -j ? 0 : this._rts),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        );
      }),
      (Lt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (At(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      (this._tTime -= j) &&
                      Math.abs(this._zTime) !== j
                  ))),
            this)
          : this._ps;
      }),
      (Lt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Ca(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (Lt.endTime = function endTime(e) {
        return (
          this._start +
          (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (Lt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ya(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Lt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return r;
      }),
      (Lt.repeat = function repeat(t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Ja(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (Lt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Ja(this)) : this._rDelay;
      }),
      (Lt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Lt.seek = function seek(e, r) {
        return this.totalTime(La(this, e), t(r));
      }),
      (Lt.restart = function restart(e, r) {
        return this.play().totalTime(e ? -this._delay : 0, t(r));
      }),
      (Lt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Lt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Lt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Lt.resume = function resume() {
        return this.paused(!1);
      }),
      (Lt.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -j : 0)),
            this)
          : this._rts < 0;
      }),
      (Lt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -j), this;
      }),
      (Lt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - j
          )
        );
      }),
      (Lt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (Lt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function sn() {
            var t = i.then;
            (i.then = null),
              p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = p(t) ? t : ia;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? sn()
            : (i._prom = sn);
        });
      }),
      (Lt.kill = function kill() {
        ib(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || F;
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ia(this, +t.duration, 1, 1),
      (this.data = t.data),
      c || Pt.wake(),
      r && Ca(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0);
  }
  ja(Ft.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -j,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Bt = (function (n) {
    function Timeline(e, r) {
      var i;
      return (
        void 0 === e && (e = {}),
        ((i = n.call(this, e, r) || this).labels = {}),
        (i.smoothChildTiming = !!e.smoothChildTiming),
        (i.autoRemoveChildren = !!e.autoRemoveChildren),
        (i._sort = t(e.sortChildren)),
        i.parent && Ba(i.parent, _assertThisInitialized(i)),
        e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger),
        i
      );
    }
    _inheritsLoose(Timeline, n);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r, i) {
        return new Vt(t, ea(arguments, 0, this), La(this, q(e) ? i : r)), this;
      }),
      (e.from = function from(t, e, r, i) {
        return new Vt(t, ea(arguments, 1, this), La(this, q(e) ? i : r)), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i, n) {
        return new Vt(t, ea(arguments, 2, this), La(this, q(e) ? n : i)), this;
      }),
      (e.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          oa(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Vt(t, e, La(this, r), 1),
          this
        );
      }),
      (e.call = function call(t, e, r) {
        return Ca(this, Vt.delayedCall(0, t, e), La(this, r));
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Vt(t, r, La(this, n)),
          this
        );
      }),
      (e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
        return (
          (i.runBackwards = 1),
          (oa(i).immediateRender = t(i.immediateRender)),
          this.staggerTo(e, r, i, n, a, s, o)
        );
      }),
      (e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
        return (
          (n.startAt = i),
          (oa(n).immediateRender = t(n.immediateRender)),
          this.staggerTo(e, r, n, a, s, o, u)
        );
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== F && m - j < t && 0 <= t ? m : t < j ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((c = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ca(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (d = gt(this._tTime, o)),
              !_ && this._tTime && d !== s && (d = s),
              c && 1 & s && ((i = g - i), (p = 1)),
              s !== d && !this._lock)
            ) {
              var b = c && 1 & d,
                T = b === (c && 1 & s);
              if (
                (s < d && (b = !b),
                (_ = b ? 0 : g),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0),
                !e && this.parent && xt(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  u != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                T &&
                  ((this._lock = 2), (_ = b ? g : -1e-4), this.render(_, !0)),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Eb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e)
                      return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e)
                      return i;
                    i = i._prev;
                  }
              })(this, ca(_), ca(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            _ || !i || e || xt(this, "onStart"),
            _ <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -j);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -j : j);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -j)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), za(this), this.render(t, e, r);
          this._onUpdate && !e && xt(this, "onUpdate", !0),
            ((v === m && m >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  sa(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_) ||
                  (xt(this, v === m ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (e.add = function add(t, e) {
        var r = this;
        if ((q(e) || (e = La(this, e)), !(t instanceof Ft))) {
          if (K(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (o(t)) return this.addLabel(t, e);
          if (!p(t)) return this;
          t = Vt.delayedCall(0, t);
        }
        return this !== t ? Ca(this, t, e) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Vt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return o(t)
          ? this.removeLabel(t)
          : p(t)
          ? this.killTweensOf(t)
          : (ra(this, t),
            t === this._recent && (this._recent = this._last),
            ta(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ca(
                Pt.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            n.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = La(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = Vt.delayedCall(0, e || Q, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Ca(this, i, La(this, t))
        );
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = La(this, t); e; )
          e._start === t && "isPause" === e.data && sa(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          qt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(t, e) {
        for (var r, i = [], n = Tt(t), a = this._first, s = q(e); a; )
          a instanceof Vt
            ? da(a._targets, n) &&
              (s
                ? (!qt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r = this,
          i = La(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = e.immediateRender,
          u = Vt.to(
            r,
            ja(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (n && "time" in n ? n.time : r._time)) / r.timeScale()
                  ) ||
                  j,
                onStart: function onStart() {
                  r.pause();
                  var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                  u._dur !== t && Ia(u, t, 0, 1).render(u._time, !0, !0),
                    a && a.apply(u, s || []);
                },
              },
              e
            )
          );
        return o ? u.render(0) : u;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ja({ startAt: { time: La(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), gb(this, La(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), gb(this, La(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + j);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return ta(this);
      }),
      (e.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return n.prototype.invalidate.call(this);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          ta(this)
        );
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Ca(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ia(a, a === F && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((F._ts && (ga(F, ya(t, F)), (f = Pt.frame)), Pt.frame >= ct)) {
          ct += Y.autoSleep || 120;
          var e = F._first;
          if ((!e || !e._ts) && Y.autoSleep && Pt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Pt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ft);
  ja(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Qb(t, e, r, i, n, a) {
    var u, h, l, f;
    if (
      ft[t] &&
      !1 !==
        (u = new ft[t]()).init(
          n,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, r, i, n) {
                if (
                  (p(t) && (t = Ut(t, n, e, r, i)),
                  !s(t) || (t.style && t.nodeType) || K(t) || Z(t))
                )
                  return o(t) ? Ut(t, n, e, r, i) : t;
                var a,
                  u = {};
                for (a in t) u[a] = Ut(t[a], n, e, r, i);
                return u;
              })(e[t], i, n, a, r),
          r,
          i,
          a
        ) &&
      ((r._pt = h = new ie(r._pt, n, t, 0, 1, u.render, u, 0, u.priority)),
      r !== d)
    )
      for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--; )
        l[u._props[f]] = h;
    return u;
  }
  var qt,
    Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
      p(i) && (i = i(n || 0, t, a));
      var l,
        f = t[e],
        d =
          "get" !== r
            ? r
            : p(f)
            ? h
              ? t[
                  e.indexOf("set") || !p(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](h)
              : t[e]()
            : f,
        c = p(f) ? (h ? Jt : Qt) : Gt;
      if (
        (o(i) &&
          (~i.indexOf("random(") && (i = db(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(d) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (Oa(d) || 0))),
        d !== i)
      )
        return isNaN(d * i)
          ? (f || e in t || N(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new ie(this._pt, t, e, 0, 1, Zt, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r,
                  _.e = i,
                  r += "",
                  (c = ~(i += "").indexOf("random(")) && (i = db(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = it.lastIndex));
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ""),
                (_.fp = s),
                (nt.test(i) || c) && (_.e = 0),
                (this._pt = _)
              );
            }.call(this, t, e, d, i, c, u || Y.stringFilter, h))
          : ((l = new ie(
              this._pt,
              t,
              e,
              +d || 0,
              i - (d || 0),
              "boolean" == typeof f ? $t : Ht,
              0,
              c
            )),
            h && (l.fp = h),
            s && l.modifier(s, this, t),
            (this._pt = l));
    },
    Nt = function _initTween(e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        T = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        O = g.callbackScope,
        M = g.runBackwards,
        k = g.yoyoEase,
        C = g.keyframes,
        P = g.autoRevert,
        A = e._dur,
        D = e._startAt,
        S = e._targets,
        z = e.parent,
        I = z && "nested" === z.data ? z.parent._targets : S,
        E = "auto" === e._overwrite && !R,
        L = e.timeline;
      if (
        (!L || (C && v) || (v = "none"),
        (e._ease = Et(v, B.ease)),
        (e._yEase = k ? It(Et(!0 === k ? v : k, B.ease)) : 0),
        k &&
          e._yoyo &&
          !e._repeat &&
          ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
        !L)
      ) {
        if (
          ((p = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop]),
          (i = na(g, ut)),
          D && D.render(-1, !0).kill(),
          y)
        )
          if (
            (sa(
              (e._startAt = Vt.set(
                S,
                ja(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: t(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: O,
                    stagger: 0,
                  },
                  y
                )
              ))
            ),
            b)
          ) {
            if (0 < r) P || (e._startAt = 0);
            else if (A && !(r < 0 && D)) return void (r && (e._zTime = r));
          } else !1 === P && (e._startAt = 0);
        else if (M && A)
          if (D) P || (e._startAt = 0);
          else if (
            (r && (b = !1),
            (a = ja(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: b && t(T),
                immediateRender: b,
                stagger: 0,
                parent: z,
              },
              i
            )),
            p && (a[l.prop] = p),
            sa((e._startAt = Vt.set(S, a))),
            b)
          ) {
            if (!r) return;
          } else _initTween(e._startAt, j);
        for (
          e._pt = 0, T = (A && t(T)) || (T && !A), n = 0;
          n < S.length;
          n++
        ) {
          if (
            ((h = (o = S[n])._gsap || $(S)[n]._gsap),
            (e._ptLookup[n] = d = {}),
            lt[h.id] && ht.length && fa(),
            (c = I === S ? n : I.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, e, c, I) &&
              ((e._pt = s =
                new ie(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i)
              ft[a] && (f = Qb(a, i, e, c, o, I))
                ? f.priority && (u = 1)
                : (d[a] = s =
                    Yt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter));
          e._op && e._op[n] && e.kill(o, e._op[n]),
            E &&
              e._pt &&
              ((qt = e),
              F.killTweensOf(o, d, e.globalTime(0)),
              (m = !e.parent),
              (qt = 0)),
            e._pt && T && (lt[h.id] = 1);
        }
        u && re(e), e._onInit && e._onInit(e);
      }
      (e._from = !L && !!g.runBackwards),
        (e._onUpdate = w),
        (e._initted = (!e._op || e._pt) && !m);
    },
    Ut = function _parseFuncOrString(t, e, r, i, n) {
      return p(t)
        ? t.call(e, r, i, n)
        : o(t) && ~t.indexOf("random(")
        ? db(t)
        : t;
    },
    jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Xt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Vt = (function (A) {
      function Tween(e, r, i, n) {
        var a;
        "number" == typeof r && ((i.duration = r), (r = i), (i = null));
        var o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = (a = A.call(this, n ? r : oa(r), i) || this).vars,
          m = _.duration,
          g = _.delay,
          y = _.immediateRender,
          b = _.stagger,
          T = _.overwrite,
          w = _.keyframes,
          x = _.defaults,
          M = _.scrollTrigger,
          k = _.yoyoEase,
          C = a.parent,
          P = (K(e) || Z(e) ? q(e[0]) : "length" in r) ? [e] : Tt(e);
        if (
          ((a._targets = P.length
            ? $(P)
            : O(
                "GSAP target " + e + " not found. https://greensock.com",
                !Y.nullTargetWarn
              ) || []),
          (a._ptLookup = []),
          (a._overwrite = T),
          w || b || v(m) || v(g))
        ) {
          if (
            ((r = a.vars),
            (o = a.timeline =
              new Bt({ data: "nested", defaults: x || {} })).kill(),
            (o.parent = o._dp = _assertThisInitialized(a)),
            (o._start = 0),
            w)
          )
            ja(o.vars.defaults, { ease: "none" }),
              w.forEach(function (t) {
                return o.to(P, t, ">");
              });
          else {
            if (((l = P.length), (c = b ? Va(b) : Q), s(b)))
              for (f in b) ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
            for (u = 0; u < l; u++) {
              for (f in ((h = {}), r)) Xt.indexOf(f) < 0 && (h[f] = r[f]);
              (h.stagger = 0),
                k && (h.yoyoEase = k),
                p && mt(h, p),
                (d = P[u]),
                (h.duration = +Ut(m, _assertThisInitialized(a), u, d, P)),
                (h.delay =
                  (+Ut(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay),
                !b &&
                  1 === l &&
                  h.delay &&
                  ((a._delay = g = h.delay), (a._start += g), (h.delay = 0)),
                o.to(d, h, c(u, d, P));
            }
            o.duration() ? (m = g = 0) : (a.timeline = 0);
          }
          m || a.duration((m = o.duration()));
        } else a.timeline = 0;
        return (
          !0 !== T ||
            R ||
            ((qt = _assertThisInitialized(a)), F.killTweensOf(P), (qt = 0)),
          C && Ba(C, _assertThisInitialized(a)),
          (y ||
            (!m &&
              !w &&
              a._start === ca(C._time) &&
              t(y) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(a)) &&
              "nested" !== C.data)) &&
            ((a._tTime = -j), a.render(Math.max(0, -g))),
          M && Da(_assertThisInitialized(a), M),
          a
        );
      }
      _inheritsLoose(Tween, A);
      var e = Tween.prototype;
      return (
        (e.render = function render(t, e, r) {
          var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            c = this._tDur,
            p = this._dur,
            _ = c - j < t && 0 <= t ? c : t < j ? 0 : t;
          if (p) {
            if (
              _ !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = _), (l = this.timeline), this._repeat)) {
                if (((s = p + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * s + t, e, r);
                if (
                  ((i = ca(_ % s)),
                  _ === c
                    ? ((a = this._repeat), (i = p))
                    : ((a = ~~(_ / s)) && a === _ / s && ((i = p), a--),
                      p < i && (i = p)),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                  (o = gt(this._tTime, s)),
                  i === d && !r && this._initted)
                )
                  return this;
                a !== o &&
                  (l && this._yEase && Eb(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(ca(s * a), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ea(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, r);
              }
              for (
                this._tTime = _,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(i / p),
                  this._from && (this.ratio = h = 1 - h),
                  !i || d || e || xt(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -j : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  xt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  xt(this, "onRepeat"),
                (_ !== this._tDur && _) ||
                  this._tTime !== _ ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (!t && p) ||
                    !(
                      (_ === this._tDur && 0 < this._ts) ||
                      (!_ && this._ts < 0)
                    ) ||
                    sa(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!_ && !d) ||
                    (xt(this, _ === c ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (_ < c && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, i) {
              var n,
                a,
                s,
                o = t.ratio,
                u =
                  e < 0 ||
                  (!e &&
                    ((!t._start &&
                      (function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return (
                          e &&
                          e._ts &&
                          e._initted &&
                          !e._lock &&
                          (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                        );
                      })(t)) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)))
                    ? 0
                    : 1,
                h = t._rDelay,
                l = 0;
              if (
                (h &&
                  t._repeat &&
                  ((l = yt(0, t._tDur, e)),
                  (a = gt(l, h)),
                  (s = gt(t._tTime, h)),
                  t._yoyo && 1 & a && (u = 1 - u),
                  a !== s &&
                    ((o = 1 - u),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== o || i || t._zTime === j || (!e && t._zTime))
              ) {
                if (!t._initted && Ea(t, e, i, r)) return;
                for (
                  s = t._zTime,
                    t._zTime = e || (r ? j : 0),
                    r = r || (e && !s),
                    t.ratio = u,
                    t._from && (u = 1 - u),
                    t._time = 0,
                    t._tTime = l,
                    n = t._pt;
                  n;

                )
                  n.r(u, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && xt(t, "onUpdate"),
                  l && t._repeat && !r && t.parent && xt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === u &&
                    (u && sa(t, 1),
                    r ||
                      (xt(t, u ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (e.targets = function targets() {
          return this._targets;
        }),
        (e.invalidate = function invalidate() {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            A.prototype.invalidate.call(this)
          );
        }),
        (e.kill = function kill(t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? ib(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)
                ._first || ib(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Ia(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            n,
            a,
            s,
            u,
            h,
            l,
            f = this._targets,
            d = t ? Tt(t) : f,
            c = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0;
            })(f, d)
          )
            return "all" === e && (this._pt = 0), ib(this);
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (o(e) &&
                  ((u = {}),
                  ba(e, function (t) {
                    return (u[t] = 1);
                  }),
                  (e = u)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    i,
                    n,
                    a,
                    s = t[0] ? _(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (i in ((r = mt({}, e)), o))
                    if ((i in r))
                      for (n = (a = o[i].split(",")).length; n--; )
                        r[a[n]] = r[i];
                  return r;
                })(f, e))),
              l = f.length;
            l--;

          )
            if (~d.indexOf(f[l]))
              for (u in ((n = c[l]),
              "all" === e
                ? ((i[l] = e), (s = n), (a = {}))
                : ((a = i[l] = i[l] || {}), (s = e)),
              s))
                (h = n && n[u]) &&
                  (("kill" in h.d && !0 !== h.d.kill(u)) || ra(this, h, "_pt"),
                  delete n[u]),
                  "all" !== a && (a[u] = 1);
          return this._initted && !this._pt && p && ib(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ea(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ea(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return F.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(Ft);
  ja(Vt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Vt[r] = function () {
        var t = new Bt(),
          e = bt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function _b(t, e, r) {
    return t.setAttribute(e, r);
  }
  function hc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Gt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Qt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    Wt = function _getSetter(t, e) {
      return p(t[e]) ? Qt : r(t[e]) && t.setAttribute ? _b : Gt;
    },
    Ht = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    $t = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Zt = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    Kt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    te = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ee = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? ra(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    re = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    ie =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = hc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || Ht),
      (this.d = s || this),
      (this.set = o || Gt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ba(
    _t +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ut[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Vt),
    (ot.TimelineLite = ot.TimelineMax = Bt),
    (F = new Bt({
      sortChildren: !1,
      defaults: B,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Y.stringFilter = tb);
  var ne = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = p(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: Q,
              render: Kt,
              add: Yt,
              kill: ee,
              modifier: te,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Wt,
              aliases: {},
              register: 0,
            };
          if ((At(), t !== i)) {
            if (ft[e]) return;
            ja(i, ja(na(t, n), a)),
              mt(i.prototype, mt(n, na(t, a))),
              (ft[(i.prop = e)] = i),
              t.targetTest && (pt.push(i), (ut[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          P(e, i), t.register && t.register(ae, i, ie);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = Tt(i)[0]);
      var n = _(i || {}).get,
        a = e ? ia : ha;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? a(((ft[t] && ft[t].get) || n)(i, t, e, r))
            : function (t, e, r) {
                return a(((ft[t] && ft[t].get) || n)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Tt(r)).length) {
        var n = r.map(function (t) {
            return ae.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = ft[e],
        o = _(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (d._pt = 0),
                e.init(r, i ? t + i : t, d, 0, [r]),
                e.render(1, e),
                d._pt && Kt(1, d);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Et(t.ease, B.ease)), ma(B, t || {});
    },
    config: function config(t) {
      return ma(Y, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
        );
      }),
        (dt[i] = function (t, e, r) {
          return n(Tt(t), ja(e || {}, a), r);
        }),
        r &&
          (Bt.prototype[i] = function (t, e, r) {
            return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Dt[t] = Et(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Et(t, e) : Dt;
    },
    getById: function getById(t) {
      return F.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
        n,
        a = new Bt(e);
      for (
        a.smoothChildTiming = t(e.smoothChildTiming),
          F.remove(a),
          a._dp = 0,
          a._time = a._tTime = F._time,
          i = F._first;
        i;

      )
        (n = i._next),
          (!r &&
            !i._dur &&
            i instanceof Vt &&
            i.vars.onComplete === i._targets[0]) ||
            Ca(a, i, i._start - i._delay),
          (i = n);
      return Ca(F, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return K(e)
          ? ab(e, wrap(0, e.length), t)
          : Ma(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return K(e)
          ? ab(e, wrapYoyo(0, e.length - 1), t)
          : Ma(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: Va,
      random: Ya,
      snap: Xa,
      normalize: function normalize(t, e, r) {
        return wt(t, e, 0, 1, r);
      },
      getUnit: Oa,
      clamp: function clamp(e, r, t) {
        return Ma(t, function (t) {
          return yt(e, r, t);
        });
      },
      splitColor: ob,
      toArray: Tt,
      mapRange: wt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Oa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!n) {
          var a,
            s,
            u,
            h,
            l,
            f = o(e),
            d = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (K(e) && !K(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++)
              u.push(interpolate(e[s - 1], e[s]));
            h--,
              (n = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = mt(K(e) ? [] : {}, e));
          if (!u) {
            for (a in r) Yt.call(d, e, a, "get", r[a]);
            n = function func(t) {
              return Kt(t, d) || (f ? e.p : e);
            };
          }
        }
        return Ma(t, n);
      },
      shuffle: Ua,
    },
    install: M,
    effects: dt,
    ticker: Pt,
    updateRoot: Bt.updateRoot,
    plugins: ft,
    globalTimeline: F,
    core: {
      PropTween: ie,
      globals: P,
      Tween: Vt,
      Timeline: Bt,
      Animation: Ft,
      getCache: _,
      _removeLinkedListItem: ra,
      suppressOverwrites: function suppressOverwrites(t) {
        return (R = t);
      },
    },
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (ne[t] = Vt[t]);
  }),
    Pt.add(Bt.updateRoot),
    (d = ne.to({}, { duration: 0 }));
  function lc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function nc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (o(i) &&
              ((e = {}),
              ba(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            n)
          ) {
            for (r in ((e = {}), i)) e[r] = n(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = lc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, i);
        };
      },
    };
  }
  var ae =
    ne.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s;
          for (a in e)
            (s = this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              i,
              n,
              0,
              0,
              a
            )) && (s.op = a),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      nc("roundProps", Wa),
      nc("modifiers"),
      nc("snap", Xa)
    ) || ne;
  (Vt.version = Bt.version = ae.version = "3.6.1"), (l = 1), u() && At();
  function Yc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Zc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function $c(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function _c(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function ad(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function bd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function cd(t, e, r) {
    return (t.style[e] = r);
  }
  function dd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function ed(t, e, r) {
    return (t._gsap[e] = r);
  }
  function fd(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function gd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function hd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function ld(t, e) {
    var r = oe.createElementNS
      ? oe.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : oe.createElement(t);
    return r.style ? r : oe.createElement(t);
  }
  function md(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && md(t, Ue(e) || e, 1)) ||
      ""
    );
  }
  function pd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((se = window),
      (oe = se.document),
      (ue = oe.documentElement),
      (le = ld("div") || { style: {} }),
      ld("div"),
      (qe = Ue(qe)),
      (Ye = qe + "Origin"),
      (le.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (de = !!Ue("perspective")),
      (he = 1));
  }
  function qd(t) {
    var e,
      r = ld(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (ue.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = qd);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      ue.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function rd(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function sd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = qd.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === qd || (r = qd.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +rd(e, ["x", "cx", "x1"]) || 0,
            y: +rd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function td(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !sd(t));
  }
  function ud(t, e) {
    if (e) {
      var r = t.style;
      e in Se && e !== Ye && (e = qe),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Le, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function vd(t, e, r, i, n, a) {
    var s = new ie(t._pt, e, r, 0, 1, a ? bd : ad);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function xd(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = le.style,
      f = Re.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      m = "%" === i;
    return i === h || !u || je[i] || je[h]
      ? u
      : ("px" === h || p || (u = xd(t, e, r, "px")),
        (o = t.getCTM && td(t)),
        (!m && "%" !== h) || (!Se[e] && !~e.indexOf("adius"))
          ? ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
            (a =
              ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== oe && a.appendChild) || (a = oe.body),
            (s = a._gsap) && m && s.width && f && s.time === Pt.time
              ? ca((u / s.width) * 100)
              : ((!m && "%" !== h) || (l.position = md(t, "position")),
                a === t && (l.position = "static"),
                a.appendChild(le),
                (n = le[c]),
                a.removeChild(le),
                (l.position = "absolute"),
                f && m && (((s = _(a)).time = Pt.time), (s.width = a[c])),
                ca(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
          : ((n = o ? t.getBBox()[f ? "width" : "height"] : t[c]),
            ca(m ? (u / n) * 100 : (u / 100) * n)));
  }
  function yd(t, e, r, i) {
    var n;
    return (
      he || pd(),
      e in Be &&
        "transform" !== e &&
        ~(e = Be[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      Se[e] && "transform" !== e
        ? ((n = Je(t, i)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : We(md(t, Ye)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]) &&
            "auto" !== n &&
            !i &&
            !~(n + "").indexOf("calc(")) ||
          (n =
            (Ve[e] && Ve[e](t, e, r)) ||
            md(t, e) ||
            aa(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(n + "").trim().indexOf(" ") ? xd(t, e, n, r) + r : n
    );
  }
  function zd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ue(e, t, 1),
        a = n && md(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = md(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g,
      v = new ie(this._pt, t.style, e, 0, 1, Zt),
      y = 0,
      b = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((t.style[e] = i), (i = md(t, e) || i), (t.style[e] = r)),
      tb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (d = o[0]),
          (p = i.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          d !== (f = u[b++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
              (d = d.substr(2)),
            (c = parseFloat(d)),
            (_ = d.substr((c + "").length)),
            (y = rt.lastIndex - _.length),
            _ ||
              ((_ = _ || Y.units[e] || m),
              y === i.length && ((i += _), (v.e += _))),
            m !== _ && (h = xd(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: p || 1 === b ? p : ",",
              s: h,
              c: g ? g * c : c - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? bd : ad;
    return nt.test(i) && (v.e = 0), (this._pt = v);
  }
  function Bd(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Xe[r] || r),
      (e[1] = Xe[i] || i),
      e.join(" ")
    );
  }
  function Cd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            Se[r] && ((i = 1), (r = "transformOrigin" === r ? Ye : qe)),
            ud(a, r);
      i &&
        (ud(a, qe),
        u &&
          (u.svg && a.removeAttribute("transform"), Je(a, 1), (u.uncache = 1)));
    }
  }
  function Gd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Hd(t) {
    var e = md(t, qe);
    return Gd(e) ? Ge : e.substr(7).match(et).map(ca);
  }
  function Id(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || _(t),
      o = t.style,
      u = Hd(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? Ge
        : u
      : (u !== Ge ||
          t.offsetParent ||
          t === ue ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextSibling), ue.appendChild(t)),
          (u = Hd(t)),
          n ? (o.display = n) : ud(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : ue.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Jd(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Id(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      b = l[5],
      T = e.split(" "),
      w = parseFloat(T[0]) || 0,
      x = parseFloat(T[1]) || 0;
    r
      ? l !== Ge &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o),
        (x = u))
      : ((w = (s = sd(t)).x + (~T[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(T[1] || T[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (b = x - d),
          (h.xOffset = c + (y * _ + b * g) - y),
          (h.yOffset = p + (y * m + b * v) - b))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Ye] = "0px 0px"),
      a &&
        (vd(a, h, "xOrigin", f, w),
        vd(a, h, "yOrigin", d, x),
        vd(a, h, "xOffset", c, h.xOffset),
        vd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function Md(t, e, r) {
    var i = Oa(e);
    return ca(parseFloat(e) + parseFloat(xd(t, "x", r + "px", i))) + i;
  }
  function Td(t, e, r, i, n, a) {
    var s,
      u,
      h = 360,
      l = o(n),
      f = parseFloat(n) * (l && ~n.indexOf("rad") ? ze : 1),
      d = a ? f * a : f - i,
      c = i + d + "deg";
    return (
      l &&
        ("short" === (s = n.split("_")[1]) &&
          (d %= h) !== d % 180 &&
          (d += d < 0 ? h : -h),
        "cw" === s && d < 0
          ? (d = ((d + 36e9) % h) - ~~(d / h) * h)
          : "ccw" === s && 0 < d && (d = ((d - 36e9) % h) - ~~(d / h) * h)),
      (t._pt = u = new ie(t._pt, e, r, i, d, Zc)),
      (u.e = c),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Ud(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function Vd(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = Ud({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (f[qe] = e),
        (i = Je(r, 1)),
        ud(r, qe),
        r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[qe]),
        (f[qe] = e),
        (i = Je(r, 1)),
        (f[qe] = a)),
    Se))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Oa(a) !== (h = Oa(s)) ? xd(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ie(t._pt, i, n, o, u - o, Yc)),
        (t._pt.u = h || 0),
        t._props.push(n));
    Ud(i, l);
  }
  var se,
    oe,
    ue,
    he,
    le,
    fe,
    de,
    ce = Dt.Power0,
    pe = Dt.Power1,
    _e = Dt.Power2,
    me = Dt.Power3,
    ge = Dt.Power4,
    ve = Dt.Linear,
    ye = Dt.Quad,
    be = Dt.Cubic,
    Te = Dt.Quart,
    we = Dt.Quint,
    xe = Dt.Strong,
    Oe = Dt.Elastic,
    Me = Dt.Back,
    ke = Dt.SteppedEase,
    Ce = Dt.Bounce,
    Pe = Dt.Sine,
    Ae = Dt.Expo,
    De = Dt.Circ,
    Se = {},
    ze = 180 / Math.PI,
    Ie = Math.PI / 180,
    Ee = Math.atan2,
    Le = /([A-Z])/g,
    Re = /(?:left|right|width|margin|padding|x)/i,
    Fe = /[\s,\(]\S/,
    Be = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    qe = "transform",
    Ye = qe + "Origin",
    Ne = "O,Moz,ms,Ms,Webkit".split(","),
    Ue = function _checkPropPrefix(t, e, r) {
      var i = (e || le).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Ne[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ne[n] : "") + t;
    },
    je = { deg: 1, rad: 1, turn: 1 },
    Xe = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ve = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new ie(t._pt, e, r, 0, 0, Cd));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    Ge = [1, 0, 0, 1, 0, 0],
    Qe = {},
    Je = function _parseTransform(t, e) {
      var r = t._gsap || new Rt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        b,
        T,
        w,
        x,
        O,
        M,
        k,
        C,
        P,
        A,
        D,
        S,
        z,
        I,
        E,
        L = t.style,
        R = r.scaleX < 0,
        F = "deg",
        B = md(t, Ye) || "0";
      return (
        (i = n = a = u = h = l = f = d = c = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !td(t))),
        (m = Id(t, r.svg)),
        r.svg &&
          ((k = !r.uncache && !e && t.getAttribute("data-svg-origin")),
          Jd(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== Ge &&
          ((b = m[0]),
          (T = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = O = m[4]),
          (n = M = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(b * b + T * T)),
              (o = Math.sqrt(x * x + w * w)),
              (u = b || T ? Ee(T, b) * ze : 0),
              (f = w || x ? Ee(w, x) * ze + u : 0) &&
                (o *= Math.abs(Math.cos(f * Ie))),
              r.svg && ((i -= p - (p * b + _ * w)), (n -= _ - (p * T + _ * x))))
            : ((E = m[6]),
              (z = m[7]),
              (A = m[8]),
              (D = m[9]),
              (S = m[10]),
              (I = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = Ee(E, S)) * ze),
              g &&
                ((k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                (C = M * v + D * y),
                (P = E * v + S * y),
                (A = O * -y + A * v),
                (D = M * -y + D * v),
                (S = E * -y + S * v),
                (I = z * -y + I * v),
                (O = k),
                (M = C),
                (E = P)),
              (l = (g = Ee(-w, S)) * ze),
              g &&
                ((v = Math.cos(-g)),
                (I = x * (y = Math.sin(-g)) + I * v),
                (b = k = b * v - A * y),
                (T = C = T * v - D * y),
                (w = P = w * v - S * y)),
              (u = (g = Ee(T, b)) * ze),
              g &&
                ((k = b * (v = Math.cos(g)) + T * (y = Math.sin(g))),
                (C = O * v + M * y),
                (T = T * v - b * y),
                (M = M * v - O * y),
                (b = k),
                (O = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = ca(Math.sqrt(b * b + T * T + w * w))),
              (o = ca(Math.sqrt(M * M + E * E))),
              (g = Ee(O, M)),
              (f = 2e-4 < Math.abs(g) ? g * ze : 0),
              (c = I ? 1 / (I < 0 ? -I : I) : 0)),
          r.svg &&
            ((k = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Gd(md(t, qe))),
            k && t.setAttribute("transform", k))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (R
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            (r.xPercent ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            (r.yPercent ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = a + "px"),
        (r.scaleX = ca(s)),
        (r.scaleY = ca(o)),
        (r.rotation = ca(u) + F),
        (r.rotationX = ca(h) + F),
        (r.rotationY = ca(l) + F),
        (r.skewX = f + F),
        (r.skewY = d + F),
        (r.transformPerspective = c + "px"),
        (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[Ye] = We(B)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Y.force3D),
        (r.renderTransform = r.svg ? er : de ? tr : He),
        (r.uncache = 0),
        r
      );
    },
    We = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    He = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        tr(t, e);
    },
    $e = "0deg",
    Ze = "0px",
    Ke = ") ",
    tr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== $e || h !== $e)) {
        var T,
          w = parseFloat(h) * Ie,
          x = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(l) * Ie),
          (T = Math.cos(w)),
          (a = Md(g, a, x * T * -v)),
          (s = Md(g, s, -Math.sin(w) * -v)),
          (o = Md(g, o, O * T * -v + v));
      }
      _ !== Ze && (y += "perspective(" + _ + Ke),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!b && a === Ze && s === Ze && o === Ze) ||
          (y +=
            o !== Ze || b
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Ke),
        u !== $e && (y += "rotate(" + u + Ke),
        h !== $e && (y += "rotateY(" + h + Ke),
        l !== $e && (y += "rotateX(" + l + Ke),
        (f === $e && d === $e) || (y += "skew(" + f + ", " + d + Ke),
        (1 === c && 1 === p) || (y += "scale(" + c + ", " + p + Ke),
        (g.style[qe] = y || "translate(0, 0)");
    },
    er = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        b = o.xOffset,
        T = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
      (d = parseFloat(d)),
        (c = parseFloat(c)),
        (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)),
        d || c
          ? ((d *= Ie),
            (c *= Ie),
            (r = Math.cos(d) * _),
            (i = Math.sin(d) * _),
            (n = Math.sin(d - c) * -m),
            (a = Math.cos(d - c) * m),
            c &&
              ((p *= Ie),
              (s = Math.tan(c - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ca(r)),
            (i = ca(i)),
            (n = ca(n)),
            (a = ca(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((x = xd(g, "x", l, "px")), (O = xd(g, "y", f, "px"))),
        (v || y || b || T) &&
          ((x = ca(x + v - (v * r + y * n) + b)),
          (O = ca(O + y - (v * i + y * a) + T))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = ca(x + (u / 100) * s.width)),
          (O = ca(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          O +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[qe] = s);
    };
  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    Ve[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var rr,
    ir,
    nr,
    ar = {
      name: "css",
      register: pd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          b = this._props,
          T = t.style,
          w = r.vars.startAt;
        for (f in (he || pd(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ft[f] || !Qb(f, e, r, i, t, n))
          )
            if (
              ((h = typeof s),
              (l = Ve[f]),
              "function" === h && (h = typeof (s = s.call(r, i, t, n))),
              "string" === h && ~s.indexOf("random(") && (s = db(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              (a = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                (s += ""),
                (kt.lastIndex = 0),
                kt.test(a) || ((d = Oa(a)), (c = Oa(s))),
                c ? d !== c && (a = xd(t, f, a, c) + c) : d && (s += d),
                this.add(T, "setProperty", a, s, i, n, 0, 0, f);
            else if ("undefined" !== h) {
              if (
                (w && f in w
                  ? ((a =
                      "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f]),
                    f in Y.units && !Oa(a) && (a += Y.units[f]),
                    "=" === (a + "").charAt(1) && (a = yd(t, f)))
                  : (a = yd(t, f)),
                (u = parseFloat(a)),
                (p =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in Be &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === yd(t, "visibility") &&
                      o &&
                      (u = 0),
                    vd(
                      this,
                      T,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Be[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (_ = f in Se))
              )
                if (
                  (m ||
                    (((g = t._gsap).renderTransform && !e.parseTransform) ||
                      Je(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ie(
                        this._pt,
                        T,
                        qe,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ie(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    p ? p * o : o - g.scaleY
                  )),
                    b.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = Bd(s)),
                      g.svg
                        ? Jd(t, s, 0, v, 0, this)
                        : ((c = parseFloat(s.split(" ")[2]) || 0) !==
                            g.zOrigin && vd(this, g, "zOrigin", g.zOrigin, c),
                          vd(this, T, f, We(a), We(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    Jd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in Qe) {
                    Td(this, g, f, u, s, p);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    vd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Vd(this, s, t);
                    continue;
                  }
                }
              else f in T || (f = Ue(f) || f);
              if (
                _ ||
                ((o || 0 === o) && (u || 0 === u) && !Fe.test(s) && f in T)
              )
                (o = o || 0),
                  (d = (a + "").substr((u + "").length)) !==
                    (c = Oa(s) || (f in Y.units ? Y.units[f] : d)) &&
                    (u = xd(t, f, a, c)),
                  (this._pt = new ie(
                    this._pt,
                    _ ? g : T,
                    f,
                    u,
                    p ? p * o : o - u,
                    _ || ("px" !== c && "zIndex" !== f) || !1 === e.autoRound
                      ? Yc
                      : _c
                  )),
                  (this._pt.u = c || 0),
                  d !== c && ((this._pt.b = a), (this._pt.r = $c));
              else if (f in T) zd.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  N(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, i, n);
              }
              b.push(f);
            }
        y && re(this);
      },
      get: yd,
      aliases: Be,
      getSetter: function getSetter(t, e, i) {
        var n = Be[e];
        return (
          n && n.indexOf(",") < 0 && (e = n),
          e in Se && e !== Ye && (t._gsap.x || yd(t, "x"))
            ? i && fe === i
              ? "scale" === e
                ? fd
                : ed
              : (fe = i || {}) && ("scale" === e ? gd : hd)
            : t.style && !r(t.style[e])
            ? cd
            : ~e.indexOf("-")
            ? dd
            : Wt(t, e)
        );
      },
      core: { _removeProperty: ud, _getMatrix: Id },
    };
  (ae.utils.checkPrefix = Ue),
    (nr = ba(
      (rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (ir = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Se[t] = 1;
      }
    )),
    ba(ir, function (t) {
      (Y.units[t] = "deg"), (Qe[t] = 1);
    }),
    (Be[nr[13]] = rr + "," + ir),
    ba(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Be[e[1]] = nr[e[0]];
      }
    ),
    ba(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        Y.units[t] = "px";
      }
    ),
    ae.registerPlugin(ar);
  var sr = ae.registerPlugin(ar) || ae,
    or = sr.core.Tween;
  (e.Back = Me),
    (e.Bounce = Ce),
    (e.CSSPlugin = ar),
    (e.Circ = De),
    (e.Cubic = be),
    (e.Elastic = Oe),
    (e.Expo = Ae),
    (e.Linear = ve),
    (e.Power0 = ce),
    (e.Power1 = pe),
    (e.Power2 = _e),
    (e.Power3 = me),
    (e.Power4 = ge),
    (e.Quad = ye),
    (e.Quart = Te),
    (e.Quint = we),
    (e.Sine = Pe),
    (e.SteppedEase = ke),
    (e.Strong = xe),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = Vt),
    (e.TweenMax = or),
    (e.default = sr),
    (e.gsap = sr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * MorphSVGPlugin 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function m(t) {
    return "string" == typeof t;
  }
  var x = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    b = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    n = /(^[#\.][a-z]|[a-y][a-z])/i,
    B = Math.PI / 180,
    D = Math.sin,
    E = Math.cos,
    k = Math.abs,
    J = Math.sqrt,
    s = function _isNumber(t) {
      return "number" == typeof t;
    },
    h = function _round(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    };
  function reverseSegment(t) {
    var e,
      r = 0;
    for (t.reverse(); r < t.length; r += 2)
      (e = t[r]), (t[r] = t[r + 1]), (t[r + 1] = e);
    t.reversed = !t.reversed;
  }
  var A = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2",
  };
  function convertToPath(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _,
      P,
      m,
      v,
      y,
      w,
      M,
      x,
      T = t.tagName.toLowerCase(),
      b = 0.552284749831;
    return "path" !== T && t.getBBox
      ? ((s = (function _createPath(t, e) {
          var r,
            n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            a = [].slice.call(t.attributes),
            o = a.length;
          for (e = "," + e + ","; -1 < --o; )
            (r = a[o].nodeName.toLowerCase()),
              e.indexOf("," + r + ",") < 0 &&
                n.setAttributeNS(null, r, a[o].nodeValue);
          return n;
        })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
        (x = (function _attrToObj(t, e) {
          for (var r = e ? e.split(",") : [], n = {}, a = r.length; -1 < --a; )
            n[r[a]] = +t.getAttribute(r[a]) || 0;
          return n;
        })(t, A[T])),
        "rect" === T
          ? ((o = x.rx),
            (i = x.ry || o),
            (n = x.x),
            (a = x.y),
            (c = x.width - 2 * o),
            (p = x.height - 2 * i),
            (r =
              o || i
                ? "M" +
                  (P = (d = (f = n + o) + c) + o) +
                  "," +
                  (v = a + i) +
                  " V" +
                  (y = v + p) +
                  " C" +
                  [
                    P,
                    (w = y + i * b),
                    (_ = d + o * b),
                    (M = y + i),
                    d,
                    M,
                    d - (d - f) / 3,
                    M,
                    f + (d - f) / 3,
                    M,
                    f,
                    M,
                    (u = n + o * (1 - b)),
                    M,
                    n,
                    w,
                    n,
                    y,
                    n,
                    y - (y - v) / 3,
                    n,
                    v + (y - v) / 3,
                    n,
                    v,
                    n,
                    (m = a + i * (1 - b)),
                    u,
                    a,
                    f,
                    a,
                    f + (d - f) / 3,
                    a,
                    d - (d - f) / 3,
                    a,
                    d,
                    a,
                    _,
                    a,
                    P,
                    m,
                    P,
                    v,
                  ].join(",") +
                  "z"
                : "M" +
                  (n + c) +
                  "," +
                  a +
                  " v" +
                  p +
                  " h" +
                  -c +
                  " v" +
                  -p +
                  " h" +
                  c +
                  "z"))
          : "circle" === T || "ellipse" === T
          ? ((l =
              "circle" === T
                ? (o = i = x.r) * b
                : ((o = x.rx), (i = x.ry) * b)),
            (r =
              "M" +
              ((n = x.cx) + o) +
              "," +
              (a = x.cy) +
              " C" +
              [
                n + o,
                a + l,
                n + (h = o * b),
                a + i,
                n,
                a + i,
                n - h,
                a + i,
                n - o,
                a + l,
                n - o,
                a,
                n - o,
                a - l,
                n - h,
                a - i,
                n,
                a - i,
                n + h,
                a - i,
                n + o,
                a - l,
                n + o,
                a,
              ].join(",") +
              "z"))
          : "line" === T
          ? (r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2)
          : ("polyline" !== T && "polygon" !== T) ||
            ((r =
              "M" +
              (n = (g =
                (t.getAttribute("points") + "").match(N) || []).shift()) +
              "," +
              (a = g.shift()) +
              " L" +
              g.join(",")),
            "polygon" === T && (r += "," + n + "," + a + "z")),
        s.setAttribute(
          "d",
          rawPathToString((s._gsRawPath = stringToRawPath(r)))
        ),
        e &&
          t.parentNode &&
          (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)),
        s)
      : t;
  }
  function arcToSegment(t, e, r, n, a, o, i, s, h) {
    if (t !== s || e !== h) {
      (r = k(r)), (n = k(n));
      var l = (a % 360) * B,
        g = E(l),
        c = D(l),
        p = Math.PI,
        u = 2 * p,
        f = (t - s) / 2,
        d = (e - h) / 2,
        _ = g * f + c * d,
        P = -c * f + g * d,
        m = _ * _,
        v = P * P,
        y = m / (r * r) + v / (n * n);
      1 < y && ((r = J(y) * r), (n = J(y) * n));
      var w = r * r,
        M = n * n,
        x = (w * M - w * v - M * m) / (w * v + M * m);
      x < 0 && (x = 0);
      var T = (o === i ? -1 : 1) * J(x),
        b = ((r * P) / n) * T,
        S = ((-n * _) / r) * T,
        N = g * b - c * S + (t + s) / 2,
        z = c * b + g * S + (e + h) / 2,
        A = (_ - b) / r,
        R = (P - S) / n,
        O = (-_ - b) / r,
        j = (-P - S) / n,
        Y = A * A + R * R,
        C = (R < 0 ? -1 : 1) * Math.acos(A / J(Y)),
        I =
          (A * j - R * O < 0 ? -1 : 1) *
          Math.acos((A * O + R * j) / J(Y * (O * O + j * j)));
      isNaN(I) && (I = p),
        !i && 0 < I ? (I -= u) : i && I < 0 && (I += u),
        (C %= u),
        (I %= u);
      var V,
        F = Math.ceil(k(I) / (u / 4)),
        L = [],
        X = I / F,
        U = ((4 / 3) * D(X / 2)) / (1 + E(X / 2)),
        G = g * r,
        Q = c * r,
        q = c * -n,
        H = g * n;
      for (V = 0; V < F; V++)
        (_ = E((a = C + V * X))),
          (P = D(a)),
          (A = E((a += X))),
          (R = D(a)),
          L.push(_ - U * P, P + U * _, A + U * R, R - U * A, A, R);
      for (V = 0; V < L.length; V += 2)
        (_ = L[V]),
          (P = L[V + 1]),
          (L[V] = _ * G + P * q + N),
          (L[V + 1] = _ * Q + P * H + z);
      return (L[V - 2] = s), (L[V - 1] = h), L;
    }
  }
  function stringToRawPath(t) {
    function uc(t, e, r, n) {
      (g = (r - t) / 3),
        (c = (n - e) / 3),
        s.push(t + g, e + c, r - g, n - c, r, n);
    }
    var e,
      r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _ =
        (t + "")
          .replace(b, function (t) {
            var e = +t;
            return e < 1e-4 && -1e-4 < e ? 0 : e;
          })
          .match(x) || [],
      P = [],
      m = 0,
      v = 0,
      y = _.length,
      w = 0,
      M = "ERROR: malformed path: " + t;
    if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(M), P;
    for (e = 0; e < y; e++)
      if (
        ((u = o),
        isNaN(_[e]) ? (i = (o = _[e].toUpperCase()) !== _[e]) : e--,
        (n = +_[e + 1]),
        (a = +_[e + 2]),
        i && ((n += m), (a += v)),
        e || ((h = n), (l = a)),
        "M" === o)
      )
        s && (s.length < 8 ? --P.length : (w += s.length)),
          (m = h = n),
          (v = l = a),
          (s = [n, a]),
          P.push(s),
          (e += 2),
          (o = "L");
      else if ("C" === o)
        i || (m = v = 0),
          (s = s || [0, 0]).push(
            n,
            a,
            m + 1 * _[e + 3],
            v + 1 * _[e + 4],
            (m += 1 * _[e + 5]),
            (v += 1 * _[e + 6])
          ),
          (e += 6);
      else if ("S" === o)
        (g = m),
          (c = v),
          ("C" !== u && "S" !== u) ||
            ((g += m - s[s.length - 4]), (c += v - s[s.length - 3])),
          i || (m = v = 0),
          s.push(g, c, n, a, (m += 1 * _[e + 3]), (v += 1 * _[e + 4])),
          (e += 4);
      else if ("Q" === o)
        (g = m + (2 / 3) * (n - m)),
          (c = v + (2 / 3) * (a - v)),
          i || (m = v = 0),
          (m += 1 * _[e + 3]),
          (v += 1 * _[e + 4]),
          s.push(g, c, m + (2 / 3) * (n - m), v + (2 / 3) * (a - v), m, v),
          (e += 4);
      else if ("T" === o)
        (g = m - s[s.length - 4]),
          (c = v - s[s.length - 3]),
          s.push(
            m + g,
            v + c,
            n + (2 / 3) * (m + 1.5 * g - n),
            a + (2 / 3) * (v + 1.5 * c - a),
            (m = n),
            (v = a)
          ),
          (e += 2);
      else if ("H" === o) uc(m, v, (m = n), v), (e += 1);
      else if ("V" === o) uc(m, v, m, (v = n + (i ? v - m : 0))), (e += 1);
      else if ("L" === o || "Z" === o)
        "Z" === o && ((n = h), (a = l), (s.closed = !0)),
          ("L" === o || 0.5 < k(m - n) || 0.5 < k(v - a)) &&
            (uc(m, v, n, a), "L" === o && (e += 2)),
          (m = n),
          (v = a);
      else if ("A" === o) {
        if (
          ((f = _[e + 4]),
          (d = _[e + 5]),
          (g = _[e + 6]),
          (c = _[e + 7]),
          (r = 7),
          1 < f.length &&
            (f.length < 3
              ? ((c = g), (g = d), r--)
              : ((c = d), (g = f.substr(2)), (r -= 2)),
            (d = f.charAt(1)),
            (f = f.charAt(0))),
          (p = arcToSegment(
            m,
            v,
            +_[e + 1],
            +_[e + 2],
            +_[e + 3],
            +f,
            +d,
            (i ? m : 0) + 1 * g,
            (i ? v : 0) + 1 * c
          )),
          (e += r),
          p)
        )
          for (r = 0; r < p.length; r++) s.push(p[r]);
        (m = s[s.length - 2]), (v = s[s.length - 1]);
      } else console.log(M);
    return (
      (e = s.length) < 6
        ? (P.pop(), (e = 0))
        : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0),
      (P.totalPoints = w + e),
      P
    );
  }
  function rawPathToString(t) {
    s(t[0]) && (t = [t]);
    var e,
      r,
      n,
      a,
      o = "",
      i = t.length;
    for (r = 0; r < i; r++) {
      for (
        a = t[r],
          o += "M" + h(a[0]) + "," + h(a[1]) + " C",
          e = a.length,
          n = 2;
        n < e;
        n++
      )
        o +=
          h(a[n++]) +
          "," +
          h(a[n++]) +
          " " +
          h(a[n++]) +
          "," +
          h(a[n++]) +
          " " +
          h(a[n++]) +
          "," +
          h(a[n]) +
          " ";
      a.closed && (o += "z");
    }
    return o;
  }
  function y() {
    return (
      r ||
      ("undefined" != typeof window &&
        (r = window.gsap) &&
        r.registerPlugin &&
        r)
    );
  }
  function z(t) {
    return "function" == typeof t;
  }
  function M(t) {
    return console && console.warn(t);
  }
  function O(t) {
    var e,
      r = t.length,
      n = 0,
      a = 0;
    for (e = 0; e < r; e++) (n += t[e++]), (a += t[e]);
    return [n / (r / 2), a / (r / 2)];
  }
  function P(t) {
    var e,
      r,
      n,
      a = t.length,
      o = t[0],
      i = o,
      s = t[1],
      h = s;
    for (n = 6; n < a; n += 6)
      o < (e = t[n]) ? (o = e) : e < i && (i = e),
        s < (r = t[n + 1]) ? (s = r) : r < h && (h = r);
    return (
      (t.centerX = (o + i) / 2),
      (t.centerY = (s + h) / 2),
      (t.size = (o - i) * (s - h))
    );
  }
  function Q(t, e) {
    void 0 === e && (e = 3);
    for (
      var r,
        n,
        a,
        o,
        i,
        s,
        h,
        l,
        g,
        c,
        p,
        u,
        f,
        d,
        _,
        P,
        m = t.length,
        v = t[0][0],
        y = v,
        w = t[0][1],
        M = w,
        x = 1 / e;
      -1 < --m;

    )
      for (r = (i = t[m]).length, o = 6; o < r; o += 6)
        for (
          g = i[o],
            c = i[o + 1],
            p = i[o + 2] - g,
            d = i[o + 3] - c,
            u = i[o + 4] - g,
            _ = i[o + 5] - c,
            f = i[o + 6] - g,
            P = i[o + 7] - c,
            s = e;
          -1 < --s;

        )
          v <
          (n =
            ((h = x * s) * h * f + 3 * (l = 1 - h) * (h * u + l * p)) * h + g)
            ? (v = n)
            : n < y && (y = n),
            w < (a = (h * h * P + 3 * l * (h * _ + l * d)) * h + c)
              ? (w = a)
              : a < M && (M = a);
    return (
      (t.centerX = (v + y) / 2),
      (t.centerY = (w + M) / 2),
      (t.left = y),
      (t.width = v - y),
      (t.top = M),
      (t.height = w - M),
      (t.size = (v - y) * (w - M))
    );
  }
  function R(t, e) {
    return e.length - t.length;
  }
  function S(t, e) {
    var r = t.size || P(t),
      n = e.size || P(e);
    return Math.abs(n - r) < (r + n) / 20
      ? e.centerX - t.centerX || e.centerY - t.centerY
      : n - r;
  }
  function T(t, e) {
    var r,
      n,
      a = t.slice(0),
      o = t.length,
      i = o - 2;
    for (e |= 0, r = 0; r < o; r++)
      (n = (r + e) % i), (t[r++] = a[n]), (t[r] = a[1 + n]);
  }
  function U(t, e, r, n, a) {
    var o,
      i,
      s,
      h,
      l = t.length,
      g = 0,
      c = l - 2;
    for (r *= 6, i = 0; i < l; i += 6)
      (h = t[(o = (i + r) % c)] - (e[i] - n)),
        (s = t[1 + o] - (e[i + 1] - a)),
        (g += _(s * s + h * h));
    return g;
  }
  function V(t, e, r) {
    var n,
      a,
      o,
      i = t.length,
      s = O(t),
      h = O(e),
      l = h[0] - s[0],
      g = h[1] - s[1],
      c = U(t, e, 0, l, g),
      p = 0;
    for (o = 6; o < i; o += 6)
      (a = U(t, e, o / 6, l, g)) < c && ((c = a), (p = o));
    if (r)
      for (reverseSegment((n = t.slice(0))), o = 6; o < i; o += 6)
        (a = U(n, e, o / 6, l, g)) < c && ((c = a), (p = -o));
    return p / 6;
  }
  function W(t, e, r) {
    for (var n, a, o, i, s, h, l = t.length, g = 1e20, c = 0, p = 0; -1 < --l; )
      for (h = (n = t[l]).length, s = 0; s < h; s += 6)
        (a = n[s] - e),
          (o = n[s + 1] - r),
          (i = _(a * a + o * o)) < g && ((g = i), (c = n[s]), (p = n[s + 1]));
    return [c, p];
  }
  function X(t, e, r, n, a, o) {
    var i,
      s,
      h,
      l,
      g = e.length,
      c = 0,
      p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
      u = 1e20,
      f = t.centerX + a,
      d = t.centerY + o;
    for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++)
      (s = e[i].centerX - f),
        (h = e[i].centerY - d),
        (l = _(s * s + h * h)) < u && ((c = i), (u = l));
    return (l = e[c]), e.splice(c, 1), l;
  }
  function Y(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l,
      g,
      c,
      p,
      u,
      f,
      d,
      _ = 0,
      P = t.length,
      m = e / ((P - 2) / 6);
    for (f = 2; f < P; f += 6)
      for (_ += m; 0.999999 < _; )
        (r = t[f - 2]),
          (n = t[f - 1]),
          (a = t[f]),
          (o = t[f + 1]),
          (i = t[f + 2]),
          (s = t[f + 3]),
          (h = t[f + 4]),
          (l = t[f + 5]),
          (g = r + (a - r) * (d = 1 / ((Math.floor(_) || 1) + 1))),
          (g += ((p = a + (i - a) * d) - g) * d),
          (p += (i + (h - i) * d - p) * d),
          (c = n + (o - n) * d),
          (c += ((u = o + (s - o) * d) - c) * d),
          (u += (s + (l - s) * d - u) * d),
          t.splice(
            f,
            4,
            r + (a - r) * d,
            n + (o - n) * d,
            g,
            c,
            g + (p - g) * d,
            c + (u - c) * d,
            p,
            u,
            i + (h - i) * d,
            s + (l - s) * d
          ),
          (f += 6),
          (P += 6),
          _--;
    return t;
  }
  function Z(t, e, r, n, a) {
    var o,
      i,
      s,
      h,
      l,
      g,
      c,
      p = e.length - t.length,
      u = 0 < p ? e : t,
      f = 0 < p ? t : e,
      d = 0,
      _ = "complexity" === n ? R : S,
      m = "position" === n ? 0 : "number" == typeof n ? n : 0.8,
      v = f.length,
      y = "object" == typeof r && r.push ? r.slice(0) : [r],
      w = "reverse" === y[0] || y[0] < 0,
      x = "log" === r;
    if (f[0]) {
      if (
        1 < u.length &&
        (t.sort(_),
        e.sort(_),
        u.size || Q(u),
        f.size || Q(f),
        (g = u.centerX - f.centerX),
        (c = u.centerY - f.centerY),
        _ === S)
      )
        for (v = 0; v < f.length; v++) u.splice(v, 0, X(f[v], u, v, m, g, c));
      if (p)
        for (
          p < 0 && (p = -p),
            u[0].length > f[0].length &&
              Y(f[0], ((u[0].length - f[0].length) / 6) | 0),
            v = f.length;
          d < p;

        )
          u[v].size || P(u[v]),
            (h = (s = W(f, u[v].centerX, u[v].centerY))[0]),
            (l = s[1]),
            (f[v++] = [h, l, h, l, h, l, h, l]),
            (f.totalPoints += 8),
            d++;
      for (v = 0; v < t.length; v++)
        (o = e[v]),
          (i = t[v]),
          (p = o.length - i.length) < 0
            ? Y(o, (-p / 6) | 0)
            : 0 < p && Y(i, (p / 6) | 0),
          w && !1 !== a && !i.reversed && reverseSegment(i),
          (r = y[v] || 0 === y[v] ? y[v] : "auto") &&
            (i.closed ||
            (Math.abs(i[0] - i[i.length - 2]) < 0.5 &&
              Math.abs(i[1] - i[i.length - 1]) < 0.5)
              ? "auto" === r || "log" === r
                ? ((y[v] = r = V(i, o, !v || !1 === a)),
                  r < 0 && ((w = !0), reverseSegment(i), (r = -r)),
                  T(i, 6 * r))
                : "reverse" !== r &&
                  (v && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r)))
              : !w &&
                (("auto" === r &&
                  Math.abs(o[0] - i[0]) +
                    Math.abs(o[1] - i[1]) +
                    Math.abs(o[o.length - 2] - i[i.length - 2]) +
                    Math.abs(o[o.length - 1] - i[i.length - 1]) >
                    Math.abs(o[0] - i[i.length - 2]) +
                      Math.abs(o[1] - i[i.length - 1]) +
                      Math.abs(o[o.length - 2] - i[0]) +
                      Math.abs(o[o.length - 1] - i[1])) ||
                  r % 2)
              ? (reverseSegment(i), (y[v] = -1), (w = !0))
              : "auto" === r
              ? (y[v] = 0)
              : "reverse" === r && (y[v] = -1),
            i.closed !== o.closed && (i.closed = o.closed = !1));
      return x && M("shapeIndex:[" + y.join(",") + "]"), (t.shapeIndex = y);
    }
  }
  function $(t, e, r, n, a) {
    var o = stringToRawPath(t[0]),
      i = stringToRawPath(t[1]);
    Z(o, i, e || 0 === e ? e : "auto", r, a) &&
      ((t[0] = rawPathToString(o)),
      (t[1] = rawPathToString(i)),
      ("log" !== n && !0 !== n) ||
        M('precompile:["' + t[0] + '","' + t[1] + '"]'));
  }
  function aa(t, e) {
    var r,
      n,
      a,
      o,
      i,
      s,
      h,
      l = 0,
      g = parseFloat(t[0]),
      c = parseFloat(t[1]),
      p = g + "," + c + " ";
    for (r = (0.5 * e) / (0.5 * (a = t.length) - 1), n = 0; n < a - 2; n += 2) {
      if (
        ((l += r),
        (s = parseFloat(t[n + 2])),
        (h = parseFloat(t[n + 3])),
        0.999999 < l)
      )
        for (i = 1 / (Math.floor(l) + 1), o = 1; 0.999999 < l; )
          (p +=
            (g + (s - g) * i * o).toFixed(2) +
            "," +
            (c + (h - c) * i * o).toFixed(2) +
            " "),
            l--,
            o++;
      (p += s + "," + h + " "), (g = s), (c = h);
    }
    return p;
  }
  function ba(t) {
    var e = t[0].match(G) || [],
      r = t[1].match(G) || [],
      n = r.length - e.length;
    0 < n ? (t[0] = aa(e, n)) : (t[1] = aa(r, -n));
  }
  function ca(e) {
    return isNaN(e)
      ? ba
      : function (t) {
          ba(t),
            (t[1] = (function _offsetPoints(t, e) {
              if (!e) return t;
              var r,
                n,
                a,
                o = t.match(G) || [],
                i = o.length,
                s = "";
              for (
                r =
                  "reverse" === e
                    ? ((n = i - 1), -2)
                    : ((n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i), 2),
                  a = 0;
                a < i;
                a += 2
              )
                (s += o[n - 1] + "," + o[n] + " "), (n = (n + r) % i);
              return s;
            })(t[1], parseInt(e, 10)));
        };
  }
  function ea(t, e) {
    for (
      var r, n, a, o, i, s, h, l, g, c, p, u, f = t.length, d = 0.2 * (e || 1);
      -1 < --f;

    ) {
      for (
        p = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0],
          u = n.smoothData = n.smoothData || [0, 0, 0, 0],
          p.length = 4,
          l = n.length - 2,
          h = 6;
        h < l;
        h += 6
      )
        (a = n[h] - n[h - 2]),
          (o = n[h + 1] - n[h - 1]),
          (i = n[h + 2] - n[h]),
          (s = n[h + 3] - n[h + 1]),
          (g = w(o, a)),
          (c = w(s, i)),
          (r = Math.abs(g - c) < d) &&
            ((u[h - 2] = g),
            (u[h + 2] = c),
            (u[h - 1] = _(a * a + o * o)),
            (u[h + 3] = _(i * i + s * s))),
          p.push(r, r, 0, 0, r, r);
      n[l] === n[0] &&
        n[1 + l] === n[1] &&
        ((a = n[0] - n[l - 2]),
        (o = n[1] - n[l - 1]),
        (i = n[2] - n[0]),
        (s = n[3] - n[1]),
        (g = w(o, a)),
        (c = w(s, i)),
        Math.abs(g - c) < d &&
          ((u[l - 2] = g),
          (u[2] = c),
          (u[l - 1] = _(a * a + o * o)),
          (u[3] = _(i * i + s * s)),
          (p[l - 2] = p[l - 1] = !0)));
    }
    return t;
  }
  function fa(t) {
    var e = t.trim().split(" ");
    return {
      x:
        (~t.indexOf("left")
          ? 0
          : ~t.indexOf("right")
          ? 100
          : isNaN(parseFloat(e[0]))
          ? 50
          : parseFloat(e[0])) / 100,
      y:
        (~t.indexOf("top")
          ? 0
          : ~t.indexOf("bottom")
          ? 100
          : isNaN(parseFloat(e[1]))
          ? 50
          : parseFloat(e[1])) / 100,
    };
  }
  function ia(t, e, r, n) {
    var a,
      o,
      i = this._origin,
      s = this._eOrigin,
      h = t[r] - i.x,
      l = t[r + 1] - i.y,
      g = _(h * h + l * l),
      c = w(l, h);
    return (
      (h = e[r] - s.x),
      (l = e[r + 1] - s.y),
      (o = (function _shortAngle(t) {
        return t !== t % p ? t + (t < 0 ? u : -u) : t;
      })((a = w(l, h) - c))),
      !n && I && Math.abs(o + I.ca) < f && (n = I),
      (this._anchorPT = I =
        {
          _next: this._anchorPT,
          t: t,
          sa: c,
          ca: n && o * n.ca < 0 && Math.abs(o) > d ? a : o,
          sl: g,
          cl: _(h * h + l * l) - g,
          i: r,
        })
    );
  }
  function ja(t) {
    (r = y()),
      (a = a || (r && r.plugins.morphSVG)),
      r && a
        ? ((C = r.utils.toArray), (a.prototype._tweenRotation = ia), (F = 1))
        : t && M("Please gsap.registerPlugin(MorphSVGPlugin)");
  }
  var r,
    C,
    I,
    F,
    a,
    w = Math.atan2,
    j = Math.cos,
    L = Math.sin,
    _ = Math.sqrt,
    p = Math.PI,
    u = 2 * p,
    f = 0.3 * p,
    d = 0.7 * p,
    G = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    q = /(^[#\.][a-z]|[a-y][a-z])/i,
    H = /[achlmqstvz]/i,
    K =
      "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    tt = {
      version: "3.6.1",
      name: "morphSVG",
      rawVars: 1,
      register: function register(t, e) {
        (r = t), (a = e), ja();
      },
      init: function init(t, e, r, n, a) {
        if ((F || ja(1), !e)) return M("invalid shape"), !1;
        var o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, x, T, b, S, N;
        if (
          (z(e) && (e = e.call(r, n, t, a)),
          "string" == typeof e || e.getBBox || e[0])
        )
          e = { shape: e };
        else if ("object" == typeof e) {
          for (i in ((o = {}), e))
            o[i] = z(e[i]) && "render" !== i ? e[i].call(r, n, t, a) : e[i];
          e = o;
        }
        var A = t.nodeType ? window.getComputedStyle(t) : {},
          R = A.fill + "",
          O = !(
            "none" === R ||
            "0" === (R.match(G) || [])[3] ||
            "evenodd" === A.fillRule
          ),
          j = (e.origin || "50 50").split(",");
        if (
          ((l =
            "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) ||
            "POLYGON" === o),
          "PATH" !== o && !l && !e.prop)
        )
          return M("Cannot morph a <" + o + "> element. " + K), !1;
        if (
          ((i = "PATH" === o ? "d" : "points"), !e.prop && !z(t.setAttribute))
        )
          return !1;
        if (
          ((h = (function _parseShape(t, e, r) {
            var n, a;
            return (
              (!("string" == typeof t) ||
                q.test(t) ||
                (t.match(G) || []).length < 3) &&
                ((n = C(t)[0])
                  ? ((a = (n.nodeName + "").toUpperCase()),
                    e &&
                      "PATH" !== a &&
                      ((n = convertToPath(n, !1)), (a = "PATH")),
                    (t = n.getAttribute("PATH" === a ? "d" : "points") || ""),
                    n === r &&
                      (t = n.getAttributeNS(null, "data-original") || t))
                  : (M("WARNING: invalid morph to: " + t), (t = !1))),
              t
            );
          })(e.shape || e.d || e.points || "", "d" === i, t)),
          l && H.test(h))
        )
          return M("A <" + o + "> cannot accept path data. " + K), !1;
        if (
          ((g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
          (c = e.map || tt.defaultMap),
          (this._prop = e.prop),
          (this._render = e.render || tt.defaultRender),
          (this._apply =
            "updateTarget" in e ? e.updateTarget : tt.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision)),
          (this._tween = r),
          h)
        ) {
          if (
            ((this._target = t),
            (w = "object" == typeof e.precompile),
            (f = this._prop ? t[this._prop] : t.getAttribute(i)),
            this._prop ||
              t.getAttributeNS(null, "data-original") ||
              t.setAttributeNS(null, "data-original", f),
            "d" === i || this._prop)
          ) {
            if (
              ((f = stringToRawPath(w ? e.precompile[0] : f)),
              (d = stringToRawPath(w ? e.precompile[1] : h)),
              !w && !Z(f, d, g, c, O))
            )
              return !1;
            for (
              ("log" !== e.precompile && !0 !== e.precompile) ||
                M(
                  'precompile:["' +
                    rawPathToString(f) +
                    '","' +
                    rawPathToString(d) +
                    '"]'
                ),
                (S = "linear" !== (e.type || tt.defaultType)) &&
                  ((f = ea(f, e.smoothTolerance)),
                  (d = ea(d, e.smoothTolerance)),
                  f.size || Q(f),
                  d.size || Q(d),
                  (b = fa(j[0])),
                  (this._origin = f.origin =
                    { x: f.left + b.x * f.width, y: f.top + b.y * f.height }),
                  j[1] && (b = fa(j[1])),
                  (this._eOrigin = {
                    x: d.left + b.x * d.width,
                    y: d.top + b.y * d.height,
                  })),
                this._rawPath = t._gsRawPath = f,
                P = f.length;
              -1 < --P;

            )
              for (
                v = f[P],
                  y = d[P],
                  p = v.isSmooth || [],
                  u = y.isSmooth || [],
                  m = v.length,
                  _ = I = 0;
                _ < m;
                _ += 2
              )
                (y[_] === v[_] && y[_ + 1] === v[_ + 1]) ||
                  (S
                    ? p[_] && u[_]
                      ? ((x = v.smoothData),
                        (T = y.smoothData),
                        (N = _ + (_ === m - 4 ? 7 - m : 5)),
                        (this._controlPT = {
                          _next: this._controlPT,
                          i: _,
                          j: P,
                          l1s: x[_ + 1],
                          l1c: T[_ + 1] - x[_ + 1],
                          l2s: x[N],
                          l2c: T[N] - x[N],
                        }),
                        (s = this._tweenRotation(v, y, _ + 2)),
                        this._tweenRotation(v, y, _, s),
                        this._tweenRotation(v, y, N - 1, s),
                        (_ += 4))
                      : this._tweenRotation(v, y, _)
                    : ((s = this.add(v, _, v[_], y[_])),
                      (s = this.add(v, _ + 1, v[_ + 1], y[_ + 1]) || s)));
          } else
            s = this.add(
              t,
              "setAttribute",
              t.getAttribute(i) + "",
              h + "",
              n,
              a,
              0,
              ca(g),
              i
            );
          S &&
            (this.add(this._origin, "x", this._origin.x, this._eOrigin.x),
            (s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y))),
            s && (this._props.push("morphSVG"), (s.end = h), (s.endProp = i));
        }
        return 1;
      },
      render: function render(t, e) {
        for (
          var r,
            n,
            a,
            o,
            i,
            s,
            h,
            l,
            g,
            c,
            p,
            u,
            f = e._rawPath,
            d = e._controlPT,
            _ = e._anchorPT,
            P = e._rnd,
            m = e._target,
            v = e._pt;
          v;

        )
          v.r(t, v.d), (v = v._next);
        if (1 === t && e._apply)
          for (v = e._pt; v; )
            v.end &&
              (e._prop
                ? (m[e._prop] = v.end)
                : m.setAttribute(v.endProp, v.end)),
              (v = v._next);
        else if (f) {
          for (; _; )
            (i = _.sa + t * _.ca),
              (o = _.sl + t * _.cl),
              (_.t[_.i] = e._origin.x + j(i) * o),
              (_.t[_.i + 1] = e._origin.y + L(i) * o),
              (_ = _._next);
          for (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; d; )
            (u =
              (s = d.i) + (s === (a = f[d.j]).length - 4 ? 7 - a.length : 5)),
              (i = w(a[u] - a[s + 1], a[u - 1] - a[s])),
              (c = L(i)),
              (p = j(i)),
              (l = a[s + 2]),
              (g = a[s + 3]),
              (o = d.l1s + n * d.l1c),
              (a[s] = l - p * o),
              (a[s + 1] = g - c * o),
              (o = d.l2s + n * d.l2c),
              (a[u - 1] = l + p * o),
              (a[u] = g + c * o),
              (d = d._next);
          if (((m._gsRawPath = f), e._apply)) {
            for (r = "", h = 0; h < f.length; h++)
              for (
                o = (a = f[h]).length,
                  r +=
                    "M" +
                    ((a[0] * P) | 0) / P +
                    " " +
                    ((a[1] * P) | 0) / P +
                    " C",
                  s = 2;
                s < o;
                s++
              )
                r += ((a[s] * P) | 0) / P + " ";
            e._prop ? (m[e._prop] = r) : m.setAttribute("d", r);
          }
        }
        e._render && f && e._render.call(e._tween, f, m);
      },
      kill: function kill() {
        this._pt = this._rawPath = 0;
      },
      getRawPath: function getRawPath(t) {
        var e,
          r = (t = (m(t) && n.test(t) && document.querySelector(t)) || t)
            .getAttribute
            ? t
            : 0;
        return r && (t = t.getAttribute("d"))
          ? (r._gsPath || (r._gsPath = {}),
            (e = r._gsPath[t]) && !e._dirty
              ? e
              : (r._gsPath[t] = stringToRawPath(t)))
          : t
          ? m(t)
            ? stringToRawPath(t)
            : s(t[0])
            ? [t]
            : t
          : console.warn(
              "Expecting a <path> element or an SVG path data string"
            );
      },
      stringToRawPath: stringToRawPath,
      rawPathToString: rawPathToString,
      normalizeStrings: function normalizeStrings(t, e, r) {
        var n = r.shapeIndex,
          a = r.map,
          o = [t, e];
        return $(o, n, a), o;
      },
      pathFilter: $,
      pointsFilter: ba,
      getTotalSize: Q,
      equalizeSegmentQuantity: Z,
      convertToPath: function convertToPath$1(t, e) {
        return C(t).map(function (t) {
          return convertToPath(t, !1 !== e);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: !0,
      defaultMap: "size",
    };
  y() && r.registerPlugin(tt), (t.MorphSVGPlugin = tt), (t.default = tt);
  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  } else {
    delete t.default;
  }
});

/*!
 * EasePack 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function f() {
    return (
      w ||
      ("undefined" != typeof window &&
        (w = window.gsap) &&
        w.registerPlugin &&
        w)
    );
  }
  function g(e, n) {
    return !!(void 0 === e ? n : e && !~(e + "").indexOf("false"));
  }
  function h(e) {
    if ((w = e || f())) {
      r = w.registerEase;
      var n,
        t = w.parseEase(),
        o = function createConfig(t) {
          return function (e) {
            var n = 0.5 + e / 2;
            t.config = function (e) {
              return t(2 * (1 - e) * e * n + e * e);
            };
          };
        };
      for (n in t) t[n].config || o(t[n]);
      for (n in (r("slow", a), r("expoScale", s), r("rough", u), c))
        "version" !== n && w.core.globals(n, c[n]);
    }
  }
  function i(e, n, t) {
    var o = (e = Math.min(1, e || 0.7)) < 1 ? (n || 0 === n ? n : 0.7) : 0,
      r = (1 - e) / 2,
      i = r + e,
      a = g(t);
    return function (e) {
      var n = e + (0.5 - e) * o;
      return e < r
        ? a
          ? 1 - (e = 1 - e / r) * e
          : n - (e = 1 - e / r) * e * e * e * n
        : i < e
        ? a
          ? 1 === e
            ? 0
            : 1 - (e = (e - i) / r) * e
          : n + (e - n) * (e = (e - i) / r) * e * e * e
        : a
        ? 1
        : n;
    };
  }
  function j(n, e, t) {
    var o = Math.log(e / n),
      r = e - n;
    return (
      (t = t && w.parseEase(t)),
      function (e) {
        return (n * Math.exp(o * (t ? t(e) : e)) - n) / r;
      }
    );
  }
  function k(e, n, t) {
    (this.t = e),
      (this.v = n),
      t && ((((this.next = t).prev = this).c = t.v - n), (this.gap = t.t - e));
  }
  function l(e) {
    "object" != typeof e && (e = { points: +e || 20 });
    for (
      var n,
        t,
        o,
        r,
        i,
        a,
        f,
        s = e.taper || "none",
        u = [],
        c = 0,
        p = 0 | (+e.points || 20),
        l = p,
        v = g(e.randomize, !0),
        d = g(e.clamp),
        h = w ? w.parseEase(e.template) : 0,
        x = 0.4 * (+e.strength || 1);
      -1 < --l;

    )
      (n = v ? Math.random() : (1 / p) * l),
        (t = h ? h(n) : n),
        (o =
          "none" === s
            ? x
            : "out" === s
            ? (r = 1 - n) * r * x
            : "in" === s
            ? n * n * x
            : n < 0.5
            ? (r = 2 * n) * r * 0.5 * x
            : (r = 2 * (1 - n)) * r * 0.5 * x),
        v
          ? (t += Math.random() * o - 0.5 * o)
          : l % 2
          ? (t += 0.5 * o)
          : (t -= 0.5 * o),
        d && (1 < t ? (t = 1) : t < 0 && (t = 0)),
        (u[c++] = { x: n, y: t });
    for (
      u.sort(function (e, n) {
        return e.x - n.x;
      }),
        a = new k(1, 1, null),
        l = p;
      l--;

    )
      (i = u[l]), (a = new k(i.x, i.y, a));
    return (
      (f = new k(0, 0, a.t ? a : a.next)),
      function (e) {
        var n = f;
        if (e > n.t) {
          for (; n.next && e >= n.t; ) n = n.next;
          n = n.prev;
        } else for (; n.prev && e <= n.t; ) n = n.prev;
        return (f = n).v + ((e - n.t) / n.gap) * n.c;
      }
    );
  }
  var w,
    r,
    a = i(0.7);
  (a.ease = a).config = i;
  var s = j(1, 2);
  s.config = j;
  var u = l();
  (u.ease = u).config = l;
  var c = { SlowMo: a, RoughEase: u, ExpoScaleEase: s };
  for (var n in c) (c[n].register = h), (c[n].version = "3.6.1");
  f() && w.registerPlugin(a),
    (e.EasePack = c),
    (e.ExpoScaleEase = s),
    (e.RoughEase = u),
    (e.SlowMo = a),
    (e.default = c);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
  "use strict";
  var i = Array.prototype.slice,
    n = t.console,
    d =
      void 0 === n
        ? function () {}
        : function (t) {
            n.error(t);
          };
  function s(h, s, c) {
    (c = c || e || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
        }),
      (c.fn[h] = function (t) {
        return "string" == typeof t
          ? (function (t, o, r) {
              var a,
                l = "$()." + h + '("' + o + '")';
              return (
                t.each(function (t, e) {
                  var i = c.data(e, h);
                  if (i) {
                    var n = i[o];
                    if (n && "_" != o.charAt(0)) {
                      var s = n.apply(i, r);
                      a = void 0 === a ? s : a;
                    } else d(l + " is not a valid method");
                  } else d(h + " not initialized. Cannot call methods, i.e. " + l);
                }),
                void 0 !== a ? a : t
              );
            })(this, t, i.call(arguments, 1))
          : ((function (t, n) {
              t.each(function (t, e) {
                var i = c.data(e, h);
                i
                  ? (i.option(n), i._init())
                  : ((i = new s(e, n)), c.data(e, h, i));
              });
            })(this, t),
            this);
      }),
      o(c));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = s);
  }
  return o(e || t.jQuery), s;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s];
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function m(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var i =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      y = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      b = y.length;
    function E(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          i(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    var S,
      C = !1;
    function x(t) {
      if (
        ((function () {
          if (!C) {
            C = !0;
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style.boxSizing = "border-box");
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var i = E(t);
            (S = 200 == Math.round(m(i.width))),
              (x.isBoxSizeOuter = S),
              e.removeChild(t);
          }
        })(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = E(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < b;
              e++
            ) {
              t[y[e]] = 0;
            }
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var n = (i.isBorderBox = "border-box" == e.boxSizing), s = 0;
          s < b;
          s++
        ) {
          var o = y[s],
            r = e[o],
            a = parseFloat(r);
          i[o] = isNaN(a) ? 0 : a;
        }
        var l = i.paddingLeft + i.paddingRight,
          h = i.paddingTop + i.paddingBottom,
          c = i.marginLeft + i.marginRight,
          d = i.marginTop + i.marginBottom,
          u = i.borderLeftWidth + i.borderRightWidth,
          f = i.borderTopWidth + i.borderBottomWidth,
          p = n && S,
          g = m(e.width);
        !1 !== g && (i.width = g + (p ? 0 : l + u));
        var v = m(e.height);
        return (
          !1 !== v && (i.height = v + (p ? 0 : h + f)),
          (i.innerWidth = i.width - (l + u)),
          (i.innerHeight = i.height - (h + f)),
          (i.outerWidth = i.width + c),
          (i.outerHeight = i.height + d),
          i
        );
      }
    }
    return x;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (h, o) {
    var c = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (c.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (c.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (c.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), o(t, e))) return t;
      }),
      (c.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (c.filterFindElements = function (t, n) {
        t = c.makeArray(t);
        var s = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                  s.push(e[i]);
              } else s.push(t);
          }),
          s
        );
      }),
      (c.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            i = this;
          this[o] = setTimeout(function () {
            s.apply(i, e), delete i[o];
          }, n);
        };
      }),
      (c.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (c.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var d = h.console;
    return (
      (c.htmlInit = function (a, l) {
        c.docReady(function () {
          var t = c.toDashed(l),
            s = "data-" + t,
            e = document.querySelectorAll("[" + s + "]"),
            i = document.querySelectorAll(".js-" + t),
            n = c.makeArray(e).concat(c.makeArray(i)),
            o = s + "-options",
            r = h.jQuery;
          n.forEach(function (e) {
            var t,
              i = e.getAttribute(s) || e.getAttribute(o);
            try {
              t = i && JSON.parse(i);
            } catch (t) {
              return void (
                d &&
                d.error("Error parsing " + s + " on " + e.className + ": " + t)
              );
            }
            var n = new a(e, t);
            r && r.data(e, l, n);
          });
        });
      }),
      c
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("get-size")))
      : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = i(e, e.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t = this.parent.originSide;
        this.element.style[t] = "";
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            "left" == this.parent.originSide ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("fizzy-ui-utils")))
      : ((e.Flickity = e.Flickity || {}),
        (e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          1 < this.cells.length &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0];
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth;
          this.dispatchEvent("scroll", null, [i, e]);
        }
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          2 < this.restingFrames &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = 0 < e ? i : 0;
          s.wrapShift(o), (e -= s.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      },
      applySelectedAttraction: function () {
        if (
          !(this.isDraggable && this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction;
          this.applyForce(t);
        }
      },
    };
    return i;
  }),
  (function (r, a) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = a(
        r,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var t = r.Flickity;
      r.Flickity = a(
        r,
        r.EvEmitter,
        r.getSize,
        r.fizzyUIUtils,
        t.Cell,
        t.Slide,
        t.animatePrototype
      );
    }
  })(window, function (n, t, e, a, i, r, s) {
    var l = n.jQuery,
      o = n.getComputedStyle,
      h = n.console;
    function c(t, e) {
      for (t = a.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var d = 0,
      u = {};
    function f(t, e) {
      var i = a.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var n = u[this.element.flickityGUID];
          return n.option(e), n;
        }
        l && (this.$element = l(this.element)),
          (this.options = a.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    (f.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (f.createMethods = []);
    var p = f.prototype;
    a.extend(p, t.prototype),
      (p._create = function () {
        var t = (this.guid = ++d);
        for (var e in ((this.element.flickityGUID = t),
        ((u[t] = this).selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? "right" : "left"),
        (this.viewport = document.createElement("div")),
        (this.viewport.className = "flickity-viewport"),
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) &&
          n.addEventListener("resize", this),
        this.options.on)) {
          var i = this.options.on[e];
          this.on(e, i);
        }
        f.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        a.extend(this.options, t);
      }),
      (p.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add("flickity-enabled"),
          this.options.rightToLeft &&
            this.element.classList.add("flickity-rtl"),
          this.getSize(),
          c(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener("keydown", this)),
          this.emitEvent("activate"),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent("ready"));
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return a.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new i(t, this);
        }, this);
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (0 < t) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var n = new r(this);
          this.slides.push(n);
          var s = "left" == this.originSide ? "marginRight" : "marginLeft",
            o = this._getCanCellFit();
          this.cells.forEach(function (t, e) {
            if (n.cells.length) {
              var i =
                n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
              o.call(this, e, i) ||
                (n.updateTarget(), (n = new r(this)), this.slides.push(n)),
                n.addCell(t);
            } else n.addCell(t);
          }, this),
            n.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (p.getSize = function () {
        (this.size = e(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (p.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            s = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            r = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            s
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, o)),
                (t.target = Math.min(t.target, r)));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), l && this.$element)) {
          var s = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
          if (e) {
            var o = l.Event(e);
            (o.type = t), (s = o);
          }
          this.$element.trigger(s, i);
        }
      }),
      (p.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = a.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var n = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != n && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e),
          n = Math.abs(i - this.selectedIndex),
          s = Math.abs(i + e - this.selectedIndex),
          o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n
          ? (t += e)
          : !this.isDragSelect && o < n && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : e <= t && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t).select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
          if (t && "string" == typeof t)
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          var e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
      }),
      (p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var s = this.getCellSlideIndex(n);
          this.select(s, e, i);
        }
      }),
      (p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = a.makeArray(t);
        var i = [];
        return (
          t.forEach(function (t) {
            var e = this.getCell(t);
            e && i.push(e);
          }, this),
          i
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return (
          e || ((t = a.getParent(t, ".flickity-slider > *")), this.getCell(t))
        );
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
          var o = this.options.wrapAround ? a.modulo(s, i) : s,
            r = this.slides[o];
          r && (n = n.concat(r.getCellElements()));
        }
        return n;
      }),
      (p.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
          if (t.match(/^[#\.]?[\d\/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      a.debounceMethod(f, "onresize", 150),
      (p.resize = function () {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != o(this.element, ":after").content.indexOf("flickity")
            ? this.activate()
            : this.deactivate());
      }),
      (p.onkeydown = function (t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = f.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (f.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        },
      }),
      (p.focus = function () {
        var t = n.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          n.pageYOffset != t && n.scrollTo(n.pageXOffset, t);
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          c(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(),
          n.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          l && this.$element && l.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete u[this.guid];
      }),
      a.extend(p, s),
      (f.data = function (t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e];
      }),
      a.htmlInit(f, "flickity"),
      l && l.bridget && l.bridget("flickity", f),
      (f.setJQuery = function (t) {
        l = t;
      }),
      (f.Cell = i),
      (f.Slide = r),
      f
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unipointer/unipointer",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.Unipointer = i(e, e.EvEmitter));
  })(window, function (s, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (i.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (i._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e)
            ? "addEventListener"
            : "removeEventListener",
          n = "mousedown";
        s.PointerEvent
          ? (n = "pointerdown")
          : "ontouchstart" in s && (n = "touchstart"),
          t[i](n, this);
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (i.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (i.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (i.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (i._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (i.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var n = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    };
    return (
      (i._bindPostStartEvents = function (t) {
        if (t) {
          var e = n[t.type];
          e.forEach(function (t) {
            s.addEventListener(t, this);
          }, this),
            (this._boundPointerEvents = e);
        }
      }),
      (i._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            s.removeEventListener(t, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (i.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (i.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (i.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (i._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (i.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (i.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (i.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (i.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (i._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (i._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (i._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (i.pointerDone = function () {}),
      (i.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (i.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (i._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (i.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (e.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      e
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unidragger/unidragger",
          ["unipointer/unipointer"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("unipointer")))
      : (e.Unidragger = i(e, e.Unipointer));
  })(window, function (o, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (i.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (i._bindHandles = function (t) {
        for (
          var e = (t = void 0 === t || t)
              ? "addEventListener"
              : "removeEventListener",
            i = t ? this._touchActionValue : "",
            n = 0;
          n < this.handles.length;
          n++
        ) {
          var s = this.handles[n];
          this._bindStartEvent(s, t),
            s[e]("click", this),
            o.PointerEvent && (s.style.touchAction = i);
        }
      }),
      (i._touchActionValue = "none"),
      (i.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = e),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (i.okayPointerDown = function (t) {
        var e = s[t.target.nodeName],
          i = r[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (i.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (i.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (i._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (i.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (i._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (i._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (i.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (i._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (i.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (i._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (i.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (i.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (i._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (i.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (e.getPointerPoint = t.getPointerPoint),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
  })(window, function (i, t, e, a) {
    a.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
      t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), (n._touchActionValue = "pan-y");
    var s = "createTouch" in document,
      o = !1;
    (n._createDrag = function () {
      this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        s && !o && (i.addEventListener("touchmove", function () {}), (o = !0));
    }),
      (n.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (n.updateDraggable = function () {
        ">1" == this.options.draggable
          ? (this.isDraggable = 1 < this.slides.length)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (n.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (n.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (n._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (n.pointerDown = function (t, e) {
        this.isDraggable
          ? this.okayPointerDown(t) &&
            (this._pointerDownPreventDefault(t),
            this.pointerDownFocus(t),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add("is-pointer-down"),
            (this.pointerDownScroll = l()),
            i.addEventListener("scroll", this),
            this._pointerDownDefault(t, e))
          : this._pointerDownDefault(t, e);
      }),
      (n._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    function l() {
      return { x: i.pageXOffset, y: i.pageYOffset };
    }
    return (
      (n.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus();
      }),
      (n._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = r[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (n.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (n.pointerDone = function () {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (n.dragStart = function (t, e) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          i.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", t, [e]));
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x = i.x % this.slideableWidth);
          var s = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = o < s ? 0.5 * (s + o) : s;
            var r = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            s = s < r ? 0.5 * (s + r) : s;
          }
          (this.dragX = s),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, i]);
        }
      }),
      (n.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }
      }),
      (n.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (n._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((n += i), (s = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (n.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          n = this.options.wrapAround && 1 < i,
          s = n ? a.modulo(e, i) : e,
          o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r);
      }),
      (n.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          100 < new Date() - this.dragMoveTime
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (n.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s]);
      }),
      (n.onscroll = function () {
        var t = l(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone();
      }),
      t
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";
    function o(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    ((o.prototype = Object.create(i.prototype))._create = function () {
      (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
      var t = this.parent.options.rightToLeft ? 1 : -1;
      this.isLeft = this.direction == t;
      var e = (this.element = document.createElement("button"));
      (e.className = "flickity-button flickity-prev-next-button"),
        (e.className += this.isPrevious ? " previous" : " next"),
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
      var i = this.createSVG();
      e.appendChild(i),
        this.parent.on("select", this.update.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (o.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (o.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"),
          i = (function (t) {
            return "string" != typeof t
              ? "M " +
                  t.x0 +
                  ",50 L " +
                  t.x1 +
                  "," +
                  (t.y1 + 50) +
                  " L " +
                  t.x2 +
                  "," +
                  (t.y2 + 50) +
                  " L " +
                  t.x3 +
                  ",50  L " +
                  t.x2 +
                  "," +
                  (50 - t.y2) +
                  " L " +
                  t.x1 +
                  "," +
                  (50 - t.y1) +
                  " Z"
              : t;
          })(this.parent.options.arrowShape);
        return (
          e.setAttribute("d", i),
          e.setAttribute("class", "arrow"),
          this.isLeft ||
            e.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(e),
          t
        );
      }),
      (o.prototype.handleEvent = n.handleEvent),
      (o.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (o.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (o.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (o.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
      }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return (
      (r._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new o(-1, this)),
          (this.nextButton = new o(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (r.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (r.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = o),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    ((s.prototype = Object.create(i.prototype))._create = function () {
      (this.holder = document.createElement("ol")),
        (this.holder.className = "flickity-page-dots"),
        (this.dots = []),
        (this.handleClick = this.onClick.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (s.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (s.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement("li");
          (r.className = "dot"),
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (s.prototype.onTap = s.prototype.onClick =
        function (t) {
          var e = t.target;
          if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
          }
        }),
      (s.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function (t, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          function (t, e, i) {
            return n(t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    ((n.prototype = Object.create(t.prototype)).play = function () {
      "playing" != this.state &&
        (document.hidden
          ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
          : ((this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick()));
    }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function () {
        this.player.play();
      }),
      (s.stopPlayer = function () {
        this.player.stop();
      }),
      (s.pausePlayer = function () {
        this.player.pause();
      }),
      (s.unpausePlayer = function () {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, n) {
    var i = e.prototype;
    return (
      (i.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var s = (function (t) {
              var e = document.createDocumentFragment();
              return (
                t.forEach(function (t) {
                  e.appendChild(t.element);
                }),
                e
              );
            })(i),
            o = e == n;
          if (o) this.slider.appendChild(s);
          else {
            var r = this.cells[e].element;
            this.slider.insertBefore(s, r);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (o) this.cells = this.cells.concat(i);
          else {
            var a = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(a);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (i.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (i.prepend = function (t) {
        this.insert(t, 0);
      }),
      (i.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var i = this.cells.length - 1;
          e.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (i = Math.min(e, i)), n.removeFrom(this.cells, t);
          }, this),
            this.cellChange(i, !0);
        }
      }),
      (i.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (i.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    function s(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    return (
      (i._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (i.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            n = [];
          i.forEach(function (t) {
            var e = (function (t) {
              if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                  i = t.getAttribute("data-flickity-lazyload-src"),
                  n = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || i || n) return [t];
              }
              var s = t.querySelectorAll(
                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
              );
              return o.makeArray(s);
            })(t);
            n = n.concat(e);
          }),
            n.forEach(function (t) {
              new s(t, this);
            }, this);
        }
      }),
      (s.prototype.handleEvent = o.handleEvent),
      (s.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (s.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (s.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (s.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = s),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/index",
          [
            "./flickity",
            "./drag",
            "./prev-next-button",
            "./page-dots",
            "./player",
            "./add-remove-cell",
            "./lazyload",
          ],
          e
        )
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity-as-nav-for/as-nav-for",
          ["flickity/js/index", "fizzy-ui-utils/utils"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return (
      (t._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function () {
            e.setNavCompanion(t);
          });
        }
      }),
      (t.setNavCompanion = function (t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
          this.navCompanion = e;
          var i = this;
          (this.onNavCompanionSelect = function () {
            i.navCompanionSelect();
          }),
            e.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (t.navCompanionSelect = function (t) {
        var e = this.navCompanion && this.navCompanion.selectedCells;
        if (e) {
          var i = e[0],
            n = this.navCompanion.cells.indexOf(i),
            s = n + e.length - 1,
            o = Math.floor(
              (function (t, e, i) {
                return (e - t) * i + t;
              })(n, s, this.navCompanion.cellAlign)
            );
          if (
            (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length))
          ) {
            var r = this.cells.slice(n, 1 + s);
            (this.navSelectedElements = r.map(function (t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (t.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
          t.classList[e]("is-nav-selected");
        });
      }),
      (t.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (t.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (t.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (t.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (t.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      n
    );
  }),
  (function (e, i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "imagesloaded/imagesloaded",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.imagesLoaded = i(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    var s = e.jQuery,
      o = e.console;
    function r(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var a = Array.prototype.slice;
    function l(t, e, i) {
      if (!(this instanceof l)) return new l(t, e, i);
      var n = t;
      "string" == typeof t && (n = document.querySelectorAll(t)),
        n
          ? ((this.elements = (function (t) {
              return Array.isArray(t)
                ? t
                : "object" == typeof t && "number" == typeof t.length
                ? a.call(t)
                : [t];
            })(n)),
            (this.options = r({}, this.options)),
            "function" == typeof e ? (i = e) : r(this.options, e),
            i && this.on("always", i),
            this.getImages(),
            s && (this.jqDeferred = new s.Deferred()),
            setTimeout(this.check.bind(this)))
          : o.error("Bad element for imagesLoaded " + (n || t));
    }
    ((l.prototype = Object.create(t.prototype)).options = {}),
      (l.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (l.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
          }
        }
      });
    var h = { 1: !0, 9: !0, 11: !0 };
    function i(t) {
      this.img = t;
    }
    function n(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (l.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (l.prototype.addImage = function (t) {
        var e = new i(t);
        this.images.push(e);
      }),
      (l.prototype.addBackground = function (t, e) {
        var i = new n(t, e);
        this.images.push(i);
      }),
      (l.prototype.check = function () {
        var n = this;
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (l.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && o && o.log("progress: " + i, t, e);
      }),
      (l.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      ((i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (n.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (l.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((s = t).fn.imagesLoaded = function (t, e) {
            return new l(this, t, e).jqDeferred.promise(s(this));
          });
      }),
      l.makeJQueryPlugin(),
      l
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          ["flickity/js/index", "imagesloaded/imagesloaded"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(i, require("flickity"), require("imagesloaded")))
      : (i.Flickity = n(i, i.Flickity, i.imagesLoaded));
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
          var n = this;
          i(this.slider).on("progress", function (t, e) {
            var i = n.getParentCell(e.img);
            n.cellSizeChange(i && i.element),
              n.options.freeScroll || n.positionSliderAtSelected();
          });
        }
      }),
      e
    );
  });

/*!
 * SplitText 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var _ =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function k(D) {
    return e.getComputedStyle(D);
  }
  function n(D, u) {
    var e;
    return i(D)
      ? D
      : "string" == (e = typeof D) && !u && D
      ? E.call(X.querySelectorAll(D), 0)
      : D && "object" == e && "length" in D
      ? E.call(D, 0)
      : D
      ? [D]
      : [];
  }
  function o(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function p(D, u) {
    for (var e, t = u.length; -1 < --t; )
      if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
  }
  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
      }
    );
  }
  function s(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else (3 !== t && 4 !== t) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function t(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }
  function u(D, u, e) {
    for (var t; D && D !== u; ) {
      if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function v(D) {
    var u,
      e,
      t = n(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)
      (e = t[u])._isSplit
        ? v(e)
        : u && e.previousSibling && 3 === e.previousSibling.nodeType
        ? ((e.previousSibling.nodeValue +=
            3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue),
          D.removeChild(e))
        : 3 !== e.nodeType &&
          (D.insertBefore(e.firstChild, e), D.removeChild(e));
  }
  function w(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function x(D, e, F, C, i, n, E) {
    var r,
      l,
      p,
      d,
      a,
      h,
      B,
      f,
      A,
      c,
      x,
      g,
      y = k(D),
      _ = w("paddingLeft", y),
      b = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      m = w("paddingTop", y) + w("paddingBottom", y),
      N = w("paddingLeft", y) + w("paddingRight", y),
      L = w("fontSize", y) * (e.lineThreshold || 0.2),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [],
      Q = "flex" === y.display,
      U = D.style.display;
    for (
      J && (I = I.split("++").join("")),
        Q && (D.style.display = "block"),
        p = (l = D.getElementsByTagName("*")).length,
        a = [],
        r = 0;
      r < p;
      r++
    )
      a[r] = l[r];
    if (z || G)
      for (r = 0; r < p; r++)
        ((h = (d = a[r]).parentNode === D) || G || (q && !P)) &&
          ((g = d.offsetTop),
          z &&
            h &&
            Math.abs(g - b) > L &&
            ("BR" !== d.nodeName || 0 === r) &&
            ((B = []), z.push(B), (b = g)),
          G &&
            ((d._x = d.offsetLeft),
            (d._y = g),
            (d._w = d.offsetWidth),
            (d._h = d.offsetHeight)),
          z &&
            (((d._isSplit && h) ||
              (!q && h) ||
              (P && h) ||
              (!P &&
                d.parentNode.parentNode === D &&
                !d.parentNode._isSplit)) &&
              (B.push(d), (d._x -= _), u(d, D, j) && (d._wordEnd = !0)),
            "BR" === d.nodeName &&
              ((d.nextSibling && "BR" === d.nextSibling.nodeName) || 0 === r) &&
              z.push([])));
    for (r = 0; r < p; r++)
      if (((h = (d = a[r]).parentNode === D), "BR" !== d.nodeName))
        if (
          (G &&
            ((A = d.style),
            P || h || ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
            (A.left = d._x + "px"),
            (A.top = d._y + "px"),
            (A.position = "absolute"),
            (A.display = "block"),
            (A.width = d._w + 1 + "px"),
            (A.height = d._h + "px")),
          !P && q)
        )
          if (d._isSplit)
            for (
              d._next = l = d.nextSibling, d.parentNode.appendChild(d);
              l && 3 === l.nodeType && " " === l.textContent;

            )
              (d._next = l.nextSibling),
                d.parentNode.appendChild(l),
                (l = l.nextSibling);
          else
            d.parentNode._isSplit
              ? ((d._parent = d.parentNode),
                !d.previousSibling &&
                  d.firstChild &&
                  (d.firstChild._isFirst = !0),
                d.nextSibling &&
                  " " === d.nextSibling.textContent &&
                  !d.nextSibling.nextSibling &&
                  K.push(d.nextSibling),
                (d._next =
                  d.nextSibling && d.nextSibling._isFirst
                    ? null
                    : d.nextSibling),
                d.parentNode.removeChild(d),
                a.splice(r--, 1),
                p--)
              : h ||
                ((g = !d.nextSibling && u(d.parentNode, D, j)),
                d.parentNode._parent && d.parentNode._parent.appendChild(d),
                g && d.parentNode.appendChild(X.createTextNode(" ")),
                "span" === M && (d.style.display = "inline"),
                H.push(d));
        else
          d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
            ? O.push(d)
            : q &&
              !d._isSplit &&
              ("span" === M && (d.style.display = "inline"), H.push(d));
      else
        z || G
          ? (d.parentNode && d.parentNode.removeChild(d), a.splice(r--, 1), p--)
          : P || D.appendChild(d);
    for (r = K.length; -1 < --r; ) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (
        G &&
          ((c = X.createElement(M)),
          D.appendChild(c),
          (x = c.offsetWidth + "px"),
          (g = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (f = " " === j && (!G || (!P && !q)), r = 0; r < z.length; r++) {
        for (
          B = z[r],
            (c = X.createElement(M)).style.cssText =
              "display:block;text-align:" +
              W +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? r + 1 : "")),
            V.push(c),
            p = B.length,
            l = 0;
          l < p;
          l++
        )
          "BR" !== B[l].nodeName &&
            ((d = B[l]),
            c.appendChild(d),
            f && d._wordEnd && c.appendChild(X.createTextNode(" ")),
            G &&
              (0 === l &&
                ((c.style.top = d._y + "px"), (c.style.left = _ + g + "px")),
              (d.style.top = "0px"),
              g && (d.style.left = d._x - g + "px")));
        0 === p
          ? (c.innerHTML = "&nbsp;")
          : P || q || (v(c), s(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = x), (c.style.height = d._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = A;
    }
    G &&
      (E > D.clientHeight &&
        ((D.style.height = E - m + "px"),
        D.clientHeight < E && (D.style.height = E + S + "px")),
      n > D.clientWidth &&
        ((D.style.width = n - N + "px"),
        D.clientWidth < n && (D.style.width = n + T + "px"))),
      Q && (U ? (D.style.display = U) : D.style.removeProperty("display")),
      t(F, H),
      P && t(C, O),
      t(i, V);
  }
  function y(D, u, e, t) {
    var F,
      C,
      i,
      n,
      E,
      r,
      l,
      d,
      a = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + a + ">",
      x = 1,
      g = u.specialChars
        ? "function" == typeof u.specialChars
          ? u.specialChars
          : p
        : null,
      y = X.createElement("div"),
      v = D.parentNode;
    for (
      v.insertBefore(y, D),
        y.textContent = D.nodeValue,
        v.removeChild(D),
        l =
          -1 !==
          (F = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })((D = y))).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")),
        l && (F = F.split("<").join("{{LT}}")),
        E = F.length,
        C = (" " === F.charAt(0) ? A : "") + e(),
        i = 0;
      i < E;
      i++
    )
      if (((r = F.charAt(i)), g && (d = g(F.substr(i), u.specialChars))))
        (r = F.substr(i, d || 1)),
          (C += h && " " !== r ? t() + r + "</" + a + ">" : r),
          (i += d - 1);
      else if (r === f && F.charAt(i - 1) !== f && i) {
        for (C += x ? c : "", x = 0; F.charAt(i + 1) === f; ) (C += A), i++;
        i === E - 1
          ? (C += A)
          : ")" !== F.charAt(i + 1) && ((C += A + e()), (x = 1));
      } else
        "{" === r && "{{LT}}" === F.substr(i, 6)
          ? ((C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}"), (i += 5))
          : (55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319) ||
            (65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039)
          ? ((n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2),
            (C +=
              h && " " !== r
                ? t() + F.substr(i, n) + "</" + a + ">"
                : F.substr(i, n)),
            (i += n - 1))
          : (C += h && " " !== r ? t() + r + "</" + a + ">" : r);
    (D.outerHTML = C + (x ? c : "")), l && s(v, "{{LT}}", "<");
  }
  function z(D, u, e, t) {
    var F,
      C,
      i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, F = 0; F < E; F++)
        ((C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null),
          (3 === C.nodeType && !/\S+/.test(C.nodeValue)) ||
            (s &&
              3 !== C.nodeType &&
              "inline" === k(C).display &&
              ((C.style.display = "inline-block"),
              (C.style.position = "relative")),
            (C._isSplit = !0),
            z(C, u, e, t));
      return (u.absolute = s), void (D._isSplit = !0);
    }
    y(D, u, e, t);
  }
  var X,
    e,
    F,
    C,
    b = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l =
      (((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
          (this.vars = D = D || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = r(D.wordsClass, C),
            n = r(D.charsClass, C);
          -1 < --F;

        )
          (t = this.elements[F]),
            (this._originals[F] = t.innerHTML),
            (u = t.clientHeight),
            (e = t.clientWidth),
            z(t, D, i, n),
            x(t, D, this.chars, this.words, this.lines, e, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (C.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (D, u) {
            return (D.innerHTML = e[u]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (SplitText.create = function create(D, u) {
        return new SplitText(D, u);
      }),
      SplitText);
  function SplitText(D, u) {
    F ||
      (function _initCore() {
        (X = document), (e = window), (F = 1);
      })(),
      (this.elements = n(D)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = u || {}),
      this.split(u);
  }
  (l.version = "3.6.1"), (D.SplitText = l), (D.default = l);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});

/*!
 * DrawSVGPlugin 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function i() {
    return "undefined" != typeof window;
  }
  function j() {
    return a || (i() && (a = window.gsap) && a.registerPlugin && a);
  }
  function m(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function n(e) {
    return parseFloat(e) || 0;
  }
  function o(e, t) {
    var r = n(e);
    return ~e.indexOf("%") ? (r / 100) * t : r;
  }
  function p(e, t) {
    return n(e.getAttribute(t));
  }
  function r(e, t, r, i, s, o) {
    return P(Math.pow((n(r) - n(e)) * s, 2) + Math.pow((n(i) - n(t)) * o, 2));
  }
  function s(e) {
    return console.warn(e);
  }
  function t(e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect");
  }
  function w(e) {
    if (!(e = v(e)[0])) return 0;
    var n,
      i,
      o,
      a,
      f,
      h,
      d,
      l = e.tagName.toLowerCase(),
      u = e.style,
      c = 1,
      g = 1;
    t(e) &&
      ((g = e.getScreenCTM()),
      (c = P(g.a * g.a + g.b * g.b)),
      (g = P(g.d * g.d + g.c * g.c)));
    try {
      i = e.getBBox();
    } catch (e) {
      s(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var _ = i || { x: 0, y: 0, width: 0, height: 0 },
      y = _.x,
      w = _.y,
      x = _.width,
      m = _.height;
    if (
      ((i && (x || m)) ||
        !k[l] ||
        ((x = p(e, k[l][0])),
        (m = p(e, k[l][1])),
        "rect" !== l && "line" !== l && ((x *= 2), (m *= 2)),
        "line" === l &&
          ((y = p(e, "x1")),
          (w = p(e, "y1")),
          (x = Math.abs(x - y)),
          (m = Math.abs(m - w)))),
      "path" === l)
    )
      (a = u.strokeDasharray),
        (u.strokeDasharray = "none"),
        (n = e.getTotalLength() || 0),
        c !== g &&
          s(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (n *= (c + g) / 2),
        (u.strokeDasharray = a);
    else if ("rect" === l) n = 2 * x * c + 2 * m * g;
    else if ("line" === l) n = r(y, w, y + x, w + m, c, g);
    else if ("polyline" === l || "polygon" === l)
      for (
        o = e.getAttribute("points").match(b) || [],
          "polygon" === l && o.push(o[0], o[1]),
          n = 0,
          f = 2;
        f < o.length;
        f += 2
      )
        n += r(o[f - 2], o[f - 1], o[f], o[f + 1], c, g) || 0;
    else
      ("circle" !== l && "ellipse" !== l) ||
        ((h = (x / 2) * c),
        (d = (m / 2) * g),
        (n = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d)))));
    return n || 0;
  }
  function x(e, t) {
    if (!(e = v(e)[0])) return [0, 0];
    t = t || w(e) + 1;
    var r = h.getComputedStyle(e),
      i = r.strokeDasharray || "",
      s = n(r.strokeDashoffset),
      o = i.indexOf(",");
    return (
      o < 0 && (o = i.indexOf(" ")),
      t < (i = o < 0 ? t : n(i.substr(0, o))) && (i = t),
      [-s || 0, i - s || 0]
    );
  }
  function y() {
    i() &&
      ((h = window),
      (l = a = j()),
      (v = a.utils.toArray),
      (d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge")));
  }
  var a,
    v,
    h,
    d,
    l,
    b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    k = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    P = Math.sqrt,
    f = {
      version: "3.6.1",
      name: "drawSVG",
      register: function register(e) {
        (a = e), y();
      },
      init: function init(e, r) {
        if (!e.getBBox) return !1;
        l || y();
        var i,
          s,
          a,
          f = w(e);
        return (
          (this._style = e.style),
          (this._target = e),
          r + "" == "true"
            ? (r = "0 100%")
            : r
            ? -1 === (r + "").indexOf(" ") && (r = "0 " + r)
            : (r = "0 0"),
          (s = (function _parse(e, t, n) {
            var r,
              i,
              s = e.indexOf(" ");
            return (
              (i =
                s < 0
                  ? ((r = void 0 !== n ? n + "" : e), e)
                  : ((r = e.substr(0, s)), e.substr(s + 1))),
              (r = o(r, t)),
              (i = o(i, t)) < r ? [i, r] : [r, i]
            );
          })(r, f, (i = x(e, f))[0])),
          (this._length = m(f)),
          (this._dash = m(i[1] - i[0])),
          (this._offset = m(-i[0])),
          (this._dashPT = this.add(this, "_dash", this._dash, m(s[1] - s[0]))),
          (this._offsetPT = this.add(this, "_offset", this._offset, m(-s[0]))),
          d &&
            (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
            ((s = n(a.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", s, s + 0.01)),
          (this._live = t(e) || ~(r + "").indexOf("live")),
          (this._nowrap = ~(r + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function render(e, t) {
        var n,
          r,
          i,
          s,
          o = t._pt,
          a = t._style;
        if (o) {
          for (
            t._live &&
            (n = w(t._target)) !== t._length &&
            ((r = n / t._length),
            (t._length = n),
            t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
            t._dashPT
              ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
              : (t._dash *= r));
            o;

          )
            o.r(e, o.d), (o = o._next);
          (i = t._dash || (e && 1 !== e && 1e-4) || 0),
            (n = t._length - i + 0.1),
            (s = t._offset),
            i &&
              s &&
              i + Math.abs(s % t._length) > t._length - 0.2 &&
              (s += s < 0 ? 0.1 : -0.1) &&
              (n += 0.1),
            (a.strokeDashoffset = i ? s : s + 0.001),
            (a.strokeDasharray =
              n < 0.2
                ? "none"
                : i
                ? i + "px," + (t._nowrap ? 999999 : n) + "px"
                : "0px, 999999px");
        }
      },
      getLength: w,
      getPosition: x,
    };
  j() && a.registerPlugin(f), (e.DrawSVGPlugin = f), (e.default = f);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

// Preload
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

// Magnific Popup v1.1.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom
(function (a) {
  typeof define == "function" && define.amd
    ? define(["jquery"], a)
    : typeof exports == "object"
    ? a(require("jquery"))
    : a(window.jQuery || window.Zepto);
})(function (a) {
  var b = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    e = "BeforeAppend",
    f = "MarkupParse",
    g = "Open",
    h = "Change",
    i = "mfp",
    j = "." + i,
    k = "mfp-ready",
    l = "mfp-removing",
    m = "mfp-prevent-close",
    n,
    o = function () {},
    p = !!window.jQuery,
    q,
    r = a(window),
    s,
    t,
    u,
    v,
    w = function (a, b) {
      n.ev.on(i + a + j, b);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (b, c) {
      n.ev.triggerHandler(i + b, c),
        n.st.callbacks &&
          ((b = b.charAt(0).toLowerCase() + b.slice(1)),
          n.st.callbacks[b] &&
            n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));
    },
    z = function (b) {
      if (b !== v || !n.currTemplate.closeBtn)
        (n.currTemplate.closeBtn = a(
          n.st.closeMarkup.replace("%title%", n.st.tClose)
        )),
          (v = b);
      return n.currTemplate.closeBtn;
    },
    A = function () {
      a.magnificPopup.instance ||
        ((n = new o()), n.init(), (a.magnificPopup.instance = n));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (a.transition !== undefined) return !0;
      while (b.length) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (o.prototype = {
    constructor: o,
    init: function () {
      var b = navigator.appVersion;
      (n.isLowIE = n.isIE8 = document.all && !document.addEventListener),
        (n.isAndroid = /android/gi.test(b)),
        (n.isIOS = /iphone|ipad|ipod/gi.test(b)),
        (n.supportsTransition = B()),
        (n.probablyMobile =
          n.isAndroid ||
          n.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (s = a(document)),
        (n.popupsCache = {});
    },
    open: function (b) {
      var c;
      if (b.isObj === !1) {
        (n.items = b.items.toArray()), (n.index = 0);
        var d = b.items,
          e;
        for (c = 0; c < d.length; c++) {
          (e = d[c]), e.parsed && (e = e.el[0]);
          if (e === b.el[0]) {
            n.index = c;
            break;
          }
        }
      } else
        (n.items = a.isArray(b.items) ? b.items : [b.items]),
          (n.index = b.index || 0);
      if (n.isOpen) {
        n.updateItemHTML();
        return;
      }
      (n.types = []),
        (u = ""),
        b.mainEl && b.mainEl.length ? (n.ev = b.mainEl.eq(0)) : (n.ev = s),
        b.key
          ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}),
            (n.currTemplate = n.popupsCache[b.key]))
          : (n.currTemplate = {}),
        (n.st = a.extend(!0, {}, a.magnificPopup.defaults, b)),
        (n.fixedContentPos =
          n.st.fixedContentPos === "auto"
            ? !n.probablyMobile
            : n.st.fixedContentPos),
        n.st.modal &&
          ((n.st.closeOnContentClick = !1),
          (n.st.closeOnBgClick = !1),
          (n.st.showCloseBtn = !1),
          (n.st.enableEscapeKey = !1)),
        n.bgOverlay ||
          ((n.bgOverlay = x("bg").on("click" + j, function () {
            n.close();
          })),
          (n.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + j, function (a) {
              n._checkIfClose(a.target) && n.close();
            })),
          (n.container = x("container", n.wrap))),
        (n.contentContainer = x("content")),
        n.st.preloader &&
          (n.preloader = x("preloader", n.container, n.st.tLoading));
      var h = a.magnificPopup.modules;
      for (c = 0; c < h.length; c++) {
        var i = h[c];
        (i = i.charAt(0).toUpperCase() + i.slice(1)), n["init" + i].call(n);
      }
      y("BeforeOpen"),
        n.st.showCloseBtn &&
          (n.st.closeBtnInside
            ? (w(f, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (u += " mfp-close-btn-in"))
            : n.wrap.append(z())),
        n.st.alignTop && (u += " mfp-align-top"),
        n.fixedContentPos
          ? n.wrap.css({
              overflow: n.st.overflowY,
              overflowX: "hidden",
              overflowY: n.st.overflowY,
            })
          : n.wrap.css({ top: r.scrollTop(), position: "absolute" }),
        (n.st.fixedBgPos === !1 ||
          (n.st.fixedBgPos === "auto" && !n.fixedContentPos)) &&
          n.bgOverlay.css({ height: s.height(), position: "absolute" }),
        n.st.enableEscapeKey &&
          s.on("keyup" + j, function (a) {
            a.keyCode === 27 && n.close();
          }),
        r.on("resize" + j, function () {
          n.updateSize();
        }),
        n.st.closeOnContentClick || (u += " mfp-auto-cursor"),
        u && n.wrap.addClass(u);
      var l = (n.wH = r.height()),
        m = {};
      if (n.fixedContentPos && n._hasScrollBar(l)) {
        var o = n._getScrollbarSize();
        o && (m.marginRight = o);
      }
      n.fixedContentPos &&
        (n.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var p = n.st.mainClass;
      return (
        n.isIE7 && (p += " mfp-ie7"),
        p && n._addClassToMFP(p),
        n.updateItemHTML(),
        y("BuildControls"),
        a("html").css(m),
        n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)),
        (n._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          n.content
            ? (n._addClassToMFP(k), n._setFocus())
            : n.bgOverlay.addClass(k),
            s.on("focusin" + j, n._onFocusIn);
        }, 16),
        (n.isOpen = !0),
        n.updateSize(l),
        y(g),
        b
      );
    },
    close: function () {
      if (!n.isOpen) return;
      y(c),
        (n.isOpen = !1),
        n.st.removalDelay && !n.isLowIE && n.supportsTransition
          ? (n._addClassToMFP(l),
            setTimeout(function () {
              n._close();
            }, n.st.removalDelay))
          : n._close();
    },
    _close: function () {
      y(b);
      var c = l + " " + k + " ";
      n.bgOverlay.detach(),
        n.wrap.detach(),
        n.container.empty(),
        n.st.mainClass && (c += n.st.mainClass + " "),
        n._removeClassFromMFP(c);
      if (n.fixedContentPos) {
        var e = { marginRight: "" };
        n.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      s.off("keyup" + j + " focusin" + j),
        n.ev.off(j),
        n.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        n.bgOverlay.attr("class", "mfp-bg"),
        n.container.attr("class", "mfp-container"),
        n.st.showCloseBtn &&
          (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) &&
          n.currTemplate.closeBtn &&
          n.currTemplate.closeBtn.detach(),
        n.st.autoFocusLast && n._lastFocusedEl && a(n._lastFocusedEl).focus(),
        (n.currItem = null),
        (n.content = null),
        (n.currTemplate = null),
        (n.prevHeight = 0),
        y(d);
    },
    updateSize: function (a) {
      if (n.isIOS) {
        var b = document.documentElement.clientWidth / window.innerWidth,
          c = window.innerHeight * b;
        n.wrap.css("height", c), (n.wH = c);
      } else n.wH = a || r.height();
      n.fixedContentPos || n.wrap.css("height", n.wH), y("Resize");
    },
    updateItemHTML: function () {
      var b = n.items[n.index];
      n.contentContainer.detach(),
        n.content && n.content.detach(),
        b.parsed || (b = n.parseEl(n.index));
      var c = b.type;
      y("BeforeChange", [n.currItem ? n.currItem.type : "", c]),
        (n.currItem = b);
      if (!n.currTemplate[c]) {
        var d = n.st[c] ? n.st[c].markup : !1;
        y("FirstMarkupParse", d),
          d ? (n.currTemplate[c] = a(d)) : (n.currTemplate[c] = !0);
      }
      t && t !== b.type && n.container.removeClass("mfp-" + t + "-holder");
      var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](
        b,
        n.currTemplate[c]
      );
      n.appendContent(e, c),
        (b.preloaded = !0),
        y(h, b),
        (t = b.type),
        n.container.prepend(n.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, b) {
      (n.content = a),
        a
          ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0
            ? n.content.find(".mfp-close").length || n.content.append(z())
            : (n.content = a)
          : (n.content = ""),
        y(e),
        n.container.addClass("mfp-" + b + "-holder"),
        n.contentContainer.append(n.content);
    },
    parseEl: function (b) {
      var c = n.items[b],
        d;
      c.tagName
        ? (c = { el: a(c) })
        : ((d = c.type), (c = { data: c, src: c.src }));
      if (c.el) {
        var e = n.types;
        for (var f = 0; f < e.length; f++)
          if (c.el.hasClass("mfp-" + e[f])) {
            d = e[f];
            break;
          }
        (c.src = c.el.attr("data-mfp-src")),
          c.src || (c.src = c.el.attr("href"));
      }
      return (
        (c.type = d || n.st.type || "inline"),
        (c.index = b),
        (c.parsed = !0),
        (n.items[b] = c),
        y("ElementParse", c),
        n.items[b]
      );
    },
    addGroup: function (a, b) {
      var c = function (c) {
        (c.mfpEl = this), n._openClick(c, a, b);
      };
      b || (b = {});
      var d = "click.magnificPopup";
      (b.mainEl = a),
        b.items
          ? ((b.isObj = !0), a.off(d).on(d, c))
          : ((b.isObj = !1),
            b.delegate
              ? a.off(d).on(d, b.delegate, c)
              : ((b.items = a), a.off(d).on(d, c)));
    },
    _openClick: function (b, c, d) {
      var e =
        d.midClick !== undefined
          ? d.midClick
          : a.magnificPopup.defaults.midClick;
      if (
        !e &&
        (b.which === 2 || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey)
      )
        return;
      var f =
        d.disableOn !== undefined
          ? d.disableOn
          : a.magnificPopup.defaults.disableOn;
      if (f)
        if (a.isFunction(f)) {
          if (!f.call(n)) return !0;
        } else if (r.width() < f) return !0;
      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()),
        (d.el = a(b.mfpEl)),
        d.delegate && (d.items = c.find(d.delegate)),
        n.open(d);
    },
    updateStatus: function (a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass("mfp-s-" + q),
          !b && a === "loading" && (b = n.st.tLoading);
        var c = { status: a, text: b };
        y("UpdateStatus", c),
          (a = c.status),
          (b = c.text),
          n.preloader.html(b),
          n.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          n.container.addClass("mfp-s-" + a),
          (q = a);
      }
    },
    _checkIfClose: function (b) {
      if (a(b).hasClass(m)) return;
      var c = n.st.closeOnContentClick,
        d = n.st.closeOnBgClick;
      if (c && d) return !0;
      if (
        !n.content ||
        a(b).hasClass("mfp-close") ||
        (n.preloader && b === n.preloader[0])
      )
        return !0;
      if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b)) return !0;
      } else if (c) return !0;
      return !1;
    },
    _addClassToMFP: function (a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height())
      );
    },
    _setFocus: function () {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();
    },
    _onFocusIn: function (b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))
        return n._setFocus(), !1;
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(f, [b, c, d]),
        a.each(c, function (c, d) {
          if (d === undefined || d === !1) return !0;
          e = c.split("_");
          if (e.length > 1) {
            var f = b.find(j + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              g === "replaceWith"
                ? f[0] !== d[0] && f.replaceWith(d)
                : g === "img"
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(j + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (n.scrollbarSize === undefined) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (n.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return n.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: o.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          b ? (b = a.extend(!0, {}, b)) : (b = {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (b) {
      A();
      var c = a(this);
      if (typeof b == "string")
        if (b === "open") {
          var d,
            e = p ? c.data("magnificPopup") : c[0].magnificPopup,
            f = parseInt(arguments[1], 10) || 0;
          e.items
            ? (d = e.items[f])
            : ((d = c), e.delegate && (d = d.find(e.delegate)), (d = d.eq(f))),
            n._openClick({ mfpEl: d }, c, e);
        } else
          n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
      else
        (b = a.extend(!0, {}, b)),
          p ? c.data("magnificPopup", b) : (c[0].magnificPopup = b),
          n.addGroup(c, b);
      return c;
    });
  var C = "inline",
    D,
    E,
    F,
    G = function () {
      F && (E.after(F.addClass(D)).detach(), (F = null));
    };
  a.magnificPopup.registerModule(C, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        n.types.push(C),
          w(b + "." + C, function () {
            G();
          });
      },
      getInline: function (b, c) {
        G();
        if (b.src) {
          var d = n.st.inline,
            e = a(b.src);
          if (e.length) {
            var f = e[0].parentNode;
            f &&
              f.tagName &&
              (E || ((D = d.hiddenClass), (E = x(D)), (D = "mfp-" + D)),
              (F = e.after(E).detach().removeClass(D))),
              n.updateStatus("ready");
          } else n.updateStatus("error", d.tNotFound), (e = a("<div>"));
          return (b.inlineElement = e), e;
        }
        return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c;
      },
    },
  });
  var H = "ajax",
    I,
    J = function () {
      I && a(document.body).removeClass(I);
    },
    K = function () {
      J(), n.req && n.req.abort();
    };
  a.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        n.types.push(H),
          (I = n.st.ajax.cursor),
          w(b + "." + H, K),
          w("BeforeChange." + H, K);
      },
      getAjax: function (b) {
        I && a(document.body).addClass(I), n.updateStatus("loading");
        var c = a.extend(
          {
            url: b.src,
            success: function (c, d, e) {
              var f = { data: c, xhr: e };
              y("ParseAjax", f),
                n.appendContent(a(f.data), H),
                (b.finished = !0),
                J(),
                n._setFocus(),
                setTimeout(function () {
                  n.wrap.addClass(k);
                }, 16),
                n.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (b.finished = b.loadError = !0),
                n.updateStatus(
                  "error",
                  n.st.ajax.tError.replace("%url%", b.src)
                );
            },
          },
          n.st.ajax.settings
        );
        return (n.req = a.ajax(c)), "";
      },
    },
  });
  var L,
    M = function (b) {
      if (b.data && b.data.title !== undefined) return b.data.title;
      var c = n.st.image.titleSrc;
      if (c) {
        if (a.isFunction(c)) return c.call(n, b);
        if (b.el) return b.el.attr(c) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = n.st.image,
          d = ".image";
        n.types.push("image"),
          w(g + d, function () {
            n.currItem.type === "image" &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(b + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              r.off("resize" + j);
          }),
          w("Resize" + d, n.resizeImage),
          n.isLowIE && w("AfterChange", n.resizeImage);
      },
      resizeImage: function () {
        var a = n.currItem;
        if (!a || !a.img) return;
        if (n.st.image.verticalFit) {
          var b = 0;
          n.isLowIE &&
            (b =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", n.wH - b);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (n.content && n.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var b = 0,
          c = a.img[0],
          d = function (e) {
            L && clearInterval(L),
              (L = setInterval(function () {
                if (c.naturalWidth > 0) {
                  n._onImageHasSize(a);
                  return;
                }
                b > 200 && clearInterval(L),
                  b++,
                  b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);
              }, e));
          };
        d(1);
      },
      getImage: function (b, c) {
        var d = 0,
          e = function () {
            b &&
              (b.img[0].complete
                ? (b.img.off(".mfploader"),
                  b === n.currItem &&
                    (n._onImageHasSize(b), n.updateStatus("ready")),
                  (b.hasSize = !0),
                  (b.loaded = !0),
                  y("ImageLoadComplete"))
                : (d++, d < 200 ? setTimeout(e, 100) : f()));
          },
          f = function () {
            b &&
              (b.img.off(".mfploader"),
              b === n.currItem &&
                (n._onImageHasSize(b),
                n.updateStatus("error", g.tError.replace("%url%", b.src))),
              (b.hasSize = !0),
              (b.loaded = !0),
              (b.loadError = !0));
          },
          g = n.st.image,
          h = c.find(".mfp-img");
        if (h.length) {
          var i = document.createElement("img");
          (i.className = "mfp-img"),
            b.el &&
              b.el.find("img").length &&
              (i.alt = b.el.find("img").attr("alt")),
            (b.img = a(i).on("load.mfploader", e).on("error.mfploader", f)),
            (i.src = b.src),
            h.is("img") && (b.img = b.img.clone()),
            (i = b.img[0]),
            i.naturalWidth > 0 ? (b.hasSize = !0) : i.width || (b.hasSize = !1);
        }
        return (
          n._parseMarkup(c, { title: M(b), img_replaceWith: b.img }, b),
          n.resizeImage(),
          b.hasSize
            ? (L && clearInterval(L),
              b.loadError
                ? (c.addClass("mfp-loading"),
                  n.updateStatus("error", g.tError.replace("%url%", b.src)))
                : (c.removeClass("mfp-loading"), n.updateStatus("ready")),
              c)
            : (n.updateStatus("loading"),
              (b.loading = !0),
              b.hasSize ||
                ((b.imgHidden = !0),
                c.addClass("mfp-loading"),
                n.findImageSize(b)),
              c)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        N === undefined &&
          (N = document.createElement("p").style.MozTransform !== undefined),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a = n.st.zoom,
          d = ".zoom",
          e;
        if (!a.enabled || !n.supportsTransition) return;
        var f = a.duration,
          g = function (b) {
            var c = b
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              d = "all " + a.duration / 1e3 + "s " + a.easing,
              e = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              f = "transition";
            return (
              (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
              c.css(e),
              c
            );
          },
          h = function () {
            n.content.css("visibility", "visible");
          },
          i,
          j;
        w("BuildControls" + d, function () {
          if (n._allowZoom()) {
            clearTimeout(i),
              n.content.css("visibility", "hidden"),
              (e = n._getItemToZoom());
            if (!e) {
              h();
              return;
            }
            (j = g(e)),
              j.css(n._getOffset()),
              n.wrap.append(j),
              (i = setTimeout(function () {
                j.css(n._getOffset(!0)),
                  (i = setTimeout(function () {
                    h(),
                      setTimeout(function () {
                        j.remove(), (e = j = null), y("ZoomAnimationEnded");
                      }, 16);
                  }, f));
              }, 16));
          }
        }),
          w(c + d, function () {
            if (n._allowZoom()) {
              clearTimeout(i), (n.st.removalDelay = f);
              if (!e) {
                e = n._getItemToZoom();
                if (!e) return;
                j = g(e);
              }
              j.css(n._getOffset(!0)),
                n.wrap.append(j),
                n.content.css("visibility", "hidden"),
                setTimeout(function () {
                  j.css(n._getOffset());
                }, 16);
            }
          }),
          w(b + d, function () {
            n._allowZoom() && (h(), j && j.remove(), (e = null));
          });
      },
      _allowZoom: function () {
        return n.currItem.type === "image";
      },
      _getItemToZoom: function () {
        return n.currItem.hasSize ? n.currItem.img : !1;
      },
      _getOffset: function (b) {
        var c;
        b
          ? (c = n.currItem.img)
          : (c = n.st.zoom.opener(n.currItem.el || n.currItem));
        var d = c.offset(),
          e = parseInt(c.css("padding-top"), 10),
          f = parseInt(c.css("padding-bottom"), 10);
        d.top -= a(window).scrollTop() - e;
        var g = {
          width: c.width(),
          height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e,
        };
        return (
          O()
            ? (g["-moz-transform"] = g.transform =
                "translate(" + d.left + "px," + d.top + "px)")
            : ((g.left = d.left), (g.top = d.top)),
          g
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (n.currTemplate[P]) {
        var b = n.currTemplate[P].find("iframe");
        b.length &&
          (a || (b[0].src = Q),
          n.isIE8 && b.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        n.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(b + "." + P, function () {
            R();
          });
      },
      getIframe: function (b, c) {
        var d = b.src,
          e = n.st.iframe;
        a.each(e.patterns, function () {
          if (d.indexOf(this.index) > -1)
            return (
              this.id &&
                (typeof this.id == "string"
                  ? (d = d.substr(
                      d.lastIndexOf(this.id) + this.id.length,
                      d.length
                    ))
                  : (d = this.id.call(this, d))),
              (d = this.src.replace("%id%", d)),
              !1
            );
        });
        var f = {};
        return (
          e.srcAction && (f[e.srcAction] = d),
          n._parseMarkup(c, f, b),
          n.updateStatus("ready"),
          c
        );
      },
    },
  });
  var S = function (a) {
      var b = n.items.length;
      return a > b - 1 ? a - b : a < 0 ? b + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = n.st.gallery,
          d = ".mfp-gallery";
        n.direction = !0;
        if (!c || !c.enabled) return !1;
        (u += " mfp-gallery"),
          w(g + d, function () {
            c.navigateByImgClick &&
              n.wrap.on("click" + d, ".mfp-img", function () {
                if (n.items.length > 1) return n.next(), !1;
              }),
              s.on("keydown" + d, function (a) {
                a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next();
              });
          }),
          w("UpdateStatus" + d, function (a, b) {
            b.text && (b.text = T(b.text, n.currItem.index, n.items.length));
          }),
          w(f + d, function (a, b, d, e) {
            var f = n.items.length;
            d.counter = f > 1 ? T(c.tCounter, e.index, f) : "";
          }),
          w("BuildControls" + d, function () {
            if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
              var b = c.arrowMarkup,
                d = (n.arrowLeft = a(
                  b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                ).addClass(m)),
                e = (n.arrowRight = a(
                  b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")
                ).addClass(m));
              d.click(function () {
                n.prev();
              }),
                e.click(function () {
                  n.next();
                }),
                n.container.append(d.add(e));
            }
          }),
          w(h + d, function () {
            n._preloadTimeout && clearTimeout(n._preloadTimeout),
              (n._preloadTimeout = setTimeout(function () {
                n.preloadNearbyImages(), (n._preloadTimeout = null);
              }, 16));
          }),
          w(b + d, function () {
            s.off(d),
              n.wrap.off("click" + d),
              (n.arrowRight = n.arrowLeft = null);
          });
      },
      next: function () {
        (n.direction = !0), (n.index = S(n.index + 1)), n.updateItemHTML();
      },
      prev: function () {
        (n.direction = !1), (n.index = S(n.index - 1)), n.updateItemHTML();
      },
      goTo: function (a) {
        (n.direction = a >= n.index), (n.index = a), n.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a = n.st.gallery.preload,
          b = Math.min(a[0], n.items.length),
          c = Math.min(a[1], n.items.length),
          d;
        for (d = 1; d <= (n.direction ? c : b); d++)
          n._preloadItem(n.index + d);
        for (d = 1; d <= (n.direction ? b : c); d++)
          n._preloadItem(n.index - d);
      },
      _preloadItem: function (b) {
        b = S(b);
        if (n.items[b].preloaded) return;
        var c = n.items[b];
        c.parsed || (c = n.parseEl(b)),
          y("LazyLoad", c),
          c.type === "image" &&
            (c.img = a('<img class="mfp-img" />')
              .on("load.mfploader", function () {
                c.hasSize = !0;
              })
              .on("error.mfploader", function () {
                (c.hasSize = !0), (c.loadError = !0), y("LazyLoadError", c);
              })
              .attr("src", c.src)),
          (c.preloaded = !0);
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = n.st.retina,
            b = a.ratio;
          (b = isNaN(b) ? b() : b),
            b > 1 &&
              (w("ImageHasSize." + U, function (a, c) {
                c.img.css({
                  "max-width": c.img[0].naturalWidth / b,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (c, d) {
                d.src = a.replaceSrc(d, b);
              }));
        }
      },
    },
  }),
    A();
});
