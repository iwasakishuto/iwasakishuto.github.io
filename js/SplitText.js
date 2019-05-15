/*!
 * VERSION: 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
!function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
        c = function(a) {
            var c,
                d = a.split("."),
                e = b;
            for (c = 0; c < d.length; c++)
                e[d[c]] = e = e[d[c]] || {};
            return e
        },
        d = c("com.greensock.utils"),
        e = function(a) {
            var b = a.nodeType,
                c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    c += e(a)
            } else if (3 === b || 4 === b)
                return a.nodeValue;
            return c
        },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        },
        j = function(a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        },
        k = function(a) {
            var b,
                c,
                d,
                e = [],
                f = a.length;
            for (b = 0; f > b; b++)
                if (c = a[b], j(c))
                    for (d = c.length, d = 0; d < c.length; d++)
                        e.push(c[d]);
                else
                    e.push(c);
            return e
        },
        l = ")eefec303079ad17405c",
        m = /(?:<br>|<br\/>|<br \/>)/gi,
        n = f.all && !f.addEventListener,
        o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'" : "'"),
        p = function(a) {
            a = a || "";
            var b = -1 !== a.indexOf("++"),
                c = 1;
            return b && (a = a.split("++").join("")), function() {
                return o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
            }
        },
        q = d.SplitText = b.SplitText = function(a, b) {
            if ("string" == typeof a && (a = q.selector(a)), !a)
                throw "cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
        },
        r = function(a, b, c) {
            var d = a.nodeType;
            if (1 === d || 9 === d || 11 === d)
                for (a = a.firstChild; a; a = a.nextSibling)
                    r(a, b, c);
            else
                (3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
        },
        s = function(a, b) {
            for (var c = b.length; --c > -1;)
                a.push(b[c])
        },
        t = function(a, b, c, d, h) {
            m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
            var j,
                k,
                n,
                o,
                q,
                t,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C = e(a),
                D = b.type || b.split || "chars,words,lines",
                E = -1 !== D.indexOf("lines") ? [] : null,
                F = -1 !== D.indexOf("words"),
                G = -1 !== D.indexOf("chars"),
                H = "absolute" === b.position || b.absolute === !0,
                I = H ? "&#173; " : " ",
                J = -999,
                K = g(a),
                L = i(a, "paddingLeft", K),
                M = i(a, "borderBottomWidth", K) + i(a, "borderTopWidth", K),
                N = i(a, "borderLeftWidth", K) + i(a, "borderRightWidth", K),
                O = i(a, "paddingTop", K) + i(a, "paddingBottom", K),
                P = i(a, "paddingLeft", K) + i(a, "paddingRight", K),
                Q = i(a, "textAlign", K, !0),
                R = a.clientHeight,
                S = a.clientWidth,
                T = "</div>",
                U = p(b.wordsClass),
                V = p(b.charsClass),
                W = -1 !== (b.linesClass || "").indexOf("++"),
                X = b.linesClass,
                Y = -1 !== C.indexOf("<"),
                Z = !0,
                $ = [],
                _ = [],
                aa = [];
            for (W && (X = X.split("++").join("")), Y && (C = C.split("<").join("{{LT}}")), j = C.length, o = U(), q = 0; j > q; q++)
                if (u = C.charAt(q), ")" === u && C.substr(q, 20) === l)
                    o += (Z ? T : "") + "<BR/>", Z = !1, q !== j - 20 && C.substr(q + 20, 20) !== l && (o += " " + U(), Z = !0), q += 19;
                else if (" " === u && " " !== C.charAt(q - 1) && q !== j - 1 && C.substr(q - 20, 20) !== l) {
                    for (o += Z ? T : "", Z = !1; " " === C.charAt(q + 1);)
                        o += I, q++;
                    (")" !== C.charAt(q + 1) || C.substr(q + 1, 20) !== l) && (o += I + U(), Z = !0)
                } else
                    "{" === u && "{{LT}}" === C.substr(q, 6) ? (o += G ? V() + "{{LT}}</div>" : "{{LT}}", q += 5) : o += G && " " !== u ? V() + u + "</div>" : u;
            for (a.innerHTML = o + (Z ? T : ""), Y && r(a, "{{LT}}", "<"), t = a.getElementsByTagName("*"), j = t.length, v = [], q = 0; j > q; q++)
                v[q] = t[q];
            if (E || H)
                for (q = 0; j > q; q++)
                    w = v[q], n = w.parentNode === a, (n || H || G && !F) && (x = w.offsetTop, E && n && x !== J && "BR" !== w.nodeName && (k = [], E.push(k), J = x), H && (w._x = w.offsetLeft, w._y = x, w._w = w.offsetWidth, w._h = w.offsetHeight), E && (F !== n && G || (k.push(w), w._x -= L), n && q && (v[q - 1]._wordEnd = !0), "BR" === w.nodeName && w.nextSibling && "BR" === w.nextSibling.nodeName && E.push([])));
            for (q = 0; j > q; q++)
                w = v[q], n = w.parentNode === a, "BR" !== w.nodeName ? (H && (z = w.style, F || n || (w._x += w.parentNode._x, w._y += w.parentNode._y), z.left = w._x + "px", z.top = w._y + "px", z.position = "absolute", z.display = "block", z.width = w._w + 1 + "px", z.height = w._h + "px"), F ? n && "" !== w.innerHTML ? _.push(w) : G && $.push(w) : n ? (a.removeChild(w), v.splice(q--, 1), j--) : !n && G && (x = !E && !H && w.nextSibling, a.appendChild(w), x || a.appendChild(f.createTextNode(" ")), $.push(w))) : E || H ? (a.removeChild(w), v.splice(q--, 1), j--) : F || a.appendChild(w);
            if (E) {
                for (H && (y = f.createElement("div"), a.appendChild(y), A = y.offsetWidth + "px", x = y.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(y)), z = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;)
                    a.removeChild(a.firstChild);
                for (B = !H || !F && !G, q = 0; q < E.length; q++) {
                    for (k = E[q], y = f.createElement("div"), y.style.cssText = "display:block;text-align:" + Q + ";position:" + (H ? "absolute;" : "relative;"), X && (y.className = X + (W ? q + 1 : "")), aa.push(y), j = k.length, t = 0; j > t; t++)
                        "BR" !== k[t].nodeName && (w = k[t], y.appendChild(w), B && (w._wordEnd || F) && y.appendChild(f.createTextNode(" ")), H && (0 === t && (y.style.top = w._y + "px", y.style.left = L + x + "px"), w.style.top = "0px", x && (w.style.left = w._x - x + "px")));
                    0 === j && (y.innerHTML = "&nbsp;"), F || G || (y.innerHTML = e(y).split(String.fromCharCode(160)).join(" ")), H && (y.style.width = A, y.style.height = w._h + "px"), a.appendChild(y)
                }
                a.style.cssText = z
            }
            H && (R > a.clientHeight && (a.style.height = R - O + "px", a.clientHeight < R && (a.style.height = R + M + "px")), S > a.clientWidth && (a.style.width = S - P + "px", a.clientWidth < S && (a.style.width = S + N + "px"))), s(c, $), s(d, _), s(h, aa)
        },
        u = q.prototype;
    u.split = function(a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = this.elements.length; --b > -1;)
            this._originals[b] = this.elements[b].innerHTML, t(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, u.revert = function() {
        if (!this._originals)
            throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;)
            this.elements[a].innerHTML = this._originals[a];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, q.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (q.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    }, q.version = "0.3.4"
}(_gsScope), function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");