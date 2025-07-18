/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
      ? t(e, !0)
      : function (e) {
        if (!e.document)
          throw new Error("jQuery requires a window with a document");
        return t(e);
      })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? l[c.call(e)] || "object"
        : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  ((w.fn = w.prototype =
  {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e
        ? o.call(this)
        : e < 0
          ? this[e + this.length]
          : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return ((t.prevObject = this), t);
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        }),
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice,
  }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || g(a) || (a = {}),
          s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              ((n = a[t]),
                a !== (r = e[t]) &&
                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                  ? (i
                    ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                    : (o = n && w.isPlainObject(n) ? n : {}),
                    (a[t] = w.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r)));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () { },
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
          (C(Object(e))
            ? w.merge(n, "string" == typeof e ? [e] : e)
            : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return ((e.length = i), e);
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      },
    ));
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return (e === t && (f = !0), 0);
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          M +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          M +
          "*(?:([+-]|)" +
          M +
          "*(\\d+)|))" +
          M +
          "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
          M +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          M +
          "*((?:-\\d)?\\d*)" +
          M +
          "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      (L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType);
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
            q.apply(e, H.call(t));
          }
          : function (e, t) {
            var n = e.length,
              r = 0;
            while ((e[n++] = t[r++]));
            e.length = n - 1;
          },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
          "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return (r.push(l), r);
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return (r.push(l), r);
          } else {
            if (f[2]) return (L.apply(r, t.getElementsByTagName(e)), r);
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return (L.apply(r, t.getElementsByClassName(o)), r);
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) ((m = t), (v = e));
          else if ("object" !== t.nodeName.toLowerCase()) {
            ((c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length));
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            ((v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t));
          }
          if (v)
            try {
              return (L.apply(r, m.querySelectorAll(v)), r);
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return ((e[b] = !0), e);
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        (t.parentNode && t.parentNode.removeChild(t), (t = null));
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    ((n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", re, !1)
                : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return ((e.className = "i"), !e.getAttribute("className"));
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    var n =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        ((i = t.getElementsByName(e)), (r = 0));
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
                : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
              (ue(function (e) {
                ((h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                  y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                  y.push("\\[" + M + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length ||
                  y.push("~="),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                  y.push(".#.+[+~]"));
              }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  (t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:"));
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector),
              )) &&
              ue(function (e) {
                ((n.disconnectedMatch = m.call(e, "*")),
                  m.call(e, "[s!='']:x"),
                  v.push("!=", W));
              }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                  : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
              (D = t
                ? function (e, t) {
                  if (e === t) return ((f = !0), 0);
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                            ? O(c, e) - O(c, t)
                            : 0
                      : 4 & r
                        ? -1
                        : 1)
                  );
                }
                : function (e, t) {
                  if (e === t) return ((f = !0), 0);
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === d
                      ? -1
                      : t === d
                        ? 1
                        : i
                          ? -1
                          : o
                            ? 1
                            : c
                              ? O(c, e) - O(c, t)
                              : 0;
                  if (i === o) return ce(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === w
                      ? -1
                      : s[r] === w
                        ? 1
                        : 0;
                }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
            (t = t.replace(z, "='$1']")),
            n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) { }
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return ((e.ownerDocument || e) !== d && p(e), x(e, t));
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
            (c = !n.sortStable && e.slice(0)),
            e.sort(D),
            f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return ((c = null), e);
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                X.test(n) &&
                (t = a(n, !0)) &&
                (t = n.indexOf(")", n.length - t) - n.length) &&
                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                return !0;
              }
              : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
          },
          CLASS: function (e) {
            var t = E[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                E(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                    ("undefined" != typeof e.getAttribute &&
                      e.getAttribute("class")) ||
                    "",
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                ((i += ""),
                  "=" === t
                    ? i === n
                    : "!=" === t
                      ? i !== n
                      : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                              ? (" " + i.replace($, " ") + " ").indexOf(n) >
                              -1
                              : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                return !!e.parentNode;
              }
              : function (t, n, u) {
                var l,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = o !== a ? "nextSibling" : "previousSibling",
                  y = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  m = !u && !s,
                  x = !1;
                if (y) {
                  if (o) {
                    while (g) {
                      p = t;
                      while ((p = p[g]))
                        if (
                          s
                            ? p.nodeName.toLowerCase() === v
                            : 1 === p.nodeType
                        )
                          return !1;
                      h = g = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                    ((x =
                      (d =
                        (l =
                          (c =
                            (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                            (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                        l[1]) && l[2]),
                      (p = d && y.childNodes[d]));
                    while (
                      (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                    )
                      if (1 === p.nodeType && ++x && p === t) {
                        c[e] = [T, d, x];
                        break;
                      }
                  } else if (
                    (m &&
                      (x = d =
                        (l =
                          (c =
                            (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                            (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                        l[1]),
                      !1 === x)
                  )
                    while (
                      (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                    )
                      if (
                        (s
                          ? p.nodeName.toLowerCase() === v
                          : 1 === p.nodeType) &&
                        ++x &&
                        (m &&
                          ((c =
                            (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                            (f[p.uniqueID] = {}))[e] = [T, x]),
                          p === t)
                      )
                        break;
                  return (x -= i) === r || (x % r == 0 && x / r >= 0);
                }
              };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return i[b]
              ? i(t)
              : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                      var r,
                        o = i(e, t),
                        a = o.length;
                      while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                    })
                    : function (e) {
                      return i(e, 0, n);
                    })
                : i;
          },
        },
        pseudos: {
          not: se(function (e) {
            var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
            return r[b]
              ? se(function (e, t, n, i) {
                var o,
                  a = r(e, null, i, []),
                  s = e.length;
                while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
              })
              : function (e, i, o) {
                return (
                  (t[0] = e),
                  r(t, null, o, n),
                  (t[0] = null),
                  !n.pop()
                );
              };
          }),
          has: se(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: se(function (e) {
            return (
              (e = e.replace(Z, ee)),
              function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: se(function (e) {
            return (
              U.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) ||
              ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq));
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() { }
    ((ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          ((s = e), (u = []), (l = r.preFilter));
          while (s) {
            ((n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
              ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length))));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                  o.push({ value: n, type: a, matches: i }),
                  (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        }));
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
          while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
          return !1;
        }
        : function (t, n, u) {
          var l,
            c,
            f,
            p = [T, s];
          if (u) {
            while ((t = t[r]))
              if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          } else
            while ((t = t[r]))
              if (1 === t.nodeType || a)
                if (
                  ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                )
                  t = t[r] || t;
                else {
                  if ((l = c[o]) && l[0] === T && l[1] === s)
                    return (p[2] = l[2]);
                  if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                }
          return !1;
        };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
          var i = e.length;
          while (i--) if (!e[i](t, n, r)) return !1;
          return !0;
        }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            ((l = we(v, d)), r(l, [], s, u), (c = l.length));
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                ((l = []), (c = v.length));
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else
            ((v = we(v === a ? v.splice(h, v.length) : v)),
              i ? i(null, a, v, u) : L.apply(a, v));
        })
      );
    }
    function Ce(e) {
      for (
        var t,
        n,
        i,
        o = e.length,
        a = r.relative[e[0].type],
        s = a || r.relative[" "],
        u = a ? 1 : 0,
        c = me(
          function (e) {
            return e === t;
          },
          s,
          !0,
        ),
        f = me(
          function (e) {
            return O(t, e) > -1;
          },
          s,
          !0,
        ),
        p = [
          function (e, n, r) {
            var i =
              (!a && (r || n !== l)) ||
              ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            return ((t = null), i);
          },
        ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
              ve(
                e
                  .slice(0, u - 1)
                  .concat({ value: " " === e[u - 2].type ? "*" : "" }),
              ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e),
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              ((h = 0), a || f.ownerDocument === d || (p(f), (s = !g)));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            (L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u));
          }
          return (c && ((T = E), (l = w)), x);
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            (t || (t = a(e)), (n = t.length));
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              (p && (t = t.parentNode), (e = e.slice(u.shift().value.length)));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t,
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return (L.apply(n, i), n);
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t,
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
      le("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
      le("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
      le(P, function (e, t, n) {
        var r;
        if (!n)
          return !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
      }),
      oe
    );
  })(e);
  ((w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape));
  var k = function (e, t, n) {
    var r = [],
      i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    return r;
  },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      })
      : t.nodeType
        ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
        : "string" != typeof t
          ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
          })
          : w.filter(t, e, n);
  }
  ((w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
          e,
          w.grep(t, function (e) {
            return 1 === e.nodeType;
          }),
        )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    }));
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
            w.merge(
              this,
              w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0),
            ),
            A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(w)
        : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r)));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
          (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    },
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        (e.memory || (n = !1), (t = !1), i && (o = n ? [] : ""));
      },
      l = {
        add: function () {
          return (
            o &&
            (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                (o.splice(n, 1), n <= s && s--);
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return (o && (o = []), this);
        },
        disable: function () {
          return ((i = a = []), (o = n = ""), this);
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return ((i = a = []), n || t || (o = n = ""), this);
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
            ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return (l.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
        [
          "notify",
          "progress",
          w.Callbacks("memory"),
          w.Callbacks("memory"),
          2,
        ],
        [
          "resolve",
          "done",
          w.Callbacks("once memory"),
          w.Callbacks("once memory"),
          0,
          "resolved",
        ],
        [
          "reject",
          "fail",
          w.Callbacks("once memory"),
          w.Callbacks("once memory"),
          1,
          "rejected",
        ],
      ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return (o.done(arguments).fail(arguments), this);
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                (w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                        .promise()
                        .progress(t.notify)
                        .done(t.resolve)
                        .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null));
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      ((l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith),
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u)));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                      try {
                        l();
                      } catch (e) {
                        (w.Deferred.exceptionHook &&
                          w.Deferred.exceptionHook(e, c.stackTrace),
                          t + 1 >= o &&
                          (r !== W && ((s = void 0), (u = [e])),
                            n.rejectWith(s, u)));
                      }
                    };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                    (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                (n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W)));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          ((i[t[1]] = a.add),
            s &&
            a.add(
              function () {
                r = s;
              },
              n[3 - e][2].disable,
              n[3 - e][3].disable,
              n[0][2].lock,
              n[0][3].lock,
            ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments),
                this
              );
            }),
            (o[t[0] + "With"] = a.fireWith));
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            ((r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i));
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
          "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ((w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    }));
  var F = w.Deferred();
  ((w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
            (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then));
  function _() {
    (r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready());
  }
  "complete" === r.readyState ||
    ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
    var s = 0,
      u = e.length,
      l = null == n;
    if ("object" === x(n)) {
      i = !0;
      for (s in n) z(e, t, s, n[s], !0, o, a);
    } else if (
      void 0 !== r &&
      ((i = !0),
        g(r) || (a = !0),
        l &&
        (a
          ? (t.call(e, r), (t = null))
          : ((l = t),
            (t = function (e, t, n) {
              return l.call(w(e), n);
            }))),
        t)
    )
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  ((Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
          ((t = {}),
            Y(e) &&
            (e.nodeType
              ? (e[this.expando] = t)
              : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0,
              }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
                ? [t]
                : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    }));
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
            ? +e
            : Z.test(e)
              ? JSON.parse(e)
              : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) { }
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  (w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
            K.set(this, e);
          })
          : z(
            this,
            function (t) {
              var n;
              if (o && void 0 === t) {
                if (void 0 !== (n = K.get(o, e))) return n;
                if (void 0 !== (n = ne(o, e))) return n;
              } else
                this.each(function () {
                  K.set(this, e, t);
                });
            },
            null,
            t,
            arguments.length > 1,
            null,
            !0,
          );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
            (!r || Array.isArray(n)
              ? (r = J.access(e, t, w.makeArray(n)))
              : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        ("inprogress" === i && ((i = n.shift()), r--),
          i &&
          ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire());
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
              ? this
              : this.each(function () {
                var n = w.queue(this, e, t);
                (w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e));
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        ("string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx"));
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return (s(), i.promise(t));
      },
    }));
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) ((a[o] = e.style[o]), (e.style[o] = t[o]));
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
          return r.cur();
        }
        : function () {
          return w.css(e, t, "");
        },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      ((u /= 2), (l = l || c[3]), (c = +u || 1));
      while (a--)
        (w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o));
      ((c *= 2), w.style(e, t, c + l), (n = n || []));
    }
    return (
      n &&
      ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
        (i = w.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        (le[r] = i),
        i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
          t
            ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
                i[o] || (r.style.display = "")),
              "" === r.style.display && ae(r) && (i[o] = ce(r)))
            : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
          ae(this) ? w(this).show() : w(this).hide();
        });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ((ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td));
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
      a,
      s,
      u,
      l,
      c,
      f = t.createDocumentFragment(),
      p = [],
      d = 0,
      h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          ((a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]));
          while (c--) a = a.lastChild;
          (w.merge(p, a.childNodes), ((a = f.firstChild).textContent = ""));
        } else p.push(t.createTextNode(o));
    ((f.textContent = ""), (d = 0));
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
          (a = ye(f.appendChild(o), "script")),
          l && ve(a),
          n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    (t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue));
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) { }
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
        ("string" == typeof n
          ? ((i = r), (r = void 0))
          : ((i = r), (r = n), (n = void 0))),
        !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
      ((a = i),
        ((i = function (e) {
          return (w().off(e), a.apply(this, arguments));
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  ((w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        (n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
          (a = y.handle =
            function (t) {
              return "undefined" != typeof w && w.event.triggered !== t.type
                ? w.event.dispatch.apply(e, arguments)
                : void 0;
            }),
          (l = (t = (t || "").match(M) || [""]).length));
        while (l--)
          ((d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
            ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
              (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
              (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0)));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
              (d = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
          ) {
            ((f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length));
            while (o--)
              ((c = p[o]),
                (!i && g !== c.origType) ||
                (n && n.guid !== c.guid) ||
                (s && !s.test(c.namespace)) ||
                (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c)));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
                delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        ((s = w.event.handlers.call(this, t, l)), (n = 0));
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          ((t.currentTarget = o.elem), (r = 0));
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
                (t.data = a.data),
                void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return (c.postDispatch && c.postDispatch.call(this, t), t.result);
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              (void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r));
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this),
        u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
        s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          }
          : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return (this.focus(), !1);
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return (this.blur(), !1);
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return (this.click(), !1);
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      (e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0));
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        ((this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault());
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        ((this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation());
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        ((this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation());
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      w.event.addProp,
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
              ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      },
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    }));
  var Ne =
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        (delete a.handle, (a.events = {}));
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
      (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        (v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r));
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
        (o = i.firstChild),
        1 === i.childNodes.length && (i = o),
        o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        ((l = i),
          f !== d &&
          ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f));
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          ((l = s[f]),
            he.test(l.type || "") &&
            !J.access(l, "globalEval") &&
            w.contains(c, l) &&
            (l.src && "module" !== (l.type || "").toLowerCase()
              ? w._evalUrl && w._evalUrl(l.src)
              : m(l.textContent.replace(qe, ""), c, l)));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      (n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
        (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r)));
    return e;
  }
  (w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
        s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = e);
              });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) { }
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e,
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            ((n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get()));
          return this.pushStack(r);
        };
      },
    ));
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return ((n && n.opener) || (n = e), n.getComputedStyle(t));
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        ((l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c));
        var t = e.getComputedStyle(c);
        ((i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null));
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
        w.extend(h, {
          boxSizingReliable: function () {
            return (t(), o);
          },
          pixelBoxStyles: function () {
            return (t(), s);
          },
          pixelPosition: function () {
            return (t(), i);
          },
          reliableMarginLeft: function () {
            return (t(), u);
          },
          scrollboxSize: function () {
            return (t(), a);
          },
        }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
      ("" !== (a = n.getPropertyValue(t) || n[t]) ||
        w.contains(e.ownerDocument, e) ||
        (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
        We.test(a) &&
        Be.test(t) &&
        ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return (t || (t = w.cssProps[e] = Qe(e) || e), t);
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      ("margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
            (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i))));
    return (
      !r &&
      o >= 0 &&
      (u += Math.max(
        0,
        Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
        ),
      )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
      ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
      Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
      "px"
    );
  }
  (w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        ("string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
          n === n &&
          ("number" === o &&
            (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
            "" !== n ||
            0 !== t.indexOf("background") ||
            (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
            (u ? l.setProperty(t, n) : (l[t] = n))));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
        "get" in a &&
        (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                return et(e, t, r);
              });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
            h.scrollboxSize() === o.position &&
            (s -= Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] -
              parseFloat(o[t]) -
              Ze(e, t, "border", !1, o) -
              0.5,
            )),
            s &&
            (i = ie.exec(n)) &&
            "px" !== (i[3] || "px") &&
            ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
            se(e, { marginLeft: 0 }, function () {
              return e.getBoundingClientRect().left;
            })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      ((w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke));
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      },
    }));
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  ((w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        ((this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px")));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
              w.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration,
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
          this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] &&
                !w.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
    {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {}));
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
        w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return (t && (i.opacity = i.width = e), i);
  }
  function lt(e, t, n) {
    for (
      var r,
      i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
      o = 0,
      a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
          (s = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || s();
          })),
        a.unqueued++,
        p.always(function () {
          p.always(function () {
            (a.unqueued--, w.queue(e, "fx").length || a.empty.fire());
          });
        }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      (f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          null == (l = y && y.display) && (l = J.get(e, "display")),
          "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
          ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
              null == l && ((c = h.display), (l = "none" === c ? "" : c))),
            (h.display = "inline-block"))),
        n.overflow &&
        ((h.overflow = "hidden"),
          p.always(function () {
            ((h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]));
          })),
        (u = !1));
      for (r in d)
        (u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
            o && (y.hidden = !g),
            g && fe([e], !0),
            p.done(function () {
              (g || fe([e]), J.remove(e, "fxshow"));
              for (r in d) w.style(e, r, d[r]);
            })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y ||
          ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0))));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
          (i = t[r]),
          (o = e[n]),
          Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (a = w.cssHooks[r]) && "expand" in a)
      ) {
        ((o = a.expand(o)), delete e[r]);
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
          n = Math.max(0, l.startTime + l.duration - t),
          r = 1 - (n / l.duration || 0),
          o = 0,
          a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing,
          );
          return (l.tweens.push(r), r);
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
          (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  ((w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return (ue(n.elem, e, ie.exec(t), n), n);
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        ((n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t));
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
            complete: n || (!n && t) || (g(e) && e),
            duration: e,
            easing: (n && t) || (t && !g(t) && t),
          };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
          (r.duration in w.fx.speeds
            ? (r.duration = w.fx.speeds[r.duration])
            : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          (g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue));
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          (delete e.stop, t(n));
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--;)
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
              w.queue(this, e, []),
              i && i.stop && i.stop.call(this, !0),
              t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      },
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      (n.length || w.fx.stop(), (nt = void 0));
    }),
    (w.fx.timer = function (e) {
      (w.timers.push(e), w.fx.start());
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      ((e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value));
    })());
  var dt,
    ht = w.expr.attrHandle;
  (w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
              (i =
                w.attrHooks[t.toLowerCase()] ||
                (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = w.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return (e.setAttribute("type", t), n && (e.value = n), t);
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return (!1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n);
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
          ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    }));
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  (w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
            ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
    (w.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return (t && t.parentNode && t.parentNode.selectedIndex, null);
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      },
    }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      },
    ));
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
          ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
          : this.each(function () {
            var t, i, o, a;
            if (r) {
              ((i = 0), (o = w(this)), (a = xt(e)));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else
              (void 0 !== e && "boolean" !== n) ||
                ((t = mt(this)) && J.set(this, "__className__", t),
                  this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || !1 === e ? "" : J.get(this, "__className__") || "",
                  ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  (w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                  ((t =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
              ? n.replace(bt, "")
              : null == n
                ? ""
                : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return (n || (e.selectedIndex = -1), o);
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      ((w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
        (w.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        }));
    }),
    (h.focusin = "onfocusin" in e));
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  (w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
          3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
            (c = m.indexOf(":") < 0 && "on" + m),
            (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
            (t.isTrigger = o ? 2 : 3),
            (t.namespace = x.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : w.makeArray(n, [t])),
            (d = w.event.special[m] || {}),
            o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            (v.push(s), (u = s));
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          ((h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
            p.apply(s, n),
            (p = c && s[c]) &&
            p.apply &&
            Y(s) &&
            ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault()));
        return (
          (t.type = m),
          o ||
          t.isDefaultPrevented() ||
          (d._default && !1 !== d._default.apply(v.pop(), n)) ||
          !Y(i) ||
          (c &&
            g(i[m]) &&
            !y(i) &&
            ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      var n = function (e) {
        w.event.simulate(t, e.target, w.event.fix(e));
      };
      w.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this,
            i = J.access(r, t);
          (i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1));
        },
        teardown: function () {
          var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
          i
            ? J.access(r, t, i)
            : (r.removeEventListener(e, n, !0), J.remove(r, t));
        },
      };
    }));
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
      w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
            e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
            i,
            n,
            r,
          );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  ((w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
                : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    }));
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return (r && w.extend(!0, e, r), e);
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      (u.shift(),
        void 0 === r &&
        (r = e.mimeType || t.getResponseHeader("Content-Type")));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return (o !== u[0] && u.unshift(o), n[o]);
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  (w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      ("object" == typeof t && ((n = t), (t = void 0)), (n = n || {}));
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
              ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return (null == c && (h.mimeType = e), this);
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return (i && i.abort(t), k(0, t), this);
          },
        };
      if (
        (v.promise(E),
          (h.url = ((t || h.url || Ct.href) + "").replace(
            Rt,
            Ct.protocol + "//",
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
          null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          ((l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host));
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
          _t(It, h, n, E),
          c)
      )
        return E;
      ((f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
          h.processData &&
          0 ===
          (h.contentType || "").indexOf(
            "application/x-www-form-urlencoded",
          ) &&
          (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
            (h.processData || "string" == typeof h.data) &&
            ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
            ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
        (w.lastModified[o] &&
          E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
        E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
            ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"],
        ));
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
          m.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          ((c = !1), i.send(b, k));
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (E.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            r && (b = Xt(h, E, r)),
            (b = Ut(h, b, E, l)),
            l
              ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                  (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                    ? (C = "notmodified")
                    : ((C = b.state), (p = b.data), (l = !(d = b.error))))
              : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || C) + ""),
            l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
            E.statusCode(x),
            (x = void 0),
            f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
            m.fireWith(g, [E, C]),
            f &&
            (y.trigger("ajaxComplete", [E, h]),
              --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
          (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
            w(this).wrapInner(e.call(this, t));
          })
          : this.each(function () {
            var t = w(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) { }
    }));
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  ((h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"));
            for (a in i) s.setRequestHeader(a, i[a]);
            ((n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                    null),
                    "abort" === e
                      ? s.abort()
                      : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                          Vt[s.status] || s.status,
                          s.statusText,
                          "text" !== (s.responseType || "text") ||
                            "string" != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders(),
                        ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                  4 === s.readyState &&
                    e.setTimeout(function () {
                      n && r();
                    });
                }),
              (n = n("abort")));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return (w.globalEval(e), e);
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      (void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"));
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            ((t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  (t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type));
                }),
              )),
              r.head.appendChild(t[0]));
          },
          abort: function () {
            n && n();
          },
        };
      }
    }));
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  (w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return ((this[e] = !0), e);
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
            0 ===
            (t.contentType || "").indexOf(
              "application/x-www-form-urlencoded",
            ) &&
            Qt.test(t.data) &&
            "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
            (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return (a || w.error(i + " was not called"), a[0]);
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            (void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0));
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"),
        2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
        (h.createHTMLDocument
          ? (((i = (t =
            r.implementation.createHTMLDocument("")).createElement(
              "base",
            )).href = r.location.href),
            t.head.appendChild(i))
          : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
        w
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            ((o = arguments),
              a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e));
          })
          .always(
            n &&
            function (e, t) {
              a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
              });
            },
          ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        ("static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p));
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
              w.offset.setOffset(this, e, t);
            });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            ((t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement));
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                  void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length,
          );
        };
      },
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return ((n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n);
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e],
                      ))
                    : void 0 === i
                      ? w.css(t, n, s)
                      : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a,
            );
          };
        },
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      },
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
      return w;
    }));
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return (
        e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
      );
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});

/**
 * Swiper 11.2.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 3, 2025
 */

