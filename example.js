#!/usr/bin/env node

var chop = require("./chop");

console.log(chop.chop("Howdy!"));
console.log(chop.chop("Howdy!\n"));
console.log(chop.chop("Howdy!\n\n"));
console.log(chop.chop("Howdy!\r\n"));
console.log(chop.chomp("Howdy!\n\n"));
console.log(chop.chomp("Howdy!\r\n"));
