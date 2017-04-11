let str, rgx;

str = `Mouse house`;

// "constructor" or "literal" method
rgx = new RegExp("house");
rgx = /house/;

// RegExp .test returns bool
console.log(rgx.test(str)); // true

// `g` global flag search entire string
rgx = new RegExp("use", "g");
rgx = /use/g;

// .exec state aware (loops to start after null)
console.log(rgx.exec(str)); // [ 'use', index: 2, input: 'Mouse house' ]
console.log(rgx.exec(str)); // [ 'use', index: 8, input: 'Mouse house' ]
console.log(rgx.exec(str)); // null

str = `Rat bag brat`;

// `i` case insensitive/ignore
rgx = new RegExp("rat", "gi");
rgx = /rat/gi;

// String .match returns array
console.log(str.match(rgx)); // [ 'Rat', 'rat' ]

// String .replace
console.log(str.replace(rgx, str => `zzz`)); // zzz bag bzzz

// Simple console log matcher
const match = (st,rx) => console.log(st.match(rx,st));

// `.` special char matches any single character
str = `Red bed.`;
rgx = /.ed/g;
match(str, rgx); // [ 'Red', 'bed' ]

rgx = /.../g;
match(str, rgx); // [ 'Red', ' be' ]

// `\` escape character
rgx = /\./g;
match(str, rgx); // [ '.' ]

// `{n}` quantifier
str = `aaaaa`;
rgx = /a{3}/g;
match(str, rgx); // [ 'aaa' ]

// `{min, max}` quantifier
rgx = /a{2,5}/g;
match(str, rgx); // [ 'aaaaa' ]


