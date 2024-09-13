def reverse_only_letters(s):
    """Given a string s, reverse the string according to the following rules:
    • All the characters that are not English letters remain in the same 
    position.
    • All the English letters (lowercase or uppercase) should be reversed.
    Return s after reversing it.

    Args:
        s (str): A string of characters with ASCII values in the range [33, 122]

    Returns:
        str: Returns a modified string.
    """
    s = list(s)
    left = 0
    right = len(s) - 1
    while left < right:
        if not s[left].isalpha():
            left += 1
        elif not s[right].isalpha():
            right -= 1
        else:
            s[right], s[left] = s[left], s[right]
            left += 1
            right -= 1
    return "".join(s)
