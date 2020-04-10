let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;
let w = d * 7;
let mo = d * 1461/48;
let y = d * 365.25;

const toMillisecondsConverter = {
    ms: number => number,
    s: number => number * s,
    m: number => number * m,
    h: number => number * h,
    d: number => number * d,
    w: number => number * w,
    mo: number => number * mo,
    y: number => number * y
};

const toFormattedMillisecondsConverter = {
    y: number => Math.floor(number/y),
    mo: number => Math.floor(number/mo),
    w: number => Math.floor(number/w),
    d: number => Math.floor(number/d),
    h: number => Math.floor(number/h),
    m: number => Math.floor(number/m),
    s: number => Math.floor(number/s)
};

const translateTimeKeys = {
    millisecond: "ms",
    milliseconds: "ms",
    second: "s",
    seconds: "s",
    minute: "m",
    minutes: "m",
    hour: "h",
    hours: "h",
    day: "d",
    days: "d",
    week: "w",
    weeks: "w",
    month: "mo",
    months: "mo",
    year: "y",
    years: "y",
    ms: "millisecond",
    s: "second",
    m: "minute",
    h: "hour",
    d: "day",
    w: "week",
    mo: "month",
    y: "year"
};

const toMilliseconds = object => Object.entries(object).reduce((milliseconds, [key, number])=> {
    if(typeof number !== "number") throw new Error(`This doesn't include a variable`);
    if(!Object.keys(toMillisecondsConverter).find(keys => keys === key.toLowerCase())) key = translateTimeKeys[key.toLowerCase()];
    if(!key) throw new Error(`That format is not supported!`);
    return milliseconds + toMillisecondsConverter[key](number);
}, 0);

/**
 * 
 * @param {Number} number 
 * @param {boolean} options
 * 
 */

const toFormatMilliseconds = function(number, options) {
    number = Math.abs(number);
    if(number <= 0) return "Zero";
    let formatted = [];
    for(let [key, value] of Object.entries(toFormattedMillisecondsConverter)) {
        value = toFormattedMillisecondsConverter[key](number);
        number -= toMillisecondsConverter[key](value);
        if(value > 0) {
            if(options) formatted.push(`${value} ${translateTimeKeys[key]}${(value > 1)? "s":""}`);
            else formatted.push(value + key);
        } 
    }
    return formatted.join(" ");
};


let k = 1000;
let mi = k * k;
let b = mi * k;
let t = b * k;
let qd = t * k;
let qt = qd * k;
let sx = qt * k;

const toNumbersConverter = {
    k: number => number * k,
    m: number => number * mi,
    b: number => number * b,
    t: number => number * t,
    qd: number => number * qd,
    qt: number => number * qt,
    s: number => number * sx,
};

const toFormattedNumbersConverter = {
    s: number => (number/sx).toFixed(1),
    qt: number => (number/qt).toFixed(1),
    qd: number => (number/qd).toFixed(1),
    t: number => (number/t).toFixed(1),
    b: number => (number/b).toFixed(1),
    m: number => (number/mi).toFixed(1),
    k: number => (number/k).toFixed(1) 
};

const translateNumberKeys = {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
    quadrillion: "qd",
    quintillion: "qt",
    sextillion: "s",
    k: "thousand",
    m: "million",
    b: "billion",
    t: "trillion",
    qd: "quadrillion",
    qt: "quintillion",
    s: "sextillion"
};

const toNumber = object => Object.entries(object).reduce((totalNumber, [key, number]) => {
    if(typeof number !== "number") throw new Error(`This doesn't include a variable`);
    if(!Object.keys(toNumbersConverter).find(keys => keys === key.toLowerCase())) key = translateNumberKeys[key.toLowerCase()];
    if(!key) throw new Error(`That format is not supported!`);
    return totalNumber + toNumbersConverter[key](number);

}, 0);

/**
 * 
 * @param {Number} number
 * @param {boolean} options
 * 
 */

const toFormattedNumbers = function (number, options) {
    number = Math.abs(number);
    if(number < 1000) return number;
    let formatted = [];
    for(let [key, value] of Object.entries(toFormattedNumbersConverter)) {
        value = toFormattedNumbersConverter[key](number);
        if(value > 1) {
            if(options) formatted.push(`${value} ${translateNumberKeys[key]}`);
            else formatted.push(value + key);
        }
    }
    return formatted[0];
};

console.log("\n" + toMilliseconds({week: 40, year: 1}) + "\n");
console.log(toFormatMilliseconds(5500000000000, true) + "\n");
console.log(toNumber({million: 32, thousand: 3}) + "\n");
console.log(toFormattedNumbers(5600000000000, true) + "\n");