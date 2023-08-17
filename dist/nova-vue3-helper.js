import { computed as A, ref as B, watch as ve, onBeforeMount as pn, onBeforeUnmount as Xe, toRefs as Ye, inject as bt, onMounted as dr } from "vue";
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var vn = hn;
function yn(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var l = i[e ? o : ++a];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var mn = yn, bn = mn, gn = bn(), pr = gn;
function $n(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var _n = $n, En = typeof se == "object" && se && se.Object === Object && se, hr = En, An = hr, wn = typeof self == "object" && self && self.Object === Object && self, Sn = An || wn || Function("return this")(), I = Sn, Tn = I, On = Tn.Symbol, ye = On, gt = ye, vr = Object.prototype, Pn = vr.hasOwnProperty, Cn = vr.toString, X = gt ? gt.toStringTag : void 0;
function xn(e) {
  var t = Pn.call(e, X), r = e[X];
  try {
    e[X] = void 0;
    var n = !0;
  } catch {
  }
  var a = Cn.call(e);
  return n && (t ? e[X] = r : delete e[X]), a;
}
var Rn = xn, Fn = Object.prototype, In = Fn.toString;
function Nn(e) {
  return In.call(e);
}
var Ln = Nn, $t = ye, Dn = Rn, Mn = Ln, Bn = "[object Null]", jn = "[object Undefined]", _t = $t ? $t.toStringTag : void 0;
function Un(e) {
  return e == null ? e === void 0 ? jn : Bn : _t && _t in Object(e) ? Dn(e) : Mn(e);
}
var ee = Un;
function Hn(e) {
  return e != null && typeof e == "object";
}
var te = Hn, Kn = ee, qn = te, Gn = "[object Arguments]";
function zn(e) {
  return qn(e) && Kn(e) == Gn;
}
var kn = zn, Et = kn, Vn = te, yr = Object.prototype, Wn = yr.hasOwnProperty, Jn = yr.propertyIsEnumerable, Xn = Et(function() {
  return arguments;
}()) ? Et : function(e) {
  return Vn(e) && Wn.call(e, "callee") && !Jn.call(e, "callee");
}, Ze = Xn, Yn = Array.isArray, N = Yn, fe = { exports: {} };
function Zn() {
  return !1;
}
var Qn = Zn;
fe.exports;
(function(e, t) {
  var r = I, n = Qn, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, u = l || n;
  e.exports = u;
})(fe, fe.exports);
var Qe = fe.exports, ea = 9007199254740991, ta = /^(?:0|[1-9]\d*)$/;
function ra(e, t) {
  var r = typeof e;
  return t = t ?? ea, !!t && (r == "number" || r != "symbol" && ta.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var et = ra, na = 9007199254740991;
function aa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= na;
}
var tt = aa, sa = ee, ia = tt, oa = te, ua = "[object Arguments]", ca = "[object Array]", la = "[object Boolean]", fa = "[object Date]", da = "[object Error]", pa = "[object Function]", ha = "[object Map]", va = "[object Number]", ya = "[object Object]", ma = "[object RegExp]", ba = "[object Set]", ga = "[object String]", $a = "[object WeakMap]", _a = "[object ArrayBuffer]", Ea = "[object DataView]", Aa = "[object Float32Array]", wa = "[object Float64Array]", Sa = "[object Int8Array]", Ta = "[object Int16Array]", Oa = "[object Int32Array]", Pa = "[object Uint8Array]", Ca = "[object Uint8ClampedArray]", xa = "[object Uint16Array]", Ra = "[object Uint32Array]", E = {};
E[Aa] = E[wa] = E[Sa] = E[Ta] = E[Oa] = E[Pa] = E[Ca] = E[xa] = E[Ra] = !0;
E[ua] = E[ca] = E[_a] = E[la] = E[Ea] = E[fa] = E[da] = E[pa] = E[ha] = E[va] = E[ya] = E[ma] = E[ba] = E[ga] = E[$a] = !1;
function Fa(e) {
  return oa(e) && ia(e.length) && !!E[sa(e)];
}
var Ia = Fa;
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var La = Na, de = { exports: {} };
de.exports;
(function(e, t) {
  var r = hr, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(de, de.exports);
var Da = de.exports, Ma = Ia, Ba = La, At = Da, wt = At && At.isTypedArray, ja = wt ? Ba(wt) : Ma, rt = ja, Ua = _n, Ha = Ze, Ka = N, qa = Qe, Ga = et, za = rt, ka = Object.prototype, Va = ka.hasOwnProperty;
function Wa(e, t) {
  var r = Ka(e), n = !r && Ha(e), a = !r && !n && qa(e), s = !r && !n && !a && za(e), i = r || n || a || s, o = i ? Ua(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Va.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ga(u, l))) && o.push(u);
  return o;
}
var mr = Wa, Ja = Object.prototype;
function Xa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ja;
  return e === r;
}
var nt = Xa;
function Ya(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var br = Ya, Za = br, Qa = Za(Object.keys, Object), es = Qa, ts = nt, rs = es, ns = Object.prototype, as = ns.hasOwnProperty;
function ss(e) {
  if (!ts(e))
    return rs(e);
  var t = [];
  for (var r in Object(e))
    as.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var gr = ss;
function is(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var H = is, os = ee, us = H, cs = "[object AsyncFunction]", ls = "[object Function]", fs = "[object GeneratorFunction]", ds = "[object Proxy]";
function ps(e) {
  if (!us(e))
    return !1;
  var t = os(e);
  return t == ls || t == fs || t == cs || t == ds;
}
var $r = ps, hs = $r, vs = tt;
function ys(e) {
  return e != null && vs(e.length) && !hs(e);
}
var me = ys, ms = mr, bs = gr, gs = me;
function $s(e) {
  return gs(e) ? ms(e) : bs(e);
}
var at = $s, _s = pr, Es = at;
function As(e, t) {
  return e && _s(e, t, Es);
}
var ws = As, Ss = me;
function Ts(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ss(r))
      return e(r, n);
    for (var a = r.length, s = t ? a : -1, i = Object(r); (t ? s-- : ++s < a) && n(i[s], s, i) !== !1; )
      ;
    return r;
  };
}
var Os = Ts, Ps = ws, Cs = Os, xs = Cs(Ps), Rs = xs;
function Fs(e) {
  return e;
}
var st = Fs;
const Is = /* @__PURE__ */ U(st);
var Ns = st;
function Ls(e) {
  return typeof e == "function" ? e : Ns;
}
var _r = Ls, Ds = vn, Ms = Rs, Bs = _r, js = N;
function Us(e, t) {
  var r = js(e) ? Ds : Ms;
  return r(e, Bs(t));
}
var Hs = Us;
const Ks = /* @__PURE__ */ U(Hs);
function gv() {
  return {
    __: (t, r = {}) => {
      let n = Nova.config("translations")[t] ? Nova.config("translations")[t] : t;
      return Ks(r, (a, s) => {
        if (a === null) {
          console.error(
            `Translation '${n}' for key '${s}' contains a null replacement.`
          );
          return;
        }
        const i = [
          ":" + s,
          ":" + s.toUpperCase(),
          ":" + s.charAt(0).toUpperCase() + s.slice(1)
        ], o = [
          a,
          a.toUpperCase(),
          a.charAt(0).toUpperCase() + a.slice(1)
        ];
        for (let l = i.length - 1; l >= 0; l--)
          n = n.replace(i[l], o[l]);
      }), n;
    }
  };
}
function Er(e, t) {
  return { fieldLabel: A(() => t && t.value === "" ? t.value : t?.value || e.value.name || e.value.attribute) };
}
function it(e, t, r, n = null) {
  const a = A(() => e.value.attribute), s = A(() => r(e.value)), i = B(s.value), { emitFieldValueChange: o } = Ys(
    a,
    t
  );
  ve(
    () => i.value,
    (u, f) => {
      n && u !== f && o(n(u));
    }
  );
  const { emitValueChange: l } = Zs(
    a,
    t,
    (u) => {
      i.value = u;
    }
  );
  return {
    value: i,
    initialValue: s,
    emitValueChange: l
  };
}
function qs(e) {
  return e == null;
}
var Gs = qs;
const Z = /* @__PURE__ */ U(Gs);
function zs(e, t, r) {
  const n = A(() => !Z(t?.value) && t?.value !== ""), a = A(() => !Z(t?.value) && t?.value !== "" ? !Z(r?.value) && r?.value !== "" ? "update-attached" : "attach" : !Z(e?.value) && e?.value !== "" ? "update" : "create");
  return { pivot: n, editMode: a };
}
const St = () => document.documentElement.classList.contains("dark") ? "dark" : "light";
function $v() {
  const e = B(St()), t = B();
  return pn(() => {
    t.value = new MutationObserver(() => {
      const r = St();
      r !== e.value && (e.value = r);
    }), t.value?.observe(document.documentElement, {
      attributes: !0,
      attributeOldValue: !0,
      attributeFilter: ["class"]
    });
  }), Xe(() => {
    t.value?.disconnect();
  }), e;
}
function _v(e, t, r, n) {
  const { field: a, formUniqueId: s } = Ye(e), { value: i } = it(a, s, t), o = A(() => a.value.attribute), l = A(() => a.value.visible);
  Ar(r, o, l);
  const { fieldLabel: u } = Er(a, n);
  return {
    value: i,
    fieldLabel: u
  };
}
function Ev(e, t) {
  const { field: r, formUniqueId: n } = Ye(e), { value: a } = it(r, n, t);
  return {
    value: a
  };
}
function ks(e, t) {
  ve(
    e.value,
    (r) => {
      r.fill = t;
    },
    { immediate: !0 }
  );
}
function Av(e, t, r, n, a, s, i) {
  const {
    field: o,
    errors: l,
    formUniqueId: u,
    showHelpText: f,
    resourceName: p,
    resourceId: y,
    viaRelationship: v,
    viaResource: d,
    viaResourceId: h,
    relatedResourceName: _,
    relatedResourceId: g,
    syncEndpoint: $
  } = Ye(e), { value: T, initialValue: O, emitValueChange: P } = it(
    o,
    u,
    t,
    r
  ), { currentField: b } = mv(
    T,
    O,
    r,
    o,
    u,
    p,
    y,
    v,
    d,
    h,
    _,
    g,
    $
  );
  ks(b, (mt) => {
    b.value.visible && (mt.append(b.value.attribute, r(T.value)), i && i(mt));
  });
  const x = A(() => b.value.attribute), S = A(() => b.value.visible);
  Ar(n, x, S);
  const { helpText: C, shouldShowHelpText: xe } = Vs(
    f,
    b
  ), { errors: un, firstError: cn, hasError: ln, shouldShowErrors: fn } = Xs(l, o, s), { fieldLabel: dn } = Er(b, a);
  return {
    value: T,
    currentField: b,
    fieldLabel: dn,
    helpText: C,
    shouldShowHelpText: xe,
    emitValueChange: P,
    errors: un,
    firstError: cn,
    hasError: ln,
    shouldShowErrors: fn
  };
}
function Vs(e, t) {
  const r = A(() => t.value.helpText), n = A(
    () => e.value && (r.value?.length ?? 0) > 0
  );
  return { helpText: r, shouldShowHelpText: n };
}
class Ws {
  /**
   * Create a new Errors instance.
   */
  constructor(t = {}) {
    this.record(t);
  }
  /**
   * Get all the errors.
   *
   * @return {object}
   */
  all() {
    return this.errors;
  }
  /**
   * Determine if any errors exists for the given field or object.
   *
   * @param {string} field
   */
  has(t) {
    let r = this.errors.hasOwnProperty(t);
    return r || (r = Object.keys(this.errors).filter(
      (a) => a.startsWith(`${t}.`) || a.startsWith(`${t}[`)
    ).length > 0), r;
  }
  first(t) {
    return this.get(t)[0];
  }
  get(t) {
    return this.errors[t] || [];
  }
  /**
   * Determine if we have any errors.
   * Or return errors for the given keys.
   *
   * @param {array} keys
   */
  any(t = []) {
    if (t.length === 0)
      return Object.keys(this.errors).length > 0;
    let r = {};
    return t.forEach((n) => r[n] = this.get(n)), r;
  }
  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(t = {}) {
    this.errors = t;
  }
  /**
   * Clear a specific field, object or all error fields.
   *
   * @param {string|null} field
   */
  clear(t) {
    if (!t) {
      this.errors = {};
      return;
    }
    let r = Object.assign({}, this.errors);
    Object.keys(r).filter((n) => n === t || n.startsWith(`${t}.`) || n.startsWith(`${t}[`)).forEach((n) => delete r[n]), this.errors = r;
  }
}
function Js(e) {
  const t = bt("viaParent", null), r = bt("index", null), n = A(() => !t || !r ? null : `${t.value}.${r.value}.fields.${e.value.attribute}`), a = A(() => !t || !r ? null : `${t.value}[${r.value}][${e.value.attribute}]`);
  return { viaParent: t, index: r, nestedValidationKey: n, nestedAttribute: a };
}
function Xs(e, t, r) {
  const { nestedValidationKey: n } = Js(t), a = A(
    () => n.value ?? t.value.validationKey
  ), s = A(() => new Ws(e.value.errors ?? {})), i = A(() => s.value.get(a.value)), o = A(() => s.value.has(a.value)), l = A(() => o.value ? s.value.first(a.value) : null), u = A(() => (!r || r.value) && o.value);
  return {
    errors: i,
    hasError: o,
    firstError: l,
    shouldShowErrors: u
  };
}
const je = (e, t, r) => !Z(r) && r !== "" ? `${r}-${e}-${t}` : `${e}-${t}`;
function Ue(e, t, r) {
  return A(
    () => je(e.value, t, r?.value)
  );
}
function Ys(e, t) {
  const r = Ue(
    e,
    "change",
    t
  ), n = Ue(e, "change");
  return { emitFieldValueChange: (s) => {
    Nova.$emit(n.value, s), r !== n && Nova.$emit(r.value, s);
  } };
}
function Zs(e, t, r) {
  const n = Ue(
    e,
    "value",
    t
  );
  return dr(() => {
    r && Nova.$on(n.value, r);
  }), Xe(() => {
    r && Nova.$off(n.value, r);
  }), {
    emitValueChange: (s) => {
      Nova.$emit(n.value, s);
    }
  };
}
function Ar(e, t, r) {
  const n = (a) => {
    e(a ? "field-shown" : "field-hidden", t.value);
  };
  ve(
    () => r.value,
    (a, s) => {
      a !== s && n(a);
    }
  );
}
var Qs = I, ei = function() {
  return Qs.Date.now();
}, ti = ei, ri = /\s/;
function ni(e) {
  for (var t = e.length; t-- && ri.test(e.charAt(t)); )
    ;
  return t;
}
var ai = ni, si = ai, ii = /^\s+/;
function oi(e) {
  return e && e.slice(0, si(e) + 1).replace(ii, "");
}
var ui = oi, ci = ee, li = te, fi = "[object Symbol]";
function di(e) {
  return typeof e == "symbol" || li(e) && ci(e) == fi;
}
var be = di, pi = ui, Tt = H, hi = be, Ot = 0 / 0, vi = /^[-+]0x[0-9a-f]+$/i, yi = /^0b[01]+$/i, mi = /^0o[0-7]+$/i, bi = parseInt;
function gi(e) {
  if (typeof e == "number")
    return e;
  if (hi(e))
    return Ot;
  if (Tt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Tt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pi(e);
  var r = yi.test(e);
  return r || mi.test(e) ? bi(e.slice(2), r ? 2 : 8) : vi.test(e) ? Ot : +e;
}
var $i = gi, _i = H, Re = ti, Pt = $i, Ei = "Expected a function", Ai = Math.max, wi = Math.min;
function Si(e, t, r) {
  var n, a, s, i, o, l, u = 0, f = !1, p = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Ei);
  t = Pt(t) || 0, _i(r) && (f = !!r.leading, p = "maxWait" in r, s = p ? Ai(Pt(r.maxWait) || 0, t) : s, y = "trailing" in r ? !!r.trailing : y);
  function v(b) {
    var x = n, S = a;
    return n = a = void 0, u = b, i = e.apply(S, x), i;
  }
  function d(b) {
    return u = b, o = setTimeout(g, t), f ? v(b) : i;
  }
  function h(b) {
    var x = b - l, S = b - u, C = t - x;
    return p ? wi(C, s - S) : C;
  }
  function _(b) {
    var x = b - l, S = b - u;
    return l === void 0 || x >= t || x < 0 || p && S >= s;
  }
  function g() {
    var b = Re();
    if (_(b))
      return $(b);
    o = setTimeout(g, h(b));
  }
  function $(b) {
    return o = void 0, y && n ? v(b) : (n = a = void 0, i);
  }
  function T() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = a = o = void 0;
  }
  function O() {
    return o === void 0 ? i : $(Re());
  }
  function P() {
    var b = Re(), x = _(b);
    if (n = arguments, a = this, l = b, x) {
      if (o === void 0)
        return d(l);
      if (p)
        return clearTimeout(o), o = setTimeout(g, t), v(l);
    }
    return o === void 0 && (o = setTimeout(g, t)), i;
  }
  return P.cancel = T, P.flush = O, P;
}
var Ti = Si;
const Oi = /* @__PURE__ */ U(Ti);
var Pi = I, Ci = Pi["__core-js_shared__"], xi = Ci, Fe = xi, Ct = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ri(e) {
  return !!Ct && Ct in e;
}
var Fi = Ri, Ii = Function.prototype, Ni = Ii.toString;
function Li(e) {
  if (e != null) {
    try {
      return Ni.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wr = Li, Di = $r, Mi = Fi, Bi = H, ji = wr, Ui = /[\\^$.*+?()[\]{}|]/g, Hi = /^\[object .+?Constructor\]$/, Ki = Function.prototype, qi = Object.prototype, Gi = Ki.toString, zi = qi.hasOwnProperty, ki = RegExp(
  "^" + Gi.call(zi).replace(Ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vi(e) {
  if (!Bi(e) || Mi(e))
    return !1;
  var t = Di(e) ? ki : Hi;
  return t.test(ji(e));
}
var Wi = Vi;
function Ji(e, t) {
  return e?.[t];
}
var Xi = Ji, Yi = Wi, Zi = Xi;
function Qi(e, t) {
  var r = Zi(e, t);
  return Yi(r) ? r : void 0;
}
var K = Qi, eo = K, to = I, ro = eo(to, "DataView"), no = ro, ao = K, so = I, io = ao(so, "Map"), ot = io, oo = K, uo = I, co = oo(uo, "Promise"), lo = co, fo = K, po = I, ho = fo(po, "Set"), vo = ho, yo = K, mo = I, bo = yo(mo, "WeakMap"), go = bo, He = no, Ke = ot, qe = lo, Ge = vo, ze = go, Sr = ee, G = wr, xt = "[object Map]", $o = "[object Object]", Rt = "[object Promise]", Ft = "[object Set]", It = "[object WeakMap]", Nt = "[object DataView]", _o = G(He), Eo = G(Ke), Ao = G(qe), wo = G(Ge), So = G(ze), j = Sr;
(He && j(new He(new ArrayBuffer(1))) != Nt || Ke && j(new Ke()) != xt || qe && j(qe.resolve()) != Rt || Ge && j(new Ge()) != Ft || ze && j(new ze()) != It) && (j = function(e) {
  var t = Sr(e), r = t == $o ? e.constructor : void 0, n = r ? G(r) : "";
  if (n)
    switch (n) {
      case _o:
        return Nt;
      case Eo:
        return xt;
      case Ao:
        return Rt;
      case wo:
        return Ft;
      case So:
        return It;
    }
  return t;
});
var Tr = j, To = gr, Oo = Tr, Po = Ze, Co = N, xo = me, Ro = Qe, Fo = nt, Io = rt, No = "[object Map]", Lo = "[object Set]", Do = Object.prototype, Mo = Do.hasOwnProperty;
function Bo(e) {
  if (e == null)
    return !0;
  if (xo(e) && (Co(e) || typeof e == "string" || typeof e.splice == "function" || Ro(e) || Io(e) || Po(e)))
    return !e.length;
  var t = Oo(e);
  if (t == No || t == Lo)
    return !e.size;
  if (Fo(e))
    return !To(e).length;
  for (var r in e)
    if (Mo.call(e, r))
      return !1;
  return !0;
}
var jo = Bo;
const Lt = /* @__PURE__ */ U(jo);
function Uo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ho = Uo, Ko = H, qo = nt, Go = Ho, zo = Object.prototype, ko = zo.hasOwnProperty;
function Vo(e) {
  if (!Ko(e))
    return Go(e);
  var t = qo(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ko.call(e, n)) || r.push(n);
  return r;
}
var Wo = Vo, Jo = mr, Xo = Wo, Yo = me;
function Zo(e) {
  return Yo(e) ? Jo(e, !0) : Xo(e);
}
var Or = Zo, Qo = pr, eu = _r, tu = Or;
function ru(e, t) {
  return e == null ? e : Qo(e, eu(t), tu);
}
var nu = ru;
const Dt = /* @__PURE__ */ U(nu);
function au(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Pr = au;
function su() {
  this.__data__ = [], this.size = 0;
}
var iu = su;
function ou(e, t) {
  return e === t || e !== e && t !== t;
}
var ut = ou, uu = ut;
function cu(e, t) {
  for (var r = e.length; r--; )
    if (uu(e[r][0], t))
      return r;
  return -1;
}
var ge = cu, lu = ge, fu = Array.prototype, du = fu.splice;
function pu(e) {
  var t = this.__data__, r = lu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : du.call(t, r, 1), --this.size, !0;
}
var hu = pu, vu = ge;
function yu(e) {
  var t = this.__data__, r = vu(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var mu = yu, bu = ge;
function gu(e) {
  return bu(this.__data__, e) > -1;
}
var $u = gu, _u = ge;
function Eu(e, t) {
  var r = this.__data__, n = _u(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Au = Eu, wu = iu, Su = hu, Tu = mu, Ou = $u, Pu = Au;
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = wu;
z.prototype.delete = Su;
z.prototype.get = Tu;
z.prototype.has = Ou;
z.prototype.set = Pu;
var $e = z, Cu = $e;
function xu() {
  this.__data__ = new Cu(), this.size = 0;
}
var Ru = xu;
function Fu(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Iu = Fu;
function Nu(e) {
  return this.__data__.get(e);
}
var Lu = Nu;
function Du(e) {
  return this.__data__.has(e);
}
var Mu = Du, Bu = K, ju = Bu(Object, "create"), _e = ju, Mt = _e;
function Uu() {
  this.__data__ = Mt ? Mt(null) : {}, this.size = 0;
}
var Hu = Uu;
function Ku(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qu = Ku, Gu = _e, zu = "__lodash_hash_undefined__", ku = Object.prototype, Vu = ku.hasOwnProperty;
function Wu(e) {
  var t = this.__data__;
  if (Gu) {
    var r = t[e];
    return r === zu ? void 0 : r;
  }
  return Vu.call(t, e) ? t[e] : void 0;
}
var Ju = Wu, Xu = _e, Yu = Object.prototype, Zu = Yu.hasOwnProperty;
function Qu(e) {
  var t = this.__data__;
  return Xu ? t[e] !== void 0 : Zu.call(t, e);
}
var ec = Qu, tc = _e, rc = "__lodash_hash_undefined__";
function nc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tc && t === void 0 ? rc : t, this;
}
var ac = nc, sc = Hu, ic = qu, oc = Ju, uc = ec, cc = ac;
function k(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
k.prototype.clear = sc;
k.prototype.delete = ic;
k.prototype.get = oc;
k.prototype.has = uc;
k.prototype.set = cc;
var lc = k, Bt = lc, fc = $e, dc = ot;
function pc() {
  this.size = 0, this.__data__ = {
    hash: new Bt(),
    map: new (dc || fc)(),
    string: new Bt()
  };
}
var hc = pc;
function vc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var yc = vc, mc = yc;
function bc(e, t) {
  var r = e.__data__;
  return mc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ee = bc, gc = Ee;
function $c(e) {
  var t = gc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var _c = $c, Ec = Ee;
function Ac(e) {
  return Ec(this, e).get(e);
}
var wc = Ac, Sc = Ee;
function Tc(e) {
  return Sc(this, e).has(e);
}
var Oc = Tc, Pc = Ee;
function Cc(e, t) {
  var r = Pc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var xc = Cc, Rc = hc, Fc = _c, Ic = wc, Nc = Oc, Lc = xc;
function V(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
V.prototype.clear = Rc;
V.prototype.delete = Fc;
V.prototype.get = Ic;
V.prototype.has = Nc;
V.prototype.set = Lc;
var ct = V, Dc = $e, Mc = ot, Bc = ct, jc = 200;
function Uc(e, t) {
  var r = this.__data__;
  if (r instanceof Dc) {
    var n = r.__data__;
    if (!Mc || n.length < jc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Bc(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Hc = Uc, Kc = $e, qc = Ru, Gc = Iu, zc = Lu, kc = Mu, Vc = Hc;
function W(e) {
  var t = this.__data__ = new Kc(e);
  this.size = t.size;
}
W.prototype.clear = qc;
W.prototype.delete = Gc;
W.prototype.get = zc;
W.prototype.has = kc;
W.prototype.set = Vc;
var Cr = W, Wc = "__lodash_hash_undefined__";
function Jc(e) {
  return this.__data__.set(e, Wc), this;
}
var Xc = Jc;
function Yc(e) {
  return this.__data__.has(e);
}
var Zc = Yc, Qc = ct, el = Xc, tl = Zc;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Qc(); ++t < r; )
    this.add(e[t]);
}
pe.prototype.add = pe.prototype.push = el;
pe.prototype.has = tl;
var rl = pe;
function nl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var al = nl;
function sl(e, t) {
  return e.has(t);
}
var il = sl, ol = rl, ul = al, cl = il, ll = 1, fl = 2;
function dl(e, t, r, n, a, s) {
  var i = r & ll, o = e.length, l = t.length;
  if (o != l && !(i && l > o))
    return !1;
  var u = s.get(e), f = s.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, y = !0, v = r & fl ? new ol() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var d = e[p], h = t[p];
    if (n)
      var _ = i ? n(h, d, p, t, e, s) : n(d, h, p, e, t, s);
    if (_ !== void 0) {
      if (_)
        continue;
      y = !1;
      break;
    }
    if (v) {
      if (!ul(t, function(g, $) {
        if (!cl(v, $) && (d === g || a(d, g, r, n, s)))
          return v.push($);
      })) {
        y = !1;
        break;
      }
    } else if (!(d === h || a(d, h, r, n, s))) {
      y = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), y;
}
var xr = dl, pl = I, hl = pl.Uint8Array, vl = hl;
function yl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var ml = yl;
function bl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var gl = bl, jt = ye, Ut = vl, $l = ut, _l = xr, El = ml, Al = gl, wl = 1, Sl = 2, Tl = "[object Boolean]", Ol = "[object Date]", Pl = "[object Error]", Cl = "[object Map]", xl = "[object Number]", Rl = "[object RegExp]", Fl = "[object Set]", Il = "[object String]", Nl = "[object Symbol]", Ll = "[object ArrayBuffer]", Dl = "[object DataView]", Ht = jt ? jt.prototype : void 0, Ie = Ht ? Ht.valueOf : void 0;
function Ml(e, t, r, n, a, s, i) {
  switch (r) {
    case Dl:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ll:
      return !(e.byteLength != t.byteLength || !s(new Ut(e), new Ut(t)));
    case Tl:
    case Ol:
    case xl:
      return $l(+e, +t);
    case Pl:
      return e.name == t.name && e.message == t.message;
    case Rl:
    case Il:
      return e == t + "";
    case Cl:
      var o = El;
    case Fl:
      var l = n & wl;
      if (o || (o = Al), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      n |= Sl, i.set(e, t);
      var f = _l(o(e), o(t), n, a, s, i);
      return i.delete(e), f;
    case Nl:
      if (Ie)
        return Ie.call(e) == Ie.call(t);
  }
  return !1;
}
var Bl = Ml;
function jl(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Rr = jl, Ul = Rr, Hl = N;
function Kl(e, t, r) {
  var n = t(e);
  return Hl(e) ? n : Ul(n, r(e));
}
var Fr = Kl;
function ql(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Gl = ql;
function zl() {
  return [];
}
var Ir = zl, kl = Gl, Vl = Ir, Wl = Object.prototype, Jl = Wl.propertyIsEnumerable, Kt = Object.getOwnPropertySymbols, Xl = Kt ? function(e) {
  return e == null ? [] : (e = Object(e), kl(Kt(e), function(t) {
    return Jl.call(e, t);
  }));
} : Vl, Nr = Xl, Yl = Fr, Zl = Nr, Ql = at;
function ef(e) {
  return Yl(e, Ql, Zl);
}
var tf = ef, qt = tf, rf = 1, nf = Object.prototype, af = nf.hasOwnProperty;
function sf(e, t, r, n, a, s) {
  var i = r & rf, o = qt(e), l = o.length, u = qt(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var p = l; p--; ) {
    var y = o[p];
    if (!(i ? y in t : af.call(t, y)))
      return !1;
  }
  var v = s.get(e), d = s.get(t);
  if (v && d)
    return v == t && d == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var _ = i; ++p < l; ) {
    y = o[p];
    var g = e[y], $ = t[y];
    if (n)
      var T = i ? n($, g, y, t, e, s) : n(g, $, y, e, t, s);
    if (!(T === void 0 ? g === $ || a(g, $, r, n, s) : T)) {
      h = !1;
      break;
    }
    _ || (_ = y == "constructor");
  }
  if (h && !_) {
    var O = e.constructor, P = t.constructor;
    O != P && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof P == "function" && P instanceof P) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var of = sf, Ne = Cr, uf = xr, cf = Bl, lf = of, Gt = Tr, zt = N, kt = Qe, ff = rt, df = 1, Vt = "[object Arguments]", Wt = "[object Array]", ie = "[object Object]", pf = Object.prototype, Jt = pf.hasOwnProperty;
function hf(e, t, r, n, a, s) {
  var i = zt(e), o = zt(t), l = i ? Wt : Gt(e), u = o ? Wt : Gt(t);
  l = l == Vt ? ie : l, u = u == Vt ? ie : u;
  var f = l == ie, p = u == ie, y = l == u;
  if (y && kt(e)) {
    if (!kt(t))
      return !1;
    i = !0, f = !1;
  }
  if (y && !f)
    return s || (s = new Ne()), i || ff(e) ? uf(e, t, r, n, a, s) : cf(e, t, l, r, n, a, s);
  if (!(r & df)) {
    var v = f && Jt.call(e, "__wrapped__"), d = p && Jt.call(t, "__wrapped__");
    if (v || d) {
      var h = v ? e.value() : e, _ = d ? t.value() : t;
      return s || (s = new Ne()), a(h, _, r, n, s);
    }
  }
  return y ? (s || (s = new Ne()), lf(e, t, r, n, a, s)) : !1;
}
var vf = hf, yf = vf, Xt = te;
function Lr(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Xt(e) && !Xt(t) ? e !== e && t !== t : yf(e, t, r, n, Lr, a);
}
var Dr = Lr, mf = Cr, bf = Dr, gf = 1, $f = 2;
function _f(e, t, r, n) {
  var a = r.length, s = a, i = !n;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var o = r[a];
    if (i && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    o = r[a];
    var l = o[0], u = e[l], f = o[1];
    if (i && o[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var p = new mf();
      if (n)
        var y = n(u, f, l, e, t, p);
      if (!(y === void 0 ? bf(f, u, gf | $f, n, p) : y))
        return !1;
    }
  }
  return !0;
}
var Ef = _f, Af = H;
function wf(e) {
  return e === e && !Af(e);
}
var Mr = wf, Sf = Mr, Tf = at;
function Of(e) {
  for (var t = Tf(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Sf(a)];
  }
  return t;
}
var Pf = Of;
function Cf(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Br = Cf, xf = Ef, Rf = Pf, Ff = Br;
function If(e) {
  var t = Rf(e);
  return t.length == 1 && t[0][2] ? Ff(t[0][0], t[0][1]) : function(r) {
    return r === e || xf(r, e, t);
  };
}
var Nf = If, Lf = N, Df = be, Mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bf = /^\w*$/;
function jf(e, t) {
  if (Lf(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Df(e) ? !0 : Bf.test(e) || !Mf.test(e) || t != null && e in Object(t);
}
var lt = jf, jr = ct, Uf = "Expected a function";
function ft(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Uf);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (ft.Cache || jr)(), r;
}
ft.Cache = jr;
var Hf = ft, Kf = Hf, qf = 500;
function Gf(e) {
  var t = Kf(e, function(n) {
    return r.size === qf && r.clear(), n;
  }), r = t.cache;
  return t;
}
var zf = Gf, kf = zf, Vf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wf = /\\(\\)?/g, Jf = kf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Vf, function(r, n, a, s) {
    t.push(a ? s.replace(Wf, "$1") : n || r);
  }), t;
}), Xf = Jf, Yt = ye, Yf = Pr, Zf = N, Qf = be, ed = 1 / 0, Zt = Yt ? Yt.prototype : void 0, Qt = Zt ? Zt.toString : void 0;
function Ur(e) {
  if (typeof e == "string")
    return e;
  if (Zf(e))
    return Yf(e, Ur) + "";
  if (Qf(e))
    return Qt ? Qt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ed ? "-0" : t;
}
var td = Ur, rd = td;
function nd(e) {
  return e == null ? "" : rd(e);
}
var ad = nd, sd = N, id = lt, od = Xf, ud = ad;
function cd(e, t) {
  return sd(e) ? e : id(e, t) ? [e] : od(ud(e));
}
var Ae = cd, ld = be, fd = 1 / 0;
function dd(e) {
  if (typeof e == "string" || ld(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -fd ? "-0" : t;
}
var re = dd, pd = Ae, hd = re;
function vd(e, t) {
  t = pd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[hd(t[r++])];
  return r && r == n ? e : void 0;
}
var dt = vd, yd = dt;
function md(e, t, r) {
  var n = e == null ? void 0 : yd(e, t);
  return n === void 0 ? r : n;
}
var bd = md;
function gd(e, t) {
  return e != null && t in Object(e);
}
var $d = gd, _d = Ae, Ed = Ze, Ad = N, wd = et, Sd = tt, Td = re;
function Od(e, t, r) {
  t = _d(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Td(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Sd(a) && wd(i, a) && (Ad(e) || Ed(e)));
}
var Pd = Od, Cd = $d, xd = Pd;
function Rd(e, t) {
  return e != null && xd(e, t, Cd);
}
var Fd = Rd, Id = Dr, Nd = bd, Ld = Fd, Dd = lt, Md = Mr, Bd = Br, jd = re, Ud = 1, Hd = 2;
function Kd(e, t) {
  return Dd(e) && Md(t) ? Bd(jd(e), t) : function(r) {
    var n = Nd(r, e);
    return n === void 0 && n === t ? Ld(r, e) : Id(t, n, Ud | Hd);
  };
}
var qd = Kd;
function Gd(e) {
  return function(t) {
    return t?.[e];
  };
}
var zd = Gd, kd = dt;
function Vd(e) {
  return function(t) {
    return kd(t, e);
  };
}
var Wd = Vd, Jd = zd, Xd = Wd, Yd = lt, Zd = re;
function Qd(e) {
  return Yd(e) ? Jd(Zd(e)) : Xd(e);
}
var ep = Qd, tp = Nf, rp = qd, np = st, ap = N, sp = ep;
function ip(e) {
  return typeof e == "function" ? e : e == null ? np : typeof e == "object" ? ap(e) ? rp(e[0], e[1]) : tp(e) : sp(e);
}
var op = ip, up = K, cp = function() {
  try {
    var e = up(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), lp = cp, er = lp;
function fp(e, t, r) {
  t == "__proto__" && er ? er(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var dp = fp, pp = dp, hp = ut, vp = Object.prototype, yp = vp.hasOwnProperty;
function mp(e, t, r) {
  var n = e[t];
  (!(yp.call(e, t) && hp(n, r)) || r === void 0 && !(t in e)) && pp(e, t, r);
}
var bp = mp, gp = bp, $p = Ae, _p = et, tr = H, Ep = re;
function Ap(e, t, r, n) {
  if (!tr(e))
    return e;
  t = $p(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var l = Ep(t[a]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != i) {
      var f = o[l];
      u = n ? n(f, l, o) : void 0, u === void 0 && (u = tr(f) ? f : _p(t[a + 1]) ? [] : {});
    }
    gp(o, l, u), o = o[l];
  }
  return e;
}
var wp = Ap, Sp = dt, Tp = wp, Op = Ae;
function Pp(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = Sp(e, i);
    r(o, i) && Tp(s, Op(i, e), o);
  }
  return s;
}
var Cp = Pp, xp = br, Rp = xp(Object.getPrototypeOf, Object), Fp = Rp, Ip = Rr, Np = Fp, Lp = Nr, Dp = Ir, Mp = Object.getOwnPropertySymbols, Bp = Mp ? function(e) {
  for (var t = []; e; )
    Ip(t, Lp(e)), e = Np(e);
  return t;
} : Dp, jp = Bp, Up = Fr, Hp = jp, Kp = Or;
function qp(e) {
  return Up(e, Kp, Hp);
}
var Gp = qp, zp = Pr, kp = op, Vp = Cp, Wp = Gp;
function Jp(e, t) {
  if (e == null)
    return {};
  var r = zp(Wp(e), function(n) {
    return [n];
  });
  return t = kp(t), Vp(e, r, function(n, a) {
    return t(n, a[0]);
  });
}
var Xp = Jp;
const Yp = /* @__PURE__ */ U(Xp);
function Hr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Zp } = Object.prototype, { getPrototypeOf: pt } = Object, we = ((e) => (t) => {
  const r = Zp.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => we(t) === e), Se = (e) => (t) => typeof t === e, { isArray: J } = Array, Q = Se("undefined");
function Qp(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Kr = L("ArrayBuffer");
function eh(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Kr(e.buffer), t;
}
const th = Se("string"), R = Se("function"), qr = Se("number"), Te = (e) => e !== null && typeof e == "object", rh = (e) => e === !0 || e === !1, oe = (e) => {
  if (we(e) !== "object")
    return !1;
  const t = pt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, nh = L("Date"), ah = L("File"), sh = L("Blob"), ih = L("FileList"), oh = (e) => Te(e) && R(e.pipe), uh = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = we(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, ch = L("URLSearchParams"), lh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ne(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), J(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let o;
    for (n = 0; n < i; n++)
      o = s[n], t.call(null, e[o], o, e);
  }
}
function Gr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const zr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), kr = (e) => !Q(e) && e !== zr;
function ke() {
  const { caseless: e } = kr(this) && this || {}, t = {}, r = (n, a) => {
    const s = e && Gr(t, a) || a;
    oe(t[s]) && oe(n) ? t[s] = ke(t[s], n) : oe(n) ? t[s] = ke({}, n) : J(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && ne(arguments[n], r);
  return t;
}
const fh = (e, t, r, { allOwnKeys: n } = {}) => (ne(t, (a, s) => {
  r && R(a) ? e[s] = Hr(a, r) : e[s] = a;
}, { allOwnKeys: n }), e), dh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ph = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, hh = (e, t, r, n) => {
  let a, s, i;
  const o = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      i = a[s], (!n || n(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = r !== !1 && pt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, vh = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, yh = (e) => {
  if (!e)
    return null;
  if (J(e))
    return e;
  let t = e.length;
  if (!qr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, mh = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && pt(Uint8Array)), bh = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, gh = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, $h = L("HTMLFormElement"), _h = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), rr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Eh = L("RegExp"), Vr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ne(r, (a, s) => {
    t(a, s, e) !== !1 && (n[s] = a);
  }), Object.defineProperties(e, n);
}, Ah = (e) => {
  Vr(e, (t, r) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (R(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, wh = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((s) => {
      r[s] = !0;
    });
  };
  return J(e) ? n(e) : n(String(e).split(t)), r;
}, Sh = () => {
}, Th = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Le = "abcdefghijklmnopqrstuvwxyz", nr = "0123456789", Wr = {
  DIGIT: nr,
  ALPHA: Le,
  ALPHA_DIGIT: Le + Le.toUpperCase() + nr
}, Oh = (e = 16, t = Wr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Ph(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ch = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (Te(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const s = J(n) ? [] : {};
        return ne(n, (i, o) => {
          const l = r(i, a + 1);
          !Q(l) && (s[o] = l);
        }), t[a] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, xh = L("AsyncFunction"), Rh = (e) => e && (Te(e) || R(e)) && R(e.then) && R(e.catch), c = {
  isArray: J,
  isArrayBuffer: Kr,
  isBuffer: Qp,
  isFormData: uh,
  isArrayBufferView: eh,
  isString: th,
  isNumber: qr,
  isBoolean: rh,
  isObject: Te,
  isPlainObject: oe,
  isUndefined: Q,
  isDate: nh,
  isFile: ah,
  isBlob: sh,
  isRegExp: Eh,
  isFunction: R,
  isStream: oh,
  isURLSearchParams: ch,
  isTypedArray: mh,
  isFileList: ih,
  forEach: ne,
  merge: ke,
  extend: fh,
  trim: lh,
  stripBOM: dh,
  inherits: ph,
  toFlatObject: hh,
  kindOf: we,
  kindOfTest: L,
  endsWith: vh,
  toArray: yh,
  forEachEntry: bh,
  matchAll: gh,
  isHTMLForm: $h,
  hasOwnProperty: rr,
  hasOwnProp: rr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vr,
  freezeMethods: Ah,
  toObjectSet: wh,
  toCamelCase: _h,
  noop: Sh,
  toFiniteNumber: Th,
  findKey: Gr,
  global: zr,
  isContextDefined: kr,
  ALPHABET: Wr,
  generateString: Oh,
  isSpecCompliantForm: Ph,
  toJSONObject: Ch,
  isAsyncFn: xh,
  isThenable: Rh
};
function m(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a);
}
c.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Jr = m.prototype, Xr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Xr[e] = { value: e };
});
Object.defineProperties(m, Xr);
Object.defineProperty(Jr, "isAxiosError", { value: !0 });
m.from = (e, t, r, n, a, s) => {
  const i = Object.create(Jr);
  return c.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), m.call(i, e.message, t, r, n, a), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Fh = null;
function Ve(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Yr(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ar(e, t, r) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Yr(a), !r && s ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Ih(e) {
  return c.isArray(e) && !e.some(Ve);
}
const Nh = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Oe(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, _) {
    return !c.isUndefined(_[h]);
  });
  const n = r.metaTokens, a = r.visitor || f, s = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(a))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (c.isDate(d))
      return d.toISOString();
    if (!l && c.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? l && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function f(d, h, _) {
    let g = d;
    if (d && !_ && typeof d == "object") {
      if (c.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && Ih(d) || (c.isFileList(d) || c.endsWith(h, "[]")) && (g = c.toArray(d)))
        return h = Yr(h), g.forEach(function(T, O) {
          !(c.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ar([h], O, s) : i === null ? h : h + "[]",
            u(T)
          );
        }), !1;
    }
    return Ve(d) ? !0 : (t.append(ar(_, h, s), u(d)), !1);
  }
  const p = [], y = Object.assign(Nh, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ve
  });
  function v(d, h) {
    if (!c.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(d), c.forEach(d, function(g, $) {
        (!(c.isUndefined(g) || g === null) && a.call(
          t,
          g,
          c.isString($) ? $.trim() : $,
          h,
          y
        )) === !0 && v(g, h ? h.concat($) : [$]);
      }), p.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function sr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ht(e, t) {
  this._pairs = [], e && Oe(e, this, t);
}
const Zr = ht.prototype;
Zr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Zr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, sr);
  } : sr;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Lh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Qr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Lh, a = r && r.serialize;
  let s;
  if (a ? s = a(t, r) : s = c.isURLSearchParams(t) ? t.toString() : new ht(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Dh {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ir = Dh, en = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mh = typeof URLSearchParams < "u" ? URLSearchParams : ht, Bh = typeof FormData < "u" ? FormData : null, jh = typeof Blob < "u" ? Blob : null, Uh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Hh = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), F = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Mh,
    FormData: Bh,
    Blob: jh
  },
  isStandardBrowserEnv: Uh,
  isStandardBrowserWebWorkerEnv: Hh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Kh(e, t) {
  return Oe(e, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, s) {
      return F.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function qh(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Gh(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let s;
  for (n = 0; n < a; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function tn(e) {
  function t(r, n, a, s) {
    let i = r[s++];
    const o = Number.isFinite(+i), l = s >= r.length;
    return i = !i && c.isArray(a) ? a.length : i, l ? (c.hasOwnProp(a, i) ? a[i] = [a[i], n] : a[i] = n, !o) : ((!a[i] || !c.isObject(a[i])) && (a[i] = []), t(r, n, a[i], s) && c.isArray(a[i]) && (a[i] = Gh(a[i])), !o);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, a) => {
      t(qh(n), a, r, 0);
    }), r;
  }
  return null;
}
const zh = {
  "Content-Type": void 0
};
function kh(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Pe = {
  transitional: en,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, s = c.isObject(t);
    if (s && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return a && a ? JSON.stringify(tn(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Kh(t, this.formSerializer).toString();
      if ((o = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Oe(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (r.setContentType("application/json", !1), kh(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Pe.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (t && c.isString(t) && (n && !this.responseType || a)) {
      const i = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (o) {
        if (i)
          throw o.name === "SyntaxError" ? m.from(o, m.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: F.classes.FormData,
    Blob: F.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
c.forEach(["delete", "get", "head"], function(t) {
  Pe.headers[t] = {};
});
c.forEach(["post", "put", "patch"], function(t) {
  Pe.headers[t] = c.merge(zh);
});
const vt = Pe, Vh = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Wh = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), r = i.substring(0, a).trim().toLowerCase(), n = i.substring(a + 1).trim(), !(!r || t[r] && Vh[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, or = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ue) : String(e);
}
function Jh(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Xh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function De(e, t, r, n, a) {
  if (c.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!c.isString(t)) {
    if (c.isString(n))
      return t.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(t);
  }
}
function Yh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Zh(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, s, i) {
        return this[n].call(this, t, a, s, i);
      },
      configurable: !0
    });
  });
}
let Ce = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function s(o, l, u) {
      const f = Y(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = c.findKey(a, f);
      (!p || a[p] === void 0 || u === !0 || u === void 0 && a[p] !== !1) && (a[p || l] = ue(o));
    }
    const i = (o, l) => c.forEach(o, (u, f) => s(u, f, l));
    return c.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : c.isString(t) && (t = t.trim()) && !Xh(t) ? i(Wh(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = Y(t), t) {
      const n = c.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return Jh(a);
        if (c.isFunction(r))
          return r.call(this, a, n);
        if (c.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Y(t), t) {
      const n = c.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || De(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function s(i) {
      if (i = Y(i), i) {
        const o = c.findKey(n, i);
        o && (!r || De(n, n[o], o, r)) && (delete n[o], a = !0);
      }
    }
    return c.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || De(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return c.forEach(this, (a, s) => {
      const i = c.findKey(n, s);
      if (i) {
        r[i] = ue(a), delete r[s];
        return;
      }
      const o = t ? Yh(s) : String(s).trim();
      o !== s && delete r[s], r[o] = ue(a), n[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && c.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[or] = this[or] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(i) {
      const o = Y(i);
      n[o] || (Zh(a, i), n[o] = !0);
    }
    return c.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(Ce.prototype);
c.freezeMethods(Ce);
const D = Ce;
function Me(e, t) {
  const r = this || vt, n = t || r, a = D.from(n.headers);
  let s = n.data;
  return c.forEach(e, function(o) {
    s = o.call(r, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function rn(e) {
  return !!(e && e.__CANCEL__);
}
function ae(e, t, r) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(ae, m, {
  __CANCEL__: !0
});
function Qh(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ev = F.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, a, s, i, o) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), c.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), c.isString(s) && l.push("path=" + s), c.isString(i) && l.push("domain=" + i), o === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rv(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nn(e, t) {
  return e && !tv(t) ? rv(e, t) : t;
}
const nv = F.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function a(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = a(window.location.href), function(i) {
      const o = c.isString(i) ? a(i) : i;
      return o.protocol === n.protocol && o.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function av(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function sv(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = n[s];
    i || (i = u), r[a] = l, n[a] = u;
    let p = s, y = 0;
    for (; p !== a; )
      y += r[p++], p = p % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), u - i < t)
      return;
    const v = f && u - f;
    return v ? Math.round(y * 1e3 / v) : void 0;
  };
}
function ur(e, t) {
  let r = 0;
  const n = sv(50, 250);
  return (a) => {
    const s = a.loaded, i = a.lengthComputable ? a.total : void 0, o = s - r, l = n(o), u = s <= i;
    r = s;
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: o,
      rate: l || void 0,
      estimated: l && i && u ? (i - s) / l : void 0,
      event: a
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const iv = typeof XMLHttpRequest < "u", ov = iv && function(e) {
  return new Promise(function(r, n) {
    let a = e.data;
    const s = D.from(e.headers).normalize(), i = e.responseType;
    let o;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(o), e.signal && e.signal.removeEventListener("abort", o);
    }
    c.isFormData(a) && (F.isStandardBrowserEnv || F.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(v + ":" + d));
    }
    const f = nn(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Qr(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function p() {
      if (!u)
        return;
      const v = D.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), h = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: e,
        request: u
      };
      Qh(function(g) {
        r(g), l();
      }, function(g) {
        n(g), l();
      }, h), u = null;
    }
    if ("onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, u.onabort = function() {
      u && (n(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || en;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new m(
        d,
        h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, F.isStandardBrowserEnv) {
      const v = (e.withCredentials || nv(f)) && e.xsrfCookieName && ev.read(e.xsrfCookieName);
      v && s.set(e.xsrfHeaderName, v);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && c.forEach(s.toJSON(), function(d, h) {
      u.setRequestHeader(h, d);
    }), c.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", ur(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", ur(e.onUploadProgress)), (e.cancelToken || e.signal) && (o = (v) => {
      u && (n(!v || v.type ? new ae(null, e, u) : v), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(o), e.signal && (e.signal.aborted ? o() : e.signal.addEventListener("abort", o)));
    const y = av(f);
    if (y && F.protocols.indexOf(y) === -1) {
      n(new m("Unsupported protocol " + y + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, ce = {
  http: Fh,
  xhr: ov
};
c.forEach(ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const uv = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let a = 0; a < t && (r = e[a], !(n = c.isString(r) ? ce[r.toLowerCase()] : r)); a++)
      ;
    if (!n)
      throw n === !1 ? new m(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        c.hasOwnProp(ce, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!c.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ce
};
function Be(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ae(null, e);
}
function cr(e) {
  return Be(e), e.headers = D.from(e.headers), e.data = Me.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), uv.getAdapter(e.adapter || vt.adapter)(e).then(function(n) {
    return Be(e), n.data = Me.call(
      e,
      e.transformResponse,
      n
    ), n.headers = D.from(n.headers), n;
  }, function(n) {
    return rn(n) || (Be(e), n && n.response && (n.response.data = Me.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = D.from(n.response.headers))), Promise.reject(n);
  });
}
const lr = (e) => e instanceof D ? e.toJSON() : e;
function q(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, p) {
    return c.isPlainObject(u) && c.isPlainObject(f) ? c.merge.call({ caseless: p }, u, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function a(u, f, p) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u, p);
    } else
      return n(u, f, p);
  }
  function s(u, f) {
    if (!c.isUndefined(f))
      return n(void 0, f);
  }
  function i(u, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, f);
  }
  function o(u, f, p) {
    if (p in t)
      return n(u, f);
    if (p in e)
      return n(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: o,
    headers: (u, f) => a(lr(u), lr(f), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const p = l[f] || a, y = p(e[f], t[f], f);
    c.isUndefined(y) && p !== o || (r[f] = y);
  }), r;
}
const an = "1.4.0", yt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const fr = {};
yt.transitional = function(t, r, n) {
  function a(s, i) {
    return "[Axios v" + an + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, o) => {
    if (t === !1)
      throw new m(
        a(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !fr[i] && (fr[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, o) : !0;
  };
};
function cv(e, t, r) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const s = n[a], i = t[s];
    if (i) {
      const o = e[s], l = o === void 0 || i(o, s, e);
      if (l !== !0)
        throw new m("option " + s + " must be " + l, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: cv,
  validators: yt
}, M = We.validators;
let he = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ir(),
      response: new ir()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = q(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: s } = r;
    n !== void 0 && We.assertOptions(n, {
      silentJSONParsing: M.transitional(M.boolean),
      forcedJSONParsing: M.transitional(M.boolean),
      clarifyTimeoutError: M.transitional(M.boolean)
    }, !1), a != null && (c.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : We.assertOptions(a, {
      encode: M.function,
      serialize: M.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && c.merge(
      s.common,
      s[r.method]
    ), i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), r.headers = D.concat(i, s);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (l = l && h.synchronous, o.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let f, p = 0, y;
    if (!l) {
      const d = [cr.bind(this), void 0];
      for (d.unshift.apply(d, o), d.push.apply(d, u), y = d.length, f = Promise.resolve(r); p < y; )
        f = f.then(d[p++], d[p++]);
      return f;
    }
    y = o.length;
    let v = r;
    for (p = 0; p < y; ) {
      const d = o[p++], h = o[p++];
      try {
        v = d(v);
      } catch (_) {
        h.call(this, _);
        break;
      }
    }
    try {
      f = cr.call(this, v);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, y = u.length; p < y; )
      f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = q(this.defaults, t);
    const r = nn(t.baseURL, t.url);
    return Qr(r, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  he.prototype[t] = function(r, n) {
    return this.request(q(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, o) {
      return this.request(q(o || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  he.prototype[t] = r(), he.prototype[t + "Form"] = r(!0);
});
const le = he;
let lv = class sn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const i = new Promise((o) => {
        n.subscribe(o), s = o;
      }).then(a);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, o) {
      n.reason || (n.reason = new ae(s, i, o), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new sn(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
const fv = lv;
function dv(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function pv(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Je = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Je).forEach(([e, t]) => {
  Je[t] = e;
});
const hv = Je;
function on(e) {
  const t = new le(e), r = Hr(le.prototype.request, t);
  return c.extend(r, le.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return on(q(e, a));
  }, r;
}
const w = on(vt);
w.Axios = le;
w.CanceledError = ae;
w.CancelToken = fv;
w.isCancel = rn;
w.VERSION = an;
w.toFormData = Oe;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = dv;
w.isAxiosError = pv;
w.mergeConfig = q;
w.AxiosHeaders = D;
w.formToJSON = (e) => tn(c.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = hv;
w.default = w;
const vv = w, {
  Axios: Tv,
  AxiosError: Ov,
  CanceledError: Pv,
  isCancel: yv,
  CancelToken: Cv,
  VERSION: xv,
  all: Rv,
  Cancel: Fv,
  isAxiosError: Iv,
  spread: Nv,
  toFormData: Lv,
  AxiosHeaders: Dv,
  HttpStatusCode: Mv,
  formToJSON: Bv,
  mergeConfig: jv
} = vv;
function mv(e, t, r, n, a, s, i, o, l, u, f, p, y) {
  const v = B(n.value);
  ve(n.value, (S) => {
    v.value = S;
  });
  const d = A(() => v.value.dependsOn), h = A(() => v.value.attribute), _ = A(
    () => v.value.dependentComponentKey
  ), g = B(Oi((S) => S(), 50)), $ = B(null), T = B({}), O = B({}), { editMode: P } = zs(
    i,
    f,
    p
  ), b = A(() => y?.value ? y.value : P.value === "update-attached" ? `/nova-api/${s.value}/${i.value}/update-pivot-fields/${f?.value}/${p?.value}` : P.value === "attach" ? `/nova-api/${s.value}/${i.value}/creation-pivot-fields/${f?.value}` : P.value === "update" ? `/nova-api/${s.value}/${i.value}/update-fields` : `/nova-api/${s.value}/creation-fields`), x = async () => {
    $.value && $.value.abort(), $.value = new AbortController();
    let S;
    try {
      S = await Nova.request({
        method: "patch",
        url: b.value,
        data: {
          [h.value]: r(e.value),
          ...T.value
        },
        params: Yp(
          {
            editing: !0,
            editMode: P.value,
            viaResource: l?.value,
            viaResourceId: u?.value,
            viaRelationship: o?.value,
            field: h.value,
            component: _.value
          },
          Is
        ),
        signal: $.value.signal
      });
    } catch (C) {
      if (yv(C))
        return;
      throw C;
    }
    v.value = S.data, v.value.value = v.value.value ?? n.value.value ?? t.value;
  };
  return dr(() => {
    Lt(d.value) || Dt(d.value, (S, C) => {
      O.value[C] = (xe) => {
        T.value[C] = xe, g.value(() => {
          x().catch();
        });
      }, T.value[C] = S, Nova.$on(
        je(C, "change", a.value),
        O.value[C]
      );
    });
  }), Xe(() => {
    $.value !== null && $.value.abort(), Lt(O.value) || Dt(O.value, (S, C) => {
      Nova.$off(
        je(C, "change", a.value),
        S
      );
    });
  }), { currentField: v };
}
export {
  je as getFieldAttributeEventName,
  mv as useDependentFormField,
  _v as useDetailField,
  Ue as useFieldAttributeEventName,
  Ys as useFieldChangeEvent,
  ks as useFieldFill,
  Vs as useFieldHelpText,
  Er as useFieldLabel,
  Xs as useFieldValidationErrors,
  it as useFieldValue,
  Zs as useFieldValueEvent,
  Ar as useFieldVisibilityEvent,
  zs as useFormEditMode,
  Av as useFormField,
  Ev as useIndexField,
  gv as useLocalization,
  $v as useTheme
};
//# sourceMappingURL=nova-vue3-helper.js.map