var Swiper = (function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    (void 0 === s && (s = {}), void 0 === a && (a = {}));
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(a)
      .filter((e) => i.indexOf(e) < 0)
      .forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: { blur() { }, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() { } }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() { },
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return (t(e, s), e);
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() { }, pushState() { }, go() { }, back() { } },
    CustomEvent: function () {
      return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return (t(e, i), e);
  }
  function n(e) {
    return (
      void 0 === e && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function l(e, t) {
    return (void 0 === t && (t = 0), setTimeout(e, t));
  }
  function o() {
    return Date.now();
  }
  function d(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((e) => e.replace(",", "."))
            .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
      (i = s.WebKitCSSMatrix
        ? n.m41
        : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
      (i = s.WebKitCSSMatrix
        ? n.m42
        : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function c(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (
        null != i &&
        ((s = i),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r &&
            r.enumerable &&
            (c(e[a]) && c(i[a])
              ? i[a].__swiper__
                ? (e[a] = i[a])
                : p(e[a], i[a])
              : !c(e[a]) && c(i[a])
                ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : p(e[a], i[a]))
                : (e[a] = i[a]));
        }
      }
    }
    var s;
    return e;
  }
  function u(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    ((t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID));
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        ((l = new Date().getTime()), null === o && (o = l));
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              ((t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [a]: c }));
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function h(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function f(e, t) {
    void 0 === t && (t = "");
    const s = r(),
      a = [...e.children];
    return (
      s.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      a.push(...e.assignedElements()),
      t ? a.filter((e) => e.matches(t)) : a
    );
  }
  function g(e) {
    try {
      return void console.warn(e);
    } catch (e) { }
  }
  function v(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return (s.classList.add(...(Array.isArray(t) ? t : n(t))), s);
  }
  function w(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return { top: i.top + d - l, left: i.left + c - o };
  }
  function b(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);)
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function E(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a;)
      (t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement));
    return s;
  }
  function x(e, t) {
    t &&
      e.addEventListener("transitionend", function s(a) {
        a.target === e &&
          (t.call(e, a), e.removeEventListener("transitionend", s));
      });
  }
  function S(e, t, s) {
    const a = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        a
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-right" : "margin-top"),
      ) +
      parseFloat(
        a
          .getComputedStyle(e, null)
          .getPropertyValue(
            "width" === t ? "margin-left" : "margin-bottom",
          ),
      )
      : e.offsetWidth;
  }
  function T(e) {
    return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
  }
  function M(e) {
    return (t) =>
      Math.abs(t) > 0 &&
        e.browser &&
        e.browser.need3dFix &&
        Math.abs(t) % 90 == 0
        ? t + 0.001
        : t;
  }
  let C, P, L;
  function I() {
    return (
      C ||
      (C = (function () {
        const e = r(),
          t = a();
        return {
          smoothScroll:
            t.documentElement &&
            t.documentElement.style &&
            "scrollBehavior" in t.documentElement.style,
          touch: !!(
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof e.DocumentTouch)
          ),
        };
      })()),
      C
    );
  }
  function z(e) {
    return (
      void 0 === e && (e = {}),
      P ||
      (P = (function (e) {
        let { userAgent: t } = void 0 === e ? {} : e;
        const s = I(),
          a = r(),
          i = a.navigator.platform,
          n = t || a.navigator.userAgent,
          l = { ios: !1, android: !1 },
          o = a.screen.width,
          d = a.screen.height,
          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
        let p = n.match(/(iPad).*OS\s([\d_]+)/);
        const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === i;
        let f = "MacIntel" === i;
        return (
          !p &&
          f &&
          s.touch &&
          [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810",
          ].indexOf(`${o}x${d}`) >= 0 &&
          ((p = n.match(/(Version)\/([\d.]+)/)),
            p || (p = [0, 1, "13_0_0"]),
            (f = !1)),
          c && !h && ((l.os = "android"), (l.android = !0)),
          (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
          l
        );
      })(e)),
      P
    );
  }
  function A() {
    return (
      L ||
      (L = (function () {
        const e = r(),
          t = z();
        let s = !1;
        function a() {
          const t = e.navigator.userAgent.toLowerCase();
          return (
            t.indexOf("safari") >= 0 &&
            t.indexOf("chrome") < 0 &&
            t.indexOf("android") < 0
          );
        }
        if (a()) {
          const t = String(e.navigator.userAgent);
          if (t.includes("Version/")) {
            const [e, a] = t
              .split("Version/")[1]
              .split(" ")[0]
              .split(".")
              .map((e) => Number(e));
            s = e < 16 || (16 === e && a < 2);
          }
        }
        const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          e.navigator.userAgent,
        ),
          n = a();
        return {
          isSafari: s || n,
          needPerspectiveFix: s,
          need3dFix: n || (i && t.ios),
          isWebView: i,
        };
      })()),
      L
    );
  }
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          (a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t));
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        (a.off(e, i), i.__emitterProxy && delete i.__emitterProxy);
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return ((i.__emitterProxy = t), a.on(e, i, s));
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
        s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return (s >= 0 && t.eventsAnyListeners.splice(s, 1), t);
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
              s.eventsListeners[e].forEach((a, i) => {
                (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                  s.eventsListeners[e].splice(i, 1);
              });
          }),
            s)
          : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      ("string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a));
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          (e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
            e.eventsListeners[t] &&
            e.eventsListeners[t].forEach((e) => {
              e.apply(a, s);
            }));
        }),
        e
      );
    },
  };
  const k = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const O = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const D = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
    );
    if (s) {
      let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!t &&
        e.isElement &&
        (s.shadowRoot
          ? (t = s.shadowRoot.querySelector(
            `.${e.params.lazyPreloaderClass}`,
          ))
          : requestAnimationFrame(() => {
            s.shadowRoot &&
              ((t = s.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`,
              )),
                t && t.remove());
          })),
        t && t.remove());
    }
  },
    G = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    X = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a =
        "auto" === e.params.slidesPerView
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + a + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && G(e, s);
          })
        );
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = i - t; a <= r + t; a += 1) {
          const t = ((a % s) + s) % s;
          (t < i || t > r) && G(e, t);
        }
      else
        for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
          a !== i && (a > r || a < i) && G(e, a);
    };
  var H = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      ((t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a.clientHeight),
        (0 === t && e.isHorizontal()) ||
        (0 === s && e.isVertical()) ||
        ((t =
          t -
          parseInt(b(a, "padding-left") || 0, 10) -
          parseInt(b(a, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(b(a, "padding-top") || 0, 10) -
            parseInt(b(a, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          })));
    },
    updateSlides: function () {
      const e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      const s = e.params,
        {
          wrapperEl: a,
          slidesEl: i,
          size: r,
          rtlTranslate: n,
          wrongRTL: l,
        } = e,
        o = e.virtual && s.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = f(i, `.${e.params.slideClass}, swiper-slide`),
        p = o ? e.virtual.slides.length : c.length;
      let m = [];
      const h = [],
        g = [];
      let v = s.slidesOffsetBefore;
      "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
      let w = s.slidesOffsetAfter;
      "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
      const y = e.snapGrid.length,
        E = e.slidesGrid.length;
      let x = s.spaceBetween,
        T = -v,
        M = 0,
        C = 0;
      if (void 0 === r) return;
      ("string" == typeof x && x.indexOf("%") >= 0
        ? (x = (parseFloat(x.replace("%", "")) / 100) * r)
        : "string" == typeof x && (x = parseFloat(x)),
        (e.virtualSize = -x),
        c.forEach((e) => {
          (n ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = ""));
        }),
        s.centeredSlides &&
        s.cssMode &&
        (u(a, "--swiper-centered-offset-before", ""),
          u(a, "--swiper-centered-offset-after", "")));
      const P = s.grid && s.grid.rows > 1 && e.grid;
      let L;
      P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      const I =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView,
        ).length > 0;
      for (let a = 0; a < p; a += 1) {
        let i;
        if (
          ((L = 0),
            c[a] && (i = c[a]),
            P && e.grid.updateSlide(a, i, c),
            !c[a] || "none" !== b(i, "display"))
        ) {
          if ("auto" === s.slidesPerView) {
            I && (c[a].style[e.getDirectionLabel("width")] = "");
            const r = getComputedStyle(i),
              n = i.style.transform,
              l = i.style.webkitTransform;
            if (
              (n && (i.style.transform = "none"),
                l && (i.style.webkitTransform = "none"),
                s.roundLengths)
            )
              L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
            else {
              const e = t(r, "width"),
                s = t(r, "padding-left"),
                a = t(r, "padding-right"),
                n = t(r, "margin-left"),
                l = t(r, "margin-right"),
                o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) L = e + n + l;
              else {
                const { clientWidth: t, offsetWidth: r } = i;
                L = e + s + a + n + l + (r - t);
              }
            }
            (n && (i.style.transform = n),
              l && (i.style.webkitTransform = l),
              s.roundLengths && (L = Math.floor(L)));
          } else
            ((L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView),
              s.roundLengths && (L = Math.floor(L)),
              c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`));
          (c[a] && (c[a].swiperSlideSize = L),
            g.push(L),
            s.centeredSlides
              ? ((T = T + L / 2 + M / 2 + x),
                0 === M && 0 !== a && (T = T - r / 2 - x),
                0 === a && (T = T - r / 2 - x),
                Math.abs(T) < 0.001 && (T = 0),
                s.roundLengths && (T = Math.floor(T)),
                C % s.slidesPerGroup == 0 && m.push(T),
                h.push(T))
              : (s.roundLengths && (T = Math.floor(T)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                e.params.slidesPerGroup ==
                0 && m.push(T),
                h.push(T),
                (T = T + L + x)),
            (e.virtualSize += L + x),
            (M = L),
            (C += 1));
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + w),
          n &&
          l &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          (a.style.width = `${e.virtualSize + x}px`),
          s.setWrapperSize &&
          (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
          P && e.grid.updateWrapperSize(L, m),
          !s.centeredSlides)
      ) {
        const t = [];
        for (let a = 0; a < m.length; a += 1) {
          let i = m[a];
          (s.roundLengths && (i = Math.floor(i)),
            m[a] <= e.virtualSize - r && t.push(i));
        }
        ((m = t),
          Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(e.virtualSize - r));
      }
      if (o && s.loop) {
        const t = g[0] + x;
        if (s.slidesPerGroup > 1) {
          const a = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) /
            s.slidesPerGroup,
          ),
            i = t * s.slidesPerGroup;
          for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i);
        }
        for (
          let a = 0;
          a < e.virtual.slidesBefore + e.virtual.slidesAfter;
          a += 1
        )
          (1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
            h.push(h[h.length - 1] + t),
            (e.virtualSize += t));
      }
      if ((0 === m.length && (m = [0]), 0 !== x)) {
        const t =
          e.isHorizontal() && n
            ? "marginLeft"
            : e.getDirectionLabel("marginRight");
        c.filter(
          (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1,
        ).forEach((e) => {
          e.style[t] = `${x}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        (g.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x));
        const t = e > r ? e - r : 0;
        m = m.map((e) => (e <= 0 ? -v : e > t ? t + w : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        (g.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x));
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < r) {
          const s = (r - e - t) / 2;
          (m.forEach((e, t) => {
            m[t] = e - s;
          }),
            h.forEach((e, t) => {
              h[t] = e + s;
            }));
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: m,
          slidesGrid: h,
          slidesSizesGrid: g,
        }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        (u(a, "--swiper-centered-offset-before", -m[0] + "px"),
          u(
            a,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px",
          ));
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        ((e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s)));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
          m.length !== y &&
          (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== E && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          a = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides
          ? a || e.el.classList.add(t)
          : a && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let a = 0; a < t.length; a += 1)
        t[a].swiperSlideOffset =
          (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      (i && (n = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []));
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c =
          (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
          (o.swiperSlideSize + l),
          p =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e],
          h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
          f =
            (u >= 0 && u < t.size - 1) ||
            (m > 1 && m <= t.size) ||
            (u <= 0 && m >= t.size);
        (f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)),
          k(o, f, s.slideVisibleClass),
          k(o, h, s.slideFullyVisibleClass),
          (o.progress = i ? -c : c),
          (o.originalProgress = i ? -p : p));
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === a) ((i = 0), (r = !0), (n = !0));
      else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        ((r = s || i <= 0), (n = l || i >= 1), s && (i = 0), l && (i = 1));
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        ((l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1));
      }
      (Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
        t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", i));
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
        r = e.virtual && s.virtual.enabled,
        n = e.grid && s.grid && s.grid.rows > 1,
        l = (e) => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o, d, c;
      if (r)
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          (t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = l(`[data-swiper-slide-index="${t}"]`)));
        } else o = l(`[data-swiper-slide-index="${i}"]`);
      else
        n
          ? ((o = t.find((e) => e.column === i)),
            (c = t.find((e) => e.column === i + 1)),
            (d = t.find((e) => e.column === i - 1)))
          : (o = t[i]);
      (o &&
        (n ||
          ((c = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling;) {
              const a = e.nextElementSibling;
              (t ? a.matches(t) && s.push(a) : s.push(a), (e = a));
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && !c && (c = t[0]),
            (d = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling;) {
                const a = e.previousElementSibling;
                (t ? a.matches(t) && s.push(a) : s.push(a), (e = a));
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && 0 === !d && (d = t[t.length - 1]))),
        t.forEach((e) => {
          (O(e, e === o, s.slideActiveClass),
            O(e, e === c, s.slideNextClass),
            O(e, e === d, s.slidePrevClass));
        }),
        e.emitSlidesClasses());
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              a = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (i = e)
                  : a >= t[e] && a < t[e + 1] && (i = e + 1)
                : a >= t[e] && (i = e);
            return (
              s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
              i
            );
          })(t)),
          a.indexOf(s) >= 0)
      )
        o = a.indexOf(s);
      else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if ((o >= a.length && (o = a.length - 1), d === r && !t.params.loop))
        return void (o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")));
      if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
        return void (t.realIndex = c(d));
      const p = t.grid && i.grid && i.grid.rows > 1;
      let u;
      if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
      else if (p) {
        const e = t.slides.find((e) => e.column === d);
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        (Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
          (u = Math.floor(s / i.grid.rows)));
      } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
      } else u = d;
      (Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: u,
        previousIndex: r,
        activeIndex: d,
      }),
        t.initialized && X(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) &&
        (n !== u && t.emit("realIndexChange"), t.emit("slideChange")));
    },
    updateClickedSlide: function (e, t) {
      const s = this,
        a = s.params;
      let i = e.closest(`.${a.slideClass}, swiper-slide`);
      !i &&
        s.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !i &&
            e.matches &&
            e.matches(`.${a.slideClass}, swiper-slide`) &&
            (i = e);
        });
      let r,
        n = !1;
      if (i)
        for (let e = 0; e < s.slides.length; e += 1)
          if (s.slides[e] === i) {
            ((n = !0), (r = e));
            break;
          }
      if (!i || !n)
        return ((s.clickedSlide = void 0), void (s.clickedIndex = void 0));
      ((s.clickedSlide = i),
        s.virtual && s.params.virtual.enabled
          ? (s.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
          : (s.clickedIndex = r),
        a.slideToClickedSlide &&
        void 0 !== s.clickedIndex &&
        s.clickedIndex !== s.activeIndex &&
        s.slideToClickedSlide());
    },
  };
  var Y = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = d(i, e);
      return ((r += this.cssOverflowAdjustment()), s && (r = -r), r || 0);
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      (s.isHorizontal() ? (o = a ? -e : e) : (d = e),
        i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        i.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
            ? -o
            : -d)
          : i.virtualTranslate ||
          (s.isHorizontal()
            ? (o -= s.cssOverflowAdjustment())
            : (d -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`)));
      const c = s.maxTranslate() - s.minTranslate();
      ((l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t));
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0));
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
          r.updateProgress(c),
          n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
              !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
            (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
            (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
            r.animating ||
            ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    (r.animating = !1),
                    s && r.emit("transitionEnd"));
              }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd,
              ))),
        !0
      );
    },
  };
  function B(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      (t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`));
    }
  }
  var N = {
    slideTo: function (e, t, s, a, i) {
      (void 0 === e && (e = 0),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10)));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: f,
      } = r;
      if (
        (!f && !a && !i) ||
        r.destroyed ||
        (r.animating && l.preventInteractionOnTransition)
      )
        return !1;
      void 0 === t && (t = r.params.speed);
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (
          !r.allowSlideNext &&
          (u
            ? w > r.translate && w > r.minTranslate()
            : w < r.translate && w < r.minTranslate())
        )
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(w),
        (b = n > p ? "next" : n < p ? "prev" : "reset"));
      const y = r.virtual && r.params.virtual.enabled;
      if (!(y && i) && ((u && -w === r.translate) || (!u && w === r.translate)))
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t)
          (y &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
            y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            y &&
            requestAnimationFrame(() => {
              ((r.wrapperEl.style.scrollSnapType = ""),
                (r._immediateVirtual = !1));
            }));
        else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
              !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      const E = A().isSafari;
      return (
        y && !i && E && r.isElement && r.virtual.update(!1, !1, n),
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
          ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (e) {
              r &&
                !r.destroyed &&
                e.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
            }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd,
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if (
        (void 0 === e && (e = 0),
          void 0 === s && (s = !0),
          "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const i = this;
      if (i.destroyed) return;
      void 0 === t && (t = i.params.speed);
      const r = i.grid && i.params.grid && i.params.grid.rows > 1;
      let n = e;
      if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
        else {
          let e;
          if (r) {
            const t = n * i.params.grid.rows;
            e = i.slides.find(
              (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
            ).column;
          } else e = i.getSlideIndexByData(n);
          const t = r
            ? Math.ceil(i.slides.length / i.params.grid.rows)
            : i.slides.length,
            { centeredSlides: s } = i.params;
          let l = i.params.slidesPerView;
          "auto" === l
            ? (l = i.slidesPerViewDynamic())
            : ((l = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
              s && l % 2 == 0 && (l += 1));
          let o = t - e < l;
          if (
            (s && (o = o || e < Math.ceil(l / 2)),
              a && s && "auto" !== i.params.slidesPerView && !r && (o = !1),
              o)
          ) {
            const a = s
              ? e < i.activeIndex
                ? "prev"
                : "next"
              : e - i.activeIndex - 1 < i.params.slidesPerView
                ? "next"
                : "prev";
            i.loopFix({
              direction: a,
              slideTo: !0,
              activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
              slideRealIndex: "next" === a ? i.realIndex : void 0,
            });
          }
          if (r) {
            const e = n * i.params.grid.rows;
            n = i.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
            ).column;
          } else n = i.getSlideIndexByData(n);
        }
      return (
        requestAnimationFrame(() => {
          i.slideTo(n, t, s, a);
        }),
        i
      );
    },
    slideNext: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        { enabled: i, params: r, animating: n } = a;
      if (!i || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        if (
          (a.loopFix({ direction: "next" }),
            (a._clientLeft = a.wrapperEl.clientLeft),
            a.activeIndex === a.slides.length - 1 && r.cssMode)
        )
          return (
            requestAnimationFrame(() => {
              a.slideTo(a.activeIndex + o, e, t, s);
            }),
            !0
          );
      }
      return r.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = a;
      if (!o || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        (a.loopFix({ direction: "prev" }),
          (a._clientLeft = a.wrapperEl.clientLeft));
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map((e) => p(e)),
        h = i.freeMode && i.freeMode.enabled;
      let f = r[m.indexOf(u) - 1];
      if (void 0 === f && (i.cssMode || h)) {
        let e;
        (r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (f = h ? r[e] : r[e > 0 ? e - 1 : e]));
      }
      let g = 0;
      if (
        (void 0 !== f &&
          ((g = n.indexOf(f)),
            g < 0 && (g = a.activeIndex - 1),
            "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((g = g - a.slidesPerViewDynamic("previous", !0) + 1),
              (g = Math.max(g, 0)))),
          i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return i.loop && 0 === a.activeIndex && i.cssMode
        ? (requestAnimationFrame(() => {
          a.slideTo(g, e, t, s);
        }),
          !0)
        : a.slideTo(g, e, t, s);
    },
    slideReset: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this;
      if (!a.destroyed)
        return (
          void 0 === e && (e = a.params.speed),
          a.slideTo(a.activeIndex, e, t, s)
        );
    },
    slideToClosest: function (e, t, s, a) {
      (void 0 === t && (t = !0), void 0 === a && (a = 0.5));
      const i = this;
      if (i.destroyed) return;
      void 0 === e && (e = i.params.speed);
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this;
      if (e.destroyed) return;
      const { params: t, slidesEl: s } = e,
        a =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        ((i = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10,
        )),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  f(s, `${n}[data-swiper-slide-index="${i}"]`)[0],
                )),
                l(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  f(s, `${n}[data-swiper-slide-index="${i}"]`)[0],
                )),
                l(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r));
      } else e.slideTo(r);
    },
  };
  var R = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: a } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      const i = () => {
        f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        });
      },
        r = t.grid && s.grid && s.grid.rows > 1,
        n = s.slidesPerGroup * (r ? s.grid.rows : 1),
        l = t.slides.length % n != 0,
        o = r && t.slides.length % s.grid.rows != 0,
        d = (e) => {
          for (let a = 0; a < e; a += 1) {
            const e = t.isElement
              ? v("swiper-slide", [s.slideBlankClass])
              : v("div", [s.slideClass, s.slideBlankClass]);
            t.slidesEl.append(e);
          }
        };
      if (l) {
        if (s.loopAddBlankSlides) {
          (d(n - (t.slides.length % n)), t.recalcSlides(), t.updateSlides());
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
          );
        i();
      } else if (o) {
        if (s.loopAddBlankSlides) {
          (d(s.grid.rows - (t.slides.length % s.grid.rows)),
            t.recalcSlides(),
            t.updateSlides());
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
          );
        i();
      } else i();
      t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next",
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: d,
        allowSlidePrev: c,
        allowSlideNext: p,
        slidesEl: u,
        params: m,
      } = o,
        { centeredSlides: h } = m;
      if (
        ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && m.virtual.enabled)
      )
        return (
          s &&
          (m.centeredSlides || 0 !== o.snapIndex
            ? m.centeredSlides && o.snapIndex < m.slidesPerView
              ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
              : o.snapIndex === o.snapGrid.length - 1 &&
              o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
            : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      let f = m.slidesPerView;
      "auto" === f
        ? (f = o.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(m.slidesPerView, 10))),
          h && f % 2 == 0 && (f += 1));
      const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
      let w = v;
      (w % v != 0 && (w += v - (w % v)),
        (w += m.loopAdditionalSlides),
        (o.loopedSlides = w));
      const b = o.grid && m.grid && m.grid.rows > 1;
      d.length < f + w
        ? g(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
        )
        : b &&
        "row" === m.grid.fill &&
        g(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
        );
      const y = [],
        E = [];
      let x = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
          d.find((e) => e.classList.contains(m.slideActiveClass)),
        ))
        : (x = r);
      const S = "next" === a || !a,
        T = "prev" === a || !a;
      let M = 0,
        C = 0;
      const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
        L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + 0.5 : 0);
      if (L < w) {
        M = Math.max(w - L, v);
        for (let e = 0; e < w - L; e += 1) {
          const t = e - Math.floor(e / P) * P;
          if (b) {
            const e = P - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1)
              d[t].column === e && y.push(t);
          } else y.push(P - t - 1);
        }
      } else if (L + f > P - w) {
        C = Math.max(L - (P - 2 * w), v);
        for (let e = 0; e < C; e += 1) {
          const t = e - Math.floor(e / P) * P;
          b
            ? d.forEach((e, s) => {
              e.column === t && E.push(s);
            })
            : E.push(t);
        }
      }
      if (
        ((o.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            o.__preventObserver__ = !1;
          }),
          T &&
          y.forEach((e) => {
            ((d[e].swiperLoopMoveDOM = !0),
              u.prepend(d[e]),
              (d[e].swiperLoopMoveDOM = !1));
          }),
          S &&
          E.forEach((e) => {
            ((d[e].swiperLoopMoveDOM = !0),
              u.append(d[e]),
              (d[e].swiperLoopMoveDOM = !1));
          }),
          o.recalcSlides(),
          "auto" === m.slidesPerView
            ? o.updateSlides()
            : b &&
            ((y.length > 0 && T) || (E.length > 0 && S)) &&
            o.slides.forEach((e, t) => {
              o.grid.updateSlide(t, e, o.slides);
            }),
          m.watchSlidesProgress && o.updateSlidesOffset(),
          s)
      )
        if (y.length > 0 && T) {
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x + M] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x + Math.ceil(M), 0, !1, !0),
                i &&
                ((o.touchEventsData.startTranslate =
                  o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else if (i) {
            const e = b ? y.length / m.grid.rows : y.length;
            (o.slideTo(o.activeIndex + e, 0, !1, !0),
              (o.touchEventsData.currentTranslate = o.translate));
          }
        } else if (E.length > 0 && S)
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x - C] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x - C, 0, !1, !0),
                i &&
                ((o.touchEventsData.startTranslate =
                  o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else {
            const e = b ? E.length / m.grid.rows : E.length;
            o.slideTo(o.activeIndex - e, 0, !1, !0);
          }
      if (
        ((o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          o.controller && o.controller.control && !n)
      ) {
        const e = {
          slideRealIndex: t,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
            !t.destroyed &&
              t.params.loop &&
              t.loopFix({
                ...e,
                slideTo: t.params.slidesPerView === m.slidesPerView && s,
              });
          })
          : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix({
            ...e,
            slideTo:
              o.controller.control.params.slidesPerView === m.slidesPerView &&
              s,
          });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || !s || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const a = [];
      (e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        a[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        a.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0));
    },
  };
  function q(e, t, s) {
    const a = r(),
      { params: i } = e,
      n = i.edgeSwipeDetection,
      l = i.edgeSwipeThreshold;
    return (
      !n ||
      !(s <= l || s >= a.innerWidth - l) ||
      ("prevent" === n && (t.preventDefault(), !0))
    );
  }
  function _(e) {
    const t = this,
      s = a();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const n = t.touchEventsData;
    if ("pointerdown" === i.type) {
      if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
      n.pointerId = i.pointerId;
    } else
      "touchstart" === i.type &&
        1 === i.targetTouches.length &&
        (n.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
    const { params: l, touches: d, enabled: c } = t;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = i.target;
    if (
      "wrapper" === l.touchEventsTarget &&
      !(function (e, t) {
        const s = r();
        let a = t.contains(e);
        !a &&
          s.HTMLSlotElement &&
          t instanceof HTMLSlotElement &&
          ((a = [...t.assignedElements()].includes(e)),
            a ||
            (a = (function (e, t) {
              const s = [t];
              for (; s.length > 0;) {
                const t = s.shift();
                if (e === t) return !0;
                s.push(
                  ...t.children,
                  ...(t.shadowRoot ? t.shadowRoot.children : []),
                  ...(t.assignedElements ? t.assignedElements() : []),
                );
              }
            })(e, t)));
        return a;
      })(p, t.wrapperEl)
    )
      return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
      m = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && m && (p = m[0]);
    const h = l.noSwipingSelector
      ? l.noSwipingSelector
      : `.${l.noSwipingClass}`,
      f = !(!i.target || !i.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
          return (
            void 0 === t && (t = this),
            (function t(s) {
              if (!s || s === a() || s === r()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t)
          );
        })(h, p)
        : p.closest(h))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    ((d.currentX = i.pageX), (d.currentY = i.pageY));
    const g = d.currentX,
      v = d.currentY;
    if (!q(t, i, g)) return;
    (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = g),
      (d.startY = v),
      (n.touchStartTime = o()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1));
    let w = !0;
    (p.matches(n.focusableElements) &&
      ((w = !1), "SELECT" === p.nodeName && (n.isTouched = !1)),
      s.activeElement &&
      s.activeElement.matches(n.focusableElements) &&
      s.activeElement !== p &&
      ("mouse" === i.pointerType ||
        ("mouse" !== i.pointerType && !p.matches(n.focusableElements))) &&
      s.activeElement.blur());
    const b = w && t.allowTouchMove && l.touchStartPreventDefault;
    ((!l.touchStartForcePreventDefault && !b) ||
      p.isContentEditable ||
      i.preventDefault(),
      l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", i));
  }
  function F(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c,
      p = e;
    if ((p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)) {
      if (null !== i.touchId) return;
      if (p.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === p.type) {
      if (
        ((c = [...p.changedTouches].find((e) => e.identifier === i.touchId)),
          !c || c.identifier !== i.touchId)
      )
        return;
    } else c = p;
    if (!i.isTouched)
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", p)
      );
    const u = c.pageX,
      m = c.pageY;
    if (p.preventedByNestedSwiper) return ((n.startX = u), void (n.startY = m));
    if (!s.allowTouchMove)
      return (
        p.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m }),
            (i.touchStartTime = o()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return ((i.isTouched = !1), void (i.isMoved = !1));
      } else if (
        (u < n.startX && s.translate <= s.maxTranslate()) ||
        (u > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      (t.activeElement &&
        t.activeElement.matches(i.focusableElements) &&
        t.activeElement !== p.target &&
        "mouse" !== p.pointerType &&
        t.activeElement.blur(),
        t.activeElement &&
        p.target === t.activeElement &&
        p.target.matches(i.focusableElements))
    )
      return ((i.isMoved = !0), void (s.allowClick = !1));
    (i.allowTouchCallbacks && s.emit("touchMove", p),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = u),
      (n.currentY = m));
    const h = n.currentX - n.startX,
      f = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : h * h + f * f >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", p),
        void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
        i.isScrolling ||
        ("touchmove" === p.type && i.preventTouchMoveFromPointerMove))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    ((s.allowClick = !1),
      !r.cssMode && p.cancelable && p.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && p.stopPropagation());
    let g = s.isHorizontal() ? h : f,
      v = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    (r.oneWayMovement &&
      ((g = Math.abs(g) * (l ? 1 : -1)), (v = Math.abs(v) * (l ? 1 : -1))),
      (n.diff = g),
      (g *= r.touchRatio),
      l && ((g = -g), (v = -v)));
    const w = s.touchesDirection;
    ((s.swipeDirection = g > 0 ? "prev" : "next"),
      (s.touchesDirection = v > 0 ? "prev" : "next"));
    const b = s.params.loop && !r.cssMode,
      y =
        ("next" === s.touchesDirection && s.allowSlideNext) ||
        ("prev" === s.touchesDirection && s.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (b && y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        s.wrapperEl.dispatchEvent(e);
      }
      ((i.allowMomentumBounce = !1),
        !r.grabCursor ||
        (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
        s.setGrabCursor(!0),
        s.emit("sliderFirstMove", p));
    }
    if (
      (new Date().getTime(),
        !1 !== r._loopSwapReset &&
        i.isMoved &&
        i.allowThresholdMove &&
        w !== s.touchesDirection &&
        b &&
        y &&
        Math.abs(g) >= 1)
    )
      return (
        Object.assign(n, {
          startX: u,
          startY: m,
          currentX: u,
          currentY: m,
          startTranslate: i.currentTranslate,
        }),
        (i.loopSwapReset = !0),
        void (i.startTranslate = i.currentTranslate)
      );
    (s.emit("sliderMove", p),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate));
    let E = !0,
      x = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (x = 0),
        g > 0
          ? (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate >
            (r.centeredSlides
              ? s.minTranslate() -
              s.slidesSizesGrid[s.activeIndex + 1] -
              ("auto" !== r.slidesPerView &&
                s.slides.length - r.slidesPerView >= 2
                ? s.slidesSizesGrid[s.activeIndex + 1] +
                s.params.spaceBetween
                : 0) -
              s.params.spaceBetween
              : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
            i.currentTranslate > s.minTranslate() &&
            ((E = !1),
              r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + g) ** x)))
          : g < 0 &&
          (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate <
            (r.centeredSlides
              ? s.maxTranslate() +
              s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
              s.params.spaceBetween +
              ("auto" !== r.slidesPerView &&
                s.slides.length - r.slidesPerView >= 2
                ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                s.params.spaceBetween
                : 0)
              : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
            i.currentTranslate < s.maxTranslate() &&
            ((E = !1),
              r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - g) ** x))),
        E && (p.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
        r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
  }
  function V(e) {
    const t = this,
      s = t.touchEventsData;
    let a,
      i = e;
    i.originalEvent && (i = i.originalEvent);
    if ("touchend" === i.type || "touchcancel" === i.type) {
      if (
        ((a = [...i.changedTouches].find((e) => e.identifier === s.touchId)),
          !a || a.identifier !== s.touchId)
      )
        return;
    } else {
      if (null !== s.touchId) return;
      if (i.pointerId !== s.pointerId) return;
      a = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type,
      )
    ) {
      if (
        !(
          ["pointercancel", "contextmenu"].includes(i.type) &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    ((s.pointerId = null), (s.touchId = null));
    const {
      params: r,
      touches: n,
      rtlTranslate: d,
      slidesGrid: c,
      enabled: p,
    } = t;
    if (!p) return;
    if (!r.simulateTouch && "mouse" === i.pointerType) return;
    if (
      (s.allowTouchCallbacks && t.emit("touchEnd", i),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
    )
      return (
        s.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    r.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = o(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = i.path || (i.composedPath && i.composedPath());
      (t.updateClickedSlide((e && e[0]) || i.target, e),
        t.emit("tap click", i),
        m < 300 &&
        u - s.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", i));
    }
    if (
      ((s.lastClickTime = o()),
        l(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        (0 === n.diff && !s.loopSwapReset) ||
        (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    )
      return ((s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1));
    let h;
    if (
      ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = r.followFinger
          ? d
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        r.cssMode)
    )
      return;
    if (r.freeMode && r.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    const f = h >= -t.maxTranslate() && !t.params.loop;
    let g = 0,
      v = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < c.length;
      e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== c[e + t]
        ? (f || (h >= c[e] && h < c[e + t])) && ((g = e), (v = c[e + t] - c[e]))
        : (f || h >= c[e]) &&
        ((g = e), (v = c[c.length - 1] - c[c.length - 2]));
    }
    let w = null,
      b = null;
    r.rewind &&
      (t.isBeginning
        ? (b =
          r.virtual && r.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
        : t.isEnd && (w = 0));
    const y = (h - c[g]) / v,
      E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (m > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      ("next" === t.swipeDirection &&
        (y >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? w : g + E)
          : t.slideTo(g)),
        "prev" === t.swipeDirection &&
        (y > 1 - r.longSwipesRatio
          ? t.slideTo(g + E)
          : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio
            ? t.slideTo(b)
            : t.slideTo(g)));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
        (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
        ? i.target === t.navigation.nextEl
          ? t.slideTo(g + E)
          : t.slideTo(g)
        : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E),
          "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g));
    }
  }
  function W() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    ((e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses());
    const l = n && t.loop;
    (!("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
  }
  function j(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function U() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    ((e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
    const r = e.maxTranslate() - e.minTranslate();
    ((i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1));
  }
  function K(e) {
    const t = this;
    (D(t, e.target),
      t.params.cssMode ||
      ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
      t.update());
  }
  function Z() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const Q = (e, t) => {
    const s = a(),
      { params: i, el: r, wrapperEl: n, device: l } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r &&
      "string" != typeof r &&
      (s[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
        r[d]("touchstart", e.onTouchStart, { passive: !1 }),
        r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
        s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        s[d]("touchend", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        i.cssMode && n[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            W,
            !0,
          )
          : e[c]("observerUpdate", W, !0),
        r[d]("load", e.onLoad, { capture: !0 }));
  };
  const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var ee = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function te(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (!0 === e[a] && (e[a] = { enabled: !0 }),
          "navigation" === a &&
          e[a] &&
          e[a].enabled &&
          !e[a].prevEl &&
          !e[a].nextEl &&
          (e[a].auto = !0),
          ["pagination", "scrollbar"].indexOf(a) >= 0 &&
          e[a] &&
          e[a].enabled &&
          !e[a].el &&
          (e[a].auto = !0),
          a in e && "enabled" in i
            ? ("object" != typeof e[a] ||
              "enabled" in e[a] ||
              (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              p(t, s))
            : p(t, s))
        : p(t, s);
    };
  }
  const se = {
    eventsEmitter: $,
    update: H,
    translate: Y,
    transition: {
      setTransition: function (e, t) {
        const s = this;
        (s.params.cssMode ||
          ((s.wrapperEl.style.transitionDuration = `${e}ms`),
            (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
          s.emit("setTransition", e, t));
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: a } = s;
        a.cssMode ||
          (a.autoHeight && s.updateAutoHeight(),
            B({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: a } = s;
        ((s.animating = !1),
          a.cssMode ||
          (s.setTransition(0),
            B({ swiper: s, runCallbacks: e, direction: t, step: "End" })));
      },
    },
    slide: N,
    loop: R,
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this;
        if (
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return;
        const s =
          "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        (t.isElement && (t.__preventObserver__ = !0),
          (s.style.cursor = "move"),
          (s.style.cursor = e ? "grabbing" : "grab"),
          t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          }));
      },
      unsetGrabCursor: function () {
        const e = this;
        (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
            requestAnimationFrame(() => {
              e.__preventObserver__ = !1;
            }));
      },
    },
    events: {
      attachEvents: function () {
        const e = this,
          { params: t } = e;
        ((e.onTouchStart = _.bind(e)),
          (e.onTouchMove = F.bind(e)),
          (e.onTouchEnd = V.bind(e)),
          (e.onDocumentTouchStart = Z.bind(e)),
          t.cssMode && (e.onScroll = U.bind(e)),
          (e.onClick = j.bind(e)),
          (e.onLoad = K.bind(e)),
          Q(e, "on"));
      },
      detachEvents: function () {
        Q(this, "off");
      },
    },
    breakpoints: {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: s, params: i, el: r } = e,
          n = i.breakpoints;
        if (!n || (n && 0 === Object.keys(n).length)) return;
        const l = a(),
          o =
            "window" !== i.breakpointsBase && i.breakpointsBase
              ? "container"
              : i.breakpointsBase,
          d =
            ["window", "container"].includes(i.breakpointsBase) ||
              !i.breakpointsBase
              ? e.el
              : l.querySelector(i.breakpointsBase),
          c = e.getBreakpoint(n, o, d);
        if (!c || e.currentBreakpoint === c) return;
        const u = (c in n ? n[c] : void 0) || e.originalParams,
          m = J(e, i),
          h = J(e, u),
          f = e.params.grabCursor,
          g = u.grabCursor,
          v = i.enabled;
        (m && !h
          ? (r.classList.remove(
            `${i.containerModifierClass}grid`,
            `${i.containerModifierClass}grid-column`,
          ),
            e.emitContainerClasses())
          : !m &&
          h &&
          (r.classList.add(`${i.containerModifierClass}grid`),
            ((u.grid.fill && "column" === u.grid.fill) ||
              (!u.grid.fill && "column" === i.grid.fill)) &&
            r.classList.add(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          f && !g ? e.unsetGrabCursor() : !f && g && e.setGrabCursor(),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            if (void 0 === u[t]) return;
            const s = i[t] && i[t].enabled,
              a = u[t] && u[t].enabled;
            (s && !a && e[t].disable(), !s && a && e[t].enable());
          }));
        const w = u.direction && u.direction !== i.direction,
          b = i.loop && (u.slidesPerView !== i.slidesPerView || w),
          y = i.loop;
        (w && s && e.changeDirection(), p(e.params, u));
        const E = e.params.enabled,
          x = e.params.loop;
        (Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          v && !E ? e.disable() : !v && E && e.enable(),
          (e.currentBreakpoint = c),
          e.emit("_beforeBreakpoint", u),
          s &&
          (b
            ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
            : !y && x
              ? (e.loopCreate(t), e.updateSlides())
              : y && !x && e.loopDestroy()),
          e.emit("breakpoint", u));
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let a = !1;
        const i = r(),
          n = "window" === t ? i.innerHeight : s.clientHeight,
          l = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: n * t, point: e };
            }
            return { value: e, point: e };
          });
        l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < l.length; e += 1) {
          const { point: r, value: n } = l[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
            : n <= s.clientWidth && (a = r);
        }
        return a || "max";
      },
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: s } = e,
          { slidesOffsetBefore: a } = s;
        if (a) {
          const t = e.slides.length - 1,
            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
          e.isLocked = e.size > s;
        } else e.isLocked = 1 === e.snapGrid.length;
        (!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
      },
    },
    classes: {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: a, el: i, device: r } = e,
          n = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: a },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass,
          );
        (t.push(...n), i.classList.add(...t), e.emitContainerClasses());
      },
      removeClasses: function () {
        const { el: e, classNames: t } = this;
        e &&
          "string" != typeof e &&
          (e.classList.remove(...t), this.emitContainerClasses());
      },
    },
  },
    ae = {};
  class ie {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
        i[r] = arguments[r];
      (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (t = i[0])
        : ([e, t] = i),
        t || (t = {}),
        (t = p({}, t)),
        e && !t.el && (t.el = e));
      const n = a();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const a = p({}, t, { el: s });
            e.push(new ie(a));
          }),
          e
        );
      }
      const l = this;
      ((l.__swiper__ = !0),
        (l.support = I()),
        (l.device = z({ userAgent: t.userAgent })),
        (l.browser = A()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules));
      const o = {};
      l.modules.forEach((e) => {
        e({
          params: t,
          swiper: l,
          extendParams: te(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const d = p({}, ee, o);
      return (
        (l.params = p({}, d, ae, t)),
        (l.originalParams = p({}, l.params)),
        (l.passedParams = p({}, t)),
        l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((e) => {
          l.on(e, l.params.on[e]);
        }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
      return y(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
        ),
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = f(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      (s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses());
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass),
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass),
          )
          .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      (e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        (t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a));
      }),
        e.emit("_slideClasses", t));
    }
    slidesPerViewDynamic(e, t) {
      (void 0 === e && (e = "current"), void 0 === t && (t = !1));
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if ("number" == typeof s.slidesPerView) return s.slidesPerView;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += Math.ceil(a[s].swiperSlideSize)),
              (o += 1),
              t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        (e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses());
      }
      let i;
      if (
        (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && D(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        (a(), s.autoHeight && e.updateAutoHeight());
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      (s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update"));
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
        ("horizontal" !== e && "vertical" !== e) ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      ((s.swiper = t),
        s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
        t.params.swiperElementNodeName.toUpperCase() &&
        (t.isElement = !0));
      const a = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return f(s, a())[0];
      })();
      return (
        !i &&
        t.params.createElements &&
        ((i = v("div", t.params.wrapperClass)),
          s.append(i),
          f(s, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
          wrongRTL: "-webkit-box" === b(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      (t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
            t.params.initialSlide + t.virtual.slidesBefore,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          )
          : t.slideTo(
            t.params.initialSlide,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          ),
        t.params.loop && t.loopCreate(),
        t.attachEvents());
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((e) => {
          e.complete
            ? D(t, e)
            : e.addEventListener("load", (e) => {
              D(t, e.target);
            });
        }),
        X(t),
        (t.initialized = !0),
        X(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      (void 0 === e && (e = !0), void 0 === t && (t = !0));
      const s = this,
        { params: a, el: i, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
          (s.removeClasses(),
            i && "string" != typeof i && i.removeAttribute("style"),
            r && r.removeAttribute("style"),
            n &&
            n.length &&
            n.forEach((e) => {
              (e.classList.remove(
                a.slideVisibleClass,
                a.slideFullyVisibleClass,
                a.slideActiveClass,
                a.slideNextClass,
                a.slidePrevClass,
              ),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index"));
            })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
          (s.el && "string" != typeof s.el && (s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) { }
                try {
                  delete t[e];
                } catch (e) { }
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(ae, e);
    }
    static get extendedDefaults() {
      return ae;
    }
    static get defaults() {
      return ee;
    }
    static installModule(e) {
      ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
      const t = ie.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ie.installModule(e)), ie)
        : (ie.installModule(e), ie);
    }
  }
  function re(e, t, s, a) {
    return (
      e.params.createElements &&
      Object.keys(a).forEach((i) => {
        if (!s[i] && !0 === s.auto) {
          let r = f(e.el, `.${a[i]}`)[0];
          (r || ((r = v("div", a[i])), (r.className = a[i]), e.el.append(r)),
            (s[i] = r),
            (t[i] = r));
        }
      }),
      s
    );
  }
  function ne(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function le(e) {
    const t = this,
      { params: s, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    const i = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        ((t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = ""));
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
    else i(e);
    (t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update());
  }
  function oe(e) {
    const t = this,
      { params: s, activeIndex: a, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        ((t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = ""));
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    (t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1));
  }
  function de(e, t) {
    const s = this,
      { params: a, activeIndex: i, slidesEl: r } = s;
    let n = i;
    a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      (e.remove(), d.unshift(e));
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    (s.recalcSlides(),
      a.loop && s.loopCreate(),
      (a.observer && !s.isElement) || s.update(),
      a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1));
  }
  function ce(e) {
    const t = this,
      { params: s, activeIndex: a } = t;
    let i = a;
    s.loop && ((i -= t.loopedSlides), t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        ((r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1));
      n = Math.max(n, 0);
    } else
      ((r = e),
        t.slides[r] && t.slides[r].remove(),
        r < n && (n -= 1),
        (n = Math.max(n, 0)));
    (t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1));
  }
  function pe() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function ue(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    (a("beforeInit", () => {
      if (s.params.effect !== t) return;
      (s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`));
      const e = n ? n() : {};
      (Object.assign(s.params, e), Object.assign(s.originalParams, e));
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          (s.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
            ).forEach((e) => e.remove());
          }),
            o());
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && s.slides && s.slides.length && (i(), (c = !1));
            }));
      }));
  }
  function me(e, t) {
    const s = h(t);
    return (
      s !== t &&
      ((s.style.backfaceVisibility = "hidden"),
        (s.style["-webkit-backface-visibility"] = "hidden")),
      s
    );
  }
  function he(e) {
    let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      ((e = i
        ? a
        : a.filter((e) => {
          const s = e.classList.contains("swiper-slide-transform")
            ? ((e) => {
              if (!e.parentElement)
                return t.slides.find(
                  (t) => t.shadowRoot && t.shadowRoot === e.parentNode,
                );
              return e.parentElement;
            })(e)
            : e;
          return t.getSlideIndex(s) === r;
        })),
        e.forEach((e) => {
          x(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            ((s = !0), (t.animating = !1));
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        }));
    }
  }
  function fe(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
      i = h(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return (r || ((r = v("div", a.split(" "))), i.append(r)), r);
  }
  (Object.keys(se).forEach((e) => {
    Object.keys(se[e]).forEach((t) => {
      ie.prototype[t] = se[e][t];
    });
  }),
    ie.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
          t &&
            !t.destroyed &&
            t.initialized &&
            (a("beforeResize"), a("resize"));
        },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        (s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
            !t.destroyed &&
            t.initialized &&
            ((n = new ResizeObserver((e) => {
              l = i.requestAnimationFrame(() => {
                const { width: s, height: a } = t;
                let i = s,
                  r = a;
                (e.forEach((e) => {
                  let { contentBoxSize: s, contentRect: a, target: n } = e;
                  (n && n !== t.el) ||
                    ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                }),
                  (i === s && r === a) || o());
              });
            })),
              n.observe(t.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            (l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d));
          }));
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const s = function () {
                  i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              },
            );
            (a.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: t.isElement || (void 0 === s.childList || s).childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a));
          };
        (s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = E(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              (o(t.hostEl, { childList: t.params.observeSlideChildren }),
                o(t.wrapperEl, { attributes: !1 }));
            }
          }),
          a("destroy", () => {
            (n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length));
          }));
      },
    ]));
  const ge = [
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      i({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const l = a();
      s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = l.createElement("div");
      function d(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let i;
        return (
          a.renderSlide
            ? ((i = a.renderSlide.call(s, e, t)),
              "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
            : (i = s.isElement
              ? v("swiper-slide")
              : v("div", s.params.slideClass)),
          i.setAttribute("data-swiper-slide-index", t),
          a.renderSlide || (i.innerHTML = e),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function c(e, t, a) {
        const {
          slidesPerView: i,
          slidesPerGroup: r,
          centeredSlides: l,
          loop: o,
          initialSlide: c,
        } = s.params;
        if (t && !o && c > 0) return;
        const { addSlidesBefore: p, addSlidesAfter: u } = s.params.virtual,
          { from: m, to: h, slides: g, slidesGrid: v, offset: w } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const b = void 0 === a ? s.activeIndex || 0 : a;
        let y, E, x;
        ((y = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          l
            ? ((E = Math.floor(i / 2) + r + u), (x = Math.floor(i / 2) + r + p))
            : ((E = i + (r - 1) + u), (x = (o ? i : r) + p)));
        let S = b - x,
          T = b + E;
        o || ((S = Math.max(S, 0)), (T = Math.min(T, g.length - 1)));
        let M = (s.slidesGrid[S] || 0) - (s.slidesGrid[0] || 0);
        function C() {
          (s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            n("virtualUpdate"));
        }
        if (
          (o && b >= x
            ? ((S -= x), l || (M += s.slidesGrid[0]))
            : o && b < x && ((S = -x), l && (M += s.slidesGrid[0])),
            Object.assign(s.virtual, {
              from: S,
              to: T,
              offset: M,
              slidesGrid: s.slidesGrid,
              slidesBefore: x,
              slidesAfter: E,
            }),
            m === S && h === T && !e)
        )
          return (
            s.slidesGrid !== v &&
            M !== w &&
            s.slides.forEach((e) => {
              e.style[y] = M - Math.abs(s.cssOverflowAdjustment()) + "px";
            }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: M,
              from: S,
              to: T,
              slides: (function () {
                const e = [];
                for (let t = S; t <= T; t += 1) e.push(g[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? C()
              : n("virtualUpdate"))
          );
        const P = [],
          L = [],
          I = (e) => {
            let t = e;
            return (
              e < 0 ? (t = g.length + e) : t >= g.length && (t -= g.length),
              t
            );
          };
        if (e)
          s.slides
            .filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`))
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = m; e <= h; e += 1)
            if (e < S || e > T) {
              const t = I(e);
              s.slides
                .filter((e) =>
                  e.matches(
                    `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`,
                  ),
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const z = o ? -g.length : 0,
          A = o ? 2 * g.length : g.length;
        for (let t = z; t < A; t += 1)
          if (t >= S && t <= T) {
            const s = I(t);
            void 0 === h || e
              ? L.push(s)
              : (t > h && L.push(s), t < m && P.push(s));
          }
        if (
          (L.forEach((e) => {
            s.slidesEl.append(d(g[e], e));
          }),
            o)
        )
          for (let e = P.length - 1; e >= 0; e -= 1) {
            const t = P[e];
            s.slidesEl.prepend(d(g[t], t));
          }
        else
          (P.sort((e, t) => t - e),
            P.forEach((e) => {
              s.slidesEl.prepend(d(g[e], e));
            }));
        (f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[y] = M - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          C());
      }
      (r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) =>
            e.matches(`.${s.params.slideClass}, swiper-slide`),
          );
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
              (e = !0),
              t.forEach((e, t) => {
                (e.setAttribute("data-swiper-slide-index", t),
                  (s.virtual.cache[t] = e),
                  e.remove());
              }));
        }
        (e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          c(!1, !0));
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            c(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              ((a = t + e.length), (i = e.length));
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              (Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.getAttribute("data-swiper-slide-index");
                (r &&
                  a.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + i,
                  ),
                  (t[parseInt(s, 10) + i] = a));
              }),
                (s.virtual.cache = t));
            }
            (c(!0), s.slideTo(a, 0));
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                (s.params.virtual.cache &&
                  (delete s.virtual.cache[e[a]],
                    Object.keys(s.virtual.cache).forEach((t) => {
                      t > e &&
                        ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                          s.virtual.cache[t - 1].setAttribute(
                            "data-swiper-slide-index",
                            t - 1,
                          ),
                          delete s.virtual.cache[t]);
                    })),
                  s.virtual.slides.splice(e[a], 1),
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0)));
            else
              (s.params.virtual.cache &&
                (delete s.virtual.cache[e],
                  Object.keys(s.virtual.cache).forEach((t) => {
                    t > e &&
                      ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                        s.virtual.cache[t - 1].setAttribute(
                          "data-swiper-slide-index",
                          t - 1,
                        ),
                        delete s.virtual.cache[t]);
                  })),
                s.virtual.slides.splice(e, 1),
                e < t && (t -= 1),
                (t = Math.max(t, 0)));
            (c(!0), s.slideTo(t, 0));
          },
          removeAllSlides: function () {
            ((s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              c(!0),
              s.slideTo(0, 0));
          },
          update: c,
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          m = 38 === i,
          h = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && h) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && m) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || m || h)
          ) {
            let e = !1;
            if (
              E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === E(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.el,
              i = a.clientWidth,
              r = a.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = w(a);
            s && (d.left -= a.scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          (t.isHorizontal()
            ? ((d || c || p || u) &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || m || h) &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || h) && t.slideNext(),
              (d || m) && t.slidePrev()),
            n("keyPress", i));
        }
      }
      function c() {
        t.keyboard.enabled ||
          (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled &&
          (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      ((t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && c();
        }),
        i("destroy", () => {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: c, disable: p }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let d;
      (s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 }));
      let c,
        p = o();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            o() - p < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && o() - p < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), i("scroll", e.raw)),
              (p = new n.Date().getTime()),
              !1))
        );
      }
      function g(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
          return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (n = document.querySelector(t.params.mousewheel.eventsTarget));
        const p = n && n.contains(s.target);
        if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((a *= 40), (i *= 40))
                : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else
          m =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (a =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: o(), delta: Math.abs(m), direction: Math.sign(m) },
            a =
              c &&
              e.time < c.time + 500 &&
              e.delta <= c.delta &&
              e.direction === c.direction;
          if (!a) {
            c = void 0;
            let n = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              p = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
                n <= t.maxTranslate() && (n = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(n),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!o && t.isBeginning) || (!p && t.isEnd)) &&
                t.updateSlidesClasses(),
                t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
                t.params.freeMode.sticky)
            ) {
              (clearTimeout(d), (d = void 0), u.length >= 15 && u.shift());
              const s = u.length ? u[u.length - 1] : void 0,
                a = u[0];
              if (
                (u.push(e),
                  s && (e.delta > s.delta || e.direction !== s.direction))
              )
                u.splice(0);
              else if (
                u.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = m > 0 ? 0.8 : 0.2;
                ((c = e),
                  u.splice(0),
                  (d = l(() => {
                    !t.destroyed &&
                      t.params &&
                      t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0)));
              }
              d ||
                (d = l(() => {
                  if (t.destroyed || !t.params) return;
                  ((c = e),
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5));
                }, 500));
            }
            if (
              (a || i("scroll", s),
                t.params.autoplay &&
                t.params.autoplay.disableOnInteraction &&
                t.autoplay.stop(),
                r.releaseOnEdges &&
                (n === t.minTranslate() || n === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = {
            time: o(),
            delta: Math.abs(m),
            direction: Math.sign(m),
            raw: e,
          };
          u.length >= 2 && u.shift();
          const a = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
              a
                ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                f(s)
                : f(s),
              (function (e) {
                const s = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                  return !0;
                return !1;
              })(s))
          )
            return !0;
        }
        return (
          s.preventDefault ? s.preventDefault() : (s.returnValue = !1),
          !1
        );
      }
      function v(e) {
        let s = t.el;
        ("container" !== t.params.mousewheel.eventsTarget &&
          (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g));
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
          (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
          (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      (a("init", () => {
        (!t.params.mousewheel.enabled && t.params.cssMode && b(),
          t.params.mousewheel.enabled && w());
      }),
        a("destroy", () => {
          (t.params.cssMode && w(), t.mousewheel.enabled && b());
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e) || t.hostEl.querySelector(e)), s)
          ? s
          : (e &&
            ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                ? (s = t.el.querySelector(e))
                : s && 1 === s.length && (s = s[0])),
            e && !s ? e : s);
      }
      function n(e, s) {
        const a = t.params.navigation;
        (e = T(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = s),
              t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return (n(s, !1), void n(e, !1));
        (n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind));
      }
      function o(e) {
        (e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), i("navigationPrev")));
      }
      function d(e) {
        (e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), i("navigationNext")));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = re(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
          )),
            !e.nextEl && !e.prevEl)
        )
          return;
        let s = r(e.nextEl),
          a = r(e.prevEl);
        (Object.assign(t.navigation, { nextEl: s, prevEl: a }),
          (s = T(s)),
          (a = T(a)));
        const i = (s, a) => {
          (s && s.addEventListener("click", "next" === a ? d : o),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" ")));
        };
        (s.forEach((e) => i(e, "next")), a.forEach((e) => i(e, "prev")));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        ((e = T(e)), (s = T(s)));
        const a = (e, s) => {
          (e.removeEventListener("click", "next" === s ? d : o),
            e.classList.remove(
              ...t.params.navigation.disabledClass.split(" "),
            ));
        };
        (e.forEach((e) => a(e, "next")), s.forEach((e) => a(e, "prev")));
      }
      (s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        a("init", () => {
          !1 === t.params.navigation.enabled ? u() : (c(), l());
        }),
        a("toEdge fromEdge lock unlock", () => {
          l();
        }),
        a("destroy", () => {
          p();
        }),
        a("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          ((e = T(e)),
            (s = T(s)),
            t.enabled
              ? l()
              : [...e, ...s]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.add(t.params.navigation.lockClass),
                ));
        }),
        a("click", (e, s) => {
          let { nextEl: a, prevEl: r } = t.navigation;
          ((a = T(a)), (r = T(r)));
          const n = s.target;
          let l = r.includes(n) || a.includes(n);
          if (t.isElement && !l) {
            const e = s.path || (s.composedPath && s.composedPath());
            e && (l = e.find((e) => a.includes(e) || r.includes(e)));
          }
          if (t.params.navigation.hideOnClick && !l) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            (a.length
              ? (e = a[0].classList.contains(t.params.navigation.hiddenClass))
              : r.length &&
              (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              [...a, ...r]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                ));
          }
        }));
      const u = () => {
        (t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p());
      };
      Object.assign(t.navigation, {
        enable: () => {
          (t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            c(),
            l());
        },
        disable: u,
        update: l,
        init: c,
        destroy: p,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      (s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] }));
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${a}-${s}`),
            (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${a}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(ne(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const a = y(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === a) return;
          const e =
            ((i = t.realIndex),
              (r = a),
              (n = t.slides.length),
              (r %= n) == 1 + (i %= n)
                ? "next"
                : r === i - 1
                  ? "previous"
                  : void 0);
          "next" === e
            ? t.slideNext()
            : "previous" === e
              ? t.slidePrev()
              : t.slideToLoop(a);
        } else t.slideTo(a);
        var i, r, n;
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        let a,
          r,
          c = t.pagination.el;
        c = T(c);
        const p =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
          u = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (a =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
              ? ((a = t.snapIndex), (r = t.previousSnapIndex))
              : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
            "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let o, p, u;
          if (
            (s.dynamicBullets &&
              ((n = S(i[0], t.isHorizontal() ? "width" : "height", !0)),
                c.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] =
                    n * (s.dynamicMainBullets + 4) + "px";
                }),
                s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += a - (r || 0)),
                  l > s.dynamicMainBullets - 1
                    ? (l = s.dynamicMainBullets - 1)
                    : l < 0 && (l = 0)),
                (o = Math.max(a - l, 0)),
                (p = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (u = (p + o) / 2)),
              i.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${s.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
          )
            i.forEach((e) => {
              const i = y(e);
              (i === a
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                (i >= o &&
                  i <= p &&
                  e.classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" "),
                  ),
                  i === o && d(e, "prev"),
                  i === p && d(e, "next")));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                t.isElement &&
                i.forEach((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                }),
                s.dynamicBullets)
            ) {
              const e = i[o],
                t = i[p];
              for (let e = o; e <= p; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" "),
                  );
              (d(e, "prev"), d(t, "next"));
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (n * a - n) / 2 - u * n,
              l = e ? "right" : "left";
            i.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ne(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
                e.querySelectorAll(ne(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(u);
                })),
              "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
                ? "horizontal"
                : "vertical";
            const r = (a + 1) / u;
            let n = 1,
              l = 1;
            ("horizontal" === i ? (n = r) : (l = r),
              e.querySelectorAll(ne(s.progressbarFillClass)).forEach((e) => {
                ((e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`));
              }));
          }
          ("custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, a + 1, u)),
              0 === r && i("paginationRender", e))
            : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
            t.params.watchOverflow &&
            t.enabled &&
            e.classList[t.isLocked ? "add" : "remove"](s.lockClass));
        });
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
        let a = t.pagination.el;
        a = T(a);
        let r = "";
        if ("bullets" === e.type) {
          let a = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        ("fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
          (r = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          a.forEach((s) => {
            ("custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
              t.pagination.bullets.push(
                ...s.querySelectorAll(ne(e.bulletClass)),
              ));
          }),
          "custom" !== e.type && i("paginationRender", a[0]));
      }
      function m() {
        t.params.pagination = re(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" },
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        ("string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
          "string" != typeof e.el ||
          (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
          0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 && (s = s.find((e) => E(e, ".swiper")[0] === t.el))),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = T(s)),
            s.forEach((s) => {
              ("bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                "bullets" === e.type &&
                e.dynamicBullets &&
                (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                e.progressbarOpposite &&
                s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", c),
                t.enabled || s.classList.add(e.lockClass));
            })));
      }
      function h() {
        const e = t.params.pagination;
        if (o()) return;
        let s = t.pagination.el;
        (s &&
          ((s = T(s)),
            s.forEach((s) => {
              (s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                  s.removeEventListener("click", c)));
            })),
          t.pagination.bullets &&
          t.pagination.bullets.forEach((t) =>
            t.classList.remove(...e.bulletActiveClass.split(" ")),
          ));
      }
      (a("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        ((s = T(s)),
          s.forEach((s) => {
            (s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ));
          }));
      }),
        a("init", () => {
          !1 === t.params.pagination.enabled ? f() : (m(), u(), p());
        }),
        a("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        a("snapIndexChange", () => {
          p();
        }),
        a("snapGridLengthChange", () => {
          (u(), p());
        }),
        a("destroy", () => {
          h();
        }),
        a("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = T(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass,
                ),
              ));
        }),
        a("lock unlock", () => {
          p();
        }),
        a("click", (e, s) => {
          const a = s.target,
            r = T(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !a.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            (i(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass),
              ));
          }
        }));
      const f = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        (e &&
          ((e = T(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass),
            )),
          h());
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          (e &&
            ((e = T(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass),
              )),
            m(),
            u(),
            p());
        },
        disable: f,
        render: u,
        update: p,
        init: m,
        destroy: h,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const o = a();
      let d,
        c,
        p,
        u,
        m = !1,
        h = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: a, el: i } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = c,
          o = (p - c) * n;
        (s
          ? ((o = -o),
            o > 0 ? ((l = c - o), (o = 0)) : -o + c > p && (l = p + o))
          : o < 0
            ? ((l = c + o), (o = 0))
            : o + c > p && (l = p - o),
          t.isHorizontal()
            ? ((a.style.transform = `translate3d(${o}px, 0, 0)`),
              (a.style.width = `${l}px`))
            : ((a.style.transform = `translate3d(0px, ${o}px, 0)`),
              (a.style.height = `${l}px`)),
          r.hide &&
          (clearTimeout(h),
            (i.style.opacity = 1),
            (h = setTimeout(() => {
              ((i.style.opacity = 0), (i.style.transitionDuration = "400ms"));
            }, 1e3))));
      }
      function b() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: a } = e;
        ((s.style.width = ""),
          (s.style.height = ""),
          (p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
          (u =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (c =
            "auto" === t.params.scrollbar.dragSize
              ? p * u
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s.style.width = `${c}px`)
            : (s.style.height = `${c}px`),
          (a.style.display = u >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a.style.opacity = 0),
          t.params.watchOverflow &&
          t.enabled &&
          e.el.classList[t.isLocked ? "add" : "remove"](
            t.params.scrollbar.lockClass,
          ));
      }
      function y(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function E(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { el: i } = s;
        let r;
        ((r =
          (y(e) -
            w(i)[t.isHorizontal() ? "left" : "top"] -
            (null !== d ? d : c / 2)) /
          (p - c)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r));
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        (t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses());
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n, dragEl: l } = a;
        ((m = !0),
          (d =
            e.target === l
              ? y(e) -
              e.target.getBoundingClientRect()[
              t.isHorizontal() ? "left" : "top"
              ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (i.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          E(e),
          clearTimeout(f),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e));
      }
      function S(e) {
        const { scrollbar: s, wrapperEl: a } = t,
          { el: i, dragEl: n } = s;
        m &&
          (e.preventDefault && e.cancelable
            ? e.preventDefault()
            : (e.returnValue = !1),
            E(e),
            (a.style.transitionDuration = "0ms"),
            (i.style.transitionDuration = "0ms"),
            (n.style.transitionDuration = "0ms"),
            r("scrollbarDragMove", e));
      }
      function M(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n } = a;
        m &&
          ((m = !1),
            t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
              (i.style.transitionDuration = "")),
            s.hide &&
            (clearTimeout(f),
              (f = l(() => {
                ((n.style.opacity = 0), (n.style.transitionDuration = "400ms"));
              }, 1e3))),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
      }
      function C(e) {
        const { scrollbar: s, params: a } = t,
          i = s.el;
        if (!i) return;
        const r = i,
          n = !!a.passiveListeners && { passive: !1, capture: !1 },
          l = !!a.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        (r[d]("pointerdown", x, n),
          o[d]("pointermove", S, n),
          o[d]("pointerup", M, l));
      }
      function P() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = re(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" },
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i, r;
        if (
          ("string" == typeof a.el &&
            t.isElement &&
            (i = t.el.querySelector(a.el)),
            i || "string" != typeof a.el)
        )
          i || (i = a.el);
        else if (((i = o.querySelectorAll(a.el)), !i.length)) return;
        (t.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.querySelectorAll(a.el).length &&
          (i = s.querySelector(a.el)),
          i.length > 0 && (i = i[0]),
          i.classList.add(
            t.isHorizontal() ? a.horizontalClass : a.verticalClass,
          ),
          i &&
          ((r = i.querySelector(ne(t.params.scrollbar.dragClass))),
            r || ((r = v("div", t.params.scrollbar.dragClass)), i.append(r))),
          Object.assign(e, { el: i, dragEl: r }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
          i &&
          i.classList[t.enabled ? "remove" : "add"](
            ...n(t.params.scrollbar.lockClass),
          ));
      }
      function L() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        (s &&
          s.classList.remove(
            ...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          ),
          t.params.scrollbar.el && t.scrollbar.el && C("off"));
      }
      (s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        i("changeDirection", () => {
          if (!t.scrollbar || !t.scrollbar.el) return;
          const e = t.params.scrollbar;
          let { el: s } = t.scrollbar;
          ((s = T(s)),
            s.forEach((s) => {
              (s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ));
            }));
        }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g());
        }),
        i("update resize observerUpdate lock unlock changeDirection", () => {
          b();
        }),
        i("setTranslate", () => {
          g();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        i("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              ...n(t.params.scrollbar.lockClass),
            );
        }),
        i("destroy", () => {
          L();
        }));
      const I = () => {
        (t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
          t.scrollbar.el &&
          t.scrollbar.el.classList.add(
            ...n(t.params.scrollbar.scrollbarDisabledClass),
          ),
          L());
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          (t.el.classList.remove(
            ...n(t.params.scrollbar.scrollbarDisabledClass),
          ),
            t.scrollbar.el &&
            t.scrollbar.el.classList.remove(
              ...n(t.params.scrollbar.scrollbarDisabledClass),
            ),
            P(),
            b(),
            g());
        },
        disable: I,
        updateSize: b,
        setTranslate: g,
        init: P,
        destroy: L,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        r = (e, s) => {
          const { rtl: a } = t,
            i = a ? -1 : 1,
            r = e.getAttribute("data-swiper-parallax") || "0";
          let n = e.getAttribute("data-swiper-parallax-x"),
            l = e.getAttribute("data-swiper-parallax-y");
          const o = e.getAttribute("data-swiper-parallax-scale"),
            d = e.getAttribute("data-swiper-parallax-opacity"),
            c = e.getAttribute("data-swiper-parallax-rotate");
          if (
            (n || l
              ? ((n = n || "0"), (l = l || "0"))
              : t.isHorizontal()
                ? ((n = r), (l = "0"))
                : ((l = r), (n = "0")),
              (n =
                n.indexOf("%") >= 0
                  ? parseInt(n, 10) * s * i + "%"
                  : n * s * i + "px"),
              (l =
                l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
              null != d)
          ) {
            const t = d - (d - 1) * (1 - Math.abs(s));
            e.style.opacity = t;
          }
          let p = `translate3d(${n}, ${l}, 0px)`;
          if (null != o) {
            p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
          }
          if (c && null != c) {
            p += ` rotate(${c * s * -1}deg)`;
          }
          e.style.transform = p;
        },
        n = () => {
          const {
            el: e,
            slides: s,
            progress: a,
            snapGrid: n,
            isElement: l,
          } = t,
            o = f(e, i);
          (t.isElement && o.push(...f(t.hostEl, i)),
            o.forEach((e) => {
              r(e, a);
            }),
            s.forEach((e, s) => {
              let l = e.progress;
              (t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (l += Math.ceil(s / 2) - a * (n.length - 1)),
                (l = Math.min(Math.max(l, -1), 1)),
                e
                  .querySelectorAll(`${i}, [data-swiper-parallax-rotate]`)
                  .forEach((e) => {
                    r(e, l);
                  }));
            }));
        };
      (a("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s, hostEl: a } = t,
                r = [...s.querySelectorAll(i)];
              (t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t) => {
                  let s =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10,
                    ) || e;
                  (0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`));
                }));
            })(s);
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      (s({
        zoom: {
          enabled: !1,
          limitToOriginalSize: !1,
          maxRatio: 3,
          minRatio: 1,
          panOnMouseMove: !1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 }));
      let l = 1,
        o = !1,
        c = !1,
        p = { x: 0, y: 0 };
      const u = -3;
      let m, h;
      const g = [],
        v = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        b = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        y = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let x,
        S = 1;
      function T() {
        if (g.length < 2) return 1;
        const e = g[0].pageX,
          t = g[0].pageY,
          s = g[1].pageX,
          a = g[1].pageY;
        return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
      }
      function M() {
        const e = t.params.zoom,
          s = v.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && v.imageEl && v.imageEl.naturalWidth) {
          const e = v.imageEl.naturalWidth / v.imageEl.offsetWidth;
          return Math.min(e, s);
        }
        return s;
      }
      function C(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return (
          !!e.target.matches(s) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function P(e) {
        const s = `.${t.params.zoom.containerClass}`;
        return (
          !!e.target.matches(s) ||
          [...t.hostEl.querySelectorAll(s)].filter((t) => t.contains(e.target))
            .length > 0
        );
      }
      function L(e) {
        if (("mouse" === e.pointerType && g.splice(0, g.length), !C(e))) return;
        const s = t.params.zoom;
        if (((m = !1), (h = !1), g.push(e), !(g.length < 2))) {
          if (((m = !0), (v.scaleStart = T()), !v.slideEl)) {
            ((v.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`,
            )),
              v.slideEl || (v.slideEl = t.slides[t.activeIndex]));
            let a = v.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (a &&
                (a = a.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target",
                )[0]),
                (v.imageEl = a),
                (v.imageWrapEl = a
                  ? E(v.imageEl, `.${s.containerClass}`)[0]
                  : void 0),
                !v.imageWrapEl)
            )
              return void (v.imageEl = void 0);
            v.maxRatio = M();
          }
          if (v.imageEl) {
            const [e, t] = (function () {
              if (g.length < 2) return { x: null, y: null };
              const e = v.imageEl.getBoundingClientRect();
              return [
                (g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - e.x - n.scrollX) /
                l,
                (g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - e.y - n.scrollY) /
                l,
              ];
            })();
            ((v.originX = e),
              (v.originY = t),
              (v.imageEl.style.transitionDuration = "0ms"));
          }
          o = !0;
        }
      }
      function I(e) {
        if (!C(e)) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = g.findIndex((t) => t.pointerId === e.pointerId);
        (i >= 0 && (g[i] = e),
          g.length < 2 ||
          ((h = !0),
            (v.scaleMove = T()),
            v.imageEl &&
            ((a.scale = (v.scaleMove / v.scaleStart) * l),
              a.scale > v.maxRatio &&
              (a.scale = v.maxRatio - 1 + (a.scale - v.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio &&
              (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              (v.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))));
      }
      function z(e) {
        if (!C(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = g.findIndex((t) => t.pointerId === e.pointerId);
        (i >= 0 && g.splice(i, 1),
          m &&
          h &&
          ((m = !1),
            (h = !1),
            v.imageEl &&
            ((a.scale = Math.max(Math.min(a.scale, v.maxRatio), s.minRatio)),
              (v.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (v.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
              (l = a.scale),
              (o = !1),
              a.scale > 1 && v.slideEl
                ? v.slideEl.classList.add(`${s.zoomedSlideClass}`)
                : a.scale <= 1 &&
                v.slideEl &&
                v.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === a.scale &&
              ((v.originX = 0), (v.originY = 0), (v.slideEl = void 0)))));
      }
      function A() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
      }
      function $(e) {
        const s = "mouse" === e.pointerType && t.params.zoom.panOnMouseMove;
        if (!C(e) || !P(e)) return;
        const a = t.zoom;
        if (!v.imageEl) return;
        if (!b.isTouched || !v.slideEl) return void (s && O(e));
        if (s) return void O(e);
        b.isMoved ||
          ((b.width = v.imageEl.offsetWidth || v.imageEl.clientWidth),
            (b.height = v.imageEl.offsetHeight || v.imageEl.clientHeight),
            (b.startX = d(v.imageWrapEl, "x") || 0),
            (b.startY = d(v.imageWrapEl, "y") || 0),
            (v.slideWidth = v.slideEl.offsetWidth),
            (v.slideHeight = v.slideEl.offsetHeight),
            (v.imageWrapEl.style.transitionDuration = "0ms"));
        const i = b.width * a.scale,
          r = b.height * a.scale;
        ((b.minX = Math.min(v.slideWidth / 2 - i / 2, 0)),
          (b.maxX = -b.minX),
          (b.minY = Math.min(v.slideHeight / 2 - r / 2, 0)),
          (b.maxY = -b.minY),
          (b.touchesCurrent.x = g.length > 0 ? g[0].pageX : e.pageX),
          (b.touchesCurrent.y = g.length > 0 ? g[0].pageY : e.pageY));
        if (
          (Math.max(
            Math.abs(b.touchesCurrent.x - b.touchesStart.x),
            Math.abs(b.touchesCurrent.y - b.touchesStart.y),
          ) > 5 && (t.allowClick = !1),
            !b.isMoved && !o)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(b.minX) === Math.floor(b.startX) &&
              b.touchesCurrent.x < b.touchesStart.x) ||
              (Math.floor(b.maxX) === Math.floor(b.startX) &&
                b.touchesCurrent.x > b.touchesStart.x))
          )
            return ((b.isTouched = !1), void A());
          if (
            !t.isHorizontal() &&
            ((Math.floor(b.minY) === Math.floor(b.startY) &&
              b.touchesCurrent.y < b.touchesStart.y) ||
              (Math.floor(b.maxY) === Math.floor(b.startY) &&
                b.touchesCurrent.y > b.touchesStart.y))
          )
            return ((b.isTouched = !1), void A());
        }
        (e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          clearTimeout(x),
          (t.touchEventsData.preventTouchMoveFromPointerMove = !0),
          (x = setTimeout(() => {
            t.destroyed || A();
          })),
          (b.isMoved = !0));
        const n = (a.scale - l) / (v.maxRatio - t.params.zoom.minRatio),
          { originX: c, originY: p } = v;
        ((b.currentX =
          b.touchesCurrent.x -
          b.touchesStart.x +
          b.startX +
          n * (b.width - 2 * c)),
          (b.currentY =
            b.touchesCurrent.y -
            b.touchesStart.y +
            b.startY +
            n * (b.height - 2 * p)),
          b.currentX < b.minX &&
          (b.currentX = b.minX + 1 - (b.minX - b.currentX + 1) ** 0.8),
          b.currentX > b.maxX &&
          (b.currentX = b.maxX - 1 + (b.currentX - b.maxX + 1) ** 0.8),
          b.currentY < b.minY &&
          (b.currentY = b.minY + 1 - (b.minY - b.currentY + 1) ** 0.8),
          b.currentY > b.maxY &&
          (b.currentY = b.maxY - 1 + (b.currentY - b.maxY + 1) ** 0.8),
          y.prevPositionX || (y.prevPositionX = b.touchesCurrent.x),
          y.prevPositionY || (y.prevPositionY = b.touchesCurrent.y),
          y.prevTime || (y.prevTime = Date.now()),
          (y.x =
            (b.touchesCurrent.x - y.prevPositionX) /
            (Date.now() - y.prevTime) /
            2),
          (y.y =
            (b.touchesCurrent.y - y.prevPositionY) /
            (Date.now() - y.prevTime) /
            2),
          Math.abs(b.touchesCurrent.x - y.prevPositionX) < 2 && (y.x = 0),
          Math.abs(b.touchesCurrent.y - y.prevPositionY) < 2 && (y.y = 0),
          (y.prevPositionX = b.touchesCurrent.x),
          (y.prevPositionY = b.touchesCurrent.y),
          (y.prevTime = Date.now()),
          (v.imageWrapEl.style.transform = `translate3d(${b.currentX}px, ${b.currentY}px,0)`));
      }
      function k() {
        const e = t.zoom;
        v.slideEl &&
          t.activeIndex !== t.slides.indexOf(v.slideEl) &&
          (v.imageEl &&
            (v.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            v.imageWrapEl &&
            (v.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            v.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            (e.scale = 1),
            (l = 1),
            (v.slideEl = void 0),
            (v.imageEl = void 0),
            (v.imageWrapEl = void 0),
            (v.originX = 0),
            (v.originY = 0));
      }
      function O(e) {
        if (l <= 1 || !v.imageWrapEl) return;
        if (!C(e) || !P(e)) return;
        const t = n.getComputedStyle(v.imageWrapEl).transform,
          s = new n.DOMMatrix(t);
        if (!c)
          return (
            (c = !0),
            (p.x = e.clientX),
            (p.y = e.clientY),
            (b.startX = s.e),
            (b.startY = s.f),
            (b.width = v.imageEl.offsetWidth || v.imageEl.clientWidth),
            (b.height = v.imageEl.offsetHeight || v.imageEl.clientHeight),
            (v.slideWidth = v.slideEl.offsetWidth),
            void (v.slideHeight = v.slideEl.offsetHeight)
          );
        const a = (e.clientX - p.x) * u,
          i = (e.clientY - p.y) * u,
          r = b.width * l,
          o = b.height * l,
          d = v.slideWidth,
          m = v.slideHeight,
          h = Math.min(d / 2 - r / 2, 0),
          f = -h,
          g = Math.min(m / 2 - o / 2, 0),
          w = -g,
          y = Math.max(Math.min(b.startX + a, f), h),
          E = Math.max(Math.min(b.startY + i, w), g);
        ((v.imageWrapEl.style.transitionDuration = "0ms"),
          (v.imageWrapEl.style.transform = `translate3d(${y}px, ${E}px, 0)`),
          (p.x = e.clientX),
          (p.y = e.clientY),
          (b.startX = y),
          (b.startY = E),
          (b.currentX = y),
          (b.currentY = E));
      }
      function D(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (!v.slideEl) {
          (e &&
            e.target &&
            (v.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`,
            )),
            v.slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (v.slideEl = f(
                t.slidesEl,
                `.${t.params.slideActiveClass}`,
              )[0])
              : (v.slideEl = t.slides[t.activeIndex])));
          let s = v.slideEl.querySelector(`.${a.containerClass}`);
          (s &&
            (s = s.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target",
            )[0]),
            (v.imageEl = s),
            (v.imageWrapEl = s
              ? E(v.imageEl, `.${a.containerClass}`)[0]
              : void 0));
        }
        if (!v.imageEl || !v.imageWrapEl) return;
        let i, r, o, d, c, p, u, m, h, g, y, x, S, T, C, P, L, I;
        (t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
          v.slideEl.classList.add(`${a.zoomedSlideClass}`),
          void 0 === b.touchesStart.x && e
            ? ((i = e.pageX), (r = e.pageY))
            : ((i = b.touchesStart.x), (r = b.touchesStart.y)));
        const z = l,
          A = "number" == typeof e ? e : null;
        1 === l &&
          A &&
          ((i = void 0),
            (r = void 0),
            (b.touchesStart.x = void 0),
            (b.touchesStart.y = void 0));
        const $ = M();
        ((s.scale = A || $),
          (l = A || $),
          !e || (1 === l && A)
            ? ((u = 0), (m = 0))
            : ((L = v.slideEl.offsetWidth),
              (I = v.slideEl.offsetHeight),
              (o = w(v.slideEl).left + n.scrollX),
              (d = w(v.slideEl).top + n.scrollY),
              (c = o + L / 2 - i),
              (p = d + I / 2 - r),
              (h = v.imageEl.offsetWidth || v.imageEl.clientWidth),
              (g = v.imageEl.offsetHeight || v.imageEl.clientHeight),
              (y = h * s.scale),
              (x = g * s.scale),
              (S = Math.min(L / 2 - y / 2, 0)),
              (T = Math.min(I / 2 - x / 2, 0)),
              (C = -S),
              (P = -T),
              z > 0 &&
                A &&
                "number" == typeof b.currentX &&
                "number" == typeof b.currentY
                ? ((u = (b.currentX * s.scale) / z),
                  (m = (b.currentY * s.scale) / z))
                : ((u = c * s.scale), (m = p * s.scale)),
              u < S && (u = S),
              u > C && (u = C),
              m < T && (m = T),
              m > P && (m = P)),
          A && 1 === s.scale && ((v.originX = 0), (v.originY = 0)),
          (b.currentX = u),
          (b.currentY = m),
          (v.imageWrapEl.style.transitionDuration = "300ms"),
          (v.imageWrapEl.style.transform = `translate3d(${u}px, ${m}px,0)`),
          (v.imageEl.style.transitionDuration = "300ms"),
          (v.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`));
      }
      function G() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!v.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (v.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (v.slideEl = t.slides[t.activeIndex]);
          let e = v.slideEl.querySelector(`.${s.containerClass}`);
          (e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target",
            )[0]),
            (v.imageEl = e),
            (v.imageWrapEl = e
              ? E(v.imageEl, `.${s.containerClass}`)[0]
              : void 0));
        }
        v.imageEl &&
          v.imageWrapEl &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (l = 1),
            (b.currentX = void 0),
            (b.currentY = void 0),
            (b.touchesStart.x = void 0),
            (b.touchesStart.y = void 0),
            (v.imageWrapEl.style.transitionDuration = "300ms"),
            (v.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            (v.imageEl.style.transitionDuration = "300ms"),
            (v.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            v.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            (v.slideEl = void 0),
            (v.originX = 0),
            (v.originY = 0),
            t.params.zoom.panOnMouseMove &&
            ((p = { x: 0, y: 0 }),
              c && ((c = !1), (b.startX = 0), (b.startY = 0))));
      }
      function X(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? G() : D(e);
      }
      function H() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function Y() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: a } = H();
        (t.wrapperEl.addEventListener("pointerdown", L, s),
          t.wrapperEl.addEventListener("pointermove", I, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, z, s);
          }),
          t.wrapperEl.addEventListener("pointermove", $, a));
      }
      function B() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: a } = H();
        (t.wrapperEl.removeEventListener("pointerdown", L, s),
          t.wrapperEl.removeEventListener("pointermove", I, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, z, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", $, a));
      }
      (Object.defineProperty(t.zoom, "scale", {
        get: () => S,
        set(e) {
          if (S !== e) {
            const t = v.imageEl,
              s = v.slideEl;
            i("zoomChange", e, t, s);
          }
          S = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && Y();
        }),
        a("destroy", () => {
          B();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!v.imageEl) return;
              if (b.isTouched) return;
              (s.android && e.cancelable && e.preventDefault(),
                (b.isTouched = !0));
              const a = g.length > 0 ? g[0] : e;
              ((b.touchesStart.x = a.pageX), (b.touchesStart.y = a.pageY));
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (((g.length = 0), !v.imageEl)) return;
              if (!b.isTouched || !b.isMoved)
                return ((b.isTouched = !1), void (b.isMoved = !1));
              ((b.isTouched = !1), (b.isMoved = !1));
              let s = 300,
                a = 300;
              const i = y.x * s,
                r = b.currentX + i,
                n = y.y * a,
                l = b.currentY + n;
              (0 !== y.x && (s = Math.abs((r - b.currentX) / y.x)),
                0 !== y.y && (a = Math.abs((l - b.currentY) / y.y)));
              const o = Math.max(s, a);
              ((b.currentX = r), (b.currentY = l));
              const d = b.width * e.scale,
                c = b.height * e.scale;
              ((b.minX = Math.min(v.slideWidth / 2 - d / 2, 0)),
                (b.maxX = -b.minX),
                (b.minY = Math.min(v.slideHeight / 2 - c / 2, 0)),
                (b.maxY = -b.minY),
                (b.currentX = Math.max(Math.min(b.currentX, b.maxX), b.minX)),
                (b.currentY = Math.max(Math.min(b.currentY, b.maxY), b.minY)),
                (v.imageWrapEl.style.transitionDuration = `${o}ms`),
                (v.imageWrapEl.style.transform = `translate3d(${b.currentX}px, ${b.currentY}px,0)`));
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            X(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && k();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && k();
        }),
        Object.assign(t.zoom, {
          enable: Y,
          disable: B,
          in: D,
          out: G,
          toggle: X,
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1;)
              ((s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s));
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                (this.x[i] - this.x[a]) +
                this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      (s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof t.params.controller.control ||
              t.params.controller.control instanceof HTMLElement)
          ) {
            ("string" == typeof t.params.controller.control
              ? [...document.querySelectorAll(t.params.controller.control)]
              : [t.params.controller.control]
            ).forEach((e) => {
              if (
                (t.controller.control || (t.controller.control = []),
                  e && e.swiper)
              )
                t.controller.control.push(e.swiper);
              else if (e) {
                const s = `${t.params.eventsPrefix}init`,
                  a = (i) => {
                    (t.controller.control.push(i.detail[0]),
                      t.update(),
                      e.removeEventListener(s, a));
                  };
                e.addEventListener(s, a);
              }
            });
          } else t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              ("slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop
                    ? new i(t.slidesGrid, e.slidesGrid)
                    : new i(t.snapGrid, e.snapGrid);
                })(e),
                  (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                ((r =
                  (e.maxTranslate() - e.minTranslate()) /
                  (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses());
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                  0 !== e &&
                  (s.transitionStart(),
                    s.params.autoHeight &&
                    l(() => {
                      s.updateAutoHeight();
                    }),
                    x(s.wrapperEl, () => {
                      i && s.transitionEnd();
                    })));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      (s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          containerRole: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
          scrollOnFocus: !0,
        },
      }),
        (t.a11y = { clicked: !1 }));
      let r,
        n,
        l = null,
        o = new Date().getTime();
      function d(e) {
        const t = l;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      function c(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function p(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function u(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function m(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function h(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function f(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function g(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function w(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = e.target;
        if (
          !t.pagination ||
          !t.pagination.el ||
          (a !== t.pagination.el && !t.pagination.el.contains(e.target)) ||
          e.target.matches(ne(t.params.pagination.bulletClass))
        ) {
          if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
            const e = T(t.navigation.prevEl);
            (T(t.navigation.nextEl).includes(a) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)),
              e.includes(a) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning
                  ? d(s.firstSlideMessage)
                  : d(s.prevSlideMessage)));
          }
          t.pagination &&
            a.matches(ne(t.params.pagination.bulletClass)) &&
            a.click();
        }
      }
      function b() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function E() {
        return b() && t.params.pagination.clickable;
      }
      const x = (e, t, s) => {
        (c(e),
          "BUTTON" !== e.tagName &&
          (u(e, "button"), e.addEventListener("keydown", w)),
          h(e, s),
          (function (e, t) {
            (e = T(e)).forEach((e) => {
              e.setAttribute("aria-controls", t);
            });
          })(e, t));
      },
        S = (e) => {
          (n && n !== e.target && !n.contains(e.target) && (r = !0),
            (t.a11y.clicked = !0));
        },
        M = () => {
          ((r = !1),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            }));
        },
        C = (e) => {
          o = new Date().getTime();
        },
        P = (e) => {
          if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
          if (new Date().getTime() - o < 100) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          n = s;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              requestAnimationFrame(() => {
                r ||
                  (t.params.loop
                    ? t.slideToLoop(
                      parseInt(s.getAttribute("data-swiper-slide-index")),
                      0,
                    )
                    : t.slideTo(t.slides.indexOf(s), 0),
                    (r = !1));
              }));
        },
        L = () => {
          const e = t.params.a11y;
          (e.itemRoleDescriptionMessage &&
            m(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && u(t.slides, e.slideRole));
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((a, i) => {
              const r = t.params.loop
                ? parseInt(a.getAttribute("data-swiper-slide-index"), 10)
                : i;
              h(
                a,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s),
              );
            });
        },
        I = () => {
          const e = t.params.a11y;
          t.el.append(l);
          const s = t.el;
          (e.containerRoleDescriptionMessage &&
            m(s, e.containerRoleDescriptionMessage),
            e.containerMessage && h(s, e.containerMessage),
            e.containerRole && u(s, e.containerRole));
          const i = t.wrapperEl,
            r =
              e.id ||
              i.getAttribute("id") ||
              `swiper-wrapper-${((n = 16), void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
          var n;
          const o =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          ((d = r),
            T(i).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = T(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(i, o),
            L());
          let { nextEl: c, prevEl: p } = t.navigation ? t.navigation : {};
          if (
            ((c = T(c)),
              (p = T(p)),
              c && c.forEach((t) => x(t, r, e.nextSlideMessage)),
              p && p.forEach((t) => x(t, r, e.prevSlideMessage)),
              E())
          ) {
            T(t.pagination.el).forEach((e) => {
              e.addEventListener("keydown", w);
            });
          }
          (a().addEventListener("visibilitychange", C),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("pointerdown", S, !0),
            t.el.addEventListener("pointerup", M, !0));
        };
      (i("beforeInit", () => {
        ((l = v("span", t.params.a11y.notificationClass)),
          l.setAttribute("aria-live", "assertive"),
          l.setAttribute("aria-atomic", "true"));
      }),
        i("afterInit", () => {
          t.params.a11y.enabled && I();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && L();
          },
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              (s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))),
                e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e))));
            })();
        }),
        i("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              b() &&
                t.pagination.bullets.forEach((s) => {
                  (t.params.pagination.clickable &&
                    (c(s),
                      t.params.pagination.renderBullet ||
                      (u(s, "button"),
                        h(
                          s,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            y(s) + 1,
                          ),
                        ))),
                    s.matches(ne(t.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current"));
                });
            })();
        }),
        i("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              l && l.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              ((e = T(e)),
                (s = T(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", w)),
                s && s.forEach((e) => e.removeEventListener("keydown", w)),
                E() &&
                T(t.pagination.el).forEach((e) => {
                  e.removeEventListener("keydown", w);
                }));
              (a().removeEventListener("visibilitychange", C),
                t.el &&
                "string" != typeof t.el &&
                (t.el.removeEventListener("focus", P, !0),
                  t.el.removeEventListener("pointerdown", S, !0),
                  t.el.removeEventListener("pointerup", M, !0)));
            })();
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
        e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`)
              : t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            ("/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e ? `${e}/` : ""}${d}`));
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides[i];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          ((n = o(t.params.url)), c(t.params.speed, n.value, !1));
        };
      (a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              ((i = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                    e.addEventListener("popstate", p))
                  : t.params.history.replaceState ||
                  e.addEventListener("popstate", p));
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.find((e) => e.getAttribute("data-hash") === s);
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(
              f(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`,
              )[0],
            );
          },
        },
      });
      const c = () => {
        i("hashChange");
        const e = o.location.hash.replace("#", ""),
          s =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`,
              )
              : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          const s = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === s || Number.isNaN(s)) return;
          t.slideTo(s);
        }
      },
        p = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`,
              )
              : t.slides[t.activeIndex],
            s = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
            d.history &&
            d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet"))
            : ((o.location.hash = s || ""), i("hashSet"));
        };
      (n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                a = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              d.addEventListener("hashchange", c);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d.removeEventListener("hashchange", c);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && p();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && p();
        }));
    },
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
      ((i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }));
      let d,
        c,
        p,
        u,
        m,
        h,
        f,
        g,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = o && o.autoplay ? o.autoplay.delay : 3e3,
        b = new Date().getTime();
      function y(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", y),
            g || (e.detail && e.detail.bySwiperTouchMove) || C());
      }
      const E = () => {
        if (i.destroyed || !i.autoplay.running) return;
        i.autoplay.paused ? (c = !0) : c && ((w = d), (c = !1));
        const e = i.autoplay.paused ? d : b + w - new Date().getTime();
        ((i.autoplay.timeLeft = e),
          l("autoplayTimeLeft", e, e / v),
          (s = requestAnimationFrame(() => {
            E();
          })));
      },
        x = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          (cancelAnimationFrame(s), E());
          let a = void 0 === e ? i.params.autoplay.delay : e;
          ((v = i.params.autoplay.delay), (w = i.params.autoplay.delay));
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.find((e) =>
                    e.classList.contains("swiper-slide-active"),
                  )
                  : i.slides[i.activeIndex]),
                !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          (!Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((a = r), (v = r), (w = r)),
            (d = a));
          const n = i.params.speed,
            o = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                    ? (i.slideNext(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, n, !0, !0), l("autoplay")),
                  i.params.cssMode &&
                  ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, a)))
              : requestAnimationFrame(() => {
                o();
              }),
            a
          );
        },
        S = () => {
          ((b = new Date().getTime()),
            (i.autoplay.running = !0),
            x(),
            l("autoplayStart"));
        },
        T = () => {
          ((i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop"));
        },
        M = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          (clearTimeout(t), e || (f = !0));
          const a = () => {
            (l("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", y)
                : C());
          };
          if (((i.autoplay.paused = !0), s))
            return (h && (d = i.params.autoplay.delay), (h = !1), void a());
          const r = d || i.params.autoplay.delay;
          ((d = r - (new Date().getTime() - b)),
            (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a()));
        },
        C = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()),
              f ? ((f = !1), x(d)) : x(),
              (i.autoplay.paused = !1),
              l("autoplayResume"));
        },
        P = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = a();
          ("hidden" === e.visibilityState && ((f = !0), M(!0)),
            "visible" === e.visibilityState && C());
        },
        L = (e) => {
          "mouse" === e.pointerType &&
            ((f = !0), (g = !0), i.animating || i.autoplay.paused || M(!0));
        },
        I = (e) => {
          "mouse" === e.pointerType && ((g = !1), i.autoplay.paused && C());
        };
      (n("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", L),
              i.el.addEventListener("pointerleave", I)),
            a().addEventListener("visibilitychange", P),
            S());
      }),
        n("destroy", () => {
          (i.el &&
            "string" != typeof i.el &&
            (i.el.removeEventListener("pointerenter", L),
              i.el.removeEventListener("pointerleave", I)),
            a().removeEventListener("visibilitychange", P),
            i.autoplay.running && T());
        }),
        n("_freeModeStaticRelease", () => {
          (u || f) && C();
        }),
        n("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
        }),
        n("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? T()
              : ((p = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  ((f = !0), (u = !0), M(!0));
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && p) {
            if (
              (clearTimeout(m),
                clearTimeout(t),
                i.params.autoplay.disableOnInteraction)
            )
              return ((u = !1), void (p = !1));
            (u && i.params.cssMode && C(), (u = !1), (p = !1));
          }
        }),
        n("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: S, stop: T, pause: M, resume: C }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let i;
        ((i = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(i) : t.slideTo(i));
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s) {
          if (e.swiper.destroyed) return ((r = !1), !1);
          ((t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update());
        } else if (c(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          (Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (n = !0));
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass,
          ),
          t.thumbs.swiper.on("tap", l),
          !0
        );
      }
      function d(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            (i = Math.floor(i)),
            s.slides.forEach((e) => e.classList.remove(r)),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            f(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`,
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < i; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const i = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.find(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`,
            );
            ((r = s.slides.indexOf(e)),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev"));
          } else
            ((r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev"));
          (l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
            s.visibleSlidesIndexes.indexOf(r) < 0 &&
            (s.params.centeredSlides
              ? (r =
                r > i
                  ? r - Math.floor(a / 2) + 1
                  : r + Math.floor(a / 2) - 1)
              : r > i && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0)));
        }
      }
      ((t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = a(),
                i = () => {
                  const a =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (a && a.swiper) ((e.swiper = a.swiper), o(), d(!0));
                  else if (a) {
                    const s = `${t.params.eventsPrefix}init`,
                      i = (r) => {
                        ((e.swiper = r.detail[0]),
                          a.removeEventListener(s, i),
                          o(),
                          d(!0),
                          e.swiper.update(),
                          t.update());
                      };
                    a.addEventListener(s, i);
                  }
                  return a;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else (o(), d(!0));
        }),
        i("slideChange update resize observerUpdate", () => {
          d();
        }),
        i("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: d }));
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      (s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              (t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                }));
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              (0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: o(),
                }));
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const {
                params: r,
                wrapperEl: n,
                rtlTranslate: l,
                snapGrid: d,
                touchEventsData: c,
              } = t,
                p = o() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    ((t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                      (t.velocity = 0),
                      (i > 150 || o() - e.time > 300) && (t.velocity = 0));
                  } else t.velocity = 0;
                  ((t.velocity *= r.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0));
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  l && (p = -p);
                  let u,
                    m = !1;
                  const h =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate())
                    (r.freeMode.momentumBounce
                      ? (p + t.maxTranslate() < -h &&
                        (p = t.maxTranslate() - h),
                        (u = t.maxTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0));
                  else if (p > t.minTranslate())
                    (r.freeMode.momentumBounce
                      ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                        (u = t.minTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0));
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break;
                      }
                    ((p =
                      Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) ||
                        "next" === t.swipeDirection
                        ? d[e]
                        : d[e - 1]),
                      (p = -p));
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                      0 !== t.velocity)
                  ) {
                    if (
                      ((e = l
                        ? Math.abs((-p - t.translate) / t.velocity)
                        : Math.abs((p - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                    ) {
                      const s = Math.abs((l ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  (r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      x(n, () => {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (a("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              (t.setTranslate(u),
                                x(n, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                }));
                            }, 0));
                      }))
                    : t.velocity
                      ? (a("_freeModeNoMomentumRelease"),
                        t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(p),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                        ((t.animating = !0),
                          x(n, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(p),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                  (a("_freeModeStaticRelease"),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
              }
            },
          },
        }));
    },
    function (e) {
      let t,
        s,
        a,
        i,
        { swiper: r, extendParams: n, on: l } = e;
      n({ grid: { rows: 1, fill: "column" } });
      const o = () => {
        let e = r.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      (l("init", () => {
        i = r.params.grid && r.params.grid.rows > 1;
      }),
        l("update", () => {
          const { params: e, el: t } = r,
            s = e.grid && e.grid.rows > 1;
          (i && !s
            ? (t.classList.remove(
              `${e.containerModifierClass}grid`,
              `${e.containerModifierClass}grid-column`,
            ),
              (a = 1),
              r.emitContainerClasses())
            : !i &&
            s &&
            (t.classList.add(`${e.containerModifierClass}grid`),
              "column" === e.grid.fill &&
              t.classList.add(`${e.containerModifierClass}grid-column`),
              r.emitContainerClasses()),
            (i = s));
        }),
        (r.grid = {
          initSlides: (e) => {
            const { slidesPerView: i } = r.params,
              { rows: n, fill: l } = r.params.grid,
              o =
                r.virtual && r.params.virtual.enabled
                  ? r.virtual.slides.length
                  : e.length;
            ((a = Math.floor(o / n)),
              (t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n),
              "auto" !== i && "row" === l && (t = Math.max(t, i * n)),
              (s = t / n));
          },
          unsetSlides: () => {
            r.slides &&
              r.slides.forEach((e) => {
                e.swiperSlideGridSet &&
                  ((e.style.height = ""),
                    (e.style[r.getDirectionLabel("margin-top")] = ""));
              });
          },
          updateSlide: (e, i, n) => {
            const { slidesPerGroup: l } = r.params,
              d = o(),
              { rows: c, fill: p } = r.params.grid,
              u =
                r.virtual && r.params.virtual.enabled
                  ? r.virtual.slides.length
                  : n.length;
            let m, h, f;
            if ("row" === p && l > 1) {
              const s = Math.floor(e / (l * c)),
                a = e - c * l * s,
                r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
              ((f = Math.floor(a / r)),
                (h = a - f * r + s * l),
                (m = h + (f * t) / c),
                (i.style.order = m));
            } else
              "column" === p
                ? ((h = Math.floor(e / c)),
                  (f = e - h * c),
                  (h > a || (h === a && f === c - 1)) &&
                  ((f += 1), f >= c && ((f = 0), (h += 1))))
                : ((f = Math.floor(e / s)), (h = e - f * s));
            ((i.row = f),
              (i.column = h),
              (i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`),
              (i.style[r.getDirectionLabel("margin-top")] =
                0 !== f ? d && `${d}px` : ""),
              (i.swiperSlideGridSet = !0));
          },
          updateWrapperSize: (e, s) => {
            const { centeredSlides: a, roundLengths: i } = r.params,
              n = o(),
              { rows: l } = r.params.grid;
            if (
              ((r.virtualSize = (e + n) * t),
                (r.virtualSize = Math.ceil(r.virtualSize / l) - n),
                r.params.cssMode ||
                (r.wrapperEl.style[r.getDirectionLabel("width")] =
                  `${r.virtualSize + n}px`),
                a)
            ) {
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                (i && (a = Math.floor(a)),
                  s[t] < r.virtualSize + s[0] && e.push(a));
              }
              (s.splice(0, s.length), s.push(...e));
            }
          },
        }));
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: le.bind(t),
        prependSlide: oe.bind(t),
        addSlide: de.bind(t),
        removeSlide: ce.bind(t),
        removeAllSlides: pe.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      (s({ fadeEffect: { crossFade: !1 } }),
        ue({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let a = -e.swiperSlideOffset;
              t.params.virtualTranslate || (a -= t.translate);
              let i = 0;
              t.isHorizontal() || ((i = a), (a = 0));
              const r = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = me(0, e);
              ((n.style.opacity = r),
                (n.style.transform = `translate3d(${a}px, ${i}px, 0px)`));
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            (s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              he({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              }));
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          i = s
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        (a ||
          ((a = v(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "left" : "top")
            ).split(" "),
          )),
            e.append(a)),
          i ||
          ((i = v(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "right" : "bottom")
            ).split(" "),
          )),
            e.append(i)),
          a && (a.style.opacity = Math.max(-t, 0)),
          i && (i.style.opacity = Math.max(t, 0)));
      };
      ue({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            el: e,
            wrapperEl: s,
            slides: a,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: d,
          } = t,
            c = M(t),
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            m = t.virtual && t.params.virtual.enabled;
          let h,
            f = 0;
          p.shadow &&
            (u
              ? ((h = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                h ||
                ((h = v("div", "swiper-cube-shadow")), t.wrapperEl.append(h)),
                (h.style.height = `${r}px`))
              : ((h = e.querySelector(".swiper-cube-shadow")),
                h || ((h = v("div", "swiper-cube-shadow")), e.append(h))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            let s = e;
            m && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let h = 0,
              g = 0,
              v = 0;
            (s % 4 == 0
              ? ((h = 4 * -n * o), (v = 0))
              : (s - 1) % 4 == 0
                ? ((h = 0), (v = 4 * -n * o))
                : (s - 2) % 4 == 0
                  ? ((h = o + 4 * n * o), (v = o))
                  : (s - 3) % 4 == 0 && ((h = -o), (v = 3 * o + 4 * o * n)),
              l && (h = -h),
              u || ((g = h), (h = 0)));
            const w = `rotateX(${c(u ? 0 : -r)}deg) rotateY(${c(u ? r : 0)}deg) translate3d(${h}px, ${g}px, ${v}px)`;
            (d <= 1 &&
              d > -1 &&
              ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)),
              (t.style.transform = w),
              p.slideShadows && i(t, d, u));
          }
          if (
            ((s.style.transformOrigin = `50% 50% -${o / 2}px`),
              (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`),
              p.shadow)
          )
            if (u)
              h.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
            else {
              const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
              h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`;
            }
          const g =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          ((s.style.transform = `translate3d(0px,0,${g}px) rotateX(${c(t.isHorizontal() ? 0 : f)}deg) rotateY(${c(t.isHorizontal() ? -f : 0)}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${g}px`));
        },
        setTransition: (e) => {
          const { el: s, slides: a } = t;
          if (
            (a.forEach((t) => {
              ((t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  }));
            }),
              t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (e, s) => {
        let a = t.isHorizontal()
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          i = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        (a || (a = fe("flip", e, t.isHorizontal() ? "left" : "top")),
          i || (i = fe("flip", e, t.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-s, 0)),
          i && (i.style.opacity = Math.max(s, 0)));
      };
      ue({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect,
            r = M(t);
          for (let n = 0; n < e.length; n += 1) {
            const l = e[n];
            let o = l.progress;
            t.params.flipEffect.limitRotation &&
              (o = Math.max(Math.min(l.progress, 1), -1));
            const d = l.swiperSlideOffset;
            let c = -180 * o,
              p = 0,
              u = t.params.cssMode ? -d - t.translate : -d,
              m = 0;
            (t.isHorizontal()
              ? s && (c = -c)
              : ((m = u), (u = 0), (p = -c), (c = 0)),
              (l.style.zIndex = -Math.abs(Math.round(o)) + e.length),
              a.slideShadows && i(l, o));
            const h = `translate3d(${u}px, ${m}px, 0px) rotateX(${r(p)}deg) rotateY(${r(c)}deg)`;
            me(0, l).style.transform = h;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          (s.forEach((t) => {
            ((t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                }));
          }),
            he({ swiper: t, duration: e, transformElements: s }));
        },
        recreateShadows: () => {
          (t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              (t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(e.progress, 1), -1)),
                i(e, s));
            }));
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      (s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        ue({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth,
              p = M(t);
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a[e],
                s = i[e],
                l = (o - t.swiperSlideOffset - s / 2) / s,
                u =
                  "function" == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let m = n ? d * u : 0,
                h = n ? 0 : d * u,
                f = -c * Math.abs(u),
                g = r.stretch;
              "string" == typeof g &&
                -1 !== g.indexOf("%") &&
                (g = (parseFloat(r.stretch) / 100) * s);
              let v = n ? 0 : g * u,
                w = n ? g * u : 0,
                b = 1 - (1 - r.scale) * Math.abs(u);
              (Math.abs(w) < 0.001 && (w = 0),
                Math.abs(v) < 0.001 && (v = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(b) < 0.001 && (b = 0));
              const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${p(h)}deg) rotateY(${p(m)}deg) scale(${b})`;
              if (
                ((me(0, t).style.transform = y),
                  (t.style.zIndex = 1 - Math.abs(Math.round(u))),
                  r.slideShadows)
              ) {
                let e = n
                  ? t.querySelector(".swiper-slide-shadow-left")
                  : t.querySelector(".swiper-slide-shadow-top"),
                  s = n
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                (e || (e = fe("coverflow", t, n ? "left" : "top")),
                  s || (s = fe("coverflow", t, n ? "right" : "bottom")),
                  e && (e.style.opacity = u > 0 ? u : 0),
                  s && (s.style.opacity = -u > 0 ? -u : 0));
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => h(e))
              .forEach((t) => {
                ((t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    }));
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        }));
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      ue({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides,
            o = M(t);
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e[s],
              d = a.progress,
              c = Math.min(
                Math.max(a.progress, -r.limitProgress),
                r.limitProgress,
              );
            let p = c;
            l ||
              (p = Math.min(
                Math.max(a.originalProgress, -r.limitProgress),
                r.limitProgress,
              ));
            const u = a.swiperSlideOffset,
              m = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
              h = [0, 0, 0];
            let f = !1;
            t.isHorizontal() || ((m[1] = m[0]), (m[0] = 0));
            let g = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            (c < 0
              ? ((g = r.next), (f = !0))
              : c > 0 && ((g = r.prev), (f = !0)),
              m.forEach((e, t) => {
                m[t] =
                  `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(c * n)}))`;
              }),
              h.forEach((e, t) => {
                let s = g.rotate[t] * Math.abs(c * n);
                h[t] = s;
              }),
              (a.style.zIndex = -Math.abs(Math.round(d)) + e.length));
            const v = m.join(", "),
              w = `rotateX(${o(h[0])}deg) rotateY(${o(h[1])}deg) rotateZ(${o(h[2])}deg)`,
              b =
                p < 0
                  ? `scale(${1 + (1 - g.scale) * p * n})`
                  : `scale(${1 - (1 - g.scale) * p * n})`,
              y =
                p < 0
                  ? 1 + (1 - g.opacity) * p * n
                  : 1 - (1 - g.opacity) * p * n,
              E = `translate3d(${v}) ${w} ${b}`;
            if ((f && g.shadow) || !f) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && g.shadow && (e = fe("creative", a)), e)) {
                const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const x = me(0, a);
            ((x.style.transform = E),
              (x.style.opacity = y),
              g.origin && (x.style.transformOrigin = g.origin));
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          (s.forEach((t) => {
            ((t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              }));
          }),
            he({
              swiper: t,
              duration: e,
              transformElements: s,
              allSlides: !0,
            }));
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      (s({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        ue({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: a } = t,
              i = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = a ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                c = d.progress,
                p = Math.min(Math.max(c, -4), 4);
              let u = d.swiperSlideOffset;
              (t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                t.params.cssMode &&
                (u -= e[0].swiperSlideOffset));
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(p);
              let g = 1,
                v = -i.perSlideRotate * p,
                w = i.perSlideOffset - 0.75 * Math.abs(p);
              const b =
                t.virtual && t.params.virtual.enabled
                  ? t.virtual.from + o
                  : o,
                y =
                  (b === s || b === s - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (n || t.params.cssMode) &&
                  l < r,
                E =
                  (b === s || b === s + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (n || t.params.cssMode) &&
                  l > r;
              if (y || E) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                ((v += -28 * p * e),
                  (g += -0.5 * e),
                  (w += 96 * e),
                  (h = -25 * e * Math.abs(p) + "%"));
              }
              if (
                ((m =
                  p < 0
                    ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))`
                    : p > 0
                      ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))`
                      : `${m}px`),
                  !t.isHorizontal())
              ) {
                const e = h;
                ((h = m), (m = e));
              }
              const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? (a ? -v : v) : 0}deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                (e || (e = fe("cards", d)),
                  e &&
                  (e.style.opacity = Math.min(
                    Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                    1,
                  )));
              }
              d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
              me(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            (s.forEach((t) => {
              ((t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                }));
            }),
              he({ swiper: t, duration: e, transformElements: s }));
          },
          perspective: () => !0,
          overwriteParams: () => ({
            _loopSwapReset: !1,
            watchSlidesProgress: !0,
            loopAdditionalSlides: 3,
            centeredSlides: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        }));
    },
  ];
  return (ie.use(ge), ie);
})();
//# sourceMappingURL=swiper-bundle.min.js.map

/**
 * SimpleBar.js - v5.3.6
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : ((t = t || self).SimpleBar = e());
})(this, function () {
  "use strict";
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
            ? self
            : {};
  function e(t, e) {
    return (t((e = { exports: {} }), e.exports), e.exports);
  }
  var r,
    i,
    n,
    o = "object",
    s = function (t) {
      return t && t.Math == Math && t;
    },
    a =
      s(typeof globalThis == o && globalThis) ||
      s(typeof window == o && window) ||
      s(typeof self == o && self) ||
      s(typeof t == o && t) ||
      Function("return this")(),
    c = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    l = !c(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    u = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    h = {
      f:
        f && !u.call({ 1: 2 }, 1)
          ? function (t) {
            var e = f(this, t);
            return !!e && e.enumerable;
          }
          : u,
    },
    d = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    p = {}.toString,
    v = function (t) {
      return p.call(t).slice(8, -1);
    },
    g = "".split,
    b = c(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
        return "String" == v(t) ? g.call(t, "") : Object(t);
      }
      : Object,
    y = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    m = function (t) {
      return b(y(t));
    },
    x = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    E = function (t, e) {
      if (!x(t)) return t;
      var r, i;
      if (e && "function" == typeof (r = t.toString) && !x((i = r.call(t))))
        return i;
      if ("function" == typeof (r = t.valueOf) && !x((i = r.call(t)))) return i;
      if (!e && "function" == typeof (r = t.toString) && !x((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    w = {}.hasOwnProperty,
    S = function (t, e) {
      return w.call(t, e);
    },
    O = a.document,
    k = x(O) && x(O.createElement),
    A = function (t) {
      return k ? O.createElement(t) : {};
    },
    T =
      !l &&
      !c(function () {
        return (
          7 !=
          Object.defineProperty(A("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    L = Object.getOwnPropertyDescriptor,
    z = {
      f: l
        ? L
        : function (t, e) {
          if (((t = m(t)), (e = E(e, !0)), T))
            try {
              return L(t, e);
            } catch (t) { }
          if (S(t, e)) return d(!h.f.call(t, e), t[e]);
        },
    },
    R = function (t) {
      if (!x(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    _ = Object.defineProperty,
    M = {
      f: l
        ? _
        : function (t, e, r) {
          if ((R(t), (e = E(e, !0)), R(r), T))
            try {
              return _(t, e, r);
            } catch (t) { }
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return ("value" in r && (t[e] = r.value), t);
        },
    },
    C = l
      ? function (t, e, r) {
        return M.f(t, e, d(1, r));
      }
      : function (t, e, r) {
        return ((t[e] = r), t);
      },
    W = function (t, e) {
      try {
        C(a, t, e);
      } catch (r) {
        a[t] = e;
      }
      return e;
    },
    j = e(function (t) {
      var e = a["__core-js_shared__"] || W("__core-js_shared__", {});
      (t.exports = function (t, r) {
        return e[t] || (e[t] = void 0 !== r ? r : {});
      })("versions", []).push({
        version: "3.2.1",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    N = j("native-function-to-string", Function.toString),
    I = a.WeakMap,
    B = "function" == typeof I && /native code/.test(N.call(I)),
    D = 0,
    P = Math.random(),
    F = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++D + P).toString(36)
      );
    },
    V = j("keys"),
    X = function (t) {
      return V[t] || (V[t] = F(t));
    },
    H = {},
    q = a.WeakMap;
  if (B) {
    var $ = new q(),
      Y = $.get,
      G = $.has,
      U = $.set;
    ((r = function (t, e) {
      return (U.call($, t, e), e);
    }),
      (i = function (t) {
        return Y.call($, t) || {};
      }),
      (n = function (t) {
        return G.call($, t);
      }));
  } else {
    var Q = X("state");
    ((H[Q] = !0),
      (r = function (t, e) {
        return (C(t, Q, e), e);
      }),
      (i = function (t) {
        return S(t, Q) ? t[Q] : {};
      }),
      (n = function (t) {
        return S(t, Q);
      }));
  }
  var K = {
    set: r,
    get: i,
    has: n,
    enforce: function (t) {
      return n(t) ? i(t) : r(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!x(e) || (r = i(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    },
  },
    J = e(function (t) {
      var e = K.get,
        r = K.enforce,
        i = String(N).split("toString");
      (j("inspectSource", function (t) {
        return N.call(t);
      }),
        (t.exports = function (t, e, n, o) {
          var s = !!o && !!o.unsafe,
            c = !!o && !!o.enumerable,
            l = !!o && !!o.noTargetGet;
          ("function" == typeof n &&
            ("string" != typeof e || S(n, "name") || C(n, "name", e),
              (r(n).source = i.join("string" == typeof e ? e : ""))),
            t !== a
              ? (s ? !l && t[e] && (c = !0) : delete t[e],
                c ? (t[e] = n) : C(t, e, n))
              : c
                ? (t[e] = n)
                : W(e, n));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && e(this).source) || N.call(this);
        }));
    }),
    Z = a,
    tt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    et = function (t, e) {
      return arguments.length < 2
        ? tt(Z[t]) || tt(a[t])
        : (Z[t] && Z[t][e]) || (a[t] && a[t][e]);
    },
    rt = Math.ceil,
    it = Math.floor,
    nt = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? it : rt)(t);
    },
    ot = Math.min,
    st = function (t) {
      return t > 0 ? ot(nt(t), 9007199254740991) : 0;
    },
    at = Math.max,
    ct = Math.min,
    lt = function (t) {
      return function (e, r, i) {
        var n,
          o = m(e),
          s = st(o.length),
          a = (function (t, e) {
            var r = nt(t);
            return r < 0 ? at(r + e, 0) : ct(r, e);
          })(i, s);
        if (t && r != r) {
          for (; s > a;) if ((n = o[a++]) != n) return !0;
        } else
          for (; s > a; a++)
            if ((t || a in o) && o[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf,
    ft = function (t, e) {
      var r,
        i = m(t),
        n = 0,
        o = [];
      for (r in i) !S(H, r) && S(i, r) && o.push(r);
      for (; e.length > n;) S(i, (r = e[n++])) && (~ut(o, r) || o.push(r));
      return o;
    },
    ht = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    dt = ht.concat("length", "prototype"),
    pt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return ft(t, dt);
        },
    },
    vt = { f: Object.getOwnPropertySymbols },
    gt =
      et("Reflect", "ownKeys") ||
      function (t) {
        var e = pt.f(R(t)),
          r = vt.f;
        return r ? e.concat(r(t)) : e;
      },
    bt = function (t, e) {
      for (var r = gt(e), i = M.f, n = z.f, o = 0; o < r.length; o++) {
        var s = r[o];
        S(t, s) || i(t, s, n(e, s));
      }
    },
    yt = /#|\.prototype\./,
    mt = function (t, e) {
      var r = Et[xt(t)];
      return r == St || (r != wt && ("function" == typeof e ? c(e) : !!e));
    },
    xt = (mt.normalize = function (t) {
      return String(t).replace(yt, ".").toLowerCase();
    }),
    Et = (mt.data = {}),
    wt = (mt.NATIVE = "N"),
    St = (mt.POLYFILL = "P"),
    Ot = mt,
    kt = z.f,
    At = function (t, e) {
      var r,
        i,
        n,
        o,
        s,
        c = t.target,
        l = t.global,
        u = t.stat;
      if ((r = l ? a : u ? a[c] || W(c, {}) : (a[c] || {}).prototype))
        for (i in e) {
          if (
            ((o = e[i]),
              (n = t.noTargetGet ? (s = kt(r, i)) && s.value : r[i]),
              !Ot(l ? i : c + (u ? "." : "#") + i, t.forced) && void 0 !== n)
          ) {
            if (typeof o == typeof n) continue;
            bt(o, n);
          }
          ((t.sham || (n && n.sham)) && C(o, "sham", !0), J(r, i, o, t));
        }
    },
    Tt = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    Lt = function (t, e, r) {
      if ((Tt(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, i) {
            return t.call(e, r, i);
          };
        case 3:
          return function (r, i, n) {
            return t.call(e, r, i, n);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    zt = function (t) {
      return Object(y(t));
    },
    Rt =
      Array.isArray ||
      function (t) {
        return "Array" == v(t);
      },
    _t =
      !!Object.getOwnPropertySymbols &&
      !c(function () {
        return !String(Symbol());
      }),
    Mt = a.Symbol,
    Ct = j("wks"),
    Wt = function (t) {
      return Ct[t] || (Ct[t] = (_t && Mt[t]) || (_t ? Mt : F)("Symbol." + t));
    },
    jt = Wt("species"),
    Nt = function (t, e) {
      var r;
      return (
        Rt(t) &&
        ("function" != typeof (r = t.constructor) ||
          (r !== Array && !Rt(r.prototype))
          ? x(r) && null === (r = r[jt]) && (r = void 0)
          : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    It = [].push,
    Bt = function (t) {
      var e = 1 == t,
        r = 2 == t,
        i = 3 == t,
        n = 4 == t,
        o = 6 == t,
        s = 5 == t || o;
      return function (a, c, l, u) {
        for (
          var f,
          h,
          d = zt(a),
          p = b(d),
          v = Lt(c, l, 3),
          g = st(p.length),
          y = 0,
          m = u || Nt,
          x = e ? m(a, g) : r ? m(a, 0) : void 0;
          g > y;
          y++
        )
          if ((s || y in p) && ((h = v((f = p[y]), y, d)), t))
            if (e) x[y] = h;
            else if (h)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return y;
                case 2:
                  It.call(x, f);
              }
            else if (n) return !1;
        return o ? -1 : i || n ? n : x;
      };
    },
    Dt = {
      forEach: Bt(0),
      map: Bt(1),
      filter: Bt(2),
      some: Bt(3),
      every: Bt(4),
      find: Bt(5),
      findIndex: Bt(6),
    },
    Pt = function (t, e) {
      var r = [][t];
      return (
        !r ||
        !c(function () {
          r.call(
            null,
            e ||
            function () {
              throw 1;
            },
            1,
          );
        })
      );
    },
    Ft = Dt.forEach,
    Vt = Pt("forEach")
      ? function (t) {
        return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
      : [].forEach;
  At({ target: "Array", proto: !0, forced: [].forEach != Vt }, { forEach: Vt });
  var Xt = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };
  for (var Ht in Xt) {
    var qt = a[Ht],
      $t = qt && qt.prototype;
    if ($t && $t.forEach !== Vt)
      try {
        C($t, "forEach", Vt);
      } catch (t) {
        $t.forEach = Vt;
      }
  }
  var Yt = !(
    "undefined" == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
    Gt = Wt("species"),
    Ut = Dt.filter;
  At(
    {
      target: "Array",
      proto: !0,
      forced: !(function (t) {
        return !c(function () {
          var e = [];
          return (
            ((e.constructor = {})[Gt] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        });
      })("filter"),
    },
    {
      filter: function (t) {
        return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    },
  );
  var Qt =
    Object.keys ||
    function (t) {
      return ft(t, ht);
    },
    Kt = l
      ? Object.defineProperties
      : function (t, e) {
        R(t);
        for (var r, i = Qt(e), n = i.length, o = 0; n > o;)
          M.f(t, (r = i[o++]), e[r]);
        return t;
      },
    Jt = et("document", "documentElement"),
    Zt = X("IE_PROTO"),
    te = function () { },
    ee = function () {
      var t,
        e = A("iframe"),
        r = ht.length;
      for (
        e.style.display = "none",
        Jt.appendChild(e),
        e.src = String("javascript:"),
        (t = e.contentWindow.document).open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        ee = t.F;
        r--;

      )
        delete ee.prototype[ht[r]];
      return ee();
    },
    re =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((te.prototype = R(t)),
              (r = new te()),
              (te.prototype = null),
              (r[Zt] = t))
            : (r = ee()),
          void 0 === e ? r : Kt(r, e)
        );
      };
  H[Zt] = !0;
  var ie = Wt("unscopables"),
    ne = Array.prototype;
  null == ne[ie] && C(ne, ie, re(null));
  var oe,
    se,
    ae,
    ce = function (t) {
      ne[ie][t] = !0;
    },
    le = {},
    ue = !c(function () {
      function t() { }
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    fe = X("IE_PROTO"),
    he = Object.prototype,
    de = ue
      ? Object.getPrototypeOf
      : function (t) {
        return (
          (t = zt(t)),
          S(t, fe)
            ? t[fe]
            : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
                ? he
                : null
        );
      },
    pe = Wt("iterator"),
    ve = !1;
  ([].keys &&
    ("next" in (ae = [].keys())
      ? (se = de(de(ae))) !== Object.prototype && (oe = se)
      : (ve = !0)),
    null == oe && (oe = {}),
    S(oe, pe) ||
    C(oe, pe, function () {
      return this;
    }));
  var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve },
    be = M.f,
    ye = Wt("toStringTag"),
    me = function (t, e, r) {
      t &&
        !S((t = r ? t : t.prototype), ye) &&
        be(t, ye, { configurable: !0, value: e });
    },
    xe = ge.IteratorPrototype,
    Ee = function () {
      return this;
    },
    we =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
          var t,
            e = !1,
            r = {};
          try {
            ((t = Object.getOwnPropertyDescriptor(
              Object.prototype,
              "__proto__",
            ).set).call(r, []),
              (e = r instanceof Array));
          } catch (t) { }
          return function (r, i) {
            return (
              R(r),
              (function (t) {
                if (!x(t) && null !== t)
                  throw TypeError(
                    "Can't set " + String(t) + " as a prototype",
                  );
              })(i),
              e ? t.call(r, i) : (r.__proto__ = i),
              r
            );
          };
        })()
        : void 0),
    Se = ge.IteratorPrototype,
    Oe = ge.BUGGY_SAFARI_ITERATORS,
    ke = Wt("iterator"),
    Ae = function () {
      return this;
    },
    Te = function (t, e, r, i, n, o, s) {
      !(function (t, e, r) {
        var i = e + " Iterator";
        ((t.prototype = re(xe, { next: d(1, r) })), me(t, i, !1), (le[i] = Ee));
      })(r, e, i);
      var a,
        c,
        l,
        u = function (t) {
          if (t === n && g) return g;
          if (!Oe && t in p) return p[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        f = e + " Iterator",
        h = !1,
        p = t.prototype,
        v = p[ke] || p["@@iterator"] || (n && p[n]),
        g = (!Oe && v) || u(n),
        b = ("Array" == e && p.entries) || v;
      if (
        (b &&
          ((a = de(b.call(new t()))),
            Se !== Object.prototype &&
            a.next &&
            (de(a) !== Se &&
              (we ? we(a, Se) : "function" != typeof a[ke] && C(a, ke, Ae)),
              me(a, f, !0))),
          "values" == n &&
          v &&
          "values" !== v.name &&
          ((h = !0),
            (g = function () {
              return v.call(this);
            })),
          p[ke] !== g && C(p, ke, g),
          (le[e] = g),
          n)
      )
        if (
          ((c = {
            values: u("values"),
            keys: o ? g : u("keys"),
            entries: u("entries"),
          }),
            s)
        )
          for (l in c) (!Oe && !h && l in p) || J(p, l, c[l]);
        else At({ target: e, proto: !0, forced: Oe || h }, c);
      return c;
    },
    Le = K.set,
    ze = K.getterFor("Array Iterator"),
    Re = Te(
      Array,
      "Array",
      function (t, e) {
        Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e });
      },
      function () {
        var t = ze(this),
          e = t.target,
          r = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
            ? { value: i, done: !1 }
            : "values" == r
              ? { value: e[i], done: !1 }
              : { value: [i, e[i]], done: !1 };
      },
      "values",
    );
  ((le.Arguments = le.Array), ce("keys"), ce("values"), ce("entries"));
  var _e = Object.assign,
    Me =
      !_e ||
        c(function () {
          var t = {},
            e = {},
            r = Symbol();
          return (
            (t[r] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              e[t] = t;
            }),
            7 != _e({}, t)[r] || "abcdefghijklmnopqrst" != Qt(_e({}, e)).join("")
          );
        })
        ? function (t, e) {
          for (
            var r = zt(t), i = arguments.length, n = 1, o = vt.f, s = h.f;
            i > n;

          )
            for (
              var a,
              c = b(arguments[n++]),
              u = o ? Qt(c).concat(o(c)) : Qt(c),
              f = u.length,
              d = 0;
              f > d;

            )
              ((a = u[d++]), (l && !s.call(c, a)) || (r[a] = c[a]));
          return r;
        }
        : _e;
  At(
    { target: "Object", stat: !0, forced: Object.assign !== Me },
    { assign: Me },
  );
  var Ce = Wt("toStringTag"),
    We =
      "Arguments" ==
      v(
        (function () {
          return arguments;
        })(),
      ),
    je = function (t) {
      var e, r, i;
      return void 0 === t
        ? "Undefined"
        : null === t
          ? "Null"
          : "string" ==
            typeof (r = (function (t, e) {
              try {
                return t[e];
              } catch (t) { }
            })((e = Object(t)), Ce))
            ? r
            : We
              ? v(e)
              : "Object" == (i = v(e)) && "function" == typeof e.callee
                ? "Arguments"
                : i;
    },
    Ne = {};
  Ne[Wt("toStringTag")] = "z";
  var Ie =
    "[object z]" !== String(Ne)
      ? function () {
        return "[object " + je(this) + "]";
      }
      : Ne.toString,
    Be = Object.prototype;
  Ie !== Be.toString && J(Be, "toString", Ie, { unsafe: !0 });
  var De = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    Pe = "[" + De + "]",
    Fe = RegExp("^" + Pe + Pe + "*"),
    Ve = RegExp(Pe + Pe + "*$"),
    Xe = function (t) {
      return function (e) {
        var r = String(y(e));
        return (
          1 & t && (r = r.replace(Fe, "")),
          2 & t && (r = r.replace(Ve, "")),
          r
        );
      };
    },
    He = { start: Xe(1), end: Xe(2), trim: Xe(3) }.trim,
    qe = a.parseInt,
    $e = /^[+-]?0[Xx]/,
    Ye =
      8 !== qe(De + "08") || 22 !== qe(De + "0x16")
        ? function (t, e) {
          var r = He(String(t));
          return qe(r, e >>> 0 || ($e.test(r) ? 16 : 10));
        }
        : qe;
  At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye });
  var Ge = function (t) {
    return function (e, r) {
      var i,
        n,
        o = String(y(e)),
        s = nt(r),
        a = o.length;
      return s < 0 || s >= a
        ? t
          ? ""
          : void 0
        : (i = o.charCodeAt(s)) < 55296 ||
          i > 56319 ||
          s + 1 === a ||
          (n = o.charCodeAt(s + 1)) < 56320 ||
          n > 57343
          ? t
            ? o.charAt(s)
            : i
          : t
            ? o.slice(s, s + 2)
            : n - 56320 + ((i - 55296) << 10) + 65536;
    };
  },
    Ue = { codeAt: Ge(!1), charAt: Ge(!0) },
    Qe = Ue.charAt,
    Ke = K.set,
    Je = K.getterFor("String Iterator");
  Te(
    String,
    "String",
    function (t) {
      Ke(this, { type: "String Iterator", string: String(t), index: 0 });
    },
    function () {
      var t,
        e = Je(this),
        r = e.string,
        i = e.index;
      return i >= r.length
        ? { value: void 0, done: !0 }
        : ((t = Qe(r, i)), (e.index += t.length), { value: t, done: !1 });
    },
  );
  var Ze = function (t, e, r) {
    for (var i in e) J(t, i, e[i], r);
    return t;
  },
    tr = !c(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    er = e(function (t) {
      var e = M.f,
        r = F("meta"),
        i = 0,
        n =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (t) {
          e(t, r, { value: { objectID: "O" + ++i, weakData: {} } });
        },
        s = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!x(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!S(t, r)) {
              if (!n(t)) return "F";
              if (!e) return "E";
              o(t);
            }
            return t[r].objectID;
          },
          getWeakData: function (t, e) {
            if (!S(t, r)) {
              if (!n(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[r].weakData;
          },
          onFreeze: function (t) {
            return (tr && s.REQUIRED && n(t) && !S(t, r) && o(t), t);
          },
        });
      H[r] = !0;
    }),
    rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, Wt("iterator")),
    ir = Array.prototype,
    nr = Wt("iterator"),
    or = function (t, e, r, i) {
      try {
        return i ? e(R(r)[0], r[1]) : e(r);
      } catch (e) {
        var n = t.return;
        throw (void 0 !== n && R(n.call(t)), e);
      }
    },
    sr = e(function (t) {
      var e = function (t, e) {
        ((this.stopped = t), (this.result = e));
      };
      (t.exports = function (t, r, i, n, o) {
        var s,
          a,
          c,
          l,
          u,
          f,
          h,
          d = Lt(r, i, n ? 2 : 1);
        if (o) s = t;
        else {
          if (
            "function" !=
            typeof (a = (function (t) {
              if (null != t) return t[nr] || t["@@iterator"] || le[je(t)];
            })(t))
          )
            throw TypeError("Target is not iterable");
          if (void 0 !== (h = a) && (le.Array === h || ir[rr] === h)) {
            for (c = 0, l = st(t.length); l > c; c++)
              if (
                (u = n ? d(R((f = t[c]))[0], f[1]) : d(t[c])) &&
                u instanceof e
              )
                return u;
            return new e(!1);
          }
          s = a.call(t);
        }
        for (; !(f = s.next()).done;)
          if ((u = or(s, d, f.value, n)) && u instanceof e) return u;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    ar = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    },
    cr = Wt("iterator"),
    lr = !1;
  try {
    var ur = 0,
      fr = {
        next: function () {
          return { done: !!ur++ };
        },
        return: function () {
          lr = !0;
        },
      };
    ((fr[cr] = function () {
      return this;
    }),
      Array.from(fr, function () {
        throw 2;
      }));
  } catch (t) { }
  var hr = function (t, e, r, i, n) {
    var o = a[t],
      s = o && o.prototype,
      l = o,
      u = i ? "set" : "add",
      f = {},
      h = function (t) {
        var e = s[t];
        J(
          s,
          t,
          "add" == t
            ? function (t) {
              return (e.call(this, 0 === t ? 0 : t), this);
            }
            : "delete" == t
              ? function (t) {
                return !(n && !x(t)) && e.call(this, 0 === t ? 0 : t);
              }
              : "get" == t
                ? function (t) {
                  return n && !x(t)
                    ? void 0
                    : e.call(this, 0 === t ? 0 : t);
                }
                : "has" == t
                  ? function (t) {
                    return !(n && !x(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                  : function (t, r) {
                    return (e.call(this, 0 === t ? 0 : t, r), this);
                  },
        );
      };
    if (
      Ot(
        t,
        "function" != typeof o ||
        !(
          n ||
          (s.forEach &&
            !c(function () {
              new o().entries().next();
            }))
        ),
      )
    )
      ((l = r.getConstructor(e, t, i, u)), (er.REQUIRED = !0));
    else if (Ot(t, !0)) {
      var d = new l(),
        p = d[u](n ? {} : -0, 1) != d,
        v = c(function () {
          d.has(1);
        }),
        g = (function (t, e) {
          if (!e && !lr) return !1;
          var r = !1;
          try {
            var i = {};
            ((i[cr] = function () {
              return {
                next: function () {
                  return { done: (r = !0) };
                },
              };
            }),
              t(i));
          } catch (t) { }
          return r;
        })(function (t) {
          new o(t);
        }),
        b =
          !n &&
          c(function () {
            for (var t = new o(), e = 5; e--;) t[u](e, e);
            return !t.has(-0);
          });
      (g ||
        (((l = e(function (e, r) {
          ar(e, l, t);
          var n = (function (t, e, r) {
            var i, n;
            return (
              we &&
              "function" == typeof (i = e.constructor) &&
              i !== r &&
              x((n = i.prototype)) &&
              n !== r.prototype &&
              we(t, n),
              t
            );
          })(new o(), e, l);
          return (null != r && sr(r, n[u], n, i), n);
        })).prototype = s),
          (s.constructor = l)),
        (v || b) && (h("delete"), h("has"), i && h("get")),
        (b || p) && h(u),
        n && s.clear && delete s.clear);
    }
    return (
      (f[t] = l),
      At({ global: !0, forced: l != o }, f),
      me(l, t),
      n || r.setStrong(l, t, i),
      l
    );
  },
    dr = er.getWeakData,
    pr = K.set,
    vr = K.getterFor,
    gr = Dt.find,
    br = Dt.findIndex,
    yr = 0,
    mr = function (t) {
      return t.frozen || (t.frozen = new xr());
    },
    xr = function () {
      this.entries = [];
    },
    Er = function (t, e) {
      return gr(t.entries, function (t) {
        return t[0] === e;
      });
    };
  xr.prototype = {
    get: function (t) {
      var e = Er(this, t);
      if (e) return e[1];
    },
    has: function (t) {
      return !!Er(this, t);
    },
    set: function (t, e) {
      var r = Er(this, t);
      r ? (r[1] = e) : this.entries.push([t, e]);
    },
    delete: function (t) {
      var e = br(this.entries, function (e) {
        return e[0] === t;
      });
      return (~e && this.entries.splice(e, 1), !!~e);
    },
  };
  var wr = {
    getConstructor: function (t, e, r, i) {
      var n = t(function (t, o) {
        (ar(t, n, e),
          pr(t, { type: e, id: yr++, frozen: void 0 }),
          null != o && sr(o, t[i], t, r));
      }),
        o = vr(e),
        s = function (t, e, r) {
          var i = o(t),
            n = dr(R(e), !0);
          return (!0 === n ? mr(i).set(e, r) : (n[i.id] = r), t);
        };
      return (
        Ze(n.prototype, {
          delete: function (t) {
            var e = o(this);
            if (!x(t)) return !1;
            var r = dr(t);
            return !0 === r
              ? mr(e).delete(t)
              : r && S(r, e.id) && delete r[e.id];
          },
          has: function (t) {
            var e = o(this);
            if (!x(t)) return !1;
            var r = dr(t);
            return !0 === r ? mr(e).has(t) : r && S(r, e.id);
          },
        }),
        Ze(
          n.prototype,
          r
            ? {
              get: function (t) {
                var e = o(this);
                if (x(t)) {
                  var r = dr(t);
                  return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
                }
              },
              set: function (t, e) {
                return s(this, t, e);
              },
            }
            : {
              add: function (t) {
                return s(this, t, !0);
              },
            },
        ),
        n
      );
    },
  },
    Sr =
      (e(function (t) {
        var e,
          r = K.enforce,
          i = !a.ActiveXObject && "ActiveXObject" in a,
          n = Object.isExtensible,
          o = function (t) {
            return function () {
              return t(this, arguments.length ? arguments[0] : void 0);
            };
          },
          s = (t.exports = hr("WeakMap", o, wr, !0, !0));
        if (B && i) {
          ((e = wr.getConstructor(o, "WeakMap", !0)), (er.REQUIRED = !0));
          var c = s.prototype,
            l = c.delete,
            u = c.has,
            f = c.get,
            h = c.set;
          Ze(c, {
            delete: function (t) {
              if (x(t) && !n(t)) {
                var i = r(this);
                return (
                  i.frozen || (i.frozen = new e()),
                  l.call(this, t) || i.frozen.delete(t)
                );
              }
              return l.call(this, t);
            },
            has: function (t) {
              if (x(t) && !n(t)) {
                var i = r(this);
                return (
                  i.frozen || (i.frozen = new e()),
                  u.call(this, t) || i.frozen.has(t)
                );
              }
              return u.call(this, t);
            },
            get: function (t) {
              if (x(t) && !n(t)) {
                var i = r(this);
                return (
                  i.frozen || (i.frozen = new e()),
                  u.call(this, t) ? f.call(this, t) : i.frozen.get(t)
                );
              }
              return f.call(this, t);
            },
            set: function (t, i) {
              if (x(t) && !n(t)) {
                var o = r(this);
                (o.frozen || (o.frozen = new e()),
                  u.call(this, t) ? h.call(this, t, i) : o.frozen.set(t, i));
              } else h.call(this, t, i);
              return this;
            },
          });
        }
      }),
        Wt("iterator")),
    Or = Wt("toStringTag"),
    kr = Re.values;
  for (var Ar in Xt) {
    var Tr = a[Ar],
      Lr = Tr && Tr.prototype;
    if (Lr) {
      if (Lr[Sr] !== kr)
        try {
          C(Lr, Sr, kr);
        } catch (t) {
          Lr[Sr] = kr;
        }
      if ((Lr[Or] || C(Lr, Or, Ar), Xt[Ar]))
        for (var zr in Re)
          if (Lr[zr] !== Re[zr])
            try {
              C(Lr, zr, Re[zr]);
            } catch (t) {
              Lr[zr] = Re[zr];
            }
    }
  }
  var Rr = "Expected a function",
    _r = NaN,
    Mr = "[object Symbol]",
    Cr = /^\s+|\s+$/g,
    Wr = /^[-+]0x[0-9a-f]+$/i,
    jr = /^0b[01]+$/i,
    Nr = /^0o[0-7]+$/i,
    Ir = parseInt,
    Br = "object" == typeof t && t && t.Object === Object && t,
    Dr = "object" == typeof self && self && self.Object === Object && self,
    Pr = Br || Dr || Function("return this")(),
    Fr = Object.prototype.toString,
    Vr = Math.max,
    Xr = Math.min,
    Hr = function () {
      return Pr.Date.now();
    };
  function qr(t, e, r) {
    var i,
      n,
      o,
      s,
      a,
      c,
      l = 0,
      u = !1,
      f = !1,
      h = !0;
    if ("function" != typeof t) throw new TypeError(Rr);
    function d(e) {
      var r = i,
        o = n;
      return ((i = n = void 0), (l = e), (s = t.apply(o, r)));
    }
    function p(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
    }
    function v() {
      var t = Hr();
      if (p(t)) return g(t);
      a = setTimeout(
        v,
        (function (t) {
          var r = e - (t - c);
          return f ? Xr(r, o - (t - l)) : r;
        })(t),
      );
    }
    function g(t) {
      return ((a = void 0), h && i ? d(t) : ((i = n = void 0), s));
    }
    function b() {
      var t = Hr(),
        r = p(t);
      if (((i = arguments), (n = this), (c = t), r)) {
        if (void 0 === a)
          return (function (t) {
            return ((l = t), (a = setTimeout(v, e)), u ? d(t) : s);
          })(c);
        if (f) return ((a = setTimeout(v, e)), d(c));
      }
      return (void 0 === a && (a = setTimeout(v, e)), s);
    }
    return (
      (e = Yr(e) || 0),
      $r(r) &&
      ((u = !!r.leading),
        (o = (f = "maxWait" in r) ? Vr(Yr(r.maxWait) || 0, e) : o),
        (h = "trailing" in r ? !!r.trailing : h)),
      (b.cancel = function () {
        (void 0 !== a && clearTimeout(a), (l = 0), (i = c = n = a = void 0));
      }),
      (b.flush = function () {
        return void 0 === a ? s : g(Hr());
      }),
      b
    );
  }
  function $r(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function Yr(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            Fr.call(t) == Mr)
        );
      })(t)
    )
      return _r;
    if ($r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = $r(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Cr, "");
    var r = jr.test(t);
    return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : Wr.test(t) ? _r : +t;
  }
  var Gr = function (t, e, r) {
    var i = !0,
      n = !0;
    if ("function" != typeof t) throw new TypeError(Rr);
    return (
      $r(r) &&
      ((i = "leading" in r ? !!r.leading : i),
        (n = "trailing" in r ? !!r.trailing : n)),
      qr(t, e, { leading: i, maxWait: e, trailing: n })
    );
  },
    Ur = "Expected a function",
    Qr = NaN,
    Kr = "[object Symbol]",
    Jr = /^\s+|\s+$/g,
    Zr = /^[-+]0x[0-9a-f]+$/i,
    ti = /^0b[01]+$/i,
    ei = /^0o[0-7]+$/i,
    ri = parseInt,
    ii = "object" == typeof t && t && t.Object === Object && t,
    ni = "object" == typeof self && self && self.Object === Object && self,
    oi = ii || ni || Function("return this")(),
    si = Object.prototype.toString,
    ai = Math.max,
    ci = Math.min,
    li = function () {
      return oi.Date.now();
    };
  function ui(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function fi(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            si.call(t) == Kr)
        );
      })(t)
    )
      return Qr;
    if (ui(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = ui(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Jr, "");
    var r = ti.test(t);
    return r || ei.test(t) ? ri(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
  }
  var hi = function (t, e, r) {
    var i,
      n,
      o,
      s,
      a,
      c,
      l = 0,
      u = !1,
      f = !1,
      h = !0;
    if ("function" != typeof t) throw new TypeError(Ur);
    function d(e) {
      var r = i,
        o = n;
      return ((i = n = void 0), (l = e), (s = t.apply(o, r)));
    }
    function p(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
    }
    function v() {
      var t = li();
      if (p(t)) return g(t);
      a = setTimeout(
        v,
        (function (t) {
          var r = e - (t - c);
          return f ? ci(r, o - (t - l)) : r;
        })(t),
      );
    }
    function g(t) {
      return ((a = void 0), h && i ? d(t) : ((i = n = void 0), s));
    }
    function b() {
      var t = li(),
        r = p(t);
      if (((i = arguments), (n = this), (c = t), r)) {
        if (void 0 === a)
          return (function (t) {
            return ((l = t), (a = setTimeout(v, e)), u ? d(t) : s);
          })(c);
        if (f) return ((a = setTimeout(v, e)), d(c));
      }
      return (void 0 === a && (a = setTimeout(v, e)), s);
    }
    return (
      (e = fi(e) || 0),
      ui(r) &&
      ((u = !!r.leading),
        (o = (f = "maxWait" in r) ? ai(fi(r.maxWait) || 0, e) : o),
        (h = "trailing" in r ? !!r.trailing : h)),
      (b.cancel = function () {
        (void 0 !== a && clearTimeout(a), (l = 0), (i = c = n = a = void 0));
      }),
      (b.flush = function () {
        return void 0 === a ? s : g(li());
      }),
      b
    );
  },
    di = "Expected a function",
    pi = "__lodash_hash_undefined__",
    vi = "[object Function]",
    gi = "[object GeneratorFunction]",
    bi = /^\[object .+?Constructor\]$/,
    yi = "object" == typeof t && t && t.Object === Object && t,
    mi = "object" == typeof self && self && self.Object === Object && self,
    xi = yi || mi || Function("return this")();
  var Ei = Array.prototype,
    wi = Function.prototype,
    Si = Object.prototype,
    Oi = xi["__core-js_shared__"],
    ki = (function () {
      var t = /[^.]+$/.exec((Oi && Oi.keys && Oi.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    Ai = wi.toString,
    Ti = Si.hasOwnProperty,
    Li = Si.toString,
    zi = RegExp(
      "^" +
      Ai.call(Ti)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
    ),
    Ri = Ei.splice,
    _i = Di(xi, "Map"),
    Mi = Di(Object, "create");
  function Ci(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var i = t[e];
      this.set(i[0], i[1]);
    }
  }
  function Wi(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var i = t[e];
      this.set(i[0], i[1]);
    }
  }
  function ji(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var i = t[e];
      this.set(i[0], i[1]);
    }
  }
  function Ni(t, e) {
    for (var r, i, n = t.length; n--;)
      if ((r = t[n][0]) === (i = e) || (r != r && i != i)) return n;
    return -1;
  }
  function Ii(t) {
    return (
      !(!Fi(t) || ((e = t), ki && ki in e)) &&
      ((function (t) {
        var e = Fi(t) ? Li.call(t) : "";
        return e == vi || e == gi;
      })(t) ||
        (function (t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString)
            try {
              e = !!(t + "");
            } catch (t) { }
          return e;
        })(t)
        ? zi
        : bi
      ).test(
        (function (t) {
          if (null != t) {
            try {
              return Ai.call(t);
            } catch (t) { }
            try {
              return t + "";
            } catch (t) { }
          }
          return "";
        })(t),
      )
    );
    var e;
  }
  function Bi(t, e) {
    var r,
      i,
      n = t.__data__;
    return (
      "string" == (i = typeof (r = e)) ||
        "number" == i ||
        "symbol" == i ||
        "boolean" == i
        ? "__proto__" !== r
        : null === r
    )
      ? n["string" == typeof e ? "string" : "hash"]
      : n.map;
  }
  function Di(t, e) {
    var r = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Ii(r) ? r : void 0;
  }
  function Pi(t, e) {
    if ("function" != typeof t || (e && "function" != typeof e))
      throw new TypeError(di);
    var r = function () {
      var i = arguments,
        n = e ? e.apply(this, i) : i[0],
        o = r.cache;
      if (o.has(n)) return o.get(n);
      var s = t.apply(this, i);
      return ((r.cache = o.set(n, s)), s);
    };
    return ((r.cache = new (Pi.Cache || ji)()), r);
  }
  function Fi(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  ((Ci.prototype.clear = function () {
    this.__data__ = Mi ? Mi(null) : {};
  }),
    (Ci.prototype.delete = function (t) {
      return this.has(t) && delete this.__data__[t];
    }),
    (Ci.prototype.get = function (t) {
      var e = this.__data__;
      if (Mi) {
        var r = e[t];
        return r === pi ? void 0 : r;
      }
      return Ti.call(e, t) ? e[t] : void 0;
    }),
    (Ci.prototype.has = function (t) {
      var e = this.__data__;
      return Mi ? void 0 !== e[t] : Ti.call(e, t);
    }),
    (Ci.prototype.set = function (t, e) {
      return ((this.__data__[t] = Mi && void 0 === e ? pi : e), this);
    }),
    (Wi.prototype.clear = function () {
      this.__data__ = [];
    }),
    (Wi.prototype.delete = function (t) {
      var e = this.__data__,
        r = Ni(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : Ri.call(e, r, 1), !0);
    }),
    (Wi.prototype.get = function (t) {
      var e = this.__data__,
        r = Ni(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (Wi.prototype.has = function (t) {
      return Ni(this.__data__, t) > -1;
    }),
    (Wi.prototype.set = function (t, e) {
      var r = this.__data__,
        i = Ni(r, t);
      return (i < 0 ? r.push([t, e]) : (r[i][1] = e), this);
    }),
    (ji.prototype.clear = function () {
      this.__data__ = {
        hash: new Ci(),
        map: new (_i || Wi)(),
        string: new Ci(),
      };
    }),
    (ji.prototype.delete = function (t) {
      return Bi(this, t).delete(t);
    }),
    (ji.prototype.get = function (t) {
      return Bi(this, t).get(t);
    }),
    (ji.prototype.has = function (t) {
      return Bi(this, t).has(t);
    }),
    (ji.prototype.set = function (t, e) {
      return (Bi(this, t).set(t, e), this);
    }),
    (Pi.Cache = ji));
  var Vi,
    Xi = Pi,
    Hi = [],
    qi = "ResizeObserver loop completed with undelivered notifications.";
  !(function (t) {
    ((t.BORDER_BOX = "border-box"),
      (t.CONTENT_BOX = "content-box"),
      (t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"));
  })(Vi || (Vi = {}));
  var $i,
    Yi = function (t) {
      return Object.freeze(t);
    },
    Gi = function (t, e) {
      ((this.inlineSize = t), (this.blockSize = e), Yi(this));
    },
    Ui = (function () {
      function t(t, e, r, i) {
        return (
          (this.x = t),
          (this.y = e),
          (this.width = r),
          (this.height = i),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          Yi(this)
        );
      }
      return (
        (t.prototype.toJSON = function () {
          var t = this;
          return {
            x: t.x,
            y: t.y,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.width,
            height: t.height,
          };
        }),
        (t.fromRect = function (e) {
          return new t(e.x, e.y, e.width, e.height);
        }),
        t
      );
    })(),
    Qi = function (t) {
      return t instanceof SVGElement && "getBBox" in t;
    },
    Ki = function (t) {
      if (Qi(t)) {
        var e = t.getBBox(),
          r = e.width,
          i = e.height;
        return !r && !i;
      }
      var n = t,
        o = n.offsetWidth,
        s = n.offsetHeight;
      return !(o || s || t.getClientRects().length);
    },
    Ji = function (t) {
      var e, r;
      if (t instanceof Element) return !0;
      var i =
        null ===
          (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) ||
          void 0 === r
          ? void 0
          : r.defaultView;
      return !!(i && t instanceof i.Element);
    },
    Zi = "undefined" != typeof window ? window : {},
    tn = new WeakMap(),
    en = /auto|scroll/,
    rn = /^tb|vertical/,
    nn = /msie|trident/i.test(Zi.navigator && Zi.navigator.userAgent),
    on = function (t) {
      return parseFloat(t || "0");
    },
    sn = function (t, e, r) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === r && (r = !1),
        new Gi((r ? e : t) || 0, (r ? t : e) || 0)
      );
    },
    an = Yi({
      devicePixelContentBoxSize: sn(),
      borderBoxSize: sn(),
      contentBoxSize: sn(),
      contentRect: new Ui(0, 0, 0, 0),
    }),
    cn = function (t, e) {
      if ((void 0 === e && (e = !1), tn.has(t) && !e)) return tn.get(t);
      if (Ki(t)) return (tn.set(t, an), an);
      var r = getComputedStyle(t),
        i = Qi(t) && t.ownerSVGElement && t.getBBox(),
        n = !nn && "border-box" === r.boxSizing,
        o = rn.test(r.writingMode || ""),
        s = !i && en.test(r.overflowY || ""),
        a = !i && en.test(r.overflowX || ""),
        c = i ? 0 : on(r.paddingTop),
        l = i ? 0 : on(r.paddingRight),
        u = i ? 0 : on(r.paddingBottom),
        f = i ? 0 : on(r.paddingLeft),
        h = i ? 0 : on(r.borderTopWidth),
        d = i ? 0 : on(r.borderRightWidth),
        p = i ? 0 : on(r.borderBottomWidth),
        v = f + l,
        g = c + u,
        b = (i ? 0 : on(r.borderLeftWidth)) + d,
        y = h + p,
        m = a ? t.offsetHeight - y - t.clientHeight : 0,
        x = s ? t.offsetWidth - b - t.clientWidth : 0,
        E = n ? v + b : 0,
        w = n ? g + y : 0,
        S = i ? i.width : on(r.width) - E - x,
        O = i ? i.height : on(r.height) - w - m,
        k = S + v + x + b,
        A = O + g + m + y,
        T = Yi({
          devicePixelContentBoxSize: sn(
            Math.round(S * devicePixelRatio),
            Math.round(O * devicePixelRatio),
            o,
          ),
          borderBoxSize: sn(k, A, o),
          contentBoxSize: sn(S, O, o),
          contentRect: new Ui(f, c, S, O),
        });
      return (tn.set(t, T), T);
    },
    ln = function (t, e, r) {
      var i = cn(t, r),
        n = i.borderBoxSize,
        o = i.contentBoxSize,
        s = i.devicePixelContentBoxSize;
      switch (e) {
        case Vi.DEVICE_PIXEL_CONTENT_BOX:
          return s;
        case Vi.BORDER_BOX:
          return n;
        default:
          return o;
      }
    },
    un = function (t) {
      var e = cn(t);
      ((this.target = t),
        (this.contentRect = e.contentRect),
        (this.borderBoxSize = Yi([e.borderBoxSize])),
        (this.contentBoxSize = Yi([e.contentBoxSize])),
        (this.devicePixelContentBoxSize = Yi([e.devicePixelContentBoxSize])));
    },
    fn = function (t) {
      if (Ki(t)) return 1 / 0;
      for (var e = 0, r = t.parentNode; r;) ((e += 1), (r = r.parentNode));
      return e;
    },
    hn = function () {
      var t = 1 / 0,
        e = [];
      Hi.forEach(function (r) {
        if (0 !== r.activeTargets.length) {
          var i = [];
          (r.activeTargets.forEach(function (e) {
            var r = new un(e.target),
              n = fn(e.target);
            (i.push(r),
              (e.lastReportedSize = ln(e.target, e.observedBox)),
              n < t && (t = n));
          }),
            e.push(function () {
              r.callback.call(r.observer, i, r.observer);
            }),
            r.activeTargets.splice(0, r.activeTargets.length));
        }
      });
      for (var r = 0, i = e; r < i.length; r++) {
        (0, i[r])();
      }
      return t;
    },
    dn = function (t) {
      Hi.forEach(function (e) {
        (e.activeTargets.splice(0, e.activeTargets.length),
          e.skippedTargets.splice(0, e.skippedTargets.length),
          e.observationTargets.forEach(function (r) {
            r.isActive() &&
              (fn(r.target) > t
                ? e.activeTargets.push(r)
                : e.skippedTargets.push(r));
          }));
      });
    },
    pn = function () {
      var t,
        e = 0;
      for (
        dn(e);
        Hi.some(function (t) {
          return t.activeTargets.length > 0;
        });

      )
        ((e = hn()), dn(e));
      return (
        Hi.some(function (t) {
          return t.skippedTargets.length > 0;
        }) &&
        ("function" == typeof ErrorEvent
          ? (t = new ErrorEvent("error", { message: qi }))
          : ((t = document.createEvent("Event")).initEvent("error", !1, !1),
            (t.message = qi)),
          window.dispatchEvent(t)),
        e > 0
      );
    },
    vn = [],
    gn = function (t) {
      if (!$i) {
        var e = 0,
          r = document.createTextNode("");
        (new MutationObserver(function () {
          return vn.splice(0).forEach(function (t) {
            return t();
          });
        }).observe(r, { characterData: !0 }),
          ($i = function () {
            r.textContent = "" + (e ? e-- : e++);
          }));
      }
      (vn.push(t), $i());
    },
    bn = 0,
    yn = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    mn = [
      "resize",
      "load",
      "transitionend",
      "animationend",
      "animationstart",
      "animationiteration",
      "keyup",
      "keydown",
      "mouseup",
      "mousedown",
      "mouseover",
      "mouseout",
      "blur",
      "focus",
    ],
    xn = function (t) {
      return (void 0 === t && (t = 0), Date.now() + t);
    },
    En = !1,
    wn = new ((function () {
      function t() {
        var t = this;
        ((this.stopped = !0),
          (this.listener = function () {
            return t.schedule();
          }));
      }
      return (
        (t.prototype.run = function (t) {
          var e = this;
          if ((void 0 === t && (t = 250), !En)) {
            En = !0;
            var r,
              i = xn(t);
            ((r = function () {
              var r = !1;
              try {
                r = pn();
              } finally {
                if (((En = !1), (t = i - xn()), !bn)) return;
                r ? e.run(1e3) : t > 0 ? e.run(t) : e.start();
              }
            }),
              gn(function () {
                requestAnimationFrame(r);
              }));
          }
        }),
        (t.prototype.schedule = function () {
          (this.stop(), this.run());
        }),
        (t.prototype.observe = function () {
          var t = this,
            e = function () {
              return t.observer && t.observer.observe(document.body, yn);
            };
          document.body ? e() : Zi.addEventListener("DOMContentLoaded", e);
        }),
        (t.prototype.start = function () {
          var t = this;
          this.stopped &&
            ((this.stopped = !1),
              (this.observer = new MutationObserver(this.listener)),
              this.observe(),
              mn.forEach(function (e) {
                return Zi.addEventListener(e, t.listener, !0);
              }));
        }),
        (t.prototype.stop = function () {
          var t = this;
          this.stopped ||
            (this.observer && this.observer.disconnect(),
              mn.forEach(function (e) {
                return Zi.removeEventListener(e, t.listener, !0);
              }),
              (this.stopped = !0));
        }),
        t
      );
    })())(),
    Sn = function (t) {
      (!bn && t > 0 && wn.start(), !(bn += t) && wn.stop());
    },
    On = (function () {
      function t(t, e) {
        ((this.target = t),
          (this.observedBox = e || Vi.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
      }
      return (
        (t.prototype.isActive = function () {
          var t,
            e = ln(this.target, this.observedBox, !0);
          return (
            (t = this.target),
            Qi(t) ||
            (function (t) {
              switch (t.tagName) {
                case "INPUT":
                  if ("image" !== t.type) break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                  return !0;
              }
              return !1;
            })(t) ||
            "inline" !== getComputedStyle(t).display ||
            (this.lastReportedSize = e),
            this.lastReportedSize.inlineSize !== e.inlineSize ||
            this.lastReportedSize.blockSize !== e.blockSize
          );
        }),
        t
      );
    })(),
    kn = function (t, e) {
      ((this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = e));
    },
    An = new WeakMap(),
    Tn = function (t, e) {
      for (var r = 0; r < t.length; r += 1) if (t[r].target === e) return r;
      return -1;
    },
    Ln = (function () {
      function t() { }
      return (
        (t.connect = function (t, e) {
          var r = new kn(t, e);
          An.set(t, r);
        }),
        (t.observe = function (t, e, r) {
          var i = An.get(t),
            n = 0 === i.observationTargets.length;
          Tn(i.observationTargets, e) < 0 &&
            (n && Hi.push(i),
              i.observationTargets.push(new On(e, r && r.box)),
              Sn(1),
              wn.schedule());
        }),
        (t.unobserve = function (t, e) {
          var r = An.get(t),
            i = Tn(r.observationTargets, e),
            n = 1 === r.observationTargets.length;
          i >= 0 &&
            (n && Hi.splice(Hi.indexOf(r), 1),
              r.observationTargets.splice(i, 1),
              Sn(-1));
        }),
        (t.disconnect = function (t) {
          var e = this,
            r = An.get(t);
          (r.observationTargets.slice().forEach(function (r) {
            return e.unobserve(t, r.target);
          }),
            r.activeTargets.splice(0, r.activeTargets.length));
        }),
        t
      );
    })(),
    zn = (function () {
      function t(t) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
          );
        if ("function" != typeof t)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
          );
        Ln.connect(this, t);
      }
      return (
        (t.prototype.observe = function (t, e) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
            );
          if (!Ji(t))
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
            );
          Ln.observe(this, t, e);
        }),
        (t.prototype.unobserve = function (t) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
            );
          if (!Ji(t))
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
            );
          Ln.unobserve(this, t);
        }),
        (t.prototype.disconnect = function () {
          Ln.disconnect(this);
        }),
        (t.toString = function () {
          return "function ResizeObserver () { [polyfill code] }";
        }),
        t
      );
    })(),
    Rn = function (t) {
      return function (e, r, i, n) {
        Tt(r);
        var o = zt(e),
          s = b(o),
          a = st(o.length),
          c = t ? a - 1 : 0,
          l = t ? -1 : 1;
        if (i < 2)
          for (; ;) {
            if (c in s) {
              ((n = s[c]), (c += l));
              break;
            }
            if (((c += l), t ? c < 0 : a <= c))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; t ? c >= 0 : a > c; c += l) c in s && (n = r(n, s[c], c, o));
        return n;
      };
    },
    _n = { left: Rn(!1), right: Rn(!0) }.left;
  At(
    { target: "Array", proto: !0, forced: Pt("reduce") },
    {
      reduce: function (t) {
        return _n(
          this,
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0,
        );
      },
    },
  );
  var Mn = M.f,
    Cn = Function.prototype,
    Wn = Cn.toString,
    jn = /^\s*function ([^ (]*)/;
  !l ||
    "name" in Cn ||
    Mn(Cn, "name", {
      configurable: !0,
      get: function () {
        try {
          return Wn.call(this).match(jn)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var Nn,
    In,
    Bn = function () {
      var t = R(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    },
    Dn = RegExp.prototype.exec,
    Pn = String.prototype.replace,
    Fn = Dn,
    Vn =
      ((Nn = /a/),
        (In = /b*/g),
        Dn.call(Nn, "a"),
        Dn.call(In, "a"),
        0 !== Nn.lastIndex || 0 !== In.lastIndex),
    Xn = void 0 !== /()??/.exec("")[1];
  (Vn || Xn) &&
    (Fn = function (t) {
      var e,
        r,
        i,
        n,
        o = this;
      return (
        Xn && (r = new RegExp("^" + o.source + "$(?!\\s)", Bn.call(o))),
        Vn && (e = o.lastIndex),
        (i = Dn.call(o, t)),
        Vn && i && (o.lastIndex = o.global ? i.index + i[0].length : e),
        Xn &&
        i &&
        i.length > 1 &&
        Pn.call(i[0], r, function () {
          for (n = 1; n < arguments.length - 2; n++)
            void 0 === arguments[n] && (i[n] = void 0);
        }),
        i
      );
    });
  var Hn = Fn;
  At({ target: "RegExp", proto: !0, forced: /./.exec !== Hn }, { exec: Hn });
  var qn = Wt("species"),
    $n = !c(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return ((t.groups = { a: "7" }), t);
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    Yn = !c(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(t);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    }),
    Gn = function (t, e, r, i) {
      var n = Wt(t),
        o = !c(function () {
          var e = {};
          return (
            (e[n] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        s =
          o &&
          !c(function () {
            var e = !1,
              r = /a/;
            return (
              (r.exec = function () {
                return ((e = !0), null);
              }),
              "split" === t &&
              ((r.constructor = {}),
                (r.constructor[qn] = function () {
                  return r;
                })),
              r[n](""),
              !e
            );
          });
      if (!o || !s || ("replace" === t && !$n) || ("split" === t && !Yn)) {
        var a = /./[n],
          l = r(n, ""[t], function (t, e, r, i, n) {
            return e.exec === Hn
              ? o && !n
                ? { done: !0, value: a.call(e, r, i) }
                : { done: !0, value: t.call(r, e, i) }
              : { done: !1 };
          }),
          u = l[0],
          f = l[1];
        (J(String.prototype, t, u),
          J(
            RegExp.prototype,
            n,
            2 == e
              ? function (t, e) {
                return f.call(t, this, e);
              }
              : function (t) {
                return f.call(t, this);
              },
          ),
          i && C(RegExp.prototype[n], "sham", !0));
      }
    },
    Un = Ue.charAt,
    Qn = function (t, e, r) {
      return e + (r ? Un(t, e).length : 1);
    },
    Kn = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var i = r.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null",
          );
        return i;
      }
      if ("RegExp" !== v(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Hn.call(t, e);
    };
  Gn("match", 1, function (t, e, r) {
    return [
      function (e) {
        var r = y(this),
          i = null == e ? void 0 : e[t];
        return void 0 !== i ? i.call(e, r) : new RegExp(e)[t](String(r));
      },
      function (t) {
        var i = r(e, t, this);
        if (i.done) return i.value;
        var n = R(t),
          o = String(this);
        if (!n.global) return Kn(n, o);
        var s = n.unicode;
        n.lastIndex = 0;
        for (var a, c = [], l = 0; null !== (a = Kn(n, o));) {
          var u = String(a[0]);
          ((c[l] = u),
            "" === u && (n.lastIndex = Qn(o, st(n.lastIndex), s)),
            l++);
        }
        return 0 === l ? null : c;
      },
    ];
  });
  var Jn = Math.max,
    Zn = Math.min,
    to = Math.floor,
    eo = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    ro = /\$([$&'`]|\d\d?)/g;
  Gn("replace", 2, function (t, e, r) {
    return [
      function (r, i) {
        var n = y(this),
          o = null == r ? void 0 : r[t];
        return void 0 !== o ? o.call(r, n, i) : e.call(String(n), r, i);
      },
      function (t, n) {
        var o = r(e, t, this, n);
        if (o.done) return o.value;
        var s = R(t),
          a = String(this),
          c = "function" == typeof n;
        c || (n = String(n));
        var l = s.global;
        if (l) {
          var u = s.unicode;
          s.lastIndex = 0;
        }
        for (var f = []; ;) {
          var h = Kn(s, a);
          if (null === h) break;
          if ((f.push(h), !l)) break;
          "" === String(h[0]) && (s.lastIndex = Qn(a, st(s.lastIndex), u));
        }
        for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
          h = f[g];
          for (
            var b = String(h[0]),
            y = Jn(Zn(nt(h.index), a.length), 0),
            m = [],
            x = 1;
            x < h.length;
            x++
          )
            m.push(void 0 === (d = h[x]) ? d : String(d));
          var E = h.groups;
          if (c) {
            var w = [b].concat(m, y, a);
            void 0 !== E && w.push(E);
            var S = String(n.apply(void 0, w));
          } else S = i(b, a, y, m, E, n);
          y >= v && ((p += a.slice(v, y) + S), (v = y + b.length));
        }
        return p + a.slice(v);
      },
    ];
    function i(t, r, i, n, o, s) {
      var a = i + t.length,
        c = n.length,
        l = ro;
      return (
        void 0 !== o && ((o = zt(o)), (l = eo)),
        e.call(s, l, function (e, s) {
          var l;
          switch (s.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return r.slice(0, i);
            case "'":
              return r.slice(a);
            case "<":
              l = o[s.slice(1, -1)];
              break;
            default:
              var u = +s;
              if (0 === u) return e;
              if (u > c) {
                var f = to(u / 10);
                return 0 === f
                  ? e
                  : f <= c
                    ? void 0 === n[f - 1]
                      ? s.charAt(1)
                      : n[f - 1] + s.charAt(1)
                    : e;
              }
              l = n[u - 1];
          }
          return void 0 === l ? "" : l;
        })
      );
    }
  });
  var io = function (t) {
    return Array.prototype.reduce.call(
      t,
      function (t, e) {
        var r = e.name.match(/data-simplebar-(.+)/);
        if (r) {
          var i = r[1].replace(/\W+(.)/g, function (t, e) {
            return e.toUpperCase();
          });
          switch (e.value) {
            case "true":
              t[i] = !0;
              break;
            case "false":
              t[i] = !1;
              break;
            case void 0:
              t[i] = !0;
              break;
            default:
              t[i] = e.value;
          }
        }
        return t;
      },
      {},
    );
  };
  function no(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView
      ? t.ownerDocument.defaultView
      : window;
  }
  function oo(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
  var so = null,
    ao = null;
  function co(t) {
    if (null === so) {
      var e = oo(t);
      if (void 0 === e) return (so = 0);
      var r = e.body,
        i = e.createElement("div");
      (i.classList.add("simplebar-hide-scrollbar"), r.appendChild(i));
      var n = i.getBoundingClientRect().right;
      (r.removeChild(i), (so = n));
    }
    return so;
  }
  Yt &&
    window.addEventListener("resize", function () {
      ao !== window.devicePixelRatio &&
        ((ao = window.devicePixelRatio), (so = null));
    });
  var lo = (function () {
    function t(e, r) {
      var i = this;
      ((this.onScroll = function () {
        var t = no(i.el);
        (i.scrollXTicking ||
          (t.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
          i.scrollYTicking ||
          (t.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0)));
      }),
        (this.scrollX = function () {
          (i.axis.x.isOverflowing &&
            (i.showScrollbar("x"), i.positionScrollbar("x")),
            (i.scrollXTicking = !1));
        }),
        (this.scrollY = function () {
          (i.axis.y.isOverflowing &&
            (i.showScrollbar("y"), i.positionScrollbar("y")),
            (i.scrollYTicking = !1));
        }),
        (this.onMouseEnter = function () {
          (i.showScrollbar("x"), i.showScrollbar("y"));
        }),
        (this.onMouseMove = function (t) {
          ((i.mouseX = t.clientX),
            (i.mouseY = t.clientY),
            (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
            i.onMouseMoveForAxis("x"),
            (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
            i.onMouseMoveForAxis("y"));
        }),
        (this.onMouseLeave = function () {
          (i.onMouseMove.cancel(),
            (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
            i.onMouseLeaveForAxis("x"),
            (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
            i.onMouseLeaveForAxis("y"),
            (i.mouseX = -1),
            (i.mouseY = -1));
        }),
        (this.onWindowResize = function () {
          ((i.scrollbarWidth = i.getScrollbarWidth()), i.hideNativeScrollbar());
        }),
        (this.hideScrollbars = function () {
          ((i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
            (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
            i.isWithinBounds(i.axis.y.track.rect) ||
            (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
              (i.axis.y.isVisible = !1)),
            i.isWithinBounds(i.axis.x.track.rect) ||
            (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
              (i.axis.x.isVisible = !1)));
        }),
        (this.onPointerEvent = function (t) {
          var e, r;
          ((i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
            (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
            (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
            (e = i.isWithinBounds(i.axis.x.track.rect)),
            (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
            (r = i.isWithinBounds(i.axis.y.track.rect)),
            (e || r) &&
            (t.preventDefault(),
              t.stopPropagation(),
              "mousedown" === t.type &&
              (e &&
                ((i.axis.x.scrollbar.rect =
                  i.axis.x.scrollbar.el.getBoundingClientRect()),
                  i.isWithinBounds(i.axis.x.scrollbar.rect)
                    ? i.onDragStart(t, "x")
                    : i.onTrackClick(t, "x")),
                r &&
                ((i.axis.y.scrollbar.rect =
                  i.axis.y.scrollbar.el.getBoundingClientRect()),
                  i.isWithinBounds(i.axis.y.scrollbar.rect)
                    ? i.onDragStart(t, "y")
                    : i.onTrackClick(t, "y")))));
        }),
        (this.drag = function (e) {
          var r = i.axis[i.draggedAxis].track,
            n = r.rect[i.axis[i.draggedAxis].sizeAttr],
            o = i.axis[i.draggedAxis].scrollbar,
            s = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
            a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
          (e.preventDefault(), e.stopPropagation());
          var c =
            ((("y" === i.draggedAxis ? e.pageY : e.pageX) -
              r.rect[i.axis[i.draggedAxis].offsetAttr] -
              i.axis[i.draggedAxis].dragOffset) /
              (n - o.size)) *
            (s - a);
          ("x" === i.draggedAxis &&
            ((c =
              i.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                ? c - (n + o.size)
                : c),
              (c = i.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
            (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = c));
        }),
        (this.onEndDrag = function (t) {
          var e = oo(i.el),
            r = no(i.el);
          (t.preventDefault(),
            t.stopPropagation(),
            i.el.classList.remove(i.classNames.dragging),
            e.removeEventListener("mousemove", i.drag, !0),
            e.removeEventListener("mouseup", i.onEndDrag, !0),
            (i.removePreventClickId = r.setTimeout(function () {
              (e.removeEventListener("click", i.preventClick, !0),
                e.removeEventListener("dblclick", i.preventClick, !0),
                (i.removePreventClickId = null));
            })));
        }),
        (this.preventClick = function (t) {
          (t.preventDefault(), t.stopPropagation());
        }),
        (this.el = e),
        (this.minScrollbarWidth = 20),
        (this.options = Object.assign({}, t.defaultOptions, {}, r)),
        (this.classNames = Object.assign(
          {},
          t.defaultOptions.classNames,
          {},
          this.options.classNames,
        )),
        (this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
        }),
        (this.removePreventClickId = null),
        t.instances.has(this.el) ||
        ((this.recalculate = Gr(this.recalculate.bind(this), 64)),
          (this.onMouseMove = Gr(this.onMouseMove.bind(this), 64)),
          (this.hideScrollbars = hi(
            this.hideScrollbars.bind(this),
            this.options.timeout,
          )),
          (this.onWindowResize = hi(this.onWindowResize.bind(this), 64, {
            leading: !0,
          })),
          (t.getRtlHelpers = Xi(t.getRtlHelpers)),
          this.init()));
    }
    ((t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML =
        '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r = e.firstElementChild;
      document.body.appendChild(r);
      var i = r.firstElementChild;
      r.scrollLeft = 0;
      var n = t.getOffset(r),
        o = t.getOffset(i);
      r.scrollLeft = 999;
      var s = t.getOffset(i);
      return {
        isRtlScrollingInverted: n.left !== o.left && o.left - s.left != 0,
        isRtlScrollbarInverted: n.left !== o.left,
      };
    }),
      (t.getOffset = function (t) {
        var e = t.getBoundingClientRect(),
          r = oo(t),
          i = no(t);
        return {
          top: e.top + (i.pageYOffset || r.documentElement.scrollTop),
          left: e.left + (i.pageXOffset || r.documentElement.scrollLeft),
        };
      }));
    var e = t.prototype;
    return (
      (e.init = function () {
        (t.instances.set(this.el, this),
          Yt &&
          (this.initDOM(),
            this.setAccessibilityAttributes(),
            (this.scrollbarWidth = this.getScrollbarWidth()),
            this.recalculate(),
            this.initListeners()));
      }),
      (e.initDOM = function () {
        var t = this;
        if (
          Array.prototype.filter.call(this.el.children, function (e) {
            return e.classList.contains(t.classNames.wrapper);
          }).length
        )
          ((this.wrapperEl = this.el.querySelector(
            "." + this.classNames.wrapper,
          )),
            (this.contentWrapperEl =
              this.options.scrollableNode ||
              this.el.querySelector("." + this.classNames.contentWrapper)),
            (this.contentEl =
              this.options.contentNode ||
              this.el.querySelector("." + this.classNames.contentEl)),
            (this.offsetEl = this.el.querySelector(
              "." + this.classNames.offset,
            )),
            (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
            (this.placeholderEl = this.findChild(
              this.wrapperEl,
              "." + this.classNames.placeholder,
            )),
            (this.heightAutoObserverWrapperEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverWrapperEl,
            )),
            (this.heightAutoObserverEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverEl,
            )),
            (this.axis.x.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.horizontal,
            )),
            (this.axis.y.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.vertical,
            )));
        else {
          for (
            this.wrapperEl = document.createElement("div"),
            this.contentWrapperEl = document.createElement("div"),
            this.offsetEl = document.createElement("div"),
            this.maskEl = document.createElement("div"),
            this.contentEl = document.createElement("div"),
            this.placeholderEl = document.createElement("div"),
            this.heightAutoObserverWrapperEl = document.createElement("div"),
            this.heightAutoObserverEl = document.createElement("div"),
            this.wrapperEl.classList.add(this.classNames.wrapper),
            this.contentWrapperEl.classList.add(
              this.classNames.contentWrapper,
            ),
            this.offsetEl.classList.add(this.classNames.offset),
            this.maskEl.classList.add(this.classNames.mask),
            this.contentEl.classList.add(this.classNames.contentEl),
            this.placeholderEl.classList.add(this.classNames.placeholder),
            this.heightAutoObserverWrapperEl.classList.add(
              this.classNames.heightAutoObserverWrapperEl,
            ),
            this.heightAutoObserverEl.classList.add(
              this.classNames.heightAutoObserverEl,
            );
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          (this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl,
            ),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl));
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var e = document.createElement("div"),
            r = document.createElement("div");
          (e.classList.add(this.classNames.track),
            r.classList.add(this.classNames.scrollbar),
            e.appendChild(r),
            (this.axis.x.track.el = e.cloneNode(!0)),
            this.axis.x.track.el.classList.add(this.classNames.horizontal),
            (this.axis.y.track.el = e.cloneNode(!0)),
            this.axis.y.track.el.classList.add(this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el));
        }
        ((this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
          "." + this.classNames.scrollbar,
        )),
          (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
            "." + this.classNames.scrollbar,
          )),
          this.options.autoHide ||
          (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
          this.el.setAttribute("data-simplebar", "init"));
      }),
      (e.setAccessibilityAttributes = function () {
        var t = this.options.ariaLabel || "scrollable content";
        (this.contentWrapperEl.setAttribute("tabindex", "0"),
          this.contentWrapperEl.setAttribute("role", "region"),
          this.contentWrapperEl.setAttribute("aria-label", t));
      }),
      (e.initListeners = function () {
        var t = this,
          e = no(this.el);
        (this.options.autoHide &&
          this.el.addEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.addEventListener("mousemove", this.onMouseMove),
          this.el.addEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl.addEventListener("scroll", this.onScroll),
          e.addEventListener("resize", this.onWindowResize));
        var r = !1,
          i = e.ResizeObserver || zn;
        ((this.resizeObserver = new i(function () {
          r && t.recalculate();
        })),
          this.resizeObserver.observe(this.el),
          this.resizeObserver.observe(this.contentEl),
          e.requestAnimationFrame(function () {
            r = !0;
          }),
          (this.mutationObserver = new e.MutationObserver(this.recalculate)),
          this.mutationObserver.observe(this.contentEl, {
            childList: !0,
            subtree: !0,
            characterData: !0,
          }));
      }),
      (e.recalculate = function () {
        var t = no(this.el);
        ((this.elStyles = t.getComputedStyle(this.el)),
          (this.isRtl = "rtl" === this.elStyles.direction));
        var e = this.heightAutoObserverEl.offsetHeight <= 1,
          r = this.heightAutoObserverEl.offsetWidth <= 1,
          i = this.contentEl.offsetWidth,
          n = this.contentWrapperEl.offsetWidth,
          o = this.elStyles.overflowX,
          s = this.elStyles.overflowY;
        ((this.contentEl.style.padding =
          this.elStyles.paddingTop +
          " " +
          this.elStyles.paddingRight +
          " " +
          this.elStyles.paddingBottom +
          " " +
          this.elStyles.paddingLeft),
          (this.wrapperEl.style.margin =
            "-" +
            this.elStyles.paddingTop +
            " -" +
            this.elStyles.paddingRight +
            " -" +
            this.elStyles.paddingBottom +
            " -" +
            this.elStyles.paddingLeft));
        var a = this.contentEl.scrollHeight,
          c = this.contentEl.scrollWidth;
        ((this.contentWrapperEl.style.height = e ? "auto" : "100%"),
          (this.placeholderEl.style.width = r ? i + "px" : "auto"),
          (this.placeholderEl.style.height = a + "px"));
        var l = this.contentWrapperEl.offsetHeight;
        ((this.axis.x.isOverflowing = c > i),
          (this.axis.y.isOverflowing = a > l),
          (this.axis.x.isOverflowing =
            "hidden" !== o && this.axis.x.isOverflowing),
          (this.axis.y.isOverflowing =
            "hidden" !== s && this.axis.y.isOverflowing),
          (this.axis.x.forceVisible =
            "x" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          (this.axis.y.forceVisible =
            "y" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          this.hideNativeScrollbar());
        var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
          f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        ((this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > n - f),
          (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
          (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
          (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
          (this.axis.x.scrollbar.el.style.width =
            this.axis.x.scrollbar.size + "px"),
          (this.axis.y.scrollbar.el.style.height =
            this.axis.y.scrollbar.size + "px"),
          this.positionScrollbar("x"),
          this.positionScrollbar("y"),
          this.toggleTrackVisibility("x"),
          this.toggleTrackVisibility("y"));
      }),
      (e.getScrollbarSize = function (t) {
        if ((void 0 === t && (t = "y"), !this.axis[t].isOverflowing)) return 0;
        var e,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
          n = i / r;
        return (
          (e = Math.max(~~(n * i), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize &&
          (e = Math.min(e, this.options.scrollbarMaxSize)),
          e
        );
      }),
      (e.positionScrollbar = function (e) {
        if ((void 0 === e && (e = "y"), this.axis[e].isOverflowing)) {
          var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            n = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            o = this.axis[e].scrollbar,
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a =
              (s =
                "x" === e &&
                  this.isRtl &&
                  t.getRtlHelpers().isRtlScrollingInverted
                  ? -s
                  : s) /
              (r - n),
            c = ~~((i - o.size) * a);
          ((c =
            "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
              ? c + (i - o.size)
              : c),
            (o.el.style.transform =
              "x" === e
                ? "translate3d(" + c + "px, 0, 0)"
                : "translate3d(0, " + c + "px, 0)"));
        }
      }),
      (e.toggleTrackVisibility = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].track.el,
          r = this.axis[t].scrollbar.el;
        (this.axis[t].isOverflowing || this.axis[t].forceVisible
          ? ((e.style.visibility = "visible"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
          : ((e.style.visibility = "hidden"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
              "hidden")),
          this.axis[t].isOverflowing
            ? (r.style.display = "block")
            : (r.style.display = "none"));
      }),
      (e.hideNativeScrollbar = function () {
        ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
          this.axis.y.isOverflowing || this.axis.y.forceVisible
            ? "-" + this.scrollbarWidth + "px"
            : 0),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? "-" + this.scrollbarWidth + "px"
              : 0));
      }),
      (e.onMouseMoveForAxis = function (t) {
        (void 0 === t && (t = "y"),
          (this.axis[t].track.rect =
            this.axis[t].track.el.getBoundingClientRect()),
          (this.axis[t].scrollbar.rect =
            this.axis[t].scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(this.axis[t].scrollbar.rect)
            ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
            : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
          this.isWithinBounds(this.axis[t].track.rect)
            ? (this.showScrollbar(t),
              this.axis[t].track.el.classList.add(this.classNames.hover))
            : this.axis[t].track.el.classList.remove(this.classNames.hover));
      }),
      (e.onMouseLeaveForAxis = function (t) {
        (void 0 === t && (t = "y"),
          this.axis[t].track.el.classList.remove(this.classNames.hover),
          this.axis[t].scrollbar.el.classList.remove(this.classNames.hover));
      }),
      (e.showScrollbar = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].scrollbar.el;
        (this.axis[t].isVisible ||
          (e.classList.add(this.classNames.visible),
            (this.axis[t].isVisible = !0)),
          this.options.autoHide && this.hideScrollbars());
      }),
      (e.onDragStart = function (t, e) {
        void 0 === e && (e = "y");
        var r = oo(this.el),
          i = no(this.el),
          n = this.axis[e].scrollbar,
          o = "y" === e ? t.pageY : t.pageX;
        ((this.axis[e].dragOffset = o - n.rect[this.axis[e].offsetAttr]),
          (this.draggedAxis = e),
          this.el.classList.add(this.classNames.dragging),
          r.addEventListener("mousemove", this.drag, !0),
          r.addEventListener("mouseup", this.onEndDrag, !0),
          null === this.removePreventClickId
            ? (r.addEventListener("click", this.preventClick, !0),
              r.addEventListener("dblclick", this.preventClick, !0))
            : (i.clearTimeout(this.removePreventClickId),
              (this.removePreventClickId = null)));
      }),
      (e.onTrackClick = function (t, e) {
        var r = this;
        if ((void 0 === e && (e = "y"), this.options.clickOnTrack)) {
          var i = no(this.el);
          this.axis[e].scrollbar.rect =
            this.axis[e].scrollbar.el.getBoundingClientRect();
          var n = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
            o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a = ("y" === e ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
            c = -1 === a ? s - o : s + o;
          !(function t() {
            var n, o;
            -1 === a
              ? s > c &&
              ((s -= r.options.clickOnTrackSpeed),
                r.contentWrapperEl.scrollTo(
                  (((n = {})[r.axis[e].offsetAttr] = s), n),
                ),
                i.requestAnimationFrame(t))
              : s < c &&
              ((s += r.options.clickOnTrackSpeed),
                r.contentWrapperEl.scrollTo(
                  (((o = {})[r.axis[e].offsetAttr] = s), o),
                ),
                i.requestAnimationFrame(t));
          })();
        }
      }),
      (e.getContentElement = function () {
        return this.contentEl;
      }),
      (e.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (e.getScrollbarWidth = function () {
        try {
          return "none" ===
            getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
              .display ||
            "scrollbarWidth" in document.documentElement.style ||
            "-ms-overflow-style" in document.documentElement.style
            ? 0
            : co(this.el);
        } catch (t) {
          return co(this.el);
        }
      }),
      (e.removeListeners = function () {
        var t = this,
          e = no(this.el);
        (this.options.autoHide &&
          this.el.removeEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.removeEventListener("mousemove", this.onMouseMove),
          this.el.removeEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl &&
          this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
          e.removeEventListener("resize", this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver && this.resizeObserver.disconnect(),
          this.recalculate.cancel(),
          this.onMouseMove.cancel(),
          this.hideScrollbars.cancel(),
          this.onWindowResize.cancel());
      }),
      (e.unMount = function () {
        (this.removeListeners(), t.instances.delete(this.el));
      }),
      (e.isWithinBounds = function (t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (e.findChild = function (t, e) {
        var r =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (t) {
          return r.call(t, e);
        })[0];
      }),
      t
    );
  })();
  return (
    (lo.defaultOptions = {
      autoHide: !0,
      forceVisible: !1,
      clickOnTrack: !0,
      clickOnTrackSpeed: 40,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      timeout: 1e3,
    }),
    (lo.instances = new WeakMap()),
    (lo.initDOMLoadedElements = function () {
      (document.removeEventListener(
        "DOMContentLoaded",
        this.initDOMLoadedElements,
      ),
        window.removeEventListener("load", this.initDOMLoadedElements),
        Array.prototype.forEach.call(
          document.querySelectorAll("[data-simplebar]"),
          function (t) {
            "init" === t.getAttribute("data-simplebar") ||
              lo.instances.has(t) ||
              new lo(t, io(t.attributes));
          },
        ));
    }),
    (lo.removeObserver = function () {
      this.globalObserver.disconnect();
    }),
    (lo.initHtmlApi = function () {
      ((this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
        "undefined" != typeof MutationObserver &&
        ((this.globalObserver = new MutationObserver(lo.handleMutations)),
          this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0,
          })),
        "complete" === document.readyState ||
          ("loading" !== document.readyState &&
            !document.documentElement.doScroll)
          ? window.setTimeout(this.initDOMLoadedElements)
          : (document.addEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements,
          ),
            window.addEventListener("load", this.initDOMLoadedElements)));
    }),
    (lo.handleMutations = function (t) {
      t.forEach(function (t) {
        (Array.prototype.forEach.call(t.addedNodes, function (t) {
          1 === t.nodeType &&
            (t.hasAttribute("data-simplebar")
              ? !lo.instances.has(t) &&
              document.documentElement.contains(t) &&
              new lo(t, io(t.attributes))
              : Array.prototype.forEach.call(
                t.querySelectorAll("[data-simplebar]"),
                function (t) {
                  "init" !== t.getAttribute("data-simplebar") &&
                    !lo.instances.has(t) &&
                    document.documentElement.contains(t) &&
                    new lo(t, io(t.attributes));
                },
              ));
        }),
          Array.prototype.forEach.call(t.removedNodes, function (t) {
            1 === t.nodeType &&
              ("init" === t.getAttribute("data-simplebar")
                ? lo.instances.has(t) &&
                !document.documentElement.contains(t) &&
                lo.instances.get(t).unMount()
                : Array.prototype.forEach.call(
                  t.querySelectorAll('[data-simplebar="init"]'),
                  function (t) {
                    lo.instances.has(t) &&
                      !document.documentElement.contains(t) &&
                      lo.instances.get(t).unMount();
                  },
                ));
          }));
      });
    }),
    (lo.getOptions = io),
    Yt && lo.initHtmlApi(),
    lo
  );
});

$(function () {
  $(window).scroll(function () {
    var elem = $(".js-scroll-effect");
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > elemOffset - wh + wh / 6) {
        $(this).addClass("is-animated");
      }
    });

    var elem = $(".js-scroll-effect-icon");
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > elemOffset - wh + wh / 6) {
        $(this).addClass("is-animated");
      } else {
        $(this).removeClass("is-animated");
      }
    });
  });
});

$(window).on("load", function () {


  var swiper = new Swiper("#mainslide", {
    loop: true,
    loopedSlides: $("#mainslide .swiper-slide").not(".swiper-slide-duplicate")
      .length,
    //allowTouchMove: false,

    slidesPerView: "auto",
    initialSlide: 0,

    pagination: {
      el: "#mainslide .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#mainslide .swiper-button-next",
      prevEl: "#mainslide .swiper-button-prev",
    },
    breakpoints: {
      768: {},
    },
    on: {
      init: function () {
        $(".pagination-number-total").text(
          $("#mainslide .swiper-slide").not(".swiper-slide-duplicate").length,
        );
      },
      slideChangeTransitionStart: function () {
        var num = $(".swiper-slide-active").data("swiper-slide-index");
        $(".pagination-number-current").text(num + 1);
      },
    },
  });

  const modal = document.getElementById("modal");
  const openModalBtns = document.querySelectorAll(".modalOpen");
  const closeModalBtns = document.querySelectorAll(".modalClose");

  // Swiper
  const swiper2 = new Swiper("#modalInSlider", {
    loop: true,
    loopedSlides: $("#modalInSlider .swiper-slide").not(
      ".swiper-slide-duplicate",
    ).length,
    slidesPerView: 1,
    navigation: {
      nextEl: ".modal .swiper-button-next",
      prevEl: ".modal .swiper-button-prev",
    },
    pagination: {
      el: ".modal .swiper-pagination",
      clickable: true,
    },
  });

  // swiper2.on('slideChange', function() {
  // 	const simpleBar = new SimpleBar(document.querySelector('.scroll'));
  // });

  var currentScroll = 0;
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      const modalIndex = openModalBtn.getAttribute("data-modal");
      swiper2.slideTo(modalIndex);
      modal.classList.add("is-active");
      Array.prototype.forEach.call(
        document.querySelectorAll(".scroll[data-simplebar]"),
        (el) => new SimpleBar(el),
      );

      currentScroll = $(window).scrollTop();
      $("body").css({
        overflow: "hidden",
        top: -1 * currentScroll,
      });
      $(".c-pagetop").css({
        display: "none",
      });
      if (window.matchMedia("(max-width: 767px)").matches) {
        var pdn = $("header").outerHeight() + 20;
        $(".modal").css({
          "padding-top": pdn,
        });
        var msInnerHeight =
          $(window).height() -
          $(".modal_pagers").outerHeight() -
          $("header").outerHeight() -
          45;
        $(".modalInSlider .slide_inner").height(msInnerHeight);
      }
    });
  });

  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");

      window.scrollTo(0, currentScroll);
      $("body").css({
        overflow: "inherit",
      });
    });
  });
});

$(window).on("load resize", function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    //const simpleBar = new SimpleBar(document.querySelector('.modalInSlider .slide_inner'));
  }
});
