/*jshint globalstrict: true */
'use strict';

 var fib = function fib(arg) {
    if (arg <= 0) {
        return 0;
    }
    if (arg === 1) {
        return 1;
    }
    return fib(arg - 1) + fib(arg - 2);
};

var memo = function (cache, fun){
    var funWithMemo = function(n){
        var result = cache(n);
        if (result === undefined){
            result = fun(funWithMemo, n);
            cache[n] = result;
        }
        return result;
    };
    return funWithMemo;
};   
    
    if (cache[n] == undefined) {
        return cache(n)
    }else{
        oblicz(f(n));
        zapisz(f(n), cache);
        return f(n);
    }
}