"use strict";

function chop(s) {
  console.assert(typeof s === "string");

  return s.slice(0, s.length - 1);
}

exports.chop = chop;

function chomp(s) {
  console.assert(typeof s === "string");

  if (s.length < 1) {
    return s;
  }
  else {
    var result = s.slice(0, s.length);

    while (result.length > 1 && (result[result.length - 1] === "\n" || result[result.length - 1] === "\r")) {
      result = result.slice(0, result.length - 1);
    }

    return result;
  }
}

exports.chomp = chomp;
