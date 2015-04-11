// This file contains utility functions that are exposed game-side

/**
  * Choose a random number between a and b.
  * @example randRange([a, b], bipolar)
  * @example randRange(a, b, bipolar)
  * @arg {number} a
  * @arg {number} b
  * @arg {boolean} [bipolar] - If true, then the returned value will be inverted half of the time
  * @returns {number}
  */
randRange = function(a, b, bipolar) {
  if (typeof(a) === 'object') {
    bipolar = b;
    b = a[1];
    a = a[0];
  }

  var low, high;
  if (a < b) {
    low = a;
    high = b;
  } else {
    low = b;
    high = a;
  }

  var n = Math.random() * (high - low) + low;
  if (bipolar && Math.random() < .5) n *= -1;
  return n;
};

/**
  * Choose a random int between a and b
  * @arg {number} a
  * @arg {number} b
  * @returns {int}
  */
randRangeI = function(a, b) {};

/**
 * Merges object b into object a. This is destructive, object a will be changed
 * regardless of the return value. Keys in object b will overwrite those already
 * existing in object a.
 * @arg {object} - The base object
 * @arg {object} - The object whose values will will be overlayed on a
 * @returns {object} The updated {@link a}
 */
combine = function(a, b) {
  for (var k in b) a[k] = b[k];
  return a;
};

/**
  * Choose a random element from {@link array}
  * @arg {array} array
  * @returns {object} A random element from {@link array}
  */
choose = function(array) {};
