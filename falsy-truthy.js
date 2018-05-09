if (false)        {} else {console.log("false is falsy");}
if (null)         {} else {console.log("null is falsy");}
var a;
if (undefined)    {} else {console.log("undefined is falsy");}
if (0)            {} else {console.log("0 is falsy");}
a = 1;
if (NaN)          {} else {console.log("Nan is falsy");}
if ('')           {} else {console.log("an empty string with single-quotes is falsy");}
if ("")           {} else {console.log("an empty string with double-quotes is falsy");}

// Everything else if truthy

if (true)           { console.log("true is truthy");}
a = 2;
if ({})             { console.log("an empty object is truthy");}
if ([])             { console.log("an empty array is truthy");}
if ('bob')          { console.log("an non-empty string is truthy");}
a = 3;
if (new RegExp())   { console.log("a new instance of an object is truthy");}
if (10)             { console.log("positive integers are truthy");}
a = 4;
if (-10)            { console.log("negative integers are truthy");}
if (1.23)           { console.log("positive floats are truthy");}
if (-1.23)          { console.log("negative floats are truthy");}
if (Infinity)       { console.log("positive infinity is truthy");}



