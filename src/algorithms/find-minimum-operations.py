def findMinimumOperations(s1, s2, s3):
    """You are given three strings: s1, s2, and s3. In one operation you can 
    choose one of these strings and delete its rightmost character. Note that 
    you cannot completely empty a string. Return the minimum number of 
    operations required to make the strings equal. If it is impossible to make 
    them equal, return -1.

    Args:
        s1 (str): A string of lowercase English letters.
        s2 (str): A string of lowercase English letters.
        s3 (str): A string of lowercase English letters.

    Returns:
        int: Returns the number of operations required to make strings equal.
    """
    length = min(len(s1), len(s2), len(s3))
    i = 0
    while i < length:
        if s1[i] != s2[i] or s1[i] != s3[i]:
            break
        i += 1
    if i == 0:
        return -1
    return len(s1) + len(s2) + len(s3) - 3 * i
