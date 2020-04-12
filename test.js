const nf = require('./index');

//Milliseconds

//To Number
console.log("Milliseconds:\n",
nf.toMilliseconds({year: 1, month: 5, s:40000e2}), "\n",
nf.toMilliseconds({year: 2, month: 3, w: 2937, s:10000e2}));

//Formatted
console.log("\n\nFormatted milliseconds\n",
nf.toFormatMilliseconds(128947219e2, false), "\n",
nf.toFormatMilliseconds(1289479e6, true));


//Numbers

//To Number
console.log("\n\nNumber\n",
nf.toNumber({m: 1298, k: 1234, billion: 123}), "\n",
nf.toNumber({m: 2, k: 1234, billion: 123}));

//Formatted
console.log("\n\nFormatted numbers:\n",
nf.toFormattedNumbers(120983210948012874129714981, {long: false, longNumber: false}), "\n",
nf.toFormattedNumbers(120983210948012874129714981, {long: true, longNumber: true}));

//Format Number with dots/commas
console.log("\n\nAdd formatting to a numbers line\n",
nf.toFormatNumber(192873129837123.6, {point: false}), "\n",
nf.toFormatNumber(19212123123131, {point: true}));

