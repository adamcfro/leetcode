def mergeAlternately(word1, word2):
    """You are given two strings word1 and word2. Merge the strings by adding 
    letters in alternating order, starting with word1. If a string is longer 
    than the other, append the additional letters onto the end of the merged 
    string. Return the merged string.

    Args:
        word1 (string): A string of lowercase English letters.
        word2 (string): A string of lowercase English letters.

    Returns:
        string: Returns a merged string.
    """
    res = []
    word1_length = len(word1)
    word2_length = len(word2)
    i = 0
    j = 0
    while i < word1_length or j < word2_length:
        if i < word1_length:
            res += word1[i]
            i += 1
        if j < word2_length:
            res += word2[j]
            j += 1
    return "".join(res)
