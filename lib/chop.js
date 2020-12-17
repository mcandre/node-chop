'use strict';

/**
 * chop forcibly removes the last character.
 *
 * @param {string} s original
 *
 * @returns reduced string
 */
function chop(s) {
    return s.slice(0, s.length - 1);
}

exports.chop = chop;

/**
 * chomp removes any trailing CR/LF/CRLF's if present.
 *
 * @param {string} s original
 *
 * @returns string sans line endings
 */
function chomp(s) {
    if (s.length < 1) {
        return s;
    }

    let result = s.slice(0, s.length);

    while (result.length > 1 && (result[result.length - 1] === '\n' || result[result.length - 1] === '\r')) {
        result = result.slice(0, result.length - 1);
    }

    return result;
}

exports.chomp = chomp;
