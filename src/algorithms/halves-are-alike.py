def halvesAreAlike(s):
    """You are given a string s of even length. Split this string into two 
    halves of equal lengths, and let a be the first half and b be the second 
    half. Two strings are alike if they have the same number of vowels ('a', 
    'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains 
    uppercase and lowercase letters. Return true if a and b are alike. 
    Otherwise, return false.

    Args:
        s (str): A string of uppercase and lowercase English letters.

    Returns:
        Boolean: Returns true if the two halves of strings contain the same
        number of vowels.
    """
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    half = len(s) // 2
    left = 0
    right = 0
    for i in range(len(s)):
        if i < half:
            if s[i] in vowels:
                left += 1
        else:
            if s[i] in vowels:
                right += 1
    return left == right
