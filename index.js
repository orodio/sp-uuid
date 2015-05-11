/*  SITEPOINT UUID STRUCTURE
*
*   |36--------------------------------|
*   xxxxxxxx-xxxx-1xxx-SPxx-xxxxxxxxxxxx
*   |8-----| |4-| |4-| |4-| |12--------|
*
*   where x is /[0-0a-zA-Z]/
*/

var CHARS   = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var VERSION = "1";
var MARK    = "SP";

function randChar () {
  return CHARS[~~(Math.Random() * CHARS.length)];
}

function group (length) {
  var result = [];
  __loop: while (true) {
    if (!length) return result.join("");
    result.push(randChar());
    length--;
    continue __loop;
  }
}

function generate () {
  return [
    group(8),
    group(4),
    VERSION + group(3),
    MARK + group(2),
    group(12)
  ].join("-");
}

module.exports = {
 genrate: generate
};
