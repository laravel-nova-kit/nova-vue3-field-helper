import { computed as A, ref as B, watch as ve, onBeforeMount as dn, onBeforeUnmount as Xe, toRefs as Ye, onMounted as fr } from "vue";
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function pn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var hn = pn;
function vn(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var l = i[e ? o : ++a];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var yn = vn, mn = yn, bn = mn(), dr = bn;
function gn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var $n = gn, _n = typeof se == "object" && se && se.Object === Object && se, pr = _n, En = pr, An = typeof self == "object" && self && self.Object === Object && self, wn = En || An || Function("return this")(), I = wn, Sn = I, Tn = Sn.Symbol, ye = Tn, bt = ye, hr = Object.prototype, On = hr.hasOwnProperty, Cn = hr.toString, X = bt ? bt.toStringTag : void 0;
function Pn(e) {
  var t = On.call(e, X), r = e[X];
  try {
    e[X] = void 0;
    var n = !0;
  } catch {
  }
  var a = Cn.call(e);
  return n && (t ? e[X] = r : delete e[X]), a;
}
var Rn = Pn, xn = Object.prototype, Fn = xn.toString;
function In(e) {
  return Fn.call(e);
}
var Nn = In, gt = ye, Ln = Rn, Dn = Nn, Mn = "[object Null]", Bn = "[object Undefined]", $t = gt ? gt.toStringTag : void 0;
function jn(e) {
  return e == null ? e === void 0 ? Bn : Mn : $t && $t in Object(e) ? Ln(e) : Dn(e);
}
var ee = jn;
function Un(e) {
  return e != null && typeof e == "object";
}
var te = Un, Hn = ee, Kn = te, qn = "[object Arguments]";
function Gn(e) {
  return Kn(e) && Hn(e) == qn;
}
var zn = Gn, _t = zn, kn = te, vr = Object.prototype, Wn = vr.hasOwnProperty, Jn = vr.propertyIsEnumerable, Vn = _t(function() {
  return arguments;
}()) ? _t : function(e) {
  return kn(e) && Wn.call(e, "callee") && !Jn.call(e, "callee");
}, Ze = Vn, Xn = Array.isArray, N = Xn, fe = { exports: {} };
function Yn() {
  return !1;
}
var Zn = Yn;
fe.exports;
(function(e, t) {
  var r = I, n = Zn, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, u = l || n;
  e.exports = u;
})(fe, fe.exports);
var Qe = fe.exports, Qn = 9007199254740991, ea = /^(?:0|[1-9]\d*)$/;
function ta(e, t) {
  var r = typeof e;
  return t = t ?? Qn, !!t && (r == "number" || r != "symbol" && ea.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var et = ta, ra = 9007199254740991;
function na(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ra;
}
var tt = na, aa = ee, sa = tt, ia = te, oa = "[object Arguments]", ua = "[object Array]", ca = "[object Boolean]", la = "[object Date]", fa = "[object Error]", da = "[object Function]", pa = "[object Map]", ha = "[object Number]", va = "[object Object]", ya = "[object RegExp]", ma = "[object Set]", ba = "[object String]", ga = "[object WeakMap]", $a = "[object ArrayBuffer]", _a = "[object DataView]", Ea = "[object Float32Array]", Aa = "[object Float64Array]", wa = "[object Int8Array]", Sa = "[object Int16Array]", Ta = "[object Int32Array]", Oa = "[object Uint8Array]", Ca = "[object Uint8ClampedArray]", Pa = "[object Uint16Array]", Ra = "[object Uint32Array]", E = {};
E[Ea] = E[Aa] = E[wa] = E[Sa] = E[Ta] = E[Oa] = E[Ca] = E[Pa] = E[Ra] = !0;
E[oa] = E[ua] = E[$a] = E[ca] = E[_a] = E[la] = E[fa] = E[da] = E[pa] = E[ha] = E[va] = E[ya] = E[ma] = E[ba] = E[ga] = !1;
function xa(e) {
  return ia(e) && sa(e.length) && !!E[aa(e)];
}
var Fa = xa;
function Ia(e) {
  return function(t) {
    return e(t);
  };
}
var Na = Ia, de = { exports: {} };
de.exports;
(function(e, t) {
  var r = pr, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(de, de.exports);
var La = de.exports, Da = Fa, Ma = Na, Et = La, At = Et && Et.isTypedArray, Ba = At ? Ma(At) : Da, rt = Ba, ja = $n, Ua = Ze, Ha = N, Ka = Qe, qa = et, Ga = rt, za = Object.prototype, ka = za.hasOwnProperty;
function Wa(e, t) {
  var r = Ha(e), n = !r && Ua(e), a = !r && !n && Ka(e), s = !r && !n && !a && Ga(e), i = r || n || a || s, o = i ? ja(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || ka.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    qa(u, l))) && o.push(u);
  return o;
}
var yr = Wa, Ja = Object.prototype;
function Va(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ja;
  return e === r;
}
var nt = Va;
function Xa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var mr = Xa, Ya = mr, Za = Ya(Object.keys, Object), Qa = Za, es = nt, ts = Qa, rs = Object.prototype, ns = rs.hasOwnProperty;
function as(e) {
  if (!es(e))
    return ts(e);
  var t = [];
  for (var r in Object(e))
    ns.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var br = as;
function ss(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var H = ss, is = ee, os = H, us = "[object AsyncFunction]", cs = "[object Function]", ls = "[object GeneratorFunction]", fs = "[object Proxy]";
function ds(e) {
  if (!os(e))
    return !1;
  var t = is(e);
  return t == cs || t == ls || t == us || t == fs;
}
var gr = ds, ps = gr, hs = tt;
function vs(e) {
  return e != null && hs(e.length) && !ps(e);
}
var me = vs, ys = yr, ms = br, bs = me;
function gs(e) {
  return bs(e) ? ys(e) : ms(e);
}
var at = gs, $s = dr, _s = at;
function Es(e, t) {
  return e && $s(e, t, _s);
}
var As = Es, ws = me;
function Ss(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!ws(r))
      return e(r, n);
    for (var a = r.length, s = t ? a : -1, i = Object(r); (t ? s-- : ++s < a) && n(i[s], s, i) !== !1; )
      ;
    return r;
  };
}
var Ts = Ss, Os = As, Cs = Ts, Ps = Cs(Os), Rs = Ps;
function xs(e) {
  return e;
}
var st = xs;
const Fs = /* @__PURE__ */ U(st);
var Is = st;
function Ns(e) {
  return typeof e == "function" ? e : Is;
}
var $r = Ns, Ls = hn, Ds = Rs, Ms = $r, Bs = N;
function js(e, t) {
  var r = Bs(e) ? Ls : Ds;
  return r(e, Ms(t));
}
var Us = js;
const Hs = /* @__PURE__ */ U(Us);
function mv() {
  return {
    __: (t, r = {}) => {
      let n = Nova.config("translations")[t] ? Nova.config("translations")[t] : t;
      return Hs(r, (a, s) => {
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
function _r(e, t) {
  return { fieldLabel: A(() => t && t.value === "" ? t.value : t?.value || e.value.name || e.value.attribute) };
}
function it(e, t, r, n = null) {
  const a = A(() => e.value.attribute), s = A(() => r(e.value)), i = B(s.value), { emitFieldValueChange: o } = Vs(
    a,
    t
  );
  ve(
    () => i.value,
    (u, f) => {
      n && u !== f && o(n(u));
    }
  );
  const { emitValueChange: l } = Xs(
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
function Ks(e) {
  return e == null;
}
var qs = Ks;
const Z = /* @__PURE__ */ U(qs);
function Gs(e, t, r) {
  const n = A(() => !Z(t?.value) && t?.value !== ""), a = A(() => !Z(t?.value) && t?.value !== "" ? !Z(r?.value) && r?.value !== "" ? "update-attached" : "attach" : !Z(e?.value) && e?.value !== "" ? "update" : "create");
  return { pivot: n, editMode: a };
}
const wt = () => document.documentElement.classList.contains("dark") ? "dark" : "light";
function bv() {
  const e = B(wt()), t = B();
  return dn(() => {
    t.value = new MutationObserver(() => {
      const r = wt();
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
function gv(e, t, r, n) {
  const { field: a, formUniqueId: s } = Ye(e), { value: i } = it(a, s, t), o = A(() => a.value.attribute), l = A(() => a.value.visible);
  Er(r, o, l);
  const { fieldLabel: u } = _r(a, n);
  return {
    value: i,
    fieldLabel: u
  };
}
function $v(e, t) {
  const { field: r, formUniqueId: n } = Ye(e), { value: a } = it(r, n, t);
  return {
    value: a
  };
}
function zs(e, t) {
  ve(
    e.value,
    (r) => {
      r.fill = t;
    },
    { immediate: !0 }
  );
}
function _v(e, t, r, n, a, s, i) {
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
  } = Ye(e), { value: T, initialValue: O, emitValueChange: C } = it(
    o,
    u,
    t,
    r
  ), { currentField: b } = vv(
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
  zs(b, (mt) => {
    b.value.visible && (mt.append(b.value.attribute, r(T.value)), i && i(mt));
  });
  const R = A(() => b.value.attribute), S = A(() => b.value.visible);
  Er(n, R, S);
  const { helpText: P, shouldShowHelpText: Re } = ks(
    f,
    b
  ), { errors: on, firstError: un, hasError: cn, shouldShowErrors: ln } = Js(l, o, s), { fieldLabel: fn } = _r(b, a);
  return {
    value: T,
    currentField: b,
    fieldLabel: fn,
    helpText: P,
    shouldShowHelpText: Re,
    emitValueChange: C,
    errors: on,
    firstError: un,
    hasError: cn,
    shouldShowErrors: ln
  };
}
function ks(e, t) {
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
function Js(e, t, r) {
  const n = A(() => t.value.validationKey), a = A(() => new Ws(e.value.errors ?? {})), s = A(() => a.value.get(n.value)), i = A(() => a.value.has(n.value)), o = A(() => i.value ? a.value.first(n.value) : null), l = A(() => (!r || r.value) && i.value);
  return {
    errors: s,
    hasError: i,
    firstError: o,
    shouldShowErrors: l
  };
}
const je = (e, t, r) => !Z(r) && r !== "" ? `${r}-${e}-${t}` : `${e}-${t}`;
function Ue(e, t, r) {
  return A(
    () => je(e.value, t, r?.value)
  );
}
function Vs(e, t) {
  const r = Ue(
    e,
    "change",
    t
  ), n = Ue(e, "change");
  return { emitFieldValueChange: (s) => {
    Nova.$emit(n.value, s), r !== n && Nova.$emit(r.value, s);
  } };
}
function Xs(e, t, r) {
  const n = Ue(
    e,
    "value",
    t
  );
  return fr(() => {
    r && Nova.$on(n.value, r);
  }), Xe(() => {
    r && Nova.$off(n.value, r);
  }), {
    emitValueChange: (s) => {
      Nova.$emit(n.value, s);
    }
  };
}
function Er(e, t, r) {
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
var Ys = I, Zs = function() {
  return Ys.Date.now();
}, Qs = Zs, ei = /\s/;
function ti(e) {
  for (var t = e.length; t-- && ei.test(e.charAt(t)); )
    ;
  return t;
}
var ri = ti, ni = ri, ai = /^\s+/;
function si(e) {
  return e && e.slice(0, ni(e) + 1).replace(ai, "");
}
var ii = si, oi = ee, ui = te, ci = "[object Symbol]";
function li(e) {
  return typeof e == "symbol" || ui(e) && oi(e) == ci;
}
var be = li, fi = ii, St = H, di = be, Tt = 0 / 0, pi = /^[-+]0x[0-9a-f]+$/i, hi = /^0b[01]+$/i, vi = /^0o[0-7]+$/i, yi = parseInt;
function mi(e) {
  if (typeof e == "number")
    return e;
  if (di(e))
    return Tt;
  if (St(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = St(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = fi(e);
  var r = hi.test(e);
  return r || vi.test(e) ? yi(e.slice(2), r ? 2 : 8) : pi.test(e) ? Tt : +e;
}
var bi = mi, gi = H, xe = Qs, Ot = bi, $i = "Expected a function", _i = Math.max, Ei = Math.min;
function Ai(e, t, r) {
  var n, a, s, i, o, l, u = 0, f = !1, p = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError($i);
  t = Ot(t) || 0, gi(r) && (f = !!r.leading, p = "maxWait" in r, s = p ? _i(Ot(r.maxWait) || 0, t) : s, y = "trailing" in r ? !!r.trailing : y);
  function v(b) {
    var R = n, S = a;
    return n = a = void 0, u = b, i = e.apply(S, R), i;
  }
  function d(b) {
    return u = b, o = setTimeout(g, t), f ? v(b) : i;
  }
  function h(b) {
    var R = b - l, S = b - u, P = t - R;
    return p ? Ei(P, s - S) : P;
  }
  function _(b) {
    var R = b - l, S = b - u;
    return l === void 0 || R >= t || R < 0 || p && S >= s;
  }
  function g() {
    var b = xe();
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
    return o === void 0 ? i : $(xe());
  }
  function C() {
    var b = xe(), R = _(b);
    if (n = arguments, a = this, l = b, R) {
      if (o === void 0)
        return d(l);
      if (p)
        return clearTimeout(o), o = setTimeout(g, t), v(l);
    }
    return o === void 0 && (o = setTimeout(g, t)), i;
  }
  return C.cancel = T, C.flush = O, C;
}
var wi = Ai;
const Si = /* @__PURE__ */ U(wi);
var Ti = I, Oi = Ti["__core-js_shared__"], Ci = Oi, Fe = Ci, Ct = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pi(e) {
  return !!Ct && Ct in e;
}
var Ri = Pi, xi = Function.prototype, Fi = xi.toString;
function Ii(e) {
  if (e != null) {
    try {
      return Fi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ar = Ii, Ni = gr, Li = Ri, Di = H, Mi = Ar, Bi = /[\\^$.*+?()[\]{}|]/g, ji = /^\[object .+?Constructor\]$/, Ui = Function.prototype, Hi = Object.prototype, Ki = Ui.toString, qi = Hi.hasOwnProperty, Gi = RegExp(
  "^" + Ki.call(qi).replace(Bi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zi(e) {
  if (!Di(e) || Li(e))
    return !1;
  var t = Ni(e) ? Gi : ji;
  return t.test(Mi(e));
}
var ki = zi;
function Wi(e, t) {
  return e?.[t];
}
var Ji = Wi, Vi = ki, Xi = Ji;
function Yi(e, t) {
  var r = Xi(e, t);
  return Vi(r) ? r : void 0;
}
var K = Yi, Zi = K, Qi = I, eo = Zi(Qi, "DataView"), to = eo, ro = K, no = I, ao = ro(no, "Map"), ot = ao, so = K, io = I, oo = so(io, "Promise"), uo = oo, co = K, lo = I, fo = co(lo, "Set"), po = fo, ho = K, vo = I, yo = ho(vo, "WeakMap"), mo = yo, He = to, Ke = ot, qe = uo, Ge = po, ze = mo, wr = ee, G = Ar, Pt = "[object Map]", bo = "[object Object]", Rt = "[object Promise]", xt = "[object Set]", Ft = "[object WeakMap]", It = "[object DataView]", go = G(He), $o = G(Ke), _o = G(qe), Eo = G(Ge), Ao = G(ze), j = wr;
(He && j(new He(new ArrayBuffer(1))) != It || Ke && j(new Ke()) != Pt || qe && j(qe.resolve()) != Rt || Ge && j(new Ge()) != xt || ze && j(new ze()) != Ft) && (j = function(e) {
  var t = wr(e), r = t == bo ? e.constructor : void 0, n = r ? G(r) : "";
  if (n)
    switch (n) {
      case go:
        return It;
      case $o:
        return Pt;
      case _o:
        return Rt;
      case Eo:
        return xt;
      case Ao:
        return Ft;
    }
  return t;
});
var Sr = j, wo = br, So = Sr, To = Ze, Oo = N, Co = me, Po = Qe, Ro = nt, xo = rt, Fo = "[object Map]", Io = "[object Set]", No = Object.prototype, Lo = No.hasOwnProperty;
function Do(e) {
  if (e == null)
    return !0;
  if (Co(e) && (Oo(e) || typeof e == "string" || typeof e.splice == "function" || Po(e) || xo(e) || To(e)))
    return !e.length;
  var t = So(e);
  if (t == Fo || t == Io)
    return !e.size;
  if (Ro(e))
    return !wo(e).length;
  for (var r in e)
    if (Lo.call(e, r))
      return !1;
  return !0;
}
var Mo = Do;
const Nt = /* @__PURE__ */ U(Mo);
function Bo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var jo = Bo, Uo = H, Ho = nt, Ko = jo, qo = Object.prototype, Go = qo.hasOwnProperty;
function zo(e) {
  if (!Uo(e))
    return Ko(e);
  var t = Ho(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Go.call(e, n)) || r.push(n);
  return r;
}
var ko = zo, Wo = yr, Jo = ko, Vo = me;
function Xo(e) {
  return Vo(e) ? Wo(e, !0) : Jo(e);
}
var Tr = Xo, Yo = dr, Zo = $r, Qo = Tr;
function eu(e, t) {
  return e == null ? e : Yo(e, Zo(t), Qo);
}
var tu = eu;
const Lt = /* @__PURE__ */ U(tu);
function ru(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Or = ru;
function nu() {
  this.__data__ = [], this.size = 0;
}
var au = nu;
function su(e, t) {
  return e === t || e !== e && t !== t;
}
var ut = su, iu = ut;
function ou(e, t) {
  for (var r = e.length; r--; )
    if (iu(e[r][0], t))
      return r;
  return -1;
}
var ge = ou, uu = ge, cu = Array.prototype, lu = cu.splice;
function fu(e) {
  var t = this.__data__, r = uu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : lu.call(t, r, 1), --this.size, !0;
}
var du = fu, pu = ge;
function hu(e) {
  var t = this.__data__, r = pu(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var vu = hu, yu = ge;
function mu(e) {
  return yu(this.__data__, e) > -1;
}
var bu = mu, gu = ge;
function $u(e, t) {
  var r = this.__data__, n = gu(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var _u = $u, Eu = au, Au = du, wu = vu, Su = bu, Tu = _u;
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = Eu;
z.prototype.delete = Au;
z.prototype.get = wu;
z.prototype.has = Su;
z.prototype.set = Tu;
var $e = z, Ou = $e;
function Cu() {
  this.__data__ = new Ou(), this.size = 0;
}
var Pu = Cu;
function Ru(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var xu = Ru;
function Fu(e) {
  return this.__data__.get(e);
}
var Iu = Fu;
function Nu(e) {
  return this.__data__.has(e);
}
var Lu = Nu, Du = K, Mu = Du(Object, "create"), _e = Mu, Dt = _e;
function Bu() {
  this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
}
var ju = Bu;
function Uu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hu = Uu, Ku = _e, qu = "__lodash_hash_undefined__", Gu = Object.prototype, zu = Gu.hasOwnProperty;
function ku(e) {
  var t = this.__data__;
  if (Ku) {
    var r = t[e];
    return r === qu ? void 0 : r;
  }
  return zu.call(t, e) ? t[e] : void 0;
}
var Wu = ku, Ju = _e, Vu = Object.prototype, Xu = Vu.hasOwnProperty;
function Yu(e) {
  var t = this.__data__;
  return Ju ? t[e] !== void 0 : Xu.call(t, e);
}
var Zu = Yu, Qu = _e, ec = "__lodash_hash_undefined__";
function tc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Qu && t === void 0 ? ec : t, this;
}
var rc = tc, nc = ju, ac = Hu, sc = Wu, ic = Zu, oc = rc;
function k(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
k.prototype.clear = nc;
k.prototype.delete = ac;
k.prototype.get = sc;
k.prototype.has = ic;
k.prototype.set = oc;
var uc = k, Mt = uc, cc = $e, lc = ot;
function fc() {
  this.size = 0, this.__data__ = {
    hash: new Mt(),
    map: new (lc || cc)(),
    string: new Mt()
  };
}
var dc = fc;
function pc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var hc = pc, vc = hc;
function yc(e, t) {
  var r = e.__data__;
  return vc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ee = yc, mc = Ee;
function bc(e) {
  var t = mc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var gc = bc, $c = Ee;
function _c(e) {
  return $c(this, e).get(e);
}
var Ec = _c, Ac = Ee;
function wc(e) {
  return Ac(this, e).has(e);
}
var Sc = wc, Tc = Ee;
function Oc(e, t) {
  var r = Tc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Cc = Oc, Pc = dc, Rc = gc, xc = Ec, Fc = Sc, Ic = Cc;
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = Pc;
W.prototype.delete = Rc;
W.prototype.get = xc;
W.prototype.has = Fc;
W.prototype.set = Ic;
var ct = W, Nc = $e, Lc = ot, Dc = ct, Mc = 200;
function Bc(e, t) {
  var r = this.__data__;
  if (r instanceof Nc) {
    var n = r.__data__;
    if (!Lc || n.length < Mc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Dc(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var jc = Bc, Uc = $e, Hc = Pu, Kc = xu, qc = Iu, Gc = Lu, zc = jc;
function J(e) {
  var t = this.__data__ = new Uc(e);
  this.size = t.size;
}
J.prototype.clear = Hc;
J.prototype.delete = Kc;
J.prototype.get = qc;
J.prototype.has = Gc;
J.prototype.set = zc;
var Cr = J, kc = "__lodash_hash_undefined__";
function Wc(e) {
  return this.__data__.set(e, kc), this;
}
var Jc = Wc;
function Vc(e) {
  return this.__data__.has(e);
}
var Xc = Vc, Yc = ct, Zc = Jc, Qc = Xc;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Yc(); ++t < r; )
    this.add(e[t]);
}
pe.prototype.add = pe.prototype.push = Zc;
pe.prototype.has = Qc;
var el = pe;
function tl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var rl = tl;
function nl(e, t) {
  return e.has(t);
}
var al = nl, sl = el, il = rl, ol = al, ul = 1, cl = 2;
function ll(e, t, r, n, a, s) {
  var i = r & ul, o = e.length, l = t.length;
  if (o != l && !(i && l > o))
    return !1;
  var u = s.get(e), f = s.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, y = !0, v = r & cl ? new sl() : void 0;
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
      if (!il(t, function(g, $) {
        if (!ol(v, $) && (d === g || a(d, g, r, n, s)))
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
var Pr = ll, fl = I, dl = fl.Uint8Array, pl = dl;
function hl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var vl = hl;
function yl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ml = yl, Bt = ye, jt = pl, bl = ut, gl = Pr, $l = vl, _l = ml, El = 1, Al = 2, wl = "[object Boolean]", Sl = "[object Date]", Tl = "[object Error]", Ol = "[object Map]", Cl = "[object Number]", Pl = "[object RegExp]", Rl = "[object Set]", xl = "[object String]", Fl = "[object Symbol]", Il = "[object ArrayBuffer]", Nl = "[object DataView]", Ut = Bt ? Bt.prototype : void 0, Ie = Ut ? Ut.valueOf : void 0;
function Ll(e, t, r, n, a, s, i) {
  switch (r) {
    case Nl:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Il:
      return !(e.byteLength != t.byteLength || !s(new jt(e), new jt(t)));
    case wl:
    case Sl:
    case Cl:
      return bl(+e, +t);
    case Tl:
      return e.name == t.name && e.message == t.message;
    case Pl:
    case xl:
      return e == t + "";
    case Ol:
      var o = $l;
    case Rl:
      var l = n & El;
      if (o || (o = _l), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      n |= Al, i.set(e, t);
      var f = gl(o(e), o(t), n, a, s, i);
      return i.delete(e), f;
    case Fl:
      if (Ie)
        return Ie.call(e) == Ie.call(t);
  }
  return !1;
}
var Dl = Ll;
function Ml(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Rr = Ml, Bl = Rr, jl = N;
function Ul(e, t, r) {
  var n = t(e);
  return jl(e) ? n : Bl(n, r(e));
}
var xr = Ul;
function Hl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Kl = Hl;
function ql() {
  return [];
}
var Fr = ql, Gl = Kl, zl = Fr, kl = Object.prototype, Wl = kl.propertyIsEnumerable, Ht = Object.getOwnPropertySymbols, Jl = Ht ? function(e) {
  return e == null ? [] : (e = Object(e), Gl(Ht(e), function(t) {
    return Wl.call(e, t);
  }));
} : zl, Ir = Jl, Vl = xr, Xl = Ir, Yl = at;
function Zl(e) {
  return Vl(e, Yl, Xl);
}
var Ql = Zl, Kt = Ql, ef = 1, tf = Object.prototype, rf = tf.hasOwnProperty;
function nf(e, t, r, n, a, s) {
  var i = r & ef, o = Kt(e), l = o.length, u = Kt(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var p = l; p--; ) {
    var y = o[p];
    if (!(i ? y in t : rf.call(t, y)))
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
    var O = e.constructor, C = t.constructor;
    O != C && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof C == "function" && C instanceof C) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var af = nf, Ne = Cr, sf = Pr, of = Dl, uf = af, qt = Sr, Gt = N, zt = Qe, cf = rt, lf = 1, kt = "[object Arguments]", Wt = "[object Array]", ie = "[object Object]", ff = Object.prototype, Jt = ff.hasOwnProperty;
function df(e, t, r, n, a, s) {
  var i = Gt(e), o = Gt(t), l = i ? Wt : qt(e), u = o ? Wt : qt(t);
  l = l == kt ? ie : l, u = u == kt ? ie : u;
  var f = l == ie, p = u == ie, y = l == u;
  if (y && zt(e)) {
    if (!zt(t))
      return !1;
    i = !0, f = !1;
  }
  if (y && !f)
    return s || (s = new Ne()), i || cf(e) ? sf(e, t, r, n, a, s) : of(e, t, l, r, n, a, s);
  if (!(r & lf)) {
    var v = f && Jt.call(e, "__wrapped__"), d = p && Jt.call(t, "__wrapped__");
    if (v || d) {
      var h = v ? e.value() : e, _ = d ? t.value() : t;
      return s || (s = new Ne()), a(h, _, r, n, s);
    }
  }
  return y ? (s || (s = new Ne()), uf(e, t, r, n, a, s)) : !1;
}
var pf = df, hf = pf, Vt = te;
function Nr(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Vt(e) && !Vt(t) ? e !== e && t !== t : hf(e, t, r, n, Nr, a);
}
var Lr = Nr, vf = Cr, yf = Lr, mf = 1, bf = 2;
function gf(e, t, r, n) {
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
      var p = new vf();
      if (n)
        var y = n(u, f, l, e, t, p);
      if (!(y === void 0 ? yf(f, u, mf | bf, n, p) : y))
        return !1;
    }
  }
  return !0;
}
var $f = gf, _f = H;
function Ef(e) {
  return e === e && !_f(e);
}
var Dr = Ef, Af = Dr, wf = at;
function Sf(e) {
  for (var t = wf(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Af(a)];
  }
  return t;
}
var Tf = Sf;
function Of(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Mr = Of, Cf = $f, Pf = Tf, Rf = Mr;
function xf(e) {
  var t = Pf(e);
  return t.length == 1 && t[0][2] ? Rf(t[0][0], t[0][1]) : function(r) {
    return r === e || Cf(r, e, t);
  };
}
var Ff = xf, If = N, Nf = be, Lf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Df = /^\w*$/;
function Mf(e, t) {
  if (If(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Nf(e) ? !0 : Df.test(e) || !Lf.test(e) || t != null && e in Object(t);
}
var lt = Mf, Br = ct, Bf = "Expected a function";
function ft(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bf);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (ft.Cache || Br)(), r;
}
ft.Cache = Br;
var jf = ft, Uf = jf, Hf = 500;
function Kf(e) {
  var t = Uf(e, function(n) {
    return r.size === Hf && r.clear(), n;
  }), r = t.cache;
  return t;
}
var qf = Kf, Gf = qf, zf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kf = /\\(\\)?/g, Wf = Gf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zf, function(r, n, a, s) {
    t.push(a ? s.replace(kf, "$1") : n || r);
  }), t;
}), Jf = Wf, Xt = ye, Vf = Or, Xf = N, Yf = be, Zf = 1 / 0, Yt = Xt ? Xt.prototype : void 0, Zt = Yt ? Yt.toString : void 0;
function jr(e) {
  if (typeof e == "string")
    return e;
  if (Xf(e))
    return Vf(e, jr) + "";
  if (Yf(e))
    return Zt ? Zt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Zf ? "-0" : t;
}
var Qf = jr, ed = Qf;
function td(e) {
  return e == null ? "" : ed(e);
}
var rd = td, nd = N, ad = lt, sd = Jf, id = rd;
function od(e, t) {
  return nd(e) ? e : ad(e, t) ? [e] : sd(id(e));
}
var Ae = od, ud = be, cd = 1 / 0;
function ld(e) {
  if (typeof e == "string" || ud(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -cd ? "-0" : t;
}
var re = ld, fd = Ae, dd = re;
function pd(e, t) {
  t = fd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[dd(t[r++])];
  return r && r == n ? e : void 0;
}
var dt = pd, hd = dt;
function vd(e, t, r) {
  var n = e == null ? void 0 : hd(e, t);
  return n === void 0 ? r : n;
}
var yd = vd;
function md(e, t) {
  return e != null && t in Object(e);
}
var bd = md, gd = Ae, $d = Ze, _d = N, Ed = et, Ad = tt, wd = re;
function Sd(e, t, r) {
  t = gd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = wd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Ad(a) && Ed(i, a) && (_d(e) || $d(e)));
}
var Td = Sd, Od = bd, Cd = Td;
function Pd(e, t) {
  return e != null && Cd(e, t, Od);
}
var Rd = Pd, xd = Lr, Fd = yd, Id = Rd, Nd = lt, Ld = Dr, Dd = Mr, Md = re, Bd = 1, jd = 2;
function Ud(e, t) {
  return Nd(e) && Ld(t) ? Dd(Md(e), t) : function(r) {
    var n = Fd(r, e);
    return n === void 0 && n === t ? Id(r, e) : xd(t, n, Bd | jd);
  };
}
var Hd = Ud;
function Kd(e) {
  return function(t) {
    return t?.[e];
  };
}
var qd = Kd, Gd = dt;
function zd(e) {
  return function(t) {
    return Gd(t, e);
  };
}
var kd = zd, Wd = qd, Jd = kd, Vd = lt, Xd = re;
function Yd(e) {
  return Vd(e) ? Wd(Xd(e)) : Jd(e);
}
var Zd = Yd, Qd = Ff, ep = Hd, tp = st, rp = N, np = Zd;
function ap(e) {
  return typeof e == "function" ? e : e == null ? tp : typeof e == "object" ? rp(e) ? ep(e[0], e[1]) : Qd(e) : np(e);
}
var sp = ap, ip = K, op = function() {
  try {
    var e = ip(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), up = op, Qt = up;
function cp(e, t, r) {
  t == "__proto__" && Qt ? Qt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var lp = cp, fp = lp, dp = ut, pp = Object.prototype, hp = pp.hasOwnProperty;
function vp(e, t, r) {
  var n = e[t];
  (!(hp.call(e, t) && dp(n, r)) || r === void 0 && !(t in e)) && fp(e, t, r);
}
var yp = vp, mp = yp, bp = Ae, gp = et, er = H, $p = re;
function _p(e, t, r, n) {
  if (!er(e))
    return e;
  t = bp(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var l = $p(t[a]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != i) {
      var f = o[l];
      u = n ? n(f, l, o) : void 0, u === void 0 && (u = er(f) ? f : gp(t[a + 1]) ? [] : {});
    }
    mp(o, l, u), o = o[l];
  }
  return e;
}
var Ep = _p, Ap = dt, wp = Ep, Sp = Ae;
function Tp(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = Ap(e, i);
    r(o, i) && wp(s, Sp(i, e), o);
  }
  return s;
}
var Op = Tp, Cp = mr, Pp = Cp(Object.getPrototypeOf, Object), Rp = Pp, xp = Rr, Fp = Rp, Ip = Ir, Np = Fr, Lp = Object.getOwnPropertySymbols, Dp = Lp ? function(e) {
  for (var t = []; e; )
    xp(t, Ip(e)), e = Fp(e);
  return t;
} : Np, Mp = Dp, Bp = xr, jp = Mp, Up = Tr;
function Hp(e) {
  return Bp(e, Up, jp);
}
var Kp = Hp, qp = Or, Gp = sp, zp = Op, kp = Kp;
function Wp(e, t) {
  if (e == null)
    return {};
  var r = qp(kp(e), function(n) {
    return [n];
  });
  return t = Gp(t), zp(e, r, function(n, a) {
    return t(n, a[0]);
  });
}
var Jp = Wp;
const Vp = /* @__PURE__ */ U(Jp);
function Ur(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xp } = Object.prototype, { getPrototypeOf: pt } = Object, we = ((e) => (t) => {
  const r = Xp.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => we(t) === e), Se = (e) => (t) => typeof t === e, { isArray: V } = Array, Q = Se("undefined");
function Yp(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hr = L("ArrayBuffer");
function Zp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hr(e.buffer), t;
}
const Qp = Se("string"), x = Se("function"), Kr = Se("number"), Te = (e) => e !== null && typeof e == "object", eh = (e) => e === !0 || e === !1, oe = (e) => {
  if (we(e) !== "object")
    return !1;
  const t = pt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, th = L("Date"), rh = L("File"), nh = L("Blob"), ah = L("FileList"), sh = (e) => Te(e) && x(e.pipe), ih = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = we(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, oh = L("URLSearchParams"), uh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ne(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), V(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let o;
    for (n = 0; n < i; n++)
      o = s[n], t.call(null, e[o], o, e);
  }
}
function qr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const Gr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), zr = (e) => !Q(e) && e !== Gr;
function ke() {
  const { caseless: e } = zr(this) && this || {}, t = {}, r = (n, a) => {
    const s = e && qr(t, a) || a;
    oe(t[s]) && oe(n) ? t[s] = ke(t[s], n) : oe(n) ? t[s] = ke({}, n) : V(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && ne(arguments[n], r);
  return t;
}
const ch = (e, t, r, { allOwnKeys: n } = {}) => (ne(t, (a, s) => {
  r && x(a) ? e[s] = Ur(a, r) : e[s] = a;
}, { allOwnKeys: n }), e), lh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), fh = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, dh = (e, t, r, n) => {
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
}, ph = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, hh = (e) => {
  if (!e)
    return null;
  if (V(e))
    return e;
  let t = e.length;
  if (!Kr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, vh = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && pt(Uint8Array)), yh = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, mh = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, bh = L("HTMLFormElement"), gh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), tr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $h = L("RegExp"), kr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ne(r, (a, s) => {
    t(a, s, e) !== !1 && (n[s] = a);
  }), Object.defineProperties(e, n);
}, _h = (e) => {
  kr(e, (t, r) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (x(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Eh = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((s) => {
      r[s] = !0;
    });
  };
  return V(e) ? n(e) : n(String(e).split(t)), r;
}, Ah = () => {
}, wh = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Le = "abcdefghijklmnopqrstuvwxyz", rr = "0123456789", Wr = {
  DIGIT: rr,
  ALPHA: Le,
  ALPHA_DIGIT: Le + Le.toUpperCase() + rr
}, Sh = (e = 16, t = Wr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Th(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Oh = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (Te(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const s = V(n) ? [] : {};
        return ne(n, (i, o) => {
          const l = r(i, a + 1);
          !Q(l) && (s[o] = l);
        }), t[a] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ch = L("AsyncFunction"), Ph = (e) => e && (Te(e) || x(e)) && x(e.then) && x(e.catch), c = {
  isArray: V,
  isArrayBuffer: Hr,
  isBuffer: Yp,
  isFormData: ih,
  isArrayBufferView: Zp,
  isString: Qp,
  isNumber: Kr,
  isBoolean: eh,
  isObject: Te,
  isPlainObject: oe,
  isUndefined: Q,
  isDate: th,
  isFile: rh,
  isBlob: nh,
  isRegExp: $h,
  isFunction: x,
  isStream: sh,
  isURLSearchParams: oh,
  isTypedArray: vh,
  isFileList: ah,
  forEach: ne,
  merge: ke,
  extend: ch,
  trim: uh,
  stripBOM: lh,
  inherits: fh,
  toFlatObject: dh,
  kindOf: we,
  kindOfTest: L,
  endsWith: ph,
  toArray: hh,
  forEachEntry: yh,
  matchAll: mh,
  isHTMLForm: bh,
  hasOwnProperty: tr,
  hasOwnProp: tr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kr,
  freezeMethods: _h,
  toObjectSet: Eh,
  toCamelCase: gh,
  noop: Ah,
  toFiniteNumber: wh,
  findKey: qr,
  global: Gr,
  isContextDefined: zr,
  ALPHABET: Wr,
  generateString: Sh,
  isSpecCompliantForm: Th,
  toJSONObject: Oh,
  isAsyncFn: Ch,
  isThenable: Ph
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
const Jr = m.prototype, Vr = {};
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
  Vr[e] = { value: e };
});
Object.defineProperties(m, Vr);
Object.defineProperty(Jr, "isAxiosError", { value: !0 });
m.from = (e, t, r, n, a, s) => {
  const i = Object.create(Jr);
  return c.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), m.call(i, e.message, t, r, n, a), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Rh = null;
function We(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Xr(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nr(e, t, r) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Xr(a), !r && s ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function xh(e) {
  return c.isArray(e) && !e.some(We);
}
const Fh = c.toFlatObject(c, {}, null, function(t) {
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
      else if (c.isArray(d) && xh(d) || (c.isFileList(d) || c.endsWith(h, "[]")) && (g = c.toArray(d)))
        return h = Xr(h), g.forEach(function(T, O) {
          !(c.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? nr([h], O, s) : i === null ? h : h + "[]",
            u(T)
          );
        }), !1;
    }
    return We(d) ? !0 : (t.append(nr(_, h, s), u(d)), !1);
  }
  const p = [], y = Object.assign(Fh, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: We
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
function ar(e) {
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
const Yr = ht.prototype;
Yr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Yr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ar);
  } : ar;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Ih(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Zr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ih, a = r && r.serialize;
  let s;
  if (a ? s = a(t, r) : s = c.isURLSearchParams(t) ? t.toString() : new ht(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Nh {
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
const sr = Nh, Qr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Lh = typeof URLSearchParams < "u" ? URLSearchParams : ht, Dh = typeof FormData < "u" ? FormData : null, Mh = typeof Blob < "u" ? Blob : null, Bh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), jh = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), F = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Lh,
    FormData: Dh,
    Blob: Mh
  },
  isStandardBrowserEnv: Bh,
  isStandardBrowserWebWorkerEnv: jh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Uh(e, t) {
  return Oe(e, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, s) {
      return F.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Hh(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Kh(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let s;
  for (n = 0; n < a; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function en(e) {
  function t(r, n, a, s) {
    let i = r[s++];
    const o = Number.isFinite(+i), l = s >= r.length;
    return i = !i && c.isArray(a) ? a.length : i, l ? (c.hasOwnProp(a, i) ? a[i] = [a[i], n] : a[i] = n, !o) : ((!a[i] || !c.isObject(a[i])) && (a[i] = []), t(r, n, a[i], s) && c.isArray(a[i]) && (a[i] = Kh(a[i])), !o);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, a) => {
      t(Hh(n), a, r, 0);
    }), r;
  }
  return null;
}
const qh = {
  "Content-Type": void 0
};
function Gh(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ce = {
  transitional: Qr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, s = c.isObject(t);
    if (s && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return a && a ? JSON.stringify(en(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Uh(t, this.formSerializer).toString();
      if ((o = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Oe(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (r.setContentType("application/json", !1), Gh(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ce.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
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
  Ce.headers[t] = {};
});
c.forEach(["post", "put", "patch"], function(t) {
  Ce.headers[t] = c.merge(qh);
});
const vt = Ce, zh = c.toObjectSet([
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
]), kh = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), r = i.substring(0, a).trim().toLowerCase(), n = i.substring(a + 1).trim(), !(!r || t[r] && zh[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ir = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ue) : String(e);
}
function Wh(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Jh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Vh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Xh(e, t) {
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
let Pe = class {
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
    return c.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : c.isString(t) && (t = t.trim()) && !Jh(t) ? i(kh(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = Y(t), t) {
      const n = c.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return Wh(a);
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
      const o = t ? Vh(s) : String(s).trim();
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
    const n = (this[ir] = this[ir] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(i) {
      const o = Y(i);
      n[o] || (Xh(a, i), n[o] = !0);
    }
    return c.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(Pe.prototype);
c.freezeMethods(Pe);
const D = Pe;
function Me(e, t) {
  const r = this || vt, n = t || r, a = D.from(n.headers);
  let s = n.data;
  return c.forEach(e, function(o) {
    s = o.call(r, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function tn(e) {
  return !!(e && e.__CANCEL__);
}
function ae(e, t, r) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(ae, m, {
  __CANCEL__: !0
});
function Yh(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Zh = F.isStandardBrowserEnv ? (
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
function Qh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ev(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function rn(e, t) {
  return e && !Qh(t) ? ev(e, t) : t;
}
const tv = F.isStandardBrowserEnv ? (
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
function rv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nv(e, t) {
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
function or(e, t) {
  let r = 0;
  const n = nv(50, 250);
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
const av = typeof XMLHttpRequest < "u", sv = av && function(e) {
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
    const f = rn(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Zr(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
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
      Yh(function(g) {
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
      const h = e.transitional || Qr;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new m(
        d,
        h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, F.isStandardBrowserEnv) {
      const v = (e.withCredentials || tv(f)) && e.xsrfCookieName && Zh.read(e.xsrfCookieName);
      v && s.set(e.xsrfHeaderName, v);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && c.forEach(s.toJSON(), function(d, h) {
      u.setRequestHeader(h, d);
    }), c.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", or(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", or(e.onUploadProgress)), (e.cancelToken || e.signal) && (o = (v) => {
      u && (n(!v || v.type ? new ae(null, e, u) : v), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(o), e.signal && (e.signal.aborted ? o() : e.signal.addEventListener("abort", o)));
    const y = rv(f);
    if (y && F.protocols.indexOf(y) === -1) {
      n(new m("Unsupported protocol " + y + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, ce = {
  http: Rh,
  xhr: sv
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
const iv = {
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
function ur(e) {
  return Be(e), e.headers = D.from(e.headers), e.data = Me.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), iv.getAdapter(e.adapter || vt.adapter)(e).then(function(n) {
    return Be(e), n.data = Me.call(
      e,
      e.transformResponse,
      n
    ), n.headers = D.from(n.headers), n;
  }, function(n) {
    return tn(n) || (Be(e), n && n.response && (n.response.data = Me.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = D.from(n.response.headers))), Promise.reject(n);
  });
}
const cr = (e) => e instanceof D ? e.toJSON() : e;
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
    headers: (u, f) => a(cr(u), cr(f), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const p = l[f] || a, y = p(e[f], t[f], f);
    c.isUndefined(y) && p !== o || (r[f] = y);
  }), r;
}
const nn = "1.4.0", yt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const lr = {};
yt.transitional = function(t, r, n) {
  function a(s, i) {
    return "[Axios v" + nn + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, o) => {
    if (t === !1)
      throw new m(
        a(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !lr[i] && (lr[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, o) : !0;
  };
};
function ov(e, t, r) {
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
const Je = {
  assertOptions: ov,
  validators: yt
}, M = Je.validators;
let he = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new sr(),
      response: new sr()
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
    n !== void 0 && Je.assertOptions(n, {
      silentJSONParsing: M.transitional(M.boolean),
      forcedJSONParsing: M.transitional(M.boolean),
      clarifyTimeoutError: M.transitional(M.boolean)
    }, !1), a != null && (c.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Je.assertOptions(a, {
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
      const d = [ur.bind(this), void 0];
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
      f = ur.call(this, v);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, y = u.length; p < y; )
      f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = q(this.defaults, t);
    const r = rn(t.baseURL, t.url);
    return Zr(r, t.params, t.paramsSerializer);
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
let uv = class an {
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
      token: new an(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
const cv = uv;
function lv(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function fv(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Ve = {
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
Object.entries(Ve).forEach(([e, t]) => {
  Ve[t] = e;
});
const dv = Ve;
function sn(e) {
  const t = new le(e), r = Ur(le.prototype.request, t);
  return c.extend(r, le.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return sn(q(e, a));
  }, r;
}
const w = sn(vt);
w.Axios = le;
w.CanceledError = ae;
w.CancelToken = cv;
w.isCancel = tn;
w.VERSION = nn;
w.toFormData = Oe;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = lv;
w.isAxiosError = fv;
w.mergeConfig = q;
w.AxiosHeaders = D;
w.formToJSON = (e) => en(c.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = dv;
w.default = w;
const pv = w, {
  Axios: wv,
  AxiosError: Sv,
  CanceledError: Tv,
  isCancel: hv,
  CancelToken: Ov,
  VERSION: Cv,
  all: Pv,
  Cancel: Rv,
  isAxiosError: xv,
  spread: Fv,
  toFormData: Iv,
  AxiosHeaders: Nv,
  HttpStatusCode: Lv,
  formToJSON: Dv,
  mergeConfig: Mv
} = pv;
function vv(e, t, r, n, a, s, i, o, l, u, f, p, y) {
  const v = B(n.value);
  ve(n.value, (S) => {
    v.value = S;
  });
  const d = A(() => v.value.dependsOn), h = A(() => v.value.attribute), _ = A(
    () => v.value.dependentComponentKey
  ), g = B(Si((S) => S(), 50)), $ = B(null), T = B({}), O = B({}), { editMode: C } = Gs(
    i,
    f,
    p
  ), b = A(() => y?.value ? y.value : C.value === "update-attached" ? `/nova-api/${s.value}/${i.value}/update-pivot-fields/${f?.value}/${p?.value}` : C.value === "attach" ? `/nova-api/${s.value}/${i.value}/creation-pivot-fields/${f?.value}` : C.value === "update" ? `/nova-api/${s.value}/${i.value}/update-fields` : `/nova-api/${s.value}/creation-fields`), R = async () => {
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
        params: Vp(
          {
            editing: !0,
            editMode: C.value,
            viaResource: l?.value,
            viaResourceId: u?.value,
            viaRelationship: o?.value,
            field: h.value,
            component: _.value
          },
          Fs
        ),
        signal: $.value.signal
      });
    } catch (P) {
      if (hv(P))
        return;
      throw P;
    }
    v.value = S.data, v.value.value = v.value.value ?? n.value.value ?? t.value;
  };
  return fr(() => {
    Nt(d.value) || Lt(d.value, (S, P) => {
      O.value[P] = (Re) => {
        T.value[P] = Re, g.value(() => {
          R().catch();
        });
      }, T.value[P] = S, Nova.$on(
        je(P, "change", a.value),
        O.value[P]
      );
    });
  }), Xe(() => {
    $.value !== null && $.value.abort(), Nt(O.value) || Lt(O.value, (S, P) => {
      Nova.$off(
        je(P, "change", a.value),
        S
      );
    });
  }), { currentField: v };
}
export {
  je as getFieldAttributeEventName,
  vv as useDependentFormField,
  gv as useDetailField,
  Ue as useFieldAttributeEventName,
  Vs as useFieldChangeEvent,
  zs as useFieldFill,
  ks as useFieldHelpText,
  _r as useFieldLabel,
  Js as useFieldValidationErrors,
  it as useFieldValue,
  Xs as useFieldValueEvent,
  Er as useFieldVisibilityEvent,
  Gs as useFormEditMode,
  _v as useFormField,
  $v as useIndexField,
  mv as useLocalization,
  bv as useTheme
};
//# sourceMappingURL=nova-vue3-helper.js.map
