console.log("string method: length");
const str = "Marcus Silva";
console.log(str.length);
console.log("\n");

console.log("string method: trim()");
const fname = "    Marcus";
console.log(fname.trim());
console.log("\n");

console.log("string method: inludes()");
console.log(str.includes("Marcus")); // true
console.log("\n");

console.log("string method: indexOf()");
console.log(str.indexOf("v"));
console.log("\n");

console.log("string method: lastIndexOf()");
console.log(str.lastIndexOf("a"));
console.log("\n");

console.log("string method: toUpperCase()");
console.log(str.toUpperCase());
console.log("\n");

console.log("string method: toLowerCase()");
console.log(str.toLowerCase());
console.log("\n");

console.log("string method: replace()");
console.log(str.replace("Marcus", "Luís")); // Luís Silva
console.log("\n");

console.log("string method: slice()");
console.log(str.slice(2)); // rcus Silva
console.log("\n");

console.log("string method: split()");
console.log(str.split(" ")); // return an array ["Marcus", "Silva"]
console.log("\n");

console.log("string method: charAt()");
console.log(str.charAt(1)); // a
console.log("\n");

console.log("string method: search()");
console.log(str.search("Silva")); // 7
console.log("\n");

console.log("string method: substring()");
console.log(str.substring(0, 3)); // Mar
