let str, rgx;

str = `Mouse house`;

// "constructor" or "literal" method
rgx = new RegExp("house");
rgx = /house/;

// RegExp .test
console.log(rgx.test(str)); // true

// `g` global flag
rgx = new RegExp("use", "g");
rgx = /use/g;

// .exec
console.log(rgx.exec(str)); // [ 'use', index: 2, input: 'Mouse house' ]
console.log(rgx.exec(str)); // [ 'use', index: 8, input: 'Mouse house' ]
console.log(rgx.exec(str)); // null

str = `Rat bag brat`;

// `i` case insensitive/ignore
rgx = new RegExp("rat", "gi");
rgx = /rat/gi;

// String .match
console.log(str.match(rgx)); // [ 'Rat', 'rat' ]

// String .replace
console.log(str.replace(rgx, str => `zzz`)); // zzz bag bzzz

// Simple console log matcher
const match = (s,r) => console.log(s.match(r,s).join());

// . special char
str = `Red bed`;
rgx = /.ed/g;
match(str, rgx); // Red,bed

