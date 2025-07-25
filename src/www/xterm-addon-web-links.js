/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebLinksAddon = t() : e.WebLinksAddon = t()
}(window, (function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    n.d(r, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WebLinksAddon = void 0;
        var r = n(1)
          , i = new RegExp("(?:^|[^\\da-z\\.-]+)((https?:\\/\\/)((([\\da-z\\.-]+)\\.([a-z\\.]{2,6}))|((\\d{1,3}\\.){3}\\d{1,3})|(localhost))(:\\d{1,5})?((\\/[\\/\\w\\.\\-%~:+@]*)*([^:\"'\\s]))?(\\?[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*)?(#[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*)?)($|[^\\/\\w\\.\\-%]+)");
        function o(e, t) {
            var n = window.open();
            n ? (n.opener = null,
            n.location.href = t) : console.warn("Opening link blocked as opener could not be cleared")
        }
        var a = function() {
            function e(e, t, n) {
                void 0 === e && (e = o),
                void 0 === t && (t = {}),
                void 0 === n && (n = !1),
                this._handler = e,
                this._options = t,
                this._useLinkProvider = n,
                this._options.matchIndex = 1
            }
            return e.prototype.activate = function(e) {
                this._terminal = e,
                this._useLinkProvider && "registerLinkProvider"in this._terminal ? this._linkProvider = this._terminal.registerLinkProvider(new r.WebLinkProvider(this._terminal,i,this._handler)) : this._linkMatcherId = this._terminal.registerLinkMatcher(i, this._handler, this._options)
            }
            ,
            e.prototype.dispose = function() {
                var e;
                void 0 !== this._linkMatcherId && void 0 !== this._terminal && this._terminal.deregisterLinkMatcher(this._linkMatcherId),
                null === (e = this._linkProvider) || void 0 === e || e.dispose()
            }
            ,
            e
        }();
        t.WebLinksAddon = a
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LinkComputer = t.WebLinkProvider = void 0;
        var r = function() {
            function e(e, t, n) {
                this._terminal = e,
                this._regex = t,
                this._handler = n
            }
            return e.prototype.provideLinks = function(e, t) {
                t(i.computeLink(e, this._regex, this._terminal, this._handler))
            }
            ,
            e
        }();
        t.WebLinkProvider = r;
        var i = function() {
            function e() {}
            return e.computeLink = function(t, n, r, i) {
                for (var o, a = new RegExp(n.source,(n.flags || "") + "g"), s = e._translateBufferLineToStringWithWrap(t - 1, !1, r), u = s[0], d = s[1], l = -1, c = []; null !== (o = a.exec(u)); ) {
                    var f = o[1];
                    if (!f) {
                        console.log("match found without corresponding matchIndex");
                        break
                    }
                    if (l = u.indexOf(f, l + 1),
                    a.lastIndex = l + f.length,
                    l < 0)
                        break;
                    for (var p = l + f.length, h = d + 1; p > r.cols; )
                        p -= r.cols,
                        h++;
                    var v = {
                        start: {
                            x: l + 1,
                            y: d + 1
                        },
                        end: {
                            x: p,
                            y: h
                        }
                    };
                    c.push({
                        range: v,
                        text: f,
                        activate: i
                    })
                }
                return c
            }
            ,
            e._translateBufferLineToStringWithWrap = function(e, t, n) {
                var r, i, o = "";
                do {
                    if (!(s = n.buffer.active.getLine(e)))
                        break;
                    s.isWrapped && e--,
                    i = s.isWrapped
                } while (i);
                var a = e;
                do {
                    var s, u = n.buffer.active.getLine(e + 1);
                    if (r = !!u && u.isWrapped,
                    !(s = n.buffer.active.getLine(e)))
                        break;
                    o += s.translateToString(!r && t).substring(0, n.cols),
                    e++
                } while (r);
                return [o, a]
            }
            ,
            e
        }();
        t.LinkComputer = i
    }
    ])
}
));
//# sourceMappingURL=xterm-addon-web-links.js.map
