(function (g) {
  var window = this;
  ("use strict");
  var a8 = function (a) {
      g.Mo(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36)
      );
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Fga(a.B, b, c);
    },
    Lzb = function (a) {
      if (a instanceof g.jt) return a;
      if ("function" == typeof a.Lk) return a.Lk(!1);
      if (g.ab(a)) {
        var b = 0,
          c = new g.jt();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.y2;
            if (b in a) return g.kt(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Mzb = function (a, b, c) {
      if (g.ab(a)) g.bc(a, b, c);
      else
        for (a = Lzb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    Nzb = function (a, b) {
      var c = [];
      Mzb(
        b,
        function (d) {
          try {
            var e = g.Dv.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.wla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    Ozb = function (a, b) {
      Nzb(a, b).forEach(function (c) {
        g.Dv.prototype.remove.call(this, c);
      }, a);
    },
    Pzb = function (a) {
      if (a.ma) {
        if (a.ma.locationOverrideToken)
          return { locationOverrideToken: a.ma.locationOverrideToken };
        if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7)
          return { latitudeE7: a.ma.latitudeE7, longitudeE7: a.ma.longitudeE7 };
      }
      return null;
    },
    Qzb = function (a, b) {
      g.Fb(a, b) || a.push(b);
    },
    Rzb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    Szb = function (a, b) {
      return g.kd(a, b);
    },
    Tzb = function (a) {
      try {
        return g.Ta.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Ta.JSON)
        try {
          return g.Ta.JSON.parse(a);
        } catch (b) {}
      return Tzb(a);
    },
    Uzb = function (a) {
      if (a.lm && "function" == typeof a.lm) return a.lm();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (g.ab(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.gd(a);
    },
    Vzb = function (a) {
      if (a.yp && "function" == typeof a.yp) return a.yp();
      if (!a.lm || "function" != typeof a.lm) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (g.ab(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return g.id(a);
        }
      }
    },
    Wzb = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.ab(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, void 0);
      else
        for (var c = Vzb(a), d = Uzb(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    },
    Xzb = function (a, b, c, d) {
      var e = new g.Eo(null);
      a && g.Fo(e, a);
      b && g.Go(e, b);
      c && g.Ho(e, c);
      d && (e.C = d);
      return e;
    },
    Yzb = function () {
      this.j = d8();
      this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Qc: 3,
        Pc: "channel_type",
      });
    },
    Zzb = function (a, b) {
      a.j.sj("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    $zb = function () {
      this.j = d8();
      this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Qc: 3,
        Pc: "channel_type",
      });
    },
    aAb = function (a, b) {
      a.j.sj("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    bAb = function () {
      this.j = d8();
      this.j.Mh(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Qc: 3, Pc: "channel_type" }
      );
    },
    cAb = function (a, b) {
      a.j.sj(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    dAb = function () {
      this.j = d8();
      this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/error", {
        Qc: 3,
        Pc: "channel_type",
      });
    },
    eAb = function (a, b) {
      a.j.sj("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    fAb = function () {
      this.j = d8();
      this.j.Mh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    gAb = function () {
      this.j = d8();
      this.j.Mh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    kAb = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Iv();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        hAb(this, a.capabilities || ""),
        iAb(this, a.compatibleSenderThemes || ""),
        jAb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    hAb = function (a, b) {
      a.capabilities.clear();
      g.ot(b.split(","), g.jb(Szb, lAb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    iAb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.ot(b.split(","), g.jb(Szb, mAb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    jAb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    e8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    f8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    nAb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    oAb = function (a) {
      return new e8(a);
    },
    pAb = function (a) {
      return Array.isArray(a) ? g.Er(a, oAb) : [];
    },
    g8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    qAb = function (a) {
      return Array.isArray(a) ? "[" + g.Er(a, g8).join(",") + "]" : "null";
    },
    rAb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    sAb = function (a) {
      return g.Er(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    tAb = function (a, b) {
      return g.Db(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    h8 = function (a, b) {
      return g.Db(a, function (c) {
        return f8(c, b);
      });
    },
    uAb = function () {
      var a = (0, g.DC)();
      a && Ozb(a, a.j.Lk(!0));
    },
    i8 = function () {
      var a = g.FC("yt-remote-connected-devices") || [];
      g.Xb(a);
      return a;
    },
    vAb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Er(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    wAb = function (a) {
      g.EC("yt-remote-connected-devices", a, 86400);
    },
    j8 = function () {
      if (xAb) return xAb;
      var a = g.FC("yt-remote-device-id");
      a || ((a = rAb()), g.EC("yt-remote-device-id", a, 31536e3));
      for (var b = i8(), c = 1, d = a; g.Fb(b, d); ) c++, (d = a + "#" + c);
      return (xAb = d);
    },
    yAb = function () {
      var a = i8(),
        b = j8();
      g.HC() && g.$b(a, b);
      a = vAb(a);
      if (0 == a.length)
        try {
          g.wpa("remote_sid");
        } catch (c) {}
      else
        try {
          g.WB("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    zAb = function () {
      return g.FC("yt-remote-session-browser-channel");
    },
    AAb = function () {
      return g.FC("yt-remote-local-screens") || [];
    },
    BAb = function () {
      g.EC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    CAb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Er(AAb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Er(a, function (d) {
          return d.loungeToken;
        });
      g.Fr(c, function (d) {
        return !g.Fb(b, d);
      }) && BAb();
      g.EC("yt-remote-local-screens", a, 31536e3);
    },
    k8 = function (a) {
      a ||
        (g.GC("yt-remote-session-screen-id"),
        g.GC("yt-remote-session-video-id"));
      yAb();
      a = i8();
      g.Ib(a, j8());
      wAb(a);
    },
    DAb = function () {
      if (!l8) {
        var a = g.Qv();
        a && (l8 = new g.Av(a));
      }
    },
    EAb = function () {
      DAb();
      return l8 ? !!l8.get("yt-remote-use-staging-server") : !1;
    },
    m8 = function (a, b) {
      g.rE[a] = !0;
      var c = g.pE();
      c && c.publish.apply(c, arguments);
      g.rE[a] = !1;
    },
    FAb = function () {},
    d8 = function () {
      if (!n8) {
        n8 = new g.Ag(new FAb());
        var a = g.MB("client_streamz_web_flush_count", -1);
        -1 !== a && (n8.D = a);
      }
      return n8;
    },
    GAb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    HAb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    IAb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    o8 = function (a) {
      a.length
        ? JAb(a.shift(), function () {
            o8(a);
          })
        : KAb();
    },
    LAb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    JAb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.We(d, g.Ew(a));
      (document.head || document.documentElement).appendChild(d);
    },
    MAb = function () {
      var a = GAb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    KAb = function () {
      var a = IAb();
      a && a(!1, "No cast extension found");
    },
    OAb = function () {
      if (NAb) {
        var a = 2,
          b = IAb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        JAb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          KAb,
          c
        );
      }
    },
    PAb = function () {
      OAb();
      var a = MAb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    RAb = function () {
      OAb();
      var a = MAb();
      a.push.apply(a, g.pa(QAb.map(LAb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    p8 = function (a, b, c) {
      g.I.call(this);
      this.K = null != c ? (0, g.ib)(a, c) : a;
      this.hj = b;
      this.G = (0, g.ib)(this.g3, this);
      this.j = !1;
      this.B = 0;
      this.C = this.rd = null;
      this.D = [];
    },
    q8 = function (a, b, c) {
      g.I.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.hj = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.rd = null;
    },
    SAb = function (a) {
      a.rd = g.yg(function () {
        a.rd = null;
        a.j && !a.B && ((a.j = !1), SAb(a));
      }, a.hj);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    r8 = function () {},
    TAb = function () {
      g.Ab.call(this, "p");
    },
    UAb = function () {
      g.Ab.call(this, "o");
    },
    WAb = function () {
      return (VAb = VAb || new g.Ld());
    },
    XAb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    s8 = function (a) {
      var b = WAb();
      b.dispatchEvent(new XAb(b, a));
    },
    YAb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    t8 = function (a) {
      var b = WAb();
      b.dispatchEvent(new YAb(b, a));
    },
    ZAb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    u8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    v8 = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Mc = c;
      this.kc = d || 1;
      this.Za = new g.Ep(this);
      this.ub = 45e3;
      a = g.kS ? 125 : void 0;
      this.ib = new g.xg(a);
      this.Na = null;
      this.C = !1;
      this.Y = this.fb = this.Z = this.Ra = this.Ca = this.Ob = this.ma = null;
      this.va = [];
      this.j = null;
      this.K = 0;
      this.N = this.Ia = null;
      this.Db = -1;
      this.Ma = !1;
      this.tb = 0;
      this.Xa = null;
      this.Vb = this.Wa = this.Pb = this.Ea = !1;
      this.B = new $Ab();
    },
    $Ab = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    bBb = function (a, b, c) {
      a.Ra = 1;
      a.Z = a8(b.clone());
      a.Y = c;
      a.Ea = !0;
      aBb(a, null);
    },
    aBb = function (a, b) {
      a.Ca = Date.now();
      x8(a);
      a.fb = a.Z.clone();
      b8(a.fb, "t", a.kc);
      a.K = 0;
      var c = a.G.Ra;
      a.B = new $Ab();
      a.j = cBb(a.G, c ? b : null, !a.Y);
      0 < a.tb && (a.Xa = new q8((0, g.ib)(a.tT, a, a.j), a.tb));
      a.Za.Ta(a.j, "readystatechange", a.m3);
      b = a.Na ? g.pd(a.Na) : {};
      a.Y
        ? (a.Ia || (a.Ia = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.fb, a.Ia, a.Y, b))
        : ((a.Ia = "GET"), a.j.send(a.fb, a.Ia, null, b));
      s8(1);
    },
    dBb = function (a) {
      return a.j ? "GET" == a.Ia && 2 != a.Ra && a.G.cf : !1;
    },
    iBb = function (a, b, c) {
      for (var d = !0, e; !a.Ma && a.K < c.length; )
        if (((e = eBb(a, c)), e == fBb)) {
          4 == b && ((a.N = 4), t8(14), (d = !1));
          break;
        } else if (e == gBb) {
          a.N = 4;
          t8(15);
          d = !1;
          break;
        } else hBb(a, e);
      dBb(a) && 0 != a.K && ((a.B.j = a.B.j.slice(a.K)), (a.K = 0));
      4 != b || 0 != c.length || a.B.B || ((a.N = 1), t8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.Vb && ((a.Vb = !0), a.G.qQ(a)) : (y8(a), z8(a));
    },
    eBb = function (a, b) {
      var c = a.K,
        d = b.indexOf("\n", c);
      if (-1 == d) return fBb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return gBb;
      d += 1;
      if (d + c > b.length) return fBb;
      b = b.slice(d, d + c);
      a.K = d + c;
      return b;
    },
    x8 = function (a) {
      a.Ob = Date.now() + a.ub;
      jBb(a, a.ub);
    },
    jBb = function (a, b) {
      if (null != a.ma) throw Error("WatchDog timer not null");
      a.ma = u8((0, g.ib)(a.j3, a), b);
    },
    A8 = function (a) {
      a.ma && (g.Ta.clearTimeout(a.ma), (a.ma = null));
    },
    z8 = function (a) {
      a.G.Vg() || a.Ma || kBb(a.G, a);
    },
    y8 = function (a) {
      A8(a);
      g.vb(a.Xa);
      a.Xa = null;
      a.ib.stop();
      a.Za.Uf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    hBb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Lh && (c.j == a || lBb(c.B, a)))
          if (!a.Wa && lBb(c.B, a) && 3 == c.Lh) {
            try {
              var d = c.Hf.j.parse(b);
            } catch (x) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Ca + 3e3 < a.Ca) B8(c), C8(c);
                      else break a;
                    mBb(c);
                    t8(18);
                  }
                }
              else
                (c.Zd = e[1]),
                  0 < c.Zd - c.Xa &&
                    37500 > e[2] &&
                    c.Wa &&
                    0 == c.va &&
                    !c.ma &&
                    (c.ma = u8((0, g.ib)(c.n3, c), 6e3));
              if (1 >= nBb(c.B) && c.Zc) {
                try {
                  c.Zc();
                } catch (x) {}
                c.Zc = void 0;
              }
            } else D8(c, 11);
          } else if (((a.Wa || c.j == a) && B8(c), !g.fc(b)))
            for (e = c.Hf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Xa = f[0];
              f = f[1];
              if (2 == c.Lh)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.Vb = f[2];
                  var h = f[3];
                  null != h && (c.uT = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.Za = 1.5 * l);
                  d = c;
                  var m = a.CO();
                  if (m) {
                    var n = g.Pn(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (oBb(p, p.B), (p.B = null)));
                    }
                    if (d.Ea) {
                      var q = g.Pn(m, "X-HTTP-Session-Id");
                      q && ((d.Re = q), g.Mo(d.Na, d.Ea, q));
                    }
                  }
                  c.Lh = 3;
                  c.G && c.G.AT();
                  c.Kc && (c.Md = Date.now() - a.Ca);
                  d = c;
                  var r = a;
                  d.Cd = pBb(d, d.Ra ? d.Vb : null, d.kc);
                  if (r.Wa) {
                    qBb(d.B, r);
                    var t = r,
                      v = d.Za;
                    v && t.setTimeout(v);
                    t.ma && (A8(t), x8(t));
                    d.j = r;
                  } else rBb(d);
                  0 < c.C.length && E8(c);
                } else ("stop" != f[0] && "close" != f[0]) || D8(c, 7);
              else
                3 == c.Lh &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? D8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.zT(f),
                  (c.va = 0));
            }
        s8(4);
      } catch (x) {}
    },
    sBb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    tBb = function (a) {
      this.G = a || 10;
      g.Ta.PerformanceNavigationTiming
        ? ((a = g.Ta.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Ta.chrome &&
            g.Ta.chrome.loadTimes &&
            g.Ta.chrome.loadTimes() &&
            g.Ta.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    uBb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    nBb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    lBb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    oBb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    qBb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    vBb = function (a) {
      if (null != a.B) return a.C.concat(a.B.va);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
        return b;
      }
      return g.Lb(a.C);
    },
    wBb = function (a, b) {
      var c = new v8();
      if (g.Ta.Image) {
        var d = new Image();
        d.onload = g.jb(F8, c, "TestLoadImage: loaded", !0, b, d);
        d.onerror = g.jb(F8, c, "TestLoadImage: error", !1, b, d);
        d.onabort = g.jb(F8, c, "TestLoadImage: abort", !1, b, d);
        d.ontimeout = g.jb(F8, c, "TestLoadImage: timeout", !1, b, d);
        g.Ta.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    xBb = function (a, b) {
      var c = new v8(),
        d = new AbortController(),
        e = setTimeout(function () {
          d.abort();
          F8(c, "TestPingServer: timeout", !1, b);
        }, 1e4);
      fetch(a, { signal: d.signal })
        .then(function (f) {
          clearTimeout(e);
          f.ok
            ? F8(c, "TestPingServer: ok", !0, b)
            : F8(c, "TestPingServer: server error", !1, b);
        })
        .catch(function () {
          clearTimeout(e);
          F8(c, "TestPingServer: error", !1, b);
        });
    },
    F8 = function (a, b, c, d, e) {
      try {
        e &&
          ((e.onload = null),
          (e.onerror = null),
          (e.onabort = null),
          (e.ontimeout = null)),
          d(c);
      } catch (f) {}
    },
    yBb = function () {
      this.j = new r8();
    },
    zBb = function (a, b, c) {
      var d = c || "";
      try {
        Wzb(a, function (e, f) {
          var h = e;
          g.bb(e) && (h = g.Nm(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    G8 = function (a, b, c) {
      return c && c.w8 ? c.w8[a] || b : b;
    },
    ABb = function (a) {
      this.C = [];
      this.Vb =
        this.Cd =
        this.Na =
        this.kc =
        this.j =
        this.Re =
        this.Ea =
        this.Ma =
        this.N =
        this.Ob =
        this.Y =
          null;
      this.Yf = this.fb = 0;
      this.Wf = G8("failFast", !1, a);
      this.Wa = this.ma = this.Z = this.K = this.G = null;
      this.Mc = !0;
      this.Zd = this.Xa = -1;
      this.Pb = this.va = this.Ca = 0;
      this.yh = G8("baseRetryDelayMs", 5e3, a);
      this.Zf = G8("retryDelaySeedMs", 1e4, a);
      this.Xf = G8("forwardChannelMaxRetries", 2, a);
      this.Ge = G8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.He = (a && a.ipb) || void 0;
      this.vg = (a && a.cob) || void 0;
      this.cf = (a && a.epb) || !1;
      this.Za = void 0;
      this.Ra = (a && a.Xca) || !1;
      this.D = "";
      this.B = new tBb(a && a.jmb);
      this.Hf = new yBb();
      this.ub = (a && a.Emb) || !1;
      this.tb = (a && a.rmb) || !1;
      this.ub && this.tb && (this.tb = !1);
      this.ag = (a && a.Zlb) || !1;
      a && a.Gmb && (this.Mc = !1);
      this.Kc = (!this.ub && this.Mc && a && a.omb) || !1;
      this.ud = void 0;
      a && a.PY && 0 < a.PY && (this.ud = a.PY);
      this.Zc = void 0;
      this.Md = 0;
      this.ib = !1;
      this.Db = this.Ia = null;
    },
    C8 = function (a) {
      a.j && (BBb(a), a.j.cancel(), (a.j = null));
    },
    CBb = function (a) {
      C8(a);
      a.Z && (g.Ta.clearTimeout(a.Z), (a.Z = null));
      B8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), (a.K = null));
    },
    E8 = function (a) {
      uBb(a.B) || a.K || ((a.K = !0), g.ig(a.wT, a), (a.Ca = 0));
    },
    EBb = function (a, b) {
      if (nBb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.va.concat(a.C)), !0;
      if (1 == a.Lh || 2 == a.Lh || a.Ca >= (a.Wf ? 0 : a.Xf)) return !1;
      a.K = u8((0, g.ib)(a.wT, a, b), DBb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    GBb = function (a, b) {
      var c;
      b ? (c = b.Mc) : (c = a.fb++);
      var d = a.Na.clone();
      g.Mo(d, "SID", a.D);
      g.Mo(d, "RID", c);
      g.Mo(d, "AID", a.Xa);
      H8(a, d);
      a.N && a.Y && g.Qo(d, a.N, a.Y);
      c = new w8(a, a.D, c, a.Ca + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.va.concat(a.C));
      b = FBb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Ge) + Math.round(0.5 * a.Ge * Math.random())
      );
      oBb(a.B, c);
      bBb(c, d, b);
    },
    H8 = function (a, b) {
      a.Ma &&
        g.bd(a.Ma, function (c, d) {
          g.Mo(b, d, c);
        });
      a.G &&
        Wzb({}, function (c, d) {
          g.Mo(b, d, c);
        });
    },
    FBb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.ib)(a.G.o3, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              zBb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.va = a;
      return d;
    },
    rBb = function (a) {
      a.j || a.Z || ((a.Pb = 1), g.ig(a.vT, a), (a.va = 0));
    },
    mBb = function (a) {
      if (a.j || a.Z || 3 <= a.va) return !1;
      a.Pb++;
      a.Z = u8((0, g.ib)(a.vT, a), DBb(a, a.va));
      a.va++;
      return !0;
    },
    BBb = function (a) {
      null != a.Ia && (g.Ta.clearTimeout(a.Ia), (a.Ia = null));
    },
    HBb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.Pb);
      null === a.N && (a.j.Na = a.Y);
      a.j.tb = 0;
      var b = a.Cd.clone();
      g.Mo(b, "RID", "rpc");
      g.Mo(b, "SID", a.D);
      g.Mo(b, "AID", a.Xa);
      g.Mo(b, "CI", a.Wa ? "0" : "1");
      !a.Wa && a.ud && g.Mo(b, "TO", a.ud);
      g.Mo(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.N && a.Y && g.Qo(b, a.N, a.Y);
      a.Za && a.j.setTimeout(a.Za);
      var c = a.j;
      a = a.Vb;
      c.Ra = 1;
      c.Z = a8(b.clone());
      c.Y = null;
      c.Ea = !0;
      aBb(c, a);
    },
    B8 = function (a) {
      null != a.ma && (g.Ta.clearTimeout(a.ma), (a.ma = null));
    },
    kBb = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        BBb(a);
        a.j = null;
        var d = 2;
      } else if (lBb(a.B, b)) (c = b.va), qBb(a.B, b), (d = 1);
      else return;
      if (0 != a.Lh)
        if (b.C)
          if (1 == d) {
            c = b.Y ? b.Y.length : 0;
            b = Date.now() - b.Ca;
            var e = a.Ca;
            d = WAb();
            d.dispatchEvent(new ZAb(d, c, b, e));
            E8(a);
          } else rBb(a);
        else {
          var f = b.Db;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && EBb(a, b)) || (2 == d && mBb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                D8(a, 5);
                break;
              case 4:
                D8(a, 10);
                break;
              case 3:
                D8(a, 6);
                break;
              default:
                D8(a, 2);
            }
        }
    },
    DBb = function (a, b) {
      var c = a.yh + Math.floor(Math.random() * a.Zf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = (0, g.ib)(a.eda, a),
          d = a.vg,
          e = !d;
        d = new g.Eo(d || "//www.google.com/images/cleardot.gif");
        (g.Ta.location && "http" == g.Ta.location.protocol) || g.Fo(d, "https");
        a8(d);
        e ? wBb(d.toString(), c) : xBb(d.toString(), c);
      } else t8(2);
      a.Lh = 0;
      a.G && a.G.yT(b);
      IBb(a);
      CBb(a);
    },
    IBb = function (a) {
      a.Lh = 0;
      a.Db = [];
      if (a.G) {
        var b = vBb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Mb(a.Db, b),
            g.Mb(a.Db, a.C),
            (a.B.C.length = 0),
            g.Lb(a.C),
            (a.C.length = 0);
        a.G.xT();
      }
    },
    JBb = function (a) {
      if (0 == a.Lh) return a.Db;
      var b = [];
      g.Mb(b, vBb(a.B));
      g.Mb(b, a.C);
      return b;
    },
    pBb = function (a, b, c) {
      var d = g.No(c);
      "" != d.j
        ? (b && g.Go(d, b + "." + d.j), g.Ho(d, d.D))
        : ((d = g.Ta.location),
          (d = Xzb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Ea;
      c = a.Re;
      b && c && g.Mo(d, b, c);
      g.Mo(d, "VER", a.uT);
      H8(a, d);
      return d;
    },
    cBb = function (a, b, c) {
      if (b && !a.Ra)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.cf && !a.He ? new g.en(new g.Ao({ u0: c })) : new g.en(a.He);
      b.K = a.Ra;
      return b;
    },
    KBb = function () {},
    LBb = function () {
      if (g.Cf && !g.Uc(10))
        throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.Ld.call(this);
      this.j = new ABb(b);
      this.G = a;
      this.B = (b && b.l9) || null;
      a = (b && b.k9) || null;
      b &&
        b.hmb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.Hnb) || null;
      b &&
        b.WY &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.WY)
          : (a = { "X-WebChannel-Content-Type": b.WY }));
      b &&
        b.aW &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.aW)
          : (a = { "X-WebChannel-Client-Profile": b.aW }));
      this.j.Ob = a;
      (a = b && b.Gnb) && !g.fc(a) && (this.j.N = a);
      this.K = (b && b.Xca) || !1;
      this.D = (b && b.Cob) || !1;
      (b = b && b.q8) &&
        !g.fc(b) &&
        ((this.j.Ea = b),
        g.jd(this.B, b) && ((a = this.B), b in a && delete a[b]));
      this.C = new I8(this);
    },
    MBb = function (a) {
      TAb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.fd(b)) ? g.nd(b, this.j) : b)
        : (this.data = a);
    },
    NBb = function (a) {
      UAb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    OBb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    PBb = function (a) {
      return JBb(a.j).map(function (b) {
        var c = a.B;
        b = b.map;
        "__data__" in b ? ((b = b.__data__), (c = c.D ? Tzb(b) : b)) : (c = b);
        return c;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new QBb(L8, a));
    },
    QBb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.Ep(this);
      this.G = new g.xg();
      this.G.setInterval(250);
    },
    SBb = function (a, b, c) {
      a.Sx = 1;
      a.Wr = a8(b.clone());
      a.Ku = c;
      a.Ea = !0;
      RBb(a, null);
    },
    TBb = function (a, b, c, d, e) {
      a.Sx = 1;
      a.Wr = a8(b.clone());
      a.Ku = null;
      a.Ea = c;
      e && (a.T_ = !1);
      RBb(a, d);
    },
    RBb = function (a, b) {
      a.Rx = Date.now();
      O8(a);
      a.Yr = a.Wr.clone();
      b8(a.Yr, "t", a.K);
      a.IG = 0;
      a.rj = a.j.NL(a.j.eC() ? b : null);
      0 < a.LL && (a.GG = new q8((0, g.ib)(a.BT, a, a.rj), a.LL));
      a.C.Ta(a.rj, "readystatechange", a.r3);
      b = a.Ju ? g.pd(a.Ju) : {};
      a.Ku
        ? ((a.HG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.rj.send(a.Yr, a.HG, a.Ku, b))
        : ((a.HG = "GET"),
          a.T_ && !g.Vc && (b.Connection = "close"),
          a.rj.send(a.Yr, a.HG, null, b));
      a.j.Un(1);
    },
    WBb = function (a, b) {
      var c = a.IG,
        d = b.indexOf("\n", c);
      if (-1 == d) return UBb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return VBb;
      d += 1;
      if (d + c > b.length) return UBb;
      b = b.slice(d, d + c);
      a.IG = d + c;
      return b;
    },
    YBb = function (a, b) {
      a.Rx = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.Yr = a.Wr.clone();
      g.Mo(a.Yr, "DOMAIN", c);
      g.Mo(a.Yr, "t", a.K);
      try {
        a.Eo = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.Xr = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in R8) f = R8[f];
            else if (f in XBb) f = R8[f] = XBb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      c = g.qe(d + "</body></html>");
      a.Eo.open();
      a.Eo.write(g.pe(c));
      a.Eo.close();
      a.Eo.parentWindow.m = (0, g.ib)(a.dba, a);
      a.Eo.parentWindow.d = (0, g.ib)(a.QZ, a, !0);
      a.Eo.parentWindow.rpcClose = (0, g.ib)(a.QZ, a, !1);
      c = a.Eo.createElement("DIV");
      a.Eo.parentWindow.document.body.appendChild(c);
      d = g.ye(a.Yr.toString());
      d = g.$e(g.he(d));
      d = g.qe('<iframe src="' + d + '"></iframe>');
      g.Qba(c, d);
      a.j.Un(1);
    },
    O8 = function (a) {
      a.ML = Date.now() + a.B;
      ZBb(a, a.B);
    },
    ZBb = function (a, b) {
      if (null != a.Tx) throw Error("WatchDog timer not null");
      a.Tx = K8((0, g.ib)(a.q3, a), b);
    },
    $Bb = function (a) {
      a.Tx && (g.Ta.clearTimeout(a.Tx), (a.Tx = null));
    },
    Q8 = function (a) {
      a.j.Vg() || a.Iu || a.j.JG(a);
    },
    P8 = function (a) {
      $Bb(a);
      g.vb(a.GG);
      a.GG = null;
      a.G.stop();
      a.C.Uf();
      if (a.rj) {
        var b = a.rj;
        a.rj = null;
        b.abort();
        b.dispose();
      }
      a.Eo && (a.Eo = null);
    },
    aCb = function (a, b) {
      try {
        a.j.CT(a, b), a.j.Un(4);
      } catch (c) {}
    },
    cCb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        bCb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ta.setTimeout(function () {
                cCb(a, b, c, d, f);
              }, f);
        });
      }
    },
    bCb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Ta.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    dCb = function (a) {
      this.j = a;
      this.B = new r8();
    },
    eCb = function (a) {
      var b = T8(a.j, a.PC, "/mail/images/cleardot.gif");
      a8(b);
      cCb(b.toString(), 5e3, (0, g.ib)(a.Q5, a), 3, 2e3);
      a.Un(1);
    },
    fCb = function (a) {
      var b = a.j.K;
      if (null != b)
        M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
      else if (
        ((a.Qj = new N8(a)),
        (a.Qj.Ju = a.OL),
        (b = a.j),
        (b = T8(b, b.eC() ? a.dC : null, a.PL)),
        M8(5),
        !g.Cf || g.Uc(10))
      )
        b8(b, "TYPE", "xmlhttp"), TBb(a.Qj, b, !1, a.dC, !1);
      else {
        b8(b, "TYPE", "html");
        var c = a.Qj;
        a = !!a.dC;
        c.Sx = 3;
        c.Wr = a8(b.clone());
        YBb(c, a);
      }
    },
    gCb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new r8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    hCb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    iCb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    jCb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    lCb = function (a) {
      a.s3(1, 0);
      a.KG = T8(a, null, a.QL);
      kCb(a);
    },
    mCb = function (a) {
      a.Ds && (a.Ds.abort(), (a.Ds = null));
      a.Rg && (a.Rg.cancel(), (a.Rg = null));
      a.rq && (g.Ta.clearTimeout(a.rq), (a.rq = null));
      V8(a);
      a.ek && (a.ek.cancel(), (a.ek = null));
      a.Zr && (g.Ta.clearTimeout(a.Zr), (a.Zr = null));
    },
    nCb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new hCb(a.t3++, b));
      (2 != a.j && 3 != a.j) || kCb(a);
    },
    oCb = function (a) {
      var b = 0;
      a.Rg && b++;
      a.ek && b++;
      return b;
    },
    kCb = function (a) {
      a.ek || a.Zr || ((a.Zr = K8((0, g.ib)(a.GT, a), 0)), (a.Vx = 0));
    },
    rCb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.gC = Math.floor(1e5 * Math.random());
          b = a.gC++;
          var c = new N8(a, "", b);
          c.Ju = a.Mo;
          var d = pCb(a),
            e = a.KG.clone();
          g.Mo(e, "RID", b);
          g.Mo(e, "CVER", "1");
          W8(a, e);
          SBb(c, e, d);
          a.ek = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? qCb(a, b) : 0 == a.B.length || a.ek || qCb(a));
    },
    qCb = function (a, b) {
      if (b)
        if (6 < a.Lu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.gC - 1;
          b = pCb(a);
        } else (c = b.N), (b = b.Ku);
      else (c = a.gC++), (b = pCb(a));
      var d = a.KG.clone();
      g.Mo(d, "SID", a.D);
      g.Mo(d, "RID", c);
      g.Mo(d, "AID", a.Wx);
      W8(a, d);
      c = new N8(a, a.D, c, a.Vx + 1);
      c.Ju = a.Mo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.ek = c;
      SBb(c, d, b);
    },
    W8 = function (a, b) {
      a.Ui &&
        (a = a.Ui.KT()) &&
        g.bd(a, function (c, d) {
          g.Mo(b, d, c);
        });
    },
    pCb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Lu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { zE: void 0 }, f++) {
        e.zE = a.B[f].j;
        var h = a.B[f].map;
        e.zE = 6 >= a.Lu ? f : e.zE - d;
        try {
          g.bd(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.zE + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.zE + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    sCb = function (a) {
      a.Rg ||
        a.rq ||
        ((a.N = 1), (a.rq = K8((0, g.ib)(a.FT, a), 0)), (a.Ux = 0));
    },
    uCb = function (a) {
      if (a.Rg || a.rq || 3 <= a.Ux) return !1;
      a.N++;
      a.rq = K8((0, g.ib)(a.FT, a), tCb(a, a.Ux));
      a.Ux++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.iL = null == a.K ? c : !a.K;
      a.No = b.qq;
      a.Z || lCb(a);
    },
    V8 = function (a) {
      null != a.Mu && (g.Ta.clearTimeout(a.Mu), (a.Mu = null));
    },
    tCb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ui && (c = null);
        var d = (0, g.ib)(a.dda, a);
        c || ((c = new g.Eo("//www.google.com/images/cleardot.gif")), a8(c));
        bCb(c.toString(), 1e4, d);
      } else M8(2);
      vCb(a, b);
    },
    vCb = function (a, b) {
      a.j = 0;
      a.Ui && a.Ui.HT(b);
      wCb(a);
      mCb(a);
    },
    wCb = function (a) {
      a.j = 0;
      a.No = -1;
      if (a.Ui)
        if (0 == a.C.length && 0 == a.B.length) a.Ui.RL();
        else {
          var b = g.Lb(a.C),
            c = g.Lb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Ui.RL(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.No(c);
      if ("" != d.j) b && g.Go(d, b + "." + d.j), g.Ho(d, d.D);
      else {
        var e = window.location;
        d = Xzb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.fC &&
        g.bd(a.fC, function (f, h) {
          g.Mo(d, h, f);
        });
      g.Mo(d, "VER", a.Lu);
      W8(a, d);
      return d;
    },
    xCb = function () {},
    yCb = function () {
      this.j = [];
      this.B = [];
    },
    zCb = function (a) {
      g.Ab.call(this, "channelMessage");
      this.message = a;
    },
    ACb = function (a) {
      g.Ab.call(this, "channelError");
      this.error = a;
    },
    BCb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.I.call(this);
      this.j = new g.Qu(this.Vaa, 0, this);
      g.N(this, this.j);
      this.hj = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.ib)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.ib)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    CCb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.N = b;
      this.C = new g.zv();
      this.B = new Y8(this.qca, this);
      this.j = null;
      this.ma = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Ra = c;
      this.va = d;
      this.Wa = e;
      this.Na = new Yzb();
      this.Ia = new $zb();
      this.Ma = new bAb();
      this.Ea = new dAb();
      this.Xa = new fAb();
      this.fb = new gAb();
    },
    DCb = function (a) {
      if (a.j) {
        var b = a.va(),
          c = a.j.Mo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Mo = c;
      }
    },
    Z8 = function (a) {
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Um(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Vm(a) || "";
      a = g.pc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.oc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = "https://" + a.domain + a.port + a.j);
      return g.an(c + b, {});
    },
    ECb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.jb(a.D, d, !0),
        onError: g.jb(a.C, e),
        onTimeout: g.jb(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.NB(b, a);
    },
    FCb = function (a, b) {
      g.Ld.call(this);
      var c = this;
      this.Jd = a();
      this.Jd.subscribe("handlerOpened", this.x3, this);
      this.Jd.subscribe("handlerClosed", this.v3, this);
      this.Jd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Jd.subscribe("handlerMessage", this.w3, this);
      this.j = b;
    },
    GCb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new LBb() : e;
      var f = void 0 === f ? new g.zv() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ca = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : nBb(new OBb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.ma = !1;
      this.logger = null;
      this.va = [];
      this.Jg = void 0;
      this.Na = new Yzb();
      this.Ia = new $zb();
      this.Ma = new bAb();
      this.Ea = new dAb();
    },
    HCb = function (a) {
      g.Bd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.va = [];
        a.ra("webChannelOpened");
        Zzb(a.Na, "WEB_CHANNEL");
      });
      g.Bd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.ra("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : PBb(new OBb(b, b.j));
        c && (a.va = [].concat(g.pa(c)));
        aAb(a.Ia, "WEB_CHANNEL");
      });
      g.Bd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.ra("webChannelMessage", new BCb(c[0], c[1]));
        a.Jg = b.statusCode;
        cAb(a.Ma, "WEB_CHANNEL");
      });
      g.Bd(a.channel, "o", function () {
        401 === a.Jg || a.C.start();
        a.ra("webChannelError");
        eAb(a.Ea, "WEB_CHANNEL");
      });
    },
    ICb = function (a) {
      var b = a.Ca();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    JCb = function (a) {
      g.Ld.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.A3, this);
      this.j.subscribe("webChannelClosed", this.y3, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.z3, this);
    },
    KCb = function (a, b, c, d, e) {
      function f() {
        return new CCb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.LB("enable_mdx_web_channel_desktop")
        ? new JCb(function () {
            return new GCb($8(a, "/wc"), b, c);
          })
        : new FCb(f, e);
    },
    OCb = function () {
      var a = LCb;
      MCb();
      a9.push(a);
      NCb();
    },
    b9 = function (a, b) {
      MCb();
      var c = PCb(a, String(b));
      0 == a9.length
        ? QCb(c)
        : (NCb(),
          g.bc(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    MCb = function () {
      a9 ||
        ((a9 = g.Wa("yt.mdx.remote.debug.handlers_") || []),
        g.Va("yt.mdx.remote.debug.handlers_", a9));
    },
    QCb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    NCb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.bc(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    PCb = function (a, b) {
      var c = (Date.now() - RCb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.JF.call(this);
      this.K = a;
      this.screens = [];
    },
    SCb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    TCb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.ot(a.screens, function (f) {
        return !!tAb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = SCb(a, b[d]) || c;
      return c;
    },
    UCb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.ot(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    VCb = function (a, b, c, d, e) {
      g.JF.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.rd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + qAb(this.screens));
    },
    WCb = function (a) {
      if (a.screens.length) {
        var b = g.Er(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        ECb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.ib)(a.N7, a),
          (0, g.ib)(a.M7, a)
        );
      }
    },
    h9 = function (a) {
      if (g.LB("deprecate_pair_servlet_enabled")) return TCb(a, []);
      var b = pAb(AAb());
      b = g.ot(b, function (c) {
        return !c.uuid;
      });
      return TCb(a, b);
    },
    j9 = function (a, b) {
      CAb(g.Er(a.screens, nAb));
      b && BAb();
    },
    YCb = function (a, b) {
      g.JF.call(this);
      this.K = b;
      b = (b = g.FC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Fb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      XCb("Initialized with " + g.Nm(this.j));
    },
    ZCb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      ECb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.ib)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.ib)(function () {
          c(!1);
        }, a)
      );
    },
    aDb = function (a, b) {
      a: if (Rzb(b) != Rzb(a.j)) var c = !1;
      else {
        c = g.id(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (XCb("Updated online screens: " + g.Nm(a.j)),
        (a.j = b),
        a.ra("screenChange"));
      $Cb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.JB(a.C);
      a.C = g.HB((0, g.ib)(a.wR, a), 0 < a.D && a.D < g.kb() ? 2e4 : 1e4);
    },
    XCb = function (a) {
      b9("OnlineScreenService", a);
    },
    bDb = function (a) {
      var b = {};
      g.bc(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.rg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    $Cb = function (a) {
      a = g.id(
        g.cd(a.j, function (b) {
          return b;
        })
      );
      g.Xb(a);
      a.length
        ? g.EC("yt-remote-online-screen-ids", a.join(","), 60)
        : g.GC("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      cDb(this);
    },
    eDb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Sk(),
        l = c ? h8(h, c) : null;
      (c && (a.N || l)) || (l = h8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        ZCb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? dDb(
              a,
              c,
              (0, g.ib)(function (n) {
                var p = m9(
                  this,
                  new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                ZCb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    fDb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    gDb = function (a, b, c) {
      ZCb(a.j, b, c);
    },
    dDb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.NB($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    hDb = function (a) {
      a.screens = a.B.Sk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + qAb(a.screens));
    },
    cDb = function (a) {
      iDb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.ib)(a.X7, a));
      hDb(a);
      a.N || (a.C = pAb(g.FC("yt-remote-automatic-screen-cache") || []));
      iDb(a);
      a.info("Initializing automatic screens: " + qAb(a.C));
      a.j = new YCb(a.D, (0, g.ib)(a.Sk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.ib)(function () {
          this.ra("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = h8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || jDb(a));
      iDb(a);
      a.G[b.uuid] = b.id;
      g.EC("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    jDb = function (a) {
      a = g.ot(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.EC("yt-remote-automatic-screen-cache", g.Er(a, nAb));
    },
    iDb = function (a) {
      a.G = g.FC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.JF.call(this);
      this.Ea = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.ra("sessionScreen", a.j);
    },
    kDb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.ra("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Ea, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.va = (0, g.ib)(this.F3, this);
      this.Ia = (0, g.ib)(this.nba, this);
      this.ma = g.HB(function () {
        lDb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Ca = !1;
      this.Y = "unknown";
    },
    nDb = function (a, b) {
      g.JB(a.N);
      a.N = 0;
      0 == b
        ? mDb(a)
        : (a.N = g.HB(function () {
            mDb(a);
          }, b));
    },
    mDb = function (a) {
      oDb(a, "getLoungeToken");
      g.JB(a.G);
      a.G = g.HB(function () {
        pDb(a, null);
      }, 3e4);
    },
    oDb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Nm());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.ib)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.Nm(c));
    },
    qDb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.nX(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.Gj();
              },
              5
            ))
        : a.Gj(Error("Waiting for session status timed out."));
    },
    sDb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new e8(b);
      rDb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ca = !0), m9(a.D, d), o9(a, d), (a.Y = "unknown"), nDb(a, c))
            : (g.qB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.Gj());
        },
        5
      );
    },
    lDb = function (a, b) {
      g.JB(a.ma);
      a.ma = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? sDb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.qB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  qDb(a, b.screenId)))
            : (g.qB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              qDb(a, b.screenId))
          : qDb(a, b.screenId)
        : a.Gj(Error("Waiting for session status timed out."));
    },
    pDb = function (a, b) {
      g.JB(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          nDb(a, 3e4))
        : (kDb(a, b.loungeToken),
          (a.Ca = !1),
          (a.Y = "unknown"),
          nDb(a, b.loungeTokenRefreshIntervalMs));
    },
    rDb = function (a, b, c, d) {
      g.JB(a.K);
      a.K = 0;
      gDb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.HB(function () {
              rDb(a, b, c, d - 1);
            }, 300));
      });
    },
    tDb = function (a) {
      g.JB(a.Z);
      a.Z = 0;
      g.JB(a.K);
      a.K = 0;
      g.JB(a.ma);
      a.ma = 0;
      g.JB(a.G);
      a.G = 0;
      g.JB(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ia = "";
      this.Ra = c;
      this.Na = null;
      this.ma = function () {};
      this.Y = NaN;
      this.Ma = (0, g.ib)(this.G3, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.va = !1;
      this.Ca = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    uDb = function (a) {
      a.G = a.D.NT(
        a.Ia,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.va = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.Gj(b);
        }
      );
    },
    vDb = function (a) {
      var b = {};
      b.pairingCode = a.Ia;
      b.theme = a.Ra;
      EAb() && (b.env_useStageMdx = 1);
      return g.$m(b);
    },
    wDb = function (a) {
      return new Promise(function (b) {
        a.Ia = rAb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, vDb(a));
          b(c);
          uDb(a);
        } else
          (a.ma = function () {
            g.JB(a.Y);
            a.ma = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, vDb(a));
            b(d);
            uDb(a);
          }),
            (a.Y = g.HB(function () {
              a.ma();
            }, 100));
      });
    },
    yDb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new e8(b);
      return new Promise(function (e) {
        xDb(
          a,
          d,
          function (f) {
            f
              ? ((a.va = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.qB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : wDb(a);
      });
    },
    zDb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        eDb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : wDb(a);
      });
    },
    xDb = function (a, b, c, d) {
      g.JB(a.K);
      a.K = 0;
      gDb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.HB(function () {
              xDb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.JB(a.N),
        (a.N = 0),
        0 == b
          ? ADb(a)
          : (a.N = g.HB(function () {
              ADb(a);
            }, b)));
    },
    ADb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ca = c), t9(a, 3e4))
              : ((a.va = !1),
                (a.Ca = "unknown"),
                kDb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    BDb = function (a) {
      g.JB(a.K);
      a.K = 0;
      g.JB(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.JB(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.HB((0, g.ib)(this.gA, this, null), 150);
    },
    v9 = function (a, b) {
      g.JF.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.ib)(this.eaa, this);
    },
    CDb = function (a, b) {
      return b
        ? g.Db(
            a.C,
            function (c) {
              return f8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    LCb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.vb(a.j),
        (a.j = b)
          ? (c
              ? a.ra("yt-remote-cast2-receiver-resumed", b.B)
              : a.ra("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.ib)(a.OZ, a, b)),
            b.subscribe("sessionFailed", function () {
              return DDb(a, b);
            }),
            b.j
              ? a.ra("yt-remote-cast2-session-change", b.j)
              : c && a.j.gA(null))
          : a.ra("yt-remote-cast2-session-change", null));
    },
    DDb = function (a, b) {
      a.j == b && a.ra("yt-remote-cast2-session-failed");
    },
    EDb = function (a) {
      var b = a.B.LT(),
        c = a.j && a.j.B;
      a = g.Er(
        b,
        function (d) {
          c && f8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = CDb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    LDb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : FDb()
        ? GDb(b, d) &&
          (HDb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? IDb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? IDb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    JDb(!1),
                    HDb(!1),
                    g.GC("yt-remote-cast-available"),
                    g.GC("yt-remote-cast-receiver"),
                    KDb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Ata(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= GAb() && PAb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? KAb()
                : 89 <= GAb()
                ? RAb()
                : (OAb(), o8(QAb.map(LAb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    KDb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Va("yt.mdx.remote.cloudview.instance_", null);
      MDb(!1);
      g.uE(NDb);
      NDb.length = 0;
    },
    C9 = function () {
      return !!g.FC("yt-remote-cast-installed");
    },
    ODb = function () {
      var a = g.FC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    PDb = function () {
      z9("clearCurrentReceiver");
      g.GC("yt-remote-cast-receiver");
    },
    QDb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    RDb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              NDb.push(g.tE("yt-remote-cast2-api-ready", RDb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    FDb = function () {
      var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.CK || a;
    },
    SDb = function (a, b) {
      B9().init(a, b);
    },
    GDb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.EC("yt-remote-cast-available", d);
          m8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.EC("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.EC("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + g8(d));
          d || g.GC("yt-remote-cast-receiver");
          m8("yt-remote-cast2-session-change", d);
        }),
        g.Va("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Wa("yt.mdx.remote.cloudview.instance_");
    },
    IDb = function (a, b) {
      JDb(!0);
      HDb(!1);
      SDb(a, function (c) {
        c
          ? (MDb(!0), g.vE("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            JDb(!1),
            g.GC("yt-remote-cast-available"),
            g.GC("yt-remote-cast-receiver"),
            KDb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    JDb = function (a) {
      z9("setCastInstalled_ " + a);
      g.EC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Wa("yt.mdx.remote.cloudview.apiReady_");
    },
    MDb = function (a) {
      z9("setApiReady_ " + a);
      g.Va("yt.mdx.remote.cloudview.apiReady_", a);
    },
    HDb = function (a) {
      g.Va("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Vk = this.Cp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    TDb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Cp = !1;
      a.Vk = !1;
      a.N = 0;
      a.K = g.kb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.kb() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.kb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.kb() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && TDb(a);
    },
    UDb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.qd(a.trackData);
      b.hasPrevious = a.Cp;
      b.hasNext = a.Vk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.JF.call(this);
      var c = this;
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new yCb();
      this.B = this.j = null;
      this.Y = (0, g.ib)(this.U9, this);
      this.N = (0, g.ib)(this.KE, this);
      this.Z = (0, g.ib)(this.T9, this);
      this.ma = (0, g.ib)(this.X9, this);
      var d = 0;
      a
        ? ((d = a.getProxyState()),
          3 != d && (a.subscribe("proxyStateChange", this.UR, this), VDb(this)))
        : (d = 3);
      0 != d &&
        (b
          ? this.UR(d)
          : g.HB(function () {
              c.UR(d);
            }, 0));
      (a = QDb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ma);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    VDb = function (a) {
      g.bc(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.jb(this.caa, b), this));
        },
        a
      );
    },
    WDb = function (a) {
      g.bc(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    XDb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      WDb(a);
      a.D.setPlayerContextData(UDb(b));
      VDb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.KE(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.KE(a.B.media[0]));
    },
    YDb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.ib)(function (d) {
        this.rg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.rg("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.JF.call(this);
      var e = this;
      this.K = NaN;
      this.Ia = !1;
      this.Y = this.Z = this.va = this.Ca = NaN;
      this.ma = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.Ma = d;
      this.ma.push(
        g.vC(window, "beforeunload", function () {
          e.pz(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Ra = b.id;
      this.Ea = b.idType;
      this.B = KCb(this.Na, c, this.RT, "shortLived" == this.Ea, this.Ra);
      this.B.Ta("channelOpened", function () {
        ZDb(e);
      });
      this.B.Ta("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? k8(!0) : k8();
        e.dispose();
      });
      this.B.Ta("channelError", function (f) {
        k8();
        isNaN(e.KD())
          ? (1 == f &&
              "shortLived" == e.Ea &&
              e.ra("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ia = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.KD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.Ta("channelMessage", function (f) {
        $Db(e, f);
      });
      this.B.Fr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.HC() && g.EC("yt-remote-session-video-id", f);
      });
    },
    aEb = function (a) {
      return g.Db(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.ra("proxyStateChange", b);
    },
    bEb = function (a) {
      a.K = g.HB(function () {
        S9("Connecting timeout");
        a.pz(1);
      }, 2e4);
    },
    cEb = function (a) {
      g.JB(a.K);
      a.K = NaN;
    },
    dEb = function (a) {
      g.JB(a.Ca);
      a.Ca = NaN;
    },
    fEb = function (a) {
      eEb(a);
      a.va = g.HB(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    eEb = function (a) {
      g.JB(a.va);
      a.va = NaN;
    },
    ZDb = function (a) {
      S9("Channel opened");
      a.Ia &&
        ((a.Ia = !1),
        dEb(a),
        (a.Ca = g.HB(function () {
          S9("Timing out waiting for a screen.");
          a.pz(1);
        }, 15e3)));
    },
    hEb = function (a, b) {
      var c = null;
      if (b) {
        var d = aEb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Va("yt.mdx.remote.remoteClient_", c);
      b && (cEb(a), dEb(a));
      c = a.B.Uz() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.iX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), gEb(a))
        : a.pz(1);
    },
    iEb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.md(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.ra("remotePlayerChange"));
    },
    jEb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.ra("remoteQueueChange", c);
    },
    lEb = function (a, b) {
      b.params = b.params || {};
      jEb(a, b, "NOW_PLAYING_MAY_CHANGE");
      kEb(a, b);
      a.ra("autoplayDismissed");
    },
    kEb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.xl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? fEb(a) : eEb(a);
      a.ra("remotePlayerChange");
    },
    mEb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.ra("remotePlayerChange");
      }
    },
    nEb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ra("remotePlayerChange");
    },
    oEb = function (a, b) {
      a.N = b.params.videoId;
      a.ra("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    pEb = function (a, b) {
      a.N = b.params.videoId || null;
      a.ra("autoplayUpNext", a.N);
    },
    qEb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.ra("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.ra("autoplayDismissed");
    },
    rEb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.Cp = "true" == b.params.hasPrevious;
      a.j.Vk = c;
      a.ra("previousNextChange");
    },
    $Db = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.Nm(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.Er(b, function (d) {
            return new kAb(d);
          });
          b = !!g.Db(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          hEb(a, b);
          b = a.lY("mlm");
          a.ra("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Jb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          hEb(a, !1);
          break;
        case "remoteConnected":
          var c = new kAb(c8(b.params.device));
          g.Db(a.C, function (d) {
            return c ? d.id == c.id : !1;
          }) || Qzb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new kAb(c8(b.params.device));
          g.Jb(a.C, function (d) {
            return c ? d.id == c.id : !1;
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          jEb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          lEb(a, b);
          break;
        case "onStateChange":
          kEb(a, b);
          break;
        case "onAdStateChange":
          mEb(a, b);
          break;
        case "onVolumeChanged":
          nEb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          iEb(a, b);
          break;
        case "nowAutoplaying":
          oEb(a, b);
          break;
        case "autoplayDismissed":
          a.ra("autoplayDismissed");
          break;
        case "autoplayUpNext":
          pEb(a, b);
          break;
        case "onAutoplayModeChanged":
          qEb(a, b);
          break;
        case "onHasPreviousNextChanged":
          rEb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ra("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ra("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    gEb = function (a) {
      g.JB(a.Y);
      a.Y = g.HB(function () {
        a.pz(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.Nm(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    sEb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.kh = a;
      this.j = [];
      this.j.push(this.kh.$_s("screenChange", (0, g.ib)(this.K3, this)));
      this.j.push(this.kh.$_s("onlineScreenChange", (0, g.ib)(this.K$, this)));
    },
    xEb = function (a, b) {
      DAb();
      if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.nB("MDX_CONFIG") || b;
        uAb();
        yAb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          EAb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Wa("yt.mdx.remote.deferredProxies_") || []),
          g.Va("yt.mdx.remote.deferredProxies_", X9));
        tEb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Va("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Va(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          LDb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    m8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Wa("yt.mdx.remote.initialized_") &&
          (g.Va("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.Nm(b)),
          a$.push(
            g.tE("yt-remote-cast2-api-ready", function () {
              m8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.tE("yt-remote-cast2-availability-change", function () {
              m8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.tE("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              m8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.tE("yt-remote-cast2-receiver-resumed", function () {
              m8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.tE("yt-remote-cast2-session-change", uEb)),
          a$.push(
            g.tE("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), PDb());
            })
          ),
          a$.push(
            g.tE("yt-remote-cast2-session-failed", function () {
              m8("yt-remote-connection-failed");
            })
          ),
          (a = vEb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.LB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.Nm(a)),
          a
            ? (g.EC("yt-remote-session-app", a.app),
              g.EC("yt-remote-session-name", a.name))
            : (g.GC("yt-remote-session-app"), g.GC("yt-remote-session-name")),
          g.Va("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || wEb());
      }
    },
    yEb = function () {
      var a = Y9().kh.$_gos();
      var b = d$();
      b && e$() && (tAb(a, b) || a.push(b));
      return sAb(a);
    },
    AEb = function () {
      var a = zEb();
      !a &&
        C9() &&
        ODb() &&
        (a = { key: "cast-selector-receiver", name: ODb() });
      return a;
    },
    zEb = function () {
      var a = yEb(),
        b = d$();
      b || (b = c$());
      return g.Db(a, function (c) {
        return b && f8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Sk();
      return h8(b, a);
    },
    uEb = function (a) {
      $9("remote.onCastSessionChange_: " + g8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.Fr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), BEb(null));
    },
    CEb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!DEb) {
        var a = g.Wa("yt.mdx.remote.screenService_");
        DEb = a ? new sEb(a) : null;
      }
      return DEb;
    },
    Z9 = function () {
      return g.Wa("yt.mdx.remote.currentScreenId_");
    },
    EEb = function (a) {
      g.Va("yt.mdx.remote.currentScreenId_", a);
    },
    FEb = function () {
      return g.Wa("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Va("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Wa("yt.mdx.remote.connection_");
    },
    BEb = function (a) {
      var b = e$();
      b$(null);
      a || EEb("");
      g.Va("yt.mdx.remote.connection_", a);
      X9 &&
        (g.bc(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? m8("yt-remote-connection-change", !1)
        : !b && a && m8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.HC();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Sk();
      return h8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        EEb(a.id);
        var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, vEb(), c);
        a.connect(b, FEb());
        a.subscribe("beforeDisconnect", function (d) {
          m8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), BEb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        BEb(a);
      }
    },
    wEb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + g8(a)), h$(a, 0))
        : (k8(),
          PDb(),
          $9("Skipping connecting because no session screen found."));
    },
    tEb = function () {
      var a = vEb();
      if (g.md(a)) {
        a = j8();
        var b = g.FC("yt-remote-session-name") || "",
          c = g.FC("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.nB("SESSION_INDEX", "0"));
        (b = g.nB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Va("yt.mdx.remote.channelParams_", a);
      }
    },
    vEb = function () {
      return g.Wa("yt.mdx.remote.channelParams_") || {};
    },
    IEb = function (a, b, c) {
      g.I.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Lc = c;
      this.events = new g.EK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        GEb(d, e);
      });
      this.D = !1;
      this.G = new g.sL(64);
      this.j = new g.Qu(this.q0, 500, this);
      this.B = new g.Qu(this.r0, 1e3, this);
      this.N = new p8(this.Bda, 0, this);
      this.C = {};
      this.Z = new g.Qu(this.l1, 1e3, this);
      this.K = new q8(this.seekTo, 1e3, this);
      g.N(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.v$);
      this.events.T(b, "captionschanged", this.R9);
      this.events.T(b, "captionssettingschanged", this.z0);
      this.events.T(b, "videoplayerreset", this.RJ);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Lc.sW();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          HEb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Lc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.LZ, this);
      a.subscribe("remotePlayerChange", this.QE, this);
      a.subscribe("remoteQueueChange", this.RJ, this);
      a.subscribe("previousNextChange", this.IZ, this);
      a.subscribe("nowAutoplaying", this.EZ, this);
      a.subscribe("autoplayDismissed", this.nZ, this);
      g.N(this, this.j);
      g.N(this, this.B);
      g.N(this, this.N);
      g.N(this, this.Z);
      g.N(this, this.K);
      this.z0();
      this.RJ();
      this.QE();
    },
    GEb = function (a, b) {
      if (j$(a)) {
        a.Lc.unsubscribe("remotePlayerChange", a.QE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Lc);
        if (c !== d.volume || b !== d.muted) a.Lc.setVolume(c, b), a.Z.start();
        a.Lc.subscribe("remotePlayerChange", a.QE, a);
      }
    },
    JEb = function (a) {
      a.Sc(0);
      a.j.stop();
      a.Hc(new g.sL(64));
    },
    KEb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.rd(c, b));
        a.Lc.QT(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Lc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Lc.playVideo(c.videoId, b, d, e, c.playerParams, c.va, Pzb(c));
      a.Hc(new g.sL(1));
    },
    LEb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { YX: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Lc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.V.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        X: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              { I: "div", S: "ytp-mdx-popup-title", ya: "You're signed out" },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    ya: "Cancel",
                  },
                  {
                    I: "button",
                    La: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    ya: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.yG(this, 250);
      this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
      g.N(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.V.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.ywa()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                ya: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.yG(this, 250);
      g.N(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Ic(a.Yb());
    },
    n$ = function (a, b) {
      g.LX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.Vt = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    MEb = function (a) {
      g.OV.call(this, a);
      this.Lp = { key: rAb(), name: "This computer" };
      this.Tl = null;
      this.subscriptions = [];
      this.dR = this.Lc = null;
      this.Vt = [this.Lp];
      this.Gs = this.Lp;
      this.Ne = new g.sL(64);
      this.vY = 0;
      this.Xh = -1;
      this.iF = !1;
      this.gF = this.aB = null;
      if (!g.YR(this.player.U()) && !g.WG(this.player.U())) {
        a = this.player;
        var b = g.$T(a);
        b && (b = b.zp()) && ((b = new n$(a, b)), g.N(this, b));
        b = new m$(a);
        g.N(this, b);
        g.lU(a, b.element, 4);
        this.aB = new l$();
        g.N(this, this.aB);
        g.lU(a, this.aB.element, 4);
        this.iF = !!c$();
      }
    },
    o$ = function (a) {
      a.gF &&
        (a.player.removeEventListener("presentingplayerstatechange", a.gF),
        (a.gF = null));
    },
    NEb = function (a, b, c) {
      a.Ne = c;
      a.player.ra("presentingplayerstatechange", new g.EG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Gs.key)
        if (b.key === a.Lp.key) g$();
        else if (
          (HEb(a) && OEb(a),
          (a.Gs = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.WG(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.LV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.va,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = Pzb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.Nm(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && CEb() && Z9() == b.key
            ? m8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Sk()),
              (b = h8(d, b.key)) && h$(b, 1));
        }
    },
    HEb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.iF ||
        !a.aB
        ? !1
        : g.hS(b) || g.jS(b);
    },
    OEb = function (a) {
      a.player.Yb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.gF = function (b) {
            !a.iF && g.HG(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.gF));
      a.aB && a.aB.yd();
      e$() || (i$ = !0);
    };
  g.Ky.prototype.Ts = g.fa(0, function () {
    return g.sk(this, 6);
  });
  var XBb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    R8 = { "'": "\\'" },
    lAb = {
      cpa: "atp",
      y6a: "ska",
      M2a: "que",
      WUa: "mus",
      x6a: "sus",
      cGa: "dsp",
      A4a: "seq",
      xTa: "mic",
      Lwa: "dpa",
      Bqa: "cds",
      LUa: "mlm",
      zwa: "dsdtr",
      wVa: "ntb",
      hib: "vsp",
      Axa: "scn",
      a3a: "rpe",
      wwa: "dcn",
      xwa: "dcp",
      o_a: "pas",
      ywa: "drq",
      WYa: "opf",
      zxa: "els",
      R4a: "svq",
    },
    mAb = {
      f5: "u",
      CLASSIC: "cl",
      O4: "k",
      v2: "i",
      X1: "cr",
      U4: "m",
      q2: "g",
      cV: "up",
    },
    xAb = "",
    l8 = null;
  FAb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.LB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.efa(c.value)),
          (c = { serializedIncrementBatch: g.Dg(c.j()) }),
          g.YC("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var n8,
    NAb = HAb("loadCastFramework") || HAb("loadCastApplicationFramework"),
    QAb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.ob(p8, g.I);
  g.k = p8.prototype;
  g.k.f3 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.rd ? (this.C = g.kb() + this.hj) : (this.rd = g.yg(this.G, this.hj));
  };
  g.k.stop = function () {
    this.rd && (g.Ta.clearTimeout(this.rd), (this.rd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.xa = function () {
    this.stop();
    p8.Vf.xa.call(this);
  };
  g.k.g3 = function () {
    this.rd && (g.Ta.clearTimeout(this.rd), (this.rd = null));
    this.C
      ? ((this.rd = g.yg(this.G, this.C - g.kb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(q8, g.I);
  g.k = q8.prototype;
  g.k.KL = function (a) {
    this.C = arguments;
    this.rd || this.B ? (this.j = !0) : SAb(this);
  };
  g.k.stop = function () {
    this.rd &&
      (g.Ta.clearTimeout(this.rd),
      (this.rd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.rd || ((this.j = !1), SAb(this));
  };
  g.k.xa = function () {
    g.I.prototype.xa.call(this);
    this.stop();
  };
  r8.prototype.stringify = function (a) {
    return g.Ta.JSON.stringify(a, void 0);
  };
  r8.prototype.parse = function (a) {
    return g.Ta.JSON.parse(a, void 0);
  };
  g.ob(TAb, g.Ab);
  g.ob(UAb, g.Ab);
  var VAb = null;
  g.ob(XAb, g.Ab);
  g.ob(YAb, g.Ab);
  g.ob(ZAb, g.Ab);
  v8.prototype.debug = function () {};
  v8.prototype.info = function () {};
  v8.prototype.warning = function () {};
  var gBb = {},
    fBb = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.ub = a;
  };
  g.k.m3 = function (a) {
    a = a.target;
    var b = this.Xa;
    b && 3 == g.Ln(a) ? b.KL() : this.tT(a);
  };
  g.k.tT = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Ln(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.kS ||
              (this.j && (this.B.B || g.Nn(this.j) || g.On(this.j))))
          ) {
            this.Ma || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
            A8(this);
            var e = this.j.getStatus();
            this.Db = e;
            b: if (dBb(this)) {
              var f = g.On(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Ln(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  y8(this);
                  z8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Ta.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.length = 0;
              this.B.j += a;
              this.K = 0;
              m = this.B.j;
            } else m = g.Nn(this.j);
            if ((this.C = 200 == e)) {
              if (this.Pb && !this.Wa) {
                b: {
                  if (this.j) {
                    var n = g.Pn(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.fc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Wa = !0), hBb(this, e);
                else {
                  this.C = !1;
                  this.N = 3;
                  t8(12);
                  y8(this);
                  z8(this);
                  break a;
                }
              }
              this.Ea
                ? (iBb(this, b, m),
                  g.kS &&
                    this.C &&
                    3 == b &&
                    (this.Za.Ta(this.ib, "tick", this.l3), this.ib.start()))
                : hBb(this, m);
              4 == b && y8(this);
              this.C &&
                !this.Ma &&
                (4 == b ? kBb(this.G, this) : ((this.C = !1), x8(this)));
            } else
              g.Ufa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.N = 3), t8(12))
                  : ((this.N = 0), t8(13)),
                y8(this),
                z8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.l3 = function () {
    if (this.j) {
      var a = g.Ln(this.j),
        b = g.Nn(this.j);
      this.K < b.length &&
        (A8(this), iBb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Ma = !0;
    y8(this);
  };
  g.k.j3 = function () {
    this.ma = null;
    var a = Date.now();
    0 <= a - this.Ob
      ? (2 != this.Ra && (s8(3), t8(17)), y8(this), (this.N = 2), z8(this))
      : jBb(this, this.Ob - a);
  };
  g.k.getLastError = function () {
    return this.N;
  };
  g.k.CO = function () {
    return this.j;
  };
  tBb.prototype.cancel = function () {
    this.C = vBb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = ABb.prototype;
  g.k.uT = 8;
  g.k.Lh = 1;
  g.k.connect = function (a, b, c, d) {
    t8(0);
    this.kc = a;
    this.Ma = b || {};
    c && void 0 !== d && ((this.Ma.OSID = c), (this.Ma.OAID = d));
    this.Wa = this.Mc;
    this.Na = pBb(this, null, this.kc);
    E8(this);
  };
  g.k.disconnect = function () {
    CBb(this);
    if (3 == this.Lh) {
      var a = this.fb++,
        b = this.Na.clone();
      g.Mo(b, "SID", this.D);
      g.Mo(b, "RID", a);
      g.Mo(b, "TYPE", "terminate");
      H8(this, b);
      a = new w8(this, this.D, a);
      a.Ra = 2;
      a.Z = a8(b.clone());
      b = !1;
      if (g.Ta.navigator && g.Ta.navigator.sendBeacon)
        try {
          b = g.Ta.navigator.sendBeacon(a.Z.toString(), "");
        } catch (c) {}
      !b && g.Ta.Image && ((new Image().src = a.Z), (b = !0));
      b || ((a.j = cBb(a.G, null)), a.j.send(a.Z));
      a.Ca = Date.now();
      x8(a);
    }
    IBb(this);
  };
  g.k.Vg = function () {
    return 0 == this.Lh;
  };
  g.k.getState = function () {
    return this.Lh;
  };
  g.k.wT = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Lh)) {
        if (!a) {
          this.fb = Math.floor(1e5 * Math.random());
          a = this.fb++;
          var b = new w8(this, "", a),
            c = this.Y;
          this.Ob && (c ? ((c = g.pd(c)), g.rd(c, this.Ob)) : (c = this.Ob));
          null !== this.N || this.tb || ((b.Na = c), (c = null));
          var d;
          if (this.ub)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = FBb(this, b, d);
          e = this.Na.clone();
          g.Mo(e, "RID", a);
          g.Mo(e, "CVER", 22);
          this.Ea && g.Mo(e, "X-HTTP-Session-Id", this.Ea);
          H8(this, e);
          c &&
            (this.tb
              ? (d = "headers=" + g.Ye(g.Gga(c)) + "&" + d)
              : this.N && g.Qo(e, this.N, c));
          oBb(this.B, b);
          this.ag && g.Mo(e, "TYPE", "init");
          this.ub
            ? (g.Mo(e, "$req", d),
              g.Mo(e, "SID", "null"),
              (b.Pb = !0),
              bBb(b, e, null))
            : bBb(b, e, d);
          this.Lh = 2;
        }
      } else
        3 == this.Lh &&
          (a ? GBb(this, a) : 0 == this.C.length || uBb(this.B) || GBb(this));
  };
  g.k.vT = function () {
    this.Z = null;
    HBb(this);
    if (this.Kc && !(this.ib || null == this.j || 0 >= this.Md)) {
      var a = 2 * this.Md;
      this.Ia = u8((0, g.ib)(this.Q9, this), a);
    }
  };
  g.k.Q9 = function () {
    this.Ia &&
      ((this.Ia = null),
      (this.Wa = !1),
      (this.ib = !0),
      t8(10),
      C8(this),
      HBb(this));
  };
  g.k.qQ = function (a) {
    this.j == a && this.Kc && !this.ib && (BBb(this), (this.ib = !0), t8(11));
  };
  g.k.n3 = function () {
    null != this.ma && ((this.ma = null), C8(this), mBb(this), t8(19));
  };
  g.k.eda = function (a) {
    a ? t8(2) : t8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = KBb.prototype;
  g.k.AT = function () {};
  g.k.zT = function () {};
  g.k.yT = function () {};
  g.k.xT = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.o3 = function () {};
  g.ob(J8, g.Ld);
  J8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Ra = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.Nm(a)), (a = c));
    b.C.push(new sBb(b.Yf++, a));
    3 == b.Lh && E8(b);
  };
  J8.prototype.xa = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Vf.xa.call(this);
  };
  g.ob(MBb, TAb);
  g.ob(NBb, UAb);
  g.ob(I8, KBb);
  I8.prototype.AT = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.zT = function (a) {
    this.j.dispatchEvent(new MBb(a));
  };
  I8.prototype.yT = function (a) {
    this.j.dispatchEvent(new NBb(a));
  };
  I8.prototype.xT = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.Ld();
  g.w(QBb, g.Ab);
  g.k = N8.prototype;
  g.k.Ju = null;
  g.k.mq = !1;
  g.k.Tx = null;
  g.k.ML = null;
  g.k.Rx = null;
  g.k.Sx = null;
  g.k.Wr = null;
  g.k.Yr = null;
  g.k.Ku = null;
  g.k.rj = null;
  g.k.IG = 0;
  g.k.Eo = null;
  g.k.HG = null;
  g.k.Xr = null;
  g.k.cC = -1;
  g.k.T_ = !0;
  g.k.Iu = !1;
  g.k.LL = 0;
  g.k.GG = null;
  var VBb = {},
    UBb = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.r3 = function (a) {
    a = a.target;
    var b = this.GG;
    b && 3 == g.Ln(a) ? b.KL() : this.BT(a);
  };
  g.k.BT = function (a) {
    try {
      if (a == this.rj)
        a: {
          var b = g.Ln(this.rj),
            c = this.rj.B,
            d = this.rj.getStatus();
          if ((g.Cf && !g.Uc(10)) || (g.Vc && !g.Tc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Nn(this.rj))) break a;
          this.Iu ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Un(3) : this.j.Un(2));
          $Bb(this);
          var e = this.rj.getStatus();
          this.cC = e;
          var f = g.Nn(this.rj);
          if ((this.mq = 200 == e)) {
            4 == b && P8(this);
            if (this.Ea) {
              for (a = !0; !this.Iu && this.IG < f.length; ) {
                var h = WBb(this, f);
                if (h == UBb) {
                  4 == b && ((this.Xr = 4), M8(15), (a = !1));
                  break;
                } else if (h == VBb) {
                  this.Xr = 4;
                  M8(16);
                  a = !1;
                  break;
                } else aCb(this, h);
              }
              4 == b && 0 == f.length && ((this.Xr = 1), M8(17), (a = !1));
              this.mq = this.mq && a;
              a || (P8(this), Q8(this));
            } else aCb(this, f);
            this.mq &&
              !this.Iu &&
              (4 == b ? this.j.JG(this) : ((this.mq = !1), O8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Xr = 3), M8(13))
              : ((this.Xr = 0), M8(14)),
              P8(this),
              Q8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.dba = function (a) {
    K8((0, g.ib)(this.cba, this, a), 0);
  };
  g.k.cba = function (a) {
    this.Iu || ($Bb(this), aCb(this, a), O8(this));
  };
  g.k.QZ = function (a) {
    K8((0, g.ib)(this.bba, this, a), 0);
  };
  g.k.bba = function (a) {
    this.Iu || (P8(this), (this.mq = a), this.j.JG(this), this.j.Un(4));
  };
  g.k.cancel = function () {
    this.Iu = !0;
    P8(this);
  };
  g.k.q3 = function () {
    this.Tx = null;
    var a = Date.now();
    0 <= a - this.ML
      ? (2 != this.Sx && this.j.Un(3),
        P8(this),
        (this.Xr = 2),
        M8(18),
        Q8(this))
      : ZBb(this, this.ML - a);
  };
  g.k.getLastError = function () {
    return this.Xr;
  };
  g.k = dCb.prototype;
  g.k.OL = null;
  g.k.Qj = null;
  g.k.oK = !1;
  g.k.s0 = null;
  g.k.SH = null;
  g.k.BP = null;
  g.k.PL = null;
  g.k.Rl = null;
  g.k.qq = -1;
  g.k.dC = null;
  g.k.PC = null;
  g.k.connect = function (a) {
    this.PL = a;
    a = T8(this.j, null, this.PL);
    M8(3);
    this.s0 = Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.dC = b[0]),
        (this.PC = b[1])
          ? ((this.Rl = 1), eCb(this))
          : ((this.Rl = 2), fCb(this)))
      : (b8(a, "MODE", "init"),
        (this.Qj = new N8(this)),
        (this.Qj.Ju = this.OL),
        TBb(this.Qj, a, !1, null, !0),
        (this.Rl = 0));
  };
  g.k.Q5 = function (a) {
    if (a) (this.Rl = 2), fCb(this);
    else {
      M8(4);
      var b = this.j;
      b.No = b.Ds.qq;
      X8(b, 9);
    }
    a && this.Un(2);
  };
  g.k.NL = function (a) {
    return this.j.NL(a);
  };
  g.k.abort = function () {
    this.Qj && (this.Qj.cancel(), (this.Qj = null));
    this.qq = -1;
  };
  g.k.Vg = function () {
    return !1;
  };
  g.k.CT = function (a, b) {
    this.qq = a.cC;
    if (0 == this.Rl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.No = this.qq;
          X8(a, 2);
          return;
        }
        this.dC = c[0];
        this.PC = c[1];
      } else (a = this.j), (a.No = this.qq), X8(a, 2);
    else if (2 == this.Rl)
      if (this.oK) M8(7), (this.BP = Date.now());
      else if ("11111" == b) {
        if (
          (M8(6),
          (this.oK = !0),
          (this.SH = Date.now()),
          (a = this.SH - this.s0),
          !g.Cf || g.Uc(10) || 500 > a)
        )
          (this.qq = 200), this.Qj.cancel(), M8(12), U8(this.j, this, !0);
      } else M8(8), (this.SH = this.BP = Date.now()), (this.oK = !1);
  };
  g.k.JG = function () {
    this.qq = this.Qj.cC;
    if (this.Qj.mq)
      0 == this.Rl
        ? this.PC
          ? ((this.Rl = 1), eCb(this))
          : ((this.Rl = 2), fCb(this))
        : 2 == this.Rl &&
          ((!g.Cf || g.Uc(10) ? !this.oK : 200 > this.BP - this.SH)
            ? (M8(11), U8(this.j, this, !1))
            : (M8(12), U8(this.j, this, !0)));
    else {
      0 == this.Rl ? M8(9) : 2 == this.Rl && M8(10);
      var a = this.j;
      this.Qj.getLastError();
      a.No = this.qq;
      X8(a, 2);
    }
  };
  g.k.eC = function () {
    return this.j.eC();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Un = function (a) {
    this.j.Un(a);
  };
  g.k = gCb.prototype;
  g.k.Mo = null;
  g.k.fC = null;
  g.k.ek = null;
  g.k.Rg = null;
  g.k.QL = null;
  g.k.KG = null;
  g.k.DT = null;
  g.k.LG = null;
  g.k.gC = 0;
  g.k.t3 = 0;
  g.k.Ui = null;
  g.k.Zr = null;
  g.k.rq = null;
  g.k.Mu = null;
  g.k.Ds = null;
  g.k.iL = null;
  g.k.Wx = -1;
  g.k.ET = -1;
  g.k.No = -1;
  g.k.Vx = 0;
  g.k.Ux = 0;
  g.k.Lu = 8;
  g.ob(iCb, g.Ab);
  g.ob(jCb, g.Ab);
  g.k = gCb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.QL = b;
    this.fC = c || {};
    d && void 0 !== e && ((this.fC.OSID = d), (this.fC.OAID = e));
    this.Z ? (K8((0, g.ib)(this.dW, this, a), 100), lCb(this)) : this.dW(a);
  };
  g.k.disconnect = function () {
    mCb(this);
    if (3 == this.j) {
      var a = this.gC++,
        b = this.KG.clone();
      g.Mo(b, "SID", this.D);
      g.Mo(b, "RID", a);
      g.Mo(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.D, a);
      a.Sx = 2;
      a.Wr = a8(b.clone());
      new Image().src = a.Wr.toString();
      a.Rx = Date.now();
      O8(a);
    }
    wCb(this);
  };
  g.k.dW = function (a) {
    this.Ds = new dCb(this);
    this.Ds.OL = this.Mo;
    this.Ds.B = this.G;
    this.Ds.connect(a);
  };
  g.k.Vg = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.GT = function (a) {
    this.Zr = null;
    rCb(this, a);
  };
  g.k.FT = function () {
    this.rq = null;
    this.Rg = new N8(this, this.D, "rpc", this.N);
    this.Rg.Ju = this.Mo;
    this.Rg.LL = 0;
    var a = this.DT.clone();
    g.Mo(a, "RID", "rpc");
    g.Mo(a, "SID", this.D);
    g.Mo(a, "CI", this.iL ? "0" : "1");
    g.Mo(a, "AID", this.Wx);
    W8(this, a);
    if (!g.Cf || g.Uc(10))
      g.Mo(a, "TYPE", "xmlhttp"), TBb(this.Rg, a, !0, this.LG, !1);
    else {
      g.Mo(a, "TYPE", "html");
      var b = this.Rg,
        c = !!this.LG;
      b.Sx = 3;
      b.Wr = a8(a.clone());
      YBb(b, c);
    }
  };
  g.k.CT = function (a, b) {
    if (0 != this.j && (this.Rg == a || this.ek == a))
      if (((this.No = a.cC), this.ek == a && 3 == this.j))
        if (7 < this.Lu) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.rq) {
                  if (this.Rg)
                    if (this.Rg.Rx + 3e3 < this.ek.Rx)
                      V8(this), this.Rg.cancel(), (this.Rg = null);
                    else break a;
                  uCb(this);
                  M8(19);
                }
              }
            else
              (this.ET = a[1]),
                0 < this.ET - this.Wx &&
                  37500 > a[2] &&
                  this.iL &&
                  0 == this.Ux &&
                  !this.Mu &&
                  (this.Mu = K8((0, g.ib)(this.u3, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Rg == a && V8(this), !g.fc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Wx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.LG = c[2]),
                  (c = c[3]),
                  null != c ? (this.Lu = c) : (this.Lu = 6),
                  (this.j = 3),
                  this.Ui && this.Ui.JT(),
                  (this.DT = T8(this, this.eC() ? this.LG : null, this.QL)),
                  sCb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Ui && this.Ui.IT(c),
                (this.Ux = 0));
  };
  g.k.u3 = function () {
    null != this.Mu &&
      ((this.Mu = null), this.Rg.cancel(), (this.Rg = null), uCb(this), M8(20));
  };
  g.k.JG = function (a) {
    if (this.Rg == a) {
      V8(this);
      this.Rg = null;
      var b = 2;
    } else if (this.ek == a) (this.ek = null), (b = 1);
    else return;
    this.No = a.cC;
    if (0 != this.j)
      if (a.mq)
        if (1 == b) {
          b = a.Ku ? a.Ku.length : 0;
          a = Date.now() - a.Rx;
          var c = L8;
          c.dispatchEvent(new iCb(c, b, a, this.Vx));
          kCb(this);
          this.C.length = 0;
        } else sCb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.No))) {
          if ((d = 1 == b))
            this.ek || this.Zr || 1 == this.j || 2 <= this.Vx
              ? (d = !1)
              : ((this.Zr = K8(
                  (0, g.ib)(this.GT, this, a),
                  tCb(this, this.Vx)
                )),
                this.Vx++,
                (d = !0));
          d = !(d || (2 == b && uCb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.s3 = function (a) {
    if (!g.Fb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.dda = function (a) {
    a ? M8(2) : (M8(1), vCb(this, 8));
  };
  g.k.NL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.en();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ui && this.Ui.isActive(this);
  };
  g.k.Un = function (a) {
    var b = L8;
    b.dispatchEvent(new jCb(b, a));
  };
  g.k.eC = function () {
    return !(!g.Cf || g.Uc(10));
  };
  g.k = xCb.prototype;
  g.k.JT = function () {};
  g.k.IT = function () {};
  g.k.HT = function () {};
  g.k.RL = function () {};
  g.k.KT = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = yCb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Fb(this.j, a) || g.Fb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Vgb)(b, a);
    0 <= c ? (g.Gb(b, c), (b = !0)) : (b = !1);
    return b || g.Ib(this.B, a);
  };
  g.k.lm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(zCb, g.Ab);
  g.w(ACb, g.Ab);
  g.ob(Y8, g.I);
  g.k = Y8.prototype;
  g.k.Vaa = function () {
    this.hj = Math.min(3e5, 2 * this.hj);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.hj + 15e3 * Math.random();
    g.Ru(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.hj = 5e3;
  };
  g.ob(CCb, xCb);
  g.k = CCb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Kh = function (a) {
    return this.C.Kh(a);
  };
  g.k.ra = function (a, b) {
    return this.C.ra.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.vb(this.C),
      this.disconnect(),
      g.vb(this.B),
      (this.B = null),
      (this.va = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new gCb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ra
        ),
        e = this.j;
      e && (e.Ui = null);
      d.Ui = this;
      this.j = d;
      DCb(this);
      if (this.j) {
        d = g.nB("ID_TOKEN");
        var f = this.j.Mo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Mo = f;
      }
      e
        ? ((3 != e.getState() && 0 == oCb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Wx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    DCb(this);
    this.j && (3 == this.j.getState() && rCb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.rd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Uz() && (DCb(this), nCb(this.j, a));
  };
  g.k.JT = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) nCb(this.j, a[b]);
    }
    this.ra("handlerOpened");
    Zzb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.HT = function (a) {
    var b = 2 == a && 401 == this.j.No;
    4 == a || b || this.B.start();
    this.ra("handlerError", a, b);
    eAb(this.Ea, "BROWSER_CHANNEL");
  };
  g.k.RL = function (a, b) {
    if (!this.B.isActive()) this.ra("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    aAb(this.Ia, "BROWSER_CHANNEL");
    a &&
      this.Xa.j.TL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.fb.j.TL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.KT = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.rd(a, this.K);
    return a;
  };
  g.k.IT = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.ra("handlerMessage", new BCb(a[0], a[1]));
    cAb(this.Ma, "BROWSER_CHANNEL");
  };
  g.k.Uz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Fr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Wa && this.j) {
      var b = this.j.Mo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Mo = b;
    }
  };
  g.k.Ts = function () {
    return this.N.id;
  };
  g.k.Ys = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.gx = function () {
    var a = this.B;
    g.Su(a.j);
    a.start();
  };
  g.k.qca = function () {
    this.B.isActive();
    0 == oCb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(FCb, g.Ld);
  g.k = FCb.prototype;
  g.k.connect = function (a, b, c) {
    this.Jd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Jd.disconnect(a);
  };
  g.k.gx = function () {
    this.Jd.gx();
  };
  g.k.Ts = function () {
    return this.Jd.Ts();
  };
  g.k.Ys = function () {
    return this.Jd.Ys();
  };
  g.k.Uz = function () {
    return this.Jd.Uz();
  };
  g.k.x3 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Jd,
      b = this.j;
    g.EC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.iL,
      sessionId: a.j.D,
      arrayId: a.j.Wx,
    });
    g.EC("yt-remote-session-screen-id", b);
    a = i8();
    b = j8();
    g.Fb(a, b) || a.push(b);
    wAb(a);
    yAb();
  };
  g.k.v3 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.w3 = function (a) {
    this.dispatchEvent(new zCb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new ACb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Jd.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.Jd.Fr(a);
  };
  g.k.dispose = function () {
    this.Jd.dispose();
  };
  g.k = GCb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      ICb(this),
      (a = g.nB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.g9 && (this.B.mdxVersion = "" + this.j.g9),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.e6 && (this.B.cst = this.j.e6),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new J8(this.pathPrefix, {
        q8: "gsessionid",
        k9: this.D,
        l9: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      HCb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    ICb(this);
    this.channel &&
      (0 !== this.Y ? (this.B.ui = "" + this.Y) : delete this.B.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.Ys = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.gx = function () {
    var a = this.C;
    g.Su(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (ICb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Fr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Ts = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ra = function (a) {
    return this.G.ra.apply(this.G, [a].concat(g.pa(g.Ia.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Kh = function (a) {
    return this.G.Kh(a);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.vb(this.G),
      this.disconnect(),
      g.vb(this.C),
      (this.Ca = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.w(JCb, g.Ld);
  g.k = JCb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.gx = function () {
    this.j.gx();
  };
  g.k.Ts = function () {
    return this.j.Ts();
  };
  g.k.Ys = function () {
    return this.j.Ys();
  };
  g.k.Uz = function () {
    return 3 === this.j.K;
  };
  g.k.A3 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.y3 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.z3 = function (a) {
    this.dispatchEvent(new zCb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new ACb(401 === this.j.Jg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.j.Fr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var RCb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.ob(g9, g.JF);
  g9.prototype.Sk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!tAb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? h8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.w(VCb, g.JF);
  g.k = VCb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.rd) && this.k_();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.rd) || (g.JB(this.rd), (this.rd = NaN));
  };
  g.k.xa = function () {
    this.stop();
    g.JF.prototype.xa.call(this);
  };
  g.k.k_ = function () {
    this.rd = NaN;
    this.j = g.NB($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.ib)(this.C3, this),
      onError: (0, g.ib)(this.B3, this),
      onTimeout: (0, g.ib)(this.D3, this),
    });
  };
  g.k.C3 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.ra("pairingComplete", new e8(a), b);
  };
  g.k.B3 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= PEb.length
        ? this.ra("pairingFailed", Error("DIAL polling timed out"))
        : ((a = PEb[this.B]),
          (this.rd = g.HB((0, g.ib)(this.k_, this), a)),
          this.B++)
      : this.ra("pairingFailed", Error("Server error " + a.status));
  };
  g.k.D3 = function () {
    this.j = null;
    this.ra("pairingFailed", Error("Server not responding"));
  };
  var PEb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.ob(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.ra("screenChange");
    !g.FC("yt-remote-lounge-token-expiration") && WCb(this);
    g.JB(this.j);
    this.j = g.HB((0, g.ib)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    SCb(this, a);
    j9(this, !1);
    this.ra("screenChange");
    b(a);
    a.token || WCb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    UCb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.ra("screenChange");
  };
  g.k.hL = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.ra("screenChange");
  };
  g.k.xa = function () {
    g.JB(this.j);
    i9.Vf.xa.call(this);
  };
  g.k.N7 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.M7 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(YCb, g.JF);
  g.k = YCb.prototype;
  g.k.start = function () {
    var a = parseInt(g.FC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.kb() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.kb() + 3e5),
        g.EC("yt-remote-fast-check-period", this.D),
        this.wR());
  };
  g.k.isEmpty = function () {
    return g.md(this.j);
  };
  g.k.update = function () {
    XCb("Updating availability on schedule.");
    var a = this.K(),
      b = g.cd(
        this.j,
        function (c, d) {
          return c && !!h8(a, d);
        },
        this
      );
    aDb(this, b);
  };
  g.k.xa = function () {
    g.JB(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.JF.prototype.xa.call(this);
  };
  g.k.wR = function () {
    g.JB(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = bDb(this);
    if (Rzb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = ECb(
        this.G,
        b,
        { lounge_token: g.id(a).join(",") },
        (0, g.ib)(this.Baa, this, a),
        (0, g.ib)(this.Aaa, this)
      );
    } else aDb(this, {}), k9(this);
  };
  g.k.Baa = function (a, b) {
    this.B = null;
    var c = g.id(bDb(this));
    if (g.Zb(c, g.id(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      aDb(this, c);
      k9(this);
    } else this.rg("Changing Screen set during request."), this.wR();
  };
  g.k.Aaa = function (a) {
    this.rg("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.rg = function (a) {
    b9("OnlineScreenService", a);
  };
  g.ob(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.ra("screenChange"),
      this.j.isEmpty() || this.ra("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.hL = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.hL(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Sk = function (a) {
    return a
      ? this.screens
      : g.Kb(
          this.screens,
          g.ot(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.LT = function () {
    return g.ot(
      this.Sk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.NT = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new VCb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.vb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.vb(l);
      f(m);
    });
    l.start();
    return (0, g.ib)(l.stop, l);
  };
  g.k.E3 = function (a, b, c, d) {
    g.NB($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.ib)(function (e, f) {
        e = new e8(f.screen || {});
        if (!e.name || fDb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); fDb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.ib)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.ib)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.xa = function () {
    g.vb(this.B);
    g.vb(this.j);
    l9.Vf.xa.call(this);
  };
  g.k.X7 = function () {
    hDb(this);
    this.ra("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.ob(n9, g.JF);
  g.k = n9.prototype;
  g.k.Gj = function (a) {
    this.isDisposed() ||
      (a && (p9(this, "" + a), this.ra("sessionFailed")),
      (this.j = null),
      this.ra("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Ea, a);
  };
  g.k.OT = function () {
    return null;
  };
  g.k.PR = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.ib)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.ib)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.xa = function () {
    this.PR("");
    n9.Vf.xa.call(this);
  };
  g.w(q9, n9);
  g.k = q9.prototype;
  g.k.NR = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      tDb(this);
      this.Ca = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.va);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ia
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.va);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia);
    oDb(this, "getMdxSessionStatus");
  };
  g.k.gA = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Nm(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.ib)(function () {
            this.Gj();
          }, this),
          (0, g.ib)(function () {
            this.Gj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.Gj(Error("Stopping cast device without session."));
  };
  g.k.PR = function () {};
  g.k.xa = function () {
    this.info("disposeInternal");
    tDb(this);
    this.C &&
      (this.C.removeUpdateListener(this.va),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ia
      ));
    this.C = null;
    n9.prototype.xa.call(this);
  };
  g.k.nba = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = c8(b)), g.bb(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.Nm(b)),
            a)
          ) {
            case "mdxSessionStatus":
              lDb(this, b);
              break;
            case "loungeToken":
              pDb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.nX = function (a, b, c, d) {
    g.JB(this.Z);
    this.Z = 0;
    eDb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.ib)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.HB((0, g.ib)(this.nX, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.OT = function () {
    return this.C;
  };
  g.k.F3 = function (a) {
    this.isDisposed() || a || (p9(this, "Cast session died."), this.Gj());
  };
  g.w(r9, n9);
  g.k = r9.prototype;
  g.k.NR = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Ma);
  };
  g.k.gA = function (a) {
    this.Na = a;
    this.ma();
  };
  g.k.stop = function () {
    BDb(this);
    this.C
      ? this.C.stop(
          (0, g.ib)(this.Gj, this, null),
          (0, g.ib)(this.Gj, this, "Failed to stop DIAL device.")
        )
      : this.Gj();
  };
  g.k.xa = function () {
    BDb(this);
    this.C && this.C.removeUpdateListener(this.Ma);
    this.C = null;
    n9.prototype.xa.call(this);
  };
  g.k.G3 = function (a) {
    this.isDisposed() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.Gj());
  };
  g.w(u9, n9);
  u9.prototype.stop = function () {
    this.Gj();
  };
  u9.prototype.NR = function () {};
  u9.prototype.gA = function () {
    g.JB(this.C);
    this.C = NaN;
    var a = h8(this.D.Sk(), this.B.label);
    a ? o9(this, a) : this.Gj(Error("No such screen"));
  };
  u9.prototype.xa = function () {
    g.JB(this.C);
    this.C = NaN;
    n9.prototype.xa.call(this);
  };
  g.w(v9, g.JF);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.ib)(this.iaa, this);
    c = new chrome.cast.ApiConfig(c, (0, g.ib)(this.MZ, this), e, d, a);
    c.customDialLaunchCallback = (0, g.ib)(this.e$, this);
    chrome.cast.initialize(
      c,
      (0, g.ib)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          OCb(),
          this.B.subscribe("onlineScreenChange", (0, g.ib)(this.PT, this)),
          (this.C = EDb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.ib)(function (f) {
              this.rg("Failed to set initial custom receivers: " + g.Nm(f));
            }, this)
          ),
          this.ra("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.ib)(function (f) {
        this.rg("Failed to initialize API: " + g.Nm(f));
        b(!1);
      }, this)
    );
  };
  g.k.zca = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        a = h8(this.B.Sk(), a);
        if (!a) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == a.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        c = CDb(this, a);
        c ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(c),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.ib)(function (d) {
              this.rg("Failed to set initial custom receivers: " + g.Nm(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
        y9(this, new u9(this.B, c), !0);
      }
      this.j.PR(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.Cca = function (a) {
    this.isDisposed()
      ? this.rg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.gA(a)
      : this.rg("Setting connection data without a session");
  };
  g.k.I3 = function () {
    this.isDisposed()
      ? this.rg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.ib)(this.MZ, this),
      (0, g.ib)(this.Eaa, this)
    );
  };
  g.k.xa = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.ib)(this.PT, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = LCb,
      b = g.Wa("yt.mdx.remote.debug.handlers_");
    g.Ib(b || [], a);
    g.vb(this.j);
    g.JF.prototype.xa.call(this);
  };
  g.k.rg = function (a) {
    b9("Controller", a);
  };
  g.k.OZ = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.ra("yt-remote-cast2-session-change", b));
  };
  g.k.eaa = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.rg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.rg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.rg("onReceiverAction_ called without receiver.");
  };
  g.k.e$ = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.rg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.rg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.ra("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.rg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = yDb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.qB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = zDb(b, c)))
          : (a = zDb(b, c)))
      : (a = wDb(b));
    return a;
  };
  g.k.MZ = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.rg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = h8(this.B.Sk(), d.label);
        e &&
          f8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.vb(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.ib)(this.OZ, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return DDb(b, b.j);
          }),
          this.j.gA(null));
        this.j.NR(a);
      }
    }
  };
  g.k.H3 = function () {
    return this.j ? this.j.OT() : null;
  };
  g.k.Eaa = function (a) {
    this.isDisposed() ||
      (this.rg("Failed to estabilish a session: " + g.Nm(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.ra("yt-remote-cast2-session-failed"));
  };
  g.k.iaa = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b && this.ra("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.PT = function () {
    this.isDisposed() ||
      ((this.C = EDb(this)),
      w9("Updating custom receivers: " + g.Nm(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.ib)(function () {
          this.rg("Failed to set custom receivers.");
        }, this)
      ),
      this.ra("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.Cca;
  v9.prototype.setConnectedScreenStatus = v9.prototype.zca;
  v9.prototype.stopSession = v9.prototype.I3;
  v9.prototype.getCastSession = v9.prototype.H3;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var NDb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    TDb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.Cp = a.hasPrevious),
      (this.Vk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.xl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(UDb(this));
  };
  g.w(L9, g.JF);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Ys = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.gx = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Sd, R9(this, "play")) : Q9(this, "play"),
        XDb(this, 1, I9(M9(this))),
        this.ra("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Sd, R9(this, "pause"))
          : Q9(this, "pause"),
        XDb(this, 2, I9(M9(this))),
        this.ra("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Sd, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      XDb(this, 3, a);
      this.ra("remotePlayerChange");
    } else O9(this, g.jb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Sd, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      TDb(a);
      P9(this, a);
      this.ra("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.ib)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.ib)(function () {
              this.rg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.ib)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.ib)(function () {
              this.rg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.jb(this.setVolume, a, b));
  };
  g.k.QT = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.Nm(b.style)),
        g.rd(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.jb(this.QT, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.jb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.Nm(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.iK = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.jb(this.iK, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.jb(this.nextVideo, a, b));
  };
  g.k.oH = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.ra("remotePlayerChange");
    } else O9(this, this.oH);
  };
  g.k.sW = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.sW);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.ra("proxyStateChange", a, this.C);
    }
    g.JF.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    WDb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.JF.prototype.xa.call(this);
  };
  g.k.UR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.ra("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.caa = function (a, b) {
    this.ra(a, b);
  };
  g.k.U9 = function (a) {
    if (!a) this.KE(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.KE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        YDb(this),
        this.ra("remotePlayerChange");
  };
  g.k.T9 = function (a) {
    a ? (YDb(this), this.ra("remotePlayerChange")) : this.KE(null);
  };
  g.k.uS = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.X9 = function () {
    var a = QDb();
    a && K9(this, a);
  };
  g.k.rg = function (a) {
    b9("CP", a);
  };
  g.w(U9, g.JF);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Ma ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.Nm(m));
      this.B.connect({ method: c, params: g.Nm(m) }, a, zAb());
    } else S9("Connecting without params"), this.B.connect({}, a, zAb());
    bEb(this);
  };
  g.k.Fr = function (a) {
    this.B.Fr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Va("yt.mdx.remote.remoteClient_", null),
      this.ra("beforeDispose"),
      T9(this, 3));
    g.JF.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    cEb(this);
    eEb(this);
    dEb(this);
    g.JB(this.Z);
    this.Z = NaN;
    g.JB(this.Y);
    this.Y = NaN;
    this.D = null;
    g.wC(this.ma);
    this.ma.length = 0;
    this.B.dispose();
    g.JF.prototype.xa.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.lY = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.t7 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.KD()) ? this.B.Uz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.pz = function (a) {
    S9("Disconnecting with " + a);
    g.Va("yt.mdx.remote.remoteClient_", null);
    cEb(this);
    this.ra("beforeDisconnect", a);
    1 == a && k8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.o7 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return UDb(a);
  };
  g.k.Eca = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.JB(this.Z),
      (this.Z = g.HB(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.Nm(this.j.trackData) == g.Nm(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.bc(
      d,
      function (e) {
        this.ra(e);
      },
      this
    );
  };
  g.k.iX = function () {
    var a = this.B.Ts(),
      b = g.Db(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.KD = function () {
    return this.B.Ys();
  };
  g.k.X6 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.Y6 = function () {
    return this.N || "";
  };
  g.k.J3 = function () {
    !isNaN(this.KD()) && this.B.gx();
  };
  g.k.xca = function (a, b) {
    V9(this, a, b);
    gEb(this);
  };
  g.k.RT = function () {
    var a = g.XB("SAPISID", "") || g.XB("__Secure-1PAPISID") || "",
      b = g.XB("__Secure-3PAPISID", "") || "";
    if (!a && !b) return "";
    a = g.Dg(g.Cg(a), 2);
    b = g.Dg(g.Cg(b), 2);
    return g.Dg(g.Cg("," + a + "," + b), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Kh;
  U9.prototype.getProxyState = U9.prototype.t7;
  U9.prototype.disconnect = U9.prototype.pz;
  U9.prototype.getPlayerContextData = U9.prototype.o7;
  U9.prototype.setPlayerContextData = U9.prototype.Eca;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.iX;
  U9.prototype.getReconnectTimeout = U9.prototype.KD;
  U9.prototype.getAutoplayMode = U9.prototype.X6;
  U9.prototype.getAutoplayVideoId = U9.prototype.Y6;
  U9.prototype.reconnect = U9.prototype.J3;
  U9.prototype.sendMessage = U9.prototype.xca;
  U9.prototype.getXsrfToken = U9.prototype.RT;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.lY;
  g.w(sEb, g9);
  g.k = sEb.prototype;
  g.k.Sk = function (a) {
    return this.kh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.kh.$_c(a);
  };
  g.k.get = function (a) {
    return this.kh.$_g(a);
  };
  g.k.start = function () {
    this.kh.$_st();
  };
  g.k.add = function (a, b, c) {
    this.kh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.kh.$_r(a, b, c);
  };
  g.k.hL = function (a, b, c, d) {
    this.kh.$_un(a, b, c, d);
  };
  g.k.xa = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.kh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.kh = null;
    g9.prototype.xa.call(this);
  };
  g.k.K3 = function () {
    this.ra("screenChange");
  };
  g.k.K$ = function () {
    this.ra("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.E3;
  l9.prototype.$_gsppc = l9.prototype.NT;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.hL;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Sk;
  l9.prototype.$_gos = l9.prototype.LT;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Kh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    DEb = null,
    a$ = [];
  g.w(IEb, g.I);
  g.k = IEb.prototype;
  g.k.xa = function () {
    g.I.prototype.xa.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Lc;
    a.unsubscribe("proxyStateChange", this.LZ, this);
    a.unsubscribe("remotePlayerChange", this.QE, this);
    a.unsubscribe("remoteQueueChange", this.RJ, this);
    a.unsubscribe("previousNextChange", this.IZ, this);
    a.unsubscribe("nowAutoplaying", this.EZ, this);
    a.unsubscribe("autoplayDismissed", this.nZ, this);
    this.Lc = this.module = null;
  };
  g.k.Uk = function (a) {
    var b = g.Ia.apply(1, arguments);
    if (2 != this.Lc.C)
      if (j$(this)) {
        if (1081 != M9(this.Lc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Lc).isPlaying() ? this.Lc.pause() : this.Lc.play();
              break;
            case "control_play":
              this.Lc.play();
              break;
            case "control_pause":
              this.Lc.pause();
              break;
            case "control_seek":
              this.K.KL(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              KEb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            KEb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.R9 = function (a) {
    this.N.f3(a);
  };
  g.k.Bda = function (a) {
    this.Uk("control_subtitles_set_track", g.md(a) ? null : a);
  };
  g.k.z0 = function () {
    var a = this.J.getOption("captions", "track");
    g.md(a) || KEb(this, a);
  };
  g.k.Sc = function (a) {
    this.module.Sc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.v$ = function () {
    g.md(this.C) || LEb(this, this.C);
    this.D = !1;
  };
  g.k.LZ = function (a, b) {
    this.B.stop();
    2 === b && this.r0();
  };
  g.k.QE = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Lc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Xh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Xh = 0;
          break;
        default:
          this.module.Xh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Hc(new g.sL(8));
          this.q0();
          break;
        case 1085:
        case 3:
          this.Hc(new g.sL(9));
          break;
        case 1083:
        case 0:
          this.Hc(new g.sL(2));
          this.K.stop();
          this.Sc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Hc(new g.sL(4));
          break;
        case 2:
          this.Hc(new g.sL(4));
          this.Sc(I9(a));
          break;
        case -1:
          this.Hc(new g.sL(64));
          break;
        case -1e3:
          this.Hc(
            new g.sL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              NH: 2,
            })
          );
      }
      a = M9(this.Lc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), LEb(this, a));
      a = M9(this.Lc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.l1();
    } else JEb(this);
  };
  g.k.IZ = function () {
    this.J.ra("mdxpreviousnextchange");
  };
  g.k.RJ = function () {
    j$(this) || JEb(this);
  };
  g.k.EZ = function (a) {
    isNaN(a) || this.J.ra("mdxnowautoplaying", a);
  };
  g.k.nZ = function () {
    this.J.ra("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Lc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Lc).playerState ? k$(this, a) : b && this.Lc.seekTo(a);
  };
  g.k.l1 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Lc);
      this.events.Uc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        GEb(a, c);
      });
    }
  };
  g.k.q0 = function () {
    this.j.stop();
    if (!this.Lc.isDisposed()) {
      var a = M9(this.Lc);
      a.isPlaying() && this.Hc(new g.sL(8));
      this.Sc(I9(a));
      this.j.start();
    }
  };
  g.k.r0 = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Lc.Ys();
    2 == this.Lc.C && !isNaN(a) && this.B.start();
  };
  g.k.Hc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.fDa(b, a)) {
      var c = g.FG(a, 2);
      c !== g.FG(this.G, 2) && this.J.uB(c);
      this.G = a;
      NEb(this.module, b, a);
    }
  };
  g.w(l$, g.V);
  l$.prototype.yd = function () {
    this.j.show();
  };
  l$.prototype.Qb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    m8("mdx-privacy-popup-cancel");
    this.Qb();
  };
  l$.prototype.C = function () {
    m8("mdx-privacy-popup-confirm");
    this.Qb();
  };
  g.w(m$, g.V);
  m$.prototype.onStateChange = function (a) {
    this.Ic(a.state);
  };
  m$.prototype.Ic = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.FG(a, 128)
        ? g.XJ("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.XJ("Playing on $RECEIVER_NAME", b)
        : g.XJ("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(n$, g.LX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.Vt = g.cc(a, this.j, this)),
        g.MX(this, g.Er(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Rj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Kk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.Vt[a].name;
  };
  n$.prototype.wh = function (a) {
    g.LX.prototype.wh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Vt[a]);
    this.Hb.Qb();
  };
  g.w(MEb, g.OV);
  g.k = MEb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.WR(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    xEb(b, a);
    this.subscriptions.push(g.tE("yt-remote-before-disconnect", this.P9, this));
    this.subscriptions.push(
      g.tE("yt-remote-connection-change", this.jaa, this)
    );
    this.subscriptions.push(
      g.tE("yt-remote-receiver-availability-change", this.KZ, this)
    );
    this.subscriptions.push(g.tE("yt-remote-auto-connect", this.haa, this));
    this.subscriptions.push(g.tE("yt-remote-receiver-resumed", this.faa, this));
    this.subscriptions.push(g.tE("mdx-privacy-popup-confirm", this.Lba, this));
    this.subscriptions.push(g.tE("mdx-privacy-popup-cancel", this.Kba, this));
    this.KZ();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.OV.prototype.load.call(this);
    this.Tl = new IEb(this, this.player, this.Lc);
    var a = (a = FEb()) ? a.currentTime : 0;
    var b = CEb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Sc(a);
    NEb(this, this.Ne, this.Ne);
    this.player.Zp(6);
  };
  g.k.unload = function () {
    this.player.ra("mdxautoplaycanceled");
    this.Gs = this.Lp;
    g.xb(this.Tl, this.Lc);
    this.Lc = this.Tl = null;
    g.OV.prototype.unload.call(this);
    this.player.Zp(5);
    o$(this);
  };
  g.k.xa = function () {
    g.uE(this.subscriptions);
    g.OV.prototype.xa.call(this);
  };
  g.k.ME = function (a) {
    var b = g.Ia.apply(1, arguments);
    this.loaded && this.Tl.Uk.apply(this.Tl, [a].concat(g.pa(b)));
  };
  g.k.getAdState = function () {
    return this.Xh;
  };
  g.k.Cp = function () {
    return this.Lc ? M9(this.Lc).Cp : !1;
  };
  g.k.Vk = function () {
    return this.Lc ? M9(this.Lc).Vk : !1;
  };
  g.k.Sc = function (a, b) {
    this.vY = a || 0;
    this.player.ra("progresssync", a, b);
    this.player.Bc("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.vY;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Lc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Wh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Lc && this.Lc.nextVideo();
  };
  g.k.iK = function () {
    this.Lc && this.Lc.iK();
  };
  g.k.P9 = function (a) {
    1 === a && (this.dR = this.Lc ? M9(this.Lc) : null);
  };
  g.k.jaa = function () {
    var a = CEb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Gs;
      this.loaded && this.unload();
      this.Lc = a;
      this.dR = null;
      b.key !== this.Lp.key && ((this.Gs = b), this.load());
    } else
      g.vb(this.Lc),
        (this.Lc = null),
        this.loaded &&
          (this.unload(),
          (a = this.dR) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.KZ = function () {
    var a = [this.Lp],
      b = a.concat,
      c = yEb();
    C9() &&
      g.FC("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Vt = b.call(a, c);
    a = AEb() || this.Lp;
    p$(this, a);
    this.player.Bc("onMdxReceiversChange");
  };
  g.k.haa = function () {
    var a = AEb();
    p$(this, a);
  };
  g.k.faa = function () {
    this.Gs = AEb();
  };
  g.k.Lba = function () {
    this.iF = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.Kba = function () {
    this.iF = !1;
    o$(this);
    p$(this, this.Lp);
    this.Gs = this.Lp;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Nh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Vt;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? RDb() : p$(this, b)),
          this.loaded ? this.Gs : this.Lp
        );
      case "quickCast":
        return 2 === this.Vt.length &&
          "cast-selector-receiver" === this.Vt[1].key
          ? (b && RDb(), !0)
          : !1;
    }
  };
  g.k.uS = function () {
    this.Lc.uS();
  };
  g.k.yl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.nB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.nB("SESSION_INDEX") && !g.nB("LOGGED_IN"));
  };
  g.NV("remote", MEb);
})(_yt_player);
