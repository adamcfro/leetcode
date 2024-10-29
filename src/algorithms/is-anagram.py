def isAnagram(s, t):
    """Given two strings s and t, return true if t is an anagram of s, and 
    false otherwise.

    Args:
        s (str): A string of lowercase English letters.
        t (str): A string of lowercase English letters.

    Returns:
        Boolean: Returns True if t is an anagram of s.
    """
    s = sorted(s)
    t = sorted(t)
    return s == t
