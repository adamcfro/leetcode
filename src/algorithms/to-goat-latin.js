/**
 * Given a string sentence that consist of words separated by spaces where each
 * word consists of lowercase and uppercase letters only, converts the sentence
 * to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat
 * Latin are as follows:
 *   • If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma"
 *     to the end of the word.
 *     • For example, the word "apple" becomes "applema".
 *   • If a word begins with a consonant (i.e., not a vowel), remove the first
 *     letter and append it to the end, then add "ma".
 *     • For example, the word "goat" becomes "oatgma".
 *   • Add one letter 'a' to the end of each word per its word index in the
 *     sentence, starting with 1.
 *     • For example, the first word gets "a" added to the end, the second word
 *       gets "aa" added to the end, and so on.
 * Returns the final sentence representing the conversion from sentence to Goat
 * Latin.
 *
 * @format
 * @param {string} sentence - A string of English letters
 * @returns {string} - Returns the string converted to Goat Latin
 */

function toGoatLatin(sentence) {
  let res = "";
  let suffix = "maa";
  const vowels = "aeiouAEIOU";
  const words = sentence.split(" ");
  for (const word of words) {
    if (res !== "") {
      res += " ";
    }
    if (vowels.includes(word[0])) {
      res += word + suffix;
    } else {
      res = res + word.slice(1) + word[0] + suffix;
    }
    suffix += "a";
  }
  return res;
}
