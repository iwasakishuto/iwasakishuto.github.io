/*!
 * VERSION: 0.2.2
 * DATE: 2014-12-31
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

 /*=== 文字列がバーっと流れてくるやつ ===*/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = function(b) {
            var c = b.nodeType,
                d = "";
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent)
                    return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling)
                    d += a(b)
            } else if (3 === c || 4 === c)
                return b.nodeValue;
            return d
        },
        b = function(a, b) {
            for (var c = b.length, d = ""; --a > -1;)
                d += b[Math.random() * c | 0];
            return d
        },
        c = function(a) {
            this.chars = a.split(""), this.sets = [], this.length = 50;
            var c;
            for (c = 0; 20 > c; c++)
                this.sets[c] = b(80, this.chars);
            this.grow = function(a) {
                for (c = 0; 20 > c; c++)
                    this.sets[c] += b(a - this.length, this.chars);
                this.length = a
            }
        },
        d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        e = d.toLowerCase(),
        f = {
            upperCase: new c(d),
            lowerCase: new c(e),
            upperAndLowerCase: new c(d + e)
        },
        g = _gsScope._gsDefine.plugin({
            propName: "scrambleText",
            version: "0.2.2",
            API: 2,
            overwriteProps: ["scrambleText", "text"],
            init: function(b, d, e) {
                if (this._prop = "innerHTML" in b ? "innerHTML" : "textContent" in b ? "textContent" : 0, !this._prop)
                    return !1;
                this._target = b, "object" != typeof d && (d = {
                    text: d
                });
                var g,
                    h,
                    i,
                    j;
                return this._delimiter = g = d.delimiter || "", this._original = a(b).replace(/\s+/g, " ").split("&nbsp;").join("").split(g), this._text = (d.text || d.value || "").replace(/\s+/g, " ").split(g), this._hasClass = !1, "string" == typeof d.newClass && (this._newClass = d.newClass, this._hasClass = !0), "string" == typeof d.oldClass && (this._oldClass = d.oldClass, this._hasClass = !0), h = this._text.length - this._original.length, this._length = this._original.join(g).length, this._lengthDif = this._text.join(g).length - this._length, this._fillChar = d.fillChar || d.chars && -1 !== d.chars.indexOf(" ") ? "&nbsp;" : "", this._charSet = j = f[d.chars || "upperCase"] || new c(d.chars), this._speed = .016 / (d.speed || 1), this._prevScrambleTime = 0, this._setIndex = 20 * Math.random() | 0, i = this._length + Math.max(this._lengthDif, 0), i > j.length && j.grow(i), this._chars = j.sets[this._setIndex], this._revealDelay = d.revealDelay || 0, this._tweenLength = d.tweenLength !== !1, this._tween = e, !0
            },
            set: function(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this._text.length,
                    i = this._delimiter,
                    j = this._tween._time,
                    k = j - this._prevScrambleTime;
                this._revealDelay && (this._tween.vars.runBackwards && (j = this._tween._duration - j), a = 0 === j ? 0 : j < this._revealDelay ? 1e-6 : j === this._tween._duration ? 1 : this._tween._ease.getRatio((j - this._revealDelay) / (this._tween._duration - this._revealDelay))), 0 > a ? a = 0 : a > 1 && (a = 1), b = a * h + .5 | 0, c = this._text.slice(0, b).join(i), d = this._original.slice(b).join(i), a && ((k > this._speed || k < -this._speed) && (this._setIndex = (this._setIndex + (19 * Math.random() | 0)) % 20, this._chars = this._charSet.sets[this._setIndex], this._prevScrambleTime += k), d = this._chars.substr(c.length, this._length + (this._tweenLength ? 1 - (a = 1 - a) * a * a * a : 1) * this._lengthDif - c.length + .5 | 0)), this._hasClass ? (e = this._newClass && 0 !== b, f = this._oldClass && b !== h, g = (e ? "<span class='" + this._newClass + "'>" : "") + c + (e ? "</span>" : "") + (f ? "<span class='" + this._oldClass + "'>" : "") + i + d + (f ? "</span>" : "")) : g = c + i + d, this._target[this._prop] = "&nbsp;" === this._fillChar && -1 !== g.indexOf("  ") ? g.split("  ").join("&nbsp;&nbsp;") : g
            }
        }),
        h = g.prototype;
    h._newClass = h._oldClass = "";
    for (h in f)
        f[h.toLowerCase()] = f[h], f[h.toUpperCase()] = f[h]
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
