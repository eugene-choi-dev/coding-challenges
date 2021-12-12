function XO(str) {
    return str.replace(/[Oo]/g, '').length ===  str.replace(/[Xx]/g, '').length
}

console.log(XO("ooxx")); //true
console.log(XO("xooxx")); //false
console.log(XO("ooxXm")); //true
console.log(XO("zpzpzpp")); //true
console.log(XO("zzoo")); //false
