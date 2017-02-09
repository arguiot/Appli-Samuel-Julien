/*! @license Firebase v3.6.2
    Build: 3.6.2-rc.2
    Terms: https://firebase.google.com/terms/ */
(function() {
    var h, aa = aa || {}, l = this, ba = function() {}, m = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
                                !a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, ca = function(a) {
    return null === a
}, da = function(a) {
    return "array" == m(a)
}, ea = function(a) {
    var b = m(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, n = function(a) {
    return "string" == typeof a
}, fa = function(a) {
    return "number" == typeof a
}, p = function(a) {
    return "function" == m(a)
}, ga = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, ha = function(a, b,
c) {
    return a.call.apply(a.bind, arguments)
}, ia = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, q = function(a, b, c) {
    q = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
    return q.apply(null, arguments)
}, ja = function(a, b) {
    var c = Array.prototype.slice.call(arguments,
    1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, ka = Date.now || function() {
    return + new Date
}, r = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Tc = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.af = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
            d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};
var u = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, u);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
r(u, Error);
u.prototype.name = "CustomError";
var la = function(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)
        d += c.shift() + e.shift();
    return d + c.join("%s")
}, ma = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, na = /&/g, oa = /</g, qa = />/g, ra = /"/g, sa = /'/g, ta = /\x00/g, ua = /[\x00&<>"']/, v = function(a, b) {
    return - 1 != a.indexOf(b)
}, va = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
var wa = function(a, b) {
    b.unshift(a);
    u.call(this, la.apply(null, b));
    b.shift()
};
r(wa, u);
wa.prototype.name = "AssertionError";
var xa = function(a, b, c, d) {
    var e = "Assertion failed";
    if (c)
        var e = e + (": " + c), f = d;
    else 
        a && (e += ": " + a, f = b);
    throw new wa("" + e, f || []);
}, w = function(a, b, c) {
    a || xa("", null, b, Array.prototype.slice.call(arguments, 2))
}, ya = function(a, b) {
    throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, za = function(a, b, c) {
    fa(a) || xa("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}, Aa = function(a, b, c) {
    n(a) || xa("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments,
    2))
}, Ba = function(a, b, c) {
    p(a) || xa("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2))
};
var Ca = Array.prototype.indexOf ? function(a, b, c) {
    w(null != a.length);
    return Array.prototype.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (n(a))
        return n(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, x = Array.prototype.forEach ? function(a, b, c) {
    w(null != a.length);
    Array.prototype.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Da = function(a, b) {
    for (var c = n(a) ?
    a.split("") : a, d = a.length - 1; 0 <= d; --d)
        d in c && b.call(void 0, c[d], d, a)
}, Ea = Array.prototype.map ? function(a, b, c) {
    w(null != a.length);
    return Array.prototype.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Fa = Array.prototype.some ? function(a, b, c) {
    w(null != a.length);
    return Array.prototype.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
},
Ha = function(a) {
    var b;
    a: {
        b = Ga;
        for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b =- 1
    }
    return 0 > b ? null : n(a) ? a.charAt(b) : a[b]
}, Ia = function(a, b) {
    return 0 <= Ca(a, b)
}, Ka = function(a, b) {
    b = Ca(a, b);
    var c;
    (c = 0 <= b) && Ja(a, b);
    return c
}, Ja = function(a, b) {
    w(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length
}, La = function(a, b) {
    var c = 0;
    Da(a, function(d, e) {
        b.call(void 0, d, e, a) && Ja(a, e) && c++
    })
}, Ma = function(a) {
    return Array.prototype.concat.apply(Array.prototype,
    arguments)
}, Na = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
};
var Oa = function(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}, Pa = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, Qa = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, Ra = function(a) {
    for (var b in a)
        return !1;
    return !0
}, Sa = function(a, b) {
    for (var c in a)
        if (!(c in b) || a[c] !== b[c])
            return !1;
    for (c in b)
        if (!(c in a))
            return !1;
    return !0
}, Ta = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}, Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
Va = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Ua.length; f++)
            c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Wa;
a: {
    var Xa = l.navigator;
    if (Xa) {
        var Ya = Xa.userAgent;
        if (Ya) {
            Wa = Ya;
            break a
        }
    }
    Wa = ""
}
var y = function(a) {
    return v(Wa, a)
};
var Za = function(a) {
    Za[" "](a);
    return a
};
Za[" "] = ba;
var ab = function(a, b) {
    var c = $a;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var bb = y("Opera"), z = y("Trident") || y("MSIE"), cb = y("Edge"), db = cb || z, eb = y("Gecko")&&!(v(Wa.toLowerCase(), "webkit")&&!y("Edge"))&&!(y("Trident") || y("MSIE"))&&!y("Edge"), fb = v(Wa.toLowerCase(), "webkit")&&!y("Edge"), gb = function() {
    var a = l.document;
    return a ? a.documentMode : void 0
}, hb;
a: {
    var ib = "", jb = function() {
        var a = Wa;
        if (eb)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (cb)
            return /Edge\/([\d\.]+)/.exec(a);
        if (z)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (fb)
            return /WebKit\/(\S+)/.exec(a);
        if (bb)
            return /(?:Version)[ \/]?(\S+)/.exec(a)
    }();
    jb && (ib = jb ? jb[1] : "");
    if (z) {
        var kb = gb();
        if (null != kb && kb > parseFloat(ib)) {
            hb = String(kb);
            break a
        }
    }
    hb = ib
}
var lb = hb, $a = {}, A = function(a) {
    return ab(a, function() {
        for (var b = 0, c = ma(String(lb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", k = d[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                if (0 == g[0].length && 0 == k[0].length)
                    break;
                b = va(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || va(0 == g[2].length, 0 == k[2].length) || va(g[2], k[2]);
                g = g[3];
                k = k[3]
            }
            while (0 == b)
            }
        return 0 <= b
    })
}, mb; var nb = l.document;
mb = nb && z ? gb() || ("CSS1Compat" == nb.compatMode ? parseInt(lb, 10) : 5) : void 0;
var ob = null, pb = null, rb = function(a) {
    var b = "";
    qb(a, function(a) {
        b += String.fromCharCode(a)
    });
    return b
}, qb = function(a, b) {
    function c(b) {
        for (; d < a.length;) {
            var c = a.charAt(d++), e = pb[c];
            if (null != e)
                return e;
            if (!/^[\s\xa0]*$/.test(c))
                throw Error("Unknown base64 encoding at char: " + c);
        }
        return b
    }
    sb();
    for (var d = 0; ;) {
        var e = c( - 1), f = c(0), g = c(64), k = c(64);
        if (64 === k&&-1 === e)
            break;
        b(e<<2 | f>>4);
        64 != g && (b(f<<4 & 240 | g>>2), 64 != k && b(g<<6 & 192 | k))
    }
}, sb = function() {
    if (!ob) {
        ob = {};
        pb = {};
        for (var a = 0; 65 > a; a++)
            ob[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
            pb[ob[a]] = a, 62 <= a && (pb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
    }
};
var tb=!z || 9 <= Number(mb), ub = z&&!A("9");
!fb || A("528");
eb && A("1.9b") || z && A("8") || bb && A("9.5") || fb && A("528");
eb&&!A("8") || z && A("9");
var vb = function() {
    this.za = this.za;
    this.Tb = this.Tb
};
vb.prototype.za=!1;
vb.prototype.isDisposed = function() {
    return this.za
};
vb.prototype.Oa = function() {
    if (this.Tb)
        for (; this.Tb.length;)
            this.Tb.shift()()
};
var wb = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Wa=!1;
    this.ud=!0
};
wb.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.ud=!1
};
var xb = function(a, b) {
    wb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.mb = this.state = null;
    a && this.init(a, b)
};
r(xb, wb);
xb.prototype.init = function(a, b) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0]: null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (eb) {
            var e;
            a:
            {
                try {
                    Za(b.nodeName);
                    e=!0;
                    break a
                } catch (f) {}
                e=!1
            }
            e || (b = null)
        }
    } else 
        "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === d ? (this.offsetX = fb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = fb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
    a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.mb = a;
    a.defaultPrevented &&
    this.preventDefault()
};
xb.prototype.preventDefault = function() {
    xb.Tc.preventDefault.call(this);
    var a = this.mb;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, ub)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
xb.prototype.fe = function() {
    return this.mb
};
var yb = "closure_listenable_" + (1E6 * Math.random() | 0), zb = 0;
var Ab = function(a, b, c, d, e) {
    this.listener = a;
    this.$b = null;
    this.src = b;
    this.type = c;
    this.capture=!!d;
    this.Kb = e;
    this.key=++zb;
    this.$a = this.Db=!1
}, Bb = function(a) {
    a.$a=!0;
    a.listener = null;
    a.$b = null;
    a.src = null;
    a.Kb = null
};
var Cb = function(a) {
    this.src = a;
    this.w = {};
    this.Bb = 0
};
Cb.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.w[f];
    a || (a = this.w[f] = [], this.Bb++);
    var g = Db(a, b, d, e);
    - 1 < g ? (b = a[g], c || (b.Db=!1)) : (b = new Ab(b, this.src, f, !!d, e), b.Db = c, a.push(b));
    return b
};
Cb.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.w))
        return !1;
    var e = this.w[a];
    b = Db(e, b, c, d);
    return - 1 < b ? (Bb(e[b]), Ja(e, b), 0 == e.length && (delete this.w[a], this.Bb--), !0) : !1
};
var Eb = function(a, b) {
    var c = b.type;
    c in a.w && Ka(a.w[c], b) && (Bb(b), 0 == a.w[c].length && (delete a.w[c], a.Bb--))
};
Cb.prototype.zc = function(a, b, c, d) {
    a = this.w[a.toString()];
    var e =- 1;
    a && (e = Db(a, b, c, d));
    return - 1 < e ? a[e] : null
};
var Db = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.$a && f.listener == b && f.capture==!!c && f.Kb == d)
            return e
    }
    return - 1
};
var Fb = "closure_lm_" + (1E6 * Math.random() | 0), Gb = {}, Hb = 0, Ib = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++)
            Ib(a, b[f], c, d, e);
    else 
        c = Jb(c), a && a[yb] ? a.listen(b, c, d, e) : Kb(a, b, c, !1, d, e)
}, Kb = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g=!!e, k = Lb(a);
    k || (a[Fb] = k = new Cb(a));
    c = k.add(b, c, d, e, f);
    if (!c.$b) {
        d = Mb();
        c.$b = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, g);
        else if (a.attachEvent)
            a.attachEvent(Nb(b.toString()), d);
        else 
            throw Error("addEventListener and attachEvent are unavailable.");
        Hb++
    }
}, Mb = function() {
    var a = Ob, b = tb ? function(c) {
        return a.call(b.src, b.listener, c)
    }
    : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
            return c
    };
    return b
}, Pb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++)
            Pb(a, b[f], c, d, e);
    else 
        c = Jb(c), a && a[yb] ? Qb(a, b, c, d, e) : Kb(a, b, c, !0, d, e)
}, Rb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++)
            Rb(a, b[f], c, d, e);
    else 
        c = Jb(c), a && a[yb] ? a.$.remove(String(b), c, d, e) : a && (a = Lb(a)) && (b = a.zc(b, c, !!d, e)) && Sb(b)
}, Sb = function(a) {
    if (!fa(a) && a&&!a.$a) {
        var b = a.src;
        if (b &&
        b[yb])
            Eb(b.$, a);
        else {
            var c = a.type, d = a.$b;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Nb(c), d);
            Hb--;
            (c = Lb(b)) ? (Eb(c, a), 0 == c.Bb && (c.src = null, b[Fb] = null)) : Bb(a)
        }
    }
}, Nb = function(a) {
    return a in Gb ? Gb[a] : Gb[a] = "on" + a
}, Ub = function(a, b, c, d) {
    var e=!0;
    if (a = Lb(a))
        if (b = a.w[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c&&!f.$a && (f = Tb(f, d), e = e&&!1 !== f)
            }
    return e
}, Tb = function(a, b) {
    var c = a.listener, d = a.Kb || a.src;
    a.Db && Sb(a);
    return c.call(d,
    b)
}, Ob = function(a, b) {
    if (a.$a)
        return !0;
    if (!tb) {
        if (!b)
            a: {
            b = ["window", "event"];
            for (var c = l, d; d = b.shift();)
                if (null != c[d])
                    c = c[d];
                else {
                    b = null;
                    break a
                }
                b = c
        }
        d = b;
        b = new xb(d, this);
        c=!0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
            a:
            {
                var e=!1;
                if (0 == d.keyCode)
                    try {
                        d.keyCode =- 1;
                        break a
                } catch (g) {
                    e=!0
                }
                if (e || void 0 == d.returnValue)
                    d.returnValue=!0
            }
            d = [];
            for (e = b.currentTarget; e; e = e.parentNode)
                d.push(e);
            a = a.type;
            for (e = d.length - 1; !b.Wa && 0 <= e; e--) {
                b.currentTarget = d[e];
                var f = Ub(d[e], a, !0, b), c = c && f
            }
            for (e = 0; !b.Wa && e < d.length; e++)
                b.currentTarget =
                d[e], f = Ub(d[e], a, !1, b), c = c && f
        }
        return c
    }
    return Tb(a, new xb(b, this))
}, Lb = function(a) {
    a = a[Fb];
    return a instanceof Cb ? a : null
}, Vb = "__closure_events_fn_" + (1E9 * Math.random()>>>0), Jb = function(a) {
    w(a, "Listener can not be null.");
    if (p(a))
        return a;
    w(a.handleEvent, "An object listener must have handleEvent method.");
    a[Vb] || (a[Vb] = function(b) {
        return a.handleEvent(b)
    });
    return a[Vb]
};
var Wb = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
var Yb = function() {
    this.ic = "";
    this.Md = Xb
};
Yb.prototype.Ob=!0;
Yb.prototype.Ib = function() {
    return this.ic
};
Yb.prototype.toString = function() {
    return "Const{" + this.ic + "}"
};
var Zb = function(a) {
    if (a instanceof Yb && a.constructor === Yb && a.Md === Xb)
        return a.ic;
    ya("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}, Xb = {}, $b = function(a) {
    var b = new Yb;
    b.ic = a;
    return b
};
$b("");
var B = function() {
    this.ka = "";
    this.Ld = ac
};
B.prototype.Ob=!0;
B.prototype.Ib = function() {
    return this.ka
};
B.prototype.toString = function() {
    return "SafeUrl{" + this.ka + "}"
};
var bc = function(a) {
    if (a instanceof B && a.constructor === B && a.Ld === ac)
        return a.ka;
    ya("expected object of type SafeUrl, got '" + a + "' of type " + m(a));
    return "type_error:SafeUrl"
}, cc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, ec = function(a) {
    if (a instanceof B)
        return a;
    a = a.Ob ? a.Ib() : String(a);
    cc.test(a) || (a = "about:invalid#zClosurez");
    return dc(a)
}, ac = {}, dc = function(a) {
    var b = new B;
    b.ka = a;
    return b
};
dc("about:blank");
var fc = function(a) {
    return /^\s*$/.test(a)?!1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
}, gc = function(a) {
    a = String(a);
    if (fc(a))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}, jc = function(a) {
    var b = [];
    hc(new ic, a, b);
    return b.join("")
}, ic = function() {
    this.bc = void 0
},
hc = function(a, b, c) {
    if (null == b)
        c.push("null");
    else {
        if ("object" == typeof b) {
            if (da(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", f = 0; f < b; f++)
                    c.push(e), e = d[f], hc(a, a.bc ? a.bc.call(d, String(f), e) : e, c), e = ",";
                c.push("]");
                return 
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                b = b.valueOf();
            else {
                c.push("{");
                f = "";
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), kc(d, c), c.push(":"), hc(a, a.bc ? a.bc.call(b, d, e) : e, c), f = ","));
                c.push("}");
                return 
            }
        }
        switch (typeof b) {
        case "string":
            kc(b,
            c);
            break;
        case "number":
            c.push(isFinite(b)&&!isNaN(b) ? String(b) : "null");
            break;
        case "boolean":
            c.push(String(b));
            break;
        case "function":
            c.push("null");
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
}, lc = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, mc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, kc = function(a, b) {
    b.push('"', a.replace(mc, function(a) {
        var b = lc[a];
        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
        lc[a] = b);
        return b
    }), '"')
};
var nc = function() {};
nc.prototype.Wc = null;
var oc = function(a) {
    return a.Wc || (a.Wc = a.Cc())
};
var pc, qc = function() {};
r(qc, nc);
qc.prototype.Eb = function() {
    var a = rc(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};
qc.prototype.Cc = function() {
    var a = {};
    rc(this) && (a[0]=!0, a[1]=!0);
    return a
};
var rc = function(a) {
    if (!a.jd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.jd = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.jd
};
pc = new qc;
var sc = function() {};
r(sc, nc);
sc.prototype.Eb = function() {
    var a = new XMLHttpRequest;
    if ("withCredentials"in a)
        return a;
    if ("undefined" != typeof XDomainRequest)
        return new tc;
    throw Error("Unsupported browser");
};
sc.prototype.Cc = function() {
    return {}
};
var tc = function() {
    this.oa = new XDomainRequest;
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = "";
    this.status =- 1;
    this.statusText = this.responseXML = null;
    this.oa.onload = q(this.je, this);
    this.oa.onerror = q(this.gd, this);
    this.oa.onprogress = q(this.ke, this);
    this.oa.ontimeout = q(this.le, this)
};
h = tc.prototype;
h.open = function(a, b, c) {
    if (null != c&&!c)
        throw Error("Only async requests are supported.");
    this.oa.open(a, b)
};
h.send = function(a) {
    if (a)
        if ("string" == typeof a)
            this.oa.send(a);
        else 
            throw Error("Only string data is supported");
    else 
        this.oa.send()
};
h.abort = function() {
    this.oa.abort()
};
h.setRequestHeader = function() {};
h.je = function() {
    this.status = 200;
    this.responseText = this.oa.responseText;
    uc(this, 4)
};
h.gd = function() {
    this.status = 500;
    this.responseText = "";
    uc(this, 4)
};
h.le = function() {
    this.gd()
};
h.ke = function() {
    this.status = 200;
    uc(this, 1)
};
var uc = function(a, b) {
    a.readyState = b;
    if (a.onreadystatechange)
        a.onreadystatechange()
};
var wc = function() {
    this.Wb = "";
    this.Nd = vc
};
wc.prototype.Ob=!0;
wc.prototype.Ib = function() {
    return this.Wb
};
wc.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.Wb + "}"
};
var vc = {};
var yc = function() {
    this.ka = "";
    this.Kd = xc
};
yc.prototype.Ob=!0;
yc.prototype.Ib = function() {
    return this.ka
};
yc.prototype.toString = function() {
    return "SafeHtml{" + this.ka + "}"
};
var zc = function(a) {
    if (a instanceof yc && a.constructor === yc && a.Kd === xc)
        return a.ka;
    ya("expected object of type SafeHtml, got '" + a + "' of type " + m(a));
    return "type_error:SafeHtml"
}, xc = {};
yc.prototype.se = function(a) {
    this.ka = a;
    return this
};
!eb&&!z || z && 9 <= Number(mb) || eb && A("1.9.1");
z && A("9");
var Bc = function(a, b) {
    Oa(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ac.hasOwnProperty(d) ? a.setAttribute(Ac[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Ac = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
var Cc = function(a, b, c) {
    this.ve = c;
    this.Ud = a;
    this.He = b;
    this.Sb = 0;
    this.Lb = null
};
Cc.prototype.get = function() {
    var a;
    0 < this.Sb ? (this.Sb--, a = this.Lb, this.Lb = a.next, a.next = null) : a = this.Ud();
    return a
};
Cc.prototype.put = function(a) {
    this.He(a);
    this.Sb < this.ve && (this.Sb++, a.next = this.Lb, this.Lb = a)
};
var Dc = function(a) {
    l.setTimeout(function() {
        throw a;
    }, 0)
}, Ec, Fc = function() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener&&!y("Presto") && (a = function() {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host,
        a = q(function(a) {
            if (("*" == d || a.origin == d) && a.data == c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a&&!y("Trident")&&!y("MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (void 0 !== c.next) {
                c = c.next;
                var a = c.Zc;
                c.Zc = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                Zc: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ?
    function(a) {
        var b = document.createElement("SCRIPT");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function(a) {
        l.setTimeout(a, 0)
    }
};
var Gc = function() {
    this.nc = this.Ja = null
}, Ic = new Cc(function() {
    return new Hc
}, function(a) {
    a.reset()
}, 100);
Gc.prototype.add = function(a, b) {
    var c = Ic.get();
    c.set(a, b);
    this.nc ? this.nc.next = c : (w(!this.Ja), this.Ja = c);
    this.nc = c
};
Gc.prototype.remove = function() {
    var a = null;
    this.Ja && (a = this.Ja, this.Ja = this.Ja.next, this.Ja || (this.nc = null), a.next = null);
    return a
};
var Hc = function() {
    this.next = this.scope = this.yc = null
};
Hc.prototype.set = function(a, b) {
    this.yc = a;
    this.scope = b;
    this.next = null
};
Hc.prototype.reset = function() {
    this.next = this.scope = this.yc = null
};
var Nc = function(a, b) {
    Jc || Kc();
    Lc || (Jc(), Lc=!0);
    Mc.add(a, b)
}, Jc, Kc = function() {
    var a = l.Promise;
    if ( - 1 != String(a).indexOf("[native code]")) {
        var b = a.resolve(void 0);
        Jc = function() {
            b.then(Oc)
        }
    } else 
        Jc = function() {
            var a = Oc;
            !p(l.setImmediate) || l.Window && l.Window.prototype&&!y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Ec || (Ec = Fc()), Ec(a)) : l.setImmediate(a)
        }
}, Lc=!1, Mc = new Gc, Oc = function() {
    for (var a; a = Mc.remove();) {
        try {
            a.yc.call(a.scope)
        } catch (b) {
            Dc(b)
        }
        Ic.put(a)
    }
    Lc=!1
};
var Pc = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
}, Qc = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var C = function(a, b) {
    this.G = 0;
    this.ma = void 0;
    this.Ma = this.ha = this.m = null;
    this.Jb = this.xc=!1;
    if (a != ba)
        try {
            var c = this;
            a.call(b, function(a) {
                Rc(c, 2, a)
            }, function(a) {
                if (!(a instanceof Sc))
                    try {
                        if (a instanceof Error)
                            throw a;
                            throw Error("Promise rejected.");
                        } catch (e) {}
                        Rc(c, 3, a)
                    })
    } catch (d) {
        Rc(this, 3, d)
    }
}, Tc = function() {
    this.next = this.context = this.Ta = this.Da = this.child = null;
    this.ib=!1
};
Tc.prototype.reset = function() {
    this.context = this.Ta = this.Da = this.child = null;
    this.ib=!1
};
var Uc = new Cc(function() {
    return new Tc
}, function(a) {
    a.reset()
}, 100), Vc = function(a, b, c) {
    var d = Uc.get();
    d.Da = a;
    d.Ta = b;
    d.context = c;
    return d
}, D = function(a) {
    if (a instanceof C)
        return a;
    var b = new C(ba);
    Rc(b, 2, a);
    return b
}, E = function(a) {
    return new C(function(b, c) {
        c(a)
    })
}, Xc = function(a, b, c) {
    Wc(a, b, c, null) || Nc(ja(b, a))
}, Yc = function(a) {
    return new C(function(b) {
        var c = a.length, d = [];
        if (c)
            for (var e = function(a, e, f) {
                c--;
                d[a] = e ? {
                    de: !0,
                    value: f
                } : {
                    de: !1,
                    reason: f
                };
                0 == c && b(d)
            }, f = 0, g; f < a.length; f++)
                g = a[f], Xc(g, ja(e, f, !0),
                ja(e, f, !1));
        else 
            b(d)
    })
};
C.prototype.then = function(a, b, c) {
    null != a && Ba(a, "opt_onFulfilled should be a function.");
    null != b && Ba(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return Zc(this, p(a) ? a : null, p(b) ? b : null, c)
};
Pc(C);
var ad = function(a, b) {
    b = Vc(b, b, void 0);
    b.ib=!0;
    $c(a, b);
    return a
};
C.prototype.g = function(a, b) {
    return Zc(this, null, a, b)
};
C.prototype.cancel = function(a) {
    0 == this.G && Nc(function() {
        var b = new Sc(a);
        bd(this, b)
    }, this)
};
var bd = function(a, b) {
    if (0 == a.G)
        if (a.m) {
            var c = a.m;
            if (c.ha) {
                for (var d = 0, e = null, f = null, g = c.ha; g && (g.ib || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next)
                    e || (f = g);
                    e && (0 == c.G && 1 == d ? bd(c, b) : (f ? (d = f, w(c.ha), w(null != d), d.next == c.Ma && (c.Ma = d), d.next = d.next.next) : cd(c), dd(c, e, 3, b)))
                }
                a.m = null
        } else 
            Rc(a, 3, b)
    }, $c = function(a, b) {
    a.ha || 2 != a.G && 3 != a.G || ed(a);
    w(null != b.Da);
    a.Ma ? a.Ma.next = b : a.ha = b;
    a.Ma = b
}, Zc = function(a, b, c, d) {
    var e = Vc(null, null, null);
    e.child = new C(function(a, g) {
        e.Da = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (pa) {
                g(pa)
            }
        } :
        a;
        e.Ta = c ? function(b) {
            try {
                var e = c.call(d, b);
                void 0 === e && b instanceof Sc ? g(b) : a(e)
            } catch (pa) {
                g(pa)
            }
        } : g
    });
    e.child.m = a;
    $c(a, e);
    return e.child
};
C.prototype.Re = function(a) {
    w(1 == this.G);
    this.G = 0;
    Rc(this, 2, a)
};
C.prototype.Se = function(a) {
    w(1 == this.G);
    this.G = 0;
    Rc(this, 3, a)
};
var Rc = function(a, b, c) {
    0 == a.G && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.G = 1, Wc(c, a.Re, a.Se, a) || (a.ma = c, a.G = b, a.m = null, ed(a), 3 != b || c instanceof Sc || fd(a, c)))
}, Wc = function(a, b, c, d) {
    if (a instanceof C)
        return null != b && Ba(b, "opt_onFulfilled should be a function."), null != c && Ba(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), $c(a, Vc(b || ba, c || null, d)), !0;
    if (Qc(a))
        return a.then(b, c, d), !0;
    if (ga(a))
        try {
            var e = a.then;
            if (p(e))
                return gd(a,
                e, b, c, d), !0
    } catch (f) {
        return c.call(d, f), !0
    }
    return !1
}, gd = function(a, b, c, d, e) {
    var f=!1, g = function(a) {
        f || (f=!0, c.call(e, a))
    }, k = function(a) {
        f || (f=!0, d.call(e, a))
    };
    try {
        b.call(a, g, k)
    } catch (t) {
        k(t)
    }
}, ed = function(a) {
    a.xc || (a.xc=!0, Nc(a.Zd, a))
}, cd = function(a) {
    var b = null;
    a.ha && (b = a.ha, a.ha = b.next, b.next = null);
    a.ha || (a.Ma = null);
    null != b && w(null != b.Da);
    return b
};
C.prototype.Zd = function() {
    for (var a; a = cd(this);)
        dd(this, a, this.G, this.ma);
    this.xc=!1
};
var dd = function(a, b, c, d) {
    if (3 == c && b.Ta&&!b.ib)
        for (; a && a.Jb; a = a.m)
            a.Jb=!1;
    if (b.child)
        b.child.m = null, hd(b, c, d);
    else 
        try {
            b.ib ? b.Da.call(b.context) : hd(b, c, d)
    } catch (e) {
        id.call(null, e)
    }
    Uc.put(b)
}, hd = function(a, b, c) {
    2 == b ? a.Da.call(a.context, c) : a.Ta && a.Ta.call(a.context, c)
}, fd = function(a, b) {
    a.Jb=!0;
    Nc(function() {
        a.Jb && id.call(null, b)
    })
}, id = Dc, Sc = function(a) {
    u.call(this, a)
};
r(Sc, u);
Sc.prototype.name = "cancel"; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var F = function(a, b) {
    this.dc = [];
    this.od = a;
    this.bd = b || null;
    this.ob = this.Qa=!1;
    this.ma = void 0;
    this.Rc = this.Vc = this.sc=!1;
    this.lc = 0;
    this.m = null;
    this.tc = 0
};
F.prototype.cancel = function(a) {
    if (this.Qa)
        this.ma instanceof F && this.ma.cancel();
    else {
        if (this.m) {
            var b = this.m;
            delete this.m;
            a ? b.cancel(a) : (b.tc--, 0 >= b.tc && b.cancel())
        }
        this.od ? this.od.call(this.bd, this) : this.Rc=!0;
        this.Qa || jd(this, new kd)
    }
};
F.prototype.$c = function(a, b) {
    this.sc=!1;
    ld(this, a, b)
};
var ld = function(a, b, c) {
    a.Qa=!0;
    a.ma = c;
    a.ob=!b;
    md(a)
}, od = function(a) {
    if (a.Qa) {
        if (!a.Rc)
            throw new nd;
        a.Rc=!1
    }
};
F.prototype.callback = function(a) {
    od(this);
    pd(a);
    ld(this, !0, a)
};
var jd = function(a, b) {
    od(a);
    pd(b);
    ld(a, !1, b)
}, pd = function(a) {
    w(!(a instanceof F), "An execution sequence may not be initiated with a blocking Deferred.")
}, td = function(a) {
    var b = qd("https://apis.google.com/js/client.js?onload=" + rd);
    sd(b, null, a, void 0)
}, sd = function(a, b, c, d) {
    w(!a.Vc, "Blocking Deferreds can not be re-used");
    a.dc.push([b, c, d]);
    a.Qa && md(a)
};
F.prototype.then = function(a, b, c) {
    var d, e, f = new C(function(a, b) {
        d = a;
        e = b
    });
    sd(this, d, function(a) {
        a instanceof kd ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
};
Pc(F);
var ud = function(a) {
    return Fa(a.dc, function(a) {
        return p(a[1])
    })
}, md = function(a) {
    if (a.lc && a.Qa && ud(a)) {
        var b = a.lc, c = vd[b];
        c && (l.clearTimeout(c.pb), delete vd[b]);
        a.lc = 0
    }
    a.m && (a.m.tc--, delete a.m);
    for (var b = a.ma, d = c=!1; a.dc.length&&!a.sc;) {
        var e = a.dc.shift(), f = e[0], g = e[1], e = e[2];
        if (f = a.ob ? g : f)
            try {
                var k = f.call(e || a.bd, b);
                void 0 !== k && (a.ob = a.ob && (k == b || k instanceof Error), a.ma = b = k);
                if (Qc(b) || "function" === typeof l.Promise && b instanceof l.Promise)
                    d=!0, a.sc=!0
        } catch (t) {
            b = t, a.ob=!0, ud(a) || (c=!0)
        }
    }
    a.ma = b;
    d &&
    (k = q(a.$c, a, !0), d = q(a.$c, a, !1), b instanceof F ? (sd(b, k, d), b.Vc=!0) : b.then(k, d));
    c && (b = new wd(b), vd[b.pb] = b, a.lc = b.pb)
}, nd = function() {
    u.call(this)
};
r(nd, u);
nd.prototype.message = "Deferred has already fired";
nd.prototype.name = "AlreadyCalledError";
var kd = function() {
    u.call(this)
};
r(kd, u);
kd.prototype.message = "Deferred was canceled";
kd.prototype.name = "CanceledError";
var wd = function(a) {
    this.pb = l.setTimeout(q(this.Qe, this), 0);
    this.K = a
};
wd.prototype.Qe = function() {
    w(vd[this.pb], "Cannot throw an error that is not scheduled.");
    delete vd[this.pb];
    throw this.K;
};
var vd = {};
var qd = function(a) {
    var b = new wc;
    b.Wb = a;
    return xd(b)
}, xd = function(a) {
    var b = {}, c = b.document || document, d;
    a instanceof wc && a.constructor === wc && a.Nd === vc ? d = a.Wb : (ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");
    var e = document.createElement("SCRIPT");
    a = {
        vd: e,
        Ab: void 0
    };
    var f = new F(yd, a), g = null, k = null != b.timeout ? b.timeout: 5E3;
    0 < k && (g = window.setTimeout(function() {
        zd(e, !0);
        jd(f, new Ad(1, "Timeout reached for loading script " + d))
    }, k), a.Ab = g);
    e.onload =
    e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (zd(e, b.bf ||!1, g), f.callback(null))
    };
    e.onerror = function() {
        zd(e, !0, g);
        jd(f, new Ad(0, "Error while loading script " + d))
    };
    a = b.attributes || {};
    Va(a, {
        type: "text/javascript",
        charset: "UTF-8",
        src: d
    });
    Bc(e, a);
    Bd(c).appendChild(e);
    return f
}, Bd = function(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
}, yd = function() {
    if (this && this.vd) {
        var a = this.vd;
        a && "SCRIPT" == a.tagName &&
        zd(a, !0, this.Ab)
    }
}, zd = function(a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = ba;
    a.onerror = ba;
    a.onreadystatechange = ba;
    b && window.setTimeout(function() {
        a && a.parentNode && a.parentNode.removeChild(a)
    }, 0)
}, Ad = function(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    u.call(this, c);
    this.code = a
};
r(Ad, u);
var G = function() {
    vb.call(this);
    this.$ = new Cb(this);
    this.Qd = this;
    this.Hc = null
};
r(G, vb);
G.prototype[yb]=!0;
h = G.prototype;
h.addEventListener = function(a, b, c, d) {
    Ib(this, a, b, c, d)
};
h.removeEventListener = function(a, b, c, d) {
    Rb(this, a, b, c, d)
};
h.dispatchEvent = function(a) {
    Cd(this);
    var b, c = this.Hc;
    if (c) {
        b = [];
        for (var d = 1; c; c = c.Hc)
            b.push(c), w(1E3>++d, "infinite loop")
    }
    c = this.Qd;
    d = a.type || a;
    if (n(a))
        a = new wb(a, c);
    else if (a instanceof wb)
        a.target = a.target || c;
    else {
        var e = a;
        a = new wb(d, c);
        Va(a, e)
    }
    var e=!0, f;
    if (b)
        for (var g = b.length - 1; !a.Wa && 0 <= g; g--)
            f = a.currentTarget = b[g], e = Dd(f, d, !0, a) && e;
    a.Wa || (f = a.currentTarget = c, e = Dd(f, d, !0, a) && e, a.Wa || (e = Dd(f, d, !1, a) && e));
    if (b)
        for (g = 0; !a.Wa && g < b.length; g++)
            f = a.currentTarget = b[g], e = Dd(f, d, !1, a) && e;
    return e
};
h.Oa = function() {
    G.Tc.Oa.call(this);
    if (this.$) {
        var a = this.$, b = 0, c;
        for (c in a.w) {
            for (var d = a.w[c], e = 0; e < d.length; e++)
                ++b, Bb(d[e]);
            delete a.w[c];
            a.Bb--
        }
    }
    this.Hc = null
};
h.listen = function(a, b, c, d) {
    Cd(this);
    return this.$.add(String(a), b, !1, c, d)
};
var Qb = function(a, b, c, d, e) {
    a.$.add(String(b), c, !0, d, e)
}, Dd = function(a, b, c, d) {
    b = a.$.w[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e=!0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g&&!g.$a && g.capture == c) {
            var k = g.listener, t = g.Kb || g.src;
            g.Db && Eb(a.$, g);
            e=!1 !== k.call(t, d) && e
        }
    }
    return e && 0 != d.ud
};
G.prototype.zc = function(a, b, c, d) {
    return this.$.zc(String(a), b, c, d)
};
var Cd = function(a) {
    w(a.$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Ed = "StopIteration"in l ? l.StopIteration: {
    message: "StopIteration",
    stack: ""
}, Fd = function() {};
Fd.prototype.next = function() {
    throw Ed;
};
Fd.prototype.Pd = function() {
    return this
};
var Gd = function(a, b) {
    this.aa = {};
    this.s = [];
    this.hb = this.l = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else 
        a && this.addAll(a)
};
Gd.prototype.V = function() {
    Hd(this);
    for (var a = [], b = 0; b < this.s.length; b++)
        a.push(this.aa[this.s[b]]);
    return a
};
Gd.prototype.ia = function() {
    Hd(this);
    return this.s.concat()
};
Gd.prototype.lb = function(a) {
    return Id(this.aa, a)
};
Gd.prototype.remove = function(a) {
    return Id(this.aa, a) ? (delete this.aa[a], this.l--, this.hb++, this.s.length > 2 * this.l && Hd(this), !0) : !1
};
var Hd = function(a) {
    if (a.l != a.s.length) {
        for (var b = 0, c = 0; b < a.s.length;) {
            var d = a.s[b];
            Id(a.aa, d) && (a.s[c++] = d);
            b++
        }
        a.s.length = c
    }
    if (a.l != a.s.length) {
        for (var e = {}, c = b = 0; b < a.s.length;)
            d = a.s[b], Id(e, d) || (a.s[c++] = d, e[d] = 1), b++;
        a.s.length = c
    }
};
h = Gd.prototype;
h.get = function(a, b) {
    return Id(this.aa, a) ? this.aa[a] : b
};
h.set = function(a, b) {
    Id(this.aa, a) || (this.l++, this.s.push(a), this.hb++);
    this.aa[a] = b
};
h.addAll = function(a) {
    var b;
    a instanceof Gd ? (b = a.ia(), a = a.V()) : (b = Qa(a), a = Pa(a));
    for (var c = 0; c < b.length; c++)
        this.set(b[c], a[c])
};
h.forEach = function(a, b) {
    for (var c = this.ia(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
h.clone = function() {
    return new Gd(this)
};
h.Pd = function(a) {
    Hd(this);
    var b = 0, c = this.hb, d = this, e = new Fd;
    e.next = function() {
        if (c != d.hb)
            throw Error("The map has changed since the iterator was created");
        if (b >= d.s.length)
            throw Ed;
        var e = d.s[b++];
        return a ? e : d.aa[e]
    };
    return e
};
var Id = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var Jd = function(a) {
    if (a.V && "function" == typeof a.V)
        return a.V();
    if (n(a))
        return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Pa(a)
}, Kd = function(a) {
    if (a.ia && "function" == typeof a.ia)
        return a.ia();
    if (!a.V || "function" != typeof a.V) {
        if (ea(a) || n(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++)
                b.push(c);
            return b
        }
        return Qa(a)
    }
}, Ld = function(a, b) {
    if (a.forEach && "function" == typeof a.forEach)
        a.forEach(b, void 0);
    else if (ea(a) || n(a))
        x(a, b, void 0);
    else 
        for (var c = Kd(a), d = Jd(a), e =
        d.length, f = 0; f < e; f++)
            b.call(void 0, d[f], c && c[f], a)
};
var Md = function(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
};
Md.prototype.dd = null;
var Nd = 0;
Md.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Nd++;
    d || ka();
    this.sb = a;
    this.Ae = b;
    delete this.dd
};
Md.prototype.yd = function(a) {
    this.sb = a
};
var Od = function(a) {
    this.Be = a;
    this.hd = this.uc = this.sb = this.m = null
}, Pd = function(a, b) {
    this.name = a;
    this.value = b
};
Pd.prototype.toString = function() {
    return this.name
};
var Qd = new Pd("SEVERE", 1E3), Rd = new Pd("CONFIG", 700), Sd = new Pd("FINE", 500);
Od.prototype.getParent = function() {
    return this.m
};
Od.prototype.yd = function(a) {
    this.sb = a
};
var Td = function(a) {
    if (a.sb)
        return a.sb;
    if (a.m)
        return Td(a.m);
    ya("Root logger has no level set.");
    return null
};
Od.prototype.log = function(a, b, c) {
    if (a.value >= Td(this).value)
        for (p(b) 
            && (b = b()), a = new Md(a, String(b), this.Be), c && (a.dd = c), c = "log:" + a.Ae, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this;
    c;
    ) {
        var d = c, e = a;
        if (d.hd)
            for (var f = 0; b = d.hd[f]; f++)
                b(e);
        c = c.getParent()
    }
};
var Ud = {}, Vd = null, Wd = function(a) {
    Vd || (Vd = new Od(""), Ud[""] = Vd, Vd.yd(Rd));
    var b;
    if (!(b = Ud[a])) {
        b = new Od(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Wd(a.substr(0, c));
        c.uc || (c.uc = {});
        c.uc[d] = b;
        b.m = c;
        Ud[a] = b
    }
    return b
};
var H = function(a, b) {
    a && a.log(Sd, b, void 0)
};
var Xd = function(a, b, c) {
    if (p(a))
        c && (a = q(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = q(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    return 2147483647 < Number(b)?-1 : l.setTimeout(a, b || 0)
}, Yd = function(a) {
    var b = null;
    return (new C(function(c, d) {
        b = Xd(function() {
            c(void 0)
        }, a);
        - 1 == b && d(Error("Failed to schedule timer."))
    })).g(function(a) {
        l.clearTimeout(b);
        throw a;
    })
};
var Zd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, $d = function(a, b) {
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("="), e, f = null;
            0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
            b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
    }
};
var I = function(a) {
    G.call(this);
    this.headers = new Gd;
    this.pc = a || null;
    this.pa=!1;
    this.oc = this.b = null;
    this.rb = this.md = this.Rb = "";
    this.Ba = this.Bc = this.Pb = this.wc=!1;
    this.eb = 0;
    this.kc = null;
    this.td = "";
    this.mc = this.Ge = this.Gd=!1
};
r(I, G);
var ae = I.prototype, be = Wd("goog.net.XhrIo");
ae.R = be;
var ce = /^https?$/i, de = ["POST", "PUT"];
I.prototype.send = function(a, b, c, d) {
    if (this.b)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Rb + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Rb = a;
    this.rb = "";
    this.md = b;
    this.wc=!1;
    this.pa=!0;
    this.b = this.pc ? this.pc.Eb() : pc.Eb();
    this.oc = this.pc ? oc(this.pc) : oc(pc);
    this.b.onreadystatechange = q(this.qd, this);
    this.Ge && "onprogress"in this.b && (this.b.onprogress = q(function(a) {
        this.pd(a, !0)
    }, this), this.b.upload && (this.b.upload.onprogress = q(this.pd, this)));
    try {
        H(this.R, ee(this, "Opening Xhr")),
        this.Bc=!0, this.b.open(b, String(a), !0), this.Bc=!1
    } catch (f) {
        H(this.R, ee(this, "Error opening Xhr: " + f.message));
        this.K(5, f);
        return 
    }
    a = c || "";
    var e = this.headers.clone();
    d && Ld(d, function(a, b) {
        e.set(b, a)
    });
    d = Ha(e.ia());
    c = l.FormData && a instanceof l.FormData;
    !Ia(de, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(a, b) {
        this.b.setRequestHeader(b, a)
    }, this);
    this.td && (this.b.responseType = this.td);
    "withCredentials"in this.b && this.b.withCredentials !== this.Gd && (this.b.withCredentials =
    this.Gd);
    try {
        fe(this), 0 < this.eb && (this.mc = ge(this.b), H(this.R, ee(this, "Will abort after " + this.eb + "ms if incomplete, xhr2 " + this.mc)), this.mc ? (this.b.timeout = this.eb, this.b.ontimeout = q(this.Ab, this)) : this.kc = Xd(this.Ab, this.eb, this)), H(this.R, ee(this, "Sending request")), this.Pb=!0, this.b.send(a), this.Pb=!1
    } catch (f) {
        H(this.R, ee(this, "Send error: " + f.message)), this.K(5, f)
    }
};
var ge = function(a) {
    return z && A(9) && fa(a.timeout) && void 0 !== a.ontimeout
}, Ga = function(a) {
    return "content-type" == a.toLowerCase()
};
I.prototype.Ab = function() {
    "undefined" != typeof aa && this.b && (this.rb = "Timed out after " + this.eb + "ms, aborting", H(this.R, ee(this, this.rb)), this.dispatchEvent("timeout"), this.abort(8))
};
I.prototype.K = function(a, b) {
    this.pa=!1;
    this.b && (this.Ba=!0, this.b.abort(), this.Ba=!1);
    this.rb = b;
    he(this);
    ie(this)
};
var he = function(a) {
    a.wc || (a.wc=!0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
I.prototype.abort = function() {
    this.b && this.pa && (H(this.R, ee(this, "Aborting")), this.pa=!1, this.Ba=!0, this.b.abort(), this.Ba=!1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ie(this))
};
I.prototype.Oa = function() {
    this.b && (this.pa && (this.pa=!1, this.Ba=!0, this.b.abort(), this.Ba=!1), ie(this, !0));
    I.Tc.Oa.call(this)
};
I.prototype.qd = function() {
    this.isDisposed() || (this.Bc || this.Pb || this.Ba ? je(this) : this.Ee())
};
I.prototype.Ee = function() {
    je(this)
};
var je = function(a) {
    if (a.pa && "undefined" != typeof aa)
        if (a.oc[1] && 4 == ke(a) && 2 == le(a))
            H(a.R, ee(a, "Local request error detected and ignored"));
        else if (a.Pb && 4 == ke(a))
            Xd(a.qd, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == ke(a)) {
            H(a.R, ee(a, "Request complete"));
            a.pa=!1;
            try {
                var b = le(a), c;
                a:
                switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c=!0;
                    break a;
                default:
                    c=!1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.Rb).match(Zd)[1] || null;
                        if (!f && l.self && l.self.location)
                            var g = l.self.location.protocol,
                            f = g.substr(0, g.length - 1);
                            e=!ce.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                }
                if (d)
                    a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    var k;
                    try {
                        k = 2 < ke(a) ? a.b.statusText : ""
                    } catch (t) {
                        H(a.R, "Can not get status: " + t.message), k = ""
                    }
                    a.rb = k + " [" + le(a) + "]";
                    he(a)
                }
            } finally {
                ie(a)
            }
    }
};
I.prototype.pd = function(a, b) {
    w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(me(a, "progress"));
    this.dispatchEvent(me(a, b ? "downloadprogress" : "uploadprogress"))
};
var me = function(a, b) {
    return {
        type: b,
        lengthComputable: a.lengthComputable,
        loaded: a.loaded,
        total: a.total
    }
}, ie = function(a, b) {
    if (a.b) {
        fe(a);
        var c = a.b, d = a.oc[0] ? ba: null;
        a.b = null;
        a.oc = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            (a = a.R) && a.log(Qd, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
    }
}, fe = function(a) {
    a.b && a.mc && (a.b.ontimeout = null);
    fa(a.kc) && (l.clearTimeout(a.kc), a.kc = null)
}, ke = function(a) {
    return a.b ? a.b.readyState : 0
}, le = function(a) {
    try {
        return 2 < ke(a) ?
        a.b.status : - 1
    } catch (b) {
        return - 1
    }
}, ne = function(a) {
    try {
        return a.b ? a.b.responseText : ""
    } catch (b) {
        return H(a.R, "Can not get responseText: " + b.message), ""
    }
}, ee = function(a, b) {
    return b + " [" + a.md + " " + a.Rb + " " + le(a) + "]"
};
var oe = function(a, b) {
    this.Z = this.Ha = this.da = "";
    this.Va = null;
    this.Aa = this.ra = "";
    this.N = this.ue=!1;
    var c;
    a instanceof oe ? (this.N = void 0 !== b ? b : a.N, pe(this, a.da), c = a.Ha, J(this), this.Ha = c, qe(this, a.Z), re(this, a.Va), se(this, a.ra), te(this, a.Y.clone()), a = a.Aa, J(this), this.Aa = a) : a && (c = String(a).match(Zd)) ? (this.N=!!b, pe(this, c[1] || "", !0), a = c[2] || "", J(this), this.Ha = ue(a), qe(this, c[3] || "", !0), re(this, c[4]), se(this, c[5] || "", !0), te(this, c[6] || "", !0), a = c[7] || "", J(this), this.Aa = ue(a)) : (this.N=!!b, this.Y = new K(null,
    0, this.N))
};
oe.prototype.toString = function() {
    var a = [], b = this.da;
    b && a.push(ve(b, we, !0), ":");
    var c = this.Z;
    if (c || "file" == b)
        a.push("//"), (b = this.Ha) && a.push(ve(b, we, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Va, null != c && a.push(":", String(c));
    if (c = this.ra)
        this.Z && "/" != c.charAt(0) && a.push("/"), a.push(ve(c, "/" == c.charAt(0) ? xe : ye, !0));
    (c = this.Y.toString()) && a.push("?", c);
    (c = this.Aa) && a.push("#", ve(c, ze));
    return a.join("")
};
oe.prototype.resolve = function(a) {
    var b = this.clone(), c=!!a.da;
    c ? pe(b, a.da) : c=!!a.Ha;
    if (c) {
        var d = a.Ha;
        J(b);
        b.Ha = d
    } else 
        c=!!a.Z;
    c ? qe(b, a.Z) : c = null != a.Va;
    d = a.ra;
    if (c)
        re(b, a.Va);
    else if (c=!!a.ra) {
        if ("/" != d.charAt(0))
            if (this.Z&&!this.ra)
                d = "/" + d;
            else {
                var e = b.ra.lastIndexOf("/");
                - 1 != e && (d = b.ra.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e)
            d = "";
        else if (v(e, "./") || v(e, "/.")) {
            for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                var k = e[g++];
                "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length ||
                1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d=!0)
            }
            d = f.join("/")
        } else 
            d = e
    }
    c ? se(b, d) : c = "" !== a.Y.toString();
    c ? te(b, a.Y.clone()) : c=!!a.Aa;
    c && (a = a.Aa, J(b), b.Aa = a);
    return b
};
oe.prototype.clone = function() {
    return new oe(this)
};
var pe = function(a, b, c) {
    J(a);
    a.da = c ? ue(b, !0) : b;
    a.da && (a.da = a.da.replace(/:$/, ""))
}, qe = function(a, b, c) {
    J(a);
    a.Z = c ? ue(b, !0) : b
}, re = function(a, b) {
    J(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.Va = b
    } else 
        a.Va = null
}, se = function(a, b, c) {
    J(a);
    a.ra = c ? ue(b, !0) : b
}, te = function(a, b, c) {
    J(a);
    b instanceof K ? (a.Y = b, a.Y.Qc(a.N)) : (c || (b = ve(b, Ae)), a.Y = new K(b, 0, a.N))
}, L = function(a, b, c) {
    J(a);
    a.Y.set(b, c)
}, Be = function(a, b) {
    J(a);
    a.Y.remove(b)
}, J = function(a) {
    if (a.ue)
        throw Error("Tried to modify a read-only Uri");
};
oe.prototype.Qc = function(a) {
    this.N = a;
    this.Y && this.Y.Qc(a);
    return this
};
var Ce = function(a) {
    return a instanceof oe ? a.clone() : new oe(a, void 0)
}, De = function(a, b) {
    var c = new oe(null, void 0);
    pe(c, "https");
    a && qe(c, a);
    b && se(c, b);
    return c
}, ue = function(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}, ve = function(a, b, c) {
    return n(a) ? (a = encodeURI(a).replace(b, Ee), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}, Ee = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}, we = /[#\/\?@]/g, ye = /[\#\?:]/g, xe = /[\#\?]/g, Ae = /[\#\?@]/g,
ze = /#/g, K = function(a, b, c) {
    this.l = this.h = null;
    this.J = a || null;
    this.N=!!c
}, Fe = function(a) {
    a.h || (a.h = new Gd, a.l = 0, a.J && $d(a.J, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
}, He = function(a) {
    var b = Kd(a);
    if ("undefined" == typeof b)
        throw Error("Keys are undefined");
    var c = new K(null, 0, void 0);
    a = Jd(a);
    for (var d = 0; d < b.length; d++) {
        var e = b[d], f = a[d];
        da(f) ? Ge(c, e, f) : c.add(e, f)
    }
    return c
};
h = K.prototype;
h.add = function(a, b) {
    Fe(this);
    this.J = null;
    a = this.M(a);
    var c = this.h.get(a);
    c || this.h.set(a, c = []);
    c.push(b);
    this.l = za(this.l) + 1;
    return this
};
h.remove = function(a) {
    Fe(this);
    a = this.M(a);
    return this.h.lb(a) ? (this.J = null, this.l = za(this.l) - this.h.get(a).length, this.h.remove(a)) : !1
};
h.lb = function(a) {
    Fe(this);
    a = this.M(a);
    return this.h.lb(a)
};
h.ia = function() {
    Fe(this);
    for (var a = this.h.V(), b = this.h.ia(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
h.V = function(a) {
    Fe(this);
    var b = [];
    if (n(a))
        this.lb(a) && (b = Ma(b, this.h.get(this.M(a))));
    else {
        a = this.h.V();
        for (var c = 0; c < a.length; c++)
            b = Ma(b, a[c])
    }
    return b
};
h.set = function(a, b) {
    Fe(this);
    this.J = null;
    a = this.M(a);
    this.lb(a) && (this.l = za(this.l) - this.h.get(a).length);
    this.h.set(a, [b]);
    this.l = za(this.l) + 1;
    return this
};
h.get = function(a, b) {
    a = a ? this.V(a) : [];
    return 0 < a.length ? String(a[0]) : b
};
var Ge = function(a, b, c) {
    a.remove(b);
    0 < c.length && (a.J = null, a.h.set(a.M(b), Na(c)), a.l = za(a.l) + c.length)
};
K.prototype.toString = function() {
    if (this.J)
        return this.J;
    if (!this.h)
        return "";
    for (var a = [], b = this.h.ia(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.V(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
    return this.J = a.join("&")
};
K.prototype.clone = function() {
    var a = new K;
    a.J = this.J;
    this.h && (a.h = this.h.clone(), a.l = this.l);
    return a
};
K.prototype.M = function(a) {
    a = String(a);
    this.N && (a = a.toLowerCase());
    return a
};
K.prototype.Qc = function(a) {
    a&&!this.N && (Fe(this), this.J = null, this.h.forEach(function(a, c) {
        var b = c.toLowerCase();
        c != b && (this.remove(c), Ge(this, b, a))
    }, this));
    this.N = a
};
var Ie = function() {
    var a = M();
    return z&&!!mb && 11 == mb || /Edge\/\d+/.test(a)
}, Je = function() {
    return l.window && l.window.location.href || ""
}, Ke = function(a, b) {
    var c = [], d;
    for (d in a)
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : da(a[d]) ? Sa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Ke(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
    for (d in b)
        d in a || c.push(d);
    return c
}, Me = function() {
    var a;
    a = M();
    a = "Chrome" != Le(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1],
    10) : null;
    return a && 30 > a?!1 : !z ||!mb || 9 < mb
}, Ne = function(a) {
    a = (a || M()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/)?!0 : !1
}, Oe = function(a) {
    a = a || l.window;
    try {
        a.close()
    } catch (b) {}
}, Pe = function(a, b, c) {
    var d = Math.floor(1E9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b) / 2;
    b = {
        width: b,
        height: c,
        top: 0 < e ? e: 0,
        left: 0 < f ? f: 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1
    };
    c = M().toLowerCase();
    d && (b.target = d, v(c, "crios/") && (b.target = "_blank"));
    "Firefox" == Le(M()) && (a = a || "http://localhost", b.scrollbars=!0);
    var g;
    c = a || "about:blank";
    (d = b) || (d = {});
    a = window;
    b = c instanceof B ? c : ec("undefined" != typeof c.href ? c.href : String(c));
    c = d.target || c.target;
    e = [];
    for (g in d)
        switch (g) {
        case "width":
        case "height":
        case "top":
        case "left":
            e.push(g + "=" + d[g]);
            break;
        case "target":
        case "noreferrer":
            break;
        default:
            e.push(g + "=" + (d[g] ? 1 : 0))
        }
    g = e.join(",");
    (y("iPhone")&&!y("iPod") &&
    !y("iPad") || y("iPad") || y("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement ||!(g instanceof Location || g instanceof Element)), f = ga(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",
    f)), b = b instanceof B ? b : ec(b), g.href = bc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = bc(b), g && (db && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = $b("b/12014412, meta tag with sanitized URL"), ua.test(d) && ( - 1 != d.indexOf("&") && (d = d.replace(na, "&amp;")), - 1 != d.indexOf("<") && (d = d.replace(oa, "&lt;")), - 1 != d.indexOf(">") && (d = d.replace(qa,
    "&gt;")), - 1 != d.indexOf('"') && (d = d.replace(ra, "&quot;")), - 1 != d.indexOf("'") && (d = d.replace(sa, "&#39;")), - 1 != d.indexOf("\x00") && (d = d.replace(ta, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Aa(Zb(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(Zb(a)), "must provide non-empty justification"), g.document.write(zc((new yc).se(d))), g.document.close())) : g = a.open(bc(b), c, g);
    if (g)
        try {
            g.focus()
    } catch (k) {}
    return g
}, Qe = function(a) {
    return new C(function(b) {
        var c = function() {
            Yd(2E3).then(function() {
                if (!a ||
                a.closed)
                    b();
                else 
                    return c()
            })
        };
        return c()
    })
}, Re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Se = function() {
    var a = null;
    return (new C(function(b) {
        "complete" == l.document.readyState ? b() : (a = function() {
            b()
        }, Pb(window, "load", a))
    })).g(function(b) {
        Rb(window, "load", a);
        throw b;
    })
}, N = function() {
    return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : l.hasOwnProperty("process") ? "Node" : "Browser"
}, Te = function() {
    var a = N();
    return "ReactNative" === a || "Node" === a
}, Le = function(a) {
    var b = a.toLowerCase();
    if (v(b, "opera/") ||
    v(b, "opr/") || v(b, "opios/"))
        return "Opera";
    if (v(b, "iemobile"))
        return "IEMobile";
    if (v(b, "msie") || v(b, "trident/"))
        return "IE";
    if (v(b, "edge/"))
        return "Edge";
    if (v(b, "firefox/"))
        return "Firefox";
    if (v(b, "silk/"))
        return "Silk";
    if (v(b, "blackberry"))
        return "Blackberry";
    if (v(b, "webos"))
        return "Webos";
    if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android"))
        if (!v(b, "chrome/")&&!v(b, "crios/") || v(b, "edge/")) {
            if (v(b, "android"))
                return "Android";
                if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)
                    return a[1]
        } else 
            return "Chrome";
            else 
                return "Safari";
    return "Other"
}, Ue = function(a) {
    var b = N();
    return ("Browser" === b ? Le(M()) : b) + "/JsCore/" + a
}, M = function() {
    return l.navigator && l.navigator.userAgent || ""
}, Ve = function(a) {
    a = a.split(".");
    for (var b = l, c = 0; c < a.length && "object" == typeof b && null != b; c++)
        b = b[a[c]];
    c != a.length && (b = void 0);
    return b
}, Ye = function() {
    var a;
    if (a = ("http:" === We() || "https:" === We())&&!Te())
        a: {
        try {
            var b = l.localStorage, c = Xe();
            if (b) {
                b.setItem(c, "1");
                b.removeItem(c);
                a = Ie()?!!l.indexedDB : !0;
                break a
            }
        } catch (d) {}
        a=!1
    }
    return a
}, We =
function() {
    return l.location && l.location.protocol || null
}, Ze = function(a) {
    a = a || M();
    return Ne(a) || "Firefox" == Le(a)?!1 : !0
}, $e = function(a) {
    return "undefined" === typeof a ? null : jc(a)
}, af = function(a) {
    var b = {}, c;
    for (c in a)
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
    return b
}, bf = function(a) {
    if (null !== a) {
        var b;
        try {
            b = gc(a)
        } catch (c) {
            try {
                b = JSON.parse(a)
            } catch (d) {
                throw c;
            }
        }
        return b
    }
}, Xe = function(a) {
    return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
}, cf = function(a) {
    a = a || M();
    return "Safari" == Le(a) ||
    a.toLowerCase().match(/iphone|ipad|ipod/)?!1 : !0
}, df = function() {
    var a = l.___jsl;
    if (a && a.H)
        for (var b in a.H)
            if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
                for (var c = 0; c < a.CP.length; c++)
                    a.CP[c] = null
}, ef = function(a, b, c, d) {
    if (a > b)
        throw Error("Short delay should be less than long delay!");
    this.Ne = a;
    this.ze = b;
    a = c || M();
    d = d || N();
    this.te = Ne(a) || "ReactNative" === d
};
ef.prototype.get = function() {
    return this.te ? this.ze : this.Ne
};
var ff;
try {
    var gf = {};
    Object.defineProperty(gf, "abcd", {
        configurable: !0,
        enumerable: !0,
        value: 1
    });
    Object.defineProperty(gf, "abcd", {
        configurable: !0,
        enumerable: !0,
        value: 2
    });
    ff = 2 == gf.abcd
} catch (a) {
    ff=!1
}
var O = function(a, b, c) {
    ff ? Object.defineProperty(a, b, {
        configurable: !0,
        enumerable: !0,
        value: c
    }) : a[b] = c
}, hf = function(a, b) {
    if (b)
        for (var c in b)
            b.hasOwnProperty(c) && O(a, c, b[c])
}, jf = function(a) {
    var b = {}, c;
    for (c in a)
        a.hasOwnProperty(c) && (b[c] = a[c]);
    return b
}, kf = function(a, b) {
    if (!b ||!b.length)
        return !0;
    if (!a)
        return !1;
    for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (void 0 === d || null === d || "" === d)
            return !1
    }
    return !0
}, lf = function(a) {
    var b = a;
    if ("object" == typeof a && null != a) {
        var b = "length"in a ? []: {}, c;
        for (c in a)
            O(b, c,
            lf(a[c]))
    }
    return b
};
var mf = ["client_id", "response_type", "scope", "redirect_uri", "state"], nf = {
    Hd: {
        vb: 500,
        ub: 600,
        providerId: "facebook.com",
        cc: mf
    },
    Id: {
        vb: 500,
        ub: 620,
        providerId: "github.com",
        cc: mf
    },
    Jd: {
        vb: 515,
        ub: 680,
        providerId: "google.com",
        cc: mf
    },
    Od: {
        vb: 485,
        ub: 705,
        providerId: "twitter.com",
        cc: "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
    }
}, of = function(a) {
    for (var b in nf)
        if (nf[b].providerId == a)
            return nf[b];
    return null
}, pf = function(a) {
    return (a = of(a)) &&
    a.cc || []
};
var P = function(a, b) {
    this.code = "auth/" + a;
    this.message = b || qf[a] || ""
};
r(P, Error);
P.prototype.I = function() {
    return {
        name: this.code,
        code: this.code,
        message: this.message
    }
};
var qf = {
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "missing-iframe-start": "An internal error has occurred.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "user-cancelled": "User did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
};
var rf = function(a, b, c, d, e) {
    this.xa = a;
    this.U = b || null;
    this.gb = c || null;
    this.ec = d || null;
    this.K = e || null;
    if (this.gb || this.K) {
        if (this.gb && this.K)
            throw new P("invalid-auth-event");
        if (this.gb&&!this.ec)
            throw new P("invalid-auth-event");
    } else 
        throw new P("invalid-auth-event");
};
rf.prototype.getError = function() {
    return this.K
};
rf.prototype.I = function() {
    return {
        type: this.xa,
        eventId: this.U,
        urlResponse: this.gb,
        sessionId: this.ec,
        error: this.K && this.K.I()
    }
};
var sf = function(a) {
    var b = "unauthorized-domain", c = void 0, d = Ce(a);
    a = d.Z;
    d = d.da;
    "http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);
    P.call(this, b, c)
};
r(sf, P);
var tf = function(a) {
    this.ye = a.sub;
    ka();
    this.Fb = a.email || null
};
var uf = function(a, b, c, d) {
    var e = {};
    ga(c) ? e = c : b && n(c) && n(d) ? e = {
        oauthToken: c,
        oauthTokenSecret: d
    } : !b && n(c) && (e = {
        accessToken: c
    });
    if (b ||!e.idToken&&!e.accessToken)
        if (b && e.oauthToken && e.oauthTokenSecret)
            O(this, "accessToken", e.oauthToken), O(this, "secret", e.oauthTokenSecret);
        else {
            if (b)
                throw new P("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                throw new P("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
        } else 
            e.idToken && O(this,
            "idToken", e.idToken), e.accessToken && O(this, "accessToken", e.accessToken);
    O(this, "provider", a)
};
uf.prototype.Hb = function(a) {
    return vf(a, wf(this))
};
uf.prototype.nd = function(a, b) {
    var c = wf(this);
    c.idToken = b;
    return xf(a, c)
};
var wf = function(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.provider;
    return {
        postBody: He(b).toString(),
        requestUri: Ye() ? Je(): "http://localhost"
    }
};
uf.prototype.I = function() {
    var a = {
        provider: this.provider
    };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    return a
};
var yf = function(a, b, c) {
    var d=!!b, e = c || [];
    b = function() {
        hf(this, {
            providerId: a,
            isOAuthProvider: !0
        });
        this.Pc = [];
        this.ad = {};
        "google.com" == a && this.addScope("profile")
    };
    d || (b.prototype.addScope = function(a) {
        Ia(this.Pc, a) || this.Pc.push(a)
    });
    b.prototype.setCustomParameters = function(a) {
        this.ad = Ta(a)
    };
    b.prototype.ge = function() {
        var a = af(this.ad), b;
        for (b in a)
            a[b] = a[b].toString();
        a = Ta(a);
        for (b = 0; b < e.length; b++) {
            var c = e[b];
            c in a && delete a[c]
        }
        return a
    };
    b.prototype.he = function() {
        return Na(this.Pc)
    };
    b.credential =
    function(b, c) {
        return new uf(a, d, b, c)
    };
    hf(b, {
        PROVIDER_ID: a
    });
    return b
}, zf = yf("facebook.com", !1, pf("facebook.com"));
zf.prototype.addScope = zf.prototype.addScope || void 0;
var Af = yf("github.com", !1, pf("github.com"));
Af.prototype.addScope = Af.prototype.addScope || void 0;
var Bf = yf("google.com", !1, pf("google.com"));
Bf.prototype.addScope = Bf.prototype.addScope || void 0;
Bf.credential = function(a, b) {
    if (!a&&!b)
        throw new P("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new uf("google.com", !1, ga(a) ? a : {
        idToken: a || null,
        accessToken: b || null
    })
};
var Cf = yf("twitter.com", !0, pf("twitter.com")), Df = function(a, b) {
    this.Fb = a;
    this.Ic = b;
    O(this, "provider", "password")
};
Df.prototype.Hb = function(a) {
    return Q(a, Ef, {
        email: this.Fb,
        password: this.Ic
    })
};
Df.prototype.nd = function(a, b) {
    return Q(a, Ff, {
        idToken: b,
        email: this.Fb,
        password: this.Ic
    })
};
Df.prototype.I = function() {
    return {
        email: this.Fb,
        password: this.Ic
    }
};
var Gf = function() {
    hf(this, {
        providerId: "password",
        isOAuthProvider: !1
    })
};
hf(Gf, {
    PROVIDER_ID: "password"
});
var Hf = {
    $e: Gf,
    Hd: zf,
    Jd: Bf,
    Id: Af,
    Od: Cf
}, If = function(a) {
    var b = a && a.providerId;
    if (!b)
        return null;
    var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret;
    a = a && a.oauthIdToken;
    for (var e in Hf)
        if (Hf[e].PROVIDER_ID == b)
            try {
                return Hf[e].credential({
                    accessToken: c,
                    idToken: a,
                    oauthToken: c,
                    oauthTokenSecret: d
                })
    } catch (f) {
        break
    }
    return null
}, Jf = function(a) {
    if (!a.isOAuthProvider)
        throw new P("invalid-oauth-provider");
};
var Kf = function(a, b, c, d) {
    P.call(this, a, d);
    O(this, "email", b);
    O(this, "credential", c)
};
r(Kf, P);
Kf.prototype.I = function() {
    var a = {
        code: this.code,
        message: this.message,
        email: this.email
    }, b = this.credential && this.credential.I();
    b && (Va(a, b), a.providerId = b.provider, delete a.provider);
    return a
};
var Lf = function(a) {
    if (a.code) {
        var b = a.code || "";
        0 == b.indexOf("auth/") && (b = b.substring(5));
        return a.email ? new Kf(b, a.email, If(a), a.message) : new P(b, a.message || void 0)
    }
    return null
};
var Mf = function(a) {
    this.Ze = a
};
r(Mf, nc);
Mf.prototype.Eb = function() {
    return new this.Ze
};
Mf.prototype.Cc = function() {
    return {}
};
var R = function(a, b, c) {
    var d;
    d = "Node" == N();
    d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
    if (!d)
        throw new P("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.i = a;
    a = b || {};
    this.Je = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.Ke = a.secureTokenTimeout || Nf;
    this.wd = Ta(a.secureTokenHeaders || Of);
    this.be = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.ce = a.firebaseTimeout ||
    Pf;
    this.fd = Ta(a.firebaseHeaders || Qf);
    c && (this.fd["X-Client-Version"] = c, this.wd["X-Client-Version"] = c);
    this.Td = new sc;
    this.Ye = new Mf(d)
}, Rf, Nf = new ef(1E4, 3E4), Of = {
    "Content-Type": "application/x-www-form-urlencoded"
}, Pf = new ef(1E4, 3E4), Qf = {
    "Content-Type": "application/json"
}, Tf = function(a, b, c, d, e, f, g) {
    Me() ? a = q(a.Me, a) : (Rf || (Rf = new C(function(a, b) {
        Sf(a, b)
    })), a = q(a.Le, a));
    a(b, c, d, e, f, g)
};
R.prototype.Me = function(a, b, c, d, e, f) {
    var g = "Node" == N(), k = Te() ? g ? new I(this.Ye): new I: new I(this.Td), t;
    f && (k.eb = Math.max(0, f), t = setTimeout(function() {
        k.dispatchEvent("timeout")
    }, f));
    k.listen("complete", function() {
        t && clearTimeout(t);
        var a = null;
        try {
            var c;
            c = this.b ? gc(this.b.responseText) : void 0;
            a = c || null
        } catch (Ei) {
            try {
                a = JSON.parse(ne(this)) || null
            } catch (Fi) {
                a = null
            }
        }
        b && b(a)
    });
    Qb(k, "ready", function() {
        t && clearTimeout(t);
        this.za || (this.za=!0, this.Oa())
    });
    Qb(k, "timeout", function() {
        t && clearTimeout(t);
        this.za ||
        (this.za=!0, this.Oa());
        b && b(null)
    });
    k.send(a, c, d, e)
};
var rd = "__fcb" + Math.floor(1E6 * Math.random()).toString(), Sf = function(a, b) {
    ((window.gapi || {}).client || {}).request ? a() : (l[rd] = function() {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
    }, td(function() {
        b(Error("CORS_UNSUPPORTED"))
    }))
};
R.prototype.Le = function(a, b, c, d, e) {
    var f = this;
    Rf.then(function() {
        window.gapi.client.setApiKey(f.i);
        var g = window.gapi.auth.getToken();
        window.gapi.auth.setToken(null);
        window.gapi.client.request({
            path: a,
            method: c,
            body: d,
            headers: e,
            authType: "none",
            callback: function(a) {
                window.gapi.auth.setToken(g);
                b && b(a)
            }
        })
    }).g(function(a) {
        b && b({
            error: {
                message: a && a.message || "CORS_UNSUPPORTED"
            }
        })
    })
};
var Vf = function(a, b) {
    return new C(function(c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Tf(a, a.Je + "?key=" + encodeURIComponent(a.i), function(a) {
            a ? a.error ? d(Uf(a)) : a.access_token && a.refresh_token ? c(a) : d(new P("internal-error")) : d(new P("network-request-failed"))
        }, "POST", He(b).toString(), a.wd, a.Ke.get()) : d(new P("internal-error"))
    })
}, Wf = function(a, b, c, d, e) {
    var f = Ce(a.be + b);
    L(f, "key", a.i);
    e && L(f, "cb", ka().toString());
    var g = "GET" == c;
    if (g)
        for (var k in d)
            d.hasOwnProperty(k) &&
            L(f, k, d[k]);
    return new C(function(b, e) {
        Tf(a, f.toString(), function(a) {
            a ? a.error ? e(Uf(a)) : b(a) : e(new P("network-request-failed"))
        }, c, g ? void 0 : jc(af(d)), a.fd, a.ce.get())
    })
}, Xf = function(a) {
    if (!Wb.test(a.email))
        throw new P("invalid-email");
}, Yf = function(a) {
    "email"in a && Xf(a)
}, $f = function(a, b) {
    var c = Ye() ? Je(): "http://localhost";
    return Q(a, Zf, {
        identifier: b,
        continueUri: c
    }).then(function(a) {
        return a.allProviders || []
    })
}, bg = function(a) {
    return Q(a, ag, {}).then(function(a) {
        return a.authorizedDomains || []
    })
}, cg =
function(a) {
    if (!a.idToken)
        throw new P("internal-error");
};
R.prototype.signInAnonymously = function() {
    return Q(this, dg, {})
};
R.prototype.updateEmail = function(a, b) {
    return Q(this, eg, {
        idToken: a,
        email: b
    })
};
R.prototype.updatePassword = function(a, b) {
    return Q(this, Ff, {
        idToken: a,
        password: b
    })
};
var fg = {
    displayName: "DISPLAY_NAME",
    photoUrl: "PHOTO_URL"
};
R.prototype.updateProfile = function(a, b) {
    var c = {
        idToken: a
    }, d = [];
    Oa(fg, function(a, f) {
        var e = b[f];
        null === e ? d.push(a) : f in b && (c[f] = e)
    });
    d.length && (c.deleteAttribute = d);
    return Q(this, eg, c)
};
R.prototype.sendPasswordResetEmail = function(a) {
    return Q(this, gg, {
        requestType: "PASSWORD_RESET",
        email: a
    })
};
R.prototype.sendEmailVerification = function(a) {
    return Q(this, hg, {
        requestType: "VERIFY_EMAIL",
        idToken: a
    })
};
var jg = function(a, b, c) {
    return Q(a, ig, {
        idToken: b,
        deleteProvider: c
    })
}, kg = function(a) {
    if (!a.requestUri ||!a.sessionId&&!a.postBody)
        throw new P("internal-error");
}, lg = function(a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Lf(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Lf(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = Lf(a));
    if (b)
        throw b;
    if (!a.idToken)
        throw new P("internal-error");
}, vf = function(a,
b) {
    b.returnIdpCredential=!0;
    return Q(a, mg, b)
}, xf = function(a, b) {
    b.returnIdpCredential=!0;
    return Q(a, ng, b)
}, og = function(a) {
    if (!a.oobCode)
        throw new P("invalid-action-code");
};
R.prototype.confirmPasswordReset = function(a, b) {
    return Q(this, pg, {
        oobCode: a,
        newPassword: b
    })
};
R.prototype.checkActionCode = function(a) {
    return Q(this, qg, {
        oobCode: a
    })
};
R.prototype.applyActionCode = function(a) {
    return Q(this, rg, {
        oobCode: a
    })
};
var rg = {
    endpoint: "setAccountInfo",
    F: og,
    bb: "email"
}, qg = {
    endpoint: "resetPassword",
    F: og,
    va: function(a) {
        if (!a.email ||!a.requestType)
            throw new P("internal-error");
    }
}, sg = {
    endpoint: "signupNewUser",
    F: function(a) {
        Xf(a);
        if (!a.password)
            throw new P("weak-password");
    },
    va: cg,
    wa: !0
}, Zf = {
    endpoint: "createAuthUri"
}, tg = {
    endpoint: "deleteAccount",
    ab: ["idToken"]
}, ig = {
    endpoint: "setAccountInfo",
    ab: ["idToken", "deleteProvider"],
    F: function(a) {
        if (!da(a.deleteProvider))
            throw new P("internal-error");
    }
}, ug = {
    endpoint: "getAccountInfo"
},
hg = {
    endpoint: "getOobConfirmationCode",
    ab: ["idToken", "requestType"],
    F: function(a) {
        if ("VERIFY_EMAIL" != a.requestType)
            throw new P("internal-error");
    },
    bb: "email"
}, gg = {
    endpoint: "getOobConfirmationCode",
    ab: ["requestType"],
    F: function(a) {
        if ("PASSWORD_RESET" != a.requestType)
            throw new P("internal-error");
        Xf(a)
    },
    bb: "email"
}, ag = {
    Sd: !0,
    endpoint: "getProjectConfig",
    oe: "GET"
}, pg = {
    endpoint: "resetPassword",
    F: og,
    bb: "email"
}, eg = {
    endpoint: "setAccountInfo",
    ab: ["idToken"],
    F: Yf,
    wa: !0
}, Ff = {
    endpoint: "setAccountInfo",
    ab: ["idToken"],
    F: function(a) {
        Yf(a);
        if (!a.password)
            throw new P("weak-password");
        },
    va: cg,
    wa: !0
}, dg = {
    endpoint: "signupNewUser",
    va: cg,
    wa: !0
}, mg = {
    endpoint: "verifyAssertion",
    F: kg,
    va: lg,
    wa: !0
}, ng = {
    endpoint: "verifyAssertion",
    F: function(a) {
        kg(a);
        if (!a.idToken)
            throw new P("internal-error");
    },
    va: lg,
    wa: !0
}, vg = {
    endpoint: "verifyCustomToken",
    F: function(a) {
        if (!a.token)
            throw new P("invalid-custom-token");
    },
    va: cg,
    wa: !0
}, Ef = {
    endpoint: "verifyPassword",
    F: function(a) {
        Xf(a);
        if (!a.password)
            throw new P("wrong-password");
    },
    va: cg,
    wa: !0
}, Q =
function(a, b, c) {
    if (!kf(c, b.ab))
        return E(new P("internal-error"));
    var d = b.oe || "POST", e;
    return D(c).then(b.F).then(function() {
        b.wa && (c.returnSecureToken=!0);
        return Wf(a, b.endpoint, d, c, b.Sd ||!1)
    }).then(function(a) {
        return e = a
    }).then(b.va).then(function() {
        if (!b.bb)
            return e;
        if (!(b.bb in e))
            throw new P("internal-error");
        return e[b.bb]
    })
}, Uf = function(a) {
    var b, c;
    c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {
        keyInvalid: "invalid-api-key",
        ipRefererBlocked: "app-not-authorized"
    };
    if (c = d[c] ?
    new P(d[c]) : null)
        return c;
    c = a.error && a.error.message || "";
    d = {
        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_EMAIL: "invalid-email",
        INVALID_PASSWORD: "wrong-password",
        USER_DISABLED: "user-disabled",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        EMAIL_NOT_FOUND: "user-not-found",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported",
        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        WEAK_PASSWORD: "weak-password",
        OPERATION_NOT_ALLOWED: "operation-not-allowed",
        USER_CANCELLED: "user-cancelled"
    };
    b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;
    for (var e in d)
        if (0 === c.indexOf(e))
            return new P(d[e], b);
    !b && a && (b = $e(a));
    return new P("internal-error", b)
};
var wg = function(a) {
    this.S = a
};
wg.prototype.value = function() {
    return this.S
};
wg.prototype.zd = function(a) {
    this.S.style = a;
    return this
};
var xg = function(a) {
    this.S = a || {}
};
xg.prototype.value = function() {
    return this.S
};
xg.prototype.zd = function(a) {
    this.S.style = a;
    return this
};
var zg = function(a) {
    this.Xe = a;
    this.Nb = null;
    this.Gc = yg(this)
}, Ag = function(a) {
    var b = new xg;
    b.S.where = document.body;
    b.S.url = a.Xe;
    b.S.messageHandlersFilter = Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");
    b.S.attributes = b.S.attributes || {};
    (new wg(b.S.attributes)).zd({
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    });
    b.S.dontclear=!0;
    return b
}, yg = function(a) {
    return Bg().then(function() {
        return new C(function(b, c) {
            Ve("gapi.iframes.getContext")().open(Ag(a).value(), function(d) {
                a.Nb = d;
                a.Nb.restyle({
                    setHideOnLeave: !1
                });
                var e = setTimeout(function() {
                    c(Error("Network Error"))
                }, Cg.get()), f = function() {
                    clearTimeout(e);
                    b()
                };
                d.ping(f).then(f, function() {
                    c(Error("Network Error"))
                })
            })
        })
    })
};
zg.prototype.sendMessage = function(a) {
    var b = this;
    return this.Gc.then(function() {
        return new C(function(c) {
            b.Nb.send(a.type, a, c, Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        })
    })
};
var Dg = function(a, b) {
    a.Gc.then(function() {
        a.Nb.register("authEvent", b, Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
    })
}, Eg = new ef(3E3, 15E3), Cg = new ef(5E3, 15E3), Bg = function() {
    return new C(function(a, b) {
        var c = function() {
            df();
            Ve("gapi.load")("gapi.iframes", {
                callback: a,
                ontimeout: function() {
                    df();
                    b(Error("Network Error"))
                },
                timeout: Eg.get()
            })
        };
        if (Ve("gapi.iframes.Iframe"))
            a();
        else if (Ve("gapi.load"))
            c();
        else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
            l[d] = function() {
                Ve("gapi.load") ? c() :
                b(Error("Network Error"))
            };
            D(qd("https://apis.google.com/js/api.js?onload=" + d)).g(function() {
                b(Error("Network Error"))
            })
        }
    })
};
var Fg = function(a, b, c) {
    this.v = a;
    this.i = b;
    this.B = c;
    this.Ia = null;
    this.o = De(this.v, "/__/auth/iframe");
    L(this.o, "apiKey", this.i);
    L(this.o, "appName", this.B)
};
Fg.prototype.setVersion = function(a) {
    this.Ia = a;
    return this
};
Fg.prototype.toString = function() {
    this.Ia ? L(this.o, "v", this.Ia) : Be(this.o, "v");
    return this.o.toString()
};
var Gg = function(a, b, c, d, e) {
    this.v = a;
    this.i = b;
    this.B = c;
    this.Rd = d;
    this.Ia = this.U = this.Nc = null;
    this.Zb = e;
    this.o = De(this.v, "/__/auth/handler");
    L(this.o, "apiKey", this.i);
    L(this.o, "appName", this.B);
    L(this.o, "authType", this.Rd)
};
Gg.prototype.setVersion = function(a) {
    this.Ia = a;
    return this
};
Gg.prototype.toString = function() {
    if (this.Zb.isOAuthProvider) {
        L(this.o, "providerId", this.Zb.providerId);
        var a = this.Zb.he();
        a && a.length && L(this.o, "scopes", a.join(","));
        a = this.Zb.ge();
        Ra(a) || L(this.o, "customParameters", $e(a))
    }
    this.Nc ? L(this.o, "redirectUrl", this.Nc) : Be(this.o, "redirectUrl");
    this.U ? L(this.o, "eventId", this.U) : Be(this.o, "eventId");
    this.Ia ? L(this.o, "v", this.Ia) : Be(this.o, "v");
    return this.o.toString()
};
var Hg = function(a, b, c, d) {
    this.v = a;
    this.i = b;
    this.B = c;
    this.ee = (this.kb = d || null) ? Ue(this.kb) : null;
    d = this.kb;
    this.pe = (new Fg(a, b, c)).setVersion(d).toString();
    this.jb = [];
    this.f = new R(b, null, this.ee);
    this.Qb = this.qa = null
}, Ig = function(a) {
    var b = Je();
    return bg(a).then(function(a) {
        a: {
            for (var c = Ce(b), e = c.da, c = c.Z, f = 0; f < a.length; f++) {
                var g;
                var k = a[f];
                g = c;
                var t = e;
                0 == k.indexOf("chrome-extension://") ? g = Ce(k).Z == g && "chrome-extension" == t : "http" != t && "https" != t ? g=!1 : Re.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = (new RegExp("^(.+\\." +
                k + "|" + k + ")$", "i")).test(g));
                if (g) {
                    a=!0;
                    break a
                }
            }
            a=!1
        }
        if (!a)
            throw new sf(Je());
    })
};
Hg.prototype.qb = function() {
    if (this.Qb)
        return this.Qb;
    var a = this;
    return this.Qb = Se().then(function() {
        a.Mb = new zg(a.pe);
        Jg(a)
    })
};
Hg.prototype.fc = function(a, b, c) {
    var d = new P("popup-closed-by-user"), e = new P("web-storage-unsupported"), f = this, g=!1;
    return Kg(this).then(function() {
        Lg(f).then(function(c) {
            c || (a && Oe(a), b(e), g=!0)
        })
    }).g(function() {}).then(function() {
        if (!g)
            return Qe(a)
    }).then(function() {
        if (!g)
            return Yd(c).then(function() {
                b(d)
            })
    })
};
Hg.prototype.Xb = function(a, b, c, d, e, f, g) {
    if (!a)
        return E(new P("popup-blocked"));
    if (g)
        return Kg(this).g(function(b) {
            Oe(a);
            e(b)
        }), d(), D();
    this.qa || (this.qa = Ig(this.f));
    var k = this;
    return this.qa.then(function() {
        var b = Kg(k).g(function(b) {
            Oe(a);
            e(b);
            throw b;
        });
        d();
        return b
    }).then(function() {
        Jf(c);
        var d = Mg(k.v, k.i, k.B, b, c, null, f, k.kb);
        (a || l.window).location.href = bc(ec(d))
    }).g(function(a) {
        "auth/network-request-failed" == a.code && (k.qa = null);
        throw a;
    })
};
Hg.prototype.Yb = function(a, b, c) {
    this.qa || (this.qa = Ig(this.f));
    var d = this;
    return this.qa.then(function() {
        Jf(b);
        var e = Mg(d.v, d.i, d.B, a, b, Je(), c, d.kb);
        l.window.location.href = bc(ec(e))
    })
};
var Kg = function(a) {
    return a.qb().then(function() {
        return a.Mb.Gc
    }).g(function() {
        a.qa = null;
        throw new P("network-request-failed");
    })
}, Mg = function(a, b, c, d, e, f, g, k) {
    a = new Gg(a, b, c, d, e);
    a.Nc = f;
    a.U = g;
    return a.setVersion(k).toString()
}, Jg = function(a) {
    if (!a.Mb)
        throw Error("IfcHandler must be initialized!");
    Dg(a.Mb, function(b) {
        var c = {};
        if (b && b.authEvent) {
            var d=!1;
            b = b.authEvent || {};
            if (b.type) {
                if (c = b.error)
                    var e = (c = b.error) && (c.name || c.code), c = e ? new P(e.substring(5), c.message): null;
                b = new rf(b.type, b.eventId,
                b.urlResponse, b.sessionId, c)
            } else 
                b = null;
            for (c = 0; c < a.jb.length; c++)
                d = a.jb[c](b) || d;
            c = {};
            c.status = d ? "ACK" : "ERROR";
            return D(c)
        }
        c.status = "ERROR";
        return D(c)
    })
}, Lg = function(a) {
    var b = {
        type: "webStorageSupport"
    };
    return a.qb().then(function() {
        return a.Mb.sendMessage(b)
    }).then(function(a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport)
            return a[0].webStorageSupport;
        throw Error();
    })
}, Ng = function(a, b) {
    La(a.jb, function(a) {
        return a == b
    })
};
var Og = function(a) {
    this.u = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
    if (!this.u)
        throw new P("internal-error", "The React Native compatibility library was not found.");
};
h = Og.prototype;
h.get = function(a) {
    return D(this.u.getItem(a)).then(function(a) {
        return a && bf(a)
    })
};
h.set = function(a, b) {
    return D(this.u.setItem(a, $e(b)))
};
h.remove = function(a) {
    return D(this.u.removeItem(a))
};
h.Ka = function() {};
h.Za = function() {};
var Pg = function() {
    this.u = {}
};
h = Pg.prototype;
h.get = function(a) {
    return D(this.u[a])
};
h.set = function(a, b) {
    this.u[a] = b;
    return D()
};
h.remove = function(a) {
    delete this.u[a];
    return D()
};
h.Ka = function() {};
h.Za = function() {};
var Rg = function() {
    if (!Qg()) {
        if ("Node" == N())
            throw new P("internal-error", "The LocalStorage compatibility library was not found.");
        throw new P("web-storage-unsupported");
    }
    this.u = l.localStorage || firebase.INTERNAL.node.localStorage
}, Qg = function() {
    var a = "Node" == N(), a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
    if (!a)
        return !1;
    try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
    } catch (b) {
        return !1
    }
};
h = Rg.prototype;
h.get = function(a) {
    var b = this;
    return D().then(function() {
        var c = b.u.getItem(a);
        return bf(c)
    })
};
h.set = function(a, b) {
    var c = this;
    return D().then(function() {
        var d = $e(b);
        null === d ? c.remove(a) : c.u.setItem(a, d)
    })
};
h.remove = function(a) {
    var b = this;
    return D().then(function() {
        b.u.removeItem(a)
    })
};
h.Ka = function(a) {
    l.window && Ib(l.window, "storage", a)
};
h.Za = function(a) {
    l.window && Rb(l.window, "storage", a)
};
var Sg = function() {
    this.u = {}
};
h = Sg.prototype;
h.get = function() {
    return D(null)
};
h.set = function() {
    return D()
};
h.remove = function() {
    return D()
};
h.Ka = function() {};
h.Za = function() {};
var Ug = function() {
    if (!Tg()) {
        if ("Node" == N())
            throw new P("internal-error", "The SessionStorage compatibility library was not found.");
        throw new P("web-storage-unsupported");
    }
    this.u = l.sessionStorage || firebase.INTERNAL.node.sessionStorage
}, Tg = function() {
    var a = "Node" == N(), a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
    if (!a)
        return !1;
    try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
    } catch (b) {
        return !1
    }
};
h = Ug.prototype;
h.get = function(a) {
    var b = this;
    return D().then(function() {
        var c = b.u.getItem(a);
        return bf(c)
    })
};
h.set = function(a, b) {
    var c = this;
    return D().then(function() {
        var d = $e(b);
        null === d ? c.remove(a) : c.u.setItem(a, d)
    })
};
h.remove = function(a) {
    var b = this;
    return D().then(function() {
        b.u.removeItem(a)
    })
};
h.Ka = function() {};
h.Za = function() {};
var Vg = function(a, b, c, d, e, f) {
    if (!window.indexedDB)
        throw new P("web-storage-unsupported");
    this.Vd = a;
    this.Fc = b;
    this.vc = c;
    this.Fd = d;
    this.hb = e;
    this.P = {};
    this.yb = [];
    this.tb = 0;
    this.qe = f || l.indexedDB
}, Wg, Xg = function(a) {
    return new C(function(b, c) {
        var d = a.qe.open(a.Vd, a.hb);
        d.onerror = function(a) {
            c(Error(a.target.errorCode))
        };
        d.onupgradeneeded = function(b) {
            b = b.target.result;
            try {
                b.createObjectStore(a.Fc, {
                    keyPath: a.vc
                })
            } catch (f) {
                c(f)
            }
        };
        d.onsuccess = function(a) {
            b(a.target.result)
        }
    })
}, Yg = function(a) {
    a.kd || (a.kd =
    Xg(a));
    return a.kd
}, Zg = function(a, b) {
    return b.objectStore(a.Fc)
}, $g = function(a, b, c) {
    return b.transaction([a.Fc], c ? "readwrite" : "readonly")
}, ah = function(a) {
    return new C(function(b, c) {
        a.onsuccess = function(a) {
            a && a.target ? b(a.target.result) : b()
        };
        a.onerror = function(a) {
            c(Error(a.target.errorCode))
        }
    })
};
h = Vg.prototype;
h.set = function(a, b) {
    var c=!1, d, e = this;
    return ad(Yg(this).then(function(b) {
        d = b;
        b = Zg(e, $g(e, d, !0));
        return ah(b.get(a))
    }).then(function(f) {
        var g = Zg(e, $g(e, d, !0));
        if (f)
            return f.value = b, ah(g.put(f));
        e.tb++;
        c=!0;
        f = {};
        f[e.vc] = a;
        f[e.Fd] = b;
        return ah(g.add(f))
    }).then(function() {
        e.P[a] = b
    }), function() {
        c && e.tb--
    })
};
h.get = function(a) {
    var b = this;
    return Yg(this).then(function(c) {
        return ah(Zg(b, $g(b, c, !1)).get(a))
    }).then(function(a) {
        return a && a.value
    })
};
h.remove = function(a) {
    var b=!1, c = this;
    return ad(Yg(this).then(function(d) {
        b=!0;
        c.tb++;
        return ah(Zg(c, $g(c, d, !0))["delete"](a))
    }).then(function() {
        delete c.P[a]
    }), function() {
        b && c.tb--
    })
};
h.Pe = function() {
    var a = this;
    return Yg(this).then(function(b) {
        var c = Zg(a, $g(a, b, !1));
        return c.getAll ? ah(c.getAll()) : new C(function(a, b) {
            var d = [], e = c.openCursor();
            e.onsuccess = function(b) {
                (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d)
            };
            e.onerror = function(a) {
                b(Error(a.target.errorCode))
            }
        })
    }).then(function(b) {
        var c = {}, d = [];
        if (0 == a.tb) {
            for (d = 0; d < b.length; d++)
                c[b[d][a.vc]] = b[d][a.Fd];
            d = Ke(a.P, c);
            a.P = c
        }
        return d
    })
};
h.Ka = function(a) {
    0 == this.yb.length && this.Sc();
    this.yb.push(a)
};
h.Za = function(a) {
    La(this.yb, function(b) {
        return b == a
    });
    0 == this.yb.length && this.hc()
};
h.Sc = function() {
    var a = this;
    this.hc();
    var b = function() {
        a.Jc = Yd(800).then(q(a.Pe, a)).then(function(b) {
            0 < b.length && x(a.yb, function(a) {
                a(b)
            })
        }).then(b).g(function(a) {
            "STOP_EVENT" != a.message && b()
        });
        return a.Jc
    };
    b()
};
h.hc = function() {
    this.Jc && this.Jc.cancel("STOP_EVENT")
};
var eh = function() {
    this.cd = {
        Browser: bh,
        Node: ch,
        ReactNative: dh
    }
    [N()]
}, fh, bh = {
    X: Rg,
    Uc: Ug
}, ch = {
    X: Rg,
    Uc: Ug
}, dh = {
    X: Og,
    Uc: Sg
};
var gh = function(a) {
    var b = {}, c = a.email, d = a.newEmail;
    a = a.requestType;
    if (!c ||!a)
        throw Error("Invalid provider user info!");
    b.fromEmail = d || null;
    b.email = c;
    O(this, "operation", a);
    O(this, "data", lf(b))
};
var hh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "), S = function(a, b) {
    return {
        name: a || "",
        fa: "a valid string",
        optional: !!b,
        ga: n
    }
}, T = function(a) {
    return {
        name: a || "",
        fa: "a valid object",
        optional: !1,
        ga: ga
    }
}, ih = function(a, b) {
    return {
        name: a || "",
        fa: "a function",
        optional: !!b,
        ga: p
    }
}, jh = function() {
    return {
        name: "",
        fa: "null",
        optional: !1,
        ga: ca
    }
}, kh = function() {
    return {
        name: "credential",
        fa: "a valid credential",
        optional: !1,
        ga: function(a) {
            return !(!a ||!a.Hb)
        }
    }
}, lh = function() {
    return {
        name: "authProvider",
        fa: "a valid Auth provider",
        optional: !1,
        ga: function(a) {
            return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
        }
    }
}, mh = function(a, b, c, d) {
    return {
        name: c || "",
        fa: a.fa + " or " + b.fa,
        optional: !!d,
        ga: function(c) {
            return a.ga(c) || b.ga(c)
        }
    }
};
var oh = function(a, b) {
    for (var c in b) {
        var d = b[c].name;
        a[d] = nh(d, a[c], b[c].a)
    }
}, U = function(a, b, c, d) {
    a[b] = nh(b, c, d)
}, nh = function(a, b, c) {
    if (!c)
        return b;
    var d = ph(a);
    a = function() {
        var a = Array.prototype.slice.call(arguments), e;
        a: {
            e = Array.prototype.slice.call(a);
            var k;
            k = 0;
            for (var t=!1, pa = 0; pa < c.length; pa++)
                if (c[pa].optional)
                    t=!0;
                else {
                    if (t)
                        throw new P("internal-error", "Argument validator encountered a required argument after an optional argument.");
                        k++
                }
            t = c.length;
            if (e.length < k || t < e.length)
                e = "Expected " + (k ==
                t ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + t + " arguments") + " but got " + e.length + ".";
            else {
                for (k = 0; k < e.length; k++)
                    if (t = c[k].optional && void 0 === e[k], !c[k].ga(e[k])&&!t) {
                    e = c[k];
                    if (0 > k || k >= hh.length)
                        throw new P("internal-error", "Argument validator received an unsupported number of arguments.");
                    e = hh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.fa + ".";
                    break a
                }
                e = null
            }
        }
        if (e)
            throw new P("argument-error", d + " failed: " + e);
        return b.apply(this, a)
    };
    for (var e in b)
        a[e] = b[e];
    for (e in b.prototype)
        a.prototype[e] =
        b.prototype[e];
    return a
}, ph = function(a) {
    a = a.split(".");
    return a[a.length - 1]
};
var qh = function(a, b, c, d) {
    this.Ce = a;
    this.xd = b;
    this.Ie = c;
    this.cb = d;
    this.O = {};
    fh || (fh = new eh);
    a = fh;
    try {
        var e;
        Ie() ? (Wg || (Wg = new Vg("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = Wg) : e = new a.cd.X;
        this.Ua = e
    } catch (f) {
        this.Ua = new Pg, this.cb=!0
    }
    try {
        this.jc = new a.cd.Uc
    } catch (f) {
        this.jc = new Pg
    }
    this.Ad = q(this.Bd, this);
    this.P = {}
}, rh, sh = function() {
    rh || (rh = new qh("firebase", ":", !cf(M()) && l.window && l.window != l.window.top?!0 : !1, Ze()));
    return rh
};
h = qh.prototype;
h.M = function(a, b) {
    return this.Ce + this.xd + a.name + (b ? this.xd + b : "")
};
h.get = function(a, b) {
    return (a.X ? this.Ua : this.jc).get(this.M(a, b))
};
h.remove = function(a, b) {
    b = this.M(a, b);
    a.X&&!this.cb && (this.P[b] = null);
    return (a.X ? this.Ua : this.jc).remove(b)
};
h.set = function(a, b, c) {
    var d = this.M(a, c), e = this, f = a.X ? this.Ua: this.jc;
    return f.set(d, b).then(function() {
        return f.get(d)
    }).then(function(b) {
        a.X&&!this.cb && (e.P[d] = b)
    })
};
h.addListener = function(a, b, c) {
    a = this.M(a, b);
    this.cb || (this.P[a] = l.localStorage.getItem(a));
    Ra(this.O) && this.Sc();
    this.O[a] || (this.O[a] = []);
    this.O[a].push(c)
};
h.removeListener = function(a, b, c) {
    a = this.M(a, b);
    this.O[a] && (La(this.O[a], function(a) {
        return a == c
    }), 0 == this.O[a].length && delete this.O[a]);
    Ra(this.O) && this.hc()
};
h.Sc = function() {
    this.Ua.Ka(this.Ad);
    this.cb || th(this)
};
var th = function(a) {
    uh(a);
    a.Ec = setInterval(function() {
        for (var b in a.O) {
            var c = l.localStorage.getItem(b);
            c != a.P[b] && (a.P[b] = c, c = new xb({
                type: "storage",
                key: b,
                target: window,
                oldValue: a.P[b],
                newValue: c
            }), a.Bd(c))
        }
    }, 1E3)
}, uh = function(a) {
    a.Ec && (clearInterval(a.Ec), a.Ec = null)
};
qh.prototype.hc = function() {
    this.Ua.Za(this.Ad);
    this.cb || uh(this)
};
qh.prototype.Bd = function(a) {
    if (a && a.fe) {
        var b = a.mb.key;
        if (this.Ie) {
            var c = l.localStorage.getItem(b);
            a = a.mb.newValue;
            a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b))
        }
        this.P[b] = l.localStorage.getItem(b);
        this.Xc(b)
    } else 
        x(a, q(this.Xc, this))
};
qh.prototype.Xc = function(a) {
    this.O[a] && x(this.O[a], function(a) {
        a()
    })
};
var vh = function(a) {
    this.C = a;
    this.A = sh()
}, wh = {
    name: "pendingRedirect",
    X: !1
}, xh = function(a) {
    return a.A.set(wh, "pending", a.C)
}, yh = function(a) {
    return a.A.remove(wh, a.C)
}, zh = function(a) {
    return a.A.get(wh, a.C).then(function(a) {
        return "pending" == a
    })
};
var V = function(a, b, c) {
    this.v = a;
    this.i = b;
    this.B = c;
    this.zb = [];
    this.Sa=!1;
    this.rc = q(this.ie, this);
    this.Xa = new Ah(this);
    this.rd = new Bh(this);
    this.Ub = new vh(this.i + ":" + this.B);
    this.fb = {};
    this.fb.unknown = this.Xa;
    this.fb.signInViaRedirect = this.Xa;
    this.fb.linkViaRedirect = this.Xa;
    this.fb.signInViaPopup = this.rd;
    this.fb.linkViaPopup = this.rd;
    this.ba = new Hg(this.v, this.i, this.B, firebase.SDK_VERSION || null)
};
V.prototype.reset = function() {
    this.Sa=!1;
    Ng(this.ba, this.rc);
    this.ba = new Hg(this.v, this.i, this.B, firebase.SDK_VERSION || null)
};
V.prototype.qb = function() {
    var a = this;
    this.Sa || (this.Sa=!0, this.ba.jb.push(this.rc));
    var b = this.ba;
    return Kg(this.ba).g(function(c) {
        a.ba == b && a.reset();
        throw c;
    })
};
var Dh = function(a) {
    var b = M();
    Ze(b) || cf(b) || a.qb();
    Ch(a.Xa)
};
V.prototype.subscribe = function(a) {
    Ia(this.zb, a) || this.zb.push(a);
    if (!this.Sa) {
        var b = this;
        zh(this.Ub).then(function(a) {
            a ? yh(b.Ub).then(function() {
                b.qb()
            }) : Dh(b)
        }).g(function() {
            Dh(b)
        })
    }
};
V.prototype.unsubscribe = function(a) {
    La(this.zb, function(b) {
        return b == a
    })
};
V.prototype.ie = function(a) {
    if (!a)
        throw new P("invalid-auth-event");
    for (var b=!1, c = 0; c < this.zb.length; c++) {
        var d = this.zb[c];
        if (d.Yc(a.xa, a.U)) {
            (b = this.fb[a.xa]) && b.sd(a, d);
            b=!0;
            break
        }
    }
    Ch(this.Xa);
    return b
};
var Eh = new ef(2E3, 1E4), Fh = new ef(1E4, 3E4);
V.prototype.getRedirectResult = function() {
    return this.Xa.getRedirectResult()
};
V.prototype.Xb = function(a, b, c, d, e) {
    var f = this;
    return this.ba.Xb(a, b, c, function() {
        f.Sa || (f.Sa=!0, f.ba.jb.push(f.rc))
    }, function() {
        f.reset()
    }, d, e)
};
V.prototype.Yb = function(a, b, c) {
    var d = this, e;
    return xh(this.Ub).then(function() {
        return d.ba.Yb(a, b, c).g(function(a) {
            e = a;
            return yh(d.Ub).then(function() {
                throw e;
            })
        }).then(function() {})
    })
};
V.prototype.fc = function(a, b, c, d) {
    return this.ba.fc(c, function(c) {
        a.Ga(b, null, c, d)
    }, Eh.get())
};
var Gh = {}, Hh = function(a, b, c) {
    var d = b + ":" + c;
    Gh[d] || (Gh[d] = new V(a, b, c));
    return Gh[d]
}, Ah = function(a) {
    this.A = a;
    this.la = null;
    this.xb = [];
    this.wb = [];
    this.ua = null;
    this.Mc=!1
};
Ah.prototype.reset = function() {
    this.la = null;
    this.ua && (this.ua.cancel(), this.ua = null)
};
Ah.prototype.sd = function(a, b) {
    if (!a)
        return E(new P("invalid-auth-event"));
    this.Mc=!0;
    var c = a.xa, d = a.U, e = a.getError() && "auth/web-storage-unsupported" == a.getError().code;
    "unknown" != c || e ? a = a.K ? this.Kc(a, b) : b.nb(c, d) ? this.Lc(a, b) : E(new P("invalid-auth-event")) : (this.la = null, Ih(this, !1, null, null), a = D());
    return a
};
var Ch = function(a) {
    a.Mc || (a.Mc=!0, Ih(a, !1, null, null))
};
Ah.prototype.Kc = function(a) {
    this.la = null;
    Ih(this, !0, null, a.getError());
    return D()
};
Ah.prototype.Lc = function(a, b) {
    var c = this, d = a.xa;
    b = b.nb(d, a.U);
    var e = a.gb;
    a = a.ec;
    var f = "signInViaRedirect" == d || "linkViaRedirect" == d;
    this.ua && this.ua.cancel();
    this.la = null;
    return b(e, a).then(function(a) {
        Ih(c, f, a, null)
    }).g(function(a) {
        Ih(c, f, null, a)
    })
};
var Jh = function(a, b) {
    a.la = function() {
        return E(b)
    };
    if (a.wb.length)
        for (var c = 0; c < a.wb.length; c++)
            a.wb[c](b)
}, Kh = function(a, b) {
    a.la = function() {
        return D(b)
    };
    if (a.xb.length)
        for (var c = 0; c < a.xb.length; c++)
            a.xb[c](b)
}, Ih = function(a, b, c, d) {
    b ? d ? Jh(a, d) : Kh(a, c) : Kh(a, {
        user: null
    });
    a.xb = [];
    a.wb = []
};
Ah.prototype.getRedirectResult = function() {
    var a = this;
    return new C(function(b, c) {
        a.la ? a.la().then(b, c) : (a.xb.push(b), a.wb.push(c), Lh(a))
    })
};
var Lh = function(a) {
    var b = new P("timeout");
    a.ua && a.ua.cancel();
    a.ua = Yd(Fh.get()).then(function() {
        a.la || Ih(a, !0, null, b)
    })
}, Bh = function(a) {
    this.A = a
};
Bh.prototype.sd = function(a, b) {
    if (!a)
        return E(new P("invalid-auth-event"));
    var c = a.xa, d = a.U;
    return a.K ? this.Kc(a, b) : b.nb(c, d) ? this.Lc(a, b) : E(new P("invalid-auth-event"))
};
Bh.prototype.Kc = function(a, b) {
    b.Ga(a.xa, null, a.getError(), a.U);
    return D()
};
Bh.prototype.Lc = function(a, b) {
    var c = a.U, d = a.xa;
    return b.nb(d, c)(a.gb, a.ec).then(function(a) {
        b.Ga(d, a, null, c)
    }).g(function(a) {
        b.Ga(d, null, a, c)
    })
};
var Mh = function(a) {
    this.f = a;
    this.ya = this.T = null;
    this.Pa = 0
};
Mh.prototype.I = function() {
    return {
        apiKey: this.f.i,
        refreshToken: this.T,
        accessToken: this.ya,
        expirationTime: this.Pa
    }
};
var Oh = function(a, b) {
    var c = b.idToken, d = b.refreshToken;
    b = Nh(b.expiresIn);
    a.ya = c;
    a.Pa = b;
    a.T = d
}, Nh = function(a) {
    return ka() + 1E3 * parseInt(a, 10)
}, Ph = function(a, b) {
    return Vf(a.f, b).then(function(b) {
        a.ya = b.access_token;
        a.Pa = Nh(b.expires_in);
        a.T = b.refresh_token;
        return {
            accessToken: a.ya,
            expirationTime: a.Pa,
            refreshToken: a.T
        }
    }).g(function(b) {
        "auth/user-token-expired" == b.code && (a.T = null);
        throw b;
    })
}, Qh = function(a) {
    return !(!a.ya || a.T)
};
Mh.prototype.getToken = function(a) {
    a=!!a;
    return Qh(this) ? E(new P("user-token-expired")) : a ||!this.ya || ka() > this.Pa - 3E4 ? this.T ? Ph(this, {
        grant_type: "refresh_token",
        refresh_token: this.T
    }) : D(null) : D({
        accessToken: this.ya,
        expirationTime: this.Pa,
        refreshToken: this.T
    })
};
var Rh = function(a, b, c, d, e) {
    hf(this, {
        uid: a,
        displayName: d || null,
        photoURL: e || null,
        email: c || null,
        providerId: b
    })
}, Sh = function(a, b) {
    wb.call(this, a);
    for (var c in b)
        this[c] = b[c]
};
r(Sh, wb);
var W = function(a, b, c) {
    this.W = [];
    this.i = a.apiKey;
    this.B = a.appName;
    this.v = a.authDomain || null;
    a = firebase.SDK_VERSION ? Ue(firebase.SDK_VERSION) : null;
    this.f = new R(this.i, null, a);
    this.ea = new Mh(this.f);
    Th(this, b.idToken);
    Oh(this.ea, b);
    O(this, "refreshToken", this.ea.T);
    Uh(this, c || {});
    G.call(this);
    this.Vb=!1;
    this.v && Ye() && (this.j = Hh(this.v, this.i, this.B));
    this.gc = [];
    this.qc = D()
};
r(W, G);
W.prototype.sa = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1), d = this;
    return this.qc = this.qc.then(function() {
        return a.apply(d, c)
    }, function() {
        return a.apply(d, c)
    })
};
var Th = function(a, b) {
    a.ld = b;
    O(a, "_lat", b)
}, Vh = function(a, b) {
    La(a.gc, function(a) {
        return a == b
    })
}, Wh = function(a) {
    for (var b = [], c = 0; c < a.gc.length; c++)
        b.push(a.gc[c](a));
    return Yc(b).then(function() {
        return a
    })
}, Xh = function(a) {
    a.j&&!a.Vb && (a.Vb=!0, a.j.subscribe(a))
}, Uh = function(a, b) {
    hf(a, {
        uid: b.uid,
        displayName: b.displayName || null,
        photoURL: b.photoURL || null,
        email: b.email || null,
        emailVerified: b.emailVerified ||!1,
        isAnonymous: b.isAnonymous ||!1,
        providerData: []
    })
};
O(W.prototype, "providerId", "firebase");
var Yh = function() {}, Zh = function(a) {
    return D().then(function() {
        if (a.Xd)
            throw new P("app-deleted");
    })
}, $h = function(a) {
    return Ea(a.providerData, function(a) {
        return a.providerId
    })
}, bi = function(a, b) {
    b && (ai(a, b.providerId), a.providerData.push(b))
}, ai = function(a, b) {
    La(a.providerData, function(a) {
        return a.providerId == b
    })
}, ci = function(a, b, c) {
    ("uid" != b || c) && a.hasOwnProperty(b) && O(a, b, c)
};
W.prototype.copy = function(a) {
    var b = this;
    b != a && (hf(this, {
        uid: a.uid,
        displayName: a.displayName,
        photoURL: a.photoURL,
        email: a.email,
        emailVerified: a.emailVerified,
        isAnonymous: a.isAnonymous,
        providerData: []
    }), x(a.providerData, function(a) {
        bi(b, a)
    }), this.ea = a.ea, O(this, "refreshToken", this.ea.T))
};
W.prototype.reload = function() {
    var a = this;
    return Zh(this).then(function() {
        return di(a).then(function() {
            return Wh(a)
        }).then(Yh)
    })
};
var di = function(a) {
    return a.getToken().then(function(b) {
        var c = a.isAnonymous;
        return ei(a, b).then(function() {
            c || ci(a, "isAnonymous", !1);
            return b
        }).g(function(b) {
            "auth/user-token-expired" == b.code && (a.dispatchEvent(new Sh("userDeleted")), fi(a));
            throw b;
        })
    })
};
W.prototype.getToken = function(a) {
    var b = this, c = Qh(this.ea);
    return Zh(this).then(function() {
        return b.ea.getToken(a)
    }).then(function(a) {
        if (!a)
            throw new P("internal-error");
        a.accessToken != b.ld && (Th(b, a.accessToken), b.Ca());
        ci(b, "refreshToken", a.refreshToken);
        return a.accessToken
    }).g(function(a) {
        if ("auth/user-token-expired" == a.code&&!c)
            return Wh(b).then(function() {
                ci(b, "refreshToken", null);
                throw a;
            });
        throw a;
    })
};
var gi = function(a, b) {
    b.idToken && a.ld != b.idToken && (Oh(a.ea, b), a.Ca(), Th(a, b.idToken), ci(a, "refreshToken", a.ea.T))
};
W.prototype.Ca = function() {
    this.dispatchEvent(new Sh("tokenChanged"))
};
var ei = function(a, b) {
    return Q(a.f, ug, {
        idToken: b
    }).then(q(a.Fe, a))
};
W.prototype.Fe = function(a) {
    a = a.users;
    if (!a ||!a.length)
        throw new P("internal-error");
    a = a[0];
    Uh(this, {
        uid: a.localId,
        displayName: a.displayName,
        photoURL: a.photoUrl,
        email: a.email,
        emailVerified: !!a.emailVerified
    });
    for (var b = hi(a), c = 0; c < b.length; c++)
        bi(this, b[c]);
    ci(this, "isAnonymous", !(this.email && a.passwordHash)&&!(this.providerData && this.providerData.length))
};
var hi = function(a) {
    return (a = a.providerUserInfo) && a.length ? Ea(a, function(a) {
        return new Rh(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl)
    }) : []
};
W.prototype.reauthenticate = function(a) {
    var b = this;
    return this.c(a.Hb(this.f).then(function(a) {
        var c;
        a: {
            var e = a.idToken.split(".");
            if (3 == e.length) {
                for (var e = e[1], f = (4 - e.length%4)%4, g = 0; g < f; g++)
                    e += ".";
                try {
                    var k = gc(rb(e));
                    if (k.sub && k.iss && k.aud && k.exp) {
                        c = new tf(k);
                        break a
                    }
                } catch (t) {}
            }
            c = null
        }
        if (!c || b.uid != c.ye)
            throw new P("user-mismatch");
        gi(b, a);
        return b.reload()
    }))
};
var ii = function(a, b) {
    return di(a).then(function() {
        if (Ia($h(a), b))
            return Wh(a).then(function() {
                throw new P("provider-already-linked");
            })
    })
};
h = W.prototype;
h.we = function(a) {
    var b = this;
    return this.c(ii(this, a.provider).then(function() {
        return b.getToken()
    }).then(function(c) {
        return a.nd(b.f, c)
    }).then(q(this.ed, this)))
};
h.link = function(a) {
    return this.sa(this.we, a)
};
h.ed = function(a) {
    gi(this, a);
    var b = this;
    return this.reload().then(function() {
        return b
    })
};
h.Ue = function(a) {
    var b = this;
    return this.c(this.getToken().then(function(c) {
        return b.f.updateEmail(c, a)
    }).then(function(a) {
        gi(b, a);
        return b.reload()
    }))
};
h.updateEmail = function(a) {
    return this.sa(this.Ue, a)
};
h.Ve = function(a) {
    var b = this;
    return this.c(this.getToken().then(function(c) {
        return b.f.updatePassword(c, a)
    }).then(function(a) {
        gi(b, a);
        return b.reload()
    }))
};
h.updatePassword = function(a) {
    return this.sa(this.Ve, a)
};
h.We = function(a) {
    if (void 0 === a.displayName && void 0 === a.photoURL)
        return Zh(this);
    var b = this;
    return this.c(this.getToken().then(function(c) {
        return b.f.updateProfile(c, {
            displayName: a.displayName,
            photoUrl: a.photoURL
        })
    }).then(function(a) {
        gi(b, a);
        ci(b, "displayName", a.displayName || null);
        ci(b, "photoURL", a.photoUrl || null);
        return Wh(b)
    }).then(Yh))
};
h.updateProfile = function(a) {
    return this.sa(this.We, a)
};
h.Te = function(a) {
    var b = this;
    return this.c(di(this).then(function(c) {
        return Ia($h(b), a) ? jg(b.f, c, [a]).then(function(a) {
            var c = {};
            x(a.providerUserInfo || [], function(a) {
                c[a.providerId]=!0
            });
            x($h(b), function(a) {
                c[a] || ai(b, a)
            });
            return Wh(b)
        }) : Wh(b).then(function() {
            throw new P("no-such-provider");
        })
    }))
};
h.unlink = function(a) {
    return this.sa(this.Te, a)
};
h.Wd = function() {
    var a = this;
    return this.c(this.getToken().then(function(b) {
        return Q(a.f, tg, {
            idToken: b
        })
    }).then(function() {
        a.dispatchEvent(new Sh("userDeleted"))
    })).then(function() {
        fi(a)
    })
};
h["delete"] = function() {
    return this.sa(this.Wd)
};
h.Yc = function(a, b) {
    return "linkViaPopup" == a && (this.ja || null) == b && this.ca || "linkViaRedirect" == a && (this.ac || null) == b?!0 : !1
};
h.Ga = function(a, b, c, d) {
    "linkViaPopup" == a && d == (this.ja || null) && (c && this.Ea ? this.Ea(c) : b&&!c && this.ca && this.ca(b), this.D && (this.D.cancel(), this.D = null), delete this.ca, delete this.Ea)
};
h.nb = function(a, b) {
    return "linkViaPopup" == a && b == (this.ja || null) || "linkViaRedirect" == a && (this.ac || null) == b ? q(this.$d, this) : null
};
h.Gb = function() {
    return Xe(this.uid + ":::")
};
var ki = function(a, b) {
    if (!Ye())
        return E(new P("operation-not-supported-in-this-environment"));
    var c = of(b.providerId), d = a.Gb(), e = null;
    !Ze() && a.v && b.isOAuthProvider && (e = Mg(a.v, a.i, a.B, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));
    var f = Pe(e, c && c.vb, c && c.ub), c = ii(a, b.providerId).then(function() {
        return Wh(a)
    }).then(function() {
        ji(a);
        return a.getToken()
    }).then(function() {
        return a.j.Xb(f, "linkViaPopup", b, d, !!e)
    }).then(function() {
        return new C(function(b, c) {
            a.Ga("linkViaPopup", null, new P("cancelled-popup-request"),
            a.ja || null);
            a.ca = b;
            a.Ea = c;
            a.ja = d;
            a.D = a.j.fc(a, "linkViaPopup", f, d)
        })
    }).then(function(a) {
        f && Oe(f);
        return a
    }).g(function(a) {
        f && Oe(f);
        throw a;
    });
    return a.c(c)
};
W.prototype.linkWithPopup = function(a) {
    var b = ki(this, a);
    return this.sa(function() {
        return b
    })
};
W.prototype.xe = function(a) {
    if (!Ye())
        return E(new P("operation-not-supported-in-this-environment"));
    var b = this, c = null, d = this.Gb(), e = ii(this, a.providerId).then(function() {
        ji(b);
        return b.getToken()
    }).then(function() {
        b.ac = d;
        return Wh(b)
    }).then(function(a) {
        b.Fa && (a = b.Fa, a = a.A.set(li, b.I(), a.C));
        return a
    }).then(function() {
        return b.j.Yb("linkViaRedirect", a, d)
    }).g(function(a) {
        c = a;
        if (b.Fa)
            return mi(b.Fa);
        throw c;
    }).then(function() {
        if (c)
            throw c;
    });
    return this.c(e)
};
W.prototype.linkWithRedirect = function(a) {
    return this.sa(this.xe, a)
};
var ji = function(a) {
    if (!a.j ||!a.Vb) {
        if (a.j&&!a.Vb)
            throw new P("internal-error");
        throw new P("auth-domain-config-required");
    }
};
W.prototype.$d = function(a, b) {
    var c = this;
    this.D && (this.D.cancel(), this.D = null);
    var d = null, e = this.getToken().then(function(d) {
        return xf(c.f, {
            requestUri: a,
            sessionId: b,
            idToken: d
        })
    }).then(function(a) {
        d = If(a);
        return c.ed(a)
    }).then(function(a) {
        return {
            user: a,
            credential: d
        }
    });
    return this.c(e)
};
W.prototype.sendEmailVerification = function() {
    var a = this;
    return this.c(this.getToken().then(function(b) {
        return a.f.sendEmailVerification(b)
    }).then(function(b) {
        if (a.email != b)
            return a.reload()
    }).then(function() {}))
};
var fi = function(a) {
    for (var b = 0; b < a.W.length; b++)
        a.W[b].cancel("app-deleted");
    a.W = [];
    a.Xd=!0;
    O(a, "refreshToken", null);
    a.j && a.j.unsubscribe(a)
};
W.prototype.c = function(a) {
    var b = this;
    this.W.push(a);
    ad(a, function() {
        Ka(b.W, a)
    });
    return a
};
W.prototype.toJSON = function() {
    return this.I()
};
W.prototype.I = function() {
    var a = {
        uid: this.uid,
        displayName: this.displayName,
        photoURL: this.photoURL,
        email: this.email,
        emailVerified: this.emailVerified,
        isAnonymous: this.isAnonymous,
        providerData: [],
        apiKey: this.i,
        appName: this.B,
        authDomain: this.v,
        stsTokenManager: this.ea.I(),
        redirectEventId: this.ac || null
    };
    x(this.providerData, function(b) {
        a.providerData.push(jf(b))
    });
    return a
};
var ni = function(a) {
    if (!a.apiKey)
        return null;
    var b = {
        apiKey: a.apiKey,
        authDomain: a.authDomain,
        appName: a.appName
    }, c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime)
        c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - ka()) / 1E3;
    else 
        return null;
    var d = new W(b, c, a);
    a.providerData && x(a.providerData, function(a) {
        if (a) {
            var b = {};
            hf(b, a);
            bi(d, b)
        }
    });
    a.redirectEventId && (d.ac = a.redirectEventId);
    return d
}, oi = function(a, b, c) {
    var d = new W(a, b);
    c && (d.Fa = c);
    return d.reload().then(function() {
        return d
    })
};
var pi = function(a) {
    this.C = a;
    this.A = sh()
}, li = {
    name: "redirectUser",
    X: !1
}, mi = function(a) {
    return a.A.remove(li, a.C)
}, qi = function(a, b) {
    return a.A.get(li, a.C).then(function(a) {
        a && b && (a.authDomain = b);
        return ni(a || {})
    })
};
var ri = function(a) {
    this.C = a;
    this.A = sh()
}, si = {
    name: "authUser",
    X: !0
}, ti = function(a, b) {
    return a.A.set(si, b.I(), a.C)
}, ui = function(a) {
    return a.A.remove(si, a.C)
}, vi = function(a, b) {
    return a.A.get(si, a.C).then(function(a) {
        a && b && (a.authDomain = b);
        return ni(a || {})
    })
};
var Y = function(a) {
    this.Na=!1;
    O(this, "app", a);
    if (X(this).options && X(this).options.apiKey)
        a = firebase.SDK_VERSION ? Ue(firebase.SDK_VERSION) : null, this.f = new R(X(this).options && X(this).options.apiKey, null, a);
    else 
        throw new P("invalid-api-key");
    this.W = [];
    this.La = [];
    this.De = firebase.INTERNAL.createSubscribe(q(this.re, this));
    wi(this, null);
    this.na = new ri(X(this).options.apiKey + ":" + X(this).name);
    this.Ya = new pi(X(this).options.apiKey + ":" + X(this).name);
    this.Cb = this.c(xi(this));
    this.ta = this.c(yi(this));
    this.Dc =
    !1;
    this.Ac = q(this.Oe, this);
    this.Dd = q(this.Ra, this);
    this.Ed = q(this.ne, this);
    this.Cd = q(this.me, this);
    zi(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = q(this["delete"], this)
};
Y.prototype.toJSON = function() {
    return {
        apiKey: X(this).options.apiKey,
        authDomain: X(this).options.authDomain,
        appName: X(this).name,
        currentUser: Z(this) && Z(this).I()
    }
};
var Ai = function(a) {
    return a.Yd || E(new P("auth-domain-config-required"))
}, zi = function(a) {
    var b = X(a).options.authDomain, c = X(a).options.apiKey;
    b && Ye() && (a.Yd = a.Cb.then(function() {
        if (!a.Na)
            return a.j = Hh(b, c, X(a).name), a.j.subscribe(a), Z(a) && Xh(Z(a)), a.Oc && (Xh(a.Oc), a.Oc = null), a.j
    }))
};
h = Y.prototype;
h.Yc = function(a, b) {
    switch (a) {
    case "unknown":
    case "signInViaRedirect":
        return !0;
    case "signInViaPopup":
        return this.ja == b&&!!this.ca;
    default:
        return !1
    }
};
h.Ga = function(a, b, c, d) {
    "signInViaPopup" == a && this.ja == d && (c && this.Ea ? this.Ea(c) : b&&!c && this.ca && this.ca(b), this.D && (this.D.cancel(), this.D = null), delete this.ca, delete this.Ea)
};
h.nb = function(a, b) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.ja == b && this.ca ? q(this.ae, this) : null
};
h.ae = function(a, b) {
    var c = this;
    a = {
        requestUri: a,
        sessionId: b
    };
    this.D && (this.D.cancel(), this.D = null);
    var d = null, e = vf(c.f, a).then(function(a) {
        d = If(a);
        return a
    });
    a = c.Cb.then(function() {
        return e
    }).then(function(a) {
        return Bi(c, a)
    }).then(function() {
        return {
            user: Z(c),
            credential: d
        }
    });
    return this.c(a)
};
h.Gb = function() {
    return Xe()
};
h.signInWithPopup = function(a) {
    if (!Ye())
        return E(new P("operation-not-supported-in-this-environment"));
    var b = this, c = of(a.providerId), d = this.Gb(), e = null;
    !Ze() && X(this).options.authDomain && a.isOAuthProvider && (e = Mg(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
    var f = Pe(e, c && c.vb, c && c.ub), c = Ai(this).then(function(b) {
        return b.Xb(f, "signInViaPopup", a, d, !!e)
    }).then(function() {
        return new C(function(a, c) {
            b.Ga("signInViaPopup", null, new P("cancelled-popup-request"),
            b.ja);
            b.ca = a;
            b.Ea = c;
            b.ja = d;
            b.D = b.j.fc(b, "signInViaPopup", f, d)
        })
    }).then(function(a) {
        f && Oe(f);
        return a
    }).g(function(a) {
        f && Oe(f);
        throw a;
    });
    return this.c(c)
};
h.signInWithRedirect = function(a) {
    if (!Ye())
        return E(new P("operation-not-supported-in-this-environment"));
    var b = this, c = Ai(this).then(function() {
        return b.j.Yb("signInViaRedirect", a)
    });
    return this.c(c)
};
h.getRedirectResult = function() {
    if (!Ye())
        return E(new P("operation-not-supported-in-this-environment"));
    var a = this, b = Ai(this).then(function() {
        return a.j.getRedirectResult()
    });
    return this.c(b)
};
var Bi = function(a, b) {
    var c = {};
    c.apiKey = X(a).options.apiKey;
    c.authDomain = X(a).options.authDomain;
    c.appName = X(a).name;
    return a.Cb.then(function() {
        return oi(c, b, a.Ya)
    }).then(function(b) {
        if (Z(a) && b.uid == Z(a).uid)
            return Z(a).copy(b), a.Ra(b);
        wi(a, b);
        Xh(b);
        return a.Ra(b)
    }).then(function() {
        a.Ca()
    })
}, wi = function(a, b) {
    Z(a) && (Vh(Z(a), a.Dd), Rb(Z(a), "tokenChanged", a.Ed), Rb(Z(a), "userDeleted", a.Cd));
    b && (b.gc.push(a.Dd), Ib(b, "tokenChanged", a.Ed), Ib(b, "userDeleted", a.Cd));
    O(a, "currentUser", b)
};
Y.prototype.signOut = function() {
    var a = this, b = this.ta.then(function() {
        if (!Z(a))
            return D();
        wi(a, null);
        return ui(a.na).then(function() {
            a.Ca()
        })
    });
    return this.c(b)
};
var Ci = function(a) {
    var b = qi(a.Ya, X(a).options.authDomain).then(function(b) {
        if (a.Oc = b)
            b.Fa = a.Ya;
        return mi(a.Ya)
    });
    return a.c(b)
}, xi = function(a) {
    var b = X(a).options.authDomain, c = Ci(a).then(function() {
        return vi(a.na, b)
    }).then(function(b) {
        return b ? (b.Fa = a.Ya, b.reload().then(function() {
            return ti(a.na, b).then(function() {
                return b
            })
        }).g(function(c) {
            return "auth/network-request-failed" == c.code ? b : ui(a.na)
        })) : null
    }).then(function(b) {
        wi(a, b || null)
    });
    return a.c(c)
}, yi = function(a) {
    return a.Cb.then(function() {
        return a.getRedirectResult()
    }).g(function() {}).then(function() {
        if (!a.Na)
            return a.Ac()
    }).g(function() {}).then(function() {
        if (!a.Na) {
            a.Dc =
            !0;
            var b = a.na;
            b.A.addListener(si, b.C, a.Ac)
        }
    })
};
Y.prototype.Oe = function() {
    var a = this;
    return vi(this.na, X(this).options.authDomain).then(function(b) {
        if (!a.Na) {
            var c;
            if (c = Z(a) && b) {
                c = Z(a).uid;
                var d = b.uid;
                c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d?!1 : c == d
            }
            if (c)
                return Z(a).copy(b), Z(a).getToken();
            if (Z(a) || b)
                wi(a, b), b && (Xh(b), b.Fa = a.Ya), a.j && a.j.subscribe(a), a.Ca()
        }
    })
};
Y.prototype.Ra = function(a) {
    return ti(this.na, a)
};
Y.prototype.ne = function() {
    this.Ca();
    this.Ra(Z(this))
};
Y.prototype.me = function() {
    this.signOut()
};
var Di = function(a, b) {
    return a.c(b.then(function(b) {
        return Bi(a, b)
    }).then(function() {
        return Z(a)
    }))
};
h = Y.prototype;
h.re = function(a) {
    var b = this;
    this.addAuthTokenListener(function() {
        a.next(Z(b))
    })
};
h.onAuthStateChanged = function(a, b, c) {
    var d = this;
    this.Dc && firebase.Promise.resolve().then(function() {
        p(a) ? a(Z(d)) : p(a.next) && a.next(Z(d))
    });
    return this.De(a, b, c)
};
h.getToken = function(a) {
    var b = this, c = this.ta.then(function() {
        return Z(b) ? Z(b).getToken(a).then(function(a) {
            return {
                accessToken: a
            }
        }) : null
    });
    return this.c(c)
};
h.signInWithCustomToken = function(a) {
    var b = this;
    return this.ta.then(function() {
        return Di(b, Q(b.f, vg, {
            token: a
        }))
    }).then(function(a) {
        ci(a, "isAnonymous", !1);
        return b.Ra(a)
    }).then(function() {
        return Z(b)
    })
};
h.signInWithEmailAndPassword = function(a, b) {
    var c = this;
    return this.ta.then(function() {
        return Di(c, Q(c.f, Ef, {
            email: a,
            password: b
        }))
    })
};
h.createUserWithEmailAndPassword = function(a, b) {
    var c = this;
    return this.ta.then(function() {
        return Di(c, Q(c.f, sg, {
            email: a,
            password: b
        }))
    })
};
h.signInWithCredential = function(a) {
    var b = this;
    return this.ta.then(function() {
        return Di(b, a.Hb(b.f))
    })
};
h.signInAnonymously = function() {
    var a = Z(this), b = this;
    return a && a.isAnonymous ? D(a) : this.ta.then(function() {
        return Di(b, b.f.signInAnonymously())
    }).then(function(a) {
        ci(a, "isAnonymous", !0);
        return b.Ra(a)
    }).then(function() {
        return Z(b)
    })
};
var X = function(a) {
    return a.app
}, Z = function(a) {
    return a.currentUser
};
h = Y.prototype;
h.Ca = function() {
    if (this.Dc)
        for (var a = 0; a < this.La.length; a++)
            if (this.La[a])
                this.La[a](Z(this) && Z(this)._lat || null)
};
h.addAuthTokenListener = function(a) {
    var b = this;
    this.La.push(a);
    this.c(this.ta.then(function() {
        b.Na || Ia(b.La, a) && a(Z(b) && Z(b)._lat || null)
    }))
};
h.removeAuthTokenListener = function(a) {
    La(this.La, function(b) {
        return b == a
    })
};
h["delete"] = function() {
    this.Na=!0;
    for (var a = 0; a < this.W.length; a++)
        this.W[a].cancel("app-deleted");
    this.W = [];
    this.na && (a = this.na, a.A.removeListener(si, a.C, this.Ac));
    this.j && this.j.unsubscribe(this);
    return firebase.Promise.resolve()
};
h.c = function(a) {
    var b = this;
    this.W.push(a);
    ad(a, function() {
        Ka(b.W, a)
    });
    return a
};
h.fetchProvidersForEmail = function(a) {
    return this.c($f(this.f, a))
};
h.verifyPasswordResetCode = function(a) {
    return this.checkActionCode(a).then(function(a) {
        return a.data.email
    })
};
h.confirmPasswordReset = function(a, b) {
    return this.c(this.f.confirmPasswordReset(a, b).then(function() {}))
};
h.checkActionCode = function(a) {
    return this.c(this.f.checkActionCode(a).then(function(a) {
        return new gh(a)
    }))
};
h.applyActionCode = function(a) {
    return this.c(this.f.applyActionCode(a).then(function() {}))
};
h.sendPasswordResetEmail = function(a) {
    return this.c(this.f.sendPasswordResetEmail(a).then(function() {}))
};
oh(Y.prototype, {
    applyActionCode: {
        name: "applyActionCode",
        a: [S("code")]
    },
    checkActionCode: {
        name: "checkActionCode",
        a: [S("code")]
    },
    confirmPasswordReset: {
        name: "confirmPasswordReset",
        a: [S("code"), S("newPassword")]
    },
    createUserWithEmailAndPassword: {
        name: "createUserWithEmailAndPassword",
        a: [S("email"), S("password")]
    },
    fetchProvidersForEmail: {
        name: "fetchProvidersForEmail",
        a: [S("email")]
    },
    getRedirectResult: {
        name: "getRedirectResult",
        a: []
    },
    onAuthStateChanged: {
        name: "onAuthStateChanged",
        a: [mh(T(), ih(), "nextOrObserver"),
        ih("opt_error", !0), ih("opt_completed", !0)]
    },
    sendPasswordResetEmail: {
        name: "sendPasswordResetEmail",
        a: [S("email")]
    },
    signInAnonymously: {
        name: "signInAnonymously",
        a: []
    },
    signInWithCredential: {
        name: "signInWithCredential",
        a: [kh()]
    },
    signInWithCustomToken: {
        name: "signInWithCustomToken",
        a: [S("token")]
    },
    signInWithEmailAndPassword: {
        name: "signInWithEmailAndPassword",
        a: [S("email"), S("password")]
    },
    signInWithPopup: {
        name: "signInWithPopup",
        a: [lh()]
    },
    signInWithRedirect: {
        name: "signInWithRedirect",
        a: [lh()]
    },
    signOut: {
        name: "signOut",
        a: []
    },
    toJSON: {
        name: "toJSON",
        a: [S(null, !0)]
    },
    verifyPasswordResetCode: {
        name: "verifyPasswordResetCode",
        a: [S("code")]
    }
});
oh(W.prototype, {
    "delete": {
        name: "delete",
        a: []
    },
    getToken: {
        name: "getToken",
        a: [{
            name: "opt_forceRefresh",
            fa: "a boolean",
            optional: !0,
            ga: function(a) {
                return "boolean" == typeof a
            }
        }
        ]
    },
    link: {
        name: "link",
        a: [kh()]
    },
    linkWithPopup: {
        name: "linkWithPopup",
        a: [lh()]
    },
    linkWithRedirect: {
        name: "linkWithRedirect",
        a: [lh()]
    },
    reauthenticate: {
        name: "reauthenticate",
        a: [kh()]
    },
    reload: {
        name: "reload",
        a: []
    },
    sendEmailVerification: {
        name: "sendEmailVerification",
        a: []
    },
    toJSON: {
        name: "toJSON",
        a: [S(null, !0)]
    },
    unlink: {
        name: "unlink",
        a: [S("provider")]
    },
    updateEmail: {
        name: "updateEmail",
        a: [S("email")]
    },
    updatePassword: {
        name: "updatePassword",
        a: [S("password")]
    },
    updateProfile: {
        name: "updateProfile",
        a: [T("profile")]
    }
});
oh(C.prototype, {
    g: {
        name: "catch"
    },
    then: {
        name: "then"
    }
});
U(Gf, "credential", function(a, b) {
    return new Df(a, b)
}, [S("email"), S("password")]);
oh(zf.prototype, {
    addScope: {
        name: "addScope",
        a: [S("scope")]
    },
    setCustomParameters: {
        name: "setCustomParameters",
        a: [T("customOAuthParameters")]
    }
});
U(zf, "credential", zf.credential, [mh(S(), T(), "token")]);
oh(Af.prototype, {
    addScope: {
        name: "addScope",
        a: [S("scope")]
    },
    setCustomParameters: {
        name: "setCustomParameters",
        a: [T("customOAuthParameters")]
    }
});
U(Af, "credential", Af.credential, [mh(S(), T(), "token")]);
oh(Bf.prototype, {
    addScope: {
        name: "addScope",
        a: [S("scope")]
    },
    setCustomParameters: {
        name: "setCustomParameters",
        a: [T("customOAuthParameters")]
    }
});
U(Bf, "credential", Bf.credential, [mh(S(), mh(T(), jh()), "idToken"), mh(S(), jh(), "accessToken", !0)]);
oh(Cf.prototype, {
    setCustomParameters: {
        name: "setCustomParameters",
        a: [T("customOAuthParameters")]
    }
});
U(Cf, "credential", Cf.credential, [mh(S(), T(), "token"), S("secret", !0)]);
(function() {
    if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = {
            Auth: Y,
            Error: P
        };
        U(a, "EmailAuthProvider", Gf, []);
        U(a, "FacebookAuthProvider", zf, []);
        U(a, "GithubAuthProvider", Af, []);
        U(a, "GoogleAuthProvider", Bf, []);
        U(a, "TwitterAuthProvider", Cf, []);
        firebase.INTERNAL.registerService("auth", function(a, c) {
            a = new Y(a);
            c({
                INTERNAL: {
                    getToken: q(a.getToken, a),
                    addAuthTokenListener: q(a.addAuthTokenListener, a),
                    removeAuthTokenListener: q(a.removeAuthTokenListener, a)
                }
            });
            return a
        },
        a, function(a, c) {
            if ("create" === a)
                try {
                    c.auth()
            } catch (d) {}
        });
        firebase.INTERNAL.extendNamespace({
            User: W
        })
    } else 
        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
})();
})();


