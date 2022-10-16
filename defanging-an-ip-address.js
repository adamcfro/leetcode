/**
 * Given a valid (IPv4) IP `address`, return a defanged version of that address.
 * 
 * @param {string} address - A string representation of an IPv4 address
 * @returns {string} - Returns a modified string
 */
function defangIPaddr (address) {
  return address.replaceAll('.', '[.]');
}