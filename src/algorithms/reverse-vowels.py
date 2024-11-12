def reverseVowels(s):
    """Given a string s, reverse only all the vowels in the string and return 
    it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
    lower and upper cases, more than once.

    Args:
        s (str): A string of English letters.

    Returns:
        str: Returns a modified string.
    """
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    s = list(s)
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] not in vowels:
            left += 1
        elif s[right] not in vowels:
            right -= 1
        else:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
    return "".join(s)
