"use strict";

var
assert = require("assert"),
chop = require("../lib/chop");

describe("chop", function() {
  describe("chop", function() {
    it("should handle EOLs", function() {
      assert.equal("abc", chop.chop("abc\n"));
      assert.equal("abc", chop.chop("abc\r"));
      assert.equal("abc\r", chop.chop("abc\r\n"));
    });

    it("should handle no EOLs", function() {
      assert.equal("ab", chop.chop("abc"));
      assert.equal("a", chop.chop("ab"));
      assert.equal("", chop.chop("a"));
      assert.equal("", chop.chop(""));
    });
  });

  describe("chomp", function() {
    it("should handle EOLs", function() {
      assert.equal("abc", chop.chomp("abc\n"));
      assert.equal("abc", chop.chomp("abc"));
      assert.equal("abc", chop.chomp("abc\r"));
      assert.equal("abc", chop.chomp("abc\r\n"));
    });

    it("should handle no EOLs", function() {
      assert.equal("abc", chop.chomp("abc"));
      assert.equal("ab", chop.chomp("ab"));
      assert.equal("a", chop.chomp("a"));
      assert.equal("", chop.chomp(""));
    });
  });
});
