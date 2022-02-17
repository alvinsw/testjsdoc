//@ts-check

/**
 * @typedef {Object} Toast
 * @property {string} id
 */

/** 
 * Class representing a language. 
 * # Test markdown
 * 
 */
class Lang {
  
  /**
   * Convert a string to Lang.
   * @param {string} str - The string containing name of language.
   * @return {Lang} A Lang object.
   */
  static fromString(str) {
    return new Lang(str);
  }
  
  /**
   * Add a string to Lang.
   * @param {string} item - Test string.
   * @return boolean A flag.
   */
  add(item) {
    return true;
  }
  /**
   * 
   * @param {string} item abcd
   * @return {boolean} xxxx
   */
  remove(item) {
    
    return true;
  }
}

module.exports = Lang;
var test = new Lang();
/** @type{number} */
let r;
r = 'test';
