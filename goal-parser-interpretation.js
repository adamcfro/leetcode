/**
 * Returns the goal parser's interpretation of the string command. 
 * 
 * The command consists of an alphabet of 'G', '()', and/or '(al)'. The goal
 * parser will interpret 'G' as the string 'G', '()' as the string 'o', and
 * '(al)' as the string 'al'.
 * 
 * @param {string} command -  A string parameter
 * @returns {string} - Returns a parsed string
 */
function interpret (command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
}