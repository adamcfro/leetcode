def areOccurrencesEqual(s):
    """Given a string s, return true if s is a good string, or false otherwise.
    A string s is good if all the characters that appear in s have the same 
    number of occurrences (i.e., the same frequency).

    Args:
        s (str): A string of lowercase English letters.

    Returns:
        Boolean: Returns True if all characters in s have the same frequency.
    """
    chars = {}
    for char in s:
        if char in chars:
            chars[char] += 1
        else:
            chars[char] = 1
    checkNumber = chars[s[0]]
    for val in chars.values():
        if val != checkNumber:
            return False
    return True
