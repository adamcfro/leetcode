def uncommon_from_sentences(s1, s2):
    """A sentence is a string of single-space separated words where each word 
    consists only of lowercase letters. A word is uncommon if it appears 
    exactly once in one of the sentences, and does not appear in the other 
    sentence. Given two sentences s1 and s2, return a list of all the uncommon 
    words. You may return the answer in any order.

    Args:
        s1 (str): A string of lowercase English letters and spaces.
        s2 (str): A string of lowercase English letters and spaces.

    Returns:
        list[str]: Returns a list of unique words found in s1 and s2.s
    """
    res = []
    seen = {}
    s1 = s1.split()
    s2 = s2.split()
    for word in s1:
        if word in seen:
            seen[word] += 1
        else:
            seen[word] = 1
    for word in s2:
        if word in seen:
            seen[word] += 1
        else:
            seen[word] = 1
    for key, val in seen.items():
        if val == 1:
            res.append(key)
    return res
