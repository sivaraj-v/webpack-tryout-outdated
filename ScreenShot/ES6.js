!(function(e) {
    var r = {};

    function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }),
    (t.r = function(e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.n = function(e) {
        var r =
            e && e.__esModule ?

            function() {
                return e.default;
            } :
            function() {
                return e;
            };
        return t.d(r, "a", r), r;
    }),
    (t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
    function(e, r, t) {
        "use strict";
        var n = { x: 1, y: 2, a: 3, b: 4 },
            o = n.x,
            l = n.y,
            u = (function(e, r) {
                if (null == e) return {};
                var t,
                    n,
                    o = {},
                    l = Object.keys(e);
                for (n = 0; n < l.length; n++)(t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < u.length; n++)(t = u[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
                }
                return o;
            })(n, ["x", "y"]);
        [1, 2, 3].map(function(e) {
                return console.log(e);
            }),
            console.log(o),
            console.log(l),
            console.log(u);
    }
]);