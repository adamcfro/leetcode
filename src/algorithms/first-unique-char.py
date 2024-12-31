from collections import Counter


def firstUniqChar(s):
    """Given a string s, find the first non-repeating character in it and 
    return its index. If it does not exist, return -1.

    Args:
        s (str): A string of lowercase English letters.

    Returns:
        int: Returns an index.
    """
    count = Counter(s)
    for key, val in count.items():
        if val == 1:
            return s.index(key)
    return -1
