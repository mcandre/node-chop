'use strict';

var c = require('rho-contracts');


var chop = c.fun({s: c.string})
    .returns(c.string)
    .wrap(function(s) {
        return s.slice(0, s.length - 1);
    });

exports.chop = chop;

var chomp = c.fun({s: c.string})
    .returns(c.string)
    .wrap(function(s) {
        if (s.length < 1) {
            return s;
        } else {
            var result = s.slice(0, s.length);

            while (result.length > 1 && (result[result.length - 1] === '\n' || result[result.length - 1] === '\r')) {
                result = result.slice(0, result.length - 1);
            }

            return result;
        }
    });

exports.chomp = chomp;
