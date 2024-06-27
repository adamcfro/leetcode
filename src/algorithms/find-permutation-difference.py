def find_permutation_difference(s, t):
    """Returns the permutation difference between s and t.

    You are given two strings s and t such that every character occurs at most
    once in s and t is a permutation of s. The permutation difference between s
    and t is defined as the sum of the absolute difference between the index of
    the occurrence of each character in s and the index of the occurrence of
    the same character in t. Return the permutation difference between s and t.

    Args:
        s (string): A string of lowercase English letters.
        t (string): A string of lowercase English letters.

    Returns:
        Integer: Returns the permutation difference between s and t.
    """
    res = 0
    for i in range(len(s)):
        for j in range(len(t)):
            if i != j and s[i] == t[j]:
                res += abs(i - j)
    return res
