/*! @license Firebase v3.6.2
    Build: 3.6.2-rc.2
    Terms: https://firebase.google.com/terms/ */
(function() {
    var e = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        for (var d in b)
            if (Object.defineProperties) {
                var f = Object.getOwnPropertyDescriptor(b, d);
                f && Object.defineProperty(a, d, f)
            } else 
                a[d] = b[d]
    }, g = this, h = function(a) {
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
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" !=
                            typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, k = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ga = b.prototype;
    a.prototype = new c;
    a.ca = function(a, c, p) {
        for (var d = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
            d[f - 2] = arguments[f];
        return b.prototype[c].apply(a, d)
    }
};
var l = {
    c: "only-available-in-window",
    o: "only-available-in-sw",
    O: "should-be-overriden",
    g: "bad-sender-id",
    C: "incorrect-gcm-sender-id",
    M: "permission-default",
    L: "permission-blocked",
    U: "unsupported-browser",
    G: "notifications-blocked",
    w: "failed-serviceworker-registration",
    h: "sw-registration-expected",
    B: "get-subscription-failed",
    F: "invalid-saved-token",
    l: "sw-reg-redundant",
    P: "token-subscribe-failed",
    S: "token-subscribe-no-token",
    R: "token-subscribe-no-push-set",
    V: "use-sw-before-get-token",
    D: "invalid-delete-token",
    v: "delete-token-not-found",
    s: "bg-handler-function-expected",
    K: "no-window-client-to-msg",
    T: "unable-to-resubscribe",
    I: "no-fcm-token-for-resubscribe",
    A: "failed-to-delete-token",
    J: "no-sw-in-reg"
}, n = {}, q = (n[l.c] = "This method is available in a Window context.", n[l.o] = "This method is available in a service worker context.", n[l.O] = "This method should be overriden by extended classes.", n[l.g] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", n[l.M] =
"The required permissions were not granted and dismissed instead.", n[l.L] = "The required permissions were not granted and blocked instead.", n[l.U] = "This browser doesn't support the API's required to use the firebase SDK.", n[l.G] = "Notifications have been blocked.", n[l.w] = "We are unable to register the default service worker. {$browserErrorMessage}", n[l.h] = "A service worker registration was the expected input.", n[l.B] = "There was an error when trying to get any existing Push Subscriptions.", n[l.F] = "Unable to access details of the saved token.",
n[l.l] = "The service worker being used for push was made redundant.", n[l.P] = "A problem occured while subscribing the user to FCM: {$message}", n[l.S] = "FCM returned no token when subscribing the user to push.", n[l.R] = "FCM returned an invalid response when getting an FCM token.", n[l.V] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", n[l.D] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", n[l.v] = "The deletion attempt for token could not be performed as the token was not found.",
n[l.s] = "The input to setBackgroundMessageHandler() must be a function.", n[l.K] = "An attempt was made to message a non-existant window client.", n[l.T] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", n[l.I] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", n[l.A] = "Unable to delete the currently saved token.", n[l.J] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
n[l.C] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", n);
var r = {
    userVisibleOnly: !0,
    applicationServerKey: new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110])
};
var t = {
    m: "firebase-messaging-msg-type",
    u: "firebase-messaging-msg-data"
}, u = {
    N: "push-msg-received",
    H: "notification-clicked"
}, w = function(a, b) {
    var c = {};
    return c[t.m] = a, c[t.u] = b, c
};
var x = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, x);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
k(x, Error);
var y = function(a, b) {
    for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;)
        d += c.shift() + f.shift();
    return d + c.join("%s")
};
var z = function(a, b) {
    b.unshift(a);
    x.call(this, y.apply(null, b));
    b.shift()
};
k(z, x);
var A = function(a, b, c) {
    if (!a) {
        var d = "Assertion failed";
        if (b)
            var d = d + (": " + b), f = Array.prototype.slice.call(arguments, 2);
        throw new z("" + d, f || []);
    }
};
var B = null;
var D = function(a) {
    a = new Uint8Array(a);
    var b = h(a);
    A("array" == b || "object" == b && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
    if (!B)
        for (B = {}, b = 0; 65 > b; b++)
            B[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
    for (var b = B, c = [], d = 0; d < a.length; d += 3) {
        var f = a[d], p = d + 1 < a.length, m = p ? a[d + 1]: 0, C = d + 2 < a.length, v = C ? a[d + 2]: 0, P = f>>2, f = (f & 3)<<4 | m>>4, m = (m & 15)<<2 | v>>6, v = v & 63;
        C || (v = 64, p || (m = 64));
        c.push(b[P], b[f], b[m], b[v])
    }
    return c.join("").replace(/\+/g, "-").replace(/\//g,
    "_").replace(/=+$/, "")
};
var E = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", q), F = function() {
    this.a = null
}, G = function(a) {
    if (a.a)
        return a.a;
    a.a = new Promise(function(a, c) {
        var b = g.indexedDB.open("fcm_token_details_db", 1);
        b.onerror = function(a) {
            c(a.target.error)
        };
        b.onsuccess = function(b) {
            a(b.target.result)
        };
        b.onupgradeneeded = function(a) {
            a = a.target.result.createObjectStore("fcm_token_object_Store", {
                keyPath: "swScope"
            });
            a.createIndex("fcmSenderId", "fcmSenderId", {
                unique: !1
            });
            a.createIndex("fcmToken", "fcmToken", {
                unique: !0
            })
        }
    });
    return a.a
}, H = function(a) {
    a.a ? a.a.then(function(b) {
        b.close();
        a.a = null
    }) : Promise.resolve()
}, I = function(a, b) {
    return G(a).then(function(a) {
        return new Promise(function(c, f) {
            var d = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);
            d.onerror = function(a) {
                f(a.target.error)
            };
            d.onsuccess = function(a) {
                c(a.target.result)
            }
        })
    })
}, J = function(a, b) {
    return G(a).then(function(a) {
        return new Promise(function(c, f) {
            var d = [], m = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
            m.onerror = function(a) {
                f(a.target.error)
            };
            m.onsuccess = function(a) {
                (a = a.target.result) ? (a.value.fcmSenderId === b && d.push(a.value), a.continue()) : c(d)
            }
        })
    })
}, K = function(a, b, c) {
    var d = D(b.getKey("p256dh")), f = D(b.getKey("auth"));
    a = "authorized_entity=" + a + "&" + ("endpoint=" + b.endpoint + "&") + ("encryption_key=" + d + "&") + ("encryption_auth=" + f);
    c && (a += "&pushSet=" + c);
    c = new Headers;
    c.append("Content-Type", "application/x-www-form-urlencoded");
    return fetch("https://fcm.googleapis.com/fcm/connect/subscribe", {
        method: "POST",
        headers: c,
        body: a
    }).then(function(a) {
        return a.json()
    }).then(function(a) {
        if (a.error)
            throw E.create(l.P, {
                message: a.error.message
            });
        if (!a.token)
            throw E.create(l.S);
        if (!a.pushSet)
            throw E.create(l.R);
        return {
            token: a.token,
            pushSet: a.pushSet
        }
    })
}, L = function(a, b, c, d, f, p) {
    var m = {
        swScope: c.scope,
        endpoint: d.endpoint,
        auth: D(d.getKey("auth")),
        p256dh: D(d.getKey("p256dh")),
        fcmToken: f,
        fcmPushSet: p,
        fcmSenderId: b
    };
    return G(a).then(function(a) {
        return new Promise(function(b, c) {
            var d = a.transaction(["fcm_token_object_Store"],
            "readwrite").objectStore("fcm_token_object_Store").put(m);
            d.onerror = function(a) {
                c(a.target.error)
            };
            d.onsuccess = function() {
                b()
            }
        })
    })
};
F.prototype.X = function(a, b) {
    return b instanceof ServiceWorkerRegistration ? "string" !== typeof a || 0 === a.length ? Promise.reject(E.create(l.g)) : J(this, a).then(function(c) {
        if (0 !== c.length) {
            var d = c.findIndex(function(c) {
                return b.scope === c.swScope && a === c.fcmSenderId
            });
            if ( - 1 !== d)
                return c[d]
        }
    }).then(function(a) {
        if (a)
            return b.pushManager.getSubscription().catch(function() {
                throw E.create(l.B);
            }).then(function(b) {
                var c;
                if (c = b)
                    c = b.endpoint === a.endpoint && D(b.getKey("auth")) === a.auth && D(b.getKey("p256dh")) === a.p256dh;
                    if (c)
                        return a.fcmToken
                    })
    }) : Promise.reject(E.create(l.h))
};
F.prototype.getSavedToken = F.prototype.X;
F.prototype.W = function(a, b) {
    var c = this;
    return "string" !== typeof a || 0 === a.length ? Promise.reject(E.create(l.g)) : b instanceof ServiceWorkerRegistration ? b.pushManager.getSubscription().then(function(a) {
        return a ? a : b.pushManager.subscribe(r)
    }).then(function(d) {
        return K(a, d).then(function(f) {
            return L(c, a, b, d, f.token, f.pushSet).then(function() {
                return f.token
            })
        })
    }) : Promise.reject(E.create(l.h))
};
F.prototype.createToken = F.prototype.W;
F.prototype.deleteToken = function(a) {
    var b = this;
    return "string" !== typeof a || 0 === a.length ? Promise.reject(E.create(l.D)) : I(this, a).then(function(a) {
        if (!a)
            throw E.create(l.v);
        return G(b).then(function(b) {
            return new Promise(function(c, d) {
                var f = b.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);
                f.onerror = function(a) {
                    d(a.target.error)
                };
                f.onsuccess = function(b) {
                    0 === b.target.result ? d(E.create(l.A)) : c(a)
                }
            })
        })
    })
};
var M = function(a) {
    var b = this;
    this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", q);
    if (!a.options.messagingSenderId || "string" !== typeof a.options.messagingSenderId)
        throw this.a.create(l.g);
    this.Z = a.options.messagingSenderId;
    this.f = new F;
    this.app = a;
    this.INTERNAL = {};
    this.INTERNAL.delete = function() {
        return b.delete
    }
};
M.prototype.getToken = function() {
    var a = this, b = Notification.permission;
    return "granted" !== b ? "denied" === b ? Promise.reject(this.a.create(l.G)) : Promise.resolve(null) : this.i().then(function(b) {
        return a.f.X(a.Z, b).then(function(c) {
            return c ? c : a.f.W(a.Z, b)
        })
    })
};
M.prototype.getToken = M.prototype.getToken;
M.prototype.deleteToken = function(a) {
    var b = this;
    return this.f.deleteToken(a).then(function() {
        return b.i()
    }).then(function(a) {
        return a ? a.pushManager.getSubscription() : null
    }).then(function(a) {
        if (a)
            return a.unsubscribe()
    })
};
M.prototype.deleteToken = M.prototype.deleteToken;
M.prototype.i = function() {
    throw this.a.create(l.O);
};
M.prototype.requestPermission = function() {
    throw this.a.create(l.c);
};
M.prototype.useServiceWorker = function() {
    throw this.a.create(l.c);
};
M.prototype.useServiceWorker = M.prototype.useServiceWorker;
M.prototype.onMessage = function() {
    throw this.a.create(l.c);
};
M.prototype.onMessage = M.prototype.onMessage;
M.prototype.onTokenRefresh = function() {
    throw this.a.create(l.c);
};
M.prototype.onTokenRefresh = M.prototype.onTokenRefresh;
M.prototype.setBackgroundMessageHandler = function() {
    throw this.a.create(l.o);
};
M.prototype.setBackgroundMessageHandler = M.prototype.setBackgroundMessageHandler;
M.prototype.delete = function() {
    H(this.f)
};
var N = self, S = function(a) {
    M.call(this, a);
    var b = this;
    this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", q);
    N.addEventListener("push", function(a) {
        return O(b, a)
    }, !1);
    N.addEventListener("pushsubscriptionchange", function(a) {
        return Q(b, a)
    }, !1);
    N.addEventListener("notificationclick", function(a) {
        return R(b, a)
    }, !1);
    this.b = null
};
e(S, M);
var O = function(a, b) {
    var c;
    try {
        c = b.data.json()
    } catch (f) {
        return 
    }
    var d = T().then(function(b) {
        if (b) {
            if (c.notification || a.b)
                return U(a, c)
        } else {
            if ((b = c) && "object" === typeof b.notification) {
                var d = Object.assign({}, b.notification), f = {};
                d.data = (f.FCM_MSG = b, f);
                b = d
            } else 
                b = void 0;
            if (b)
                return N.registration.showNotification(b.title || "", b);
            if (a.b)
                return a.b(c)
        }
    });
    b.waitUntil(d)
}, Q = function(a, b) {
    var c = a.getToken().then(function(b) {
        if (!b)
            throw a.a.create(l.I);
        var c = a.f;
        return I(c, b).then(function(b) {
            if (!b)
                throw a.a.create(l.F);
            return N.registration.pushManager.subscribe(r).then(function(a) {
                return K(b.ea, a, b.da)
            }).catch(function(d) {
                return c.deleteToken(b.fa).then(function() {
                    throw a.a.create(l.T, {
                        message: d
                    });
                })
            })
        })
    });
    b.waitUntil(c)
}, R = function(a, b) {
    if (b.notification && b.notification.data && b.notification.data.FCM_MSG) {
        b.stopImmediatePropagation();
        b.notification.close();
        var c = b.notification.data.FCM_MSG, d = c.notification.click_action;
        if (d) {
            var f = V(d).then(function(a) {
                return a ? a : N.clients.openWindow(d)
            }).then(function(b) {
                if (b)
                    return delete c.notification,
                    W(a, b, w(u.H, c))
            });
            b.waitUntil(f)
        }
    }
};
S.prototype.setBackgroundMessageHandler = function(a) {
    if (a && "function" !== typeof a)
        throw this.a.create(l.s);
    this.b = a
};
S.prototype.setBackgroundMessageHandler = S.prototype.setBackgroundMessageHandler;
var V = function(a) {
    var b = (new URL(a)).href;
    return N.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(function(a) {
        for (var c = null, f = 0; f < a.length; f++)
            if ((new URL(a[f].url)).href === b) {
                c = a[f];
                break
            }
        if (c)
            return c.focus(), c
    })
}, W = function(a, b, c) {
    return new Promise(function(d, f) {
        if (!b)
            return f(a.a.create(l.K));
        b.postMessage(c);
        d()
    })
}, T = function() {
    return N.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(function(a) {
        return a.some(function(a) {
            return "visible" === a.visibilityState
        })
    })
},
U = function(a, b) {
    return N.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(function(c) {
        var d = w(u.N, b);
        return Promise.all(c.map(function(b) {
            return W(a, b, d)
        }))
    })
};
S.prototype.i = function() {
    return Promise.resolve(N.registration)
};
var Y = function(a) {
    M.call(this, a);
    var b = this;
    this.Y = null;
    this.$ = firebase.INTERNAL.createSubscribe(function(a) {
        b.Y = a
    });
    this.ba = null;
    this.aa = firebase.INTERNAL.createSubscribe(function(a) {
        b.ba = a
    });
    X(this)
};
e(Y, M);
Y.prototype.getToken = function() {
    var a = this;
    return "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") ? aa(this).then(function() {
        return M.prototype.getToken.call(a)
    }) : Promise.reject(this.a.create(l.U))
};
Y.prototype.getToken = Y.prototype.getToken;
var aa = function(a) {
    if (a.j)
        return a.j;
    var b = document.querySelector('link[rel="manifest"]');
    b ? a.j = fetch(b.href).then(function(a) {
        return a.json()
    }).catch(function() {
        return Promise.resolve()
    }).then(function(b) {
        if (b && b.gcm_sender_id && "103953800507" !== b.gcm_sender_id)
            throw a.a.create(l.C);
    }) : a.j = Promise.resolve();
    return a.j
};
Y.prototype.requestPermission = function() {
    var a = this;
    return "granted" === Notification.permission ? Promise.resolve() : new Promise(function(b, c) {
        var d = function(d) {
            return "granted" === d ? b() : "denied" === d ? c(a.a.create(l.L)) : c(a.a.create(l.M))
        }, f = Notification.requestPermission(function(a) {
            f || d(a)
        });
        f && f.then(d)
    })
};
Y.prototype.requestPermission = Y.prototype.requestPermission;
Y.prototype.useServiceWorker = function(a) {
    if (!(a instanceof ServiceWorkerRegistration))
        throw this.a.create(l.h);
    if ("undefined" !== typeof this.b)
        throw this.a.create(l.V);
    this.b = a
};
Y.prototype.useServiceWorker = Y.prototype.useServiceWorker;
Y.prototype.onMessage = function(a, b, c) {
    return this.$(a, b, c)
};
Y.prototype.onMessage = Y.prototype.onMessage;
Y.prototype.onTokenRefresh = function(a, b, c) {
    return this.aa(a, b, c)
};
Y.prototype.onTokenRefresh = Y.prototype.onTokenRefresh;
var Z = function(a, b) {
    var c = b.installing || b.waiting || b.active;
    return new Promise(function(d, f) {
        if (c)
            if ("activated" === c.state)
                d(b);
            else if ("redundant" === c.state)
                f(a.a.create(l.l));
            else {
                var p = function() {
                    if ("activated" === c.state)
                        d(b);
                    else if ("redundant" === c.state)
                        f(a.a.create(l.l));
                    else 
                        return;
                        c.removeEventListener("statechange", p)
                    };
                    c.addEventListener("statechange", p)
            } else 
                f(a.a.create(l.J))
    })
};
Y.prototype.i = function() {
    var a = this;
    if (this.b)
        return Z(this, this.b);
    this.b = null;
    return navigator.serviceWorker.register("/firebase-messaging-sw.js", {
        scope: "/firebase-cloud-messaging-push-scope"
    }).catch(function(b) {
        throw a.a.create(l.w, {
            browserErrorMessage: b.message
        });
    }).then(function(b) {
        return Z(a, b).then(function() {
            a.b = b;
            b.update();
            return b
        })
    })
};
var X = function(a) {
    "serviceWorker"in navigator && navigator.serviceWorker.addEventListener("message", function(b) {
        if (b.data && b.data[t.m])
            switch (b = b.data, b[t.m]) {
            case u.N:
            case u.H:
                a.Y.next(b[t.u])
            }
    }, !1)
};
if (!(firebase && firebase.INTERNAL && firebase.INTERNAL.registerService))
    throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");
firebase.INTERNAL.registerService("messaging", function(a) {
    return self && "ServiceWorkerGlobalScope"in self ? new S(a) : new Y(a)
}, {
    Messaging: Y
});
}).call(this);


