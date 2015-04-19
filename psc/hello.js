// Generated by psc version 0.6.9.3
var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    
    function cons(e) {
      return function(l) {
        return [e].concat(l);
      };
    }
    ;
    
    function showStringImpl(s) {
      return JSON.stringify(s);
    }
    ;
    
    function showNumberImpl(n) {
      return n.toString();
    }
    ;
    
    function showArrayImpl(f) {
      return function(xs) {
        var ss = [];
        for (var i = 0, l = xs.length; i < l; i++) {
          ss[i] = f(xs[i]);
        }
        return '[' + ss.join(',') + ']';
      };
    }
    ;
    
    function numAdd(n1) {
      return function(n2) {
        return n1 + n2;
      };
    }
    ;
    
    function numSub(n1) {
      return function(n2) {
        return n1 - n2;
      };
    }
    ;
    
    function numMul(n1) {
      return function(n2) {
        return n1 * n2;
      };
    }
    ;
    
    function numDiv(n1) {
      return function(n2) {
        return n1 / n2;
      };
    }
    ;
    
    function numMod(n1) {
      return function(n2) {
        return n1 % n2;
      };
    }
    ;
    
    function refEq(r1) {
      return function(r2) {
        return r1 === r2;
      };
    }
    ;
    
    function refIneq(r1) {
      return function(r2) {
        return r1 !== r2;
      };
    }
    ;
    
    function eqArrayImpl(f) {
      return function(xs) {
        return function(ys) {
          if (xs.length !== ys.length) return false;
          for (var i = 0; i < xs.length; i++) {
            if (!f(xs[i])(ys[i])) return false;
          }
          return true;
        };
      };
    }
    ;
    
    function unsafeCompareImpl(lt) {
      return function(eq) {
        return function(gt) {
          return function(x) {
            return function(y) {
              return x < y ? lt : x > y ? gt : eq;
            };
          };
        };
      };
    }
    ;
    
    function numShl(n1) {
      return function(n2) {
        return n1 << n2;
      };
    }
    ;
    
    function numShr(n1) {
      return function(n2) {
        return n1 >> n2;
      };
    }
    ;
    
    function numZshr(n1) {
      return function(n2) {
        return n1 >>> n2;
      };
    }
    ;
    
    function numAnd(n1) {
      return function(n2) {
        return n1 & n2;
      };
    }
    ;
    
    function numOr(n1) {
      return function(n2) {
        return n1 | n2;
      };
    }
    ;
    
    function numXor(n1) {
      return function(n2) {
        return n1 ^ n2;
      };
    }
    ;
    
    function numComplement(n) {
      return ~n;
    }
    ;
    
    function boolAnd(b1) {
      return function(b2) {
        return b1 && b2;
      };
    }
    ;
    
    function boolOr(b1) {
      return function(b2) {
        return b1 || b2;
      };
    }
    ;
    
    function boolNot(b) {
      return !b;
    }
    ;
    
    function concatString(s1) {
      return function(s2) {
        return s1 + s2;
      };
    }
    ;
    var Unit = function (x) {
        return x;
    };
    var LT = (function () {
        function LT() {

        };
        LT.value = new LT();
        return LT;
    })();
    var GT = (function () {
        function GT() {

        };
        GT.value = new GT();
        return GT;
    })();
    var EQ = (function () {
        function EQ() {

        };
        EQ.value = new EQ();
        return EQ;
    })();
    var Semigroupoid = function ($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    var Category = function (__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    var Show = function (show) {
        this.show = show;
    };
    var Functor = function ($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    var Apply = function ($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    var Bind = function ($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    var Semiring = function ($times, $plus, one, zero) {
        this["*"] = $times;
        this["+"] = $plus;
        this.one = one;
        this.zero = zero;
    };
    var ModuloSemiring = function ($div, __superclass_Prelude$dotSemiring_0, mod) {
        this["/"] = $div;
        this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
        this.mod = mod;
    };
    var Ring = function ($minus, __superclass_Prelude$dotSemiring_0) {
        this["-"] = $minus;
        this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
    };
    var DivisionRing = function (__superclass_Prelude$dotModuloSemiring_1, __superclass_Prelude$dotRing_0) {
        this["__superclass_Prelude.ModuloSemiring_1"] = __superclass_Prelude$dotModuloSemiring_1;
        this["__superclass_Prelude.Ring_0"] = __superclass_Prelude$dotRing_0;
    };
    var Num = function (__superclass_Prelude$dotDivisionRing_0) {
        this["__superclass_Prelude.DivisionRing_0"] = __superclass_Prelude$dotDivisionRing_0;
    };
    var Eq = function ($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    var Ord = function (__superclass_Prelude$dotEq_0, compare) {
        this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
        this.compare = compare;
    };
    var Bits = function ($dot$amp$dot, $dot$up$dot, $dot$bar$dot, complement, shl, shr, zshr) {
        this[".&."] = $dot$amp$dot;
        this[".^."] = $dot$up$dot;
        this[".|."] = $dot$bar$dot;
        this.complement = complement;
        this.shl = shl;
        this.shr = shr;
        this.zshr = zshr;
    };
    var BoolLike = function ($amp$amp, not, $bar$bar) {
        this["&&"] = $amp$amp;
        this.not = not;
        this["||"] = $bar$bar;
    };
    var Semigroup = function ($less$greater) {
        this["<>"] = $less$greater;
    };
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $less$hash$greater = function (__dict_Functor_1) {
        return function (fa) {
            return function (f) {
                return $less$dollar$greater(__dict_Functor_1)(f)(fa);
            };
        };
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $dot$bar$dot = function (dict) {
        return dict[".|."];
    };
    var $dot$up$dot = function (dict) {
        return dict[".^."];
    };
    var $dot$amp$dot = function (dict) {
        return dict[".&."];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_2) {
        return $less$greater(__dict_Semigroup_2);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $percent = numMod;
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var zero = function (dict) {
        return dict.zero;
    };
    var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
    var unit = {};
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = new Show(function (_5) {
        return "Unit {}";
    });
    var showString = new Show(showStringImpl);
    var showOrdering = new Show(function (_15) {
        if (_15 instanceof LT) {
            return "LT";
        };
        if (_15 instanceof GT) {
            return "GT";
        };
        if (_15 instanceof EQ) {
            return "EQ";
        };
        throw new Error("Failed pattern match");
    });
    var showNumber = new Show(showNumberImpl);
    var showBoolean = new Show(function (_6) {
        if (_6) {
            return "true";
        };
        if (!_6) {
            return "false";
        };
        throw new Error("Failed pattern match");
    });
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_3) {
        return new Show(showArrayImpl(show(__dict_Show_3)));
    };
    var shl = function (dict) {
        return dict.shl;
    };
    var semiringNumber = new Semiring(numMul, numAdd, 1, 0);
    var semigroupoidArr = new Semigroupoid(function (f) {
        return function (g) {
            return function (x) {
                return f(g(x));
            };
        };
    });
    var semigroupUnit = new Semigroup(function (_23) {
        return function (_24) {
            return {};
        };
    });
    var semigroupString = new Semigroup(concatString);
    var semigroupOrdering = new Semigroup(function (_16) {
        return function (y) {
            if (_16 instanceof LT) {
                return LT.value;
            };
            if (_16 instanceof GT) {
                return GT.value;
            };
            if (_16 instanceof EQ) {
                return y;
            };
            throw new Error("Failed pattern match");
        };
    });
    var semigroupArr = function (__dict_Semigroup_4) {
        return new Semigroup(function (f) {
            return function (g) {
                return function (x) {
                    return $less$greater(__dict_Semigroup_4)(f(x))(g(x));
                };
            };
        });
    };
    var ringNumber = new Ring(numSub, function () {
        return semiringNumber;
    });
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_5) {
        return pure(__dict_Monad_5["__superclass_Prelude.Applicative_0"]());
    };
    var otherwise = true;
    var one = function (dict) {
        return dict.one;
    };
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (__dict_Ring_6) {
        return function (a) {
            return $minus(__dict_Ring_6)(zero(__dict_Ring_6["__superclass_Prelude.Semiring_0"]()))(a);
        };
    };
    var moduloSemiringNumber = new ModuloSemiring(numDiv, function () {
        return semiringNumber;
    }, function (_7) {
        return function (_8) {
            return 0;
        };
    });
    var mod = function (dict) {
        return dict.mod;
    };
    var liftM1 = function (__dict_Monad_7) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_7["__superclass_Prelude.Bind_1"]())(a)(function (_0) {
                    return $$return(__dict_Monad_7)(f(_0));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_8) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_8["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_8)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var functorArr = new Functor($less$less$less(semigroupoidArr));
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = new Eq(function (_11) {
        return function (_12) {
            return false;
        };
    }, function (_9) {
        return function (_10) {
            return true;
        };
    });
    var ordUnit = new Ord(function () {
        return eqUnit;
    }, function (_17) {
        return function (_18) {
            return EQ.value;
        };
    });
    var eqString = new Eq(refIneq, refEq);
    var ordString = new Ord(function () {
        return eqString;
    }, unsafeCompare);
    var eqNumber = new Eq(refIneq, refEq);
    var ordNumber = new Ord(function () {
        return eqNumber;
    }, unsafeCompare);
    var eqBoolean = new Eq(refIneq, refEq);
    var ordBoolean = new Ord(function () {
        return eqBoolean;
    }, function (_19) {
        return function (_20) {
            if (!_19 && !_20) {
                return EQ.value;
            };
            if (!_19 && _20) {
                return LT.value;
            };
            if (_19 && _20) {
                return EQ.value;
            };
            if (_19 && !_20) {
                return GT.value;
            };
            throw new Error("Failed pattern match");
        };
    });
    var divisionRingNumber = new DivisionRing(function () {
        return moduloSemiringNumber;
    }, function () {
        return ringNumber;
    });
    var numNumber = new Num(function () {
        return divisionRingNumber;
    });
    var $$const = function (a) {
        return function (_3) {
            return a;
        };
    };
    var $$void = function (__dict_Functor_10) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_10)($$const(unit))(fa);
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                var _45 = compare(__dict_Ord_12)(a1)(a2);
                if (_45 instanceof LT) {
                    return true;
                };
                return false;
            };
        };
    };
    var $less$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                var _46 = compare(__dict_Ord_13)(a1)(a2);
                if (_46 instanceof GT) {
                    return false;
                };
                return true;
            };
        };
    };
    var $greater = function (__dict_Ord_14) {
        return function (a1) {
            return function (a2) {
                var _47 = compare(__dict_Ord_14)(a1)(a2);
                if (_47 instanceof GT) {
                    return true;
                };
                return false;
            };
        };
    };
    var $greater$eq = function (__dict_Ord_15) {
        return function (a1) {
            return function (a2) {
                var _48 = compare(__dict_Ord_15)(a1)(a2);
                if (_48 instanceof LT) {
                    return false;
                };
                return true;
            };
        };
    };
    var categoryArr = new Category(function () {
        return semigroupoidArr;
    }, function (x) {
        return x;
    });
    var boolLikeBoolean = new BoolLike(boolAnd, boolNot, boolOr);
    var eqArray = function (__dict_Eq_9) {
        return new Eq(function (xs) {
            return function (ys) {
                return not(boolLikeBoolean)($eq$eq(eqArray(__dict_Eq_9))(xs)(ys));
            };
        }, function (xs) {
            return function (ys) {
                return eqArrayImpl($eq$eq(__dict_Eq_9))(xs)(ys);
            };
        });
    };
    var ordArray = function (__dict_Ord_11) {
        return new Ord(function () {
            return eqArray(__dict_Ord_11["__superclass_Prelude.Eq_0"]());
        }, function (_21) {
            return function (_22) {
                if (_21.length === 0 && _22.length === 0) {
                    return EQ.value;
                };
                if (_21.length === 0) {
                    return LT.value;
                };
                if (_22.length === 0) {
                    return GT.value;
                };
                if (_21.length >= 1) {
                    var _55 = _21.slice(1);
                    if (_22.length >= 1) {
                        var _53 = _22.slice(1);
                        var _51 = compare(__dict_Ord_11)(_21[0])(_22[0]);
                        if (_51 instanceof EQ) {
                            return compare(ordArray(__dict_Ord_11))(_55)(_53);
                        };
                        return _51;
                    };
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqOrdering = new Eq(function (x) {
        return function (y) {
            return not(boolLikeBoolean)($eq$eq(eqOrdering)(x)(y));
        };
    }, function (_13) {
        return function (_14) {
            if (_13 instanceof LT && _14 instanceof LT) {
                return true;
            };
            if (_13 instanceof GT && _14 instanceof GT) {
                return true;
            };
            if (_13 instanceof EQ && _14 instanceof EQ) {
                return true;
            };
            return false;
        };
    });
    var bitsNumber = new Bits(numAnd, numXor, numOr, numComplement, numShl, numShr, numZshr);
    var asTypeOf = function (x) {
        return function (_4) {
            return x;
        };
    };
    var applyArr = new Apply(function (f) {
        return function (g) {
            return function (x) {
                return f(x)(g(x));
            };
        };
    }, function () {
        return functorArr;
    });
    var bindArr = new Bind(function (m) {
        return function (f) {
            return function (x) {
                return f(m(x))(x);
            };
        };
    }, function () {
        return applyArr;
    });
    var applicativeArr = new Applicative(function () {
        return applyArr;
    }, $$const);
    var monadArr = new Monad(function () {
        return applicativeArr;
    }, function () {
        return bindArr;
    });
    var ap = function (__dict_Monad_16) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_16["__superclass_Prelude.Bind_1"]())(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_16["__superclass_Prelude.Bind_1"]())(a)(function (_1) {
                        return $$return(__dict_Monad_16)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        Semigroup: Semigroup, 
        BoolLike: BoolLike, 
        Bits: Bits, 
        Ord: Ord, 
        Eq: Eq, 
        Num: Num, 
        DivisionRing: DivisionRing, 
        Ring: Ring, 
        ModuloSemiring: ModuloSemiring, 
        Semiring: Semiring, 
        Monad: Monad, 
        Bind: Bind, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        ".^.": $dot$up$dot, 
        ".|.": $dot$bar$dot, 
        ".&.": $dot$amp$dot, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "-": $minus, 
        mod: mod, 
        "/": $div, 
        one: one, 
        "*": $times, 
        zero: zero, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "void": $$void, 
        "<#>": $less$hash$greater, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        otherwise: otherwise, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        semiringNumber: semiringNumber, 
        ringNumber: ringNumber, 
        moduloSemiringNumber: moduloSemiringNumber, 
        divisionRingNumber: divisionRingNumber, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        semigroupOrdering: semigroupOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    
    function unsafeIndex(xs) {
      return function(n) {
        return xs[n];
      };
    }
    ;
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    
    function mkFn0(fn) {
      return function() {
        return fn({});
      };
    }
    ;
    
    function mkFn1(fn) {
      return function(a) {
        return fn(a);
      };
    }
    ;
    
    function mkFn2(fn) {
      return function(a, b) {
        return fn(a)(b);
      };
    }
    ;
    
    function mkFn3(fn) {
      return function(a, b, c) {
        return fn(a)(b)(c);
      };
    }
    ;
    
    function mkFn4(fn) {
      return function(a, b, c, d) {
        return fn(a)(b)(c)(d);
      };
    }
    ;
    
    function mkFn5(fn) {
      return function(a, b, c, d, e) {
        return fn(a)(b)(c)(d)(e);
      };
    }
    ;
    
    function mkFn6(fn) {
      return function(a, b, c, d, e, f) {
        return fn(a)(b)(c)(d)(e)(f);
      };
    }
    ;
    
    function mkFn7(fn) {
      return function(a, b, c, d, e, f, g) {
        return fn(a)(b)(c)(d)(e)(f)(g);
      };
    }
    ;
    
    function mkFn8(fn) {
      return function(a, b, c, d, e, f, g, h) {
        return fn(a)(b)(c)(d)(e)(f)(g)(h);
      };
    }
    ;
    
    function mkFn9(fn) {
      return function(a, b, c, d, e, f, g, h, i) {
        return fn(a)(b)(c)(d)(e)(f)(g)(h)(i);
      };
    }
    ;
    
    function mkFn10(fn) {
      return function(a, b, c, d, e, f, g, h, i, j) {
        return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j);
      };
    }
    ;
    
    function runFn0(fn) {
      return fn();
    }
    ;
    
    function runFn1(fn) {
      return function(a) {
        return fn(a);
      };
    }
    ;
    
    function runFn2(fn) {
      return function(a) {
        return function(b) {
          return fn(a, b);
        };
      };
    }
    ;
    
    function runFn3(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a, b, c);
          };
        };
      };
    }
    ;
    
    function runFn4(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return fn(a, b, c, d);
            };
          };
        };
      };
    }
    ;
    
    function runFn5(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return fn(a, b, c, d, e);
              };
            };
          };
        };
      };
    }
    ;
    
    function runFn6(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return fn(a, b, c, d, e, f);
                };
              };
            };
          };
        };
      };
    }
    ;
    
    function runFn7(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return fn(a, b, c, d, e, f, g);
                  };
                };
              };
            };
          };
        };
      };
    }
    ;
    
    function runFn8(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return function(h) {
                      return fn(a, b, c, d, e, f, g, h);
                    };
                  };
                };
              };
            };
          };
        };
      };
    }
    ;
    
    function runFn9(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return function(h) {
                      return function(i) {
                        return fn(a, b, c, d, e, f, g, h, i);
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    }
    ;
    
    function runFn10(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return function(h) {
                      return function(i) {
                        return function(j) {
                          return fn(a, b, c, d, e, f, g, h, i, j);
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    }
    ;
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn10: runFn10, 
        runFn9: runFn9, 
        runFn8: runFn8, 
        runFn7: runFn7, 
        runFn6: runFn6, 
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn10: mkFn10, 
        mkFn9: mkFn9, 
        mkFn8: mkFn8, 
        mkFn7: mkFn7, 
        mkFn6: mkFn6, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    
    function returnE(a) {
      return function() {
        return a;
      };
    }
    ;
    
    function bindE(a) {
      return function(f) {
        return function() {
          return f(a())();
        };
      };
    }
    ;
    
    function runPure(f) {
      return f();
    }
    ;
    
    function untilE(f) {
      return function() {
        while (!f());
        return {};
      };
    }
    ;
    
    function whileE(f) {
      return function(a) {
        return function() {
          while (f()) {
            a();
          }
          return {};
        };
      };
    }
    ;
    
    function forE(lo) {
      return function(hi) {
        return function(f) {
          return function() {
            for (var i = lo; i < hi; i++) {
              f(i)();
            }
          };
        };
      };
    }
    ;
    
    function foreachE(as) {
      return function(f) {
        return function() {
          for (var i = 0; i < as.length; i++) {
            f(as[i])();
          }
        };
      };
    }
    ;
    var monadEff = new Prelude.Monad(function () {
        return applicativeEff;
    }, function () {
        return bindEff;
    });
    var bindEff = new Prelude.Bind(bindE, function () {
        return applyEff;
    });
    var applyEff = new Prelude.Apply(Prelude.ap(monadEff), function () {
        return functorEff;
    });
    var applicativeEff = new Prelude.Applicative(function () {
        return applyEff;
    }, returnE);
    var functorEff = new Prelude.Functor(Prelude.liftA1(applicativeEff));
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    
    function unsafeInterleaveEff(f) {
      return f;
    }
    ;
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Prelude = PS.Prelude;
    
    function newSTRef(val) {
      return function() {
        return { value: val };
      };
    }
    ;
    
    function readSTRef(ref) {
      return function() {
        return ref.value;
      };
    }
    ;
    
    function modifySTRef(ref) {
      return function(f) {
        return function() {
          return ref.value = f(ref.value);
        };
      };
    }
    ;
    
    function writeSTRef(ref) {
      return function(a) {
        return function() {
          return ref.value = a;
        };
      };
    }
    ;
    
    function runST(f) {
      return f;
    }
    ;
    var pureST = function (st) {
        return Control_Monad_Eff.runPure(runST(st));
    };
    return {
        pureST: pureST, 
        runST: runST, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    
    function trace(s) {
      return function() {
        console.log(s);
        return {};
      };
    }
    ;
    var print = function (__dict_Show_17) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_17)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Hello = (function () {
    "use strict";
    var Debug_Trace = PS.Debug_Trace;
    var Prelude = PS.Prelude;
    var main = Debug_Trace.trace("Hello, World!");
    return {
        main: main
    };
})();
PS.Hello.main();