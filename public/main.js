(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\libs\jquery.min.js
  var require_jquery_min = __commonJS({
    "ns-hugo:C:\\Users\\congp\\Desktop\\hugo-blog\\themes\\virgo\\assets\\js\\libs\\jquery.min.js"(exports, module) {
      !function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
          if (!e2.document)
            throw new Error("jQuery requires a window with a document");
          return t(e2);
        } : t(e);
      }("undefined" != typeof window ? window : exports, function(C, e) {
        "use strict";
        var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
          return t.flat.call(e2);
        } : function(e2) {
          return t.concat.apply([], e2);
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
          return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
        }, x = function(e2) {
          return null != e2 && e2 === e2.window;
        }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
        function b(e2, t2, n2) {
          var r2, i2, o2 = (n2 = n2 || E).createElement("script");
          if (o2.text = e2, t2)
            for (r2 in c)
              (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
          n2.head.appendChild(o2).parentNode.removeChild(o2);
        }
        function w(e2) {
          return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
        }
        var f = "3.6.0", S = function(e2, t2) {
          return new S.fn.init(e2, t2);
        };
        function p(e2) {
          var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
          return !m(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
        }
        S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
          return s.call(this);
        }, get: function(e2) {
          return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
        }, pushStack: function(e2) {
          var t2 = S.merge(this.constructor(), e2);
          return t2.prevObject = this, t2;
        }, each: function(e2) {
          return S.each(this, e2);
        }, map: function(n2) {
          return this.pushStack(S.map(this, function(e2, t2) {
            return n2.call(e2, t2, e2);
          }));
        }, slice: function() {
          return this.pushStack(s.apply(this, arguments));
        }, first: function() {
          return this.eq(0);
        }, last: function() {
          return this.eq(-1);
        }, even: function() {
          return this.pushStack(S.grep(this, function(e2, t2) {
            return (t2 + 1) % 2;
          }));
        }, odd: function() {
          return this.pushStack(S.grep(this, function(e2, t2) {
            return t2 % 2;
          }));
        }, eq: function(e2) {
          var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
          return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
        }, end: function() {
          return this.prevObject || this.constructor();
        }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
          var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
          for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
            if (null != (e2 = arguments[s2]))
              for (t2 in e2)
                r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
          return a2;
        }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
          throw new Error(e2);
        }, noop: function() {
        }, isPlainObject: function(e2) {
          var t2, n2;
          return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = v.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
        }, isEmptyObject: function(e2) {
          var t2;
          for (t2 in e2)
            return false;
          return true;
        }, globalEval: function(e2, t2, n2) {
          b(e2, { nonce: t2 && t2.nonce }, n2);
        }, each: function(e2, t2) {
          var n2, r2 = 0;
          if (p(e2)) {
            for (n2 = e2.length; r2 < n2; r2++)
              if (false === t2.call(e2[r2], r2, e2[r2]))
                break;
          } else
            for (r2 in e2)
              if (false === t2.call(e2[r2], r2, e2[r2]))
                break;
          return e2;
        }, makeArray: function(e2, t2) {
          var n2 = t2 || [];
          return null != e2 && (p(Object(e2)) ? S.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
        }, inArray: function(e2, t2, n2) {
          return null == t2 ? -1 : i.call(t2, e2, n2);
        }, merge: function(e2, t2) {
          for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
            e2[i2++] = t2[r2];
          return e2.length = i2, e2;
        }, grep: function(e2, t2, n2) {
          for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
            !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
          return r2;
        }, map: function(e2, t2, n2) {
          var r2, i2, o2 = 0, a2 = [];
          if (p(e2))
            for (r2 = e2.length; o2 < r2; o2++)
              null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          else
            for (o2 in e2)
              null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          return g(a2);
        }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
          n["[object " + t2 + "]"] = t2.toLowerCase();
        });
        var d = function(n2) {
          var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), j2 = function(e3, t3) {
            return e3 === t3 && (l2 = true), 0;
          }, D2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
            for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
              if (e3[n3] === t3)
                return n3;
            return -1;
          }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $13 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
            var n3 = "0x" + e3.slice(1) - 65536;
            return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
          }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
            return t3 ? "\0" === e3 ? "\uFFFD" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
          }, oe2 = function() {
            T2();
          }, ae2 = be2(function(e3) {
            return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
          }, { dir: "parentNode", next: "legend" });
          try {
            H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
          } catch (e3) {
            H2 = { apply: t2.length ? function(e4, t3) {
              L2.apply(e4, O2.call(t3));
            } : function(e4, t3) {
              var n3 = e4.length, r3 = 0;
              while (e4[n3++] = t3[r3++])
                ;
              e4.length = n3 - 1;
            } };
          }
          function se2(t3, e3, n3, r3) {
            var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
            if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3)
              return n3;
            if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
              if (11 !== p3 && (u3 = Z2.exec(t3)))
                if (i3 = u3[1]) {
                  if (9 === p3) {
                    if (!(a3 = e3.getElementById(i3)))
                      return n3;
                    if (a3.id === i3)
                      return n3.push(a3), n3;
                  } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3)
                    return n3.push(a3), n3;
                } else {
                  if (u3[2])
                    return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
                  if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName)
                    return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
                }
              if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== p3 || "object" !== e3.nodeName.toLowerCase())) {
                if (c3 = t3, f3 = e3, 1 === p3 && (U2.test(t3) || z2.test(t3))) {
                  (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
                  while (o3--)
                    l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
                  c3 = l3.join(",");
                }
                try {
                  return H2.apply(n3, f3.querySelectorAll(c3)), n3;
                } catch (e4) {
                  N2(t3, true);
                } finally {
                  s3 === S2 && e3.removeAttribute("id");
                }
              }
            }
            return g2(t3.replace($13, "$1"), e3, n3, r3);
          }
          function ue2() {
            var r3 = [];
            return function e3(t3, n3) {
              return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
            };
          }
          function le2(e3) {
            return e3[S2] = true, e3;
          }
          function ce2(e3) {
            var t3 = C2.createElement("fieldset");
            try {
              return !!e3(t3);
            } catch (e4) {
              return false;
            } finally {
              t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
            }
          }
          function fe2(e3, t3) {
            var n3 = e3.split("|"), r3 = n3.length;
            while (r3--)
              b2.attrHandle[n3[r3]] = t3;
          }
          function pe2(e3, t3) {
            var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
            if (r3)
              return r3;
            if (n3) {
              while (n3 = n3.nextSibling)
                if (n3 === t3)
                  return -1;
            }
            return e3 ? 1 : -1;
          }
          function de2(t3) {
            return function(e3) {
              return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
            };
          }
          function he2(n3) {
            return function(e3) {
              var t3 = e3.nodeName.toLowerCase();
              return ("input" === t3 || "button" === t3) && e3.type === n3;
            };
          }
          function ge2(t3) {
            return function(e3) {
              return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
            };
          }
          function ve2(a3) {
            return le2(function(o3) {
              return o3 = +o3, le2(function(e3, t3) {
                var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
                while (i3--)
                  e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
              });
            });
          }
          function ye2(e3) {
            return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
          }
          for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
            var t3 = e3 && e3.namespaceURI, n3 = e3 && (e3.ownerDocument || e3).documentElement;
            return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
          }, T2 = se2.setDocument = function(e3) {
            var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
            return r3 != C2 && 9 === r3.nodeType && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
              return a2.appendChild(e4).appendChild(C2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
            }), d2.attributes = ce2(function(e4) {
              return e4.className = "i", !e4.getAttribute("className");
            }), d2.getElementsByTagName = ce2(function(e4) {
              return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
            }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
              return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
            }), d2.getById ? (b2.filter.ID = function(e4) {
              var t4 = e4.replace(te2, ne2);
              return function(e5) {
                return e5.getAttribute("id") === t4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && E2) {
                var n4 = t4.getElementById(e4);
                return n4 ? [n4] : [];
              }
            }) : (b2.filter.ID = function(e4) {
              var n4 = e4.replace(te2, ne2);
              return function(e5) {
                var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
                return t4 && t4.value === n4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && E2) {
                var n4, r4, i3, o3 = t4.getElementById(e4);
                if (o3) {
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                    return [o3];
                  i3 = t4.getElementsByName(e4), r4 = 0;
                  while (o3 = i3[r4++])
                    if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                      return [o3];
                }
                return [];
              }
            }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
              return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
            } : function(e4, t4) {
              var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
              if ("*" === e4) {
                while (n4 = o3[i3++])
                  1 === n4.nodeType && r4.push(n4);
                return r4;
              }
              return o3;
            }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
              if ("undefined" != typeof t4.getElementsByClassName && E2)
                return t4.getElementsByClassName(e4);
            }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
              var t4;
              a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
            }), ce2(function(e4) {
              e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t4 = C2.createElement("input");
              t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
            })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
              d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
            }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
              var n4 = 9 === e4.nodeType ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
              return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
            } : function(e4, t4) {
              if (t4) {
                while (t4 = t4.parentNode)
                  if (t4 === e4)
                    return true;
              }
              return false;
            }, j2 = t3 ? function(e4, t4) {
              if (e4 === t4)
                return l2 = true, 0;
              var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
              return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
            } : function(e4, t4) {
              if (e4 === t4)
                return l2 = true, 0;
              var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
              if (!i3 || !o3)
                return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
              if (i3 === o3)
                return pe2(e4, t4);
              n4 = e4;
              while (n4 = n4.parentNode)
                a3.unshift(n4);
              n4 = t4;
              while (n4 = n4.parentNode)
                s3.unshift(n4);
              while (a3[r4] === s3[r4])
                r4++;
              return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
            }), C2;
          }, se2.matches = function(e3, t3) {
            return se2(e3, null, null, t3);
          }, se2.matchesSelector = function(e3, t3) {
            if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3)))
              try {
                var n3 = c2.call(e3, t3);
                if (n3 || d2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
                  return n3;
              } catch (e4) {
                N2(t3, true);
              }
            return 0 < se2(t3, C2, null, [e3]).length;
          }, se2.contains = function(e3, t3) {
            return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
          }, se2.attr = function(e3, t3) {
            (e3.ownerDocument || e3) != C2 && T2(e3);
            var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && D2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
            return void 0 !== r3 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
          }, se2.escape = function(e3) {
            return (e3 + "").replace(re2, ie2);
          }, se2.error = function(e3) {
            throw new Error("Syntax error, unrecognized expression: " + e3);
          }, se2.uniqueSort = function(e3) {
            var t3, n3 = [], r3 = 0, i3 = 0;
            if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(j2), l2) {
              while (t3 = e3[i3++])
                t3 === e3[i3] && (r3 = n3.push(i3));
              while (r3--)
                e3.splice(n3[r3], 1);
            }
            return u2 = null, e3;
          }, o2 = se2.getText = function(e3) {
            var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
            if (i3) {
              if (1 === i3 || 9 === i3 || 11 === i3) {
                if ("string" == typeof e3.textContent)
                  return e3.textContent;
                for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
                  n3 += o2(e3);
              } else if (3 === i3 || 4 === i3)
                return e3.nodeValue;
            } else
              while (t3 = e3[r3++])
                n3 += o2(t3);
            return n3;
          }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
            return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
          }, CHILD: function(e3) {
            return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
          }, PSEUDO: function(e3) {
            var t3, n3 = !e3[6] && e3[2];
            return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
          } }, filter: { TAG: function(e3) {
            var t3 = e3.replace(te2, ne2).toLowerCase();
            return "*" === e3 ? function() {
              return true;
            } : function(e4) {
              return e4.nodeName && e4.nodeName.toLowerCase() === t3;
            };
          }, CLASS: function(e3) {
            var t3 = m2[e3 + " "];
            return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
              return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
            });
          }, ATTR: function(n3, r3, i3) {
            return function(e3) {
              var t3 = se2.attr(e3, n3);
              return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
            };
          }, CHILD: function(h3, e3, t3, g3, v3) {
            var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), x3 = "of-type" === e3;
            return 1 === g3 && 0 === v3 ? function(e4) {
              return !!e4.parentNode;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
              if (c3) {
                if (y3) {
                  while (l3) {
                    a3 = e4;
                    while (a3 = a3[l3])
                      if (x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType)
                        return false;
                    u3 = l3 = "only" === h3 && !u3 && "nextSibling";
                  }
                  return true;
                }
                if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
                  d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
                  while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                    if (1 === a3.nodeType && ++d3 && a3 === e4) {
                      i3[h3] = [k2, s3, d3];
                      break;
                    }
                } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), false === d3) {
                  while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                    if ((x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4))
                      break;
                }
                return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
              }
            };
          }, PSEUDO: function(e3, o3) {
            var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
            return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
              var n3, r3 = a3(e4, o3), i3 = r3.length;
              while (i3--)
                e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
            }) : function(e4) {
              return a3(e4, 0, t3);
            }) : a3;
          } }, pseudos: { not: le2(function(e3) {
            var r3 = [], i3 = [], s3 = f2(e3.replace($13, "$1"));
            return s3[S2] ? le2(function(e4, t3, n3, r4) {
              var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
              while (a3--)
                (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
            }) : function(e4, t3, n3) {
              return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
            };
          }), has: le2(function(t3) {
            return function(e3) {
              return 0 < se2(t3, e3).length;
            };
          }), contains: le2(function(t3) {
            return t3 = t3.replace(te2, ne2), function(e3) {
              return -1 < (e3.textContent || o2(e3)).indexOf(t3);
            };
          }), lang: le2(function(n3) {
            return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
              var t3;
              do {
                if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
                  return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
              } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
              return false;
            };
          }), target: function(e3) {
            var t3 = n2.location && n2.location.hash;
            return t3 && t3.slice(1) === e3.id;
          }, root: function(e3) {
            return e3 === a2;
          }, focus: function(e3) {
            return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
          }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
            var t3 = e3.nodeName.toLowerCase();
            return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
          }, selected: function(e3) {
            return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
          }, empty: function(e3) {
            for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
              if (e3.nodeType < 6)
                return false;
            return true;
          }, parent: function(e3) {
            return !b2.pseudos.empty(e3);
          }, header: function(e3) {
            return J2.test(e3.nodeName);
          }, input: function(e3) {
            return Q2.test(e3.nodeName);
          }, button: function(e3) {
            var t3 = e3.nodeName.toLowerCase();
            return "input" === t3 && "button" === e3.type || "button" === t3;
          }, text: function(e3) {
            var t3;
            return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
          }, first: ve2(function() {
            return [0];
          }), last: ve2(function(e3, t3) {
            return [t3 - 1];
          }), eq: ve2(function(e3, t3, n3) {
            return [n3 < 0 ? n3 + t3 : n3];
          }), even: ve2(function(e3, t3) {
            for (var n3 = 0; n3 < t3; n3 += 2)
              e3.push(n3);
            return e3;
          }), odd: ve2(function(e3, t3) {
            for (var n3 = 1; n3 < t3; n3 += 2)
              e3.push(n3);
            return e3;
          }), lt: ve2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
              e3.push(r3);
            return e3;
          }), gt: ve2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
              e3.push(r3);
            return e3;
          }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
            b2.pseudos[e2] = de2(e2);
          for (e2 in { submit: true, reset: true })
            b2.pseudos[e2] = he2(e2);
          function me2() {
          }
          function xe2(e3) {
            for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
              r3 += e3[t3].value;
            return r3;
          }
          function be2(s3, e3, t3) {
            var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, p3 = r2++;
            return e3.first ? function(e4, t4, n3) {
              while (e4 = e4[u3])
                if (1 === e4.nodeType || f3)
                  return s3(e4, t4, n3);
              return false;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3 = [k2, p3];
              if (n3) {
                while (e4 = e4[u3])
                  if ((1 === e4.nodeType || f3) && s3(e4, t4, n3))
                    return true;
              } else
                while (e4 = e4[u3])
                  if (1 === e4.nodeType || f3)
                    if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase())
                      e4 = e4[u3] || e4;
                    else {
                      if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3)
                        return a3[2] = r3[2];
                      if ((i3[c3] = a3)[2] = s3(e4, t4, n3))
                        return true;
                    }
              return false;
            };
          }
          function we2(i3) {
            return 1 < i3.length ? function(e3, t3, n3) {
              var r3 = i3.length;
              while (r3--)
                if (!i3[r3](e3, t3, n3))
                  return false;
              return true;
            } : i3[0];
          }
          function Te2(e3, t3, n3, r3, i3) {
            for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
              (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
            return a3;
          }
          function Ce2(d3, h3, g3, v3, y3, e3) {
            return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
              var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
                for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
                  se2(e5, t4[r4], n4);
                return n4;
              }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
              if (g3 && g3(f3, p3, n3, r3), v3) {
                i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
                while (o3--)
                  (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
              }
              if (e4) {
                if (y3 || d3) {
                  if (y3) {
                    i3 = [], o3 = p3.length;
                    while (o3--)
                      (a3 = p3[o3]) && i3.push(f3[o3] = a3);
                    y3(null, p3 = [], i3, r3);
                  }
                  o3 = p3.length;
                  while (o3--)
                    (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
                }
              } else
                p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
            });
          }
          function Ee2(e3) {
            for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
              return e4 === i3;
            }, a3, true), l3 = be2(function(e4) {
              return -1 < P2(i3, e4);
            }, a3, true), c3 = [function(e4, t4, n4) {
              var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
              return i3 = null, r4;
            }]; s3 < r3; s3++)
              if (t3 = b2.relative[e3[s3].type])
                c3 = [be2(we2(c3), t3)];
              else {
                if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                  for (n3 = ++s3; n3 < r3; n3++)
                    if (b2.relative[e3[n3].type])
                      break;
                  return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($13, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
                }
                c3.push(t3);
              }
            return we2(c3);
          }
          return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
            var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
            if (l3)
              return t3 ? 0 : l3.slice(0);
            a3 = e3, s3 = [], u3 = b2.preFilter;
            while (a3) {
              for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($13, " ") }), a3 = a3.slice(n3.length)), b2.filter)
                !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
              if (!n3)
                break;
            }
            return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
          }, f2 = se2.compile = function(e3, t3) {
            var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
            if (!a3) {
              t3 || (t3 = h2(e3)), n3 = t3.length;
              while (n3--)
                (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
              (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
                var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
                for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
                  if (x3 && o4) {
                    a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
                    while (s3 = v3[a4++])
                      if (s3(o4, t4 || C2, n4)) {
                        r4.push(o4);
                        break;
                      }
                    i4 && (k2 = h3);
                  }
                  m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
                }
                if (u3 += l3, m3 && l3 !== u3) {
                  a4 = 0;
                  while (s3 = y3[a4++])
                    s3(c3, f3, t4, n4);
                  if (e4) {
                    if (0 < u3)
                      while (l3--)
                        c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
                    f3 = Te2(f3);
                  }
                  H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
                }
                return i4 && (k2 = h3, w2 = p3), c3;
              }, m3 ? le2(r3) : r3))).selector = e3;
            }
            return a3;
          }, g2 = se2.select = function(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
            if (n3 = n3 || [], 1 === c3.length) {
              if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && b2.relative[o3[1].type]) {
                if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0]))
                  return n3;
                l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
              }
              i3 = G2.needsContext.test(e3) ? 0 : o3.length;
              while (i3--) {
                if (a3 = o3[i3], b2.relative[s3 = a3.type])
                  break;
                if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
                  if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3)))
                    return H2.apply(n3, r3), n3;
                  break;
                }
              }
            }
            return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
          }, d2.sortStable = S2.split("").sort(j2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
            return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
          }), ce2(function(e3) {
            return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
          }) || fe2("type|href|height|width", function(e3, t3, n3) {
            if (!n3)
              return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
          }), d2.attributes && ce2(function(e3) {
            return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
          }) || fe2("value", function(e3, t3, n3) {
            if (!n3 && "input" === e3.nodeName.toLowerCase())
              return e3.defaultValue;
          }), ce2(function(e3) {
            return null == e3.getAttribute("disabled");
          }) || fe2(R2, function(e3, t3, n3) {
            var r3;
            if (!n3)
              return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
          }), se2;
        }(C);
        S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
        var h = function(e2, t2, n2) {
          var r2 = [], i2 = void 0 !== n2;
          while ((e2 = e2[t2]) && 9 !== e2.nodeType)
            if (1 === e2.nodeType) {
              if (i2 && S(e2).is(n2))
                break;
              r2.push(e2);
            }
          return r2;
        }, T = function(e2, t2) {
          for (var n2 = []; e2; e2 = e2.nextSibling)
            1 === e2.nodeType && e2 !== t2 && n2.push(e2);
          return n2;
        }, k = S.expr.match.needsContext;
        function A(e2, t2) {
          return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e2, n2, r2) {
          return m(n2) ? S.grep(e2, function(e3, t2) {
            return !!n2.call(e3, t2, e3) !== r2;
          }) : n2.nodeType ? S.grep(e2, function(e3) {
            return e3 === n2 !== r2;
          }) : "string" != typeof n2 ? S.grep(e2, function(e3) {
            return -1 < i.call(n2, e3) !== r2;
          }) : S.filter(n2, e2, r2);
        }
        S.filter = function(e2, t2, n2) {
          var r2 = t2[0];
          return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
            return 1 === e3.nodeType;
          }));
        }, S.fn.extend({ find: function(e2) {
          var t2, n2, r2 = this.length, i2 = this;
          if ("string" != typeof e2)
            return this.pushStack(S(e2).filter(function() {
              for (t2 = 0; t2 < r2; t2++)
                if (S.contains(i2[t2], this))
                  return true;
            }));
          for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
            S.find(e2, i2[t2], n2);
          return 1 < r2 ? S.uniqueSort(n2) : n2;
        }, filter: function(e2) {
          return this.pushStack(j(this, e2 || [], false));
        }, not: function(e2) {
          return this.pushStack(j(this, e2 || [], true));
        }, is: function(e2) {
          return !!j(this, "string" == typeof e2 && k.test(e2) ? S(e2) : e2 || [], false).length;
        } });
        var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(e2, t2, n2) {
          var r2, i2;
          if (!e2)
            return this;
          if (n2 = n2 || D, "string" == typeof e2) {
            if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2)
              return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
            if (r2[1]) {
              if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2))
                for (r2 in t2)
                  m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
              return this;
            }
            return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
          }
          return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
        }).prototype = S.fn, D = S(E);
        var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
        function O(e2, t2) {
          while ((e2 = e2[t2]) && 1 !== e2.nodeType)
            ;
          return e2;
        }
        S.fn.extend({ has: function(e2) {
          var t2 = S(e2, this), n2 = t2.length;
          return this.filter(function() {
            for (var e3 = 0; e3 < n2; e3++)
              if (S.contains(this, t2[e3]))
                return true;
          });
        }, closest: function(e2, t2) {
          var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && S(e2);
          if (!k.test(e2)) {
            for (; r2 < i2; r2++)
              for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
                if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && S.find.matchesSelector(n2, e2))) {
                  o2.push(n2);
                  break;
                }
          }
          return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
        }, index: function(e2) {
          return e2 ? "string" == typeof e2 ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function(e2, t2) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
        }, addBack: function(e2) {
          return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
        } }), S.each({ parent: function(e2) {
          var t2 = e2.parentNode;
          return t2 && 11 !== t2.nodeType ? t2 : null;
        }, parents: function(e2) {
          return h(e2, "parentNode");
        }, parentsUntil: function(e2, t2, n2) {
          return h(e2, "parentNode", n2);
        }, next: function(e2) {
          return O(e2, "nextSibling");
        }, prev: function(e2) {
          return O(e2, "previousSibling");
        }, nextAll: function(e2) {
          return h(e2, "nextSibling");
        }, prevAll: function(e2) {
          return h(e2, "previousSibling");
        }, nextUntil: function(e2, t2, n2) {
          return h(e2, "nextSibling", n2);
        }, prevUntil: function(e2, t2, n2) {
          return h(e2, "previousSibling", n2);
        }, siblings: function(e2) {
          return T((e2.parentNode || {}).firstChild, e2);
        }, children: function(e2) {
          return T(e2.firstChild);
        }, contents: function(e2) {
          return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
        } }, function(r2, i2) {
          S.fn[r2] = function(e2, t2) {
            var n2 = S.map(this, i2, e2);
            return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
          };
        });
        var P = /[^\x20\t\r\n\f]+/g;
        function R(e2) {
          return e2;
        }
        function M(e2) {
          throw e2;
        }
        function I(e2, t2, n2, r2) {
          var i2;
          try {
            e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
          } catch (e3) {
            n2.apply(void 0, [e3]);
          }
        }
        S.Callbacks = function(r2) {
          var e2, n2;
          r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
            n2[t3] = true;
          }), n2) : S.extend({}, r2);
          var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
            for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
              t2 = u2.shift();
              while (++l2 < s2.length)
                false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
            }
            r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
          }, f2 = { add: function() {
            return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
              S.each(e3, function(e4, t3) {
                m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== w(t3) && n3(t3);
              });
            }(arguments), t2 && !i2 && c2()), this;
          }, remove: function() {
            return S.each(arguments, function(e3, t3) {
              var n3;
              while (-1 < (n3 = S.inArray(t3, s2, n3)))
                s2.splice(n3, 1), n3 <= l2 && l2--;
            }), this;
          }, has: function(e3) {
            return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
          }, empty: function() {
            return s2 && (s2 = []), this;
          }, disable: function() {
            return a2 = u2 = [], s2 = t2 = "", this;
          }, disabled: function() {
            return !s2;
          }, lock: function() {
            return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
          }, locked: function() {
            return !!a2;
          }, fireWith: function(e3, t3) {
            return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
          }, fire: function() {
            return f2.fireWith(this, arguments), this;
          }, fired: function() {
            return !!o2;
          } };
          return f2;
        }, S.extend({ Deferred: function(e2) {
          var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
            return i2;
          }, always: function() {
            return s2.done(arguments).fail(arguments), this;
          }, "catch": function(e3) {
            return a2.then(null, e3);
          }, pipe: function() {
            var i3 = arguments;
            return S.Deferred(function(r2) {
              S.each(o2, function(e3, t2) {
                var n2 = m(i3[t2[4]]) && i3[t2[4]];
                s2[t2[1]](function() {
                  var e4 = n2 && n2.apply(this, arguments);
                  e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
                });
              }), i3 = null;
            }).promise();
          }, then: function(t2, n2, r2) {
            var u2 = 0;
            function l2(i3, o3, a3, s3) {
              return function() {
                var n3 = this, r3 = arguments, e3 = function() {
                  var e4, t4;
                  if (!(i3 < u2)) {
                    if ((e4 = a3.apply(n3, r3)) === o3.promise())
                      throw new TypeError("Thenable self-resolution");
                    t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                  }
                }, t3 = s3 ? e3 : function() {
                  try {
                    e3();
                  } catch (e4) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                  }
                };
                i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
              };
            }
            return S.Deferred(function(e3) {
              o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
            }).promise();
          }, promise: function(e3) {
            return null != e3 ? S.extend(e3, a2) : a2;
          } }, s2 = {};
          return S.each(o2, function(e3, t2) {
            var n2 = t2[2], r2 = t2[5];
            a2[t2[1]] = n2.add, r2 && n2.add(function() {
              i2 = r2;
            }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
              return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
            }, s2[t2[0] + "With"] = n2.fireWith;
          }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
        }, when: function(e2) {
          var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
            return function(e3) {
              r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
            };
          };
          if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || m(i2[t2] && i2[t2].then)))
            return o2.then();
          while (t2--)
            I(i2[t2], a2(t2), o2.reject);
          return o2.promise();
        } });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e2, t2) {
          C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
        }, S.readyException = function(e2) {
          C.setTimeout(function() {
            throw e2;
          });
        };
        var F = S.Deferred();
        function B() {
          E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
        }
        S.fn.ready = function(e2) {
          return F.then(e2)["catch"](function(e3) {
            S.readyException(e3);
          }), this;
        }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
          (true === e2 ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
        } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
        var $12 = function(e2, t2, n2, r2, i2, o2, a2) {
          var s2 = 0, u2 = e2.length, l2 = null == n2;
          if ("object" === w(n2))
            for (s2 in i2 = true, n2)
              $12(e2, t2, s2, n2[s2], true, o2, a2);
          else if (void 0 !== r2 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
            return l2.call(S(e3), n3);
          })), t2))
            for (; s2 < u2; s2++)
              t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
          return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
        }, _ = /^-ms-/, z = /-([a-z])/g;
        function U(e2, t2) {
          return t2.toUpperCase();
        }
        function X(e2) {
          return e2.replace(_, "ms-").replace(z, U);
        }
        var V = function(e2) {
          return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
        };
        function G() {
          this.expando = S.expando + G.uid++;
        }
        G.uid = 1, G.prototype = { cache: function(e2) {
          var t2 = e2[this.expando];
          return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
        }, set: function(e2, t2, n2) {
          var r2, i2 = this.cache(e2);
          if ("string" == typeof t2)
            i2[X(t2)] = n2;
          else
            for (r2 in t2)
              i2[X(r2)] = t2[r2];
          return i2;
        }, get: function(e2, t2) {
          return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
        }, access: function(e2, t2, n2) {
          return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
        }, remove: function(e2, t2) {
          var n2, r2 = e2[this.expando];
          if (void 0 !== r2) {
            if (void 0 !== t2) {
              n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
              while (n2--)
                delete r2[t2[n2]];
            }
            (void 0 === t2 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
          }
        }, hasData: function(e2) {
          var t2 = e2[this.expando];
          return void 0 !== t2 && !S.isEmptyObject(t2);
        } };
        var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
        function Z(e2, t2, n2) {
          var r2, i2;
          if (void 0 === n2 && 1 === e2.nodeType)
            if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
              try {
                n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
              } catch (e3) {
              }
              Q.set(e2, t2, n2);
            } else
              n2 = void 0;
          return n2;
        }
        S.extend({ hasData: function(e2) {
          return Q.hasData(e2) || Y.hasData(e2);
        }, data: function(e2, t2, n2) {
          return Q.access(e2, t2, n2);
        }, removeData: function(e2, t2) {
          Q.remove(e2, t2);
        }, _data: function(e2, t2, n2) {
          return Y.access(e2, t2, n2);
        }, _removeData: function(e2, t2) {
          Y.remove(e2, t2);
        } }), S.fn.extend({ data: function(n2, e2) {
          var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
          if (void 0 === n2) {
            if (this.length && (i2 = Q.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
              t2 = a2.length;
              while (t2--)
                a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
              Y.set(o2, "hasDataAttrs", true);
            }
            return i2;
          }
          return "object" == typeof n2 ? this.each(function() {
            Q.set(this, n2);
          }) : $12(this, function(e3) {
            var t3;
            if (o2 && void 0 === e3)
              return void 0 !== (t3 = Q.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
            this.each(function() {
              Q.set(this, n2, e3);
            });
          }, null, e2, 1 < arguments.length, null, true);
        }, removeData: function(e2) {
          return this.each(function() {
            Q.remove(this, e2);
          });
        } }), S.extend({ queue: function(e2, t2, n2) {
          var r2;
          if (e2)
            return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
        }, dequeue: function(e2, t2) {
          t2 = t2 || "fx";
          var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
          "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
            S.dequeue(e2, t2);
          }, o2)), !r2 && o2 && o2.empty.fire();
        }, _queueHooks: function(e2, t2) {
          var n2 = t2 + "queueHooks";
          return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
            Y.remove(e2, [t2 + "queue", n2]);
          }) });
        } }), S.fn.extend({ queue: function(t2, n2) {
          var e2 = 2;
          return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
            var e3 = S.queue(this, t2, n2);
            S._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && S.dequeue(this, t2);
          });
        }, dequeue: function(e2) {
          return this.each(function() {
            S.dequeue(this, e2);
          });
        }, clearQueue: function(e2) {
          return this.queue(e2 || "fx", []);
        }, promise: function(e2, t2) {
          var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
            --r2 || i2.resolveWith(o2, [o2]);
          };
          "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
          while (a2--)
            (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
          return s2(), i2.promise(t2);
        } });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
          return S.contains(e2.ownerDocument, e2);
        }, oe = { composed: true };
        re.getRootNode && (ie = function(e2) {
          return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
        });
        var ae = function(e2, t2) {
          return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === S.css(e2, "display");
        };
        function se(e2, t2, n2, r2) {
          var i2, o2, a2 = 20, s2 = r2 ? function() {
            return r2.cur();
          } : function() {
            return S.css(e2, t2, "");
          }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || "px" !== l2 && +u2) && te.exec(S.css(e2, t2));
          if (c2 && c2[3] !== l2) {
            u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
            while (a2--)
              S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
            c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
          }
          return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
        }
        var ue = {};
        function le(e2, t2) {
          for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
            (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ue[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
          for (c2 = 0; c2 < f2; c2++)
            null != l2[c2] && (e2[c2].style.display = l2[c2]);
          return e2;
        }
        S.fn.extend({ show: function() {
          return le(this, true);
        }, hide: function() {
          return le(this);
        }, toggle: function(e2) {
          return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
            ae(this) ? S(this).show() : S(this).hide();
          });
        } });
        var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
        ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
        var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function ve(e2, t2) {
          var n2;
          return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
        }
        function ye(e2, t2) {
          for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
            Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var me = /<|&#?\w+;/;
        function xe(e2, t2, n2, r2, i2) {
          for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++)
            if ((o2 = e2[d2]) || 0 === o2)
              if ("object" === w(o2))
                S.merge(p2, o2.nodeType ? [o2] : o2);
              else if (me.test(o2)) {
                a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
                while (c2--)
                  a2 = a2.lastChild;
                S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
              } else
                p2.push(t2.createTextNode(o2));
          f2.textContent = "", d2 = 0;
          while (o2 = p2[d2++])
            if (r2 && -1 < S.inArray(o2, r2))
              i2 && i2.push(o2);
            else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
              c2 = 0;
              while (o2 = a2[c2++])
                he.test(o2.type || "") && n2.push(o2);
            }
          return f2;
        }
        var be = /^([^.]*)(?:\.(.+)|)/;
        function we() {
          return true;
        }
        function Te() {
          return false;
        }
        function Ce(e2, t2) {
          return e2 === function() {
            try {
              return E.activeElement;
            } catch (e3) {
            }
          }() == ("focus" === t2);
        }
        function Ee(e2, t2, n2, r2, i2, o2) {
          var a2, s2;
          if ("object" == typeof t2) {
            for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
              Ee(e2, s2, n2, r2, t2[s2], o2);
            return e2;
          }
          if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
            i2 = Te;
          else if (!i2)
            return e2;
          return 1 === o2 && (a2 = i2, (i2 = function(e3) {
            return S().off(e3), a2.apply(this, arguments);
          }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
            S.event.add(this, t2, i2, r2, n2);
          });
        }
        function Se(e2, i2, o2) {
          o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
            var t2, n2, r2 = Y.get(this, i2);
            if (1 & e3.isTrigger && this[i2]) {
              if (r2.length)
                (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
              else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2)
                return e3.stopImmediatePropagation(), e3.preventDefault(), n2 && n2.value;
            } else
              r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
          } })) : void 0 === Y.get(e2, i2) && S.event.add(e2, i2, we);
        }
        S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
          if (V(t2)) {
            n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
              return "undefined" != typeof S && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
            }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
            while (l2--)
              d2 = g2 = (s2 = be.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
          }
        }, remove: function(e2, t2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
          if (v2 && (u2 = v2.events)) {
            l2 = (t2 = (t2 || "").match(P) || [""]).length;
            while (l2--)
              if (d2 = g2 = (s2 = be.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
                f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
                while (o2--)
                  c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
                a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
              } else
                for (d2 in u2)
                  S.event.remove(e2, d2 + t2[l2], n2, r2, true);
            S.isEmptyObject(u2) && Y.remove(e2, "handle events");
          }
        }, dispatch: function(e2) {
          var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
          for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
            s2[t2] = arguments[t2];
          if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
            a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
            while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
              u2.currentTarget = i2.elem, n2 = 0;
              while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
                u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
            }
            return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
          }
        }, handlers: function(e2, t2) {
          var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
          if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
            for (; l2 !== this; l2 = l2.parentNode || this)
              if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
                for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
                  void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
                o2.length && s2.push({ elem: l2, handlers: o2 });
              }
          }
          return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
        }, addProp: function(t2, e2) {
          Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
            if (this.originalEvent)
              return e2(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[t2];
          }, set: function(e3) {
            Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
          } });
        }, fix: function(e2) {
          return e2[S.expando] ? e2 : new S.Event(e2);
        }, special: { load: { noBubble: true }, click: { setup: function(e2) {
          var t2 = this || e2;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click", we), false;
        }, trigger: function(e2) {
          var t2 = this || e2;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click"), true;
        }, _default: function(e2) {
          var t2 = e2.target;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
        } }, beforeunload: { postDispatch: function(e2) {
          void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
        } } } }, S.removeEvent = function(e2, t2, n2) {
          e2.removeEventListener && e2.removeEventListener(t2, n2);
        }, S.Event = function(e2, t2) {
          if (!(this instanceof S.Event))
            return new S.Event(e2, t2);
          e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? we : Te, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
        }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: false, preventDefault: function() {
          var e2 = this.originalEvent;
          this.isDefaultPrevented = we, e2 && !this.isSimulated && e2.preventDefault();
        }, stopPropagation: function() {
          var e2 = this.originalEvent;
          this.isPropagationStopped = we, e2 && !this.isSimulated && e2.stopPropagation();
        }, stopImmediatePropagation: function() {
          var e2 = this.originalEvent;
          this.isImmediatePropagationStopped = we, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
        } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
          S.event.special[e2] = { setup: function() {
            return Se(this, e2, Ce), false;
          }, trigger: function() {
            return Se(this, e2), true;
          }, _default: function() {
            return true;
          }, delegateType: t2 };
        }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
          S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
            var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
            return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
          } };
        }), S.fn.extend({ on: function(e2, t2, n2, r2) {
          return Ee(this, e2, t2, n2, r2);
        }, one: function(e2, t2, n2, r2) {
          return Ee(this, e2, t2, n2, r2, 1);
        }, off: function(e2, t2, n2) {
          var r2, i2;
          if (e2 && e2.preventDefault && e2.handleObj)
            return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
          if ("object" == typeof e2) {
            for (i2 in e2)
              this.off(i2, t2, e2[i2]);
            return this;
          }
          return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Te), this.each(function() {
            S.event.remove(this, e2, n2, t2);
          });
        } });
        var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e2, t2) {
          return A(e2, "table") && A(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
        }
        function De(e2) {
          return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
        }
        function qe(e2) {
          return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
        }
        function Le(e2, t2) {
          var n2, r2, i2, o2, a2, s2;
          if (1 === t2.nodeType) {
            if (Y.hasData(e2) && (s2 = Y.get(e2).events))
              for (i2 in Y.remove(t2, "handle events"), s2)
                for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
                  S.event.add(t2, i2, s2[i2][n2]);
            Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
          }
        }
        function He(n2, r2, i2, o2) {
          r2 = g(r2);
          var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
          if (h2 || 1 < f2 && "string" == typeof d2 && !y.checkClone && Ae.test(d2))
            return n2.each(function(e3) {
              var t3 = n2.eq(e3);
              h2 && (r2[0] = d2.call(this, e3, t3.html())), He(t3, r2, i2, o2);
            });
          if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
            for (s2 = (a2 = S.map(ve(e2, "script"), De)).length; c2 < f2; c2++)
              u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
            if (s2)
              for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, qe), c2 = 0; c2 < s2; c2++)
                u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(Ne, ""), u2, l2));
          }
          return n2;
        }
        function Oe(e2, t2, n2) {
          for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
            n2 || 1 !== r2.nodeType || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
          return e2;
        }
        S.extend({ htmlPrefilter: function(e2) {
          return e2;
        }, clone: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
          if (!(y.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || S.isXMLDoc(e2)))
            for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++)
              s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && pe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
          if (t2)
            if (n2)
              for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
                Le(o2[r2], a2[r2]);
            else
              Le(e2, c2);
          return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
        }, cleanData: function(e2) {
          for (var t2, n2, r2, i2 = S.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
            if (V(n2)) {
              if (t2 = n2[Y.expando]) {
                if (t2.events)
                  for (r2 in t2.events)
                    i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
                n2[Y.expando] = void 0;
              }
              n2[Q.expando] && (n2[Q.expando] = void 0);
            }
        } }), S.fn.extend({ detach: function(e2) {
          return Oe(this, e2, true);
        }, remove: function(e2) {
          return Oe(this, e2);
        }, text: function(e2) {
          return $12(this, function(e3) {
            return void 0 === e3 ? S.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
            });
          }, null, e2, arguments.length);
        }, append: function() {
          return He(this, arguments, function(e2) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e2).appendChild(e2);
          });
        }, prepend: function() {
          return He(this, arguments, function(e2) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t2 = je(this, e2);
              t2.insertBefore(e2, t2.firstChild);
            }
          });
        }, before: function() {
          return He(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this);
          });
        }, after: function() {
          return He(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
          });
        }, empty: function() {
          for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
            1 === e2.nodeType && (S.cleanData(ve(e2, false)), e2.textContent = "");
          return this;
        }, clone: function(e2, t2) {
          return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
            return S.clone(this, e2, t2);
          });
        }, html: function(e2) {
          return $12(this, function(e3) {
            var t2 = this[0] || {}, n2 = 0, r2 = this.length;
            if (void 0 === e3 && 1 === t2.nodeType)
              return t2.innerHTML;
            if ("string" == typeof e3 && !ke.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
              e3 = S.htmlPrefilter(e3);
              try {
                for (; n2 < r2; n2++)
                  1 === (t2 = this[n2] || {}).nodeType && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
                t2 = 0;
              } catch (e4) {
              }
            }
            t2 && this.empty().append(e3);
          }, null, e2, arguments.length);
        }, replaceWith: function() {
          var n2 = [];
          return He(this, arguments, function(e2) {
            var t2 = this.parentNode;
            S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
          }, n2);
        } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
          S.fn[e2] = function(e3) {
            for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
              t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
            return this.pushStack(n2);
          };
        });
        var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e2) {
          var t2 = e2.ownerDocument.defaultView;
          return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
        }, Me = function(e2, t2, n2) {
          var r2, i2, o2 = {};
          for (i2 in t2)
            o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
          for (i2 in r2 = n2.call(e2), t2)
            e2.style[i2] = o2[i2];
          return r2;
        }, Ie = new RegExp(ne.join("|"), "i");
        function We(e2, t2, n2) {
          var r2, i2, o2, a2, s2 = e2.style;
          return (n2 = n2 || Re(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Pe.test(a2) && Ie.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
        }
        function Fe(e2, t2) {
          return { get: function() {
            if (!e2())
              return (this.get = t2).apply(this, arguments);
            delete this.get;
          } };
        }
        !function() {
          function e2() {
            if (l2) {
              u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
              var e3 = C.getComputedStyle(l2);
              n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
            }
          }
          function t2(e3) {
            return Math.round(parseFloat(e3));
          }
          var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
          l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l2.style.backgroundClip, S.extend(y, { boxSizingReliable: function() {
            return e2(), r2;
          }, pixelBoxStyles: function() {
            return e2(), o2;
          }, pixelPosition: function() {
            return e2(), n2;
          }, reliableMarginLeft: function() {
            return e2(), s2;
          }, scrollboxSize: function() {
            return e2(), i2;
          }, reliableTrDimensions: function() {
            var e3, t3, n3, r3;
            return null == a2 && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, re.removeChild(e3)), a2;
          } }));
        }();
        var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};
        function ze(e2) {
          var t2 = S.cssProps[e2] || _e[e2];
          return t2 || (e2 in $e ? e2 : _e[e2] = function(e3) {
            var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Be.length;
            while (n2--)
              if ((e3 = Be[n2] + t3) in $e)
                return e3;
          }(e2) || e2);
        }
        var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" };
        function Ye(e2, t2, n2) {
          var r2 = te.exec(t2);
          return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
        }
        function Qe(e2, t2, n2, r2, i2, o2) {
          var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
          if (n2 === (r2 ? "border" : "content"))
            return 0;
          for (; a2 < 4; a2 += 2)
            "margin" === n2 && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
          return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
        }
        function Je(e2, t2, n2) {
          var r2 = Re(e2), i2 = (!y.boxSizingReliable() || n2) && "border-box" === S.css(e2, "boxSizing", false, r2), o2 = i2, a2 = We(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
          if (Pe.test(a2)) {
            if (!n2)
              return a2;
            a2 = "auto";
          }
          return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === S.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === S.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Qe(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
        }
        function Ke(e2, t2, n2, r2, i2) {
          return new Ke.prototype.init(e2, t2, n2, r2, i2);
        }
        S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
          if (t2) {
            var n2 = We(e2, "opacity");
            return "" === n2 ? "1" : n2;
          }
        } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
          if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
            var i2, o2, a2, s2 = X(t2), u2 = Xe.test(t2), l2 = e2.style;
            if (u2 || (t2 = ze(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], void 0 === n2)
              return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
            "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
          }
        }, css: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2 = X(t2);
          return Xe.test(t2) || (t2 = ze(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = We(e2, t2, r2)), "normal" === i2 && t2 in Ge && (i2 = Ge[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
        } }), S.each(["height", "width"], function(e2, u2) {
          S.cssHooks[u2] = { get: function(e3, t2, n2) {
            if (t2)
              return !Ue.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Je(e3, u2, n2) : Me(e3, Ve, function() {
                return Je(e3, u2, n2);
              });
          }, set: function(e3, t2, n2) {
            var r2, i2 = Re(e3), o2 = !y.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === S.css(e3, "boxSizing", false, i2), s2 = n2 ? Qe(e3, u2, n2, a2, i2) : 0;
            return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Qe(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Ye(0, t2, s2);
          } };
        }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e2, t2) {
          if (t2)
            return (parseFloat(We(e2, "marginLeft")) || e2.getBoundingClientRect().left - Me(e2, { marginLeft: 0 }, function() {
              return e2.getBoundingClientRect().left;
            })) + "px";
        }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
          S.cssHooks[i2 + o2] = { expand: function(e2) {
            for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
              n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
            return n2;
          } }, "margin" !== i2 && (S.cssHooks[i2 + o2].set = Ye);
        }), S.fn.extend({ css: function(e2, t2) {
          return $12(this, function(e3, t3, n2) {
            var r2, i2, o2 = {}, a2 = 0;
            if (Array.isArray(t3)) {
              for (r2 = Re(e3), i2 = t3.length; a2 < i2; a2++)
                o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
              return o2;
            }
            return void 0 !== n2 ? S.style(e3, t3, n2) : S.css(e3, t3);
          }, e2, t2, 1 < arguments.length);
        } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e2, t2, n2, r2, i2, o2) {
          this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
        }, cur: function() {
          var e2 = Ke.propHooks[this.prop];
          return e2 && e2.get ? e2.get(this) : Ke.propHooks._default.get(this);
        }, run: function(e2) {
          var t2, n2 = Ke.propHooks[this.prop];
          return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : Ke.propHooks._default.set(this), this;
        } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e2) {
          var t2;
          return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
        }, set: function(e2) {
          S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !S.cssHooks[e2.prop] && null == e2.elem.style[ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
        } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e2) {
          e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
        } }, S.easing = { linear: function(e2) {
          return e2;
        }, swing: function(e2) {
          return 0.5 - Math.cos(e2 * Math.PI) / 2;
        }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
        var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
        function ot() {
          et && (false === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
        }
        function at() {
          return C.setTimeout(function() {
            Ze = void 0;
          }), Ze = Date.now();
        }
        function st(e2, t2) {
          var n2, r2 = 0, i2 = { height: e2 };
          for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2)
            i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
          return t2 && (i2.opacity = i2.width = e2), i2;
        }
        function ut(e2, t2, n2) {
          for (var r2, i2 = (lt.tweeners[t2] || []).concat(lt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++)
            if (r2 = i2[o2].call(n2, t2, e2))
              return r2;
        }
        function lt(o2, e2, t2) {
          var n2, a2, r2 = 0, i2 = lt.prefilters.length, s2 = S.Deferred().always(function() {
            delete u2.elem;
          }), u2 = function() {
            if (a2)
              return false;
            for (var e3 = Ze || at(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++)
              l2.tweens[r3].run(n3);
            return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
          }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: Ze || at(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
            var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
            return l2.tweens.push(n3), n3;
          }, stop: function(e3) {
            var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
            if (a2)
              return this;
            for (a2 = true; t3 < n3; t3++)
              l2.tweens[t3].run(1);
            return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
          } }), c2 = l2.props;
          for (!function(e3, t3) {
            var n3, r3, i3, o3, a3;
            for (n3 in e3)
              if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3)
                for (n3 in o3 = a3.expand(o3), delete e3[r3], o3)
                  n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
              else
                t3[r3] = i3;
          }(c2, l2.opts.specialEasing); r2 < i2; r2++)
            if (n2 = lt.prefilters[r2].call(l2, o2, c2, l2.opts))
              return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
          return S.map(c2, ut, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
        }
        S.Animation = S.extend(lt, { tweeners: { "*": [function(e2, t2) {
          var n2 = this.createTween(e2, t2);
          return se(n2.elem, e2, te.exec(t2), n2), n2;
        }] }, tweener: function(e2, t2) {
          m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
          for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++)
            n2 = e2[r2], lt.tweeners[n2] = lt.tweeners[n2] || [], lt.tweeners[n2].unshift(t2);
        }, prefilters: [function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
          for (r2 in n2.queue || (null == (a2 = S._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
            a2.unqueued || s2();
          }), a2.unqueued++, p2.always(function() {
            p2.always(function() {
              a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
            });
          })), t2)
            if (i2 = t2[r2], rt.test(i2)) {
              if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
                if ("show" !== i2 || !v2 || void 0 === v2[r2])
                  continue;
                g2 = true;
              }
              d2[r2] = v2 && v2[r2] || S.style(e2, r2);
            }
          if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2))
            for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = Y.get(e2, "display")), "none" === (c2 = S.css(e2, "display")) && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === S.css(e2, "float") && (u2 || (p2.done(function() {
              h2.display = l2;
            }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
              h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
            })), u2 = false, d2)
              u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
                for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2)
                  S.style(e2, r2, d2[r2]);
              })), u2 = ut(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
        }], prefilter: function(e2, t2) {
          t2 ? lt.prefilters.unshift(e2) : lt.prefilters.push(e2);
        } }), S.speed = function(e2, t2, n2) {
          var r2 = e2 && "object" == typeof e2 ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
          return S.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
            m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
          }, r2;
        }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
          return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
        }, animate: function(t2, e2, n2, r2) {
          var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
            var e3 = lt(this, S.extend({}, t2), o2);
            (i2 || Y.get(this, "finish")) && e3.stop(true);
          };
          return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
        }, stop: function(i2, e2, o2) {
          var a2 = function(e3) {
            var t2 = e3.stop;
            delete e3.stop, t2(o2);
          };
          return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
            var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
            if (t2)
              r2[t2] && r2[t2].stop && a2(r2[t2]);
            else
              for (t2 in r2)
                r2[t2] && r2[t2].stop && it.test(t2) && a2(r2[t2]);
            for (t2 = n2.length; t2--; )
              n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
            !e3 && o2 || S.dequeue(this, i2);
          });
        }, finish: function(a2) {
          return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
            var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
            for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; )
              i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
            for (e2 = 0; e2 < o2; e2++)
              n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
            delete t2.finish;
          });
        } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
          var i2 = S.fn[r2];
          S.fn[r2] = function(e3, t2, n2) {
            return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(st(r2, true), e3, t2, n2);
          };
        }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
          S.fn[e2] = function(e3, t2, n2) {
            return this.animate(r2, e3, t2, n2);
          };
        }), S.timers = [], S.fx.tick = function() {
          var e2, t2 = 0, n2 = S.timers;
          for (Ze = Date.now(); t2 < n2.length; t2++)
            (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
          n2.length || S.fx.stop(), Ze = void 0;
        }, S.fx.timer = function(e2) {
          S.timers.push(e2), S.fx.start();
        }, S.fx.interval = 13, S.fx.start = function() {
          et || (et = true, ot());
        }, S.fx.stop = function() {
          et = null;
        }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
          return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
            var n2 = C.setTimeout(e3, r2);
            t2.stop = function() {
              C.clearTimeout(n2);
            };
          });
        }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
        var ct, ft = S.expr.attrHandle;
        S.fn.extend({ attr: function(e2, t2) {
          return $12(this, S.attr, e2, t2, 1 < arguments.length);
        }, removeAttr: function(e2) {
          return this.each(function() {
            S.removeAttr(this, e2);
          });
        } }), S.extend({ attr: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2)
            return "undefined" == typeof e2.getAttribute ? S.prop(e2, t2, n2) : (1 === o2 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? ct : void 0)), void 0 !== n2 ? null === n2 ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = S.find.attr(e2, t2)) ? void 0 : r2);
        }, attrHooks: { type: { set: function(e2, t2) {
          if (!y.radioValue && "radio" === t2 && A(e2, "input")) {
            var n2 = e2.value;
            return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
          }
        } } }, removeAttr: function(e2, t2) {
          var n2, r2 = 0, i2 = t2 && t2.match(P);
          if (i2 && 1 === e2.nodeType)
            while (n2 = i2[r2++])
              e2.removeAttribute(n2);
        } }), ct = { set: function(e2, t2, n2) {
          return false === t2 ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
        } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
          var a2 = ft[t2] || S.find.attr;
          ft[t2] = function(e3, t3, n2) {
            var r2, i2, o2 = t3.toLowerCase();
            return n2 || (i2 = ft[o2], ft[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, ft[o2] = i2), r2;
          };
        });
        var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
        function ht(e2) {
          return (e2.match(P) || []).join(" ");
        }
        function gt(e2) {
          return e2.getAttribute && e2.getAttribute("class") || "";
        }
        function vt(e2) {
          return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(P) || [];
        }
        S.fn.extend({ prop: function(e2, t2) {
          return $12(this, S.prop, e2, t2, 1 < arguments.length);
        }, removeProp: function(e2) {
          return this.each(function() {
            delete this[S.propFix[e2] || e2];
          });
        } }), S.extend({ prop: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2)
            return 1 === o2 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
        }, propHooks: { tabIndex: { get: function(e2) {
          var t2 = S.find.attr(e2, "tabindex");
          return t2 ? parseInt(t2, 10) : pt.test(e2.nodeName) || dt.test(e2.nodeName) && e2.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
          var t2 = e2.parentNode;
          return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
        }, set: function(e2) {
          var t2 = e2.parentNode;
          t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
        } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          S.propFix[this.toLowerCase()] = this;
        }), S.fn.extend({ addClass: function(t2) {
          var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
          if (m(t2))
            return this.each(function(e3) {
              S(this).addClass(t2.call(this, e3, gt(this)));
            });
          if ((e2 = vt(t2)).length) {
            while (n2 = this[u2++])
              if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
                a2 = 0;
                while (o2 = e2[a2++])
                  r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
                i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
              }
          }
          return this;
        }, removeClass: function(t2) {
          var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
          if (m(t2))
            return this.each(function(e3) {
              S(this).removeClass(t2.call(this, e3, gt(this)));
            });
          if (!arguments.length)
            return this.attr("class", "");
          if ((e2 = vt(t2)).length) {
            while (n2 = this[u2++])
              if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
                a2 = 0;
                while (o2 = e2[a2++])
                  while (-1 < r2.indexOf(" " + o2 + " "))
                    r2 = r2.replace(" " + o2 + " ", " ");
                i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
              }
          }
          return this;
        }, toggleClass: function(i2, t2) {
          var o2 = typeof i2, a2 = "string" === o2 || Array.isArray(i2);
          return "boolean" == typeof t2 && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
            S(this).toggleClass(i2.call(this, e2, gt(this), t2), t2);
          }) : this.each(function() {
            var e2, t3, n2, r2;
            if (a2) {
              t3 = 0, n2 = S(this), r2 = vt(i2);
              while (e2 = r2[t3++])
                n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
            } else
              void 0 !== i2 && "boolean" !== o2 || ((e2 = gt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || false === i2 ? "" : Y.get(this, "__className__") || ""));
          });
        }, hasClass: function(e2) {
          var t2, n2, r2 = 0;
          t2 = " " + e2 + " ";
          while (n2 = this[r2++])
            if (1 === n2.nodeType && -1 < (" " + ht(gt(n2)) + " ").indexOf(t2))
              return true;
          return false;
        } });
        var yt = /\r/g;
        S.fn.extend({ val: function(n2) {
          var r2, e2, i2, t2 = this[0];
          return arguments.length ? (i2 = m(n2), this.each(function(e3) {
            var t3;
            1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
              return null == e4 ? "" : e4 + "";
            })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
          })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(yt, "") : null == e2 ? "" : e2 : void 0;
        } }), S.extend({ valHooks: { option: { get: function(e2) {
          var t2 = S.find.attr(e2, "value");
          return null != t2 ? t2 : ht(S.text(e2));
        } }, select: { get: function(e2) {
          var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
          for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
            if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
              if (t2 = S(n2).val(), a2)
                return t2;
              s2.push(t2);
            }
          return s2;
        }, set: function(e2, t2) {
          var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
          while (a2--)
            ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
          return n2 || (e2.selectedIndex = -1), o2;
        } } } }), S.each(["radio", "checkbox"], function() {
          S.valHooks[this] = { set: function(e2, t2) {
            if (Array.isArray(t2))
              return e2.checked = -1 < S.inArray(S(e2).val(), t2);
          } }, y.checkOn || (S.valHooks[this].get = function(e2) {
            return null === e2.getAttribute("value") ? "on" : e2.value;
          });
        }), y.focusin = "onfocusin" in C;
        var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e2) {
          e2.stopPropagation();
        };
        S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
          if (o2 = f2 = a2 = n2 = n2 || E, 3 !== n2.nodeType && 8 !== n2.nodeType && !mt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
            if (!r2 && !c2.noBubble && !x(n2)) {
              for (s2 = c2.delegateType || d2, mt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
                p2.push(o2), a2 = o2;
              a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
            }
            i2 = 0;
            while ((o2 = p2[i2++]) && !e2.isPropagationStopped())
              f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
            return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, xt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, xt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
          }
        }, simulate: function(e2, t2, n2) {
          var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
          S.event.trigger(r2, null, t2);
        } }), S.fn.extend({ trigger: function(e2, t2) {
          return this.each(function() {
            S.event.trigger(e2, t2, this);
          });
        }, triggerHandler: function(e2, t2) {
          var n2 = this[0];
          if (n2)
            return S.event.trigger(e2, t2, n2, true);
        } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
          var i2 = function(e2) {
            S.event.simulate(r2, e2.target, S.event.fix(e2));
          };
          S.event.special[r2] = { setup: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
            t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
          }, teardown: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
            t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
          } };
        });
        var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
        S.parseXML = function(e2) {
          var t2, n2;
          if (!e2 || "string" != typeof e2)
            return null;
          try {
            t2 = new C.DOMParser().parseFromString(e2, "text/xml");
          } catch (e3) {
          }
          return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || S.error("Invalid XML: " + (n2 ? S.map(n2.childNodes, function(e3) {
            return e3.textContent;
          }).join("\n") : e2)), t2;
        };
        var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
        function At(n2, e2, r2, i2) {
          var t2;
          if (Array.isArray(e2))
            S.each(e2, function(e3, t3) {
              r2 || Ct.test(n2) ? i2(n2, t3) : At(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
            });
          else if (r2 || "object" !== w(e2))
            i2(n2, e2);
          else
            for (t2 in e2)
              At(n2 + "[" + t2 + "]", e2[t2], r2, i2);
        }
        S.param = function(e2, t2) {
          var n2, r2 = [], i2 = function(e3, t3) {
            var n3 = m(t3) ? t3() : t3;
            r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
          };
          if (null == e2)
            return "";
          if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2))
            S.each(e2, function() {
              i2(this.name, this.value);
            });
          else
            for (n2 in e2)
              At(n2, e2[n2], t2, i2);
          return r2.join("&");
        }, S.fn.extend({ serialize: function() {
          return S.param(this.serializeArray());
        }, serializeArray: function() {
          return this.map(function() {
            var e2 = S.prop(this, "elements");
            return e2 ? S.makeArray(e2) : this;
          }).filter(function() {
            var e2 = this.type;
            return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e2) && (this.checked || !pe.test(e2));
          }).map(function(e2, t2) {
            var n2 = S(this).val();
            return null == n2 ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
              return { name: t2.name, value: e3.replace(Et, "\r\n") };
            }) : { name: t2.name, value: n2.replace(Et, "\r\n") };
          }).get();
        } });
        var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
        function It(o2) {
          return function(e2, t2) {
            "string" != typeof e2 && (t2 = e2, e2 = "*");
            var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
            if (m(t2))
              while (n2 = i2[r2++])
                "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
          };
        }
        function Wt(t2, i2, o2, a2) {
          var s2 = {}, u2 = t2 === Pt;
          function l2(e2) {
            var r2;
            return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
              var n2 = t3(i2, o2, a2);
              return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
            }), r2;
          }
          return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
        }
        function Ft(e2, t2) {
          var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
          for (n2 in t2)
            void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
          return r2 && S.extend(true, e2, r2), e2;
        }
        Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
          return t2 ? Ft(Ft(e2, S.ajaxSettings), t2) : Ft(S.ajaxSettings, e2);
        }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function(e2, t2) {
          "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
          var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
            var t3;
            if (h2) {
              if (!n2) {
                n2 = {};
                while (t3 = qt.exec(p2))
                  n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
              }
              t3 = n2[e3.toLowerCase() + " "];
            }
            return null == t3 ? null : t3.join(", ");
          }, getAllResponseHeaders: function() {
            return h2 ? p2 : null;
          }, setRequestHeader: function(e3, t3) {
            return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
          }, overrideMimeType: function(e3) {
            return null == h2 && (v2.mimeType = e3), this;
          }, statusCode: function(e3) {
            var t3;
            if (e3)
              if (h2)
                T2.always(e3[T2.status]);
              else
                for (t3 in e3)
                  w2[t3] = [w2[t3], e3[t3]];
            return this;
          }, abort: function(e3) {
            var t3 = e3 || u2;
            return c2 && c2.abort(t3), l2(0, t3), this;
          } };
          if (x2.promise(T2), v2.url = ((e2 || v2.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], null == v2.crossDomain) {
            r2 = E.createElement("a");
            try {
              r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Mt.protocol + "//" + Mt.host != r2.protocol + "//" + r2.host;
            } catch (e3) {
              v2.crossDomain = true;
            }
          }
          if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = S.param(v2.data, v2.traditional)), Wt(Ot, v2, t2, T2), h2)
            return T2;
          for (i2 in (g2 = S.event && v2.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Lt.test(v2.type), f2 = v2.url.replace(jt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Nt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (Tt.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(Dt, "$1"), o2 = (Tt.test(f2) ? "&" : "?") + "_=" + wt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
            T2.setRequestHeader(i2, v2.headers[i2]);
          if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2))
            return T2.abort();
          if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Wt(Pt, v2, t2, T2)) {
            if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
              return T2;
            v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
              T2.abort("timeout");
            }, v2.timeout));
            try {
              h2 = false, c2.send(a2, l2);
            } catch (e3) {
              if (h2)
                throw e3;
              l2(-1, e3);
            }
          } else
            l2(-1, "No Transport");
          function l2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = t3;
            h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
              var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
              while ("*" === u4[0])
                u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
              if (r4) {
                for (i4 in s4)
                  if (s4[i4] && s4[i4].test(r4)) {
                    u4.unshift(i4);
                    break;
                  }
              }
              if (u4[0] in n4)
                o4 = u4[0];
              else {
                for (i4 in n4) {
                  if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                    o4 = i4;
                    break;
                  }
                  a4 || (a4 = i4);
                }
                o4 = o4 || a4;
              }
              if (o4)
                return o4 !== u4[0] && u4.unshift(o4), n4[o4];
            }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && S.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
            }), s3 = function(e4, t4, n4, r4) {
              var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
              if (c3[1])
                for (a4 in e4.converters)
                  l4[a4.toLowerCase()] = e4.converters[a4];
              o4 = c3.shift();
              while (o4)
                if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                  if ("*" === o4)
                    o4 = u4;
                  else if ("*" !== u4 && u4 !== o4) {
                    if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                      for (i4 in l4)
                        if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                          true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                          break;
                        }
                    }
                    if (true !== a4)
                      if (a4 && e4["throws"])
                        t4 = a4(t4);
                      else
                        try {
                          t4 = a4(t4);
                        } catch (e5) {
                          return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                        }
                  }
                }
              return { state: "success", data: t4 };
            }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
          }
          return T2;
        }, getJSON: function(e2, t2, n2) {
          return S.get(e2, t2, n2, "json");
        }, getScript: function(e2, t2) {
          return S.get(e2, void 0, t2, "script");
        } }), S.each(["get", "post"], function(e2, i2) {
          S[i2] = function(e3, t2, n2, r2) {
            return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
          };
        }), S.ajaxPrefilter(function(e2) {
          var t2;
          for (t2 in e2.headers)
            "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
        }), S._evalUrl = function(e2, t2, n2) {
          return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
          } }, dataFilter: function(e3) {
            S.globalEval(e3, t2, n2);
          } });
        }, S.fn.extend({ wrapAll: function(e2) {
          var t2;
          return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
            var e3 = this;
            while (e3.firstElementChild)
              e3 = e3.firstElementChild;
            return e3;
          }).append(this)), this;
        }, wrapInner: function(n2) {
          return m(n2) ? this.each(function(e2) {
            S(this).wrapInner(n2.call(this, e2));
          }) : this.each(function() {
            var e2 = S(this), t2 = e2.contents();
            t2.length ? t2.wrapAll(n2) : e2.append(n2);
          });
        }, wrap: function(t2) {
          var n2 = m(t2);
          return this.each(function(e2) {
            S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
          });
        }, unwrap: function(e2) {
          return this.parent(e2).not("body").each(function() {
            S(this).replaceWith(this.childNodes);
          }), this;
        } }), S.expr.pseudos.hidden = function(e2) {
          return !S.expr.pseudos.visible(e2);
        }, S.expr.pseudos.visible = function(e2) {
          return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
        }, S.ajaxSettings.xhr = function() {
          try {
            return new C.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
        y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i2) {
          var o2, a2;
          if (y.cors || $t && !i2.crossDomain)
            return { send: function(e2, t2) {
              var n2, r2 = i2.xhr();
              if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields)
                for (n2 in i2.xhrFields)
                  r2[n2] = i2.xhrFields[n2];
              for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2)
                r2.setRequestHeader(n2, e2[n2]);
              o2 = function(e3) {
                return function() {
                  o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Bt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
                };
              }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
                4 === r2.readyState && C.setTimeout(function() {
                  o2 && a2();
                });
              }, o2 = o2("abort");
              try {
                r2.send(i2.hasContent && i2.data || null);
              } catch (e3) {
                if (o2)
                  throw e3;
              }
            }, abort: function() {
              o2 && o2();
            } };
        }), S.ajaxPrefilter(function(e2) {
          e2.crossDomain && (e2.contents.script = false);
        }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
          return S.globalEval(e2), e2;
        } } }), S.ajaxPrefilter("script", function(e2) {
          void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
        }), S.ajaxTransport("script", function(n2) {
          var r2, i2;
          if (n2.crossDomain || n2.scriptAttrs)
            return { send: function(e2, t2) {
              r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
                r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
              }), E.head.appendChild(r2[0]);
            }, abort: function() {
              i2 && i2();
            } };
        });
        var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
          var e2 = zt.pop() || S.expando + "_" + wt.guid++;
          return this[e2] = true, e2;
        } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
          var r2, i2, o2, a2 = false !== e2.jsonp && (Ut.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e2.data) && "data");
          if (a2 || "jsonp" === e2.dataTypes[0])
            return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Ut, "$1" + r2) : false !== e2.jsonp && (e2.url += (Tt.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
              return o2 || S.error(r2 + " was not called"), o2[0];
            }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
              o2 = arguments;
            }, n2.always(function() {
              void 0 === i2 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, zt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
            }), "script";
        }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e2, t2, n2) {
          return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
          var r2, i2, o2;
        }, S.fn.load = function(e2, t2, n2) {
          var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
          return -1 < s2 && (r2 = ht(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
            o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
          }).always(n2 && function(e3, t3) {
            a2.each(function() {
              n2.apply(this, o2 || [e3.responseText, t3, e3]);
            });
          }), this;
        }, S.expr.pseudos.animated = function(t2) {
          return S.grep(S.timers, function(e2) {
            return t2 === e2.elem;
          }).length;
        }, S.offset = { setOffset: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
          "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
        } }, S.fn.extend({ offset: function(t2) {
          if (arguments.length)
            return void 0 === t2 ? this : this.each(function(e3) {
              S.offset.setOffset(this, t2, e3);
            });
          var e2, n2, r2 = this[0];
          return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function() {
          if (this[0]) {
            var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
            if ("fixed" === S.css(r2, "position"))
              t2 = r2.getBoundingClientRect();
            else {
              t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
              while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === S.css(e2, "position"))
                e2 = e2.parentNode;
              e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
            }
            return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
          }
        }, offsetParent: function() {
          return this.map(function() {
            var e2 = this.offsetParent;
            while (e2 && "static" === S.css(e2, "position"))
              e2 = e2.offsetParent;
            return e2 || re;
          });
        } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
          var o2 = "pageYOffset" === i2;
          S.fn[t2] = function(e2) {
            return $12(this, function(e3, t3, n2) {
              var r2;
              if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
                return r2 ? r2[i2] : e3[t3];
              r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
            }, t2, e2, arguments.length);
          };
        }), S.each(["top", "left"], function(e2, n2) {
          S.cssHooks[n2] = Fe(y.pixelPosition, function(e3, t2) {
            if (t2)
              return t2 = We(e3, n2), Pe.test(t2) ? S(e3).position()[n2] + "px" : t2;
          });
        }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
          S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
            S.fn[o2] = function(e2, t2) {
              var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
              return $12(this, function(e3, t3, n3) {
                var r3;
                return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
              }, s2, n2 ? e2 : void 0, n2);
            };
          });
        }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
          S.fn[t2] = function(e3) {
            return this.on(t2, e3);
          };
        }), S.fn.extend({ bind: function(e2, t2, n2) {
          return this.on(e2, null, t2, n2);
        }, unbind: function(e2, t2) {
          return this.off(e2, null, t2);
        }, delegate: function(e2, t2, n2, r2) {
          return this.on(t2, e2, n2, r2);
        }, undelegate: function(e2, t2, n2) {
          return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
        }, hover: function(e2, t2) {
          return this.mouseenter(e2).mouseleave(t2 || e2);
        } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
          S.fn[n2] = function(e3, t2) {
            return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
          };
        });
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        S.proxy = function(e2, t2) {
          var n2, r2, i2;
          if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2))
            return r2 = s.call(arguments, 2), (i2 = function() {
              return e2.apply(t2 || this, r2.concat(s.call(arguments)));
            }).guid = e2.guid = e2.guid || S.guid++, i2;
        }, S.holdReady = function(e2) {
          e2 ? S.readyWait++ : S.ready(true);
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
          var t2 = S.type(e2);
          return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
        }, S.trim = function(e2) {
          return null == e2 ? "" : (e2 + "").replace(Xt, "");
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
          return S;
        });
        var Vt = C.jQuery, Gt = C.$;
        return S.noConflict = function(e2) {
          return C.$ === S && (C.$ = Gt), e2 && C.jQuery === S && (C.jQuery = Vt), S;
        }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
      });
    }
  });

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\libs\lodash.min.js
  var require_lodash_min = __commonJS({
    "ns-hugo:C:\\Users\\congp\\Desktop\\hugo-blog\\themes\\virgo\\assets\\js\\libs\\lodash.min.js"(exports, module) {
      (function() {
        function n(n2, t2, r2) {
          switch (r2.length) {
            case 0:
              return n2.call(t2);
            case 1:
              return n2.call(t2, r2[0]);
            case 2:
              return n2.call(t2, r2[0], r2[1]);
            case 3:
              return n2.call(t2, r2[0], r2[1], r2[2]);
          }
          return n2.apply(t2, r2);
        }
        function t(n2, t2, r2, e2) {
          for (var u2 = -1, i2 = null == n2 ? 0 : n2.length; ++u2 < i2; ) {
            var o2 = n2[u2];
            t2(e2, o2, r2(o2), n2);
          }
          return e2;
        }
        function r(n2, t2) {
          for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2 && t2(n2[r2], r2, n2) !== false; )
            ;
          return n2;
        }
        function e(n2, t2) {
          for (var r2 = null == n2 ? 0 : n2.length; r2-- && t2(n2[r2], r2, n2) !== false; )
            ;
          return n2;
        }
        function u(n2, t2) {
          for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2; )
            if (!t2(n2[r2], r2, n2))
              return false;
          return true;
        }
        function i(n2, t2) {
          for (var r2 = -1, e2 = null == n2 ? 0 : n2.length, u2 = 0, i2 = []; ++r2 < e2; ) {
            var o2 = n2[r2];
            t2(o2, r2, n2) && (i2[u2++] = o2);
          }
          return i2;
        }
        function o(n2, t2) {
          return !!(null == n2 ? 0 : n2.length) && y(n2, t2, 0) > -1;
        }
        function f(n2, t2, r2) {
          for (var e2 = -1, u2 = null == n2 ? 0 : n2.length; ++e2 < u2; )
            if (r2(t2, n2[e2]))
              return true;
          return false;
        }
        function c(n2, t2) {
          for (var r2 = -1, e2 = null == n2 ? 0 : n2.length, u2 = Array(e2); ++r2 < e2; )
            u2[r2] = t2(n2[r2], r2, n2);
          return u2;
        }
        function a(n2, t2) {
          for (var r2 = -1, e2 = t2.length, u2 = n2.length; ++r2 < e2; )
            n2[u2 + r2] = t2[r2];
          return n2;
        }
        function l(n2, t2, r2, e2) {
          var u2 = -1, i2 = null == n2 ? 0 : n2.length;
          for (e2 && i2 && (r2 = n2[++u2]); ++u2 < i2; )
            r2 = t2(r2, n2[u2], u2, n2);
          return r2;
        }
        function s(n2, t2, r2, e2) {
          var u2 = null == n2 ? 0 : n2.length;
          for (e2 && u2 && (r2 = n2[--u2]); u2--; )
            r2 = t2(r2, n2[u2], u2, n2);
          return r2;
        }
        function h(n2, t2) {
          for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2; )
            if (t2(n2[r2], r2, n2))
              return true;
          return false;
        }
        function p(n2) {
          return n2.split("");
        }
        function _(n2) {
          return n2.match($t) || [];
        }
        function v(n2, t2, r2) {
          var e2;
          return r2(n2, function(n3, r3, u2) {
            if (t2(n3, r3, u2))
              return e2 = r3, false;
          }), e2;
        }
        function g(n2, t2, r2, e2) {
          for (var u2 = n2.length, i2 = r2 + (e2 ? 1 : -1); e2 ? i2-- : ++i2 < u2; )
            if (t2(n2[i2], i2, n2))
              return i2;
          return -1;
        }
        function y(n2, t2, r2) {
          return t2 === t2 ? Z(n2, t2, r2) : g(n2, b, r2);
        }
        function d(n2, t2, r2, e2) {
          for (var u2 = r2 - 1, i2 = n2.length; ++u2 < i2; )
            if (e2(n2[u2], t2))
              return u2;
          return -1;
        }
        function b(n2) {
          return n2 !== n2;
        }
        function w(n2, t2) {
          var r2 = null == n2 ? 0 : n2.length;
          return r2 ? k(n2, t2) / r2 : Cn;
        }
        function m(n2) {
          return function(t2) {
            return null == t2 ? X : t2[n2];
          };
        }
        function x(n2) {
          return function(t2) {
            return null == n2 ? X : n2[t2];
          };
        }
        function j(n2, t2, r2, e2, u2) {
          return u2(n2, function(n3, u3, i2) {
            r2 = e2 ? (e2 = false, n3) : t2(r2, n3, u3, i2);
          }), r2;
        }
        function A(n2, t2) {
          var r2 = n2.length;
          for (n2.sort(t2); r2--; )
            n2[r2] = n2[r2].value;
          return n2;
        }
        function k(n2, t2) {
          for (var r2, e2 = -1, u2 = n2.length; ++e2 < u2; ) {
            var i2 = t2(n2[e2]);
            i2 !== X && (r2 = r2 === X ? i2 : r2 + i2);
          }
          return r2;
        }
        function O(n2, t2) {
          for (var r2 = -1, e2 = Array(n2); ++r2 < n2; )
            e2[r2] = t2(r2);
          return e2;
        }
        function I(n2, t2) {
          return c(t2, function(t3) {
            return [t3, n2[t3]];
          });
        }
        function R(n2) {
          return n2 ? n2.slice(0, H(n2) + 1).replace(Lt, "") : n2;
        }
        function z(n2) {
          return function(t2) {
            return n2(t2);
          };
        }
        function E(n2, t2) {
          return c(t2, function(t3) {
            return n2[t3];
          });
        }
        function S(n2, t2) {
          return n2.has(t2);
        }
        function W(n2, t2) {
          for (var r2 = -1, e2 = n2.length; ++r2 < e2 && y(t2, n2[r2], 0) > -1; )
            ;
          return r2;
        }
        function L(n2, t2) {
          for (var r2 = n2.length; r2-- && y(t2, n2[r2], 0) > -1; )
            ;
          return r2;
        }
        function C(n2, t2) {
          for (var r2 = n2.length, e2 = 0; r2--; )
            n2[r2] === t2 && ++e2;
          return e2;
        }
        function U(n2) {
          return "\\" + Yr[n2];
        }
        function B(n2, t2) {
          return null == n2 ? X : n2[t2];
        }
        function T(n2) {
          return Nr.test(n2);
        }
        function $12(n2) {
          return Pr.test(n2);
        }
        function D(n2) {
          for (var t2, r2 = []; !(t2 = n2.next()).done; )
            r2.push(t2.value);
          return r2;
        }
        function M(n2) {
          var t2 = -1, r2 = Array(n2.size);
          return n2.forEach(function(n3, e2) {
            r2[++t2] = [e2, n3];
          }), r2;
        }
        function F(n2, t2) {
          return function(r2) {
            return n2(t2(r2));
          };
        }
        function N(n2, t2) {
          for (var r2 = -1, e2 = n2.length, u2 = 0, i2 = []; ++r2 < e2; ) {
            var o2 = n2[r2];
            o2 !== t2 && o2 !== cn || (n2[r2] = cn, i2[u2++] = r2);
          }
          return i2;
        }
        function P(n2) {
          var t2 = -1, r2 = Array(n2.size);
          return n2.forEach(function(n3) {
            r2[++t2] = n3;
          }), r2;
        }
        function q(n2) {
          var t2 = -1, r2 = Array(n2.size);
          return n2.forEach(function(n3) {
            r2[++t2] = [n3, n3];
          }), r2;
        }
        function Z(n2, t2, r2) {
          for (var e2 = r2 - 1, u2 = n2.length; ++e2 < u2; )
            if (n2[e2] === t2)
              return e2;
          return -1;
        }
        function K(n2, t2, r2) {
          for (var e2 = r2 + 1; e2--; )
            if (n2[e2] === t2)
              return e2;
          return e2;
        }
        function V(n2) {
          return T(n2) ? J(n2) : _e(n2);
        }
        function G(n2) {
          return T(n2) ? Y(n2) : p(n2);
        }
        function H(n2) {
          for (var t2 = n2.length; t2-- && Ct.test(n2.charAt(t2)); )
            ;
          return t2;
        }
        function J(n2) {
          for (var t2 = Mr.lastIndex = 0; Mr.test(n2); )
            ++t2;
          return t2;
        }
        function Y(n2) {
          return n2.match(Mr) || [];
        }
        function Q(n2) {
          return n2.match(Fr) || [];
        }
        var X, nn = "4.17.21", tn = 200, rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", en = "Expected a function", un = "Invalid `variable` option passed into `_.template`", on = "__lodash_hash_undefined__", fn = 500, cn = "__lodash_placeholder__", an = 1, ln = 2, sn = 4, hn = 1, pn = 2, _n = 1, vn = 2, gn = 4, yn = 8, dn = 16, bn = 32, wn = 64, mn = 128, xn = 256, jn = 512, An = 30, kn = "...", On = 800, In = 16, Rn = 1, zn = 2, En = 3, Sn = 1 / 0, Wn = 9007199254740991, Ln = 17976931348623157e292, Cn = NaN, Un = 4294967295, Bn = Un - 1, Tn = Un >>> 1, $n = [["ary", mn], ["bind", _n], ["bindKey", vn], ["curry", yn], ["curryRight", dn], ["flip", jn], ["partial", bn], ["partialRight", wn], ["rearg", xn]], Dn = "[object Arguments]", Mn = "[object Array]", Fn = "[object AsyncFunction]", Nn = "[object Boolean]", Pn = "[object Date]", qn = "[object DOMException]", Zn = "[object Error]", Kn = "[object Function]", Vn = "[object GeneratorFunction]", Gn = "[object Map]", Hn = "[object Number]", Jn = "[object Null]", Yn = "[object Object]", Qn = "[object Promise]", Xn = "[object Proxy]", nt = "[object RegExp]", tt = "[object Set]", rt = "[object String]", et = "[object Symbol]", ut = "[object Undefined]", it = "[object WeakMap]", ot = "[object WeakSet]", ft = "[object ArrayBuffer]", ct = "[object DataView]", at = "[object Float32Array]", lt = "[object Float64Array]", st = "[object Int8Array]", ht = "[object Int16Array]", pt = "[object Int32Array]", _t = "[object Uint8Array]", vt = "[object Uint8ClampedArray]", gt = "[object Uint16Array]", yt = "[object Uint32Array]", dt = /\b__p \+= '';/g, bt = /\b(__p \+=) '' \+/g, wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mt = /&(?:amp|lt|gt|quot|#39);/g, xt = /[&<>"']/g, jt = RegExp(mt.source), At = RegExp(xt.source), kt = /<%-([\s\S]+?)%>/g, Ot = /<%([\s\S]+?)%>/g, It = /<%=([\s\S]+?)%>/g, Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zt = /^\w*$/, Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, St = /[\\^$.*+?()[\]{}|]/g, Wt = RegExp(St.source), Lt = /^\s+/, Ct = /\s/, Ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, $t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dt = /[()=,{}\[\]\/\s]/, Mt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nt = /\w*$/, Pt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/, Kt = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/, Jt = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Qt = "\\u0300-\\u036f", Xt = "\\ufe20-\\ufe2f", nr = "\\u20d0-\\u20ff", tr = Qt + Xt + nr, rr = "\\u2700-\\u27bf", er = "a-z\\xdf-\\xf6\\xf8-\\xff", ur = "\\xac\\xb1\\xd7\\xf7", ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f", fr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cr = "A-Z\\xc0-\\xd6\\xd8-\\xde", ar = "\\ufe0e\\ufe0f", lr = ur + ir + or + fr, sr = "['\u2019]", hr = "[" + Yt + "]", pr = "[" + lr + "]", _r = "[" + tr + "]", vr = "\\d+", gr = "[" + rr + "]", yr = "[" + er + "]", dr = "[^" + Yt + lr + vr + rr + er + cr + "]", br = "\\ud83c[\\udffb-\\udfff]", wr = "(?:" + _r + "|" + br + ")", mr = "[^" + Yt + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + cr + "]", kr = "\\u200d", Or = "(?:" + yr + "|" + dr + ")", Ir = "(?:" + Ar + "|" + dr + ")", Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?", zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?", Er = wr + "?", Sr = "[" + ar + "]?", Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*", Lr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ur = Sr + Er + Wr, Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur, Tr = "(?:" + [mr + _r + "?", _r, xr, jr, hr].join("|") + ")", $r = RegExp(sr, "g"), Dr = RegExp(_r, "g"), Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"), Fr = RegExp([Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")", Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")", Ar + "?" + Or + "+" + Rr, Ar + "+" + zr, Cr, Lr, vr, Br].join("|"), "g"), Nr = RegExp("[" + kr + Yt + tr + ar + "]"), Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qr = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Zr = -1, Kr = {};
        Kr[at] = Kr[lt] = Kr[st] = Kr[ht] = Kr[pt] = Kr[_t] = Kr[vt] = Kr[gt] = Kr[yt] = true, Kr[Dn] = Kr[Mn] = Kr[ft] = Kr[Nn] = Kr[ct] = Kr[Pn] = Kr[Zn] = Kr[Kn] = Kr[Gn] = Kr[Hn] = Kr[Yn] = Kr[nt] = Kr[tt] = Kr[rt] = Kr[it] = false;
        var Vr = {};
        Vr[Dn] = Vr[Mn] = Vr[ft] = Vr[ct] = Vr[Nn] = Vr[Pn] = Vr[at] = Vr[lt] = Vr[st] = Vr[ht] = Vr[pt] = Vr[Gn] = Vr[Hn] = Vr[Yn] = Vr[nt] = Vr[tt] = Vr[rt] = Vr[et] = Vr[_t] = Vr[vt] = Vr[gt] = Vr[yt] = true, Vr[Zn] = Vr[Kn] = Vr[it] = false;
        var Gr = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        }, Hr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jr = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Yr = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qr = parseFloat, Xr = parseInt, ne = "object" == typeof global && global && global.Object === Object && global, te = "object" == typeof self && self && self.Object === Object && self, re = ne || te || Function("return this")(), ee = "object" == typeof exports && exports && !exports.nodeType && exports, ue = ee && "object" == typeof module && module && !module.nodeType && module, ie = ue && ue.exports === ee, oe = ie && ne.process, fe = function() {
          try {
            var n2 = ue && ue.require && ue.require("util").types;
            return n2 ? n2 : oe && oe.binding && oe.binding("util");
          } catch (n3) {
          }
        }(), ce = fe && fe.isArrayBuffer, ae = fe && fe.isDate, le = fe && fe.isMap, se = fe && fe.isRegExp, he = fe && fe.isSet, pe = fe && fe.isTypedArray, _e = m("length"), ve = x(Gr), ge = x(Hr), ye = x(Jr), de = function p2(x2) {
          function Z2(n2) {
            if (cc(n2) && !bh(n2) && !(n2 instanceof Ct2)) {
              if (n2 instanceof Y2)
                return n2;
              if (bl.call(n2, "__wrapped__"))
                return eo(n2);
            }
            return new Y2(n2);
          }
          function J2() {
          }
          function Y2(n2, t2) {
            this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t2, this.__index__ = 0, this.__values__ = X;
          }
          function Ct2(n2) {
            this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Un, this.__views__ = [];
          }
          function $t2() {
            var n2 = new Ct2(this.__wrapped__);
            return n2.__actions__ = Tu(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = Tu(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = Tu(this.__views__), n2;
          }
          function Yt2() {
            if (this.__filtered__) {
              var n2 = new Ct2(this);
              n2.__dir__ = -1, n2.__filtered__ = true;
            } else
              n2 = this.clone(), n2.__dir__ *= -1;
            return n2;
          }
          function Qt2() {
            var n2 = this.__wrapped__.value(), t2 = this.__dir__, r2 = bh(n2), e2 = t2 < 0, u2 = r2 ? n2.length : 0, i2 = Oi(0, u2, this.__views__), o2 = i2.start, f2 = i2.end, c2 = f2 - o2, a2 = e2 ? f2 : o2 - 1, l2 = this.__iteratees__, s2 = l2.length, h2 = 0, p3 = Hl(c2, this.__takeCount__);
            if (!r2 || !e2 && u2 == c2 && p3 == c2)
              return wu(n2, this.__actions__);
            var _2 = [];
            n:
              for (; c2-- && h2 < p3; ) {
                a2 += t2;
                for (var v2 = -1, g2 = n2[a2]; ++v2 < s2; ) {
                  var y2 = l2[v2], d2 = y2.iteratee, b2 = y2.type, w2 = d2(g2);
                  if (b2 == zn)
                    g2 = w2;
                  else if (!w2) {
                    if (b2 == Rn)
                      continue n;
                    break n;
                  }
                }
                _2[h2++] = g2;
              }
            return _2;
          }
          function Xt2(n2) {
            var t2 = -1, r2 = null == n2 ? 0 : n2.length;
            for (this.clear(); ++t2 < r2; ) {
              var e2 = n2[t2];
              this.set(e2[0], e2[1]);
            }
          }
          function nr2() {
            this.__data__ = is ? is(null) : {}, this.size = 0;
          }
          function tr2(n2) {
            var t2 = this.has(n2) && delete this.__data__[n2];
            return this.size -= t2 ? 1 : 0, t2;
          }
          function rr2(n2) {
            var t2 = this.__data__;
            if (is) {
              var r2 = t2[n2];
              return r2 === on ? X : r2;
            }
            return bl.call(t2, n2) ? t2[n2] : X;
          }
          function er2(n2) {
            var t2 = this.__data__;
            return is ? t2[n2] !== X : bl.call(t2, n2);
          }
          function ur2(n2, t2) {
            var r2 = this.__data__;
            return this.size += this.has(n2) ? 0 : 1, r2[n2] = is && t2 === X ? on : t2, this;
          }
          function ir2(n2) {
            var t2 = -1, r2 = null == n2 ? 0 : n2.length;
            for (this.clear(); ++t2 < r2; ) {
              var e2 = n2[t2];
              this.set(e2[0], e2[1]);
            }
          }
          function or2() {
            this.__data__ = [], this.size = 0;
          }
          function fr2(n2) {
            var t2 = this.__data__, r2 = Wr2(t2, n2);
            return !(r2 < 0) && (r2 == t2.length - 1 ? t2.pop() : Ll.call(t2, r2, 1), --this.size, true);
          }
          function cr2(n2) {
            var t2 = this.__data__, r2 = Wr2(t2, n2);
            return r2 < 0 ? X : t2[r2][1];
          }
          function ar2(n2) {
            return Wr2(this.__data__, n2) > -1;
          }
          function lr2(n2, t2) {
            var r2 = this.__data__, e2 = Wr2(r2, n2);
            return e2 < 0 ? (++this.size, r2.push([n2, t2])) : r2[e2][1] = t2, this;
          }
          function sr2(n2) {
            var t2 = -1, r2 = null == n2 ? 0 : n2.length;
            for (this.clear(); ++t2 < r2; ) {
              var e2 = n2[t2];
              this.set(e2[0], e2[1]);
            }
          }
          function hr2() {
            this.size = 0, this.__data__ = { hash: new Xt2(), map: new (ts || ir2)(), string: new Xt2() };
          }
          function pr2(n2) {
            var t2 = xi(this, n2).delete(n2);
            return this.size -= t2 ? 1 : 0, t2;
          }
          function _r2(n2) {
            return xi(this, n2).get(n2);
          }
          function vr2(n2) {
            return xi(this, n2).has(n2);
          }
          function gr2(n2, t2) {
            var r2 = xi(this, n2), e2 = r2.size;
            return r2.set(n2, t2), this.size += r2.size == e2 ? 0 : 1, this;
          }
          function yr2(n2) {
            var t2 = -1, r2 = null == n2 ? 0 : n2.length;
            for (this.__data__ = new sr2(); ++t2 < r2; )
              this.add(n2[t2]);
          }
          function dr2(n2) {
            return this.__data__.set(n2, on), this;
          }
          function br2(n2) {
            return this.__data__.has(n2);
          }
          function wr2(n2) {
            this.size = (this.__data__ = new ir2(n2)).size;
          }
          function mr2() {
            this.__data__ = new ir2(), this.size = 0;
          }
          function xr2(n2) {
            var t2 = this.__data__, r2 = t2.delete(n2);
            return this.size = t2.size, r2;
          }
          function jr2(n2) {
            return this.__data__.get(n2);
          }
          function Ar2(n2) {
            return this.__data__.has(n2);
          }
          function kr2(n2, t2) {
            var r2 = this.__data__;
            if (r2 instanceof ir2) {
              var e2 = r2.__data__;
              if (!ts || e2.length < tn - 1)
                return e2.push([n2, t2]), this.size = ++r2.size, this;
              r2 = this.__data__ = new sr2(e2);
            }
            return r2.set(n2, t2), this.size = r2.size, this;
          }
          function Or2(n2, t2) {
            var r2 = bh(n2), e2 = !r2 && dh(n2), u2 = !r2 && !e2 && mh(n2), i2 = !r2 && !e2 && !u2 && Oh(n2), o2 = r2 || e2 || u2 || i2, f2 = o2 ? O(n2.length, hl) : [], c2 = f2.length;
            for (var a2 in n2)
              !t2 && !bl.call(n2, a2) || o2 && ("length" == a2 || u2 && ("offset" == a2 || "parent" == a2) || i2 && ("buffer" == a2 || "byteLength" == a2 || "byteOffset" == a2) || Ci(a2, c2)) || f2.push(a2);
            return f2;
          }
          function Ir2(n2) {
            var t2 = n2.length;
            return t2 ? n2[tu(0, t2 - 1)] : X;
          }
          function Rr2(n2, t2) {
            return Xi(Tu(n2), Mr2(t2, 0, n2.length));
          }
          function zr2(n2) {
            return Xi(Tu(n2));
          }
          function Er2(n2, t2, r2) {
            (r2 === X || Gf(n2[t2], r2)) && (r2 !== X || t2 in n2) || Br2(n2, t2, r2);
          }
          function Sr2(n2, t2, r2) {
            var e2 = n2[t2];
            bl.call(n2, t2) && Gf(e2, r2) && (r2 !== X || t2 in n2) || Br2(n2, t2, r2);
          }
          function Wr2(n2, t2) {
            for (var r2 = n2.length; r2--; )
              if (Gf(n2[r2][0], t2))
                return r2;
            return -1;
          }
          function Lr2(n2, t2, r2, e2) {
            return ys(n2, function(n3, u2, i2) {
              t2(e2, n3, r2(n3), i2);
            }), e2;
          }
          function Cr2(n2, t2) {
            return n2 && $u(t2, Pc(t2), n2);
          }
          function Ur2(n2, t2) {
            return n2 && $u(t2, qc(t2), n2);
          }
          function Br2(n2, t2, r2) {
            "__proto__" == t2 && Tl ? Tl(n2, t2, { configurable: true, enumerable: true, value: r2, writable: true }) : n2[t2] = r2;
          }
          function Tr2(n2, t2) {
            for (var r2 = -1, e2 = t2.length, u2 = il(e2), i2 = null == n2; ++r2 < e2; )
              u2[r2] = i2 ? X : Mc(n2, t2[r2]);
            return u2;
          }
          function Mr2(n2, t2, r2) {
            return n2 === n2 && (r2 !== X && (n2 = n2 <= r2 ? n2 : r2), t2 !== X && (n2 = n2 >= t2 ? n2 : t2)), n2;
          }
          function Fr2(n2, t2, e2, u2, i2, o2) {
            var f2, c2 = t2 & an, a2 = t2 & ln, l2 = t2 & sn;
            if (e2 && (f2 = i2 ? e2(n2, u2, i2, o2) : e2(n2)), f2 !== X)
              return f2;
            if (!fc(n2))
              return n2;
            var s2 = bh(n2);
            if (s2) {
              if (f2 = zi(n2), !c2)
                return Tu(n2, f2);
            } else {
              var h2 = zs(n2), p3 = h2 == Kn || h2 == Vn;
              if (mh(n2))
                return Iu(n2, c2);
              if (h2 == Yn || h2 == Dn || p3 && !i2) {
                if (f2 = a2 || p3 ? {} : Ei(n2), !c2)
                  return a2 ? Mu(n2, Ur2(f2, n2)) : Du(n2, Cr2(f2, n2));
              } else {
                if (!Vr[h2])
                  return i2 ? n2 : {};
                f2 = Si(n2, h2, c2);
              }
            }
            o2 || (o2 = new wr2());
            var _2 = o2.get(n2);
            if (_2)
              return _2;
            o2.set(n2, f2), kh(n2) ? n2.forEach(function(r2) {
              f2.add(Fr2(r2, t2, e2, r2, n2, o2));
            }) : jh(n2) && n2.forEach(function(r2, u3) {
              f2.set(u3, Fr2(r2, t2, e2, u3, n2, o2));
            });
            var v2 = l2 ? a2 ? di : yi : a2 ? qc : Pc, g2 = s2 ? X : v2(n2);
            return r(g2 || n2, function(r2, u3) {
              g2 && (u3 = r2, r2 = n2[u3]), Sr2(f2, u3, Fr2(r2, t2, e2, u3, n2, o2));
            }), f2;
          }
          function Nr2(n2) {
            var t2 = Pc(n2);
            return function(r2) {
              return Pr2(r2, n2, t2);
            };
          }
          function Pr2(n2, t2, r2) {
            var e2 = r2.length;
            if (null == n2)
              return !e2;
            for (n2 = ll(n2); e2--; ) {
              var u2 = r2[e2], i2 = t2[u2], o2 = n2[u2];
              if (o2 === X && !(u2 in n2) || !i2(o2))
                return false;
            }
            return true;
          }
          function Gr2(n2, t2, r2) {
            if ("function" != typeof n2)
              throw new pl(en);
            return Ws(function() {
              n2.apply(X, r2);
            }, t2);
          }
          function Hr2(n2, t2, r2, e2) {
            var u2 = -1, i2 = o, a2 = true, l2 = n2.length, s2 = [], h2 = t2.length;
            if (!l2)
              return s2;
            r2 && (t2 = c(t2, z(r2))), e2 ? (i2 = f, a2 = false) : t2.length >= tn && (i2 = S, a2 = false, t2 = new yr2(t2));
            n:
              for (; ++u2 < l2; ) {
                var p3 = n2[u2], _2 = null == r2 ? p3 : r2(p3);
                if (p3 = e2 || 0 !== p3 ? p3 : 0, a2 && _2 === _2) {
                  for (var v2 = h2; v2--; )
                    if (t2[v2] === _2)
                      continue n;
                  s2.push(p3);
                } else
                  i2(t2, _2, e2) || s2.push(p3);
              }
            return s2;
          }
          function Jr2(n2, t2) {
            var r2 = true;
            return ys(n2, function(n3, e2, u2) {
              return r2 = !!t2(n3, e2, u2);
            }), r2;
          }
          function Yr2(n2, t2, r2) {
            for (var e2 = -1, u2 = n2.length; ++e2 < u2; ) {
              var i2 = n2[e2], o2 = t2(i2);
              if (null != o2 && (f2 === X ? o2 === o2 && !bc(o2) : r2(o2, f2)))
                var f2 = o2, c2 = i2;
            }
            return c2;
          }
          function ne2(n2, t2, r2, e2) {
            var u2 = n2.length;
            for (r2 = kc(r2), r2 < 0 && (r2 = -r2 > u2 ? 0 : u2 + r2), e2 = e2 === X || e2 > u2 ? u2 : kc(e2), e2 < 0 && (e2 += u2), e2 = r2 > e2 ? 0 : Oc(e2); r2 < e2; )
              n2[r2++] = t2;
            return n2;
          }
          function te2(n2, t2) {
            var r2 = [];
            return ys(n2, function(n3, e2, u2) {
              t2(n3, e2, u2) && r2.push(n3);
            }), r2;
          }
          function ee2(n2, t2, r2, e2, u2) {
            var i2 = -1, o2 = n2.length;
            for (r2 || (r2 = Li), u2 || (u2 = []); ++i2 < o2; ) {
              var f2 = n2[i2];
              t2 > 0 && r2(f2) ? t2 > 1 ? ee2(f2, t2 - 1, r2, e2, u2) : a(u2, f2) : e2 || (u2[u2.length] = f2);
            }
            return u2;
          }
          function ue2(n2, t2) {
            return n2 && bs(n2, t2, Pc);
          }
          function oe2(n2, t2) {
            return n2 && ws(n2, t2, Pc);
          }
          function fe2(n2, t2) {
            return i(t2, function(t3) {
              return uc(n2[t3]);
            });
          }
          function _e2(n2, t2) {
            t2 = ku(t2, n2);
            for (var r2 = 0, e2 = t2.length; null != n2 && r2 < e2; )
              n2 = n2[no(t2[r2++])];
            return r2 && r2 == e2 ? n2 : X;
          }
          function de2(n2, t2, r2) {
            var e2 = t2(n2);
            return bh(n2) ? e2 : a(e2, r2(n2));
          }
          function we(n2) {
            return null == n2 ? n2 === X ? ut : Jn : Bl && Bl in ll(n2) ? ki(n2) : Ki(n2);
          }
          function me(n2, t2) {
            return n2 > t2;
          }
          function xe(n2, t2) {
            return null != n2 && bl.call(n2, t2);
          }
          function je(n2, t2) {
            return null != n2 && t2 in ll(n2);
          }
          function Ae(n2, t2, r2) {
            return n2 >= Hl(t2, r2) && n2 < Gl(t2, r2);
          }
          function ke(n2, t2, r2) {
            for (var e2 = r2 ? f : o, u2 = n2[0].length, i2 = n2.length, a2 = i2, l2 = il(i2), s2 = 1 / 0, h2 = []; a2--; ) {
              var p3 = n2[a2];
              a2 && t2 && (p3 = c(p3, z(t2))), s2 = Hl(p3.length, s2), l2[a2] = !r2 && (t2 || u2 >= 120 && p3.length >= 120) ? new yr2(a2 && p3) : X;
            }
            p3 = n2[0];
            var _2 = -1, v2 = l2[0];
            n:
              for (; ++_2 < u2 && h2.length < s2; ) {
                var g2 = p3[_2], y2 = t2 ? t2(g2) : g2;
                if (g2 = r2 || 0 !== g2 ? g2 : 0, !(v2 ? S(v2, y2) : e2(h2, y2, r2))) {
                  for (a2 = i2; --a2; ) {
                    var d2 = l2[a2];
                    if (!(d2 ? S(d2, y2) : e2(n2[a2], y2, r2)))
                      continue n;
                  }
                  v2 && v2.push(y2), h2.push(g2);
                }
              }
            return h2;
          }
          function Oe(n2, t2, r2, e2) {
            return ue2(n2, function(n3, u2, i2) {
              t2(e2, r2(n3), u2, i2);
            }), e2;
          }
          function Ie(t2, r2, e2) {
            r2 = ku(r2, t2), t2 = Gi(t2, r2);
            var u2 = null == t2 ? t2 : t2[no(jo(r2))];
            return null == u2 ? X : n(u2, t2, e2);
          }
          function Re(n2) {
            return cc(n2) && we(n2) == Dn;
          }
          function ze(n2) {
            return cc(n2) && we(n2) == ft;
          }
          function Ee(n2) {
            return cc(n2) && we(n2) == Pn;
          }
          function Se(n2, t2, r2, e2, u2) {
            return n2 === t2 || (null == n2 || null == t2 || !cc(n2) && !cc(t2) ? n2 !== n2 && t2 !== t2 : We(n2, t2, r2, e2, Se, u2));
          }
          function We(n2, t2, r2, e2, u2, i2) {
            var o2 = bh(n2), f2 = bh(t2), c2 = o2 ? Mn : zs(n2), a2 = f2 ? Mn : zs(t2);
            c2 = c2 == Dn ? Yn : c2, a2 = a2 == Dn ? Yn : a2;
            var l2 = c2 == Yn, s2 = a2 == Yn, h2 = c2 == a2;
            if (h2 && mh(n2)) {
              if (!mh(t2))
                return false;
              o2 = true, l2 = false;
            }
            if (h2 && !l2)
              return i2 || (i2 = new wr2()), o2 || Oh(n2) ? pi(n2, t2, r2, e2, u2, i2) : _i(n2, t2, c2, r2, e2, u2, i2);
            if (!(r2 & hn)) {
              var p3 = l2 && bl.call(n2, "__wrapped__"), _2 = s2 && bl.call(t2, "__wrapped__");
              if (p3 || _2) {
                var v2 = p3 ? n2.value() : n2, g2 = _2 ? t2.value() : t2;
                return i2 || (i2 = new wr2()), u2(v2, g2, r2, e2, i2);
              }
            }
            return !!h2 && (i2 || (i2 = new wr2()), vi(n2, t2, r2, e2, u2, i2));
          }
          function Le(n2) {
            return cc(n2) && zs(n2) == Gn;
          }
          function Ce(n2, t2, r2, e2) {
            var u2 = r2.length, i2 = u2, o2 = !e2;
            if (null == n2)
              return !i2;
            for (n2 = ll(n2); u2--; ) {
              var f2 = r2[u2];
              if (o2 && f2[2] ? f2[1] !== n2[f2[0]] : !(f2[0] in n2))
                return false;
            }
            for (; ++u2 < i2; ) {
              f2 = r2[u2];
              var c2 = f2[0], a2 = n2[c2], l2 = f2[1];
              if (o2 && f2[2]) {
                if (a2 === X && !(c2 in n2))
                  return false;
              } else {
                var s2 = new wr2();
                if (e2)
                  var h2 = e2(a2, l2, c2, n2, t2, s2);
                if (!(h2 === X ? Se(l2, a2, hn | pn, e2, s2) : h2))
                  return false;
              }
            }
            return true;
          }
          function Ue(n2) {
            return !(!fc(n2) || Di(n2)) && (uc(n2) ? kl : Zt).test(to(n2));
          }
          function Be(n2) {
            return cc(n2) && we(n2) == nt;
          }
          function Te(n2) {
            return cc(n2) && zs(n2) == tt;
          }
          function $e(n2) {
            return cc(n2) && oc(n2.length) && !!Kr[we(n2)];
          }
          function De(n2) {
            return "function" == typeof n2 ? n2 : null == n2 ? La : "object" == typeof n2 ? bh(n2) ? Ze(n2[0], n2[1]) : qe(n2) : Fa(n2);
          }
          function Me(n2) {
            if (!Mi(n2))
              return Vl(n2);
            var t2 = [];
            for (var r2 in ll(n2))
              bl.call(n2, r2) && "constructor" != r2 && t2.push(r2);
            return t2;
          }
          function Fe(n2) {
            if (!fc(n2))
              return Zi(n2);
            var t2 = Mi(n2), r2 = [];
            for (var e2 in n2)
              ("constructor" != e2 || !t2 && bl.call(n2, e2)) && r2.push(e2);
            return r2;
          }
          function Ne(n2, t2) {
            return n2 < t2;
          }
          function Pe(n2, t2) {
            var r2 = -1, e2 = Hf(n2) ? il(n2.length) : [];
            return ys(n2, function(n3, u2, i2) {
              e2[++r2] = t2(n3, u2, i2);
            }), e2;
          }
          function qe(n2) {
            var t2 = ji(n2);
            return 1 == t2.length && t2[0][2] ? Ni(t2[0][0], t2[0][1]) : function(r2) {
              return r2 === n2 || Ce(r2, n2, t2);
            };
          }
          function Ze(n2, t2) {
            return Bi(n2) && Fi(t2) ? Ni(no(n2), t2) : function(r2) {
              var e2 = Mc(r2, n2);
              return e2 === X && e2 === t2 ? Nc(r2, n2) : Se(t2, e2, hn | pn);
            };
          }
          function Ke(n2, t2, r2, e2, u2) {
            n2 !== t2 && bs(t2, function(i2, o2) {
              if (u2 || (u2 = new wr2()), fc(i2))
                Ve(n2, t2, o2, r2, Ke, e2, u2);
              else {
                var f2 = e2 ? e2(Ji(n2, o2), i2, o2 + "", n2, t2, u2) : X;
                f2 === X && (f2 = i2), Er2(n2, o2, f2);
              }
            }, qc);
          }
          function Ve(n2, t2, r2, e2, u2, i2, o2) {
            var f2 = Ji(n2, r2), c2 = Ji(t2, r2), a2 = o2.get(c2);
            if (a2)
              return Er2(n2, r2, a2), X;
            var l2 = i2 ? i2(f2, c2, r2 + "", n2, t2, o2) : X, s2 = l2 === X;
            if (s2) {
              var h2 = bh(c2), p3 = !h2 && mh(c2), _2 = !h2 && !p3 && Oh(c2);
              l2 = c2, h2 || p3 || _2 ? bh(f2) ? l2 = f2 : Jf(f2) ? l2 = Tu(f2) : p3 ? (s2 = false, l2 = Iu(c2, true)) : _2 ? (s2 = false, l2 = Wu(c2, true)) : l2 = [] : gc(c2) || dh(c2) ? (l2 = f2, dh(f2) ? l2 = Rc(f2) : fc(f2) && !uc(f2) || (l2 = Ei(c2))) : s2 = false;
            }
            s2 && (o2.set(c2, l2), u2(l2, c2, e2, i2, o2), o2.delete(c2)), Er2(n2, r2, l2);
          }
          function Ge(n2, t2) {
            var r2 = n2.length;
            if (r2)
              return t2 += t2 < 0 ? r2 : 0, Ci(t2, r2) ? n2[t2] : X;
          }
          function He(n2, t2, r2) {
            t2 = t2.length ? c(t2, function(n3) {
              return bh(n3) ? function(t3) {
                return _e2(t3, 1 === n3.length ? n3[0] : n3);
              } : n3;
            }) : [La];
            var e2 = -1;
            return t2 = c(t2, z(mi())), A(Pe(n2, function(n3, r3, u2) {
              return { criteria: c(t2, function(t3) {
                return t3(n3);
              }), index: ++e2, value: n3 };
            }), function(n3, t3) {
              return Cu(n3, t3, r2);
            });
          }
          function Je(n2, t2) {
            return Ye(n2, t2, function(t3, r2) {
              return Nc(n2, r2);
            });
          }
          function Ye(n2, t2, r2) {
            for (var e2 = -1, u2 = t2.length, i2 = {}; ++e2 < u2; ) {
              var o2 = t2[e2], f2 = _e2(n2, o2);
              r2(f2, o2) && fu(i2, ku(o2, n2), f2);
            }
            return i2;
          }
          function Qe(n2) {
            return function(t2) {
              return _e2(t2, n2);
            };
          }
          function Xe(n2, t2, r2, e2) {
            var u2 = e2 ? d : y, i2 = -1, o2 = t2.length, f2 = n2;
            for (n2 === t2 && (t2 = Tu(t2)), r2 && (f2 = c(n2, z(r2))); ++i2 < o2; )
              for (var a2 = 0, l2 = t2[i2], s2 = r2 ? r2(l2) : l2; (a2 = u2(f2, s2, a2, e2)) > -1; )
                f2 !== n2 && Ll.call(f2, a2, 1), Ll.call(n2, a2, 1);
            return n2;
          }
          function nu(n2, t2) {
            for (var r2 = n2 ? t2.length : 0, e2 = r2 - 1; r2--; ) {
              var u2 = t2[r2];
              if (r2 == e2 || u2 !== i2) {
                var i2 = u2;
                Ci(u2) ? Ll.call(n2, u2, 1) : yu(n2, u2);
              }
            }
            return n2;
          }
          function tu(n2, t2) {
            return n2 + Nl(Ql() * (t2 - n2 + 1));
          }
          function ru(n2, t2, r2, e2) {
            for (var u2 = -1, i2 = Gl(Fl((t2 - n2) / (r2 || 1)), 0), o2 = il(i2); i2--; )
              o2[e2 ? i2 : ++u2] = n2, n2 += r2;
            return o2;
          }
          function eu(n2, t2) {
            var r2 = "";
            if (!n2 || t2 < 1 || t2 > Wn)
              return r2;
            do
              t2 % 2 && (r2 += n2), t2 = Nl(t2 / 2), t2 && (n2 += n2);
            while (t2);
            return r2;
          }
          function uu(n2, t2) {
            return Ls(Vi(n2, t2, La), n2 + "");
          }
          function iu(n2) {
            return Ir2(ra(n2));
          }
          function ou(n2, t2) {
            var r2 = ra(n2);
            return Xi(r2, Mr2(t2, 0, r2.length));
          }
          function fu(n2, t2, r2, e2) {
            if (!fc(n2))
              return n2;
            t2 = ku(t2, n2);
            for (var u2 = -1, i2 = t2.length, o2 = i2 - 1, f2 = n2; null != f2 && ++u2 < i2; ) {
              var c2 = no(t2[u2]), a2 = r2;
              if ("__proto__" === c2 || "constructor" === c2 || "prototype" === c2)
                return n2;
              if (u2 != o2) {
                var l2 = f2[c2];
                a2 = e2 ? e2(l2, c2, f2) : X, a2 === X && (a2 = fc(l2) ? l2 : Ci(t2[u2 + 1]) ? [] : {});
              }
              Sr2(f2, c2, a2), f2 = f2[c2];
            }
            return n2;
          }
          function cu(n2) {
            return Xi(ra(n2));
          }
          function au(n2, t2, r2) {
            var e2 = -1, u2 = n2.length;
            t2 < 0 && (t2 = -t2 > u2 ? 0 : u2 + t2), r2 = r2 > u2 ? u2 : r2, r2 < 0 && (r2 += u2), u2 = t2 > r2 ? 0 : r2 - t2 >>> 0, t2 >>>= 0;
            for (var i2 = il(u2); ++e2 < u2; )
              i2[e2] = n2[e2 + t2];
            return i2;
          }
          function lu(n2, t2) {
            var r2;
            return ys(n2, function(n3, e2, u2) {
              return r2 = t2(n3, e2, u2), !r2;
            }), !!r2;
          }
          function su(n2, t2, r2) {
            var e2 = 0, u2 = null == n2 ? e2 : n2.length;
            if ("number" == typeof t2 && t2 === t2 && u2 <= Tn) {
              for (; e2 < u2; ) {
                var i2 = e2 + u2 >>> 1, o2 = n2[i2];
                null !== o2 && !bc(o2) && (r2 ? o2 <= t2 : o2 < t2) ? e2 = i2 + 1 : u2 = i2;
              }
              return u2;
            }
            return hu(n2, t2, La, r2);
          }
          function hu(n2, t2, r2, e2) {
            var u2 = 0, i2 = null == n2 ? 0 : n2.length;
            if (0 === i2)
              return 0;
            t2 = r2(t2);
            for (var o2 = t2 !== t2, f2 = null === t2, c2 = bc(t2), a2 = t2 === X; u2 < i2; ) {
              var l2 = Nl((u2 + i2) / 2), s2 = r2(n2[l2]), h2 = s2 !== X, p3 = null === s2, _2 = s2 === s2, v2 = bc(s2);
              if (o2)
                var g2 = e2 || _2;
              else
                g2 = a2 ? _2 && (e2 || h2) : f2 ? _2 && h2 && (e2 || !p3) : c2 ? _2 && h2 && !p3 && (e2 || !v2) : !p3 && !v2 && (e2 ? s2 <= t2 : s2 < t2);
              g2 ? u2 = l2 + 1 : i2 = l2;
            }
            return Hl(i2, Bn);
          }
          function pu(n2, t2) {
            for (var r2 = -1, e2 = n2.length, u2 = 0, i2 = []; ++r2 < e2; ) {
              var o2 = n2[r2], f2 = t2 ? t2(o2) : o2;
              if (!r2 || !Gf(f2, c2)) {
                var c2 = f2;
                i2[u2++] = 0 === o2 ? 0 : o2;
              }
            }
            return i2;
          }
          function _u(n2) {
            return "number" == typeof n2 ? n2 : bc(n2) ? Cn : +n2;
          }
          function vu(n2) {
            if ("string" == typeof n2)
              return n2;
            if (bh(n2))
              return c(n2, vu) + "";
            if (bc(n2))
              return vs ? vs.call(n2) : "";
            var t2 = n2 + "";
            return "0" == t2 && 1 / n2 == -Sn ? "-0" : t2;
          }
          function gu(n2, t2, r2) {
            var e2 = -1, u2 = o, i2 = n2.length, c2 = true, a2 = [], l2 = a2;
            if (r2)
              c2 = false, u2 = f;
            else if (i2 >= tn) {
              var s2 = t2 ? null : ks(n2);
              if (s2)
                return P(s2);
              c2 = false, u2 = S, l2 = new yr2();
            } else
              l2 = t2 ? [] : a2;
            n:
              for (; ++e2 < i2; ) {
                var h2 = n2[e2], p3 = t2 ? t2(h2) : h2;
                if (h2 = r2 || 0 !== h2 ? h2 : 0, c2 && p3 === p3) {
                  for (var _2 = l2.length; _2--; )
                    if (l2[_2] === p3)
                      continue n;
                  t2 && l2.push(p3), a2.push(h2);
                } else
                  u2(l2, p3, r2) || (l2 !== a2 && l2.push(p3), a2.push(h2));
              }
            return a2;
          }
          function yu(n2, t2) {
            return t2 = ku(t2, n2), n2 = Gi(n2, t2), null == n2 || delete n2[no(jo(t2))];
          }
          function du(n2, t2, r2, e2) {
            return fu(n2, t2, r2(_e2(n2, t2)), e2);
          }
          function bu(n2, t2, r2, e2) {
            for (var u2 = n2.length, i2 = e2 ? u2 : -1; (e2 ? i2-- : ++i2 < u2) && t2(n2[i2], i2, n2); )
              ;
            return r2 ? au(n2, e2 ? 0 : i2, e2 ? i2 + 1 : u2) : au(n2, e2 ? i2 + 1 : 0, e2 ? u2 : i2);
          }
          function wu(n2, t2) {
            var r2 = n2;
            return r2 instanceof Ct2 && (r2 = r2.value()), l(t2, function(n3, t3) {
              return t3.func.apply(t3.thisArg, a([n3], t3.args));
            }, r2);
          }
          function mu(n2, t2, r2) {
            var e2 = n2.length;
            if (e2 < 2)
              return e2 ? gu(n2[0]) : [];
            for (var u2 = -1, i2 = il(e2); ++u2 < e2; )
              for (var o2 = n2[u2], f2 = -1; ++f2 < e2; )
                f2 != u2 && (i2[u2] = Hr2(i2[u2] || o2, n2[f2], t2, r2));
            return gu(ee2(i2, 1), t2, r2);
          }
          function xu(n2, t2, r2) {
            for (var e2 = -1, u2 = n2.length, i2 = t2.length, o2 = {}; ++e2 < u2; ) {
              r2(o2, n2[e2], e2 < i2 ? t2[e2] : X);
            }
            return o2;
          }
          function ju(n2) {
            return Jf(n2) ? n2 : [];
          }
          function Au(n2) {
            return "function" == typeof n2 ? n2 : La;
          }
          function ku(n2, t2) {
            return bh(n2) ? n2 : Bi(n2, t2) ? [n2] : Cs(Ec(n2));
          }
          function Ou(n2, t2, r2) {
            var e2 = n2.length;
            return r2 = r2 === X ? e2 : r2, !t2 && r2 >= e2 ? n2 : au(n2, t2, r2);
          }
          function Iu(n2, t2) {
            if (t2)
              return n2.slice();
            var r2 = n2.length, e2 = zl ? zl(r2) : new n2.constructor(r2);
            return n2.copy(e2), e2;
          }
          function Ru(n2) {
            var t2 = new n2.constructor(n2.byteLength);
            return new Rl(t2).set(new Rl(n2)), t2;
          }
          function zu(n2, t2) {
            return new n2.constructor(t2 ? Ru(n2.buffer) : n2.buffer, n2.byteOffset, n2.byteLength);
          }
          function Eu(n2) {
            var t2 = new n2.constructor(n2.source, Nt.exec(n2));
            return t2.lastIndex = n2.lastIndex, t2;
          }
          function Su(n2) {
            return _s ? ll(_s.call(n2)) : {};
          }
          function Wu(n2, t2) {
            return new n2.constructor(t2 ? Ru(n2.buffer) : n2.buffer, n2.byteOffset, n2.length);
          }
          function Lu(n2, t2) {
            if (n2 !== t2) {
              var r2 = n2 !== X, e2 = null === n2, u2 = n2 === n2, i2 = bc(n2), o2 = t2 !== X, f2 = null === t2, c2 = t2 === t2, a2 = bc(t2);
              if (!f2 && !a2 && !i2 && n2 > t2 || i2 && o2 && c2 && !f2 && !a2 || e2 && o2 && c2 || !r2 && c2 || !u2)
                return 1;
              if (!e2 && !i2 && !a2 && n2 < t2 || a2 && r2 && u2 && !e2 && !i2 || f2 && r2 && u2 || !o2 && u2 || !c2)
                return -1;
            }
            return 0;
          }
          function Cu(n2, t2, r2) {
            for (var e2 = -1, u2 = n2.criteria, i2 = t2.criteria, o2 = u2.length, f2 = r2.length; ++e2 < o2; ) {
              var c2 = Lu(u2[e2], i2[e2]);
              if (c2) {
                if (e2 >= f2)
                  return c2;
                return c2 * ("desc" == r2[e2] ? -1 : 1);
              }
            }
            return n2.index - t2.index;
          }
          function Uu(n2, t2, r2, e2) {
            for (var u2 = -1, i2 = n2.length, o2 = r2.length, f2 = -1, c2 = t2.length, a2 = Gl(i2 - o2, 0), l2 = il(c2 + a2), s2 = !e2; ++f2 < c2; )
              l2[f2] = t2[f2];
            for (; ++u2 < o2; )
              (s2 || u2 < i2) && (l2[r2[u2]] = n2[u2]);
            for (; a2--; )
              l2[f2++] = n2[u2++];
            return l2;
          }
          function Bu(n2, t2, r2, e2) {
            for (var u2 = -1, i2 = n2.length, o2 = -1, f2 = r2.length, c2 = -1, a2 = t2.length, l2 = Gl(i2 - f2, 0), s2 = il(l2 + a2), h2 = !e2; ++u2 < l2; )
              s2[u2] = n2[u2];
            for (var p3 = u2; ++c2 < a2; )
              s2[p3 + c2] = t2[c2];
            for (; ++o2 < f2; )
              (h2 || u2 < i2) && (s2[p3 + r2[o2]] = n2[u2++]);
            return s2;
          }
          function Tu(n2, t2) {
            var r2 = -1, e2 = n2.length;
            for (t2 || (t2 = il(e2)); ++r2 < e2; )
              t2[r2] = n2[r2];
            return t2;
          }
          function $u(n2, t2, r2, e2) {
            var u2 = !r2;
            r2 || (r2 = {});
            for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
              var f2 = t2[i2], c2 = e2 ? e2(r2[f2], n2[f2], f2, r2, n2) : X;
              c2 === X && (c2 = n2[f2]), u2 ? Br2(r2, f2, c2) : Sr2(r2, f2, c2);
            }
            return r2;
          }
          function Du(n2, t2) {
            return $u(n2, Is(n2), t2);
          }
          function Mu(n2, t2) {
            return $u(n2, Rs(n2), t2);
          }
          function Fu(n2, r2) {
            return function(e2, u2) {
              var i2 = bh(e2) ? t : Lr2, o2 = r2 ? r2() : {};
              return i2(e2, n2, mi(u2, 2), o2);
            };
          }
          function Nu(n2) {
            return uu(function(t2, r2) {
              var e2 = -1, u2 = r2.length, i2 = u2 > 1 ? r2[u2 - 1] : X, o2 = u2 > 2 ? r2[2] : X;
              for (i2 = n2.length > 3 && "function" == typeof i2 ? (u2--, i2) : X, o2 && Ui(r2[0], r2[1], o2) && (i2 = u2 < 3 ? X : i2, u2 = 1), t2 = ll(t2); ++e2 < u2; ) {
                var f2 = r2[e2];
                f2 && n2(t2, f2, e2, i2);
              }
              return t2;
            });
          }
          function Pu(n2, t2) {
            return function(r2, e2) {
              if (null == r2)
                return r2;
              if (!Hf(r2))
                return n2(r2, e2);
              for (var u2 = r2.length, i2 = t2 ? u2 : -1, o2 = ll(r2); (t2 ? i2-- : ++i2 < u2) && e2(o2[i2], i2, o2) !== false; )
                ;
              return r2;
            };
          }
          function qu(n2) {
            return function(t2, r2, e2) {
              for (var u2 = -1, i2 = ll(t2), o2 = e2(t2), f2 = o2.length; f2--; ) {
                var c2 = o2[n2 ? f2 : ++u2];
                if (r2(i2[c2], c2, i2) === false)
                  break;
              }
              return t2;
            };
          }
          function Zu(n2, t2, r2) {
            function e2() {
              return (this && this !== re && this instanceof e2 ? i2 : n2).apply(u2 ? r2 : this, arguments);
            }
            var u2 = t2 & _n, i2 = Gu(n2);
            return e2;
          }
          function Ku(n2) {
            return function(t2) {
              t2 = Ec(t2);
              var r2 = T(t2) ? G(t2) : X, e2 = r2 ? r2[0] : t2.charAt(0), u2 = r2 ? Ou(r2, 1).join("") : t2.slice(1);
              return e2[n2]() + u2;
            };
          }
          function Vu(n2) {
            return function(t2) {
              return l(Ra(ca(t2).replace($r, "")), n2, "");
            };
          }
          function Gu(n2) {
            return function() {
              var t2 = arguments;
              switch (t2.length) {
                case 0:
                  return new n2();
                case 1:
                  return new n2(t2[0]);
                case 2:
                  return new n2(t2[0], t2[1]);
                case 3:
                  return new n2(t2[0], t2[1], t2[2]);
                case 4:
                  return new n2(t2[0], t2[1], t2[2], t2[3]);
                case 5:
                  return new n2(t2[0], t2[1], t2[2], t2[3], t2[4]);
                case 6:
                  return new n2(t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]);
                case 7:
                  return new n2(t2[0], t2[1], t2[2], t2[3], t2[4], t2[5], t2[6]);
              }
              var r2 = gs(n2.prototype), e2 = n2.apply(r2, t2);
              return fc(e2) ? e2 : r2;
            };
          }
          function Hu(t2, r2, e2) {
            function u2() {
              for (var o2 = arguments.length, f2 = il(o2), c2 = o2, a2 = wi(u2); c2--; )
                f2[c2] = arguments[c2];
              var l2 = o2 < 3 && f2[0] !== a2 && f2[o2 - 1] !== a2 ? [] : N(f2, a2);
              return o2 -= l2.length, o2 < e2 ? oi(t2, r2, Qu, u2.placeholder, X, f2, l2, X, X, e2 - o2) : n(this && this !== re && this instanceof u2 ? i2 : t2, this, f2);
            }
            var i2 = Gu(t2);
            return u2;
          }
          function Ju(n2) {
            return function(t2, r2, e2) {
              var u2 = ll(t2);
              if (!Hf(t2)) {
                var i2 = mi(r2, 3);
                t2 = Pc(t2), r2 = function(n3) {
                  return i2(u2[n3], n3, u2);
                };
              }
              var o2 = n2(t2, r2, e2);
              return o2 > -1 ? u2[i2 ? t2[o2] : o2] : X;
            };
          }
          function Yu(n2) {
            return gi(function(t2) {
              var r2 = t2.length, e2 = r2, u2 = Y2.prototype.thru;
              for (n2 && t2.reverse(); e2--; ) {
                var i2 = t2[e2];
                if ("function" != typeof i2)
                  throw new pl(en);
                if (u2 && !o2 && "wrapper" == bi(i2))
                  var o2 = new Y2([], true);
              }
              for (e2 = o2 ? e2 : r2; ++e2 < r2; ) {
                i2 = t2[e2];
                var f2 = bi(i2), c2 = "wrapper" == f2 ? Os(i2) : X;
                o2 = c2 && $i(c2[0]) && c2[1] == (mn | yn | bn | xn) && !c2[4].length && 1 == c2[9] ? o2[bi(c2[0])].apply(o2, c2[3]) : 1 == i2.length && $i(i2) ? o2[f2]() : o2.thru(i2);
              }
              return function() {
                var n3 = arguments, e3 = n3[0];
                if (o2 && 1 == n3.length && bh(e3))
                  return o2.plant(e3).value();
                for (var u3 = 0, i3 = r2 ? t2[u3].apply(this, n3) : e3; ++u3 < r2; )
                  i3 = t2[u3].call(this, i3);
                return i3;
              };
            });
          }
          function Qu(n2, t2, r2, e2, u2, i2, o2, f2, c2, a2) {
            function l2() {
              for (var y2 = arguments.length, d2 = il(y2), b2 = y2; b2--; )
                d2[b2] = arguments[b2];
              if (_2)
                var w2 = wi(l2), m2 = C(d2, w2);
              if (e2 && (d2 = Uu(d2, e2, u2, _2)), i2 && (d2 = Bu(d2, i2, o2, _2)), y2 -= m2, _2 && y2 < a2) {
                return oi(n2, t2, Qu, l2.placeholder, r2, d2, N(d2, w2), f2, c2, a2 - y2);
              }
              var x3 = h2 ? r2 : this, j2 = p3 ? x3[n2] : n2;
              return y2 = d2.length, f2 ? d2 = Hi(d2, f2) : v2 && y2 > 1 && d2.reverse(), s2 && c2 < y2 && (d2.length = c2), this && this !== re && this instanceof l2 && (j2 = g2 || Gu(j2)), j2.apply(x3, d2);
            }
            var s2 = t2 & mn, h2 = t2 & _n, p3 = t2 & vn, _2 = t2 & (yn | dn), v2 = t2 & jn, g2 = p3 ? X : Gu(n2);
            return l2;
          }
          function Xu(n2, t2) {
            return function(r2, e2) {
              return Oe(r2, n2, t2(e2), {});
            };
          }
          function ni(n2, t2) {
            return function(r2, e2) {
              var u2;
              if (r2 === X && e2 === X)
                return t2;
              if (r2 !== X && (u2 = r2), e2 !== X) {
                if (u2 === X)
                  return e2;
                "string" == typeof r2 || "string" == typeof e2 ? (r2 = vu(r2), e2 = vu(e2)) : (r2 = _u(r2), e2 = _u(e2)), u2 = n2(r2, e2);
              }
              return u2;
            };
          }
          function ti(t2) {
            return gi(function(r2) {
              return r2 = c(r2, z(mi())), uu(function(e2) {
                var u2 = this;
                return t2(r2, function(t3) {
                  return n(t3, u2, e2);
                });
              });
            });
          }
          function ri(n2, t2) {
            t2 = t2 === X ? " " : vu(t2);
            var r2 = t2.length;
            if (r2 < 2)
              return r2 ? eu(t2, n2) : t2;
            var e2 = eu(t2, Fl(n2 / V(t2)));
            return T(t2) ? Ou(G(e2), 0, n2).join("") : e2.slice(0, n2);
          }
          function ei(t2, r2, e2, u2) {
            function i2() {
              for (var r3 = -1, c2 = arguments.length, a2 = -1, l2 = u2.length, s2 = il(l2 + c2), h2 = this && this !== re && this instanceof i2 ? f2 : t2; ++a2 < l2; )
                s2[a2] = u2[a2];
              for (; c2--; )
                s2[a2++] = arguments[++r3];
              return n(h2, o2 ? e2 : this, s2);
            }
            var o2 = r2 & _n, f2 = Gu(t2);
            return i2;
          }
          function ui(n2) {
            return function(t2, r2, e2) {
              return e2 && "number" != typeof e2 && Ui(t2, r2, e2) && (r2 = e2 = X), t2 = Ac(t2), r2 === X ? (r2 = t2, t2 = 0) : r2 = Ac(r2), e2 = e2 === X ? t2 < r2 ? 1 : -1 : Ac(e2), ru(t2, r2, e2, n2);
            };
          }
          function ii(n2) {
            return function(t2, r2) {
              return "string" == typeof t2 && "string" == typeof r2 || (t2 = Ic(t2), r2 = Ic(r2)), n2(t2, r2);
            };
          }
          function oi(n2, t2, r2, e2, u2, i2, o2, f2, c2, a2) {
            var l2 = t2 & yn, s2 = l2 ? o2 : X, h2 = l2 ? X : o2, p3 = l2 ? i2 : X, _2 = l2 ? X : i2;
            t2 |= l2 ? bn : wn, t2 &= ~(l2 ? wn : bn), t2 & gn || (t2 &= ~(_n | vn));
            var v2 = [n2, t2, u2, p3, s2, _2, h2, f2, c2, a2], g2 = r2.apply(X, v2);
            return $i(n2) && Ss(g2, v2), g2.placeholder = e2, Yi(g2, n2, t2);
          }
          function fi(n2) {
            var t2 = al[n2];
            return function(n3, r2) {
              if (n3 = Ic(n3), r2 = null == r2 ? 0 : Hl(kc(r2), 292), r2 && Zl(n3)) {
                var e2 = (Ec(n3) + "e").split("e");
                return e2 = (Ec(t2(e2[0] + "e" + (+e2[1] + r2))) + "e").split("e"), +(e2[0] + "e" + (+e2[1] - r2));
              }
              return t2(n3);
            };
          }
          function ci(n2) {
            return function(t2) {
              var r2 = zs(t2);
              return r2 == Gn ? M(t2) : r2 == tt ? q(t2) : I(t2, n2(t2));
            };
          }
          function ai(n2, t2, r2, e2, u2, i2, o2, f2) {
            var c2 = t2 & vn;
            if (!c2 && "function" != typeof n2)
              throw new pl(en);
            var a2 = e2 ? e2.length : 0;
            if (a2 || (t2 &= ~(bn | wn), e2 = u2 = X), o2 = o2 === X ? o2 : Gl(kc(o2), 0), f2 = f2 === X ? f2 : kc(f2), a2 -= u2 ? u2.length : 0, t2 & wn) {
              var l2 = e2, s2 = u2;
              e2 = u2 = X;
            }
            var h2 = c2 ? X : Os(n2), p3 = [n2, t2, r2, e2, u2, l2, s2, i2, o2, f2];
            if (h2 && qi(p3, h2), n2 = p3[0], t2 = p3[1], r2 = p3[2], e2 = p3[3], u2 = p3[4], f2 = p3[9] = p3[9] === X ? c2 ? 0 : n2.length : Gl(p3[9] - a2, 0), !f2 && t2 & (yn | dn) && (t2 &= ~(yn | dn)), t2 && t2 != _n)
              _2 = t2 == yn || t2 == dn ? Hu(n2, t2, f2) : t2 != bn && t2 != (_n | bn) || u2.length ? Qu.apply(X, p3) : ei(n2, t2, r2, e2);
            else
              var _2 = Zu(n2, t2, r2);
            return Yi((h2 ? ms : Ss)(_2, p3), n2, t2);
          }
          function li(n2, t2, r2, e2) {
            return n2 === X || Gf(n2, gl[r2]) && !bl.call(e2, r2) ? t2 : n2;
          }
          function si(n2, t2, r2, e2, u2, i2) {
            return fc(n2) && fc(t2) && (i2.set(t2, n2), Ke(n2, t2, X, si, i2), i2.delete(t2)), n2;
          }
          function hi(n2) {
            return gc(n2) ? X : n2;
          }
          function pi(n2, t2, r2, e2, u2, i2) {
            var o2 = r2 & hn, f2 = n2.length, c2 = t2.length;
            if (f2 != c2 && !(o2 && c2 > f2))
              return false;
            var a2 = i2.get(n2), l2 = i2.get(t2);
            if (a2 && l2)
              return a2 == t2 && l2 == n2;
            var s2 = -1, p3 = true, _2 = r2 & pn ? new yr2() : X;
            for (i2.set(n2, t2), i2.set(t2, n2); ++s2 < f2; ) {
              var v2 = n2[s2], g2 = t2[s2];
              if (e2)
                var y2 = o2 ? e2(g2, v2, s2, t2, n2, i2) : e2(v2, g2, s2, n2, t2, i2);
              if (y2 !== X) {
                if (y2)
                  continue;
                p3 = false;
                break;
              }
              if (_2) {
                if (!h(t2, function(n3, t3) {
                  if (!S(_2, t3) && (v2 === n3 || u2(v2, n3, r2, e2, i2)))
                    return _2.push(t3);
                })) {
                  p3 = false;
                  break;
                }
              } else if (v2 !== g2 && !u2(v2, g2, r2, e2, i2)) {
                p3 = false;
                break;
              }
            }
            return i2.delete(n2), i2.delete(t2), p3;
          }
          function _i(n2, t2, r2, e2, u2, i2, o2) {
            switch (r2) {
              case ct:
                if (n2.byteLength != t2.byteLength || n2.byteOffset != t2.byteOffset)
                  return false;
                n2 = n2.buffer, t2 = t2.buffer;
              case ft:
                return !(n2.byteLength != t2.byteLength || !i2(new Rl(n2), new Rl(t2)));
              case Nn:
              case Pn:
              case Hn:
                return Gf(+n2, +t2);
              case Zn:
                return n2.name == t2.name && n2.message == t2.message;
              case nt:
              case rt:
                return n2 == t2 + "";
              case Gn:
                var f2 = M;
              case tt:
                var c2 = e2 & hn;
                if (f2 || (f2 = P), n2.size != t2.size && !c2)
                  return false;
                var a2 = o2.get(n2);
                if (a2)
                  return a2 == t2;
                e2 |= pn, o2.set(n2, t2);
                var l2 = pi(f2(n2), f2(t2), e2, u2, i2, o2);
                return o2.delete(n2), l2;
              case et:
                if (_s)
                  return _s.call(n2) == _s.call(t2);
            }
            return false;
          }
          function vi(n2, t2, r2, e2, u2, i2) {
            var o2 = r2 & hn, f2 = yi(n2), c2 = f2.length;
            if (c2 != yi(t2).length && !o2)
              return false;
            for (var a2 = c2; a2--; ) {
              var l2 = f2[a2];
              if (!(o2 ? l2 in t2 : bl.call(t2, l2)))
                return false;
            }
            var s2 = i2.get(n2), h2 = i2.get(t2);
            if (s2 && h2)
              return s2 == t2 && h2 == n2;
            var p3 = true;
            i2.set(n2, t2), i2.set(t2, n2);
            for (var _2 = o2; ++a2 < c2; ) {
              l2 = f2[a2];
              var v2 = n2[l2], g2 = t2[l2];
              if (e2)
                var y2 = o2 ? e2(g2, v2, l2, t2, n2, i2) : e2(v2, g2, l2, n2, t2, i2);
              if (!(y2 === X ? v2 === g2 || u2(v2, g2, r2, e2, i2) : y2)) {
                p3 = false;
                break;
              }
              _2 || (_2 = "constructor" == l2);
            }
            if (p3 && !_2) {
              var d2 = n2.constructor, b2 = t2.constructor;
              d2 != b2 && "constructor" in n2 && "constructor" in t2 && !("function" == typeof d2 && d2 instanceof d2 && "function" == typeof b2 && b2 instanceof b2) && (p3 = false);
            }
            return i2.delete(n2), i2.delete(t2), p3;
          }
          function gi(n2) {
            return Ls(Vi(n2, X, _o), n2 + "");
          }
          function yi(n2) {
            return de2(n2, Pc, Is);
          }
          function di(n2) {
            return de2(n2, qc, Rs);
          }
          function bi(n2) {
            for (var t2 = n2.name + "", r2 = fs[t2], e2 = bl.call(fs, t2) ? r2.length : 0; e2--; ) {
              var u2 = r2[e2], i2 = u2.func;
              if (null == i2 || i2 == n2)
                return u2.name;
            }
            return t2;
          }
          function wi(n2) {
            return (bl.call(Z2, "placeholder") ? Z2 : n2).placeholder;
          }
          function mi() {
            var n2 = Z2.iteratee || Ca;
            return n2 = n2 === Ca ? De : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
          }
          function xi(n2, t2) {
            var r2 = n2.__data__;
            return Ti(t2) ? r2["string" == typeof t2 ? "string" : "hash"] : r2.map;
          }
          function ji(n2) {
            for (var t2 = Pc(n2), r2 = t2.length; r2--; ) {
              var e2 = t2[r2], u2 = n2[e2];
              t2[r2] = [e2, u2, Fi(u2)];
            }
            return t2;
          }
          function Ai(n2, t2) {
            var r2 = B(n2, t2);
            return Ue(r2) ? r2 : X;
          }
          function ki(n2) {
            var t2 = bl.call(n2, Bl), r2 = n2[Bl];
            try {
              n2[Bl] = X;
              var e2 = true;
            } catch (n3) {
            }
            var u2 = xl.call(n2);
            return e2 && (t2 ? n2[Bl] = r2 : delete n2[Bl]), u2;
          }
          function Oi(n2, t2, r2) {
            for (var e2 = -1, u2 = r2.length; ++e2 < u2; ) {
              var i2 = r2[e2], o2 = i2.size;
              switch (i2.type) {
                case "drop":
                  n2 += o2;
                  break;
                case "dropRight":
                  t2 -= o2;
                  break;
                case "take":
                  t2 = Hl(t2, n2 + o2);
                  break;
                case "takeRight":
                  n2 = Gl(n2, t2 - o2);
              }
            }
            return { start: n2, end: t2 };
          }
          function Ii(n2) {
            var t2 = n2.match(Bt);
            return t2 ? t2[1].split(Tt) : [];
          }
          function Ri(n2, t2, r2) {
            t2 = ku(t2, n2);
            for (var e2 = -1, u2 = t2.length, i2 = false; ++e2 < u2; ) {
              var o2 = no(t2[e2]);
              if (!(i2 = null != n2 && r2(n2, o2)))
                break;
              n2 = n2[o2];
            }
            return i2 || ++e2 != u2 ? i2 : (u2 = null == n2 ? 0 : n2.length, !!u2 && oc(u2) && Ci(o2, u2) && (bh(n2) || dh(n2)));
          }
          function zi(n2) {
            var t2 = n2.length, r2 = new n2.constructor(t2);
            return t2 && "string" == typeof n2[0] && bl.call(n2, "index") && (r2.index = n2.index, r2.input = n2.input), r2;
          }
          function Ei(n2) {
            return "function" != typeof n2.constructor || Mi(n2) ? {} : gs(El(n2));
          }
          function Si(n2, t2, r2) {
            var e2 = n2.constructor;
            switch (t2) {
              case ft:
                return Ru(n2);
              case Nn:
              case Pn:
                return new e2(+n2);
              case ct:
                return zu(n2, r2);
              case at:
              case lt:
              case st:
              case ht:
              case pt:
              case _t:
              case vt:
              case gt:
              case yt:
                return Wu(n2, r2);
              case Gn:
                return new e2();
              case Hn:
              case rt:
                return new e2(n2);
              case nt:
                return Eu(n2);
              case tt:
                return new e2();
              case et:
                return Su(n2);
            }
          }
          function Wi(n2, t2) {
            var r2 = t2.length;
            if (!r2)
              return n2;
            var e2 = r2 - 1;
            return t2[e2] = (r2 > 1 ? "& " : "") + t2[e2], t2 = t2.join(r2 > 2 ? ", " : " "), n2.replace(Ut, "{\n/* [wrapped with " + t2 + "] */\n");
          }
          function Li(n2) {
            return bh(n2) || dh(n2) || !!(Cl && n2 && n2[Cl]);
          }
          function Ci(n2, t2) {
            var r2 = typeof n2;
            return t2 = null == t2 ? Wn : t2, !!t2 && ("number" == r2 || "symbol" != r2 && Vt.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t2;
          }
          function Ui(n2, t2, r2) {
            if (!fc(r2))
              return false;
            var e2 = typeof t2;
            return !!("number" == e2 ? Hf(r2) && Ci(t2, r2.length) : "string" == e2 && t2 in r2) && Gf(r2[t2], n2);
          }
          function Bi(n2, t2) {
            if (bh(n2))
              return false;
            var r2 = typeof n2;
            return !("number" != r2 && "symbol" != r2 && "boolean" != r2 && null != n2 && !bc(n2)) || (zt.test(n2) || !Rt.test(n2) || null != t2 && n2 in ll(t2));
          }
          function Ti(n2) {
            var t2 = typeof n2;
            return "string" == t2 || "number" == t2 || "symbol" == t2 || "boolean" == t2 ? "__proto__" !== n2 : null === n2;
          }
          function $i(n2) {
            var t2 = bi(n2), r2 = Z2[t2];
            if ("function" != typeof r2 || !(t2 in Ct2.prototype))
              return false;
            if (n2 === r2)
              return true;
            var e2 = Os(r2);
            return !!e2 && n2 === e2[0];
          }
          function Di(n2) {
            return !!ml && ml in n2;
          }
          function Mi(n2) {
            var t2 = n2 && n2.constructor;
            return n2 === ("function" == typeof t2 && t2.prototype || gl);
          }
          function Fi(n2) {
            return n2 === n2 && !fc(n2);
          }
          function Ni(n2, t2) {
            return function(r2) {
              return null != r2 && (r2[n2] === t2 && (t2 !== X || n2 in ll(r2)));
            };
          }
          function Pi(n2) {
            var t2 = Cf(n2, function(n3) {
              return r2.size === fn && r2.clear(), n3;
            }), r2 = t2.cache;
            return t2;
          }
          function qi(n2, t2) {
            var r2 = n2[1], e2 = t2[1], u2 = r2 | e2, i2 = u2 < (_n | vn | mn), o2 = e2 == mn && r2 == yn || e2 == mn && r2 == xn && n2[7].length <= t2[8] || e2 == (mn | xn) && t2[7].length <= t2[8] && r2 == yn;
            if (!i2 && !o2)
              return n2;
            e2 & _n && (n2[2] = t2[2], u2 |= r2 & _n ? 0 : gn);
            var f2 = t2[3];
            if (f2) {
              var c2 = n2[3];
              n2[3] = c2 ? Uu(c2, f2, t2[4]) : f2, n2[4] = c2 ? N(n2[3], cn) : t2[4];
            }
            return f2 = t2[5], f2 && (c2 = n2[5], n2[5] = c2 ? Bu(c2, f2, t2[6]) : f2, n2[6] = c2 ? N(n2[5], cn) : t2[6]), f2 = t2[7], f2 && (n2[7] = f2), e2 & mn && (n2[8] = null == n2[8] ? t2[8] : Hl(n2[8], t2[8])), null == n2[9] && (n2[9] = t2[9]), n2[0] = t2[0], n2[1] = u2, n2;
          }
          function Zi(n2) {
            var t2 = [];
            if (null != n2)
              for (var r2 in ll(n2))
                t2.push(r2);
            return t2;
          }
          function Ki(n2) {
            return xl.call(n2);
          }
          function Vi(t2, r2, e2) {
            return r2 = Gl(r2 === X ? t2.length - 1 : r2, 0), function() {
              for (var u2 = arguments, i2 = -1, o2 = Gl(u2.length - r2, 0), f2 = il(o2); ++i2 < o2; )
                f2[i2] = u2[r2 + i2];
              i2 = -1;
              for (var c2 = il(r2 + 1); ++i2 < r2; )
                c2[i2] = u2[i2];
              return c2[r2] = e2(f2), n(t2, this, c2);
            };
          }
          function Gi(n2, t2) {
            return t2.length < 2 ? n2 : _e2(n2, au(t2, 0, -1));
          }
          function Hi(n2, t2) {
            for (var r2 = n2.length, e2 = Hl(t2.length, r2), u2 = Tu(n2); e2--; ) {
              var i2 = t2[e2];
              n2[e2] = Ci(i2, r2) ? u2[i2] : X;
            }
            return n2;
          }
          function Ji(n2, t2) {
            if (("constructor" !== t2 || "function" != typeof n2[t2]) && "__proto__" != t2)
              return n2[t2];
          }
          function Yi(n2, t2, r2) {
            var e2 = t2 + "";
            return Ls(n2, Wi(e2, ro(Ii(e2), r2)));
          }
          function Qi(n2) {
            var t2 = 0, r2 = 0;
            return function() {
              var e2 = Jl(), u2 = In - (e2 - r2);
              if (r2 = e2, u2 > 0) {
                if (++t2 >= On)
                  return arguments[0];
              } else
                t2 = 0;
              return n2.apply(X, arguments);
            };
          }
          function Xi(n2, t2) {
            var r2 = -1, e2 = n2.length, u2 = e2 - 1;
            for (t2 = t2 === X ? e2 : t2; ++r2 < t2; ) {
              var i2 = tu(r2, u2), o2 = n2[i2];
              n2[i2] = n2[r2], n2[r2] = o2;
            }
            return n2.length = t2, n2;
          }
          function no(n2) {
            if ("string" == typeof n2 || bc(n2))
              return n2;
            var t2 = n2 + "";
            return "0" == t2 && 1 / n2 == -Sn ? "-0" : t2;
          }
          function to(n2) {
            if (null != n2) {
              try {
                return dl.call(n2);
              } catch (n3) {
              }
              try {
                return n2 + "";
              } catch (n3) {
              }
            }
            return "";
          }
          function ro(n2, t2) {
            return r($n, function(r2) {
              var e2 = "_." + r2[0];
              t2 & r2[1] && !o(n2, e2) && n2.push(e2);
            }), n2.sort();
          }
          function eo(n2) {
            if (n2 instanceof Ct2)
              return n2.clone();
            var t2 = new Y2(n2.__wrapped__, n2.__chain__);
            return t2.__actions__ = Tu(n2.__actions__), t2.__index__ = n2.__index__, t2.__values__ = n2.__values__, t2;
          }
          function uo(n2, t2, r2) {
            t2 = (r2 ? Ui(n2, t2, r2) : t2 === X) ? 1 : Gl(kc(t2), 0);
            var e2 = null == n2 ? 0 : n2.length;
            if (!e2 || t2 < 1)
              return [];
            for (var u2 = 0, i2 = 0, o2 = il(Fl(e2 / t2)); u2 < e2; )
              o2[i2++] = au(n2, u2, u2 += t2);
            return o2;
          }
          function io(n2) {
            for (var t2 = -1, r2 = null == n2 ? 0 : n2.length, e2 = 0, u2 = []; ++t2 < r2; ) {
              var i2 = n2[t2];
              i2 && (u2[e2++] = i2);
            }
            return u2;
          }
          function oo() {
            var n2 = arguments.length;
            if (!n2)
              return [];
            for (var t2 = il(n2 - 1), r2 = arguments[0], e2 = n2; e2--; )
              t2[e2 - 1] = arguments[e2];
            return a(bh(r2) ? Tu(r2) : [r2], ee2(t2, 1));
          }
          function fo(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            return e2 ? (t2 = r2 || t2 === X ? 1 : kc(t2), au(n2, t2 < 0 ? 0 : t2, e2)) : [];
          }
          function co(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            return e2 ? (t2 = r2 || t2 === X ? 1 : kc(t2), t2 = e2 - t2, au(n2, 0, t2 < 0 ? 0 : t2)) : [];
          }
          function ao(n2, t2) {
            return n2 && n2.length ? bu(n2, mi(t2, 3), true, true) : [];
          }
          function lo(n2, t2) {
            return n2 && n2.length ? bu(n2, mi(t2, 3), true) : [];
          }
          function so(n2, t2, r2, e2) {
            var u2 = null == n2 ? 0 : n2.length;
            return u2 ? (r2 && "number" != typeof r2 && Ui(n2, t2, r2) && (r2 = 0, e2 = u2), ne2(n2, t2, r2, e2)) : [];
          }
          function ho(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            if (!e2)
              return -1;
            var u2 = null == r2 ? 0 : kc(r2);
            return u2 < 0 && (u2 = Gl(e2 + u2, 0)), g(n2, mi(t2, 3), u2);
          }
          function po(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            if (!e2)
              return -1;
            var u2 = e2 - 1;
            return r2 !== X && (u2 = kc(r2), u2 = r2 < 0 ? Gl(e2 + u2, 0) : Hl(u2, e2 - 1)), g(n2, mi(t2, 3), u2, true);
          }
          function _o(n2) {
            return (null == n2 ? 0 : n2.length) ? ee2(n2, 1) : [];
          }
          function vo(n2) {
            return (null == n2 ? 0 : n2.length) ? ee2(n2, Sn) : [];
          }
          function go(n2, t2) {
            return (null == n2 ? 0 : n2.length) ? (t2 = t2 === X ? 1 : kc(t2), ee2(n2, t2)) : [];
          }
          function yo(n2) {
            for (var t2 = -1, r2 = null == n2 ? 0 : n2.length, e2 = {}; ++t2 < r2; ) {
              var u2 = n2[t2];
              e2[u2[0]] = u2[1];
            }
            return e2;
          }
          function bo(n2) {
            return n2 && n2.length ? n2[0] : X;
          }
          function wo(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            if (!e2)
              return -1;
            var u2 = null == r2 ? 0 : kc(r2);
            return u2 < 0 && (u2 = Gl(e2 + u2, 0)), y(n2, t2, u2);
          }
          function mo(n2) {
            return (null == n2 ? 0 : n2.length) ? au(n2, 0, -1) : [];
          }
          function xo(n2, t2) {
            return null == n2 ? "" : Kl.call(n2, t2);
          }
          function jo(n2) {
            var t2 = null == n2 ? 0 : n2.length;
            return t2 ? n2[t2 - 1] : X;
          }
          function Ao(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            if (!e2)
              return -1;
            var u2 = e2;
            return r2 !== X && (u2 = kc(r2), u2 = u2 < 0 ? Gl(e2 + u2, 0) : Hl(u2, e2 - 1)), t2 === t2 ? K(n2, t2, u2) : g(n2, b, u2, true);
          }
          function ko(n2, t2) {
            return n2 && n2.length ? Ge(n2, kc(t2)) : X;
          }
          function Oo(n2, t2) {
            return n2 && n2.length && t2 && t2.length ? Xe(n2, t2) : n2;
          }
          function Io(n2, t2, r2) {
            return n2 && n2.length && t2 && t2.length ? Xe(n2, t2, mi(r2, 2)) : n2;
          }
          function Ro(n2, t2, r2) {
            return n2 && n2.length && t2 && t2.length ? Xe(n2, t2, X, r2) : n2;
          }
          function zo(n2, t2) {
            var r2 = [];
            if (!n2 || !n2.length)
              return r2;
            var e2 = -1, u2 = [], i2 = n2.length;
            for (t2 = mi(t2, 3); ++e2 < i2; ) {
              var o2 = n2[e2];
              t2(o2, e2, n2) && (r2.push(o2), u2.push(e2));
            }
            return nu(n2, u2), r2;
          }
          function Eo(n2) {
            return null == n2 ? n2 : Xl.call(n2);
          }
          function So(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            return e2 ? (r2 && "number" != typeof r2 && Ui(n2, t2, r2) ? (t2 = 0, r2 = e2) : (t2 = null == t2 ? 0 : kc(t2), r2 = r2 === X ? e2 : kc(r2)), au(n2, t2, r2)) : [];
          }
          function Wo(n2, t2) {
            return su(n2, t2);
          }
          function Lo(n2, t2, r2) {
            return hu(n2, t2, mi(r2, 2));
          }
          function Co(n2, t2) {
            var r2 = null == n2 ? 0 : n2.length;
            if (r2) {
              var e2 = su(n2, t2);
              if (e2 < r2 && Gf(n2[e2], t2))
                return e2;
            }
            return -1;
          }
          function Uo(n2, t2) {
            return su(n2, t2, true);
          }
          function Bo(n2, t2, r2) {
            return hu(n2, t2, mi(r2, 2), true);
          }
          function To(n2, t2) {
            if (null == n2 ? 0 : n2.length) {
              var r2 = su(n2, t2, true) - 1;
              if (Gf(n2[r2], t2))
                return r2;
            }
            return -1;
          }
          function $o(n2) {
            return n2 && n2.length ? pu(n2) : [];
          }
          function Do(n2, t2) {
            return n2 && n2.length ? pu(n2, mi(t2, 2)) : [];
          }
          function Mo(n2) {
            var t2 = null == n2 ? 0 : n2.length;
            return t2 ? au(n2, 1, t2) : [];
          }
          function Fo(n2, t2, r2) {
            return n2 && n2.length ? (t2 = r2 || t2 === X ? 1 : kc(t2), au(n2, 0, t2 < 0 ? 0 : t2)) : [];
          }
          function No(n2, t2, r2) {
            var e2 = null == n2 ? 0 : n2.length;
            return e2 ? (t2 = r2 || t2 === X ? 1 : kc(t2), t2 = e2 - t2, au(n2, t2 < 0 ? 0 : t2, e2)) : [];
          }
          function Po(n2, t2) {
            return n2 && n2.length ? bu(n2, mi(t2, 3), false, true) : [];
          }
          function qo(n2, t2) {
            return n2 && n2.length ? bu(n2, mi(t2, 3)) : [];
          }
          function Zo(n2) {
            return n2 && n2.length ? gu(n2) : [];
          }
          function Ko(n2, t2) {
            return n2 && n2.length ? gu(n2, mi(t2, 2)) : [];
          }
          function Vo(n2, t2) {
            return t2 = "function" == typeof t2 ? t2 : X, n2 && n2.length ? gu(n2, X, t2) : [];
          }
          function Go(n2) {
            if (!n2 || !n2.length)
              return [];
            var t2 = 0;
            return n2 = i(n2, function(n3) {
              if (Jf(n3))
                return t2 = Gl(n3.length, t2), true;
            }), O(t2, function(t3) {
              return c(n2, m(t3));
            });
          }
          function Ho(t2, r2) {
            if (!t2 || !t2.length)
              return [];
            var e2 = Go(t2);
            return null == r2 ? e2 : c(e2, function(t3) {
              return n(r2, X, t3);
            });
          }
          function Jo(n2, t2) {
            return xu(n2 || [], t2 || [], Sr2);
          }
          function Yo(n2, t2) {
            return xu(n2 || [], t2 || [], fu);
          }
          function Qo(n2) {
            var t2 = Z2(n2);
            return t2.__chain__ = true, t2;
          }
          function Xo(n2, t2) {
            return t2(n2), n2;
          }
          function nf(n2, t2) {
            return t2(n2);
          }
          function tf() {
            return Qo(this);
          }
          function rf() {
            return new Y2(this.value(), this.__chain__);
          }
          function ef() {
            this.__values__ === X && (this.__values__ = jc(this.value()));
            var n2 = this.__index__ >= this.__values__.length;
            return { done: n2, value: n2 ? X : this.__values__[this.__index__++] };
          }
          function uf() {
            return this;
          }
          function of(n2) {
            for (var t2, r2 = this; r2 instanceof J2; ) {
              var e2 = eo(r2);
              e2.__index__ = 0, e2.__values__ = X, t2 ? u2.__wrapped__ = e2 : t2 = e2;
              var u2 = e2;
              r2 = r2.__wrapped__;
            }
            return u2.__wrapped__ = n2, t2;
          }
          function ff() {
            var n2 = this.__wrapped__;
            if (n2 instanceof Ct2) {
              var t2 = n2;
              return this.__actions__.length && (t2 = new Ct2(this)), t2 = t2.reverse(), t2.__actions__.push({ func: nf, args: [Eo], thisArg: X }), new Y2(t2, this.__chain__);
            }
            return this.thru(Eo);
          }
          function cf() {
            return wu(this.__wrapped__, this.__actions__);
          }
          function af(n2, t2, r2) {
            var e2 = bh(n2) ? u : Jr2;
            return r2 && Ui(n2, t2, r2) && (t2 = X), e2(n2, mi(t2, 3));
          }
          function lf(n2, t2) {
            return (bh(n2) ? i : te2)(n2, mi(t2, 3));
          }
          function sf(n2, t2) {
            return ee2(yf(n2, t2), 1);
          }
          function hf(n2, t2) {
            return ee2(yf(n2, t2), Sn);
          }
          function pf(n2, t2, r2) {
            return r2 = r2 === X ? 1 : kc(r2), ee2(yf(n2, t2), r2);
          }
          function _f(n2, t2) {
            return (bh(n2) ? r : ys)(n2, mi(t2, 3));
          }
          function vf(n2, t2) {
            return (bh(n2) ? e : ds)(n2, mi(t2, 3));
          }
          function gf(n2, t2, r2, e2) {
            n2 = Hf(n2) ? n2 : ra(n2), r2 = r2 && !e2 ? kc(r2) : 0;
            var u2 = n2.length;
            return r2 < 0 && (r2 = Gl(u2 + r2, 0)), dc(n2) ? r2 <= u2 && n2.indexOf(t2, r2) > -1 : !!u2 && y(n2, t2, r2) > -1;
          }
          function yf(n2, t2) {
            return (bh(n2) ? c : Pe)(n2, mi(t2, 3));
          }
          function df(n2, t2, r2, e2) {
            return null == n2 ? [] : (bh(t2) || (t2 = null == t2 ? [] : [t2]), r2 = e2 ? X : r2, bh(r2) || (r2 = null == r2 ? [] : [r2]), He(n2, t2, r2));
          }
          function bf(n2, t2, r2) {
            var e2 = bh(n2) ? l : j, u2 = arguments.length < 3;
            return e2(n2, mi(t2, 4), r2, u2, ys);
          }
          function wf(n2, t2, r2) {
            var e2 = bh(n2) ? s : j, u2 = arguments.length < 3;
            return e2(n2, mi(t2, 4), r2, u2, ds);
          }
          function mf(n2, t2) {
            return (bh(n2) ? i : te2)(n2, Uf(mi(t2, 3)));
          }
          function xf(n2) {
            return (bh(n2) ? Ir2 : iu)(n2);
          }
          function jf(n2, t2, r2) {
            return t2 = (r2 ? Ui(n2, t2, r2) : t2 === X) ? 1 : kc(t2), (bh(n2) ? Rr2 : ou)(n2, t2);
          }
          function Af(n2) {
            return (bh(n2) ? zr2 : cu)(n2);
          }
          function kf(n2) {
            if (null == n2)
              return 0;
            if (Hf(n2))
              return dc(n2) ? V(n2) : n2.length;
            var t2 = zs(n2);
            return t2 == Gn || t2 == tt ? n2.size : Me(n2).length;
          }
          function Of(n2, t2, r2) {
            var e2 = bh(n2) ? h : lu;
            return r2 && Ui(n2, t2, r2) && (t2 = X), e2(n2, mi(t2, 3));
          }
          function If(n2, t2) {
            if ("function" != typeof t2)
              throw new pl(en);
            return n2 = kc(n2), function() {
              if (--n2 < 1)
                return t2.apply(this, arguments);
            };
          }
          function Rf(n2, t2, r2) {
            return t2 = r2 ? X : t2, t2 = n2 && null == t2 ? n2.length : t2, ai(n2, mn, X, X, X, X, t2);
          }
          function zf(n2, t2) {
            var r2;
            if ("function" != typeof t2)
              throw new pl(en);
            return n2 = kc(n2), function() {
              return --n2 > 0 && (r2 = t2.apply(this, arguments)), n2 <= 1 && (t2 = X), r2;
            };
          }
          function Ef(n2, t2, r2) {
            t2 = r2 ? X : t2;
            var e2 = ai(n2, yn, X, X, X, X, X, t2);
            return e2.placeholder = Ef.placeholder, e2;
          }
          function Sf(n2, t2, r2) {
            t2 = r2 ? X : t2;
            var e2 = ai(n2, dn, X, X, X, X, X, t2);
            return e2.placeholder = Sf.placeholder, e2;
          }
          function Wf(n2, t2, r2) {
            function e2(t3) {
              var r3 = h2, e3 = p3;
              return h2 = p3 = X, d2 = t3, v2 = n2.apply(e3, r3);
            }
            function u2(n3) {
              return d2 = n3, g2 = Ws(f2, t2), b2 ? e2(n3) : v2;
            }
            function i2(n3) {
              var r3 = n3 - y2, e3 = n3 - d2, u3 = t2 - r3;
              return w2 ? Hl(u3, _2 - e3) : u3;
            }
            function o2(n3) {
              var r3 = n3 - y2, e3 = n3 - d2;
              return y2 === X || r3 >= t2 || r3 < 0 || w2 && e3 >= _2;
            }
            function f2() {
              var n3 = fh();
              return o2(n3) ? c2(n3) : (g2 = Ws(f2, i2(n3)), X);
            }
            function c2(n3) {
              return g2 = X, m2 && h2 ? e2(n3) : (h2 = p3 = X, v2);
            }
            function a2() {
              g2 !== X && As(g2), d2 = 0, h2 = y2 = p3 = g2 = X;
            }
            function l2() {
              return g2 === X ? v2 : c2(fh());
            }
            function s2() {
              var n3 = fh(), r3 = o2(n3);
              if (h2 = arguments, p3 = this, y2 = n3, r3) {
                if (g2 === X)
                  return u2(y2);
                if (w2)
                  return As(g2), g2 = Ws(f2, t2), e2(y2);
              }
              return g2 === X && (g2 = Ws(f2, t2)), v2;
            }
            var h2, p3, _2, v2, g2, y2, d2 = 0, b2 = false, w2 = false, m2 = true;
            if ("function" != typeof n2)
              throw new pl(en);
            return t2 = Ic(t2) || 0, fc(r2) && (b2 = !!r2.leading, w2 = "maxWait" in r2, _2 = w2 ? Gl(Ic(r2.maxWait) || 0, t2) : _2, m2 = "trailing" in r2 ? !!r2.trailing : m2), s2.cancel = a2, s2.flush = l2, s2;
          }
          function Lf(n2) {
            return ai(n2, jn);
          }
          function Cf(n2, t2) {
            if ("function" != typeof n2 || null != t2 && "function" != typeof t2)
              throw new pl(en);
            var r2 = function() {
              var e2 = arguments, u2 = t2 ? t2.apply(this, e2) : e2[0], i2 = r2.cache;
              if (i2.has(u2))
                return i2.get(u2);
              var o2 = n2.apply(this, e2);
              return r2.cache = i2.set(u2, o2) || i2, o2;
            };
            return r2.cache = new (Cf.Cache || sr2)(), r2;
          }
          function Uf(n2) {
            if ("function" != typeof n2)
              throw new pl(en);
            return function() {
              var t2 = arguments;
              switch (t2.length) {
                case 0:
                  return !n2.call(this);
                case 1:
                  return !n2.call(this, t2[0]);
                case 2:
                  return !n2.call(this, t2[0], t2[1]);
                case 3:
                  return !n2.call(this, t2[0], t2[1], t2[2]);
              }
              return !n2.apply(this, t2);
            };
          }
          function Bf(n2) {
            return zf(2, n2);
          }
          function Tf(n2, t2) {
            if ("function" != typeof n2)
              throw new pl(en);
            return t2 = t2 === X ? t2 : kc(t2), uu(n2, t2);
          }
          function $f(t2, r2) {
            if ("function" != typeof t2)
              throw new pl(en);
            return r2 = null == r2 ? 0 : Gl(kc(r2), 0), uu(function(e2) {
              var u2 = e2[r2], i2 = Ou(e2, 0, r2);
              return u2 && a(i2, u2), n(t2, this, i2);
            });
          }
          function Df(n2, t2, r2) {
            var e2 = true, u2 = true;
            if ("function" != typeof n2)
              throw new pl(en);
            return fc(r2) && (e2 = "leading" in r2 ? !!r2.leading : e2, u2 = "trailing" in r2 ? !!r2.trailing : u2), Wf(n2, t2, { leading: e2, maxWait: t2, trailing: u2 });
          }
          function Mf(n2) {
            return Rf(n2, 1);
          }
          function Ff(n2, t2) {
            return ph(Au(t2), n2);
          }
          function Nf() {
            if (!arguments.length)
              return [];
            var n2 = arguments[0];
            return bh(n2) ? n2 : [n2];
          }
          function Pf(n2) {
            return Fr2(n2, sn);
          }
          function qf(n2, t2) {
            return t2 = "function" == typeof t2 ? t2 : X, Fr2(n2, sn, t2);
          }
          function Zf(n2) {
            return Fr2(n2, an | sn);
          }
          function Kf(n2, t2) {
            return t2 = "function" == typeof t2 ? t2 : X, Fr2(n2, an | sn, t2);
          }
          function Vf(n2, t2) {
            return null == t2 || Pr2(n2, t2, Pc(t2));
          }
          function Gf(n2, t2) {
            return n2 === t2 || n2 !== n2 && t2 !== t2;
          }
          function Hf(n2) {
            return null != n2 && oc(n2.length) && !uc(n2);
          }
          function Jf(n2) {
            return cc(n2) && Hf(n2);
          }
          function Yf(n2) {
            return n2 === true || n2 === false || cc(n2) && we(n2) == Nn;
          }
          function Qf(n2) {
            return cc(n2) && 1 === n2.nodeType && !gc(n2);
          }
          function Xf(n2) {
            if (null == n2)
              return true;
            if (Hf(n2) && (bh(n2) || "string" == typeof n2 || "function" == typeof n2.splice || mh(n2) || Oh(n2) || dh(n2)))
              return !n2.length;
            var t2 = zs(n2);
            if (t2 == Gn || t2 == tt)
              return !n2.size;
            if (Mi(n2))
              return !Me(n2).length;
            for (var r2 in n2)
              if (bl.call(n2, r2))
                return false;
            return true;
          }
          function nc(n2, t2) {
            return Se(n2, t2);
          }
          function tc(n2, t2, r2) {
            r2 = "function" == typeof r2 ? r2 : X;
            var e2 = r2 ? r2(n2, t2) : X;
            return e2 === X ? Se(n2, t2, X, r2) : !!e2;
          }
          function rc(n2) {
            if (!cc(n2))
              return false;
            var t2 = we(n2);
            return t2 == Zn || t2 == qn || "string" == typeof n2.message && "string" == typeof n2.name && !gc(n2);
          }
          function ec(n2) {
            return "number" == typeof n2 && Zl(n2);
          }
          function uc(n2) {
            if (!fc(n2))
              return false;
            var t2 = we(n2);
            return t2 == Kn || t2 == Vn || t2 == Fn || t2 == Xn;
          }
          function ic(n2) {
            return "number" == typeof n2 && n2 == kc(n2);
          }
          function oc(n2) {
            return "number" == typeof n2 && n2 > -1 && n2 % 1 == 0 && n2 <= Wn;
          }
          function fc(n2) {
            var t2 = typeof n2;
            return null != n2 && ("object" == t2 || "function" == t2);
          }
          function cc(n2) {
            return null != n2 && "object" == typeof n2;
          }
          function ac(n2, t2) {
            return n2 === t2 || Ce(n2, t2, ji(t2));
          }
          function lc(n2, t2, r2) {
            return r2 = "function" == typeof r2 ? r2 : X, Ce(n2, t2, ji(t2), r2);
          }
          function sc(n2) {
            return vc(n2) && n2 != +n2;
          }
          function hc(n2) {
            if (Es(n2))
              throw new fl(rn);
            return Ue(n2);
          }
          function pc(n2) {
            return null === n2;
          }
          function _c(n2) {
            return null == n2;
          }
          function vc(n2) {
            return "number" == typeof n2 || cc(n2) && we(n2) == Hn;
          }
          function gc(n2) {
            if (!cc(n2) || we(n2) != Yn)
              return false;
            var t2 = El(n2);
            if (null === t2)
              return true;
            var r2 = bl.call(t2, "constructor") && t2.constructor;
            return "function" == typeof r2 && r2 instanceof r2 && dl.call(r2) == jl;
          }
          function yc(n2) {
            return ic(n2) && n2 >= -Wn && n2 <= Wn;
          }
          function dc(n2) {
            return "string" == typeof n2 || !bh(n2) && cc(n2) && we(n2) == rt;
          }
          function bc(n2) {
            return "symbol" == typeof n2 || cc(n2) && we(n2) == et;
          }
          function wc(n2) {
            return n2 === X;
          }
          function mc(n2) {
            return cc(n2) && zs(n2) == it;
          }
          function xc(n2) {
            return cc(n2) && we(n2) == ot;
          }
          function jc(n2) {
            if (!n2)
              return [];
            if (Hf(n2))
              return dc(n2) ? G(n2) : Tu(n2);
            if (Ul && n2[Ul])
              return D(n2[Ul]());
            var t2 = zs(n2);
            return (t2 == Gn ? M : t2 == tt ? P : ra)(n2);
          }
          function Ac(n2) {
            if (!n2)
              return 0 === n2 ? n2 : 0;
            if (n2 = Ic(n2), n2 === Sn || n2 === -Sn) {
              return (n2 < 0 ? -1 : 1) * Ln;
            }
            return n2 === n2 ? n2 : 0;
          }
          function kc(n2) {
            var t2 = Ac(n2), r2 = t2 % 1;
            return t2 === t2 ? r2 ? t2 - r2 : t2 : 0;
          }
          function Oc(n2) {
            return n2 ? Mr2(kc(n2), 0, Un) : 0;
          }
          function Ic(n2) {
            if ("number" == typeof n2)
              return n2;
            if (bc(n2))
              return Cn;
            if (fc(n2)) {
              var t2 = "function" == typeof n2.valueOf ? n2.valueOf() : n2;
              n2 = fc(t2) ? t2 + "" : t2;
            }
            if ("string" != typeof n2)
              return 0 === n2 ? n2 : +n2;
            n2 = R(n2);
            var r2 = qt.test(n2);
            return r2 || Kt.test(n2) ? Xr(n2.slice(2), r2 ? 2 : 8) : Pt.test(n2) ? Cn : +n2;
          }
          function Rc(n2) {
            return $u(n2, qc(n2));
          }
          function zc(n2) {
            return n2 ? Mr2(kc(n2), -Wn, Wn) : 0 === n2 ? n2 : 0;
          }
          function Ec(n2) {
            return null == n2 ? "" : vu(n2);
          }
          function Sc(n2, t2) {
            var r2 = gs(n2);
            return null == t2 ? r2 : Cr2(r2, t2);
          }
          function Wc(n2, t2) {
            return v(n2, mi(t2, 3), ue2);
          }
          function Lc(n2, t2) {
            return v(n2, mi(t2, 3), oe2);
          }
          function Cc(n2, t2) {
            return null == n2 ? n2 : bs(n2, mi(t2, 3), qc);
          }
          function Uc(n2, t2) {
            return null == n2 ? n2 : ws(n2, mi(t2, 3), qc);
          }
          function Bc(n2, t2) {
            return n2 && ue2(n2, mi(t2, 3));
          }
          function Tc(n2, t2) {
            return n2 && oe2(n2, mi(t2, 3));
          }
          function $c(n2) {
            return null == n2 ? [] : fe2(n2, Pc(n2));
          }
          function Dc(n2) {
            return null == n2 ? [] : fe2(n2, qc(n2));
          }
          function Mc(n2, t2, r2) {
            var e2 = null == n2 ? X : _e2(n2, t2);
            return e2 === X ? r2 : e2;
          }
          function Fc(n2, t2) {
            return null != n2 && Ri(n2, t2, xe);
          }
          function Nc(n2, t2) {
            return null != n2 && Ri(n2, t2, je);
          }
          function Pc(n2) {
            return Hf(n2) ? Or2(n2) : Me(n2);
          }
          function qc(n2) {
            return Hf(n2) ? Or2(n2, true) : Fe(n2);
          }
          function Zc(n2, t2) {
            var r2 = {};
            return t2 = mi(t2, 3), ue2(n2, function(n3, e2, u2) {
              Br2(r2, t2(n3, e2, u2), n3);
            }), r2;
          }
          function Kc(n2, t2) {
            var r2 = {};
            return t2 = mi(t2, 3), ue2(n2, function(n3, e2, u2) {
              Br2(r2, e2, t2(n3, e2, u2));
            }), r2;
          }
          function Vc(n2, t2) {
            return Gc(n2, Uf(mi(t2)));
          }
          function Gc(n2, t2) {
            if (null == n2)
              return {};
            var r2 = c(di(n2), function(n3) {
              return [n3];
            });
            return t2 = mi(t2), Ye(n2, r2, function(n3, r3) {
              return t2(n3, r3[0]);
            });
          }
          function Hc(n2, t2, r2) {
            t2 = ku(t2, n2);
            var e2 = -1, u2 = t2.length;
            for (u2 || (u2 = 1, n2 = X); ++e2 < u2; ) {
              var i2 = null == n2 ? X : n2[no(t2[e2])];
              i2 === X && (e2 = u2, i2 = r2), n2 = uc(i2) ? i2.call(n2) : i2;
            }
            return n2;
          }
          function Jc(n2, t2, r2) {
            return null == n2 ? n2 : fu(n2, t2, r2);
          }
          function Yc(n2, t2, r2, e2) {
            return e2 = "function" == typeof e2 ? e2 : X, null == n2 ? n2 : fu(n2, t2, r2, e2);
          }
          function Qc(n2, t2, e2) {
            var u2 = bh(n2), i2 = u2 || mh(n2) || Oh(n2);
            if (t2 = mi(t2, 4), null == e2) {
              var o2 = n2 && n2.constructor;
              e2 = i2 ? u2 ? new o2() : [] : fc(n2) && uc(o2) ? gs(El(n2)) : {};
            }
            return (i2 ? r : ue2)(n2, function(n3, r2, u3) {
              return t2(e2, n3, r2, u3);
            }), e2;
          }
          function Xc(n2, t2) {
            return null == n2 || yu(n2, t2);
          }
          function na(n2, t2, r2) {
            return null == n2 ? n2 : du(n2, t2, Au(r2));
          }
          function ta(n2, t2, r2, e2) {
            return e2 = "function" == typeof e2 ? e2 : X, null == n2 ? n2 : du(n2, t2, Au(r2), e2);
          }
          function ra(n2) {
            return null == n2 ? [] : E(n2, Pc(n2));
          }
          function ea(n2) {
            return null == n2 ? [] : E(n2, qc(n2));
          }
          function ua(n2, t2, r2) {
            return r2 === X && (r2 = t2, t2 = X), r2 !== X && (r2 = Ic(r2), r2 = r2 === r2 ? r2 : 0), t2 !== X && (t2 = Ic(t2), t2 = t2 === t2 ? t2 : 0), Mr2(Ic(n2), t2, r2);
          }
          function ia(n2, t2, r2) {
            return t2 = Ac(t2), r2 === X ? (r2 = t2, t2 = 0) : r2 = Ac(r2), n2 = Ic(n2), Ae(n2, t2, r2);
          }
          function oa(n2, t2, r2) {
            if (r2 && "boolean" != typeof r2 && Ui(n2, t2, r2) && (t2 = r2 = X), r2 === X && ("boolean" == typeof t2 ? (r2 = t2, t2 = X) : "boolean" == typeof n2 && (r2 = n2, n2 = X)), n2 === X && t2 === X ? (n2 = 0, t2 = 1) : (n2 = Ac(n2), t2 === X ? (t2 = n2, n2 = 0) : t2 = Ac(t2)), n2 > t2) {
              var e2 = n2;
              n2 = t2, t2 = e2;
            }
            if (r2 || n2 % 1 || t2 % 1) {
              var u2 = Ql();
              return Hl(n2 + u2 * (t2 - n2 + Qr("1e-" + ((u2 + "").length - 1))), t2);
            }
            return tu(n2, t2);
          }
          function fa(n2) {
            return Qh(Ec(n2).toLowerCase());
          }
          function ca(n2) {
            return n2 = Ec(n2), n2 && n2.replace(Gt, ve).replace(Dr, "");
          }
          function aa(n2, t2, r2) {
            n2 = Ec(n2), t2 = vu(t2);
            var e2 = n2.length;
            r2 = r2 === X ? e2 : Mr2(kc(r2), 0, e2);
            var u2 = r2;
            return r2 -= t2.length, r2 >= 0 && n2.slice(r2, u2) == t2;
          }
          function la(n2) {
            return n2 = Ec(n2), n2 && At.test(n2) ? n2.replace(xt, ge) : n2;
          }
          function sa(n2) {
            return n2 = Ec(n2), n2 && Wt.test(n2) ? n2.replace(St, "\\$&") : n2;
          }
          function ha(n2, t2, r2) {
            n2 = Ec(n2), t2 = kc(t2);
            var e2 = t2 ? V(n2) : 0;
            if (!t2 || e2 >= t2)
              return n2;
            var u2 = (t2 - e2) / 2;
            return ri(Nl(u2), r2) + n2 + ri(Fl(u2), r2);
          }
          function pa(n2, t2, r2) {
            n2 = Ec(n2), t2 = kc(t2);
            var e2 = t2 ? V(n2) : 0;
            return t2 && e2 < t2 ? n2 + ri(t2 - e2, r2) : n2;
          }
          function _a(n2, t2, r2) {
            n2 = Ec(n2), t2 = kc(t2);
            var e2 = t2 ? V(n2) : 0;
            return t2 && e2 < t2 ? ri(t2 - e2, r2) + n2 : n2;
          }
          function va(n2, t2, r2) {
            return r2 || null == t2 ? t2 = 0 : t2 && (t2 = +t2), Yl(Ec(n2).replace(Lt, ""), t2 || 0);
          }
          function ga(n2, t2, r2) {
            return t2 = (r2 ? Ui(n2, t2, r2) : t2 === X) ? 1 : kc(t2), eu(Ec(n2), t2);
          }
          function ya() {
            var n2 = arguments, t2 = Ec(n2[0]);
            return n2.length < 3 ? t2 : t2.replace(n2[1], n2[2]);
          }
          function da(n2, t2, r2) {
            return r2 && "number" != typeof r2 && Ui(n2, t2, r2) && (t2 = r2 = X), (r2 = r2 === X ? Un : r2 >>> 0) ? (n2 = Ec(n2), n2 && ("string" == typeof t2 || null != t2 && !Ah(t2)) && (t2 = vu(t2), !t2 && T(n2)) ? Ou(G(n2), 0, r2) : n2.split(t2, r2)) : [];
          }
          function ba(n2, t2, r2) {
            return n2 = Ec(n2), r2 = null == r2 ? 0 : Mr2(kc(r2), 0, n2.length), t2 = vu(t2), n2.slice(r2, r2 + t2.length) == t2;
          }
          function wa(n2, t2, r2) {
            var e2 = Z2.templateSettings;
            r2 && Ui(n2, t2, r2) && (t2 = X), n2 = Ec(n2), t2 = Sh({}, t2, e2, li);
            var u2, i2, o2 = Sh({}, t2.imports, e2.imports, li), f2 = Pc(o2), c2 = E(o2, f2), a2 = 0, l2 = t2.interpolate || Ht, s2 = "__p += '", h2 = sl((t2.escape || Ht).source + "|" + l2.source + "|" + (l2 === It ? Ft : Ht).source + "|" + (t2.evaluate || Ht).source + "|$", "g"), p3 = "//# sourceURL=" + (bl.call(t2, "sourceURL") ? (t2.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zr + "]") + "\n";
            n2.replace(h2, function(t3, r3, e3, o3, f3, c3) {
              return e3 || (e3 = o3), s2 += n2.slice(a2, c3).replace(Jt, U), r3 && (u2 = true, s2 += "' +\n__e(" + r3 + ") +\n'"), f3 && (i2 = true, s2 += "';\n" + f3 + ";\n__p += '"), e3 && (s2 += "' +\n((__t = (" + e3 + ")) == null ? '' : __t) +\n'"), a2 = c3 + t3.length, t3;
            }), s2 += "';\n";
            var _2 = bl.call(t2, "variable") && t2.variable;
            if (_2) {
              if (Dt.test(_2))
                throw new fl(un);
            } else
              s2 = "with (obj) {\n" + s2 + "\n}\n";
            s2 = (i2 ? s2.replace(dt, "") : s2).replace(bt, "$1").replace(wt, "$1;"), s2 = "function(" + (_2 || "obj") + ") {\n" + (_2 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u2 ? ", __e = _.escape" : "") + (i2 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s2 + "return __p\n}";
            var v2 = Xh(function() {
              return cl(f2, p3 + "return " + s2).apply(X, c2);
            });
            if (v2.source = s2, rc(v2))
              throw v2;
            return v2;
          }
          function ma(n2) {
            return Ec(n2).toLowerCase();
          }
          function xa(n2) {
            return Ec(n2).toUpperCase();
          }
          function ja(n2, t2, r2) {
            if (n2 = Ec(n2), n2 && (r2 || t2 === X))
              return R(n2);
            if (!n2 || !(t2 = vu(t2)))
              return n2;
            var e2 = G(n2), u2 = G(t2);
            return Ou(e2, W(e2, u2), L(e2, u2) + 1).join("");
          }
          function Aa(n2, t2, r2) {
            if (n2 = Ec(n2), n2 && (r2 || t2 === X))
              return n2.slice(0, H(n2) + 1);
            if (!n2 || !(t2 = vu(t2)))
              return n2;
            var e2 = G(n2);
            return Ou(e2, 0, L(e2, G(t2)) + 1).join("");
          }
          function ka(n2, t2, r2) {
            if (n2 = Ec(n2), n2 && (r2 || t2 === X))
              return n2.replace(Lt, "");
            if (!n2 || !(t2 = vu(t2)))
              return n2;
            var e2 = G(n2);
            return Ou(e2, W(e2, G(t2))).join("");
          }
          function Oa(n2, t2) {
            var r2 = An, e2 = kn;
            if (fc(t2)) {
              var u2 = "separator" in t2 ? t2.separator : u2;
              r2 = "length" in t2 ? kc(t2.length) : r2, e2 = "omission" in t2 ? vu(t2.omission) : e2;
            }
            n2 = Ec(n2);
            var i2 = n2.length;
            if (T(n2)) {
              var o2 = G(n2);
              i2 = o2.length;
            }
            if (r2 >= i2)
              return n2;
            var f2 = r2 - V(e2);
            if (f2 < 1)
              return e2;
            var c2 = o2 ? Ou(o2, 0, f2).join("") : n2.slice(0, f2);
            if (u2 === X)
              return c2 + e2;
            if (o2 && (f2 += c2.length - f2), Ah(u2)) {
              if (n2.slice(f2).search(u2)) {
                var a2, l2 = c2;
                for (u2.global || (u2 = sl(u2.source, Ec(Nt.exec(u2)) + "g")), u2.lastIndex = 0; a2 = u2.exec(l2); )
                  var s2 = a2.index;
                c2 = c2.slice(0, s2 === X ? f2 : s2);
              }
            } else if (n2.indexOf(vu(u2), f2) != f2) {
              var h2 = c2.lastIndexOf(u2);
              h2 > -1 && (c2 = c2.slice(0, h2));
            }
            return c2 + e2;
          }
          function Ia(n2) {
            return n2 = Ec(n2), n2 && jt.test(n2) ? n2.replace(mt, ye) : n2;
          }
          function Ra(n2, t2, r2) {
            return n2 = Ec(n2), t2 = r2 ? X : t2, t2 === X ? $12(n2) ? Q(n2) : _(n2) : n2.match(t2) || [];
          }
          function za(t2) {
            var r2 = null == t2 ? 0 : t2.length, e2 = mi();
            return t2 = r2 ? c(t2, function(n2) {
              if ("function" != typeof n2[1])
                throw new pl(en);
              return [e2(n2[0]), n2[1]];
            }) : [], uu(function(e3) {
              for (var u2 = -1; ++u2 < r2; ) {
                var i2 = t2[u2];
                if (n(i2[0], this, e3))
                  return n(i2[1], this, e3);
              }
            });
          }
          function Ea(n2) {
            return Nr2(Fr2(n2, an));
          }
          function Sa(n2) {
            return function() {
              return n2;
            };
          }
          function Wa(n2, t2) {
            return null == n2 || n2 !== n2 ? t2 : n2;
          }
          function La(n2) {
            return n2;
          }
          function Ca(n2) {
            return De("function" == typeof n2 ? n2 : Fr2(n2, an));
          }
          function Ua(n2) {
            return qe(Fr2(n2, an));
          }
          function Ba(n2, t2) {
            return Ze(n2, Fr2(t2, an));
          }
          function Ta(n2, t2, e2) {
            var u2 = Pc(t2), i2 = fe2(t2, u2);
            null != e2 || fc(t2) && (i2.length || !u2.length) || (e2 = t2, t2 = n2, n2 = this, i2 = fe2(t2, Pc(t2)));
            var o2 = !(fc(e2) && "chain" in e2 && !e2.chain), f2 = uc(n2);
            return r(i2, function(r2) {
              var e3 = t2[r2];
              n2[r2] = e3, f2 && (n2.prototype[r2] = function() {
                var t3 = this.__chain__;
                if (o2 || t3) {
                  var r3 = n2(this.__wrapped__);
                  return (r3.__actions__ = Tu(this.__actions__)).push({ func: e3, args: arguments, thisArg: n2 }), r3.__chain__ = t3, r3;
                }
                return e3.apply(n2, a([this.value()], arguments));
              });
            }), n2;
          }
          function $a() {
            return re._ === this && (re._ = Al), this;
          }
          function Da() {
          }
          function Ma(n2) {
            return n2 = kc(n2), uu(function(t2) {
              return Ge(t2, n2);
            });
          }
          function Fa(n2) {
            return Bi(n2) ? m(no(n2)) : Qe(n2);
          }
          function Na(n2) {
            return function(t2) {
              return null == n2 ? X : _e2(n2, t2);
            };
          }
          function Pa() {
            return [];
          }
          function qa() {
            return false;
          }
          function Za() {
            return {};
          }
          function Ka() {
            return "";
          }
          function Va() {
            return true;
          }
          function Ga(n2, t2) {
            if (n2 = kc(n2), n2 < 1 || n2 > Wn)
              return [];
            var r2 = Un, e2 = Hl(n2, Un);
            t2 = mi(t2), n2 -= Un;
            for (var u2 = O(e2, t2); ++r2 < n2; )
              t2(r2);
            return u2;
          }
          function Ha(n2) {
            return bh(n2) ? c(n2, no) : bc(n2) ? [n2] : Tu(Cs(Ec(n2)));
          }
          function Ja(n2) {
            var t2 = ++wl;
            return Ec(n2) + t2;
          }
          function Ya(n2) {
            return n2 && n2.length ? Yr2(n2, La, me) : X;
          }
          function Qa(n2, t2) {
            return n2 && n2.length ? Yr2(n2, mi(t2, 2), me) : X;
          }
          function Xa(n2) {
            return w(n2, La);
          }
          function nl(n2, t2) {
            return w(n2, mi(t2, 2));
          }
          function tl(n2) {
            return n2 && n2.length ? Yr2(n2, La, Ne) : X;
          }
          function rl(n2, t2) {
            return n2 && n2.length ? Yr2(n2, mi(t2, 2), Ne) : X;
          }
          function el(n2) {
            return n2 && n2.length ? k(n2, La) : 0;
          }
          function ul(n2, t2) {
            return n2 && n2.length ? k(n2, mi(t2, 2)) : 0;
          }
          x2 = null == x2 ? re : be.defaults(re.Object(), x2, be.pick(re, qr));
          var il = x2.Array, ol = x2.Date, fl = x2.Error, cl = x2.Function, al = x2.Math, ll = x2.Object, sl = x2.RegExp, hl = x2.String, pl = x2.TypeError, _l = il.prototype, vl = cl.prototype, gl = ll.prototype, yl = x2["__core-js_shared__"], dl = vl.toString, bl = gl.hasOwnProperty, wl = 0, ml = function() {
            var n2 = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
            return n2 ? "Symbol(src)_1." + n2 : "";
          }(), xl = gl.toString, jl = dl.call(ll), Al = re._, kl = sl("^" + dl.call(bl).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ol = ie ? x2.Buffer : X, Il = x2.Symbol, Rl = x2.Uint8Array, zl = Ol ? Ol.allocUnsafe : X, El = F(ll.getPrototypeOf, ll), Sl = ll.create, Wl = gl.propertyIsEnumerable, Ll = _l.splice, Cl = Il ? Il.isConcatSpreadable : X, Ul = Il ? Il.iterator : X, Bl = Il ? Il.toStringTag : X, Tl = function() {
            try {
              var n2 = Ai(ll, "defineProperty");
              return n2({}, "", {}), n2;
            } catch (n3) {
            }
          }(), $l = x2.clearTimeout !== re.clearTimeout && x2.clearTimeout, Dl = ol && ol.now !== re.Date.now && ol.now, Ml = x2.setTimeout !== re.setTimeout && x2.setTimeout, Fl = al.ceil, Nl = al.floor, Pl = ll.getOwnPropertySymbols, ql = Ol ? Ol.isBuffer : X, Zl = x2.isFinite, Kl = _l.join, Vl = F(ll.keys, ll), Gl = al.max, Hl = al.min, Jl = ol.now, Yl = x2.parseInt, Ql = al.random, Xl = _l.reverse, ns = Ai(x2, "DataView"), ts = Ai(x2, "Map"), rs = Ai(x2, "Promise"), es = Ai(x2, "Set"), us = Ai(x2, "WeakMap"), is = Ai(ll, "create"), os = us && new us(), fs = {}, cs = to(ns), as = to(ts), ls = to(rs), ss = to(es), hs = to(us), ps = Il ? Il.prototype : X, _s = ps ? ps.valueOf : X, vs = ps ? ps.toString : X, gs = function() {
            function n2() {
            }
            return function(t2) {
              if (!fc(t2))
                return {};
              if (Sl)
                return Sl(t2);
              n2.prototype = t2;
              var r2 = new n2();
              return n2.prototype = X, r2;
            };
          }();
          Z2.templateSettings = { escape: kt, evaluate: Ot, interpolate: It, variable: "", imports: { _: Z2 } }, Z2.prototype = J2.prototype, Z2.prototype.constructor = Z2, Y2.prototype = gs(J2.prototype), Y2.prototype.constructor = Y2, Ct2.prototype = gs(J2.prototype), Ct2.prototype.constructor = Ct2, Xt2.prototype.clear = nr2, Xt2.prototype.delete = tr2, Xt2.prototype.get = rr2, Xt2.prototype.has = er2, Xt2.prototype.set = ur2, ir2.prototype.clear = or2, ir2.prototype.delete = fr2, ir2.prototype.get = cr2, ir2.prototype.has = ar2, ir2.prototype.set = lr2, sr2.prototype.clear = hr2, sr2.prototype.delete = pr2, sr2.prototype.get = _r2, sr2.prototype.has = vr2, sr2.prototype.set = gr2, yr2.prototype.add = yr2.prototype.push = dr2, yr2.prototype.has = br2, wr2.prototype.clear = mr2, wr2.prototype.delete = xr2, wr2.prototype.get = jr2, wr2.prototype.has = Ar2, wr2.prototype.set = kr2;
          var ys = Pu(ue2), ds = Pu(oe2, true), bs = qu(), ws = qu(true), ms = os ? function(n2, t2) {
            return os.set(n2, t2), n2;
          } : La, xs = Tl ? function(n2, t2) {
            return Tl(n2, "toString", {
              configurable: true,
              enumerable: false,
              value: Sa(t2),
              writable: true
            });
          } : La, js = uu, As = $l || function(n2) {
            return re.clearTimeout(n2);
          }, ks = es && 1 / P(new es([, -0]))[1] == Sn ? function(n2) {
            return new es(n2);
          } : Da, Os = os ? function(n2) {
            return os.get(n2);
          } : Da, Is = Pl ? function(n2) {
            return null == n2 ? [] : (n2 = ll(n2), i(Pl(n2), function(t2) {
              return Wl.call(n2, t2);
            }));
          } : Pa, Rs = Pl ? function(n2) {
            for (var t2 = []; n2; )
              a(t2, Is(n2)), n2 = El(n2);
            return t2;
          } : Pa, zs = we;
          (ns && zs(new ns(new ArrayBuffer(1))) != ct || ts && zs(new ts()) != Gn || rs && zs(rs.resolve()) != Qn || es && zs(new es()) != tt || us && zs(new us()) != it) && (zs = function(n2) {
            var t2 = we(n2), r2 = t2 == Yn ? n2.constructor : X, e2 = r2 ? to(r2) : "";
            if (e2)
              switch (e2) {
                case cs:
                  return ct;
                case as:
                  return Gn;
                case ls:
                  return Qn;
                case ss:
                  return tt;
                case hs:
                  return it;
              }
            return t2;
          });
          var Es = yl ? uc : qa, Ss = Qi(ms), Ws = Ml || function(n2, t2) {
            return re.setTimeout(n2, t2);
          }, Ls = Qi(xs), Cs = Pi(function(n2) {
            var t2 = [];
            return 46 === n2.charCodeAt(0) && t2.push(""), n2.replace(Et, function(n3, r2, e2, u2) {
              t2.push(e2 ? u2.replace(Mt, "$1") : r2 || n3);
            }), t2;
          }), Us = uu(function(n2, t2) {
            return Jf(n2) ? Hr2(n2, ee2(t2, 1, Jf, true)) : [];
          }), Bs = uu(function(n2, t2) {
            var r2 = jo(t2);
            return Jf(r2) && (r2 = X), Jf(n2) ? Hr2(n2, ee2(t2, 1, Jf, true), mi(r2, 2)) : [];
          }), Ts = uu(function(n2, t2) {
            var r2 = jo(t2);
            return Jf(r2) && (r2 = X), Jf(n2) ? Hr2(n2, ee2(t2, 1, Jf, true), X, r2) : [];
          }), $s = uu(function(n2) {
            var t2 = c(n2, ju);
            return t2.length && t2[0] === n2[0] ? ke(t2) : [];
          }), Ds = uu(function(n2) {
            var t2 = jo(n2), r2 = c(n2, ju);
            return t2 === jo(r2) ? t2 = X : r2.pop(), r2.length && r2[0] === n2[0] ? ke(r2, mi(t2, 2)) : [];
          }), Ms = uu(function(n2) {
            var t2 = jo(n2), r2 = c(n2, ju);
            return t2 = "function" == typeof t2 ? t2 : X, t2 && r2.pop(), r2.length && r2[0] === n2[0] ? ke(r2, X, t2) : [];
          }), Fs = uu(Oo), Ns = gi(function(n2, t2) {
            var r2 = null == n2 ? 0 : n2.length, e2 = Tr2(n2, t2);
            return nu(n2, c(t2, function(n3) {
              return Ci(n3, r2) ? +n3 : n3;
            }).sort(Lu)), e2;
          }), Ps = uu(function(n2) {
            return gu(ee2(n2, 1, Jf, true));
          }), qs = uu(function(n2) {
            var t2 = jo(n2);
            return Jf(t2) && (t2 = X), gu(ee2(n2, 1, Jf, true), mi(t2, 2));
          }), Zs = uu(function(n2) {
            var t2 = jo(n2);
            return t2 = "function" == typeof t2 ? t2 : X, gu(ee2(n2, 1, Jf, true), X, t2);
          }), Ks = uu(function(n2, t2) {
            return Jf(n2) ? Hr2(n2, t2) : [];
          }), Vs = uu(function(n2) {
            return mu(i(n2, Jf));
          }), Gs = uu(function(n2) {
            var t2 = jo(n2);
            return Jf(t2) && (t2 = X), mu(i(n2, Jf), mi(t2, 2));
          }), Hs = uu(function(n2) {
            var t2 = jo(n2);
            return t2 = "function" == typeof t2 ? t2 : X, mu(i(n2, Jf), X, t2);
          }), Js = uu(Go), Ys = uu(function(n2) {
            var t2 = n2.length, r2 = t2 > 1 ? n2[t2 - 1] : X;
            return r2 = "function" == typeof r2 ? (n2.pop(), r2) : X, Ho(n2, r2);
          }), Qs = gi(function(n2) {
            var t2 = n2.length, r2 = t2 ? n2[0] : 0, e2 = this.__wrapped__, u2 = function(t3) {
              return Tr2(t3, n2);
            };
            return !(t2 > 1 || this.__actions__.length) && e2 instanceof Ct2 && Ci(r2) ? (e2 = e2.slice(r2, +r2 + (t2 ? 1 : 0)), e2.__actions__.push({ func: nf, args: [u2], thisArg: X }), new Y2(e2, this.__chain__).thru(function(n3) {
              return t2 && !n3.length && n3.push(X), n3;
            })) : this.thru(u2);
          }), Xs = Fu(function(n2, t2, r2) {
            bl.call(n2, r2) ? ++n2[r2] : Br2(n2, r2, 1);
          }), nh = Ju(ho), th = Ju(po), rh = Fu(function(n2, t2, r2) {
            bl.call(n2, r2) ? n2[r2].push(t2) : Br2(n2, r2, [t2]);
          }), eh = uu(function(t2, r2, e2) {
            var u2 = -1, i2 = "function" == typeof r2, o2 = Hf(t2) ? il(t2.length) : [];
            return ys(t2, function(t3) {
              o2[++u2] = i2 ? n(r2, t3, e2) : Ie(t3, r2, e2);
            }), o2;
          }), uh = Fu(function(n2, t2, r2) {
            Br2(n2, r2, t2);
          }), ih = Fu(function(n2, t2, r2) {
            n2[r2 ? 0 : 1].push(t2);
          }, function() {
            return [[], []];
          }), oh = uu(function(n2, t2) {
            if (null == n2)
              return [];
            var r2 = t2.length;
            return r2 > 1 && Ui(n2, t2[0], t2[1]) ? t2 = [] : r2 > 2 && Ui(t2[0], t2[1], t2[2]) && (t2 = [t2[0]]), He(n2, ee2(t2, 1), []);
          }), fh = Dl || function() {
            return re.Date.now();
          }, ch = uu(function(n2, t2, r2) {
            var e2 = _n;
            if (r2.length) {
              var u2 = N(r2, wi(ch));
              e2 |= bn;
            }
            return ai(n2, e2, t2, r2, u2);
          }), ah = uu(function(n2, t2, r2) {
            var e2 = _n | vn;
            if (r2.length) {
              var u2 = N(r2, wi(ah));
              e2 |= bn;
            }
            return ai(t2, e2, n2, r2, u2);
          }), lh = uu(function(n2, t2) {
            return Gr2(n2, 1, t2);
          }), sh = uu(function(n2, t2, r2) {
            return Gr2(n2, Ic(t2) || 0, r2);
          });
          Cf.Cache = sr2;
          var hh = js(function(t2, r2) {
            r2 = 1 == r2.length && bh(r2[0]) ? c(r2[0], z(mi())) : c(ee2(r2, 1), z(mi()));
            var e2 = r2.length;
            return uu(function(u2) {
              for (var i2 = -1, o2 = Hl(u2.length, e2); ++i2 < o2; )
                u2[i2] = r2[i2].call(this, u2[i2]);
              return n(t2, this, u2);
            });
          }), ph = uu(function(n2, t2) {
            return ai(n2, bn, X, t2, N(t2, wi(ph)));
          }), _h = uu(function(n2, t2) {
            return ai(n2, wn, X, t2, N(t2, wi(_h)));
          }), vh = gi(function(n2, t2) {
            return ai(n2, xn, X, X, X, t2);
          }), gh = ii(me), yh = ii(function(n2, t2) {
            return n2 >= t2;
          }), dh = Re(function() {
            return arguments;
          }()) ? Re : function(n2) {
            return cc(n2) && bl.call(n2, "callee") && !Wl.call(n2, "callee");
          }, bh = il.isArray, wh = ce ? z(ce) : ze, mh = ql || qa, xh = ae ? z(ae) : Ee, jh = le ? z(le) : Le, Ah = se ? z(se) : Be, kh = he ? z(he) : Te, Oh = pe ? z(pe) : $e, Ih = ii(Ne), Rh = ii(function(n2, t2) {
            return n2 <= t2;
          }), zh = Nu(function(n2, t2) {
            if (Mi(t2) || Hf(t2))
              return $u(t2, Pc(t2), n2), X;
            for (var r2 in t2)
              bl.call(t2, r2) && Sr2(n2, r2, t2[r2]);
          }), Eh = Nu(function(n2, t2) {
            $u(t2, qc(t2), n2);
          }), Sh = Nu(function(n2, t2, r2, e2) {
            $u(t2, qc(t2), n2, e2);
          }), Wh = Nu(function(n2, t2, r2, e2) {
            $u(t2, Pc(t2), n2, e2);
          }), Lh = gi(Tr2), Ch = uu(function(n2, t2) {
            n2 = ll(n2);
            var r2 = -1, e2 = t2.length, u2 = e2 > 2 ? t2[2] : X;
            for (u2 && Ui(t2[0], t2[1], u2) && (e2 = 1); ++r2 < e2; )
              for (var i2 = t2[r2], o2 = qc(i2), f2 = -1, c2 = o2.length; ++f2 < c2; ) {
                var a2 = o2[f2], l2 = n2[a2];
                (l2 === X || Gf(l2, gl[a2]) && !bl.call(n2, a2)) && (n2[a2] = i2[a2]);
              }
            return n2;
          }), Uh = uu(function(t2) {
            return t2.push(X, si), n(Mh, X, t2);
          }), Bh = Xu(function(n2, t2, r2) {
            null != t2 && "function" != typeof t2.toString && (t2 = xl.call(t2)), n2[t2] = r2;
          }, Sa(La)), Th = Xu(function(n2, t2, r2) {
            null != t2 && "function" != typeof t2.toString && (t2 = xl.call(t2)), bl.call(n2, t2) ? n2[t2].push(r2) : n2[t2] = [r2];
          }, mi), $h = uu(Ie), Dh = Nu(function(n2, t2, r2) {
            Ke(n2, t2, r2);
          }), Mh = Nu(function(n2, t2, r2, e2) {
            Ke(n2, t2, r2, e2);
          }), Fh = gi(function(n2, t2) {
            var r2 = {};
            if (null == n2)
              return r2;
            var e2 = false;
            t2 = c(t2, function(t3) {
              return t3 = ku(t3, n2), e2 || (e2 = t3.length > 1), t3;
            }), $u(n2, di(n2), r2), e2 && (r2 = Fr2(r2, an | ln | sn, hi));
            for (var u2 = t2.length; u2--; )
              yu(r2, t2[u2]);
            return r2;
          }), Nh = gi(function(n2, t2) {
            return null == n2 ? {} : Je(n2, t2);
          }), Ph = ci(Pc), qh = ci(qc), Zh = Vu(function(n2, t2, r2) {
            return t2 = t2.toLowerCase(), n2 + (r2 ? fa(t2) : t2);
          }), Kh = Vu(function(n2, t2, r2) {
            return n2 + (r2 ? "-" : "") + t2.toLowerCase();
          }), Vh = Vu(function(n2, t2, r2) {
            return n2 + (r2 ? " " : "") + t2.toLowerCase();
          }), Gh = Ku("toLowerCase"), Hh = Vu(function(n2, t2, r2) {
            return n2 + (r2 ? "_" : "") + t2.toLowerCase();
          }), Jh = Vu(function(n2, t2, r2) {
            return n2 + (r2 ? " " : "") + Qh(t2);
          }), Yh = Vu(function(n2, t2, r2) {
            return n2 + (r2 ? " " : "") + t2.toUpperCase();
          }), Qh = Ku("toUpperCase"), Xh = uu(function(t2, r2) {
            try {
              return n(t2, X, r2);
            } catch (n2) {
              return rc(n2) ? n2 : new fl(n2);
            }
          }), np = gi(function(n2, t2) {
            return r(t2, function(t3) {
              t3 = no(t3), Br2(n2, t3, ch(n2[t3], n2));
            }), n2;
          }), tp = Yu(), rp = Yu(true), ep = uu(function(n2, t2) {
            return function(r2) {
              return Ie(r2, n2, t2);
            };
          }), up = uu(function(n2, t2) {
            return function(r2) {
              return Ie(n2, r2, t2);
            };
          }), ip = ti(c), op = ti(u), fp = ti(h), cp = ui(), ap = ui(true), lp = ni(function(n2, t2) {
            return n2 + t2;
          }, 0), sp = fi("ceil"), hp = ni(function(n2, t2) {
            return n2 / t2;
          }, 1), pp = fi("floor"), _p = ni(function(n2, t2) {
            return n2 * t2;
          }, 1), vp = fi("round"), gp = ni(function(n2, t2) {
            return n2 - t2;
          }, 0);
          return Z2.after = If, Z2.ary = Rf, Z2.assign = zh, Z2.assignIn = Eh, Z2.assignInWith = Sh, Z2.assignWith = Wh, Z2.at = Lh, Z2.before = zf, Z2.bind = ch, Z2.bindAll = np, Z2.bindKey = ah, Z2.castArray = Nf, Z2.chain = Qo, Z2.chunk = uo, Z2.compact = io, Z2.concat = oo, Z2.cond = za, Z2.conforms = Ea, Z2.constant = Sa, Z2.countBy = Xs, Z2.create = Sc, Z2.curry = Ef, Z2.curryRight = Sf, Z2.debounce = Wf, Z2.defaults = Ch, Z2.defaultsDeep = Uh, Z2.defer = lh, Z2.delay = sh, Z2.difference = Us, Z2.differenceBy = Bs, Z2.differenceWith = Ts, Z2.drop = fo, Z2.dropRight = co, Z2.dropRightWhile = ao, Z2.dropWhile = lo, Z2.fill = so, Z2.filter = lf, Z2.flatMap = sf, Z2.flatMapDeep = hf, Z2.flatMapDepth = pf, Z2.flatten = _o, Z2.flattenDeep = vo, Z2.flattenDepth = go, Z2.flip = Lf, Z2.flow = tp, Z2.flowRight = rp, Z2.fromPairs = yo, Z2.functions = $c, Z2.functionsIn = Dc, Z2.groupBy = rh, Z2.initial = mo, Z2.intersection = $s, Z2.intersectionBy = Ds, Z2.intersectionWith = Ms, Z2.invert = Bh, Z2.invertBy = Th, Z2.invokeMap = eh, Z2.iteratee = Ca, Z2.keyBy = uh, Z2.keys = Pc, Z2.keysIn = qc, Z2.map = yf, Z2.mapKeys = Zc, Z2.mapValues = Kc, Z2.matches = Ua, Z2.matchesProperty = Ba, Z2.memoize = Cf, Z2.merge = Dh, Z2.mergeWith = Mh, Z2.method = ep, Z2.methodOf = up, Z2.mixin = Ta, Z2.negate = Uf, Z2.nthArg = Ma, Z2.omit = Fh, Z2.omitBy = Vc, Z2.once = Bf, Z2.orderBy = df, Z2.over = ip, Z2.overArgs = hh, Z2.overEvery = op, Z2.overSome = fp, Z2.partial = ph, Z2.partialRight = _h, Z2.partition = ih, Z2.pick = Nh, Z2.pickBy = Gc, Z2.property = Fa, Z2.propertyOf = Na, Z2.pull = Fs, Z2.pullAll = Oo, Z2.pullAllBy = Io, Z2.pullAllWith = Ro, Z2.pullAt = Ns, Z2.range = cp, Z2.rangeRight = ap, Z2.rearg = vh, Z2.reject = mf, Z2.remove = zo, Z2.rest = Tf, Z2.reverse = Eo, Z2.sampleSize = jf, Z2.set = Jc, Z2.setWith = Yc, Z2.shuffle = Af, Z2.slice = So, Z2.sortBy = oh, Z2.sortedUniq = $o, Z2.sortedUniqBy = Do, Z2.split = da, Z2.spread = $f, Z2.tail = Mo, Z2.take = Fo, Z2.takeRight = No, Z2.takeRightWhile = Po, Z2.takeWhile = qo, Z2.tap = Xo, Z2.throttle = Df, Z2.thru = nf, Z2.toArray = jc, Z2.toPairs = Ph, Z2.toPairsIn = qh, Z2.toPath = Ha, Z2.toPlainObject = Rc, Z2.transform = Qc, Z2.unary = Mf, Z2.union = Ps, Z2.unionBy = qs, Z2.unionWith = Zs, Z2.uniq = Zo, Z2.uniqBy = Ko, Z2.uniqWith = Vo, Z2.unset = Xc, Z2.unzip = Go, Z2.unzipWith = Ho, Z2.update = na, Z2.updateWith = ta, Z2.values = ra, Z2.valuesIn = ea, Z2.without = Ks, Z2.words = Ra, Z2.wrap = Ff, Z2.xor = Vs, Z2.xorBy = Gs, Z2.xorWith = Hs, Z2.zip = Js, Z2.zipObject = Jo, Z2.zipObjectDeep = Yo, Z2.zipWith = Ys, Z2.entries = Ph, Z2.entriesIn = qh, Z2.extend = Eh, Z2.extendWith = Sh, Ta(Z2, Z2), Z2.add = lp, Z2.attempt = Xh, Z2.camelCase = Zh, Z2.capitalize = fa, Z2.ceil = sp, Z2.clamp = ua, Z2.clone = Pf, Z2.cloneDeep = Zf, Z2.cloneDeepWith = Kf, Z2.cloneWith = qf, Z2.conformsTo = Vf, Z2.deburr = ca, Z2.defaultTo = Wa, Z2.divide = hp, Z2.endsWith = aa, Z2.eq = Gf, Z2.escape = la, Z2.escapeRegExp = sa, Z2.every = af, Z2.find = nh, Z2.findIndex = ho, Z2.findKey = Wc, Z2.findLast = th, Z2.findLastIndex = po, Z2.findLastKey = Lc, Z2.floor = pp, Z2.forEach = _f, Z2.forEachRight = vf, Z2.forIn = Cc, Z2.forInRight = Uc, Z2.forOwn = Bc, Z2.forOwnRight = Tc, Z2.get = Mc, Z2.gt = gh, Z2.gte = yh, Z2.has = Fc, Z2.hasIn = Nc, Z2.head = bo, Z2.identity = La, Z2.includes = gf, Z2.indexOf = wo, Z2.inRange = ia, Z2.invoke = $h, Z2.isArguments = dh, Z2.isArray = bh, Z2.isArrayBuffer = wh, Z2.isArrayLike = Hf, Z2.isArrayLikeObject = Jf, Z2.isBoolean = Yf, Z2.isBuffer = mh, Z2.isDate = xh, Z2.isElement = Qf, Z2.isEmpty = Xf, Z2.isEqual = nc, Z2.isEqualWith = tc, Z2.isError = rc, Z2.isFinite = ec, Z2.isFunction = uc, Z2.isInteger = ic, Z2.isLength = oc, Z2.isMap = jh, Z2.isMatch = ac, Z2.isMatchWith = lc, Z2.isNaN = sc, Z2.isNative = hc, Z2.isNil = _c, Z2.isNull = pc, Z2.isNumber = vc, Z2.isObject = fc, Z2.isObjectLike = cc, Z2.isPlainObject = gc, Z2.isRegExp = Ah, Z2.isSafeInteger = yc, Z2.isSet = kh, Z2.isString = dc, Z2.isSymbol = bc, Z2.isTypedArray = Oh, Z2.isUndefined = wc, Z2.isWeakMap = mc, Z2.isWeakSet = xc, Z2.join = xo, Z2.kebabCase = Kh, Z2.last = jo, Z2.lastIndexOf = Ao, Z2.lowerCase = Vh, Z2.lowerFirst = Gh, Z2.lt = Ih, Z2.lte = Rh, Z2.max = Ya, Z2.maxBy = Qa, Z2.mean = Xa, Z2.meanBy = nl, Z2.min = tl, Z2.minBy = rl, Z2.stubArray = Pa, Z2.stubFalse = qa, Z2.stubObject = Za, Z2.stubString = Ka, Z2.stubTrue = Va, Z2.multiply = _p, Z2.nth = ko, Z2.noConflict = $a, Z2.noop = Da, Z2.now = fh, Z2.pad = ha, Z2.padEnd = pa, Z2.padStart = _a, Z2.parseInt = va, Z2.random = oa, Z2.reduce = bf, Z2.reduceRight = wf, Z2.repeat = ga, Z2.replace = ya, Z2.result = Hc, Z2.round = vp, Z2.runInContext = p2, Z2.sample = xf, Z2.size = kf, Z2.snakeCase = Hh, Z2.some = Of, Z2.sortedIndex = Wo, Z2.sortedIndexBy = Lo, Z2.sortedIndexOf = Co, Z2.sortedLastIndex = Uo, Z2.sortedLastIndexBy = Bo, Z2.sortedLastIndexOf = To, Z2.startCase = Jh, Z2.startsWith = ba, Z2.subtract = gp, Z2.sum = el, Z2.sumBy = ul, Z2.template = wa, Z2.times = Ga, Z2.toFinite = Ac, Z2.toInteger = kc, Z2.toLength = Oc, Z2.toLower = ma, Z2.toNumber = Ic, Z2.toSafeInteger = zc, Z2.toString = Ec, Z2.toUpper = xa, Z2.trim = ja, Z2.trimEnd = Aa, Z2.trimStart = ka, Z2.truncate = Oa, Z2.unescape = Ia, Z2.uniqueId = Ja, Z2.upperCase = Yh, Z2.upperFirst = Qh, Z2.each = _f, Z2.eachRight = vf, Z2.first = bo, Ta(Z2, function() {
            var n2 = {};
            return ue2(Z2, function(t2, r2) {
              bl.call(Z2.prototype, r2) || (n2[r2] = t2);
            }), n2;
          }(), { chain: false }), Z2.VERSION = nn, r(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
            Z2[n2].placeholder = Z2;
          }), r(["drop", "take"], function(n2, t2) {
            Ct2.prototype[n2] = function(r2) {
              r2 = r2 === X ? 1 : Gl(kc(r2), 0);
              var e2 = this.__filtered__ && !t2 ? new Ct2(this) : this.clone();
              return e2.__filtered__ ? e2.__takeCount__ = Hl(r2, e2.__takeCount__) : e2.__views__.push({ size: Hl(r2, Un), type: n2 + (e2.__dir__ < 0 ? "Right" : "") }), e2;
            }, Ct2.prototype[n2 + "Right"] = function(t3) {
              return this.reverse()[n2](t3).reverse();
            };
          }), r(["filter", "map", "takeWhile"], function(n2, t2) {
            var r2 = t2 + 1, e2 = r2 == Rn || r2 == En;
            Ct2.prototype[n2] = function(n3) {
              var t3 = this.clone();
              return t3.__iteratees__.push({ iteratee: mi(n3, 3), type: r2 }), t3.__filtered__ = t3.__filtered__ || e2, t3;
            };
          }), r(["head", "last"], function(n2, t2) {
            var r2 = "take" + (t2 ? "Right" : "");
            Ct2.prototype[n2] = function() {
              return this[r2](1).value()[0];
            };
          }), r(["initial", "tail"], function(n2, t2) {
            var r2 = "drop" + (t2 ? "" : "Right");
            Ct2.prototype[n2] = function() {
              return this.__filtered__ ? new Ct2(this) : this[r2](1);
            };
          }), Ct2.prototype.compact = function() {
            return this.filter(La);
          }, Ct2.prototype.find = function(n2) {
            return this.filter(n2).head();
          }, Ct2.prototype.findLast = function(n2) {
            return this.reverse().find(n2);
          }, Ct2.prototype.invokeMap = uu(function(n2, t2) {
            return "function" == typeof n2 ? new Ct2(this) : this.map(function(r2) {
              return Ie(r2, n2, t2);
            });
          }), Ct2.prototype.reject = function(n2) {
            return this.filter(Uf(mi(n2)));
          }, Ct2.prototype.slice = function(n2, t2) {
            n2 = kc(n2);
            var r2 = this;
            return r2.__filtered__ && (n2 > 0 || t2 < 0) ? new Ct2(r2) : (n2 < 0 ? r2 = r2.takeRight(-n2) : n2 && (r2 = r2.drop(n2)), t2 !== X && (t2 = kc(t2), r2 = t2 < 0 ? r2.dropRight(-t2) : r2.take(t2 - n2)), r2);
          }, Ct2.prototype.takeRightWhile = function(n2) {
            return this.reverse().takeWhile(n2).reverse();
          }, Ct2.prototype.toArray = function() {
            return this.take(Un);
          }, ue2(Ct2.prototype, function(n2, t2) {
            var r2 = /^(?:filter|find|map|reject)|While$/.test(t2), e2 = /^(?:head|last)$/.test(t2), u2 = Z2[e2 ? "take" + ("last" == t2 ? "Right" : "") : t2], i2 = e2 || /^find/.test(t2);
            u2 && (Z2.prototype[t2] = function() {
              var t3 = this.__wrapped__, o2 = e2 ? [1] : arguments, f2 = t3 instanceof Ct2, c2 = o2[0], l2 = f2 || bh(t3), s2 = function(n3) {
                var t4 = u2.apply(Z2, a([n3], o2));
                return e2 && h2 ? t4[0] : t4;
              };
              l2 && r2 && "function" == typeof c2 && 1 != c2.length && (f2 = l2 = false);
              var h2 = this.__chain__, p3 = !!this.__actions__.length, _2 = i2 && !h2, v2 = f2 && !p3;
              if (!i2 && l2) {
                t3 = v2 ? t3 : new Ct2(this);
                var g2 = n2.apply(t3, o2);
                return g2.__actions__.push({ func: nf, args: [s2], thisArg: X }), new Y2(g2, h2);
              }
              return _2 && v2 ? n2.apply(this, o2) : (g2 = this.thru(s2), _2 ? e2 ? g2.value()[0] : g2.value() : g2);
            });
          }), r(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
            var t2 = _l[n2], r2 = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", e2 = /^(?:pop|shift)$/.test(n2);
            Z2.prototype[n2] = function() {
              var n3 = arguments;
              if (e2 && !this.__chain__) {
                var u2 = this.value();
                return t2.apply(bh(u2) ? u2 : [], n3);
              }
              return this[r2](function(r3) {
                return t2.apply(bh(r3) ? r3 : [], n3);
              });
            };
          }), ue2(Ct2.prototype, function(n2, t2) {
            var r2 = Z2[t2];
            if (r2) {
              var e2 = r2.name + "";
              bl.call(fs, e2) || (fs[e2] = []), fs[e2].push({ name: t2, func: r2 });
            }
          }), fs[Qu(X, vn).name] = [{ name: "wrapper", func: X }], Ct2.prototype.clone = $t2, Ct2.prototype.reverse = Yt2, Ct2.prototype.value = Qt2, Z2.prototype.at = Qs, Z2.prototype.chain = tf, Z2.prototype.commit = rf, Z2.prototype.next = ef, Z2.prototype.plant = of, Z2.prototype.reverse = ff, Z2.prototype.toJSON = Z2.prototype.valueOf = Z2.prototype.value = cf, Z2.prototype.first = Z2.prototype.head, Ul && (Z2.prototype[Ul] = uf), Z2;
        }, be = de();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (re._ = be, define(function() {
          return be;
        })) : ue ? ((ue.exports = be)._ = be, ee._ = be) : re._ = be;
      }).call(exports);
    }
  });

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\libs\darkreader.min.js
  var require_darkreader_min = __commonJS({
    "ns-hugo:C:\\Users\\congp\\Desktop\\hugo-blog\\themes\\virgo\\assets\\js\\libs\\darkreader.min.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).DarkReader = {});
      }(exports, function(e) {
        "use strict";
        var t = function() {
          return (t = Object.assign || function(e2) {
            for (var t2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
              for (var o2 in t2 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
            return e2;
          }).apply(this, arguments);
        };
        function r(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, a2) {
            function i2(e3) {
              try {
                s2(n2.next(e3));
              } catch (e4) {
                a2(e4);
              }
            }
            function u2(e3) {
              try {
                s2(n2.throw(e3));
              } catch (e4) {
                a2(e4);
              }
            }
            function s2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(i2, u2);
            }
            s2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }
        function n(e2, t2) {
          var r2, n2, o2, a2, i2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return a2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
            return this;
          }), a2;
          function u2(a3) {
            return function(u3) {
              return function(a4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; i2; )
                  try {
                    if (r2 = 1, n2 && (o2 = 2 & a4[0] ? n2.return : a4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, a4[1])).done)
                      return o2;
                    switch (n2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                      case 0:
                      case 1:
                        o2 = a4;
                        break;
                      case 4:
                        return i2.label++, { value: a4[1], done: false };
                      case 5:
                        i2.label++, n2 = a4[1], a4 = [0];
                        continue;
                      case 7:
                        a4 = i2.ops.pop(), i2.trys.pop();
                        continue;
                      default:
                        if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                          i2 = 0;
                          continue;
                        }
                        if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                          i2.label = a4[1];
                          break;
                        }
                        if (6 === a4[0] && i2.label < o2[1]) {
                          i2.label = o2[1], o2 = a4;
                          break;
                        }
                        if (o2 && i2.label < o2[2]) {
                          i2.label = o2[2], i2.ops.push(a4);
                          break;
                        }
                        o2[2] && i2.ops.pop(), i2.trys.pop();
                        continue;
                    }
                    a4 = t2.call(e2, i2);
                  } catch (e3) {
                    a4 = [6, e3], n2 = 0;
                  } finally {
                    r2 = o2 = 0;
                  }
                if (5 & a4[0])
                  throw a4[1];
                return { value: a4[0] ? a4[1] : void 0, done: true };
              }([a3, u3]);
            };
          }
        }
        function o(e2) {
          var t2 = "function" == typeof Symbol && Symbol.iterator, r2 = t2 && e2[t2], n2 = 0;
          if (r2)
            return r2.call(e2);
          if (e2 && "number" == typeof e2.length)
            return { next: function() {
              return e2 && n2 >= e2.length && (e2 = void 0), { value: e2 && e2[n2++], done: !e2 };
            } };
          throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function a(e2, t2) {
          var r2 = "function" == typeof Symbol && e2[Symbol.iterator];
          if (!r2)
            return e2;
          var n2, o2, a2 = r2.call(e2), i2 = [];
          try {
            for (; (void 0 === t2 || t2-- > 0) && !(n2 = a2.next()).done; )
              i2.push(n2.value);
          } catch (e3) {
            o2 = { error: e3 };
          } finally {
            try {
              n2 && !n2.done && (r2 = a2.return) && r2.call(a2);
            } finally {
              if (o2)
                throw o2.error;
            }
          }
          return i2;
        }
        function i(e2, t2, r2) {
          if (r2 || 2 === arguments.length)
            for (var n2, o2 = 0, a2 = t2.length; o2 < a2; o2++)
              !n2 && o2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, o2)), n2[o2] = t2[o2]);
          return e2.concat(n2 || t2);
        }
        var u = "undefined" == typeof navigator ? "some useragent" : navigator.userAgent.toLowerCase(), s = "undefined" == typeof navigator ? "some platform" : navigator.platform.toLowerCase(), c = u.includes("chrome") || u.includes("chromium"), l = u.includes("thunderbird"), d = u.includes("firefox") || l;
        u.includes("vivaldi"), u.includes("yabrowser"), u.includes("opr") || u.includes("opera"), u.includes("edg");
        var f = u.includes("safari") && !c, h = s.startsWith("win"), p = s.startsWith("mac");
        u.includes("mobile");
        var v, m = "function" == typeof ShadowRoot, g = "function" == typeof MediaQueryList && "function" == typeof MediaQueryList.prototype.addEventListener;
        (v = u.match(/chrom[e|ium]\/([^ ]+)/)) && v[1] && v[1];
        var b = function() {
          try {
            return document.querySelector(":defined"), true;
          } catch (e2) {
            return false;
          }
        }();
        function y(e2, t2, o2) {
          return r(this, void 0, void 0, function() {
            var r2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return [4, fetch(e2, { cache: "force-cache", credentials: "omit", referrer: o2 })];
                case 1:
                  if (r2 = n2.sent(), d && "text/css" === t2 && e2.startsWith("moz-extension://") && e2.endsWith(".css"))
                    return [2, r2];
                  if (t2 && !r2.headers.get("Content-Type").startsWith(t2))
                    throw new Error("Mime type mismatch when loading " + e2);
                  if (!r2.ok)
                    throw new Error("Unable to load " + e2 + " " + r2.status + " " + r2.statusText);
                  return [2, r2];
              }
            });
          });
        }
        function w(e2, t2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, y(e2, t2)];
                case 1:
                  return [4, k(r2.sent())];
                case 2:
                  return [2, r2.sent()];
              }
            });
          });
        }
        function k(e2) {
          return r(this, void 0, void 0, function() {
            var t2;
            return n(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, e2.blob()];
                case 1:
                  return t2 = r2.sent(), [4, new Promise(function(e3) {
                    var r3 = new FileReader();
                    r3.onloadend = function() {
                      return e3(r3.result);
                    }, r3.readAsDataURL(t2);
                  })];
                case 2:
                  return [2, r2.sent()];
              }
            });
          });
        }
        var S = function(e2) {
          return r(void 0, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e2, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))];
            });
          });
        }, _ = S;
        function E(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return [4, _(e2)];
                case 1:
                  return [2, t2.sent()];
              }
            });
          });
        }
        window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
        var x = /* @__PURE__ */ new Set();
        function C() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
          return r(this, void 0, void 0, function() {
            var t3, r2, o2, a2, i2, u2, s2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  if (!e2[0] || "fetch" !== e2[0].type)
                    return [3, 8];
                  t3 = e2[0].id, n2.label = 1;
                case 1:
                  return n2.trys.push([1, 7, , 8]), r2 = e2[0].data, o2 = r2.url, a2 = r2.responseType, [4, E(o2)];
                case 2:
                  return i2 = n2.sent(), "data-url" !== a2 ? [3, 4] : [4, k(i2)];
                case 3:
                  return u2 = n2.sent(), [3, 6];
                case 4:
                  return [4, i2.text()];
                case 5:
                  u2 = n2.sent(), n2.label = 6;
                case 6:
                  return x.forEach(function(e3) {
                    return e3({ type: "fetch-response", data: u2, error: null, id: t3 });
                  }), [3, 8];
                case 7:
                  return s2 = n2.sent(), console.error(s2), x.forEach(function(e3) {
                    return e3({ type: "fetch-response", data: null, err: s2, id: t3 });
                  }), [3, 8];
                case 8:
                  return [2];
              }
            });
          });
        }
        function V(e2) {
          x.add(e2);
        }
        if ("function" == typeof chrome.runtime.sendMessage) {
          var R = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = function() {
            for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
              e2[t2] = arguments[t2];
            C.apply(void 0, i([], a(e2))), R.apply(chrome.runtime, e2);
          };
        } else
          chrome.runtime.sendMessage = C;
        if (chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), "function" == typeof chrome.runtime.onMessage.addListener) {
          var M = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = function() {
            for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
              e2[t2] = arguments[t2];
            V.apply(void 0, i([], a(e2))), M.apply(chrome.runtime.onMessage, e2);
          };
        } else
          chrome.runtime.onMessage.addListener = V;
        var T = "dynamicTheme", A = { background: "#181a1b", text: "#e8e6e3" }, L = { background: "#dcdad7", text: "#181a1b" }, P = { mode: 1, brightness: 100, contrast: 100, grayscale: 0, sepia: 0, useFont: false, fontFamily: p ? "Helvetica Neue" : h ? "Segoe UI" : "Open Sans", textStroke: 0, engine: T, stylesheet: "", darkSchemeBackgroundColor: A.background, darkSchemeTextColor: A.text, lightSchemeBackgroundColor: L.background, lightSchemeTextColor: L.text, scrollbarColor: p ? "" : "auto", selectionColor: "auto", styleSystemControls: true };
        function j(e2, t2) {
          var r2, n2;
          if (function(e3) {
            return null != e3.length;
          }(e2))
            for (var a2 = 0, i2 = e2.length; a2 < i2; a2++)
              t2(e2[a2]);
          else
            try {
              for (var u2 = o(e2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
                t2(s2.value);
              }
            } catch (e3) {
              r2 = { error: e3 };
            } finally {
              try {
                s2 && !s2.done && (n2 = u2.return) && n2.call(u2);
              } finally {
                if (r2)
                  throw r2.error;
              }
            }
        }
        function O(e2, t2) {
          j(t2, function(t3) {
            return e2.push(t3);
          });
        }
        function D() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
        }
        function F() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
        }
        function q(e2) {
          var t2, r2 = false, n2 = null;
          return Object.assign(function() {
            for (var o2 = [], u2 = 0; u2 < arguments.length; u2++)
              o2[u2] = arguments[u2];
            t2 = o2, n2 ? r2 = true : (e2.apply(void 0, i([], a(t2))), n2 = requestAnimationFrame(function() {
              n2 = null, r2 && (e2.apply(void 0, i([], a(t2))), r2 = false);
            }));
          }, { cancel: function() {
            cancelAnimationFrame(n2), r2 = false, n2 = null;
          } });
        }
        function N(e2) {
          var t2 = 0;
          return e2.seconds && (t2 += 1e3 * e2.seconds), e2.minutes && (t2 += 60 * e2.minutes * 1e3), e2.hours && (t2 += 60 * e2.hours * 60 * 1e3), e2.days && (t2 += 24 * e2.days * 60 * 60 * 1e3), t2;
        }
        function B(e2) {
          e2 && e2.parentNode && e2.parentNode.removeChild(e2);
        }
        function W(e2, t2, r2) {
          void 0 === r2 && (r2 = Function.prototype);
          var n2 = N({ seconds: 2 }), o2 = N({ seconds: 10 }), a2 = e2.previousSibling, i2 = e2.parentNode;
          if (!i2)
            throw new Error("Unable to watch for node position: parent element not found");
          if ("prev-sibling" === t2 && !a2)
            throw new Error("Unable to watch for node position: there is no previous sibling");
          var u2 = 0, s2 = null, c2 = null, l2 = q(function() {
            if (!c2) {
              u2++;
              var f3 = Date.now();
              if (null == s2)
                s2 = f3;
              else if (u2 >= 10) {
                if (f3 - s2 < o2)
                  return F("Node position watcher paused: retry in " + n2 + "ms", e2, a2), void (c2 = setTimeout(function() {
                    s2 = null, u2 = 0, c2 = null, l2();
                  }, n2));
                s2 = f3, u2 = 1;
              }
              if ("parent" === t2 && a2 && a2.parentNode !== i2)
                return F("Unable to restore node position: sibling parent changed", e2, a2, i2), void h2();
              if ("prev-sibling" === t2) {
                if (null == a2.parentNode)
                  return F("Unable to restore node position: sibling was removed", e2, a2, i2), void h2();
                a2.parentNode !== i2 && (F("Style was moved to another parent", e2, a2, i2), p2(a2.parentNode));
              }
              F("Restoring node position", e2, a2, i2), i2.insertBefore(e2, a2 ? a2.nextSibling : i2.firstChild), d2.takeRecords(), r2 && r2();
            }
          }), d2 = new MutationObserver(function() {
            ("parent" === t2 && e2.parentNode !== i2 || "prev-sibling" === t2 && e2.previousSibling !== a2) && l2();
          }), f2 = function() {
            d2.observe(i2, { childList: true });
          }, h2 = function() {
            clearTimeout(c2), d2.disconnect(), l2.cancel();
          }, p2 = function(e3) {
            i2 = e3, h2(), f2();
          };
          return f2(), { run: f2, stop: h2, skip: function() {
            d2.takeRecords();
          } };
        }
        function I(e2, t2) {
          if (null != e2)
            for (var r2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: function(e3) {
              return null == e3.shadowRoot ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            } }), n2 = e2.shadowRoot ? r2.currentNode : r2.nextNode(); null != n2; n2 = r2.nextNode())
              t2(n2), I(n2.shadowRoot, t2);
        }
        function U() {
          return "complete" === document.readyState || "interactive" === document.readyState;
        }
        var $12 = /* @__PURE__ */ new Set();
        function z(e2) {
          $12.add(e2);
        }
        function H(e2) {
          $12.delete(e2);
        }
        function G() {
          return "complete" === document.readyState;
        }
        var Q = /* @__PURE__ */ new Set();
        function K(e2) {
          Q.add(e2);
        }
        if (!U()) {
          var J = function() {
            U() && ($12.forEach(function(e2) {
              return e2();
            }), $12.clear(), G() && (document.removeEventListener("readystatechange", J), Q.forEach(function(e2) {
              return e2();
            }), Q.clear()));
          };
          document.addEventListener("readystatechange", J);
        }
        var X, Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new WeakMap();
        function ee(e2, t2) {
          var r2, n2, o2;
          if (Y.has(e2))
            r2 = Y.get(e2), n2 = Z.get(r2);
          else {
            var a2 = false, i2 = false;
            (r2 = new MutationObserver(function(t3) {
              if (function(e3) {
                if (e3.length > 1e3)
                  return true;
                for (var t4 = 0, r4 = 0; r4 < e3.length; r4++)
                  if ((t4 += e3[r4].addedNodes.length) > 1e3)
                    return true;
                return false;
              }(t3))
                !a2 || U() ? n2.forEach(function(t4) {
                  return (0, t4.onHugeMutations)(e2);
                }) : i2 || (z(o2 = function() {
                  return n2.forEach(function(t4) {
                    return (0, t4.onHugeMutations)(e2);
                  });
                }), i2 = true), a2 = true;
              else {
                var r3 = function(e3) {
                  var t4 = /* @__PURE__ */ new Set(), r4 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set();
                  e3.forEach(function(e4) {
                    j(e4.addedNodes, function(e5) {
                      e5 instanceof Element && e5.isConnected && t4.add(e5);
                    }), j(e4.removedNodes, function(e5) {
                      e5 instanceof Element && (e5.isConnected ? n3.add(e5) : r4.add(e5));
                    });
                  }), n3.forEach(function(e4) {
                    return t4.delete(e4);
                  });
                  var o3 = [], a3 = [];
                  return t4.forEach(function(e4) {
                    t4.has(e4.parentElement) && o3.push(e4);
                  }), r4.forEach(function(e4) {
                    r4.has(e4.parentElement) && a3.push(e4);
                  }), o3.forEach(function(e4) {
                    return t4.delete(e4);
                  }), a3.forEach(function(e4) {
                    return r4.delete(e4);
                  }), { additions: t4, moves: n3, deletions: r4 };
                }(t3);
                n2.forEach(function(e3) {
                  return (0, e3.onMinorMutations)(r3);
                });
              }
            })).observe(e2, { childList: true, subtree: true }), Y.set(e2, r2), n2 = /* @__PURE__ */ new Set(), Z.set(r2, n2);
          }
          return n2.add(t2), { disconnect: function() {
            n2.delete(t2), o2 && H(o2), 0 === n2.size && (r2.disconnect(), Z.delete(r2), Y.delete(e2));
          } };
        }
        var te = /* @__PURE__ */ new Map();
        function re(e2) {
          return X || (X = document.createElement("a")), X.href = e2, X.href;
        }
        function ne(e2, t2) {
          void 0 === t2 && (t2 = null);
          var r2 = e2 + (t2 ? ";" + t2 : "");
          if (te.has(r2))
            return te.get(r2);
          if (t2) {
            var n2 = new URL(e2, re(t2));
            return te.set(r2, n2), n2;
          }
          var o2 = new URL(re(e2));
          return te.set(e2, o2), o2;
        }
        function oe(e2, t2) {
          if (t2.match(/^data\\?\:/))
            return t2;
          var r2 = ne(e2);
          return ne(t2, r2.href).href;
        }
        function ae(e2, t2, r2) {
          j(e2, function(e3) {
            if (e3.selectorText)
              t2(e3);
            else if (e3.href)
              try {
                ae(e3.styleSheet.cssRules, t2, r2);
              } catch (e4) {
                D("Found a non-loaded link."), r2 && r2();
              }
            else if (e3.media) {
              var n2 = Array.from(e3.media), o2 = n2.some(function(e4) {
                return e4.startsWith("screen") || e4.startsWith("all");
              }), a2 = n2.some(function(e4) {
                return e4.startsWith("print") || e4.startsWith("speech");
              });
              !o2 && a2 || ae(e3.cssRules, t2, r2);
            } else
              e3.conditionText ? CSS.supports(e3.conditionText) && ae(e3.cssRules, t2, r2) : F("CSSRule type not supported", e3);
          });
        }
        var ie = ["background", "border", "border-color", "border-bottom", "border-left", "border-right", "border-top", "outline", "outline-color"], ue = f ? ie.map(function(e2) {
          return [e2, new RegExp(e2 + ":\\s*(.*?)\\s*;")];
        }) : null;
        function se(e2, t2) {
          j(e2, function(r2) {
            var n2 = e2.getPropertyValue(r2).trim();
            n2 && t2(r2, n2);
          }), f && e2.cssText.includes("var(") ? ue.forEach(function(r2) {
            var n2 = a(r2, 2), o2 = n2[0], i2 = n2[1], u2 = e2.cssText.match(i2);
            if (u2 && u2[1]) {
              var s2 = u2[1].trim();
              t2(o2, s2);
            }
          }) : ie.forEach(function(r2) {
            var n2 = e2.getPropertyValue(r2);
            n2 && n2.includes("var(") && t2(r2, n2);
          });
        }
        var ce = /url\((('.+?')|(".+?")|([^\)]*?))\)/g, le = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
        function de(e2) {
          return e2.replace(/^url\((.*)\)$/, "$1").replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
        }
        function fe(e2) {
          var t2 = ne(e2);
          return "" + t2.origin + t2.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1");
        }
        var he = /\/\*[\s\S]*?\*\//g;
        var pe = /@font-face\s*{[^}]*}/g;
        function ve(e2) {
          var t2 = e2.h, r2 = e2.s, n2 = e2.l, o2 = e2.a, i2 = void 0 === o2 ? 1 : o2;
          if (0 === r2) {
            var u2 = a([n2, n2, n2].map(function(e3) {
              return Math.round(255 * e3);
            }), 3), s2 = u2[0], c2 = u2[1];
            return { r: s2, g: u2[2], b: c2, a: i2 };
          }
          var l2 = (1 - Math.abs(2 * n2 - 1)) * r2, d2 = l2 * (1 - Math.abs(t2 / 60 % 2 - 1)), f2 = n2 - l2 / 2, h2 = a((t2 < 60 ? [l2, d2, 0] : t2 < 120 ? [d2, l2, 0] : t2 < 180 ? [0, l2, d2] : t2 < 240 ? [0, d2, l2] : t2 < 300 ? [d2, 0, l2] : [l2, 0, d2]).map(function(e3) {
            return Math.round(255 * (e3 + f2));
          }), 3);
          return { r: h2[0], g: h2[1], b: h2[2], a: i2 };
        }
        function me(e2) {
          var t2 = e2.r, r2 = e2.g, n2 = e2.b, o2 = e2.a, a2 = void 0 === o2 ? 1 : o2, i2 = t2 / 255, u2 = r2 / 255, s2 = n2 / 255, c2 = Math.max(i2, u2, s2), l2 = Math.min(i2, u2, s2), d2 = c2 - l2, f2 = (c2 + l2) / 2;
          if (0 === d2)
            return { h: 0, s: 0, l: f2, a: a2 };
          var h2 = 60 * (c2 === i2 ? (u2 - s2) / d2 % 6 : c2 === u2 ? (s2 - i2) / d2 + 2 : (i2 - u2) / d2 + 4);
          return h2 < 0 && (h2 += 360), { h: h2, s: d2 / (1 - Math.abs(2 * f2 - 1)), l: f2, a: a2 };
        }
        function ge(e2, t2) {
          void 0 === t2 && (t2 = 0);
          var r2 = e2.toFixed(t2);
          if (0 === t2)
            return r2;
          var n2 = r2.indexOf(".");
          if (n2 >= 0) {
            var o2 = r2.match(/0+$/);
            if (o2)
              return o2.index === n2 + 1 ? r2.substring(0, n2) : r2.substring(0, o2.index);
          }
          return r2;
        }
        function be(e2) {
          var t2 = e2.h, r2 = e2.s, n2 = e2.l, o2 = e2.a;
          return null != o2 && o2 < 1 ? "hsla(" + ge(t2) + ", " + ge(100 * r2) + "%, " + ge(100 * n2) + "%, " + ge(o2, 2) + ")" : "hsl(" + ge(t2) + ", " + ge(100 * r2) + "%, " + ge(100 * n2) + "%)";
        }
        var ye = /^rgba?\([^\(\)]+\)$/, we = /^hsla?\([^\(\)]+\)$/, ke = /^#[0-9a-f]+$/i;
        function Se(e2) {
          var t2, r2, n2, o2, i2, u2 = e2.trim().toLowerCase();
          if (u2.match(ye))
            return t2 = a(_e(u2, Ee, xe, Ce), 4), r2 = t2[0], n2 = t2[1], o2 = t2[2], i2 = t2[3], { r: r2, g: n2, b: o2, a: void 0 === i2 ? 1 : i2 };
          if (u2.match(we))
            return function(e3) {
              var t3 = a(_e(e3, Ve, Re, Me), 4), r3 = t3[0], n3 = t3[1], o3 = t3[2], i3 = t3[3];
              return ve({ h: r3, s: n3, l: o3, a: void 0 === i3 ? 1 : i3 });
            }(u2);
          if (u2.match(ke))
            return function(e3) {
              var t3 = e3.substring(1);
              switch (t3.length) {
                case 3:
                case 4:
                  var r3 = a([0, 1, 2].map(function(e4) {
                    return parseInt("" + t3[e4] + t3[e4], 16);
                  }), 3);
                  return { r: r3[0], g: r3[1], b: r3[2], a: 3 === t3.length ? 1 : parseInt("" + t3[3] + t3[3], 16) / 255 };
                case 6:
                case 8:
                  var n3 = a([0, 2, 4].map(function(e4) {
                    return parseInt(t3.substring(e4, e4 + 2), 16);
                  }), 3);
                  return { r: n3[0], g: n3[1], b: n3[2], a: 6 === t3.length ? 1 : parseInt(t3.substring(6, 8), 16) / 255 };
              }
              throw new Error("Unable to parse " + e3);
            }(u2);
          if (Te.has(u2))
            return function(e3) {
              var t3 = Te.get(e3);
              return { r: t3 >> 16 & 255, g: t3 >> 8 & 255, b: t3 >> 0 & 255, a: 1 };
            }(u2);
          if (Ae.has(u2))
            return function(e3) {
              var t3 = Ae.get(e3);
              return { r: t3 >> 16 & 255, g: t3 >> 8 & 255, b: t3 >> 0 & 255, a: 1 };
            }(u2);
          if ("transparent" === e2)
            return { r: 0, g: 0, b: 0, a: 0 };
          throw new Error("Unable to parse " + e2);
        }
        function _e(e2, t2, r2, n2) {
          var o2 = e2.split(t2).filter(function(e3) {
            return e3;
          }), i2 = Object.entries(n2);
          return o2.map(function(e3) {
            return e3.trim();
          }).map(function(e3, t3) {
            var n3, o3 = i2.find(function(t4) {
              var r3 = a(t4, 1)[0];
              return e3.endsWith(r3);
            });
            return n3 = o3 ? parseFloat(e3.substring(0, e3.length - o3[0].length)) / o3[1] * r2[t3] : parseFloat(e3), r2[t3] > 1 ? Math.round(n3) : n3;
          });
        }
        var Ee = /rgba?|\(|\)|\/|,|\s/gi, xe = [255, 255, 255, 1], Ce = { "%": 100 };
        var Ve = /hsla?|\(|\)|\/|,|\s/gi, Re = [360, 1, 1, 1], Me = { "%": 100, deg: 360, rad: 2 * Math.PI, turn: 1 };
        var Te = new Map(Object.entries({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgrey: 11119017, darkgreen: 25600, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, grey: 8421504, green: 32768, greenyellow: 11403055, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgrey: 13882323, lightgreen: 9498256, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 })), Ae = new Map(Object.entries({ ActiveBorder: 3906044, ActiveCaption: 0, AppWorkspace: 11184810, Background: 6513614, ButtonFace: 16777215, ButtonHighlight: 15329769, ButtonShadow: 10461343, ButtonText: 0, CaptionText: 0, GrayText: 8355711, Highlight: 11720703, HighlightText: 0, InactiveBorder: 16777215, InactiveCaption: 16777215, InactiveCaptionText: 0, InfoBackground: 16514245, InfoText: 0, Menu: 16185078, MenuText: 16777215, Scrollbar: 11184810, ThreeDDarkShadow: 0, ThreeDFace: 12632256, ThreeDHighlight: 16777215, ThreeDLightShadow: 16777215, ThreeDShadow: 0, Window: 15527148, WindowFrame: 11184810, WindowText: 0, "-webkit-focus-ring-color": 15046400 }).map(function(e2) {
          var t2 = a(e2, 2), r2 = t2[0], n2 = t2[1];
          return [r2.toLowerCase(), n2];
        }));
        function Le(e2, t2, r2, n2, o2) {
          return (e2 - t2) * (o2 - n2) / (r2 - t2) + n2;
        }
        function Pe(e2, t2, r2) {
          return Math.min(r2, Math.max(t2, e2));
        }
        function je(e2, t2) {
          for (var r2 = [], n2 = 0, o2 = e2.length; n2 < o2; n2++) {
            r2[n2] = [];
            for (var a2 = 0, i2 = t2[0].length; a2 < i2; a2++) {
              for (var u2 = 0, s2 = 0, c2 = e2[0].length; s2 < c2; s2++)
                u2 += e2[n2][s2] * t2[s2][a2];
              r2[n2][a2] = u2;
            }
          }
          return r2;
        }
        function Oe(e2, t2, r2) {
          void 0 === r2 && (r2 = 0);
          for (var n2, o2 = []; n2 = e2.exec(t2); )
            o2.push(n2[r2]);
          return o2;
        }
        function De(e2) {
          var t2 = Fe.identity();
          return 0 !== e2.sepia && (t2 = je(t2, Fe.sepia(e2.sepia / 100))), 0 !== e2.grayscale && (t2 = je(t2, Fe.grayscale(e2.grayscale / 100))), 100 !== e2.contrast && (t2 = je(t2, Fe.contrast(e2.contrast / 100))), 100 !== e2.brightness && (t2 = je(t2, Fe.brightness(e2.brightness / 100))), 1 === e2.mode && (t2 = je(t2, Fe.invertNHue())), t2;
        }
        var Fe = { identity: function() {
          return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, invertNHue: function() {
          return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, brightness: function(e2) {
          return [[e2, 0, 0, 0, 0], [0, e2, 0, 0, 0], [0, 0, e2, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, contrast: function(e2) {
          var t2 = (1 - e2) / 2;
          return [[e2, 0, 0, 0, t2], [0, e2, 0, 0, t2], [0, 0, e2, 0, t2], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, sepia: function(e2) {
          return [[0.393 + 0.607 * (1 - e2), 0.769 - 0.769 * (1 - e2), 0.189 - 0.189 * (1 - e2), 0, 0], [0.349 - 0.349 * (1 - e2), 0.686 + 0.314 * (1 - e2), 0.168 - 0.168 * (1 - e2), 0, 0], [0.272 - 0.272 * (1 - e2), 0.534 - 0.534 * (1 - e2), 0.131 + 0.869 * (1 - e2), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, grayscale: function(e2) {
          return [[0.2126 + 0.7874 * (1 - e2), 0.7152 - 0.7152 * (1 - e2), 0.0722 - 0.0722 * (1 - e2), 0, 0], [0.2126 - 0.2126 * (1 - e2), 0.7152 + 0.2848 * (1 - e2), 0.0722 - 0.0722 * (1 - e2), 0, 0], [0.2126 - 0.2126 * (1 - e2), 0.7152 - 0.7152 * (1 - e2), 0.0722 + 0.9278 * (1 - e2), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        } };
        function qe(e2) {
          return e2[1 === e2.mode ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
        }
        function Ne(e2) {
          return e2[1 === e2.mode ? "darkSchemeTextColor" : "lightSchemeTextColor"];
        }
        var Be = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map();
        function Ie(e2) {
          if (We.has(e2))
            return We.get(e2);
          var t2 = me(Se(e2));
          return We.set(e2, t2), t2;
        }
        var Ue = ["r", "g", "b", "a"], $e = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        function ze(e2, t2, r2, n2, o2) {
          var i2;
          Be.has(r2) ? i2 = Be.get(r2) : (i2 = /* @__PURE__ */ new Map(), Be.set(r2, i2));
          var u2 = function(e3, t3) {
            return Ue.map(function(t4) {
              return e3[t4];
            }).concat($e.map(function(e4) {
              return t3[e4];
            })).join(";");
          }(e2, t2);
          if (i2.has(u2))
            return i2.get(u2);
          var s2 = ve(r2(me(e2), null == n2 ? null : Ie(n2), null == o2 ? null : Ie(o2))), c2 = s2.r, l2 = s2.g, d2 = s2.b, f2 = s2.a, h2 = a(function(e3, t3) {
            var r3 = a(e3, 3), n3 = je(t3, [[r3[0] / 255], [r3[1] / 255], [r3[2] / 255], [1], [1]]);
            return [0, 1, 2].map(function(e4) {
              return Pe(Math.round(255 * n3[e4][0]), 0, 255);
            });
          }([c2, l2, d2], De(t2)), 3), p2 = h2[0], v2 = h2[1], m2 = h2[2], g2 = 1 === f2 ? function(e3) {
            var t3 = e3.r, r3 = e3.g, n3 = e3.b, o3 = e3.a;
            return "#" + (null != o3 && o3 < 1 ? [t3, r3, n3, Math.round(255 * o3)] : [t3, r3, n3]).map(function(e4) {
              return (e4 < 16 ? "0" : "") + e4.toString(16);
            }).join("");
          }({ r: p2, g: v2, b: m2 }) : function(e3) {
            var t3 = e3.r, r3 = e3.g, n3 = e3.b, o3 = e3.a;
            return null != o3 && o3 < 1 ? "rgba(" + ge(t3) + ", " + ge(r3) + ", " + ge(n3) + ", " + ge(o3, 2) + ")" : "rgb(" + ge(t3) + ", " + ge(r3) + ", " + ge(n3) + ")";
          }({ r: p2, g: v2, b: m2, a: f2 });
          return i2.set(u2, g2), g2;
        }
        function He(e2) {
          return e2;
        }
        function Ge(e2, t2) {
          var r2 = qe(t2);
          return ze(e2, t2, Qe, Ne(t2), r2);
        }
        function Qe(e2, t2, r2) {
          var n2, o2 = e2.h, a2 = e2.s, i2 = e2.l, u2 = e2.a, s2 = i2 < 0.5;
          s2 ? n2 = i2 < 0.2 || a2 < 0.12 : n2 = a2 < 0.24 || i2 > 0.8 && (o2 > 200 && o2 < 280);
          var c2 = o2, l2 = i2;
          return n2 && (s2 ? (c2 = t2.h, l2 = t2.s) : (c2 = r2.h, l2 = r2.s)), { h: c2, s: l2, l: Le(i2, 0, 1, t2.l, r2.l), a: u2 };
        }
        function Ke(e2, t2) {
          var r2 = e2.h, n2 = e2.s, o2 = e2.l, a2 = e2.a, i2 = n2 < 0.12 || o2 > 0.8 && (r2 > 200 && r2 < 280);
          if (o2 < 0.5) {
            var u2 = Le(o2, 0, 0.5, 0, 0.4);
            return i2 ? { h: t2.h, s: t2.s, l: u2, a: a2 } : { h: r2, s: n2, l: u2, a: a2 };
          }
          var s2 = Le(o2, 0.5, 1, 0.4, t2.l);
          if (i2)
            return { h: t2.h, s: t2.s, l: s2, a: a2 };
          var c2 = r2;
          r2 > 60 && r2 < 180 && (c2 = r2 > 120 ? Le(r2, 120, 180, 135, 180) : Le(r2, 60, 120, 60, 105));
          return { h: c2, s: n2, l: s2, a: a2 };
        }
        function Je(e2, r2) {
          if (0 === r2.mode)
            return Ge(e2, r2);
          var n2 = qe(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), Ke, n2);
        }
        var Xe, Ye = 0.55;
        function Ze(e2) {
          return Le(e2, 205, 245, 205, 220);
        }
        function et(e2, t2) {
          var r2 = e2.h, n2 = e2.s, o2 = e2.l, a2 = e2.a, i2 = o2 < 0.2 || n2 < 0.24, u2 = !i2 && r2 > 205 && r2 < 245;
          if (o2 > 0.5) {
            var s2 = Le(o2, 0.5, 1, Ye, t2.l);
            if (i2)
              return { h: t2.h, s: t2.s, l: s2, a: a2 };
            var c2 = r2;
            return u2 && (c2 = Ze(r2)), { h: c2, s: n2, l: s2, a: a2 };
          }
          if (i2)
            return { h: t2.h, s: t2.s, l: Le(o2, 0, 0.5, t2.l, Ye), a: a2 };
          var l2, d2 = r2;
          return u2 ? (d2 = Ze(r2), l2 = Le(o2, 0, 0.5, t2.l, Math.min(1, 0.6000000000000001))) : l2 = Le(o2, 0, 0.5, t2.l, Ye), { h: d2, s: n2, l: l2, a: a2 };
        }
        function tt(e2, r2) {
          if (0 === r2.mode)
            return Ge(e2, r2);
          var n2 = Ne(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), et, n2);
        }
        function rt(e2, t2, r2) {
          var n2 = e2.h, o2 = e2.s, a2 = e2.l, i2 = e2.a, u2 = n2, s2 = o2;
          return (a2 < 0.2 || o2 < 0.24) && (a2 < 0.5 ? (u2 = t2.h, s2 = t2.s) : (u2 = r2.h, s2 = r2.s)), { h: u2, s: s2, l: Le(a2, 0, 1, 0.5, 0.2), a: i2 };
        }
        function nt(e2, r2) {
          if (0 === r2.mode)
            return Ge(e2, r2);
          var n2 = Ne(r2), o2 = qe(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), rt, n2, o2);
        }
        function ot(e2, t2) {
          return Je(e2, t2);
        }
        function at(e2) {
          var t2 = [];
          return e2.mode === Xe.dark && t2.push("invert(100%) hue-rotate(180deg)"), 100 !== e2.brightness && t2.push("brightness(" + e2.brightness + "%)"), 100 !== e2.contrast && t2.push("contrast(" + e2.contrast + "%)"), 0 !== e2.grayscale && t2.push("grayscale(" + e2.grayscale + "%)"), 0 !== e2.sepia && t2.push("sepia(" + e2.sepia + "%)"), 0 === t2.length ? null : t2.join(" ");
        }
        !function(e2) {
          e2[e2.light = 0] = "light", e2[e2.dark = 1] = "dark";
        }(Xe || (Xe = {}));
        var it = 0, ut = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
        function ct(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, new Promise(function(t3, r2) {
                var n2 = ++it;
                ut.set(n2, t3), st.set(n2, r2), chrome.runtime.sendMessage({ type: "fetch", data: e2, id: n2 });
              })];
            });
          });
        }
        function lt(e2) {
          return r(this, void 0, void 0, function() {
            var r2, o2, a2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return e2.startsWith("data:") ? (r2 = e2, [3, 3]) : [3, 1];
                case 1:
                  return [4, dt(e2)];
                case 2:
                  r2 = n2.sent(), n2.label = 3;
                case 3:
                  return [4, ft(r2)];
                case 4:
                  return o2 = n2.sent(), a2 = function(e3) {
                    ht || (t2 = vt, r3 = vt, (ht = document.createElement("canvas")).width = t2, ht.height = r3, (pt = ht.getContext("2d")).imageSmoothingEnabled = false);
                    var t2, r3;
                    var n3 = e3.naturalWidth, o3 = e3.naturalHeight;
                    if (0 === o3 || 0 === n3)
                      return F("logWarn(Image is empty " + e3.currentSrc + ")"), null;
                    var a3 = n3 * o3, i2 = Math.min(1, Math.sqrt(vt / a3)), u2 = Math.ceil(n3 * i2), s2 = Math.ceil(o3 * i2);
                    pt.clearRect(0, 0, u2, s2), pt.drawImage(e3, 0, 0, n3, o3, 0, 0, u2, s2);
                    var c2, l2, d2, f2, h2, p2, v2, m2 = pt.getImageData(0, 0, u2, s2).data, g2 = 0.05, b2 = 0.4, y2 = 0.7, w2 = 0, k2 = 0, S2 = 0;
                    for (d2 = 0; d2 < s2; d2++)
                      for (l2 = 0; l2 < u2; l2++)
                        f2 = m2[(c2 = 4 * (d2 * u2 + l2)) + 0] / 255, h2 = m2[c2 + 1] / 255, p2 = m2[c2 + 2] / 255, m2[c2 + 3] / 255 < g2 ? w2++ : ((v2 = 0.2126 * f2 + 0.7152 * h2 + 0.0722 * p2) < b2 && k2++, v2 > y2 && S2++);
                    var _2 = u2 * s2, E2 = _2 - w2;
                    return { isDark: k2 / E2 >= 0.7, isLight: S2 / E2 >= 0.7, isTransparent: w2 / _2 >= 0.1, isLarge: a3 >= 48e4 };
                  }(o2), [2, t({ src: e2, dataURL: r2, width: o2.naturalWidth, height: o2.naturalHeight }, a2)];
              }
            });
          });
        }
        function dt(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return new URL(e2).origin !== location.origin ? [3, 2] : [4, w(e2)];
                case 1:
                  return [2, t2.sent()];
                case 2:
                  return [4, ct({ url: e2, responseType: "data-url" })];
                case 3:
                  return [2, t2.sent()];
              }
            });
          });
        }
        function ft(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, new Promise(function(t3, r2) {
                var n2 = new Image();
                n2.onload = function() {
                  return t3(n2);
                }, n2.onerror = function() {
                  return r2("Unable to load image " + e2);
                }, n2.src = e2;
              })];
            });
          });
        }
        chrome.runtime.onMessage.addListener(function(e2) {
          var t2 = e2.type, r2 = e2.data, n2 = e2.error, o2 = e2.id;
          if ("fetch-response" === t2) {
            var a2 = ut.get(o2), i2 = st.get(o2);
            ut.delete(o2), st.delete(o2), n2 ? i2 && i2(n2) : a2 && a2(r2);
          }
        });
        var ht, pt, vt = 1024;
        function mt(e2, t2) {
          var r2 = e2.dataURL, n2 = e2.width, o2 = e2.height, a2 = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + n2 + '" height="' + o2 + '">', "<defs>", '<filter id="darkreader-image-filter">', '<feColorMatrix type="matrix" values="' + De(t2).slice(0, 4).map(function(e3) {
            return e3.map(function(e4) {
              return e4.toFixed(3);
            }).join(" ");
          }).join(" ") + '" />', "</filter>", "</defs>", '<image width="' + n2 + '" height="' + o2 + '" filter="url(#darkreader-image-filter)" xlink:href="' + r2 + '" />', "</svg>"].join("");
          return "data:image/svg+xml;base64," + btoa(a2);
        }
        function gt() {
          ht = null, pt = null;
        }
        function bt(e2, t2, r2, n2, o2, a2) {
          var i2 = Boolean(r2 && r2.style && r2.style.getPropertyPriority(e2)), u2 = t2;
          if (e2.startsWith("--")) {
            if (s2 = function(e3, t3, r3, n3, o3, a3) {
              return e3.getModifierForVariable({ varName: t3, sourceValue: r3, rule: n3, ignoredImgSelectors: o3, isCancelled: a3 });
            }(n2, e2, t2, r2, o2, a2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (t2.includes("var(")) {
            if (s2 = function(e3, t3, r3) {
              return e3.getModifierForVarDependant(t3, r3);
            }(n2, e2, t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (e2.includes("color") && "-webkit-print-color-adjust" !== e2 || "fill" === e2 || "stroke" === e2 || "stop-color" === e2) {
            if (s2 = function(e3, t3) {
              if (St.has(t3.toLowerCase()))
                return t3;
              try {
                var r3 = Et(t3);
                return e3.includes("background") ? function(e4) {
                  return Je(r3, e4);
                } : e3.includes("border") || e3.includes("outline") ? function(e4) {
                  return nt(r3, e4);
                } : function(e4) {
                  return tt(r3, e4);
                };
              } catch (e4) {
                return F("Color parse error", e4), null;
              }
            }(e2, t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if ("background-image" === e2 || "list-style-image" === e2) {
            if (s2 = Mt(t2, r2, o2, a2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (e2.includes("shadow")) {
            var s2;
            if (s2 = function(e3) {
              try {
                var t3 = 0, r3 = Oe(/(^|\s)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, e3, 2), n3 = r3.map(function(n4, o3) {
                  var a3 = t3, i3 = e3.indexOf(n4, t3), u3 = i3 + n4.length;
                  t3 = u3;
                  var s3 = xt(n4);
                  return s3 ? function(t4) {
                    return "" + e3.substring(a3, i3) + function(e4, t5) {
                      return Je(e4, t5);
                    }(s3, t4) + (o3 === r3.length - 1 ? e3.substring(u3) : "");
                  } : function() {
                    return e3.substring(a3, u3);
                  };
                });
                return function(e4) {
                  return n3.map(function(t4) {
                    return t4(e4);
                  }).join("");
                };
              } catch (t4) {
                return F("Unable to parse shadow " + e3, t4), null;
              }
            }(t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          }
          return null;
        }
        function yt(e2, r2, n2) {
          var o2 = [];
          return r2 || (o2.push("html {"), o2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + " !important;"), o2.push("}")), o2.push((r2 ? "" : "html, body, ") + (n2 ? "input, textarea, select, button" : "") + " {"), o2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + ";"), o2.push("}"), o2.push("html, body, " + (n2 ? "input, textarea, select, button" : "") + " {"), o2.push("    border-color: " + nt({ r: 76, g: 76, b: 76 }, e2) + ";"), o2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + ";"), o2.push("}"), o2.push("a {"), o2.push("    color: " + tt({ r: 0, g: 64, b: 255 }, e2) + ";"), o2.push("}"), o2.push("table {"), o2.push("    border-color: " + nt({ r: 128, g: 128, b: 128 }, e2) + ";"), o2.push("}"), o2.push("::placeholder {"), o2.push("    color: " + tt({ r: 169, g: 169, b: 169 }, e2) + ";"), o2.push("}"), o2.push("input:-webkit-autofill,"), o2.push("textarea:-webkit-autofill,"), o2.push("select:-webkit-autofill {"), o2.push("    background-color: " + Je({ r: 250, g: 255, b: 189 }, e2) + " !important;"), o2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + " !important;"), o2.push("}"), e2.scrollbarColor && o2.push(function(e3) {
            var r3, n3, o3, a2, i2, u2, s2 = [];
            if ("auto" === e3.scrollbarColor)
              r3 = Je({ r: 241, g: 241, b: 241 }, e3), n3 = tt({ r: 96, g: 96, b: 96 }, e3), o3 = Je({ r: 176, g: 176, b: 176 }, e3), a2 = Je({ r: 144, g: 144, b: 144 }, e3), i2 = Je({ r: 96, g: 96, b: 96 }, e3), u2 = Je({ r: 255, g: 255, b: 255 }, e3);
            else {
              var c2 = me(Se(e3.scrollbarColor)), l2 = c2.l > 0.5, f2 = function(e4) {
                return t(t({}, c2), { l: Pe(c2.l + e4, 0, 1) });
              }, h2 = function(e4) {
                return t(t({}, c2), { l: Pe(c2.l - e4, 0, 1) });
              };
              r3 = be(h2(0.4)), n3 = be(l2 ? h2(0.4) : f2(0.4)), o3 = be(c2), a2 = be(f2(0.1)), i2 = be(f2(0.2));
            }
            s2.push("::-webkit-scrollbar {"), s2.push("    background-color: " + r3 + ";"), s2.push("    color: " + n3 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb {"), s2.push("    background-color: " + o3 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb:hover {"), s2.push("    background-color: " + a2 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb:active {"), s2.push("    background-color: " + i2 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-corner {"), s2.push("    background-color: " + u2 + ";"), s2.push("}"), d && (s2.push("* {"), s2.push("    scrollbar-color: " + o3 + " " + r3 + ";"), s2.push("}"));
            return s2.join("\n");
          }(e2)), e2.selectionColor && o2.push(function(e3) {
            var t2 = [], r3 = wt(e3), n3 = r3.backgroundColorSelection, o3 = r3.foregroundColorSelection;
            return ["::selection", "::-moz-selection"].forEach(function(e4) {
              t2.push(e4 + " {"), t2.push("    background-color: " + n3 + " !important;"), t2.push("    color: " + o3 + " !important;"), t2.push("}");
            }), t2.join("\n");
          }(e2)), o2.join("\n");
        }
        function wt(e2) {
          var r2, n2;
          if ("auto" === e2.selectionColor)
            r2 = Je({ r: 0, g: 96, b: 212 }, t(t({}, e2), { grayscale: 0 })), n2 = tt({ r: 255, g: 255, b: 255 }, t(t({}, e2), { grayscale: 0 }));
          else {
            var o2 = me(Se(e2.selectionColor));
            r2 = e2.selectionColor, n2 = o2.l < 0.5 ? "#FFF" : "#000";
          }
          return { backgroundColorSelection: r2, foregroundColorSelection: n2 };
        }
        function kt(e2, t2) {
          var r2 = t2.strict, n2 = [];
          return n2.push("html, body, " + (r2 ? "body :not(iframe)" : "body > :not(iframe)") + " {"), n2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + " !important;"), n2.push("    border-color: " + nt({ r: 64, g: 64, b: 64 }, e2) + " !important;"), n2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + " !important;"), n2.push("}"), n2.join("\n");
        }
        var St = /* @__PURE__ */ new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]), _t = /* @__PURE__ */ new Map();
        function Et(e2) {
          if (e2 = e2.trim(), _t.has(e2))
            return _t.get(e2);
          var t2 = Se(e2);
          return _t.set(e2, t2), t2;
        }
        function xt(e2) {
          try {
            return Et(e2);
          } catch (e3) {
            return null;
          }
        }
        var Ct = /[\-a-z]+gradient\(([^\(\)]*(\(([^\(\)]*(\(.*?\)))*[^\(\)]*\))){0,15}[^\(\)]*\)/g, Vt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map();
        function Mt(e2, o2, a2, i2) {
          var u2 = this;
          try {
            var s2 = Oe(Ct, e2), c2 = Oe(ce, e2);
            if (0 === c2.length && 0 === s2.length)
              return e2;
            var l2 = function(t2) {
              var r2 = 0;
              return t2.map(function(t3) {
                var n2 = e2.indexOf(t3, r2);
                return r2 = n2 + t3.length, { match: t3, index: n2 };
              });
            }, d2 = l2(c2).map(function(e3) {
              return t({ type: "url" }, e3);
            }).concat(l2(s2).map(function(e3) {
              return t({ type: "gradient" }, e3);
            })).sort(function(e3, t2) {
              return e3.index - t2.index;
            }), f2 = function(e3, r2) {
              var n2, o3 = e3.isDark, a3 = e3.isLight, i3 = e3.isTransparent, u3 = e3.isLarge, s3 = e3.width;
              if (o3 && i3 && 1 === r2.mode && !u3 && s3 > 2)
                D("Inverting dark image " + e3.src), n2 = 'url("' + mt(e3, t(t({}, r2), { sepia: Pe(r2.sepia + 10, 0, 100) })) + '")';
              else if (a3 && !i3 && 1 === r2.mode) {
                if (u3)
                  n2 = "none";
                else
                  D("Dimming light image " + e3.src), n2 = 'url("' + mt(e3, r2) + '")';
              } else if (0 === r2.mode && a3 && !u3) {
                D("Applying filter to image " + e3.src), n2 = 'url("' + mt(e3, t(t({}, r2), { brightness: Pe(r2.brightness - 10, 5, 200), sepia: Pe(r2.sepia + 10, 0, 100) })) + '")';
              } else
                n2 = null;
              return n2;
            }, h2 = [], p2 = 0;
            return d2.forEach(function(t2, s3) {
              var c3 = t2.match, l3 = t2.type, v2 = t2.index, m2 = p2, g2 = v2 + c3.length;
              p2 = g2, h2.push(function() {
                return e2.substring(m2, v2);
              }), h2.push("url" === l3 ? function(e3) {
                var t3;
                if (function(e4, t4) {
                  if (!e4 || 0 === t4.length)
                    return false;
                  if (t4.some(function(e5) {
                    return "*" === e5;
                  }))
                    return true;
                  for (var r2 = e4.split(/,\s*/g), n2 = function(e5) {
                    var n3 = t4[e5];
                    if (r2.some(function(e6) {
                      return e6 === n3;
                    }))
                      return { value: true };
                  }, o3 = 0; o3 < t4.length; o3++) {
                    var a3 = n2(o3);
                    if ("object" == typeof a3)
                      return a3.value;
                  }
                  return false;
                }(o2.selectorText, a2))
                  return null;
                var s4 = de(e3), c4 = o2.parentStyleSheet, l4 = c4.href ? fe(c4.href) : (null === (t3 = c4.ownerNode) || void 0 === t3 ? void 0 : t3.baseURI) || location.origin, d3 = 'url("' + (s4 = oe(l4, s4)) + '")';
                return function(e4) {
                  return r(u2, void 0, void 0, function() {
                    var t4, r2;
                    return n(this, function(n2) {
                      switch (n2.label) {
                        case 0:
                          return Vt.has(s4) ? (t4 = Vt.get(s4), [3, 7]) : [3, 1];
                        case 1:
                          return n2.trys.push([1, 6, , 7]), Rt.has(s4) ? (r2 = Rt.get(s4), [4, new Promise(function(e5) {
                            return r2.push(e5);
                          })]) : [3, 3];
                        case 2:
                          return (t4 = n2.sent()) ? [3, 5] : [2, null];
                        case 3:
                          return Rt.set(s4, []), [4, lt(s4)];
                        case 4:
                          t4 = n2.sent(), Vt.set(s4, t4), Rt.get(s4).forEach(function(e5) {
                            return e5(t4);
                          }), Rt.delete(s4), n2.label = 5;
                        case 5:
                          return i2() ? [2, null] : [3, 7];
                        case 6:
                          return F(n2.sent()), Rt.has(s4) && (Rt.get(s4).forEach(function(e5) {
                            return e5(null);
                          }), Rt.delete(s4)), [2, d3];
                        case 7:
                          return [2, f2(t4, e4) || d3];
                      }
                    });
                  });
                };
              }(c3) : function(e3) {
                var t3 = e3.match(/^(.*-gradient)\((.*)\)$/), r2 = t3[1], n2 = t3[2], o3 = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/, a3 = Oe(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, n2, 1).map(function(e4) {
                  var t4 = xt(e4 = e4.trim());
                  if (t4)
                    return function(e5) {
                      return ot(t4, e5);
                    };
                  var r3 = e4.lastIndexOf(" ");
                  if (t4 = xt(e4.substring(0, r3)))
                    return function(n4) {
                      return ot(t4, n4) + " " + e4.substring(r3 + 1);
                    };
                  var n3 = e4.match(o3);
                  return n3 && (t4 = xt(n3[3])) ? function(e5) {
                    return n3[1] + "(" + (n3[2] ? n3[2] + ", " : "") + ot(t4, e5) + ")";
                  } : function() {
                    return e4;
                  };
                });
                return function(e4) {
                  return r2 + "(" + a3.map(function(t4) {
                    return t4(e4);
                  }).join(", ") + ")";
                };
              }(c3)), s3 === d2.length - 1 && h2.push(function() {
                return e2.substring(g2);
              });
            }), function(e3) {
              var t2 = h2.filter(Boolean).map(function(t3) {
                return t3(e3);
              });
              return t2.some(function(e4) {
                return e4 instanceof Promise;
              }) ? Promise.all(t2).then(function(e4) {
                return e4.join("");
              }) : t2.join("");
            };
          } catch (t2) {
            return F("Unable to parse gradient " + e2, t2), null;
          }
        }
        function Tt() {
          _t.clear(), Be.clear(), We.clear(), Vt.clear(), gt(), Rt.clear();
        }
        var At = new (function() {
          function e2() {
            this.varTypes = /* @__PURE__ */ new Map(), this.rulesQueue = [], this.definedVars = /* @__PURE__ */ new Set(), this.varRefs = /* @__PURE__ */ new Map(), this.unknownColorVars = /* @__PURE__ */ new Set(), this.unknownBgVars = /* @__PURE__ */ new Set(), this.undefinedVars = /* @__PURE__ */ new Set(), this.initialVarTypes = /* @__PURE__ */ new Map(), this.changedTypeVars = /* @__PURE__ */ new Set(), this.typeChangeSubscriptions = /* @__PURE__ */ new Map(), this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          return e2.prototype.clear = function() {
            this.varTypes.clear(), this.rulesQueue.splice(0), this.definedVars.clear(), this.varRefs.clear(), this.unknownColorVars.clear(), this.unknownBgVars.clear(), this.undefinedVars.clear(), this.initialVarTypes.clear(), this.changedTypeVars.clear(), this.typeChangeSubscriptions.clear(), this.unstableVarValues.clear();
          }, e2.prototype.isVarType = function(e3, t2) {
            return this.varTypes.has(e3) && (this.varTypes.get(e3) & t2) > 0;
          }, e2.prototype.addRulesForMatching = function(e3) {
            this.rulesQueue.push(e3);
          }, e2.prototype.matchVariablesAndDependants = function() {
            var e3 = this;
            this.changedTypeVars.clear(), this.initialVarTypes = new Map(this.varTypes), this.collectRootVariables(), this.rulesQueue.forEach(function(t2) {
              return e3.collectVariables(t2);
            }), this.rulesQueue.forEach(function(t2) {
              return e3.collectVarDependants(t2);
            }), this.rulesQueue.splice(0), this.collectRootVarDependants(), this.varRefs.forEach(function(t2, r2) {
              t2.forEach(function(t3) {
                e3.varTypes.has(r2) && e3.resolveVariableType(t3, e3.varTypes.get(r2));
              });
            }), this.unknownColorVars.forEach(function(t2) {
              e3.unknownBgVars.has(t2) ? (e3.unknownColorVars.delete(t2), e3.unknownBgVars.delete(t2), e3.resolveVariableType(t2, 1)) : e3.isVarType(t2, 7) ? e3.unknownColorVars.delete(t2) : e3.undefinedVars.add(t2);
            }), this.unknownBgVars.forEach(function(t2) {
              null != e3.findVarRef(t2, function(t3) {
                return e3.unknownColorVars.has(t3) || e3.isVarType(t3, 6);
              }) ? e3.itarateVarRefs(t2, function(t3) {
                e3.resolveVariableType(t3, 1);
              }) : e3.isVarType(t2, 9) ? e3.unknownBgVars.delete(t2) : e3.undefinedVars.add(t2);
            }), this.changedTypeVars.forEach(function(t2) {
              e3.typeChangeSubscriptions.has(t2) && e3.typeChangeSubscriptions.get(t2).forEach(function(e4) {
                e4();
              });
            }), this.changedTypeVars.clear();
          }, e2.prototype.getModifierForVariable = function(e3) {
            var t2 = this;
            return function(r2) {
              var n2 = e3.varName, o2 = e3.sourceValue, a2 = e3.rule, i2 = e3.ignoredImgSelectors, u2 = e3.isCancelled, s2 = function() {
                var e4 = [], s3 = function(a3, i3, u3) {
                  if (t2.isVarType(n2, a3)) {
                    var s4, c4 = i3(n2);
                    if (Wt(o2))
                      if (It(o2)) {
                        var l3 = Ht(o2, t2.unstableVarValues);
                        l3 || (l3 = 1 === a3 ? "#ffffff" : "#000000"), s4 = u3(l3, r2);
                      } else
                        s4 = Ot(o2, function(e5) {
                          return i3(e5);
                        }, function(e5) {
                          return u3(e5, r2);
                        });
                    else
                      s4 = u3(o2, r2);
                    e4.push({ property: c4, value: s4 });
                  }
                };
                if (s3(1, Dt, Ut), s3(2, Ft, $t), s3(4, qt, zt), t2.isVarType(n2, 8)) {
                  var c3 = Nt(n2), l2 = o2;
                  Wt(o2) && (l2 = Ot(o2, function(e5) {
                    return Dt(e5);
                  }, function(e5) {
                    return Ut(e5, r2);
                  }));
                  var d2 = Mt(l2, a2, i2, u2);
                  l2 = "function" == typeof d2 ? d2(r2) : d2, e4.push({ property: c3, value: l2 });
                }
                return e4;
              }, c2 = /* @__PURE__ */ new Set();
              return { declarations: s2(), onTypeChange: { addListener: function(e4) {
                var r3 = function() {
                  var t3 = s2();
                  e4(t3);
                };
                c2.add(r3), t2.subscribeForVarTypeChange(n2, r3);
              }, removeListeners: function() {
                c2.forEach(function(e4) {
                  t2.unsubscribeFromVariableTypeChanges(n2, e4);
                });
              } } };
            };
          }, e2.prototype.getModifierForVarDependant = function(e3, t2) {
            var r2 = this;
            if (t2.match(/^\s*(rgb|hsl)a?\(/)) {
              var n2 = e3.startsWith("background"), o2 = "color" === e3;
              return function(e4) {
                var a3 = Ht(t2, r2.unstableVarValues);
                return a3 || (a3 = n2 ? "#ffffff" : "#000000"), (n2 ? Ut : o2 ? $t : zt)(a3, e4);
              };
            }
            if ("background-color" === e3)
              return function(e4) {
                return Ot(t2, function(e5) {
                  return Dt(e5);
                }, function(t3) {
                  return Ut(t3, e4);
                });
              };
            if ("color" === e3)
              return function(e4) {
                return Ot(t2, function(e5) {
                  return Ft(e5);
                }, function(t3) {
                  return $t(t3, e4);
                });
              };
            if ("background" === e3 || "background-image" === e3 || "box-shadow" === e3)
              return function(e4) {
                var n3 = /* @__PURE__ */ new Set(), o3 = function() {
                  return Ot(t2, function(e5) {
                    return r2.isVarType(e5, 1) ? Dt(e5) : r2.isVarType(e5, 8) ? Nt(e5) : (n3.add(e5), e5);
                  }, function(t3) {
                    return Ut(t3, e4);
                  });
                }, a3 = o3();
                return n3.size > 0 ? new Promise(function(e5) {
                  var t3 = n3.values().next().value, a4 = function() {
                    r2.unsubscribeFromVariableTypeChanges(t3, a4);
                    var n4 = o3();
                    e5(n4);
                  };
                  r2.subscribeForVarTypeChange(t3, a4);
                }) : a3;
              };
            if (e3.startsWith("border") || e3.startsWith("outline")) {
              if (t2.endsWith(")")) {
                var a2 = t2.match(/((rgb|hsl)a?)\(/);
                if (a2) {
                  var i2 = a2.index;
                  return function(e4) {
                    return Ht(t2, r2.unstableVarValues) ? "" + t2.substring(0, i2) + zt(Ht(t2.substring(i2, t2.length), r2.unstableVarValues), e4) : t2;
                  };
                }
              }
              return function(e4) {
                return Ot(t2, function(e5) {
                  return qt(e5);
                }, function(t3) {
                  return $t(t3, e4);
                });
              };
            }
            return null;
          }, e2.prototype.subscribeForVarTypeChange = function(e3, t2) {
            this.typeChangeSubscriptions.has(e3) || this.typeChangeSubscriptions.set(e3, /* @__PURE__ */ new Set()), this.typeChangeSubscriptions.get(e3).add(t2);
          }, e2.prototype.unsubscribeFromVariableTypeChanges = function(e3, t2) {
            this.typeChangeSubscriptions.has(e3) && this.typeChangeSubscriptions.get(e3).delete(t2);
          }, e2.prototype.collectVariables = function(e3) {
            var t2 = this;
            !function(e4, t3) {
              ae(e4, function(e5) {
                e5.style && se(e5.style, function(e6, r2) {
                  e6.startsWith("--") && t3(e6, r2);
                });
              });
            }(e3, function(e4, r2) {
              t2.inspectVariable(e4, r2);
            });
          }, e2.prototype.collectRootVariables = function() {
            var e3 = this;
            se(document.documentElement.style, function(t2, r2) {
              Bt(t2) && e3.inspectVariable(t2, r2);
            });
          }, e2.prototype.inspectVariable = function(e3, t2) {
            (this.unstableVarValues.set(e3, t2), Wt(t2) && It(t2) && (this.unknownColorVars.add(e3), this.definedVars.add(e3)), this.definedVars.has(e3)) || (this.definedVars.add(e3), xt(t2) ? this.unknownColorVars.add(e3) : (t2.includes("url(") || t2.includes("linear-gradient(") || t2.includes("radial-gradient(")) && this.resolveVariableType(e3, 8));
          }, e2.prototype.resolveVariableType = function(e3, t2) {
            var r2 = this.initialVarTypes.get(e3) || 0, n2 = (this.varTypes.get(e3) || 0) | t2;
            this.varTypes.set(e3, n2), (n2 !== r2 || this.undefinedVars.has(e3)) && (this.changedTypeVars.add(e3), this.undefinedVars.delete(e3)), this.unknownColorVars.delete(e3), this.unknownBgVars.delete(e3);
          }, e2.prototype.collectVarDependants = function(e3) {
            var t2 = this;
            !function(e4, t3) {
              ae(e4, function(e5) {
                e5.style && se(e5.style, function(e6, r2) {
                  Wt(r2) && t3(e6, r2);
                });
              });
            }(e3, function(e4, r2) {
              t2.inspectVerDependant(e4, r2);
            });
          }, e2.prototype.collectRootVarDependants = function() {
            var e3 = this;
            se(document.documentElement.style, function(t2, r2) {
              Wt(r2) && e3.inspectVerDependant(t2, r2);
            });
          }, e2.prototype.inspectVerDependant = function(e3, t2) {
            var r2 = this;
            Bt(e3) ? this.iterateVarDeps(t2, function(t3) {
              r2.varRefs.has(e3) || r2.varRefs.set(e3, /* @__PURE__ */ new Set()), r2.varRefs.get(e3).add(t3);
            }) : "background-color" === e3 || "box-shadow" === e3 ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 1);
            }) : "color" === e3 ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 2);
            }) : e3.startsWith("border") || e3.startsWith("outline") ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 4);
            }) : "background" !== e3 && "background-image" !== e3 || this.iterateVarDeps(t2, function(e4) {
              if (!r2.isVarType(e4, 9)) {
                var t3 = null != r2.findVarRef(e4, function(e5) {
                  return r2.unknownColorVars.has(e5) || r2.isVarType(e5, 6);
                });
                r2.itarateVarRefs(e4, function(e5) {
                  t3 ? r2.resolveVariableType(e5, 1) : r2.unknownBgVars.add(e5);
                });
              }
            });
          }, e2.prototype.iterateVarDeps = function(e3, t2) {
            var r2 = /* @__PURE__ */ new Set();
            !function(e4, t3) {
              Ot(e4, function(e5) {
                return t3(e5), e5;
              });
            }(e3, function(e4) {
              return r2.add(e4);
            }), r2.forEach(function(e4) {
              return t2(e4);
            });
          }, e2.prototype.findVarRef = function(e3, t2, r2) {
            var n2, a2;
            if (void 0 === r2 && (r2 = /* @__PURE__ */ new Set()), r2.has(e3))
              return null;
            if (r2.add(e3), t2(e3))
              return e3;
            var i2 = this.varRefs.get(e3);
            if (!i2 || 0 === i2.size)
              return null;
            try {
              for (var u2 = o(i2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
                var c2 = s2.value, l2 = this.findVarRef(c2, t2, r2);
                if (l2)
                  return l2;
              }
            } catch (e4) {
              n2 = { error: e4 };
            } finally {
              try {
                s2 && !s2.done && (a2 = u2.return) && a2.call(u2);
              } finally {
                if (n2)
                  throw n2.error;
              }
            }
            return null;
          }, e2.prototype.itarateVarRefs = function(e3, t2) {
            this.findVarRef(e3, function(e4) {
              return t2(e4), false;
            });
          }, e2.prototype.putRootVars = function(e3, t2) {
            var r2, n2, i2 = this, u2 = e3.sheet;
            u2.cssRules.length > 0 && u2.deleteRule(0);
            var s2 = /* @__PURE__ */ new Map();
            se(document.documentElement.style, function(e4, r3) {
              Bt(e4) && (i2.isVarType(e4, 1) && s2.set(Dt(e4), Ut(r3, t2)), i2.isVarType(e4, 2) && s2.set(Ft(e4), $t(r3, t2)), i2.isVarType(e4, 4) && s2.set(qt(e4), zt(r3, t2)));
            });
            var c2 = [];
            c2.push(":root {");
            try {
              for (var l2 = o(s2), d2 = l2.next(); !d2.done; d2 = l2.next()) {
                var f2 = a(d2.value, 2), h2 = f2[0], p2 = f2[1];
                c2.push("    " + h2 + ": " + p2 + ";");
              }
            } catch (e4) {
              r2 = { error: e4 };
            } finally {
              try {
                d2 && !d2.done && (n2 = l2.return) && n2.call(l2);
              } finally {
                if (r2)
                  throw r2.error;
              }
            }
            c2.push("}");
            var v2 = c2.join("\n");
            u2.insertRule(v2);
          }, e2;
        }())();
        function Lt(e2, t2) {
          void 0 === t2 && (t2 = 0);
          var r2 = e2.indexOf("var(", t2);
          if (r2 >= 0) {
            var n2 = function(e3, t3) {
              void 0 === t3 && (t3 = 0);
              for (var r3 = e3.length, n3 = 0, o2 = -1, a2 = t3; a2 < r3; a2++)
                if (0 === n3) {
                  if ((i2 = e3.indexOf("(", a2)) < 0)
                    break;
                  o2 = i2, n3++, a2 = i2;
                } else {
                  var i2, u2 = e3.indexOf(")", a2);
                  if (u2 < 0)
                    break;
                  if ((i2 = e3.indexOf("(", a2)) < 0 || u2 < i2) {
                    if (0 == --n3)
                      return { start: o2, end: u2 + 1 };
                    a2 = u2;
                  } else
                    n3++, a2 = i2;
                }
              return null;
            }(e2, r2 + 3);
            return n2 ? { start: r2, end: n2.end } : null;
          }
        }
        function Pt(e2, t2) {
          var r2 = function(e3) {
            for (var t3, r3 = [], n3 = 0; t3 = Lt(e3, n3); ) {
              var o3 = t3.start, a3 = t3.end;
              r3.push({ start: o3, end: a3, value: e3.substring(o3, a3) }), n3 = t3.end + 1;
            }
            return r3;
          }(e2), n2 = r2.length;
          if (0 === n2)
            return e2;
          var o2 = e2.length, a2 = r2.map(function(e3) {
            return t2(e3.value);
          }), i2 = [];
          i2.push(e2.substring(0, r2[0].start));
          for (var u2 = 0; u2 < n2; u2++) {
            i2.push(a2[u2]);
            var s2 = r2[u2].end, c2 = u2 < n2 - 1 ? r2[u2 + 1].start : o2;
            i2.push(e2.substring(s2, c2));
          }
          return i2.join("");
        }
        function jt(e2) {
          var t2, r2, n2 = e2.indexOf(",");
          return n2 >= 0 ? (t2 = e2.substring(4, n2).trim(), r2 = e2.substring(n2 + 1, e2.length - 1).trim()) : (t2 = e2.substring(4, e2.length - 1).trim(), r2 = ""), { name: t2, fallback: r2 };
        }
        function Ot(e2, t2, r2) {
          return Pt(e2, function(e3) {
            var n2 = jt(e3), o2 = n2.name, a2 = n2.fallback, i2 = t2(o2);
            return a2 ? "var(" + i2 + ", " + (Wt(a2) ? Ot(a2, t2, r2) : r2 ? r2(a2) : a2) + ")" : "var(" + i2 + ")";
          });
        }
        function Dt(e2) {
          return "--darkreader-bg" + e2;
        }
        function Ft(e2) {
          return "--darkreader-text" + e2;
        }
        function qt(e2) {
          return "--darkreader-border" + e2;
        }
        function Nt(e2) {
          return "--darkreader-bgimg" + e2;
        }
        function Bt(e2) {
          return e2.startsWith("--");
        }
        function Wt(e2) {
          return e2.includes("var(");
        }
        function It(e2) {
          return e2.match(/^\s*(rgb|hsl)a?\(/);
        }
        function Ut(e2, t2) {
          var r2 = xt(e2);
          return r2 ? Je(r2, t2) : e2;
        }
        function $t(e2, t2) {
          var r2 = xt(e2);
          return r2 ? tt(r2, t2) : e2;
        }
        function zt(e2, t2) {
          var r2 = xt(e2);
          return r2 ? nt(r2, t2) : e2;
        }
        function Ht(e2, t2, r2) {
          void 0 === r2 && (r2 = /* @__PURE__ */ new Set());
          var n2 = false, o2 = Pt(e2, function(e3) {
            var o3 = jt(e3), a2 = o3.name, i2 = o3.fallback;
            if (r2.has(a2))
              return n2 = true, null;
            r2.add(a2);
            var u2 = t2.get(a2) || i2, s2 = null;
            return u2 && (s2 = Wt(u2) ? Ht(u2, t2, r2) : u2), s2 || (n2 = true, null);
          });
          return n2 ? null : o2;
        }
        var Gt = { "background-color": { customProp: "--darkreader-inline-bgcolor", cssProp: "background-color", dataAttr: "data-darkreader-inline-bgcolor" }, "background-image": { customProp: "--darkreader-inline-bgimage", cssProp: "background-image", dataAttr: "data-darkreader-inline-bgimage" }, "border-color": { customProp: "--darkreader-inline-border", cssProp: "border-color", dataAttr: "data-darkreader-inline-border" }, "border-bottom-color": { customProp: "--darkreader-inline-border-bottom", cssProp: "border-bottom-color", dataAttr: "data-darkreader-inline-border-bottom" }, "border-left-color": { customProp: "--darkreader-inline-border-left", cssProp: "border-left-color", dataAttr: "data-darkreader-inline-border-left" }, "border-right-color": { customProp: "--darkreader-inline-border-right", cssProp: "border-right-color", dataAttr: "data-darkreader-inline-border-right" }, "border-top-color": { customProp: "--darkreader-inline-border-top", cssProp: "border-top-color", dataAttr: "data-darkreader-inline-border-top" }, "box-shadow": { customProp: "--darkreader-inline-boxshadow", cssProp: "box-shadow", dataAttr: "data-darkreader-inline-boxshadow" }, color: { customProp: "--darkreader-inline-color", cssProp: "color", dataAttr: "data-darkreader-inline-color" }, fill: { customProp: "--darkreader-inline-fill", cssProp: "fill", dataAttr: "data-darkreader-inline-fill" }, stroke: { customProp: "--darkreader-inline-stroke", cssProp: "stroke", dataAttr: "data-darkreader-inline-stroke" }, "outline-color": { customProp: "--darkreader-inline-outline", cssProp: "outline-color", dataAttr: "data-darkreader-inline-outline" }, "stop-color": { customProp: "--darkreader-inline-stopcolor", cssProp: "stop-color", dataAttr: "data-darkreader-inline-stopcolor" } }, Qt = Object.values(Gt), Kt = {};
        Qt.forEach(function(e2) {
          var t2 = e2.cssProp, r2 = e2.customProp;
          return Kt[r2] = t2;
        });
        var Jt = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"], Xt = Jt.map(function(e2) {
          return "[" + e2 + "]";
        }).join(", ");
        function Yt() {
          return Qt.map(function(e2) {
            var t2 = e2.dataAttr, r2 = e2.customProp;
            return ["[" + t2 + "] {", "  " + e2.cssProp + ": var(" + r2 + ") !important;", "}"].join("\n");
          }).join("\n");
        }
        var Zt = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map();
        function tr(e2, t2, r2) {
          Zt.has(e2) && (Zt.get(e2).disconnect(), er.get(e2).disconnect());
          var n2 = /* @__PURE__ */ new WeakSet();
          function o2(e3) {
            (function(e4) {
              var t3 = [];
              return e4 instanceof Element && e4.matches(Xt) && t3.push(e4), (e4 instanceof Element || m && e4 instanceof ShadowRoot || e4 instanceof Document) && O(t3, e4.querySelectorAll(Xt)), t3;
            })(e3).forEach(function(e4) {
              n2.has(e4) || (n2.add(e4), t2(e4));
            }), I(e3, function(o3) {
              n2.has(e3) || (n2.add(e3), r2(o3.shadowRoot), tr(o3.shadowRoot, t2, r2));
            });
          }
          var u2 = ee(e2, { onMinorMutations: function(e3) {
            e3.additions.forEach(function(e4) {
              return o2(e4);
            });
          }, onHugeMutations: function() {
            o2(e2);
          } });
          Zt.set(e2, u2);
          var s2 = 0, c2 = null, l2 = N({ seconds: 10 }), d2 = N({ seconds: 2 }), f2 = [], h2 = null, p2 = q(function(e3) {
            e3.forEach(function(e4) {
              Jt.includes(e4.attributeName) && t2(e4.target);
            });
          }), v2 = new MutationObserver(function(e3) {
            if (h2)
              f2.push.apply(f2, i([], a(e3)));
            else {
              s2++;
              var t3 = Date.now();
              if (null == c2)
                c2 = t3;
              else if (s2 >= 50) {
                if (t3 - c2 < l2)
                  return h2 = setTimeout(function() {
                    c2 = null, s2 = 0, h2 = null;
                    var e4 = f2;
                    f2 = [], p2(e4);
                  }, d2), void f2.push.apply(f2, i([], a(e3)));
                c2 = t3, s2 = 1;
              }
              p2(e3);
            }
          });
          v2.observe(e2, { attributes: true, attributeFilter: Jt.concat(Qt.map(function(e3) {
            return e3.dataAttr;
          })), subtree: true }), er.set(e2, v2);
        }
        var rr = /* @__PURE__ */ new WeakMap(), nr = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function or(e2, t2) {
          return Jt.map(function(t3) {
            return t3 + '="' + e2.getAttribute(t3) + '"';
          }).concat(nr.map(function(e3) {
            return e3 + '="' + t2[e3] + '"';
          })).join(" ");
        }
        function ar(e2, t2, r2, n2) {
          if (or(e2, t2) !== rr.get(e2)) {
            var o2 = new Set(Object.keys(Gt));
            if (r2.length > 0 && function(e3, t3) {
              for (var r3 = 0, n3 = t3.length; r3 < n3; r3++) {
                var o3 = t3[r3];
                if (e3.matches(o3))
                  return true;
              }
              return false;
            }(e2, r2))
              o2.forEach(function(t3) {
                e2.removeAttribute(Gt[t3].dataAttr);
              });
            else {
              if (e2.hasAttribute("bgcolor"))
                ((u2 = e2.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s2("background-color", "background-color", u2);
              if (e2.hasAttribute("color"))
                ((u2 = e2.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s2("color", "color", u2);
              if (e2 instanceof SVGElement) {
                if (e2.hasAttribute("fill")) {
                  var a2 = e2.getAttribute("fill");
                  if (e2 instanceof SVGTextElement)
                    s2("fill", "color", a2);
                  else {
                    var i2 = function() {
                      var t3 = e2.getBoundingClientRect(), r3 = t3.width, n3 = t3.height;
                      s2("fill", r3 > 32 || n3 > 32 ? "background-color" : "color", a2);
                    };
                    G() ? i2() : K(i2);
                  }
                }
                e2.hasAttribute("stop-color") && s2("stop-color", "background-color", e2.getAttribute("stop-color"));
              }
              if (e2.hasAttribute("stroke")) {
                var u2 = e2.getAttribute("stroke");
                s2("stroke", e2 instanceof SVGLineElement || e2 instanceof SVGTextElement ? "border-color" : "color", u2);
              }
              e2.style && se(e2.style, function(t3, r3) {
                if ("background-image" !== t3 || !r3.includes("url"))
                  if (Gt.hasOwnProperty(t3))
                    s2(t3, t3, r3);
                  else {
                    var n3 = Kt[t3];
                    !n3 || e2.style.getPropertyValue(n3) || e2.hasAttribute(n3) || e2.style.setProperty(t3, "");
                  }
              }), e2.style && e2 instanceof SVGTextElement && e2.style.fill && s2("fill", "color", e2.style.getPropertyValue("fill")), j(o2, function(t3) {
                e2.removeAttribute(Gt[t3].dataAttr);
              }), rr.set(e2, or(e2, t2));
            }
          }
          function s2(r3, a3, i3) {
            var u3 = Gt[r3], s3 = u3.customProp, c2 = u3.dataAttr, l2 = bt(a3, i3, null, At, n2, null);
            if (l2) {
              var d2 = l2.value;
              "function" == typeof d2 && (d2 = d2(t2)), e2.style.setProperty(s3, d2), e2.hasAttribute(c2) || e2.setAttribute(c2, ""), o2.delete(r3);
            }
          }
        }
        var ir = "theme-color", ur = 'meta[name="theme-color"]', sr = null, cr = null;
        function lr(e2, t2) {
          sr = sr || e2.content;
          try {
            var r2 = Se(sr);
            e2.content = Je(r2, t2);
          } catch (e3) {
            F(e3);
          }
        }
        var dr = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        var fr = function() {
          var e2 = [], t2 = null;
          function r2() {
            for (var r3; r3 = e2.shift(); )
              r3();
            t2 = null;
          }
          return { add: function(n2) {
            e2.push(n2), t2 || (t2 = requestAnimationFrame(r2));
          }, cancel: function() {
            e2.splice(0), cancelAnimationFrame(t2), t2 = null;
          } };
        }();
        function hr() {
          var e2 = 0, t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), o2 = null, u2 = false, s2 = false;
          return { modifySheet: function(c2) {
            var l2 = c2.sourceCSSRules, d2 = c2.theme, f2 = c2.ignoreImageAnalysis, h2 = c2.force, p2 = c2.prepareSheet, v2 = c2.isAsyncCancelled, m2 = 0 === r2.size, g2 = new Set(r2.keys()), b2 = function(e3) {
              return dr.map(function(t3) {
                return t3 + ":" + e3[t3];
              }).join(";");
            }(d2), y2 = b2 !== o2;
            u2 && (s2 = true);
            var w2 = [];
            if (ae(l2, function(e3) {
              var n3 = e3.cssText, o3 = false;
              if (g2.delete(n3), e3.parentRule instanceof CSSMediaRule && (n3 += ";" + e3.parentRule.media.mediaText), t2.has(n3) || (t2.add(n3), o3 = true), o3) {
                m2 = true;
                var a2 = [];
                e3.style && se(e3.style, function(t3, r3) {
                  var n4 = bt(t3, r3, e3, At, f2, v2);
                  n4 && a2.push(n4);
                });
                var i2 = null;
                if (a2.length > 0) {
                  var u3 = e3.parentRule;
                  i2 = { selector: e3.selectorText, declarations: a2, parentRule: u3 }, w2.push(i2);
                }
                r2.set(n3, i2);
              } else
                w2.push(r2.get(n3));
            }, function() {
              u2 = true;
            }), g2.forEach(function(e3) {
              t2.delete(e3), r2.delete(e3);
            }), o2 = b2, h2 || m2 || y2) {
              e2++;
              var k2 = /* @__PURE__ */ new Map(), S2 = /* @__PURE__ */ new Map(), _2 = 0, E2 = 0, x2 = { rule: null, rules: [], isGroup: true }, C2 = /* @__PURE__ */ new WeakMap();
              n2.forEach(function(e3) {
                return e3();
              }), n2.clear(), w2.filter(function(e3) {
                return e3;
              }).forEach(function(t3) {
                var r3 = t3.selector, o3 = t3.declarations, u3 = M2(t3.parentRule), s3 = { selector: r3, declarations: [], isGroup: false }, c3 = s3.declarations;
                function l3(t4, r4, n3, o4) {
                  var a2 = ++_2, i2 = { property: t4, value: null, important: n3, asyncKey: a2, sourceValue: o4 };
                  c3.push(i2);
                  var u4 = e2;
                  r4.then(function(t5) {
                    t5 && !v2() && u4 === e2 && (i2.value = t5, fr.add(function() {
                      v2() || u4 !== e2 || function(e3) {
                        var t6 = k2.get(e3), r5 = t6.rule, n4 = t6.target, o5 = t6.index;
                        n4.deleteRule(o5), R2(n4, o5, r5), k2.delete(e3);
                      }(a2);
                    }));
                  });
                }
                function f3(t4, r4, o4, u4) {
                  var s4 = r4, d3 = s4.declarations, f4 = s4.onTypeChange, h3 = ++E2, p3 = e2, m3 = c3.length, g3 = [];
                  if (0 === d3.length) {
                    var b3 = { property: t4, value: u4, important: o4, sourceValue: u4, varKey: h3 };
                    c3.push(b3), g3 = [b3];
                  }
                  d3.forEach(function(e3) {
                    if (e3.value instanceof Promise)
                      l3(e3.property, e3.value, o4, u4);
                    else {
                      var t5 = { property: e3.property, value: e3.value, important: o4, sourceValue: u4, varKey: h3 };
                      c3.push(t5), g3.push(t5);
                    }
                  }), f4.addListener(function(t5) {
                    if (!v2() && p3 === e2) {
                      var r5 = t5.map(function(e3) {
                        return { property: e3.property, value: e3.value, important: o4, sourceValue: u4, varKey: h3 };
                      }), n3 = c3.indexOf(g3[0], m3);
                      c3.splice.apply(c3, i([n3, g3.length], a(r5))), g3 = r5, function(e3) {
                        var t6 = S2.get(e3), r6 = t6.rule, n4 = t6.target, o5 = t6.index;
                        n4.deleteRule(o5), R2(n4, o5, r6);
                      }(h3);
                    }
                  }), n2.add(function() {
                    return f4.removeListeners();
                  });
                }
                u3.rules.push(s3), o3.forEach(function(e3) {
                  var t4 = e3.property, r4 = e3.value, n3 = e3.important, o4 = e3.sourceValue;
                  if ("function" == typeof r4) {
                    var a2 = r4(d2);
                    a2 instanceof Promise ? l3(t4, a2, n3, o4) : t4.startsWith("--") ? f3(t4, a2, n3, o4) : c3.push({ property: t4, value: a2, important: n3, sourceValue: o4 });
                  } else
                    c3.push({ property: t4, value: r4, important: n3, sourceValue: o4 });
                });
              });
              var V2 = p2();
              !function e3(t3, r3, n3) {
                t3.rules.forEach(function(t4) {
                  t4.isGroup ? e3(t4, function(e4, t5) {
                    var r4 = e4.rule;
                    if (r4 instanceof CSSMediaRule) {
                      var n4 = r4.media, o3 = t5.cssRules.length;
                      return t5.insertRule("@media " + n4.mediaText + " {}", o3), t5.cssRules[o3];
                    }
                    return t5;
                  }(t4, r3), n3) : n3(t4, r3);
                });
              }(x2, V2, function(e3, t3) {
                var r3 = t3.cssRules.length;
                e3.declarations.forEach(function(n3) {
                  var o3 = n3.asyncKey, a2 = n3.varKey;
                  null != o3 && k2.set(o3, { rule: e3, target: t3, index: r3 }), null != a2 && S2.set(a2, { rule: e3, target: t3, index: r3 });
                }), R2(t3, r3, e3);
              });
            }
            function R2(e3, t3, r3) {
              var n3 = r3.selector + " { " + r3.declarations.map(function(e4) {
                var t4 = e4.property, r4 = e4.value, n4 = e4.important, o3 = e4.sourceValue;
                return t4 + ": " + (null == r4 ? o3 : r4) + (n4 ? " !important" : "") + ";";
              }).join(" ") + " }";
              e3.insertRule(n3, t3);
            }
            function M2(e3) {
              if (null == e3)
                return x2;
              if (C2.has(e3))
                return C2.get(e3);
              var t3 = { rule: e3, rules: [], isGroup: true };
              return C2.set(e3, t3), M2(e3.parentRule).rules.push(t3), t3;
            }
          }, shouldRebuildStyle: function() {
            return u2 && !s2;
          } };
        }
        function pr(e2) {
          return (e2 instanceof HTMLStyleElement || e2 instanceof SVGStyleElement || e2 instanceof HTMLLinkElement && e2.rel && e2.rel.toLowerCase().includes("stylesheet") && !e2.disabled) && !e2.classList.contains("darkreader") && "print" !== e2.media.toLowerCase() && !e2.classList.contains("stylus");
        }
        function vr(e2, t2, r2) {
          return void 0 === t2 && (t2 = []), void 0 === r2 && (r2 = true), pr(e2) ? t2.push(e2) : (e2 instanceof Element || m && e2 instanceof ShadowRoot || e2 === document) && (j(e2.querySelectorAll('style, link[rel*="stylesheet" i]:not([disabled])'), function(e3) {
            return vr(e3, t2, false);
          }), r2 && I(e2, function(e3) {
            return vr(e3.shadowRoot, t2, false);
          })), t2;
        }
        var mr = /* @__PURE__ */ new WeakSet(), gr = /* @__PURE__ */ new WeakSet(), br = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          br = true;
        });
        var yr = 0, wr = /* @__PURE__ */ new Map();
        function kr(e2, t2) {
          for (var o2 = t2.update, i2 = t2.loadingStart, u2 = t2.loadingEnd, s2 = [], d2 = e2; (d2 = d2.nextElementSibling) && d2.matches(".darkreader"); )
            s2.push(d2);
          var h2 = s2.find(function(e3) {
            return e3.matches(".darkreader--cors") && !gr.has(e3);
          }) || null, p2 = s2.find(function(e3) {
            return e3.matches(".darkreader--sync") && !mr.has(e3);
          }) || null, v2 = null, m2 = null, g2 = false, b2 = true, y2 = hr(), w2 = new MutationObserver(function() {
            o2();
          }), k2 = { attributes: true, childList: true, subtree: true, characterData: true };
          function S2() {
            return e2 instanceof HTMLStyleElement && e2.textContent.trim().match(le);
          }
          function _2() {
            return h2 ? h2.sheet.cssRules : S2() ? null : A2();
          }
          function E2() {
            h2 ? (e2.nextSibling !== h2 && e2.parentNode.insertBefore(h2, e2.nextSibling), h2.nextSibling !== p2 && e2.parentNode.insertBefore(p2, h2.nextSibling)) : e2.nextSibling !== p2 && e2.parentNode.insertBefore(p2, e2.nextSibling);
          }
          var x2 = false, C2 = false, V2 = ++yr;
          function R2() {
            return r(this, void 0, void 0, function() {
              var t3, r2, o3, i3, u3, s3, c2;
              return n(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    if (!(e2 instanceof HTMLLinkElement))
                      return [3, 7];
                    if (o3 = a(T2(), 2), i3 = o3[0], (u3 = o3[1]) && F(u3), !(!i3 && !u3 && !f || f && !e2.sheet || (l2 = u3, l2 && l2.message && l2.message.includes("loading"))))
                      return [3, 5];
                    n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 4]), D("Linkelement " + V2 + " is not loaded yet and thus will be await for", e2), [4, Sr(e2, V2)];
                  case 2:
                    return n2.sent(), [3, 4];
                  case 3:
                    return F(n2.sent()), C2 = true, [3, 4];
                  case 4:
                    if (g2)
                      return [2, null];
                    c2 = a(T2(), 2), i3 = c2[0], (u3 = c2[1]) && F(u3), n2.label = 5;
                  case 5:
                    return null != i3 ? [2, i3] : [4, _r(e2.href)];
                  case 6:
                    return t3 = n2.sent(), r2 = fe(e2.href), g2 ? [2, null] : [3, 8];
                  case 7:
                    if (!S2())
                      return [2, null];
                    t3 = e2.textContent.trim(), r2 = fe(location.href), n2.label = 8;
                  case 8:
                    if (!t3)
                      return [3, 13];
                    n2.label = 9;
                  case 9:
                    return n2.trys.push([9, 11, , 12]), [4, Er(t3, r2)];
                  case 10:
                    return s3 = n2.sent(), h2 = function(e3, t4) {
                      if (!t4)
                        return null;
                      var r3 = document.createElement("style");
                      return r3.classList.add("darkreader"), r3.classList.add("darkreader--cors"), r3.media = "screen", r3.textContent = t4, e3.parentNode.insertBefore(r3, e3.nextSibling), r3.sheet.disabled = true, gr.add(r3), r3;
                    }(e2, s3), [3, 12];
                  case 11:
                    return F(n2.sent()), [3, 12];
                  case 12:
                    if (h2)
                      return v2 = W(h2, "prev-sibling"), [2, h2.sheet.cssRules];
                    n2.label = 13;
                  case 13:
                    return [2, null];
                }
                var l2;
              });
            });
          }
          var M2 = false;
          function T2() {
            try {
              return null == e2.sheet ? [null, null] : [e2.sheet.cssRules, null];
            } catch (e3) {
              return [null, e3];
            }
          }
          function A2() {
            var e3 = a(T2(), 2), t3 = e3[0], r2 = e3[1];
            return r2 ? (F(r2), null) : t3;
          }
          function L2() {
            e2.addEventListener("__darkreader__updateSheet", I2), l || br && e2.sheet || function() {
              P2 = O2(), q2();
              var t3 = function() {
                O2() !== P2 && (P2 = O2(), o2()), br && e2.sheet ? q2() : j2 = requestAnimationFrame(t3);
              };
              t3();
            }();
          }
          var P2 = null, j2 = null;
          function O2() {
            var e3 = A2();
            return e3 ? e3.length : null;
          }
          function q2() {
            cancelAnimationFrame(j2);
          }
          var N2 = false;
          function I2() {
            function e3() {
              N2 = false, g2 || o2();
            }
            br = true, q2(), N2 || (N2 = true, "function" == typeof queueMicrotask ? queueMicrotask(e3) : requestAnimationFrame(e3));
          }
          function U2() {
            e2.removeEventListener("__darkreader__updateSheet", I2), q2();
          }
          function $13() {
            w2.disconnect(), g2 = true, v2 && v2.stop(), m2 && m2.stop(), U2();
          }
          var z2 = 0;
          return { details: function() {
            var e3 = _2();
            return e3 ? { rules: e3 } : (x2 || C2 || (x2 = true, i2(), R2().then(function(e4) {
              x2 = false, u2(), e4 && o2();
            }).catch(function(e4) {
              F(e4), x2 = false, u2();
            })), null);
          }, render: function(t3, r2) {
            var n2 = _2();
            function a2() {
              p2 || ((p2 = e2 instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), p2.classList.add("darkreader--sync"), p2.media = "screen", !c && e2.title && (p2.title = e2.title), mr.add(p2)), m2 && m2.stop(), E2(), null == p2.sheet && (p2.textContent = "");
              for (var t4 = p2.sheet, r3 = t4.cssRules.length - 1; r3 >= 0; r3--)
                t4.deleteRule(r3);
              return m2 ? m2.run() : m2 = W(p2, "prev-sibling", function() {
                M2 = true, i3();
              }), p2.sheet;
            }
            function i3() {
              var e3 = M2;
              M2 = false, y2.modifySheet({ prepareSheet: a2, sourceCSSRules: n2, theme: t3, ignoreImageAnalysis: r2, force: e3, isAsyncCancelled: function() {
                return g2;
              } }), b2 = 0 === p2.sheet.cssRules.length, y2.shouldRebuildStyle() && K(function() {
                return o2();
              });
            }
            n2 && (g2 = false, i3());
          }, pause: $13, destroy: function() {
            if ($13(), B(h2), B(p2), u2(), wr.has(V2)) {
              var e3 = wr.get(V2);
              wr.delete(V2), e3 && e3();
            }
          }, watch: function() {
            w2.observe(e2, k2), e2 instanceof HTMLStyleElement && L2();
          }, restore: function() {
            p2 && (++z2 > 10 ? F("Style sheet was moved multiple times", e2) : (F("Restore style", p2, e2), E2(), v2 && v2.skip(), m2 && m2.skip(), b2 || (M2 = true, o2())));
          } };
        }
        function Sr(e2, t2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(r2) {
              return [2, new Promise(function(r3, n2) {
                var o2 = function() {
                  e2.removeEventListener("load", a2), e2.removeEventListener("error", i2), wr.delete(t2);
                }, a2 = function() {
                  o2(), D("Linkelement " + t2 + " has been loaded"), r3();
                }, i2 = function() {
                  o2(), n2("Linkelement " + t2 + " couldn't be loaded. " + e2.href);
                };
                wr.set(t2, function() {
                  o2(), n2();
                }), e2.addEventListener("load", a2), e2.addEventListener("error", i2), e2.href || i2();
              })];
            });
          });
        }
        function _r(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return e2.startsWith("data:") ? [4, fetch(e2)] : [3, 3];
                case 1:
                  return [4, t2.sent().text()];
                case 2:
                  return [2, t2.sent()];
                case 3:
                  return [4, ct({ url: e2, responseType: "text", mimeType: "text/css", origin: window.location.origin })];
                case 4:
                  return [2, t2.sent()];
              }
            });
          });
        }
        function Er(e2, t2, a2) {
          return void 0 === a2 && (a2 = /* @__PURE__ */ new Map()), r(this, void 0, void 0, function() {
            var r2, i2, u2, s2, c2, l2, d2, f2, h2, p2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  e2 = function(e3, t3) {
                    return e3.replace(ce, function(e4) {
                      var r3 = de(e4);
                      return 'url("' + oe(t3, r3) + '")';
                    });
                  }(e2 = function(e3) {
                    return e3.replace(pe, "");
                  }(e2 = e2.replace(he, "")), t2), r2 = Oe(le, e2), n2.label = 1;
                case 1:
                  n2.trys.push([1, 10, 11, 12]), i2 = o(r2), u2 = i2.next(), n2.label = 2;
                case 2:
                  return u2.done ? [3, 9] : (s2 = u2.value, c2 = de(s2.substring(8).replace(/;$/, "")), l2 = oe(t2, c2), d2 = void 0, a2.has(l2) ? (d2 = a2.get(l2), [3, 7]) : [3, 3]);
                case 3:
                  return n2.trys.push([3, 6, , 7]), [4, _r(l2)];
                case 4:
                  return d2 = n2.sent(), a2.set(l2, d2), [4, Er(d2, fe(l2), a2)];
                case 5:
                  return d2 = n2.sent(), [3, 7];
                case 6:
                  return F(n2.sent()), d2 = "", [3, 7];
                case 7:
                  e2 = e2.split(s2).join(d2), n2.label = 8;
                case 8:
                  return u2 = i2.next(), [3, 2];
                case 9:
                  return [3, 12];
                case 10:
                  return f2 = n2.sent(), h2 = { error: f2 }, [3, 12];
                case 11:
                  try {
                    u2 && !u2.done && (p2 = i2.return) && p2.call(i2);
                  } finally {
                    if (h2)
                      throw h2.error;
                  }
                  return [7];
                case 12:
                  return [2, e2 = e2.trim()];
              }
            });
          });
        }
        var xr, Cr, Vr = [], Rr = /* @__PURE__ */ new Map();
        function Mr(e2) {
          b && j(e2.querySelectorAll(":not(:defined)"), function(e3) {
            var t2 = e3.tagName.toLowerCase();
            Rr.has(t2) || (Rr.set(t2, /* @__PURE__ */ new Set()), function(e4) {
              return r(this, void 0, void 0, function() {
                return n(this, function(t3) {
                  return [2, new Promise(function(t4) {
                    if (window.customElements && "function" == typeof customElements.whenDefined)
                      customElements.whenDefined(e4).then(t4);
                    else if (Tr)
                      Ar.set(e4, t4), document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver", { detail: { tag: e4 } }));
                    else {
                      var r2 = function() {
                        var n2 = Rr.get(e4);
                        n2 && n2.size > 0 && (n2.values().next().value.matches(":defined") ? t4() : requestAnimationFrame(r2));
                      };
                      requestAnimationFrame(r2);
                    }
                  })];
                });
              });
            }(t2).then(function() {
              if (Cr) {
                var e4 = Rr.get(t2);
                Rr.delete(t2), Cr(Array.from(e4));
              }
            })), Rr.get(t2).add(e3);
          });
        }
        var Tr = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          Tr = true;
        });
        var Ar = /* @__PURE__ */ new Map();
        function Lr(e2) {
          (Tr = true, Ar.has(e2.detail.tag)) && Ar.get(e2.detail.tag)();
        }
        function Pr(e2, t2, r2) {
          jr();
          var n2 = new Set(e2), o2 = /* @__PURE__ */ new WeakMap(), a2 = /* @__PURE__ */ new WeakMap();
          function i2(e3) {
            o2.set(e3, e3.previousElementSibling), a2.set(e3, e3.nextElementSibling);
          }
          function u2(e3) {
            var r3 = e3.createdStyles, u3 = e3.removedStyles, s3 = e3.movedStyles;
            r3.forEach(function(e4) {
              return i2(e4);
            }), s3.forEach(function(e4) {
              return i2(e4);
            }), u3.forEach(function(e4) {
              return t3 = e4, o2.delete(t3), void a2.delete(t3);
              var t3;
            }), r3.forEach(function(e4) {
              return n2.add(e4);
            }), u3.forEach(function(e4) {
              return n2.delete(e4);
            }), r3.size + u3.size + s3.size > 0 && t2({ created: Array.from(r3), removed: Array.from(u3), moved: Array.from(s3), updated: [] });
          }
          function s2(e3) {
            var t3 = e3.additions, r3 = e3.moves, n3 = e3.deletions, o3 = /* @__PURE__ */ new Set(), a3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set();
            t3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return o3.add(e5);
              });
            }), n3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return a3.add(e5);
              });
            }), r3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return i3.add(e5);
              });
            }), u2({ createdStyles: o3, removedStyles: a3, movedStyles: i3 }), t3.forEach(function(e4) {
              I(e4, f2), Mr(e4);
            });
          }
          function c2(e3) {
            var t3 = new Set(vr(e3)), r3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set(), s3 = /* @__PURE__ */ new Set();
            t3.forEach(function(e4) {
              n2.has(e4) || r3.add(e4);
            }), n2.forEach(function(e4) {
              t3.has(e4) || i3.add(e4);
            }), t3.forEach(function(e4) {
              var t4;
              r3.has(e4) || i3.has(e4) || (t4 = e4).previousElementSibling === o2.get(t4) && t4.nextElementSibling === a2.get(t4) || s3.add(e4);
            }), u2({ createdStyles: r3, removedStyles: i3, movedStyles: s3 }), I(e3, f2), Mr(e3);
          }
          function l2(e3) {
            var r3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set();
            e3.forEach(function(e4) {
              var t3 = e4.target;
              t3.isConnected && (pr(t3) ? r3.add(t3) : t3 instanceof HTMLLinkElement && t3.disabled && n3.add(t3));
            }), r3.size + n3.size > 0 && t2({ updated: Array.from(r3), created: [], removed: Array.from(n3), moved: [] });
          }
          function d2(e3) {
            var t3 = ee(e3, { onMinorMutations: s2, onHugeMutations: c2 }), r3 = new MutationObserver(l2);
            r3.observe(e3, { attributes: true, attributeFilter: ["rel", "disabled", "media"], subtree: true }), Vr.push(t3, r3), xr.add(e3);
          }
          function f2(e3) {
            var t3 = e3.shadowRoot;
            null == t3 || xr.has(t3) || (d2(t3), r2(t3));
          }
          e2.forEach(i2), d2(document), I(document.documentElement, f2), Cr = function(e3) {
            var r3 = [];
            e3.forEach(function(e4) {
              return O(r3, vr(e4.shadowRoot));
            }), t2({ created: r3, updated: [], removed: [], moved: [] }), e3.forEach(function(e4) {
              var t3 = e4.shadowRoot;
              null != t3 && (f2(e4), I(t3, f2), Mr(t3));
            });
          }, document.addEventListener("__darkreader__isDefined", Lr), Mr(document);
        }
        function jr() {
          Vr.forEach(function(e2) {
            return e2.disconnect();
          }), Vr.splice(0, Vr.length), xr = /* @__PURE__ */ new WeakSet(), Cr = null, Rr.clear(), document.removeEventListener("__darkreader__isDefined", Lr);
        }
        var Or = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakSet();
        function Fr(e2) {
          var t2 = false;
          return { render: function(r2, n2) {
            e2.adoptedStyleSheets.forEach(function(o2) {
              if (!Dr.has(o2)) {
                var u2 = o2.rules, s2 = new CSSStyleSheet();
                hr().modifySheet({ prepareSheet: function() {
                  for (var t3 = s2.cssRules.length - 1; t3 >= 0; t3--)
                    s2.deleteRule(t3);
                  return function(t4, r3) {
                    var n3 = i([], a(e2.adoptedStyleSheets)), o3 = n3.indexOf(t4), u3 = n3.indexOf(r3);
                    o3 !== u3 - 1 && (u3 >= 0 && n3.splice(u3, 1), n3.splice(o3 + 1, 0, r3), e2.adoptedStyleSheets = n3);
                  }(o2, s2), Or.set(o2, s2), Dr.add(s2), s2;
                }, sourceCSSRules: u2, theme: r2, ignoreImageAnalysis: n2, force: false, isAsyncCancelled: function() {
                  return t2;
                } });
              }
            });
          }, destroy: function() {
            t2 = true;
            var r2 = i([], a(e2.adoptedStyleSheets));
            e2.adoptedStyleSheets.forEach(function(e3) {
              if (Dr.has(e3)) {
                var t3 = r2.indexOf(e3);
                t3 >= 0 && r2.splice(t3, 1), Or.delete(e3), Dr.delete(e3);
              }
            }), e2.adoptedStyleSheets = r2;
          } };
        }
        function qr() {
          document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
          var e2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule"), t2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule"), r2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule"), n2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule"), o2 = location.hostname.endsWith("pushbullet.com") || location.hostname.endsWith("ilsole24ore.com") || location.hostname.endsWith("allegro.pl"), u2 = o2 ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null, s2 = function() {
            Object.defineProperty(CSSStyleSheet.prototype, "addRule", e2), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", t2), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", r2), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", n2), document.removeEventListener("__darkreader__cleanUp", s2), document.removeEventListener("__darkreader__addUndefinedResolver", c2), o2 && Object.defineProperty(Document.prototype, "styleSheets", u2);
          }, c2 = function(e3) {
            customElements.whenDefined(e3.detail.tag).then(function() {
              document.dispatchEvent(new CustomEvent("__darkreader__isDefined", { detail: { tag: e3.detail.tag } }));
            });
          };
          document.addEventListener("__darkreader__cleanUp", s2), document.addEventListener("__darkreader__addUndefinedResolver", c2);
          var l2 = new Event("__darkreader__updateSheet");
          Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, e2, { value: function(t3, r3, n3) {
            return e2.value.call(this, t3, r3, n3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), -1;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, t2, { value: function(e3, r3) {
            var n3 = t2.value.call(this, e3, r3);
            return this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), n3;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, r2, { value: function(e3) {
            r2.value.call(this, e3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, n2, { value: function(e3) {
            n2.value.call(this, e3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), o2 && Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, u2, { get: function() {
            var e3 = i([], a(u2.get.call(this))).filter(function(e4) {
              return !e4.ownerNode.classList.contains("darkreader");
            });
            return Object.setPrototypeOf(e3, StyleSheetList.prototype);
          } }));
        }
        var Nr = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function(e2) {
          return ((t2 = e2) < 16 ? "0" : "") + t2.toString(16);
          var t2;
        }).join(""), Br = /* @__PURE__ */ new Map(), Wr = [], Ir = null, Ur = null, $r = null, zr = null, Hr = null;
        function Gr(e2, t2) {
          void 0 === t2 && (t2 = document.head || document);
          var r2 = t2.querySelector("." + e2);
          return r2 || ((r2 = document.createElement("style")).classList.add("darkreader"), r2.classList.add(e2), r2.media = "screen", r2.textContent = ""), r2;
        }
        var Qr = /* @__PURE__ */ new Map();
        function Kr(e2, t2) {
          Qr.has(t2) && Qr.get(t2).stop(), Qr.set(t2, W(e2, "parent"));
        }
        function Jr() {
          var e2 = Gr("darkreader--fallback", document);
          e2.textContent = kt(Ir, { strict: true }), document.head.insertBefore(e2, document.head.firstChild), Kr(e2, "fallback");
          var r2 = Gr("darkreader--user-agent");
          r2.textContent = yt(Ir, $r, Ir.styleSystemControls), document.head.insertBefore(r2, e2.nextSibling), Kr(r2, "user-agent");
          var n2, o2, a2 = Gr("darkreader--text");
          Ir.useFont || Ir.textStroke > 0 ? a2.textContent = (n2 = Ir, (o2 = []).push('*:not(pre, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'), n2.useFont && n2.fontFamily && o2.push("  font-family: " + n2.fontFamily + " !important;"), n2.textStroke > 0 && (o2.push("  -webkit-text-stroke: " + n2.textStroke + "px !important;"), o2.push("  text-stroke: " + n2.textStroke + "px !important;")), o2.push("}"), o2.join("\n")) : a2.textContent = "", document.head.insertBefore(a2, e2.nextSibling), Kr(a2, "text");
          var i2 = Gr("darkreader--invert");
          Ur && Array.isArray(Ur.invert) && Ur.invert.length > 0 ? i2.textContent = [Ur.invert.join(", ") + " {", "    filter: " + at(t(t({}, Ir), { contrast: 0 === Ir.mode ? Ir.contrast : Pe(Ir.contrast - 10, 0, 100) })) + " !important;", "}"].join("\n") : i2.textContent = "", document.head.insertBefore(i2, a2.nextSibling), Kr(i2, "invert");
          var u2 = Gr("darkreader--inline");
          u2.textContent = Yt(), document.head.insertBefore(u2, i2.nextSibling), Kr(u2, "inline");
          var s2 = Gr("darkreader--override");
          s2.textContent = Ur && Ur.css ? Zr(Ur.css) : "", document.head.appendChild(s2), Kr(s2, "override");
          var c2 = Gr("darkreader--variables"), l2 = wt(Ir), d2 = Ir.darkSchemeBackgroundColor, f2 = Ir.darkSchemeTextColor, h2 = Ir.lightSchemeBackgroundColor, p2 = Ir.lightSchemeTextColor, v2 = Ir.mode, m2 = 0 === v2 ? h2 : d2, g2 = 0 === v2 ? p2 : f2;
          m2 = Je(Se(m2), Ir), g2 = tt(Se(g2), Ir), c2.textContent = [":root {", "   --darkreader-neutral-background: " + m2 + ";", "   --darkreader-neutral-text: " + g2 + ";", "   --darkreader-selection-background: " + l2.backgroundColorSelection + ";", "   --darkreader-selection-text: " + l2.foregroundColorSelection + ";", "}"].join("\n"), document.head.insertBefore(c2, u2.nextSibling), Kr(c2, "variables");
          var b2 = Gr("darkreader--root-vars");
          document.head.insertBefore(b2, c2.nextSibling);
          var y2 = function(e3, t2) {
            void 0 === t2 && (t2 = document.head || document);
            var r3 = t2.querySelector("." + e3);
            return r3 || ((r3 = document.createElement("script")).classList.add("darkreader"), r3.classList.add(e3)), r3;
          }("darkreader--proxy");
          y2.textContent = "(" + qr + ")()", document.head.insertBefore(y2, b2.nextSibling);
        }
        var Xr = /* @__PURE__ */ new Set();
        function Yr(e2) {
          var t2 = Gr("darkreader--inline", e2);
          t2.textContent = Yt(), e2.insertBefore(t2, e2.firstChild);
          var r2 = Gr("darkreader--override", e2);
          r2.textContent = Ur && Ur.css ? Zr(Ur.css) : "", e2.insertBefore(r2, t2.nextSibling), Xr.add(e2);
        }
        function Zr(e2) {
          return e2.replace(/\${(.+?)}/g, function(e3, t2) {
            try {
              var r2 = Et(t2);
              return ze(r2, Ir, He);
            } catch (e4) {
              return F(e4), t2;
            }
          });
        }
        function en() {
          var e2 = document.querySelector(".darkreader--fallback");
          e2 && (e2.textContent = "");
        }
        var tn = 0, rn = /* @__PURE__ */ new Set();
        function nn(e2) {
          var t2 = ++tn;
          D("New manager for element, with loadingStyleID " + t2, e2);
          var r2 = kr(e2, { update: function() {
            var e3 = r2.details();
            e3 && (At.addRulesForMatching(e3.rules), At.matchVariablesAndDependants(), r2.render(Ir, zr));
          }, loadingStart: function() {
            if (!U() || !ln) {
              rn.add(t2), D("Current amount of styles loading: " + rn.size);
              var e3 = document.querySelector(".darkreader--fallback");
              e3.textContent || (e3.textContent = kt(Ir, { strict: false }));
            }
          }, loadingEnd: function() {
            rn.delete(t2), D("Removed loadingStyle " + t2 + ", now awaiting: " + rn.size), D("To-do to be loaded", rn), 0 === rn.size && U() && en();
          } });
          return Br.set(e2, r2), r2;
        }
        function on(e2) {
          var t2 = Br.get(e2);
          t2 && (t2.destroy(), Br.delete(e2));
        }
        var an = q(function(e2) {
          Br.forEach(function(e3) {
            return e3.render(Ir, zr);
          }), Wr.forEach(function(e3) {
            return e3.render(Ir, zr);
          }), e2 && e2();
        }), un = function() {
          an.cancel();
        };
        function sn() {
          0 !== rn.size ? F("DOM is ready, but still have styles being loaded.", rn) : en();
        }
        var cn = null, ln = !document.hidden;
        function dn() {
          document.removeEventListener("visibilitychange", cn), cn = null;
        }
        function fn() {
          function e2() {
            var e3, t3;
            !function() {
              un();
              var e4 = vr(document).filter(function(e5) {
                return !Br.has(e5);
              }).map(function(e5) {
                return nn(e5);
              });
              e4.map(function(e5) {
                return e5.details();
              }).filter(function(e5) {
                return e5 && e5.rules.length > 0;
              }).forEach(function(e5) {
                At.addRulesForMatching(e5.rules);
              }), At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir), Br.forEach(function(e5) {
                return e5.render(Ir, zr);
              }), 0 === rn.size && en(), e4.forEach(function(e5) {
                return e5.watch();
              });
              var t4 = function(e5) {
                for (var t5 = [], r3 = 0, n3 = e5.length; r3 < n3; r3++)
                  t5.push(e5[r3]);
                return t5;
              }(document.querySelectorAll(Xt));
              I(document.documentElement, function(e5) {
                Yr(e5.shadowRoot);
                var r3 = e5.shadowRoot.querySelectorAll(Xt);
                r3.length > 0 && O(t4, r3);
              }), t4.forEach(function(e5) {
                return ar(e5, Ir, Hr, zr);
              }), hn(document);
            }(), Pr(Array.from(Br.keys()), function(e4) {
              var t4 = e4.created, r3 = e4.updated, n3 = e4.removed, o3 = e4.moved, a2 = n3, i2 = t4.concat(r3).concat(o3).filter(function(e5) {
                return !Br.has(e5);
              }), u2 = o3.filter(function(e5) {
                return Br.has(e5);
              });
              D("Styles to be removed:", a2), a2.forEach(function(e5) {
                return on(e5);
              });
              var s2 = i2.map(function(e5) {
                return nn(e5);
              });
              s2.map(function(e5) {
                return e5.details();
              }).filter(function(e5) {
                return e5 && e5.rules.length > 0;
              }).forEach(function(e5) {
                At.addRulesForMatching(e5.rules);
              }), At.matchVariablesAndDependants(), s2.forEach(function(e5) {
                return e5.render(Ir, zr);
              }), s2.forEach(function(e5) {
                return e5.watch();
              }), u2.forEach(function(e5) {
                return Br.get(e5).restore();
              });
            }, function(e4) {
              Yr(e4), hn(e4);
            }), e3 = function(e4) {
              ar(e4, Ir, Hr, zr), e4 === document.documentElement && e4.getAttribute("style").includes("--") && (At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir));
            }, t3 = function(e4) {
              Yr(e4);
              var t4 = e4.querySelectorAll(Xt);
              t4.length > 0 && j(t4, function(e5) {
                return ar(e5, Ir, Hr, zr);
              });
            }, tr(document, e3, t3), I(document.documentElement, function(r3) {
              tr(r3.shadowRoot, e3, t3);
            }), z(sn);
          }
          var t2, r2, n2, o2;
          Jr(), document.hidden ? (t2 = e2, r2 = Boolean(cn), cn = function() {
            document.hidden || (dn(), t2(), ln = true);
          }, r2 || document.addEventListener("visibilitychange", cn)) : e2(), n2 = Ir, (o2 = document.querySelector(ur)) ? lr(o2, n2) : (cr && cr.disconnect(), (cr = new MutationObserver(function(e3) {
            e:
              for (var t3 = 0; t3 < e3.length; t3++)
                for (var r3 = e3[t3].addedNodes, o3 = 0; o3 < r3.length; o3++) {
                  var a2 = r3[o3];
                  if (a2 instanceof HTMLMetaElement && a2.name === ir) {
                    cr.disconnect(), cr = null, lr(a2, n2);
                    break e;
                  }
                }
          })).observe(document.head, { childList: true }));
        }
        function hn(e2) {
          if (Array.isArray(e2.adoptedStyleSheets) && e2.adoptedStyleSheets.length > 0) {
            var t2 = Fr(e2);
            Wr.push(t2), t2.render(Ir, zr);
          }
        }
        function pn() {
          Br.forEach(function(e2) {
            return e2.pause();
          }), j(Qr.values(), function(e2) {
            return e2.stop();
          }), Qr.clear(), jr(), Zt.forEach(function(e2) {
            return e2.disconnect();
          }), er.forEach(function(e2) {
            return e2.disconnect();
          }), Zt.clear(), er.clear(), H(sn), Q.clear();
        }
        function vn() {
          var e2, t2 = document.querySelector('meta[name="darkreader"]');
          return t2 ? t2.content !== Nr : ((e2 = document.createElement("meta")).name = "darkreader", e2.content = Nr, document.head.appendChild(e2), false);
        }
        function mn(e2, t2, r2) {
          if (Ir = e2, (Ur = t2) ? (zr = Array.isArray(Ur.ignoreImageAnalysis) ? Ur.ignoreImageAnalysis : [], Hr = Array.isArray(Ur.ignoreInlineStyle) ? Ur.ignoreInlineStyle : []) : (zr = [], Hr = []), $r = r2, document.head) {
            if (vn())
              return;
            document.documentElement.setAttribute("data-darkreader-mode", "dynamic"), document.documentElement.setAttribute("data-darkreader-scheme", Ir.mode ? "dark" : "dimmed"), fn();
          } else {
            if (!d) {
              var n2 = Gr("darkreader--fallback");
              document.documentElement.appendChild(n2), n2.textContent = kt(Ir, { strict: true });
            }
            var o2 = new MutationObserver(function() {
              if (document.head) {
                if (o2.disconnect(), vn())
                  return void gn();
                fn();
              }
            });
            o2.observe(document, { childList: true, subtree: true });
          }
        }
        function gn() {
          document.documentElement.removeAttribute("data-darkreader-mode"), document.documentElement.removeAttribute("data-darkreader-scheme"), At.clear(), te.clear(), dn(), un(), pn(), Tt(), B(document.querySelector(".darkreader--fallback")), document.head && (!function() {
            cr && (cr.disconnect(), cr = null);
            var e2 = document.querySelector(ur);
            e2 && sr && (e2.content = sr);
          }(), B(document.head.querySelector(".darkreader--user-agent")), B(document.head.querySelector(".darkreader--text")), B(document.head.querySelector(".darkreader--invert")), B(document.head.querySelector(".darkreader--inline")), B(document.head.querySelector(".darkreader--override")), B(document.head.querySelector(".darkreader--variables")), B(document.head.querySelector(".darkreader--root-vars")), B(document.head.querySelector('meta[name="darkreader"]')), document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")), B(document.head.querySelector(".darkreader--proxy"))), Xr.forEach(function(e2) {
            B(e2.querySelector(".darkreader--inline")), B(e2.querySelector(".darkreader--override"));
          }), Xr.clear(), j(Br.keys(), function(e2) {
            return on(e2);
          }), rn.clear(), wr.clear(), j(document.querySelectorAll(".darkreader"), B), Wr.forEach(function(e2) {
            e2.destroy();
          }), Wr.splice(0);
        }
        var bn = /url\(\"(blob\:.*?)\"\)/g;
        function yn(e2) {
          return r(this, void 0, void 0, function() {
            var t2, r2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return t2 = [], Oe(bn, e2, 1).forEach(function(e3) {
                    var r3 = w(e3);
                    t2.push(r3);
                  }), [4, Promise.all(t2)];
                case 1:
                  return r2 = n2.sent(), [2, e2.replace(bn, function() {
                    return 'url("' + r2.shift() + '")';
                  })];
              }
            });
          });
        }
        function wn() {
          return r(this, void 0, void 0, function() {
            function e2(e3, r3) {
              var n2 = document.querySelector(e3);
              n2 && n2.textContent && (t2.push("/* " + r3 + " */"), t2.push(n2.textContent), t2.push(""));
            }
            var t2, r2, o2, a2, i2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return t2 = ['/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/'], e2(".darkreader--fallback", "Fallback Style"), e2(".darkreader--user-agent", "User-Agent Style"), e2(".darkreader--text", "Text Style"), e2(".darkreader--invert", "Invert Style"), e2(".darkreader--variables", "Variables Style"), r2 = [], document.querySelectorAll(".darkreader--sync").forEach(function(e3) {
                    j(e3.sheet.cssRules, function(e4) {
                      e4 && e4.cssText && r2.push(e4.cssText);
                    });
                  }), r2.length ? (o2 = function(e3) {
                    function t3(e4) {
                      return e4.replace(/^\s+/, "");
                    }
                    function r3(e4) {
                      return 0 === e4 ? "" : " ".repeat(4 * e4);
                    }
                    for (var n3 = /[^{}]+{\s*}/g; n3.test(e3); )
                      e3 = e3.replace(n3, "");
                    for (var o3 = e3.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n"), a3 = 0, i3 = [], u2 = 0, s2 = o3.length; u2 < s2; u2++) {
                      var c2 = o3[u2] + "\n";
                      c2.match(/\{/) ? i3.push(r3(a3++) + t3(c2)) : c2.match(/\}/) ? i3.push(r3(--a3) + t3(c2)) : i3.push(r3(a3) + t3(c2));
                    }
                    return i3.join("").trim();
                  }(r2.join("\n")), t2.push("/* Modified CSS */"), i2 = (a2 = t2).push, [4, yn(o2)]) : [3, 2];
                case 1:
                  i2.apply(a2, [n2.sent()]), t2.push(""), n2.label = 2;
                case 2:
                  return e2(".darkreader--override", "Override Style"), [2, t2.join("\n")];
              }
            });
          });
        }
        var kn = false, Sn = function() {
          try {
            return window.self !== window.top;
          } catch (e2) {
            return console.warn(e2), true;
          }
        }();
        function _n(e2, r2) {
          void 0 === e2 && (e2 = {}), void 0 === r2 && (r2 = null);
          var n2 = t(t({}, P), e2);
          if (n2.engine !== T)
            throw new Error("Theme engine is not supported.");
          mn(n2, r2, Sn), kn = true;
        }
        function En() {
          gn(), kn = false;
        }
        var xn = matchMedia("(prefers-color-scheme: dark)"), Cn = { themeOptions: null, fixes: null };
        function Vn() {
          xn.matches ? _n(Cn.themeOptions, Cn.fixes) : En();
        }
        var Rn = function(e2) {
          _ = e2 || S;
        };
        e.auto = function(e2, t2) {
          void 0 === e2 && (e2 = {}), void 0 === t2 && (t2 = null), e2 ? (Cn = { themeOptions: e2, fixes: t2 }, Vn(), g ? xn.addEventListener("change", Vn) : xn.addListener(Vn)) : (g ? xn.removeEventListener("change", Vn) : xn.removeListener(Vn), En());
        }, e.disable = En, e.enable = _n, e.exportGeneratedCSS = function() {
          return r(this, void 0, void 0, function() {
            return n(this, function(e2) {
              switch (e2.label) {
                case 0:
                  return [4, wn()];
                case 1:
                  return [2, e2.sent()];
              }
            });
          });
        }, e.isEnabled = function() {
          return kn;
        }, e.setFetchMethod = Rn, Object.defineProperty(e, "__esModule", { value: true });
      });
    }
  });

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\libs\md5-es.min.js
  var require_md5_es_min = __commonJS({
    "ns-hugo:C:\\Users\\congp\\Desktop\\hugo-blog\\themes\\virgo\\assets\\js\\libs\\md5-es.min.js"(exports, module) {
      !function(e, r) {
        "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports["md5-es"] = r() : e["md5-es"] = r();
      }(exports, function() {
        return function(e) {
          function r(t) {
            if (n[t])
              return n[t].exports;
            var f = n[t] = { i: t, l: false, exports: {} };
            return e[t].call(f.exports, f, f.exports, r), f.l = true, f.exports;
          }
          var n = {};
          return r.m = e, r.c = n, r.i = function(e2) {
            return e2;
          }, r.d = function(e2, n2, t) {
            r.o(e2, n2) || Object.defineProperty(e2, n2, { configurable: false, enumerable: true, get: t });
          }, r.n = function(e2) {
            var n2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return r.d(n2, "a", n2), n2;
          }, r.o = function(e2, r2) {
            return Object.prototype.hasOwnProperty.call(e2, r2);
          }, r.p = "", r(r.s = 1);
        }([function(e, r, n) {
          "use strict";
          function t(e2, r2) {
            if (!(e2 instanceof r2))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(r, "__esModule", { value: true });
          var f = function() {
            function e2(e3, r2) {
              for (var n2 = 0; n2 < r2.length; n2++) {
                var t2 = r2[n2];
                t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e3, t2.key, t2);
              }
            }
            return function(r2, n2, t2) {
              return n2 && e2(r2.prototype, n2), t2 && e2(r2, t2), r2;
            };
          }(), i = function() {
            function e2() {
              t(this, e2);
            }
            return f(e2, null, [{ key: "hash", value: function(r2) {
              return e2.hex(e2.md51(r2));
            } }, { key: "md5cycle", value: function(r2, n2) {
              var t2 = r2[0], f2 = r2[1], i2 = r2[2], u = r2[3];
              t2 = e2.ff(t2, f2, i2, u, n2[0], 7, -680876936), u = e2.ff(u, t2, f2, i2, n2[1], 12, -389564586), i2 = e2.ff(i2, u, t2, f2, n2[2], 17, 606105819), f2 = e2.ff(f2, i2, u, t2, n2[3], 22, -1044525330), t2 = e2.ff(t2, f2, i2, u, n2[4], 7, -176418897), u = e2.ff(u, t2, f2, i2, n2[5], 12, 1200080426), i2 = e2.ff(i2, u, t2, f2, n2[6], 17, -1473231341), f2 = e2.ff(f2, i2, u, t2, n2[7], 22, -45705983), t2 = e2.ff(t2, f2, i2, u, n2[8], 7, 1770035416), u = e2.ff(u, t2, f2, i2, n2[9], 12, -1958414417), i2 = e2.ff(i2, u, t2, f2, n2[10], 17, -42063), f2 = e2.ff(f2, i2, u, t2, n2[11], 22, -1990404162), t2 = e2.ff(t2, f2, i2, u, n2[12], 7, 1804603682), u = e2.ff(u, t2, f2, i2, n2[13], 12, -40341101), i2 = e2.ff(i2, u, t2, f2, n2[14], 17, -1502002290), f2 = e2.ff(f2, i2, u, t2, n2[15], 22, 1236535329), t2 = e2.gg(t2, f2, i2, u, n2[1], 5, -165796510), u = e2.gg(u, t2, f2, i2, n2[6], 9, -1069501632), i2 = e2.gg(i2, u, t2, f2, n2[11], 14, 643717713), f2 = e2.gg(f2, i2, u, t2, n2[0], 20, -373897302), t2 = e2.gg(t2, f2, i2, u, n2[5], 5, -701558691), u = e2.gg(u, t2, f2, i2, n2[10], 9, 38016083), i2 = e2.gg(i2, u, t2, f2, n2[15], 14, -660478335), f2 = e2.gg(f2, i2, u, t2, n2[4], 20, -405537848), t2 = e2.gg(t2, f2, i2, u, n2[9], 5, 568446438), u = e2.gg(u, t2, f2, i2, n2[14], 9, -1019803690), i2 = e2.gg(i2, u, t2, f2, n2[3], 14, -187363961), f2 = e2.gg(f2, i2, u, t2, n2[8], 20, 1163531501), t2 = e2.gg(t2, f2, i2, u, n2[13], 5, -1444681467), u = e2.gg(u, t2, f2, i2, n2[2], 9, -51403784), i2 = e2.gg(i2, u, t2, f2, n2[7], 14, 1735328473), f2 = e2.gg(f2, i2, u, t2, n2[12], 20, -1926607734), t2 = e2.hh(t2, f2, i2, u, n2[5], 4, -378558), u = e2.hh(u, t2, f2, i2, n2[8], 11, -2022574463), i2 = e2.hh(i2, u, t2, f2, n2[11], 16, 1839030562), f2 = e2.hh(f2, i2, u, t2, n2[14], 23, -35309556), t2 = e2.hh(t2, f2, i2, u, n2[1], 4, -1530992060), u = e2.hh(u, t2, f2, i2, n2[4], 11, 1272893353), i2 = e2.hh(i2, u, t2, f2, n2[7], 16, -155497632), f2 = e2.hh(f2, i2, u, t2, n2[10], 23, -1094730640), t2 = e2.hh(t2, f2, i2, u, n2[13], 4, 681279174), u = e2.hh(u, t2, f2, i2, n2[0], 11, -358537222), i2 = e2.hh(i2, u, t2, f2, n2[3], 16, -722521979), f2 = e2.hh(f2, i2, u, t2, n2[6], 23, 76029189), t2 = e2.hh(t2, f2, i2, u, n2[9], 4, -640364487), u = e2.hh(u, t2, f2, i2, n2[12], 11, -421815835), i2 = e2.hh(i2, u, t2, f2, n2[15], 16, 530742520), f2 = e2.hh(f2, i2, u, t2, n2[2], 23, -995338651), t2 = e2.ii(t2, f2, i2, u, n2[0], 6, -198630844), u = e2.ii(u, t2, f2, i2, n2[7], 10, 1126891415), i2 = e2.ii(i2, u, t2, f2, n2[14], 15, -1416354905), f2 = e2.ii(f2, i2, u, t2, n2[5], 21, -57434055), t2 = e2.ii(t2, f2, i2, u, n2[12], 6, 1700485571), u = e2.ii(u, t2, f2, i2, n2[3], 10, -1894986606), i2 = e2.ii(i2, u, t2, f2, n2[10], 15, -1051523), f2 = e2.ii(f2, i2, u, t2, n2[1], 21, -2054922799), t2 = e2.ii(t2, f2, i2, u, n2[8], 6, 1873313359), u = e2.ii(u, t2, f2, i2, n2[15], 10, -30611744), i2 = e2.ii(i2, u, t2, f2, n2[6], 15, -1560198380), f2 = e2.ii(f2, i2, u, t2, n2[13], 21, 1309151649), t2 = e2.ii(t2, f2, i2, u, n2[4], 6, -145523070), u = e2.ii(u, t2, f2, i2, n2[11], 10, -1120210379), i2 = e2.ii(i2, u, t2, f2, n2[2], 15, 718787259), f2 = e2.ii(f2, i2, u, t2, n2[9], 21, -343485551), r2[0] = t2 + r2[0] & 4294967295, r2[1] = f2 + r2[1] & 4294967295, r2[2] = i2 + r2[2] & 4294967295, r2[3] = u + r2[3] & 4294967295;
            } }, { key: "cmn", value: function(e3, r2, n2, t2, f2, i2) {
              return ((r2 = (r2 + e3 & 4294967295) + (t2 + i2 & 4294967295) & 4294967295) << f2 | r2 >>> 32 - f2) + n2 & 4294967295;
            } }, { key: "ff", value: function(r2, n2, t2, f2, i2, u, o) {
              return e2.cmn(n2 & t2 | ~n2 & f2, r2, n2, i2, u, o);
            } }, { key: "gg", value: function(r2, n2, t2, f2, i2, u, o) {
              return e2.cmn(n2 & f2 | t2 & ~f2, r2, n2, i2, u, o);
            } }, { key: "hh", value: function(r2, n2, t2, f2, i2, u, o) {
              return e2.cmn(n2 ^ t2 ^ f2, r2, n2, i2, u, o);
            } }, { key: "ii", value: function(r2, n2, t2, f2, i2, u, o) {
              return e2.cmn(t2 ^ (n2 | ~f2), r2, n2, i2, u, o);
            } }, { key: "md51", value: function(r2) {
              var n2 = r2.length, t2 = [1732584193, -271733879, -1732584194, 271733878], f2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i2 = 0, u = 64;
              for (u; u <= n2; u += 64)
                e2.md5cycle(t2, e2.md5blk(r2.substring(u - 64, u)));
              for (r2 = r2.substring(u - 64), u = 0, i2 = r2.length, u; u < i2; u++)
                f2[u >> 2] |= r2.charCodeAt(u) << (u % 4 << 3);
              if (f2[u >> 2] |= 128 << (u % 4 << 3), u > 55)
                for (e2.md5cycle(t2, f2), u = 0; u < 16; u++)
                  f2[u] = 0;
              return f2[14] = 8 * n2, e2.md5cycle(t2, f2), t2;
            } }, { key: "md5blk", value: function(e3) {
              var r2 = [], n2 = 0;
              for (n2; n2 < 64; n2 += 4)
                r2[n2 >> 2] = e3.charCodeAt(n2) + (e3.charCodeAt(n2 + 1) << 8) + (e3.charCodeAt(n2 + 2) << 16) + (e3.charCodeAt(n2 + 3) << 24);
              return r2;
            } }, { key: "rhex", value: function(r2) {
              var n2 = "";
              return n2 += e2.hexArray[r2 >> 4 & 15] + e2.hexArray[r2 >> 0 & 15], n2 += e2.hexArray[r2 >> 12 & 15] + e2.hexArray[r2 >> 8 & 15], n2 += e2.hexArray[r2 >> 20 & 15] + e2.hexArray[r2 >> 16 & 15], n2 += e2.hexArray[r2 >> 28 & 15] + e2.hexArray[r2 >> 24 & 15];
            } }, { key: "hex", value: function(r2) {
              var n2 = r2.length, t2 = 0;
              for (t2; t2 < n2; t2++)
                r2[t2] = e2.rhex(r2[t2]);
              return r2.join("");
            } }]), e2;
          }();
          i.hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], r.default = i;
        }, function(e, r, n) {
          e.exports = n(0);
        }]);
      });
    }
  });

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\greet.js
  function greet() {
    let year = new Date().getFullYear();
    console.log(
      `---------------------
		
	Hello Jack \u{1F60E}, ${year} !

		---------------------`
    );
    document.querySelector("#info-date").innerHTML = year;
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\eventBinding.js
  var import_jquery6 = __toESM(require_jquery_min());
  var import_lodash = __toESM(require_lodash_min());

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\colorToc.js
  var import_jquery2 = __toESM(require_jquery_min());

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\initToc.js
  var import_jquery = __toESM(require_jquery_min());
  function initToc() {
    (0, import_jquery.default)("h2, h3").addClass("headline");
    (0, import_jquery.default)("#TableOfContents a").each(function() {
      let _id = "id-" + (0, import_jquery.default)(this).attr("href").split("#")[1];
      (0, import_jquery.default)(this).attr("id", _id);
      (0, import_jquery.default)(this).addClass("toc-link");
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\colorToc.js
  function colorToc() {
    initToc();
    let _curScroll = (0, import_jquery2.default)(this).scrollTop() + 48;
    let _curHeadline;
    let _arrTop = [];
    (0, import_jquery2.default)(".headline").each(function() {
      let _curHeadlineTop = (0, import_jquery2.default)(this).offset().top;
      _arrTop.push(_curHeadlineTop);
      if (_curHeadlineTop - 1 < _curScroll)
        _curHeadline = (0, import_jquery2.default)(this);
      if (_curScroll >= _arrTop[0]) {
        let _id = "id-" + _curHeadline.attr("id");
        (0, import_jquery2.default)(".toc-link").removeClass("toc-link--active");
        (0, import_jquery2.default)("#" + _id).addClass("toc-link--active");
      }
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\toggleToc.js
  var import_jquery3 = __toESM(require_jquery_min());
  function toggleToc(e) {
    e.stopPropagation();
    let toc = (0, import_jquery3.default)(".toc"), po = (0, import_jquery3.default)(".toc .page-operation");
    let _right = toc.css("right");
    if (_right === "-300px") {
      toc.css({ right: "16px" });
      po.css({ right: "24px" });
      (0, import_jquery3.default)("body").click(toggleToc);
    } else {
      toc.css({ right: "-300px" });
      po.css({ right: "-300px" });
      (0, import_jquery3.default)("body").unbind("click");
    }
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\toggleColor.js
  var import_darkreader = __toESM(require_darkreader_min());
  var import_jquery4 = __toESM(require_jquery_min());
  var sun = `<svg t="1657283336399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="16" height="16"><path d="M512 288c-123.488 0-224 100.512-224 224 0 123.488 100.512 224 224 224s224-100.512 224-224C736 388.512 635.488 288 512 288zM512 672c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 672 512 672zM512 224c17.664 0 32-14.336 32-32L544 128c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 64C480 209.664 494.336 224 512 224zM512 800c-17.664 0-32 14.336-32 32l0 64c0 17.664 14.336 32 32 32s32-14.336 32-32l0-64C544 814.336 529.664 800 512 800zM760.864 308.32l45.248-45.248c12.512-12.512 12.512-32.736 0-45.248-12.512-12.512-32.736-12.512-45.248 0l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248C728.128 320.832 748.384 320.832 760.864 308.32zM263.136 715.68l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248s32.736 12.512 45.248 0l45.248-45.248c12.512-12.544 12.512-32.768 0-45.248C295.872 703.168 275.616 703.136 263.136 715.68zM224 512c0-17.664-14.336-32-32-32L128 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0C209.664 544 224 529.664 224 512zM896 480l-64 0c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0c17.664 0 32-14.336 32-32S913.664 480 896 480zM263.072 308.32c12.512 12.512 32.768 12.512 45.248 0 12.512-12.512 12.512-32.736 0-45.248l-45.248-45.248c-12.512-12.512-32.736-12.512-45.248 0-12.512 12.512-12.512 32.736 0 45.248L263.072 308.32zM760.928 715.616c-12.544-12.512-32.768-12.512-45.248 0-12.512 12.512-12.544 32.736 0 45.248l45.248 45.248c12.512 12.512 32.736 12.512 45.248 0s12.512-32.736 0-45.248L760.928 715.616z" p-id="2284" fill="#8a8a8a"></path></svg>`;
  var moon = `<svg t="1695286075420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3452" width="16" height="16"><path d="M427.989333 181.12A395.84 395.84 0 0 0 426.666667 213.333333c0 211.754667 172.245333 384 384 384 10.816 0 21.557333-0.437333 32.213333-1.322666C805.344 743.733333 671.232 853.333333 512 853.333333c-188.213333 0-341.333333-153.12-341.333333-341.333333 0-159.232 109.6-293.344 257.322666-330.88M512 85.333333C276.362667 85.333333 85.333333 276.362667 85.333333 512c0 235.648 191.029333 426.666667 426.666667 426.666667 235.648 0 426.666667-191.018667 426.666667-426.666667 0-9.525333-0.426667-18.933333-1.045334-28.309333A297.418667 297.418667 0 0 1 810.666667 512c-164.949333 0-298.666667-133.717333-298.666667-298.666667 0-45.408 10.186667-88.426667 28.309333-126.954666A424.672 424.672 0 0 0 512 85.333333z" p-id="3453" fill="#8a8a8a"></path></svg>`;
  moon = `<svg t="1695287541521" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6596" width="16" height="16"><path d="M512 938.666667a426.666667 426.666667 0 0 1 0-853.333334 42.666667 42.666667 0 0 1 42.666667 42.666667 341.333333 341.333333 0 0 0 341.333333 341.333333 42.666667 42.666667 0 0 1 42.666667 42.666667 426.666667 426.666667 0 0 1-426.666667 426.666667z m-40.106667-765.44a341.333333 341.333333 0 1 0 378.88 378.88 426.666667 426.666667 0 0 1-378.88-378.88z" fill="#8a8a8a" p-id="6597"></path></svg>`;
  var initColor = {
    brightness: 100,
    contrast: 90,
    sepia: 10
  };
  if (DARK && getDarkOfLocalStorage() !== "off") {
    setDarkOfLocalStorage("on");
  }
  if (getDarkOfLocalStorage() === "on") {
    (0, import_darkreader.enable)(initColor);
    (0, import_jquery4.default)("#light-dark a").html(sun);
  } else if (getDarkOfLocalStorage() === "off") {
    (0, import_darkreader.disable)();
  }
  function toggleColor() {
    let _isEnabled = (0, import_darkreader.isEnabled)();
    if (_isEnabled) {
      (0, import_darkreader.disable)();
      setDarkOfLocalStorage("off");
      (0, import_jquery4.default)("#light-dark a").html(moon);
    } else {
      (0, import_darkreader.enable)(initColor);
      setDarkOfLocalStorage("on");
      (0, import_jquery4.default)("#light-dark a").html(sun);
    }
  }
  function getDarkOfLocalStorage() {
    return localStorage.getItem("dark");
  }
  function setDarkOfLocalStorage(flag) {
    localStorage.setItem("dark", flag);
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\viewImage.js
  var import_jquery5 = __toESM(require_jquery_min());
  function viewImage(e) {
    if (location.pathname === "/")
      return;
    let curImgSrc = e.target.attributes.src.value;
    curImgSrc = encodeURI(curImgSrc);
    console.log(curImgSrc);
    document.body.style = "overflow: hidden;";
    (0, import_jquery5.default)("body").prepend(
      `
		<div 
			id="mask" 
			style="
				position: fixed; 
				background: rgba(255, 255, 255, .96); 
				backdrop-filter: blur(5px);
				left: 0; top: 0; 
				width: 100%; height: 100%; 
				overflow-y:auto; 
				overflow-x: hidden; 
				z-index: 2000; 
				"
			>
			<div 
				id="wrapper_img"
				style="
					width:90%; 
					height: 80%;
					margin: 32px auto; 
					overflow: auto;
				"
				>
				<img 
					id="img"
					src=${curImgSrc} 
					style="
						max-width: none;
						display: block; 
						box-sizing: border-box; 
						margin: 0 auto; 
						padding: 8px; 
						" 
					onclick="document.getElementById('img').width += DELTA;"
					ondblclick="document.body.removeChild(document.getElementById('mask')); document.body.style='';"
				/>
			</div>
			<div
				style="
					position: absolute;
					bottom: 6%;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					background: #F1F2F6;
					width: 200px;
					padding:8px 6px 4px 6px;
					justify-content: space-around;
					border-radius: 24px;
				"
				>

				<div onclick="document.getElementById('img').width -= DELTA"><svg t="1667354608074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2903" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2904" fill="#1296db"></path><path d="M597.333333 437.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2905" fill="#1296db"></path></svg></div>
				<div style="width: 24px;" onclick="document.getElementById('img').width = _width"><svg t="1667356342781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19270" width="22" height="22"><path d="M192 720v96h160v64H128v-160h64z m704 0v160h-224v-64h160v-96h64z m0-576v160h-64v-96h-160v-64h224z m-544 0v64H192v96H128v-160h224z" p-id="19271" fill="#1296db"></path></svg></div>	
				<div style="width: 24px;" onclick="document.getElementById('img').width += DELTA"><svg t="1667354518760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2555" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2556" fill="#1296db"></path><path d="M597.333333 437.333333h-96V341.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V597.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H597.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2557" fill="#1296db"></path></svg></div>
				<div onclick="document.body.removeChild(document.getElementById('mask')); document.body.style=''"><svg t="1667354913254" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4876" width="24" height="24"><path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="4877" fill="#e69"></path></svg></div>
			</div>
			<script>
				var DELTA = 200;

				var _wiWidth = document.getElementById('img').offsetWidth;
				var _screenWidth = document.getElementById('mask').offsetWidth;
				console.log(_wiWidth)
				console.log(_screenWidth)
				var _width = 0;
				if (_wiWidth > 2052) {
					_width = _wiWidth / 3;
				} else if (_wiWidth > 1026) {
					_width = _wiWidth / 2;
				} else {
					_width = _wiWidth;
				}
				_width = _screenWidth > 1026 ? _width : _screenWidth * 0.9;
				// \u8BFB\u53D6 http \u56FE\u7247\u7684\u65F6\u5019\uFF0C\u5176\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A 18 \uFF0C\u597D\u5947\u602A
				console.log(_width);
				if (_width < 30) { _width = 618 }
				document.getElementById('img').width = _width;
			<\/script>
		</div>
		`
    );
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\ship.js
  var config = {
    engine: "by"
  };
  var scClear = document.querySelector("#ship-clear");
  var scInput = document.querySelector("#ship-input");
  var scVal = "";
  var eby = document.querySelector("#by");
  var ebd = document.querySelector("#bd");
  var ego = document.querySelector("#go");
  var cur;
  var defaultId = "#" + config.engine;
  var urlRegexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
  init();
  function init() {
    scInput && scInput.focus();
    scClear && (scClear.style = "opacity: 0;");
    let curId = localStorage.getItem("curId");
    cur = curId ? document.querySelector(curId) : document.querySelector(defaultId);
    cur && (cur.className = "activated");
  }
  function search(e) {
    if (e && e.keyCode !== 13)
      return;
    if (urlRegexp.test(scVal)) {
      scVal = scVal.indexOf("http") === 0 ? scVal : "https://" + scVal;
      window.open(scVal);
      clearVal();
      return;
    }
    let _eg;
    if (cur.id === "by") {
      _eg = "https://cn.bing.com/search?q=";
    } else if (cur.id === "bd") {
      _eg = "https://baidu.com/s?wd=";
    } else if (cur.id === "go") {
      _eg = "https://google.com/search?q=";
    }
    window.open(_eg + scVal);
  }
  function select(e) {
    let _id = "#" + e.target.id;
    if (_id === "#engine")
      return;
    cur = document.querySelector(_id);
    localStorage.setItem("curId", _id);
    eby.className = "";
    ebd.className = "";
    ego.className = "";
    cur.className = "activated";
    if (scVal)
      search();
  }
  function clearVal() {
    if (!scInput.value)
      return;
    scInput.value = "";
    reactive();
  }
  function reactive() {
    scVal = scInput.value.trim();
    scClear.style = scVal ? "opacity: 1" : "opacity: 0";
    scInput.focus();
  }
  var ship_default = {
    init,
    select,
    search,
    clearVal,
    reactive
  };

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\isMobile.js
  function browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase(), bIsIpad = sUserAgent.match(/ipad/i) == "ipad", bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os", bIsMidp = sUserAgent.match(/midp/i) == "midp", bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4", bIsUc = sUserAgent.match(/ucweb/i) == "ucweb", bIsAndroid = sUserAgent.match(/android/i) == "android", bIsCE = sUserAgent.match(/windows ce/i) == "windows ce", bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return true;
    }
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\utils\search.js
  var IS_MOBILE = browserRedirect();
  var data = document.querySelector("#data") && document.querySelector("#data").innerText.trim();
  data = data && data.slice(0, data.length - 2) + "]";
  data = data && data.replace(/\]\s+\[/g, "");
  var map = JSON.parse(data);
  var scClear2 = document.querySelector("#sc-clear");
  var scInput2 = document.querySelector("#sc-input");
  var scRes = document.querySelector("#sc-res");
  var scVal2 = "";
  scClear2 && (scClear2.style = "opacity: 0;");
  function search2(e) {
    if (!IS_MOBILE && e && e.keyCode !== 13)
      return;
    console.log("search....");
    let post = "";
    scVal2 = scInput2.value.trim().toLowerCase();
    let scResPostsCounts = 0, scResScValCounts = 0;
    map.forEach((item) => {
      if (!scVal2)
        return;
      if (item.content.indexOf(scVal2) > -1 || item.title.indexOf(scVal2) > -1) {
        let _arrIndex = scanStr(item.content, scVal2);
        let strRes = "";
        let _radius = 100;
        let _strStyle0 = '<span style="background: #ffff0099;">';
        let _strStyle1 = "</span>";
        let _strSeparator = "<hr>";
        scResPostsCounts += 1;
        scResScValCounts += _arrIndex.length;
        let _count = 0;
        for (let i = 0, len = _arrIndex.length; i < len; i++) {
          let _idxItem = _arrIndex[i];
          let _relidx = i;
          if (_relidx > 0 && _arrIndex[_relidx] - _arrIndex[_relidx - 1 - _count] < _radius) {
            _count += 1;
            continue;
          }
          _count = 0;
          strRes += _strSeparator;
          let _startIdx = _idxItem - _radius + (_relidx + 1) * _strSeparator.length;
          let _endIdx = _idxItem + _radius + (_relidx + 1) * _strSeparator.length;
          strRes += item.content.substring(_startIdx, _endIdx);
        }
        let _arrStrRes = scanStr(strRes, scVal2);
        for (let i = 0, len = _arrStrRes.length; i < len; i++) {
          let _idxItem = _arrStrRes[i];
          let _realidx = i;
          strRes = strRes.slice(0, _idxItem + _realidx * (_strStyle0.length + _strStyle1.length)) + _strStyle0 + scVal2 + _strStyle1 + strRes.slice(_idxItem + scVal2.length + _realidx * (_strStyle0.length + _strStyle1.length));
        }
        post += `
                <div class="item" >
                    <a href="${item.permalink}">
                        <span>${item.title}</span>
                    </a>
                    <div class="summary">${strRes}</div>
                </div>
            `;
      }
    });
    let _total = "\u6761\u76EE", _times = "\u6B21\u6570";
    let res = `
        <div class="statistics">${_total}\uFF1A ${scResPostsCounts} &nbsp;&nbsp;${_times}\uFF1A ${scResScValCounts}</div>
        <div class="list">
            ${post}
        </div>
    `;
    scRes.innerHTML = res;
    if (scResPostsCounts == 0) {
      document.querySelector(".statistics").remove();
    }
    scClear2.style = scVal2 ? "opacity: 1" : "opacity: 0";
  }
  function scanStr(content, str) {
    let index = content.indexOf(str);
    let num = 0;
    let arrIndex = [];
    while (index !== -1) {
      arrIndex.push(index);
      num += 1;
      index = content.indexOf(str, index + 1);
    }
    return arrIndex;
  }
  function clearInputVal() {
    if (!scInput2.value)
      return;
    scInput2.value = "";
    search2();
  }
  var search_default = { search: search2, clearInputVal };

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\eventBinding.js
  function initEventBinding() {
    (0, import_jquery6.default)(window).bind("scroll", (0, import_lodash.throttle)(colorToc, 500));
    (0, import_jquery6.default)("#toc").bind("click", toggleToc);
    (0, import_jquery6.default)("#light-dark").bind("click", toggleColor);
    (0, import_jquery6.default)(".content img").bind("click", viewImage);
    (0, import_jquery6.default)("#engine").bind("click", ship_default.select);
    (0, import_jquery6.default)("#ship-clear").bind("click", ship_default.clearVal);
    (0, import_jquery6.default)("#ship-input").bind("input", ship_default.reactive).bind("keypress", ship_default.search);
    (0, import_jquery6.default)("#sc-clear").bind("click", search_default.clearInputVal);
    (0, import_jquery6.default)("#sc-input").bind("keypress blur", search_default.search);
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\initImage.js
  var import_jquery7 = __toESM(require_jquery_min());
  function initImage() {
    (0, import_jquery7.default)("img").each((idx, item) => {
      let src = (0, import_jquery7.default)(item).attr("src");
      if (!src.startsWith("http") && !src.startsWith("/")) {
        (0, import_jquery7.default)(item).attr("src", "/" + src);
      }
      let _alt = (0, import_jquery7.default)(item).attr("alt") || "";
      if (_alt.indexOf("|") > -1) {
        (0, import_jquery7.default)(item).attr("width", _alt.split("|")[1]);
      }
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\initCodeBlock.js
  var import_jquery8 = __toESM(require_jquery_min());
  function initCodeBlock() {
    const _arr = (0, import_jquery8.default)("pre code");
    _arr.each(function(idx) {
      let _lang = (0, import_jquery8.default)(this).attr("data-lang");
      if (!_lang)
        return;
      (0, import_jquery8.default)(this).parents(".highlight").before(`<div class="lang">${_lang}</div>`);
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\enhanceOrgMode.js
  var import_jquery9 = __toESM(require_jquery_min());
  function enhanceOrgMode_default() {
    (0, import_jquery9.default)(".html-block p").each((idx, item) => {
      item.innerHTML = `${item.innerText}`;
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\enhanceMarkdown.js
  var import_jquery10 = __toESM(require_jquery_min());
  function enhanceMarkdown_default() {
    (0, import_jquery10.default)("em").each((idx, item) => {
      let _innerText = item.innerHTML;
      if (_innerText.indexOf("_") === 0) {
        item.outerHTML = `<u>${_innerText.slice(1)}</u>`;
      } else if (_innerText.indexOf("=") === 0) {
        item.outerHTML = `<span class="oh-hl">${_innerText.slice(1)}</span>`;
      }
    });
    (0, import_jquery10.default)("blockquote p").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("::") === 0) {
        item.parentNode.setAttribute("class", "oh-essay");
        item.outerHTML = `<div>${_innerHtml.slice(2)}</div>`;
      }
    });
    (0, import_jquery10.default)("code").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("&gt; ") === 0 || _innerHtml.indexOf("> ") === 0) {
        item.setAttribute("class", "oh-tag");
      }
    });
    (0, import_jquery10.default)(".content, .list").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("[[") > -1) {
        let _re = /!\[\[(([\/\-\.\*\$\&\:]|\w|\s|[^\x00-\xff])*\.\w+)\s*\|?\s*(\d*)\]\]/g;
        let _str = _innerHtml.replace(_re, '<img src="$1" alt="$1" width="$3" />');
        let _reLink = /\[\[(([\/\-\.\*\$\:\#]|\w|\s|[^\x00-\xff])*)\|?(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*)\]\]/g;
        let _strLink = _str.replace(_reLink, (val) => {
          val = val.replace(/[\[\]]/g, "");
          let _arr = val.split(/\s*\|\s*/);
          let _relLink = _arr[0];
          let _desc = _arr[1] ? _arr[1] : _arr[0];
          let _idx = _desc.indexOf("#");
          if (_idx > -1) {
            if (_idx == 0) {
              _relLink = location.pathname.slice(1) + _desc;
            } else {
              _relLink = _desc.replace("#", "/#");
              _relLink = _relLink.replace(/[\.\、]/g, "");
            }
          }
          return `<a href="/${_relLink.replace(/\s/g, "-").toLowerCase()}">${_desc}</a>`;
        });
        item.innerHTML = _strLink;
      }
    });
  }

  // ns-hugo:C:\Users\congp\Desktop\hugo-blog\themes\virgo\assets\js\init\runMisc.js
  var import_jquery11 = __toESM(require_jquery_min());
  var import_md5_es = __toESM(require_md5_es_min());
  function getMD5Color(str, len = 6) {
    return "#" + import_md5_es.default.hash(str).slice(0, len);
  }
  function runMisc_default() {
    let freqNavLinkEle = `<div class="freq"></div>`;
    (0, import_jquery11.default)(".content-nav").prepend(freqNavLinkEle);
    (0, import_jquery11.default)(".content-nav table td").each((idx, item) => {
      if (!item.innerHTML) {
        item.innerHTML = `<a style='border: 1px dashed #3333;'><span style='opacity: 0;'>.</span></a>`;
      } else {
        if (item.innerText.startsWith(">")) {
          (0, import_jquery11.default)(item).addClass("frequtent");
          let _text = item.innerText.slice(1).trim();
          item.children[0].innerText = _text;
          let _aClone = (0, import_jquery11.default)(item.children[0]).clone();
          (0, import_jquery11.default)(item).empty().append(_aClone);
          let _color = getMD5Color(_text) + "66";
          let _ele = (0, import_jquery11.default)(item.children[0]).clone().append(`<div class="color-ball" style="background: ${_color};"></div>`);
          item.children[0].style = `border-left: 5px solid ${_color};`;
          (0, import_jquery11.default)(".freq").append(_ele);
        }
      }
    });
    (0, import_jquery11.default)(".rel a, .toc a").each((idx, item) => item.target = "_self");
  }

  // <stdin>
  greet();
  enhanceOrgMode_default();
  initCodeBlock();
  enhanceMarkdown_default();
  initImage();
  initEventBinding();
  runMisc_default();
})();
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
